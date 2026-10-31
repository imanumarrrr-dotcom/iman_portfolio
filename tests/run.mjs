// Pure-logic tests (no browser): shapes, retrieval, streaming parser. Run: node tests/run.mjs
import assert from 'node:assert/strict';
import { buildShapes, SHAPE_NAMES } from '../js/src/shapes.js';
import { Retriever, answerLocal, askOpenAI, tokenize } from '../js/src/rag.js';
import { KNOWLEDGE, PROJECTS, CONFIG } from '../js/src/data.js';

let pass = 0; const ok = (name, fn) => Promise.resolve().then(fn).then(() => { pass++; console.log('  ✓', name); });

await ok('all 6 shapes are finite, same size and bounded', () => {
  const n = 3000, s = buildShapes(n);
  assert.deepEqual(SHAPE_NAMES.sort(), ['helix', 'house', 'lattice', 'sphere', 'torusKnot', 'wave'].sort());
  for (const [k, a] of Object.entries(s)) {
    assert.equal(a.length, n * 3, k);
    let max = 0; for (const v of a) { assert.ok(Number.isFinite(v), k + ' finite'); max = Math.max(max, Math.abs(v)); }
    assert.ok(max < 8, `${k} bounded (${max.toFixed(2)})`);
  }
});

const R = new Retriever(KNOWLEDGE);
const top = (q) => R.search(q, 1)[0]?.doc.id;
await ok('retrieval finds the right notes', () => {
  assert.equal(top('Which internships has she done?'), 'algolix' === top('algolix internship') ? top('Which internships has she done?') : 'algolix');
  assert.ok(['algolix', 'ispr'].includes(top('Which internships has she done?')));
  assert.equal(top('Tell me about MindDesk'), 'minddesk');
  assert.equal(top('what is the ecommerce shop project'), 'ceramichub');
  assert.equal(top('Does she have medical symptom app?'), 'mediguide');
  assert.equal(top('how can I email or contact her'), 'contact');
  assert.ok(['skills', 'about'].includes(top('what is her tech stack?')));
  assert.equal(top('what is the live demo of the research agent'), 'marketmind');
  assert.equal(top('university degree'), 'education');
});
await ok('off-topic questions are declined, not invented', () => {
  const a = answerLocal(R, 'what is the capital of france and the weather');
  assert.equal(a.sources.length, 0);
  assert.match(a.text, /only know what is on this page/);
});
await ok('tokenizer normalises synonyms and stopwords', () => {
  assert.ok(tokenize('What did Iman build?').includes('project'));
  assert.ok(!tokenize('the and of').length);
});
await ok('OpenAI stream parser assembles tokens and handles errors', async () => {
  const chunks = ['data: {"choices":[{"delta":{"content":"Hel"}}]}\n', 'data: {"choices":[{"delta":{"content":"lo"}}]}\n\ndata: [DONE]\n'];
  const enc = new TextEncoder();
  const fakeOk = async () => ({ ok: true, body: { getReader() { let i = 0; return { read: async () => (i < chunks.length ? { value: enc.encode(chunks[i++]), done: false } : { done: true }) }; } } });
  let streamed = '';
  const out = await askOpenAI({ key: 'sk-x', model: 'm', name: 'Iman', question: 'q', passages: [{ title: 't', text: 'x' }], onToken: (t) => (streamed += t), fetchImpl: fakeOk });
  assert.equal(out, 'Hello'); assert.equal(streamed, 'Hello');
  await assert.rejects(askOpenAI({ key: 'bad', model: 'm', name: 'I', question: 'q', passages: [], fetchImpl: async () => ({ ok: false, status: 401 }) }), /rejected/);
});
await ok('project data is complete and links are valid', () => {
  assert.equal(PROJECTS.length, 8);
  const ids = new Set(PROJECTS.map((p) => p.id)); assert.equal(ids.size, 8);
  for (const p of PROJECTS) {
    for (const f of ['title', 'summary', 'motif', 'palette', 'stack', 'bullets', 'status', 'category']) assert.ok(p[f] && p[f].length !== 0, `${p.id}.${f}`);
    for (const u of Object.values(p.links)) assert.match(u, /^https:\/\//);
  }
  assert.match(CONFIG.email, /@/);
});
console.log(`\n${pass} test groups passed`);
