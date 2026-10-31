// Tiny in-browser "RAG": BM25 retrieval over curated notes + an optional OpenAI streaming call.
// No DOM here, so it can be tested in Node. The API key is passed in per call and never stored.
const STOP = new Set('a an and are as at be by can did do does for from has have how i in is it its me my of on or she her he his that the their them this to was what when where which who why will with you your about tell show give iman umar please'.split(' '));
const SYN = { intern: 'internship', interned: 'internship', jobs: 'experience', job: 'experience', work: 'experience', uni: 'education', university: 'education', college: 'education', degree: 'education',
  mail: 'email', hire: 'available', hiring: 'available', reach: 'contact', phone: 'contact', skill: 'skills', stack: 'skills', tech: 'skills', technologies: 'skills', languages: 'skills',
  built: 'project', build: 'project', made: 'project', apps: 'project', app: 'project', ecommerce: 'ceramichub', shop: 'ceramichub', store: 'ceramichub', finance: 'finwise', budget: 'finwise', money: 'finwise',
  medical: 'mediguide', health: 'mediguide', symptom: 'mediguide', symptoms: 'mediguide', research: 'marketmind', market: 'marketmind', support: 'supportpearlz', pearl: 'supportpearlz', docs: 'minddesk', documents: 'minddesk', excel: 'minddesk', pdf: 'ragagent', pdfs: 'ragagent', docmind: 'ragagent', chatgpt: 'customai', chat: 'customai', resume: 'cv' };

export function tokenize(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9+#\s]/g, ' ').split(/\s+/).filter(Boolean)
    .map((w) => SYN[w] || w).map((w) => (w.length > 4 ? w.replace(/(ing|ed|es|s)$/, '') : w)).filter((w) => w && !STOP.has(w));
}

export class Retriever {
  constructor(docs) {
    this.docs = docs;
    this.tokens = docs.map((d) => tokenize(`${d.title} ${d.title} ${d.tags} ${d.text}`));
    this.avg = this.tokens.reduce((s, t) => s + t.length, 0) / Math.max(1, docs.length);
    this.df = new Map();
    this.tokens.forEach((t) => new Set(t).forEach((w) => this.df.set(w, (this.df.get(w) || 0) + 1)));
  }
  search(query, k = 3) {
    const q = tokenize(query), N = this.docs.length, k1 = 1.4, b = 0.75;
    const scored = this.docs.map((doc, i) => {
      const tf = new Map();
      this.tokens[i].forEach((w) => tf.set(w, (tf.get(w) || 0) + 1));
      let score = 0;
      q.forEach((w) => {
        const f = tf.get(w) || 0;
        if (!f) return;
        const idf = Math.log(1 + (N - (this.df.get(w) || 0) + 0.5) / ((this.df.get(w) || 0) + 0.5));
        score += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * this.tokens[i].length) / this.avg)));
      });
      return { doc, score };
    }).filter((r) => r.score > 0).sort((a, b2) => b2.score - a.score);
    return scored.slice(0, k);
  }
}

export function answerLocal(retriever, query) {
  const hits = retriever.search(query, 3);
  if (!hits.length || hits[0].score < 0.6) {
    return { text: "I only know what is on this page — Iman's projects, skills, internships and how to reach her. Try asking about one of those, or type 'help'.", sources: [] };
  }
  const best = hits[0].doc;
  const more = hits.slice(1).filter((h) => h.score > hits[0].score * 0.45).map((h) => h.doc.title);
  return { text: best.text, sources: [best.title, ...more] };
}

const SYSTEM = (name) => `You are the portfolio assistant for ${name}. Answer ONLY using the CONTEXT passages. If the answer is not in the context, say you do not know and suggest contacting ${name}. Be concise (under 120 words), friendly and factual. Never invent employers, dates, links or skills.`;

export async function validateKey(key, fetchImpl = fetch) {
  try {
    const r = await fetchImpl('https://api.openai.com/v1/models', { headers: { Authorization: `Bearer ${key}` } });
    if (r.ok) return { ok: true };
    if (r.status === 401) return { ok: false, error: 'OpenAI rejected this key.' };
    return { ok: false, error: `OpenAI answered with status ${r.status}.` };
  } catch {
    return { ok: false, error: 'Could not reach OpenAI (network or browser block).' };
  }
}

export async function askOpenAI({ key, model, name, question, passages, history = [], onToken, signal, fetchImpl = fetch }) {
  const context = passages.map((p, i) => `[${i + 1}] ${p.title}: ${p.text}`).join('\n\n');
  const messages = [{ role: 'system', content: `${SYSTEM(name)}\n\nCONTEXT:\n${context}` }, ...history.slice(-6), { role: 'user', content: question }];
  const r = await fetchImpl('https://api.openai.com/v1/chat/completions', {
    method: 'POST', signal, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model, messages, stream: true, temperature: 0.3, max_tokens: 400 }),
  });
  if (!r.ok) {
    const map = { 401: 'The API key was rejected.', 429: 'Rate limit or quota reached on this key.' };
    throw new Error(map[r.status] || `OpenAI error (status ${r.status}).`);
  }
  const reader = r.body.getReader(), dec = new TextDecoder();
  let buf = '', full = '';
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      const s = line.trim();
      if (!s.startsWith('data:')) continue;
      const data = s.slice(5).trim();
      if (data === '[DONE]') return full;
      try {
        const tok = JSON.parse(data).choices?.[0]?.delta?.content;
        if (tok) { full += tok; onToken?.(tok); }
      } catch { /* ignore keep-alive / partial lines */ }
    }
  }
  return full;
}
