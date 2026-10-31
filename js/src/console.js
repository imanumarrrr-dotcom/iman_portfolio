// The "Lab" console: asks for an OpenAI key first (GPT mode) or lets the visitor skip to local mode.
// Local mode = BM25 retrieval over curated notes. GPT mode = the same retrieval, then a streamed OpenAI answer.
import { Retriever, answerLocal, askOpenAI, validateKey } from './rag.js';

export function initConsole({ config, projects, knowledge, suggestions, themes, setTheme, openProject, reduced }) {
  const root = document.getElementById('term');
  if (!root) return;
  const out = root.querySelector('#term-out'), form = root.querySelector('#term-form'), input = root.querySelector('#term-in');
  const modeEl = document.getElementById('term-mode'), chips = document.getElementById('term-chips');
  if (!out || !form || !input) return;
  const retriever = new Retriever(knowledge);
  let key = '', mode = 'boot', busy = false, awaitingKey = true, controller = null;
  const hist = [], gpt = [];
  let hi = -1;

  const scroll = () => { out.scrollTop = out.scrollHeight; };
  function line(text, cls = '') { const d = document.createElement('div'); d.className = `ln ${cls}`.trim(); d.textContent = text; out.appendChild(d); scroll(); return d; }
  function setMode(m) {
    mode = m;
    if (modeEl) { modeEl.textContent = m === 'gpt' ? 'GPT MODE' : m === 'local' ? 'LOCAL MODE' : 'LOCKED'; modeEl.dataset.mode = m; }
    chips?.querySelectorAll('button').forEach((b) => { b.disabled = m === 'boot'; });
  }
  function typeInto(el, text) {
    return new Promise((res) => {
      if (reduced) { el.textContent = text; scroll(); return res(); }
      let i = 0; const step = Math.max(2, Math.round(text.length / 90));
      const id = setInterval(() => { i += step; el.textContent = text.slice(0, i); scroll(); if (i >= text.length) { clearInterval(id); res(); } }, 16);
    });
  }
  function boot() {
    setMode('boot'); awaitingKey = true; input.type = 'password'; input.placeholder = 'Paste your sk-… key, or type skip';
    line('iman-lab ▸ a tiny RAG console about Iman’s work', 'dim');
    line('GPT mode needs your OpenAI API key. It stays in this tab’s memory and is sent only to api.openai.com.');
    line('Paste the key and press Enter, or type  skip  to use local mode (no key, no network).', 'hint');
  }
  function ready(m) {
    awaitingKey = false; input.type = 'text'; input.placeholder = 'Ask about projects, skills, internships… (type help)'; setMode(m);
    line(m === 'gpt' ? 'GPT mode on. Answers are written by the model from retrieved notes.' : 'Local mode on. Answers are matched from curated notes (no AI model involved).', 'ok');
    line('Try: "What did Iman build?"  ·  type help for commands.', 'hint');
  }

  async function handleKey(v) {
    if (v.toLowerCase() === 'skip') return ready('local');
    if (!/^sk-/.test(v)) { line('That does not look like an OpenAI key (it starts with sk-). Try again or type skip.', 'err'); return; }
    busy = true; const w = line('Verifying key with OpenAI…', 'dim');
    const r = await validateKey(v);
    busy = false; w.remove();
    if (r.ok) { key = v; ready('gpt'); } else line(`${r.error} Try again or type skip.`, 'err');
  }

  const HELP = ['help          show this list', 'projects      list all projects (open <id> opens one)', 'skills        my tech stack', 'about         who I am', 'contact       how to reach me',
    'cv            download the CV', `theme <${Object.keys(themes).join('|')}>  switch theme`, 'mode          show the current mode', 'key           enter an API key for GPT mode', 'forget        remove the key from memory', 'clear         clear the screen'];

  async function command(v) {
    const [cmd, ...rest] = v.split(/\s+/), arg = rest.join(' ').toLowerCase();
    switch (cmd.toLowerCase()) {
      case 'help': HELP.forEach((h) => line(h, 'dim')); return true;
      case 'clear': out.textContent = ''; return true;
      case 'mode': line(`Current mode: ${mode}${mode === 'gpt' ? ` (${config.openaiModel})` : ''}`, 'ok'); return true;
      case 'key': key = ''; boot(); return true;
      case 'forget': key = ''; gpt.length = 0; line('Key removed from memory.', 'ok'); if (mode === 'gpt') setMode('local'); return true;
      case 'projects': projects.forEach((p) => line(`${p.id.padEnd(14)} ${p.title} — ${p.kicker}`)); line('Type  open <id>  to open a project.', 'hint'); return true;
      case 'open': { const p = projects.find((x) => x.id === arg); if (p) { openProject(p.id); line(`Opening ${p.title}…`, 'ok'); } else line('No such project id. Type projects.', 'err'); return true; }
      case 'theme': if (themes[arg]) { setTheme(arg); line(`Theme → ${arg}`, 'ok'); } else line(`Choose: ${Object.keys(themes).join(', ')}`, 'err'); return true;
      case 'cv': { const a = document.createElement('a'); a.href = config.cv; a.download = ''; document.body.appendChild(a); a.click(); a.remove(); line('Downloading CV…', 'ok'); return true; }
      case 'skills': case 'about': case 'contact': await answer(cmd); return true;
      default: return false;
    }
  }

  async function answer(q) {
    busy = true;
    const hits = retriever.search(q, 4);
    const el = line('', 'ai');
    try {
      if (mode === 'gpt' && hits.length) {
        controller = new AbortController();
        el.classList.add('stream');
        const full = await askOpenAI({ key, model: config.openaiModel, name: config.name, question: q, passages: hits.map((h) => h.doc), history: gpt,
          onToken: (t) => { el.textContent += t; scroll(); }, signal: controller.signal });
        gpt.push({ role: 'user', content: q }, { role: 'assistant', content: full });
        el.classList.remove('stream');
        line('↳ sources: ' + hits.map((h) => h.doc.title).join(' · '), 'src');
      } else {
        const a = answerLocal(retriever, q);
        await typeInto(el, a.text);
        if (a.sources.length) line('↳ sources: ' + a.sources.join(' · '), 'src');
      }
    } catch (e) {
      el.classList.remove('stream');
      if (!el.textContent) el.remove();
      line(`${e.message || 'Request failed.'} Type  key  to try another key, or  forget  to go local.`, 'err');
    }
    busy = false;
  }

  async function run(text) {
    const v = text.trim();
    if (!v || busy) return;
    if (awaitingKey) { line(v.startsWith('sk-') ? '▸ ••••••••••••••••' : `▸ ${v}`, 'me'); await handleKey(v); return; }
    line(`▸ ${v}`, 'me'); hist.unshift(v); hi = -1;
    if (!(await command(v))) await answer(v);
  }

  form.addEventListener('submit', (e) => { e.preventDefault(); const v = input.value; input.value = ''; run(v); });
  input.addEventListener('keydown', (e) => {
    if (awaitingKey || !hist.length) return;
    if (e.key === 'ArrowUp') { hi = Math.min(hi + 1, hist.length - 1); input.value = hist[hi]; e.preventDefault(); }
    if (e.key === 'ArrowDown') { hi = Math.max(hi - 1, -1); input.value = hi < 0 ? '' : hist[hi]; e.preventDefault(); }
  });
  if (chips) suggestions.forEach((s) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = s; b.addEventListener('click', () => run(s)); chips.appendChild(b); });
  root.addEventListener('click', (e) => { if (!e.target.closest('button')) input.focus({ preventScroll: true }); });
  boot();
  return { run };
}
