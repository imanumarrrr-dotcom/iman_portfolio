// Cloudflare Worker: a tiny, locked-down proxy so visitors can chat with the AI without your API key ever reaching the browser.
// Deploy: see worker/README.md. Secrets: OPENAI_API_KEY (wrangler secret). Vars: ALLOWED_ORIGINS, MODEL.
const SYSTEM = 'You are the portfolio assistant for Iman Umar. Answer ONLY using the CONTEXT passages. If the answer is not in the context, say you do not know and suggest contacting Iman. Be concise (under 120 words), friendly and factual. Never invent employers, dates, links or skills.';
const hits = new Map(); // per-isolate rate limit (add a Cloudflare Rate Limiting rule for a hard guarantee)
const LIMIT = 12, WINDOW = 60_000;

const json = (obj, status, cors) => new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json', ...cors } });
const str = (v, n) => typeof v === 'string' && v.length > 0 && v.length <= n;

export function validate(b) {
  if (!b || !str(b.question, 500)) return 'question must be 1-500 characters';
  if (!Array.isArray(b.passages) || b.passages.length > 6) return 'passages must be an array of at most 6';
  for (const p of b.passages) if (!p || !str(p.title, 120) || !str(p.text, 1500)) return 'invalid passage';
  const h = b.history ?? [];
  if (!Array.isArray(h) || h.length > 6) return 'history must be an array of at most 6';
  for (const m of h) if (!m || !['user', 'assistant'].includes(m.role) || !str(m.content, 600)) return 'invalid history item';
  return '';
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
    const isAllowed = allowed.includes(origin) || (env.ALLOW_LOCALHOST === '1' && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin));
    const cors = isAllowed ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } : { Vary: 'Origin' };
    if (request.method === 'OPTIONS') return new Response(null, { status: isAllowed ? 204 : 403, headers: cors });
    if (!isAllowed) return json({ error: 'Origin not allowed' }, 403, cors);
    if (request.method !== 'POST') return json({ error: 'POST only' }, 405, cors);
    if (!env.OPENAI_API_KEY) return json({ error: 'Server is not configured' }, 500, cors);

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown', now = Date.now();
    const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
    if (recent.length >= LIMIT) return json({ error: 'Too many requests' }, 429, cors);
    recent.push(now); hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();

    let body; try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, cors); }
    const bad = validate(body); if (bad) return json({ error: bad }, 400, cors);

    const context = body.passages.map((p, i) => `[${i + 1}] ${p.title}: ${p.text}`).join('\n\n');
    const messages = [{ role: 'system', content: `${SYSTEM}\n\nCONTEXT:\n${context}` }, ...(body.history ?? []), { role: 'user', content: body.question }];
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: env.MODEL || 'gpt-4o-mini', messages, stream: true, temperature: 0.3, max_tokens: 350 }),
    });
    if (!upstream.ok) return json({ error: 'AI service unavailable' }, 502, cors); // never leak upstream details
    return new Response(upstream.body, { status: 200, headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', ...cors } });
  },
};
