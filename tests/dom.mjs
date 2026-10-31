// DOM smoke test with jsdom (no real browser): boots the built bundle and exercises the UI logic.
import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'node:fs';
import assert from 'node:assert/strict';

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', (e) => { if (!/not implemented|Could not parse CSS/i.test(e.message)) errors.push('jsdom: ' + e.message); });
vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
const html = fs.readFileSync('index.html', 'utf8').replace(/<script src="js\/app.js" defer><\/script>/, '');
const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'http://localhost/', virtualConsole: vc });
const w = dom.window;
w.matchMedia = (q) => ({ matches: /pointer: fine/.test(q), addEventListener() {}, removeEventListener() {} });
w.IntersectionObserver = class { constructor(cb) { this.cb = cb; } observe(t) { setTimeout(() => this.cb([{ isIntersecting: true, target: t }]), 5); } unobserve() {} disconnect() {} };
w.ResizeObserver = class { observe() {} disconnect() {} };
w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = () => {}; w.HTMLElement.prototype.focus = function () {};
w.fetch = async (url) => (String(url).includes('/models') ? { ok: true, status: 200 } : { ok: false, status: 500 });
w.addEventListener('error', (e) => errors.push('window error: ' + e.message));
w.eval(fs.readFileSync('js/app.js', 'utf8'));

const $ = (s) => w.document.querySelector(s), $$ = (s) => [...w.document.querySelectorAll(s)];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let n = 0; const ok = (m) => console.log('  ✓', m, ++n && '');

await sleep(300);
assert.equal($$('#grid .card').length, 8); ok('8 project cards rendered');
assert.equal($$('#caps .cap').length, 4); assert.equal($$('#stack .chip').length, 15); assert.equal($$('#timeline .tl-item').length, 5); ok('capabilities, stack and timeline rendered');
assert.ok($('#marquee-track').children.length >= 30); ok('marquee built');
assert.equal($$('.hero-title .char').length, 8); ok('hero headline split into characters');
assert.ok($('a[data-social="github"]').href.startsWith('https://github.com/')); assert.equal($$('a[data-social="linkedin"]').length, 0); assert.equal($$('a[data-social="instagram"]').length, 0); ok('socials: GitHub shown, empty LinkedIn/Instagram hidden');
assert.ok($('a[data-email]').href.startsWith('mailto:')); assert.ok($('a[data-cv]').href.endsWith('Iman_Umar_CV.docx')); ok('email + CV links set');
assert.ok(w.document.body.classList.contains('no-webgl')); ok('no WebGL in jsdom -> graceful CSS fallback');

// loader skip -> hero reveals
assert.ok(w.document.body.classList.contains('is-loading'));
$('#ld-skip').click(); await sleep(50);
assert.ok(w.document.body.classList.contains('is-ready') && $('.hero').classList.contains('is-in')); ok('loader skip reveals the hero');

// theme switcher
$('.sw[data-theme="pearl"]').click(); await sleep(30);
assert.equal(w.document.body.dataset.theme, 'pearl'); assert.equal(w.localStorage.getItem('iu-theme'), 'pearl'); assert.equal($('.sw[data-theme="pearl"]').getAttribute('aria-pressed'), 'true'); ok('theme switch applies + persists');
w.dispatchEvent(new w.KeyboardEvent('keydown', { key: 't' })); await sleep(20);
assert.equal(w.document.body.dataset.theme, 'marigold'); ok('keyboard T cycles theme');

// filter + modal
$('.filter[data-f="web"]').click();
assert.equal($$('#grid .card:not([hidden])').length, 1); $('.filter[data-f="all"]').click(); assert.equal($$('#grid .card:not([hidden])').length, 8); ok('filters work');
$('#grid .card[data-id="marketmind"] .card-btn').click(); await sleep(30);
assert.equal($('#modal').hidden, false); assert.match($('#modal-title').textContent, /MarketMind/);
assert.ok($$('.m-links a').some((a) => a.href === 'https://marketmind-1.streamlit.app/')); ok('modal opens with live demo + GitHub links');
$('#modal-next').click(); assert.match($('#modal-title').textContent, /Custom AI/); ok('modal next/prev');
w.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape' })); await sleep(600);
assert.equal($('#modal').hidden, true); ok('Escape closes the modal');
$('#grid .card[data-id="ceramichub"] .card-btn').click(); await sleep(20);
assert.ok($('.m-links a[data-close]') && /Case study/.test($('.m-info').textContent)); $('#modal-close').click(); await sleep(600); ok('case-study projects show "Ask for a demo", no fake live links');

// contact form
const form = $('#contact-form');
form.dispatchEvent(new w.Event('submit', { cancelable: true })); await sleep(10);
assert.match($('#err-name').textContent, /name/i); assert.match($('#err-message').textContent, /10/); assert.match($('#form-status').textContent, /fix/i); ok('empty form shows validation errors');
form.elements.name.value = 'Sara'; form.elements.email.value = 'not-an-email'; form.elements.type.value = 'Website'; form.elements.message.value = 'Hello Iman, I need a site.';
form.dispatchEvent(new w.Event('submit', { cancelable: true })); await sleep(10);
assert.match($('#err-email').textContent, /valid email/i); ok('invalid email rejected');
form.elements.email.value = 'sara@example.com'; form.elements.company.value = '';
form.dispatchEvent(new w.Event('submit', { cancelable: true })); await sleep(30);
assert.match($('#form-status').textContent, /email app/i); ok('valid form -> mailto flow with clear message');

// AI lab console: key gate -> skip -> local RAG
const term = (t) => { $('#term-in').value = t; $('#term-form').dispatchEvent(new w.Event('submit', { cancelable: true })); };
assert.equal($('#term-in').type, 'password'); assert.match($('#term-out').textContent, /OpenAI API key/); assert.equal($('#term-mode').textContent, 'LOCKED');
assert.ok($$('#term-chips button').every((b) => b.disabled)); ok('console starts locked and asks for the API key first');
term('abc123'); await sleep(20); assert.match($('#term-out').textContent, /does not look like an OpenAI key/); ok('bad key format rejected');
term('skip'); await sleep(20);
assert.equal($('#term-mode').textContent, 'LOCAL MODE'); assert.equal($('#term-in').type, 'text'); assert.ok($$('#term-chips button').every((b) => !b.disabled)); ok('skip -> local mode, chips enabled');
term('Tell me about MindDesk'); await sleep(1900);
assert.match($('#term-out').textContent, /MindDesk is a Streamlit app/); assert.match($('#term-out').textContent, /sources:/); ok('local RAG answers with sources');
term('open ceramichub'); await sleep(60); assert.equal($('#modal').hidden, false); $('#modal-close').click(); await sleep(600); ok('console command opens a project');
term('theme pearl'); await sleep(30); assert.equal(w.document.body.dataset.theme, 'pearl'); ok('console command switches theme');
term('what is the weather in paris'); await sleep(1200); assert.match($('#term-out').textContent, /only know what is on this page/); ok('off-topic question declined honestly');
term('key'); await sleep(20); term('sk-testkey1234567890'); await sleep(60);
assert.equal($('#term-mode').textContent, 'GPT MODE'); assert.ok(!$('#term-out').textContent.includes('sk-testkey')); ok('valid key -> GPT mode, key never echoed');
term('forget'); await sleep(20); assert.equal($('#term-mode').textContent, 'LOCAL MODE'); ok('forget returns to local mode');

assert.deepEqual(errors, [], 'no runtime errors: ' + errors.join(' | '));
console.log(`\n${n} DOM checks passed, 0 runtime errors`);
process.exit(0);
