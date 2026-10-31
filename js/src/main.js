// Orchestrates the whole page: loader, smooth scroll, 3D scene, themes, project gallery + modal, AI console, contact form.
import gsap from 'gsap';
import Lenis from 'lenis';
import { CONFIG, ROLES, STATS, CAPABILITIES, STACK, PROJECTS, JOURNEY, KNOWLEDGE, SUGGESTIONS } from './data.js';
import { createScene } from './scene.js';
import { drawPoster } from './posters.js';
import { initConsole } from './console.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mq = (q) => (window.matchMedia ? window.matchMedia(q) : { matches: false, addEventListener() {} });
const reduced = mq('(prefers-reduced-motion: reduce)').matches;
const fine = mq('(pointer: fine)').matches;
const THEMES = { nocturne: 'Nocturne', pearl: 'Pearl', marigold: 'Aubergine & Marigold' };
let scene = null, lenis = null;

// ───────────────────────── content injection
function injectContent() {
  $$('[data-year]').forEach((e) => (e.textContent = new Date().getFullYear()));
  $$('[data-email]').forEach((e) => { e.href = `mailto:${CONFIG.email}`; if (e.hasAttribute('data-show')) e.textContent = CONFIG.email; });
  $$('[data-cv]').forEach((e) => { e.href = CONFIG.cv; e.setAttribute('download', ''); });
  const links = { github: CONFIG.github, linkedin: CONFIG.linkedin, instagram: CONFIG.instagram, whatsapp: CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}` : '' };
  $$('[data-social]').forEach((e) => { const u = links[e.dataset.social]; if (u) { e.href = u; e.target = '_blank'; e.rel = 'noopener noreferrer'; } else e.remove(); });

  const stats = $('#stats');
  if (stats) stats.innerHTML = STATS.map((s) => `<div class="stat"><b data-count="${s.n}">0</b><span>${esc(s.label)}</span></div>`).join('');
  const caps = $('#caps');
  if (caps) caps.innerHTML = CAPABILITIES.map((c) => `<article class="cap rv" data-tilt><span class="cap-k">${c.k}</span><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></article>`).join('');
  const stack = $('#stack');
  if (stack) stack.innerHTML = STACK.map(([n, g]) => `<li class="chip rv" data-g="${esc(g)}"><i></i>${esc(n)}<small>${esc(g)}</small></li>`).join('');
  const tl = $('#timeline');
  if (tl) tl.innerHTML = JOURNEY.map((j) => `<li class="tl-item rv"><time>${esc(j.when)}</time><h3>${esc(j.t)}</h3><p>${esc(j.d)}</p></li>`).join('');
  const track = $('#marquee-track');
  if (track) { const words = STACK.map(([n]) => `<span>${esc(n)}</span><i>✦</i>`).join(''); track.innerHTML = words + words; }
}

// ───────────────────────── hero text
function splitChars() {
  $$('[data-split]').forEach((el) => {
    const txt = el.textContent.trim(); el.setAttribute('aria-label', txt); el.textContent = '';
    [...txt].forEach((ch, i) => { const s = document.createElement('span'); s.className = 'char'; s.setAttribute('aria-hidden', 'true'); s.style.setProperty('--i', i); s.textContent = ch; el.appendChild(s); });
  });
}
function typewriter() {
  const el = $('#role'); if (!el) return;
  if (reduced) { el.textContent = ROLES[0]; return; }
  let r = 0, i = 0, del = false;
  const tick = () => {
    const word = ROLES[r];
    el.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; return setTimeout(tick, 1400); }
    if (del && i === 0) { del = false; r = (r + 1) % ROLES.length; }
    i += del ? -1 : 1; setTimeout(tick, del ? 28 : 65);
  };
  tick();
}

// ───────────────────────── themes (animated circular reveal + scene colour lerp)
function readTheme() {
  const cs = getComputedStyle(document.body), v = (n) => cs.getPropertyValue(n).trim();
  return { c1: v('--a1') || '#8B6CFF', c2: v('--a2') || '#5CFFC8', c3: v('--a3') || '#FF7A59', dark: document.body.dataset.theme !== 'pearl' };
}
function setTheme(name, origin) {
  if (!THEMES[name] || document.body.dataset.theme === name) return;
  const apply = () => {
    document.body.dataset.theme = name;
    try { localStorage.setItem('iu-theme', name); } catch { /* private mode */ }
    $$('.sw').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.theme === name)));
    scene?.setTheme(readTheme());
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = getComputedStyle(document.body).getPropertyValue('--bg').trim();
  };
  if (document.startViewTransition && !reduced) {
    const x = origin?.x ?? innerWidth - 60, y = origin?.y ?? 40, r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = document.startViewTransition(apply);
    t.ready.then(() => document.documentElement.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 900, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' })).catch(() => {});
  } else apply();
}
function initThemes() {
  let saved = null; try { saved = localStorage.getItem('iu-theme'); } catch { /* ignore */ }
  const start = THEMES[saved] ? saved : mq('(prefers-color-scheme: light)').matches ? 'pearl' : 'nocturne';
  document.body.dataset.theme = start;
  $$('.sw').forEach((b) => { b.setAttribute('aria-pressed', String(b.dataset.theme === start)); b.addEventListener('click', (e) => { const r = b.getBoundingClientRect(); setTheme(b.dataset.theme, { x: r.left + r.width / 2, y: r.top + r.height / 2 }); }); });
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't' && !/input|textarea/i.test(document.activeElement?.tagName || '') && !e.metaKey && !e.ctrlKey) {
      const names = Object.keys(THEMES); setTheme(names[(names.indexOf(document.body.dataset.theme) + 1) % names.length]);
    }
  });
}

// ───────────────────────── projects: grid, filter, modal
const projects = PROJECTS.map((p, i) => ({ ...p, index: i + 1 }));
let modalIdx = -1, lastFocus = null;
function buildProjects() {
  const grid = $('#grid'); if (!grid) return;
  grid.innerHTML = projects.map((p) => `
    <article class="card rv" data-cat="${p.category}" data-id="${p.id}" style="--c1:${p.palette[0]};--c2:${p.palette[1]}">
      <button class="card-btn" type="button" aria-label="Open project ${esc(p.title)}" data-tilt>
        <span class="poster"><img alt="" loading="lazy" decoding="async" width="800" height="1000"><span class="glare"></span><em>${String(p.index).padStart(2, '0')}</em></span>
        <span class="meta"><b>${esc(p.title)}</b><small>${esc(p.kicker)}</small><span class="row"><i>${p.category === 'ai' ? 'AI / LLM' : 'WEB'} · ${p.year}</i><span class="arrow" aria-hidden="true">↗</span></span></span>
      </button></article>`).join('');
  // generate posters lazily so first paint stays quick
  const make = (card) => { const img = $('img', card); if (img && !img.src) { const p = projects.find((x) => x.id === card.dataset.id); img.src = drawPoster(p) || ''; if (!img.src) img.remove(); } };
  const lazy = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { make(e.target); lazy.unobserve(e.target); } }), { rootMargin: '300px' }) : null;
  $$('.card', grid).forEach((c) => (lazy ? lazy.observe(c) : make(c)));
  grid.addEventListener('click', (e) => { const c = e.target.closest('.card'); if (c) openProject(c.dataset.id); });
  $$('.filter').forEach((b) => b.addEventListener('click', () => {
    $$('.filter').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    $$('.card', grid).forEach((c) => { const show = b.dataset.f === 'all' || c.dataset.cat === b.dataset.f; c.hidden = !show; });
  }));
}
function openProject(id) {
  const m = $('#modal'); modalIdx = projects.findIndex((p) => p.id === id); if (modalIdx < 0 || !m) return;
  const p = projects[modalIdx], links = [];
  if (p.links.live) links.push(`<a class="btn solid" href="${esc(p.links.live)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`);
  if (p.links.github) links.push(`<a class="btn" href="${esc(p.links.github)}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`);
  if (!links.length) links.push(`<a class="btn" href="#contact" data-close>Ask for a demo</a>`);
  const poster = drawPoster(p);
  $('#modal-body').innerHTML = `
    <div class="m-poster" data-tilt>${poster ? `<img src="${poster}" alt="Generative artwork for ${esc(p.title)}">` : ''}<span class="glare"></span></div>
    <div class="m-info">
      <p class="eyebrow">${String(p.index).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')} · ${esc(p.status)}</p>
      <h3 id="modal-title">${esc(p.title)}</h3><p class="m-kick">${esc(p.kicker)}</p>
      <p>${esc(p.summary)}</p>
      <h4>What I built</h4><ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      <h4>Role</h4><p>${esc(p.role)}</p>
      <h4>Stack</h4><ul class="tags">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      <div class="m-links">${links.join('')}</div>
      ${p.status === 'Case study' ? '<p class="note">Case study — no public demo link yet. Ask me for a walkthrough.</p>' : ''}
    </div>`;
  lastFocus = document.activeElement; m.hidden = false; document.body.classList.add('modal-open');
  requestAnimationFrame(() => m.classList.add('open')); lenis?.stop(); $('#modal-close')?.focus();
  $$('[data-close]', m).forEach((el) => el.addEventListener('click', closeProject));
  bindTilt($('#modal-body'));
}
function closeProject() {
  const m = $('#modal'); if (!m || m.hidden) return;
  m.classList.remove('open'); document.body.classList.remove('modal-open'); lenis?.start();
  setTimeout(() => { m.hidden = true; }, reduced ? 0 : 450); lastFocus?.focus?.({ preventScroll: true });
}
function stepProject(d) { openProject(projects[(modalIdx + d + projects.length) % projects.length].id); }
function initModal() {
  $('#modal-close')?.addEventListener('click', closeProject);
  $('#modal-prev')?.addEventListener('click', () => stepProject(-1));
  $('#modal-next')?.addEventListener('click', () => stepProject(1));
  $('#modal')?.addEventListener('click', (e) => { if (e.target.id === 'modal') closeProject(); });
  window.addEventListener('keydown', (e) => {
    const m = $('#modal'); if (!m || m.hidden) return;
    if (e.key === 'Escape') closeProject();
    if (e.key === 'ArrowRight') stepProject(1);
    if (e.key === 'ArrowLeft') stepProject(-1);
    if (e.key === 'Tab') { // keep focus inside the dialog
      const f = $$('button, a[href]', m).filter((x) => !x.disabled && x.offsetParent !== null); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); } else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  });
}

// ───────────────────────── interaction polish
function bindTilt(root = document) {
  if (!fine || reduced) return;
  $$('[data-tilt]', root).forEach((el) => {
    if (el.dataset.tiltBound) return; el.dataset.tiltBound = '1';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${((0.5 - y) * 12).toFixed(2)}deg`); el.style.setProperty('--ry', `${((x - 0.5) * 14).toFixed(2)}deg`);
      el.style.setProperty('--gx', `${(x * 100).toFixed(0)}%`); el.style.setProperty('--gy', `${(y * 100).toFixed(0)}%`);
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });
}
function initCursor() {
  const dot = $('#cur-dot'), ring = $('#cur-ring');
  if (!fine || !dot || !ring) return document.body.classList.add('no-cursor');
  document.body.classList.add('has-cursor');
  const qx = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' }), qy = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; qx(e.clientX); qy(e.clientY); });
  document.addEventListener('pointerover', (e) => ring.classList.toggle('big', !!e.target.closest('a, button, [data-tilt], input, textarea, select')));
}
function initMagnetic() {
  if (!fine || reduced) return;
  $$('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.3 }); });
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.5)' }));
  });
}
function initReveal() {
  const els = $$('.rv');
  if (!('IntersectionObserver' in window) || reduced) return els.forEach((e) => e.classList.add('in'));
  $$('[data-stagger]').forEach((g) => $$('.rv', g).forEach((c, i) => c.style.setProperty('--d', `${i * 70}ms`)));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  els.forEach((e) => io.observe(e));
  const cio = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const to = +e.target.dataset.count, o = { v: 0 }; gsap.to(o, { v: to, duration: 1.4, ease: 'power2.out', onUpdate: () => (e.target.textContent = Math.round(o.v)) });
  }), { threshold: 0.6 });
  $$('[data-count]').forEach((e) => cio.observe(e));
}
function initSections() {
  const ids = ['home', 'about', 'skills', 'work', 'lab', 'journey', 'contact'], secs = ids.map((i) => document.getElementById(i)).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    scene?.setSection(e.target.id); document.body.dataset.section = e.target.id;
    $$('.nav-links a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
  }), { rootMargin: '-45% 0px -45% 0px' });
  secs.forEach((s) => io.observe(s));
}
function initScroll() {
  const toTop = $('#to-top'), bar = $('#progress');
  const onScroll = () => {
    const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    toTop?.classList.toggle('show', y > innerHeight * 0.8); document.body.classList.toggle('scrolled', y > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (!reduced) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  }
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href'); if (id.length < 2) return;
    const t = document.querySelector(id); if (!t) return; e.preventDefault(); closeMenu();
    if (lenis) lenis.scrollTo(t, { duration: 1.3 }); else t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', id);
  }));
  toTop?.addEventListener('click', () => (lenis ? lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: 'smooth' })));
}
function closeMenu() { document.body.classList.remove('menu-open'); $('#burger')?.setAttribute('aria-expanded', 'false'); }
function initMenu() {
  const b = $('#burger'); if (!b) return;
  b.addEventListener('click', () => { const open = document.body.classList.toggle('menu-open'); b.setAttribute('aria-expanded', String(open)); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}
function initPointerScene() {
  window.addEventListener('pointermove', (e) => {
    scene?.setPointer((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1));
    if (fine && !reduced) { const t = $('.hero-title'); if (t) t.style.transform = `translate3d(${((e.clientX / innerWidth) - 0.5) * -26}px, ${((e.clientY / innerHeight) - 0.5) * -14}px, 0)`; }
  }, { passive: true });
  window.addEventListener('pointerleave', () => scene?.setPointer(9, 9));
  window.addEventListener('resize', () => scene?.resize());
}

// ───────────────────────── contact form
function initForm() {
  const form = $('#contact-form'); if (!form) return;
  const status = $('#form-status'), btn = $('button[type="submit"]', form);
  const rules = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
    type: (v) => (v ? '' : 'Choose a project type.'),
    message: (v) => (v.trim().length >= 10 ? '' : 'Tell me a little more (at least 10 characters).'),
  };
  const check = (f) => { const el = form.elements[f], msg = rules[f](el.value), err = $(`#err-${f}`); if (err) err.textContent = msg; el.setAttribute('aria-invalid', String(!!msg)); return !msg; };
  Object.keys(rules).forEach((f) => { form.elements[f]?.addEventListener('blur', () => check(f)); form.elements[f]?.addEventListener('input', () => { if (form.elements[f].getAttribute('aria-invalid') === 'true') check(f); }); });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.elements.company?.value) return; // honeypot
    const valid = Object.keys(rules).map(check).every(Boolean);
    if (!valid) { status.className = 'form-status err'; status.textContent = 'Please fix the highlighted fields.'; form.querySelector('[aria-invalid="true"]')?.focus(); return; }
    const data = Object.fromEntries(['name', 'email', 'type', 'message'].map((k) => [k, form.elements[k].value.trim()]));
    btn.disabled = true; status.className = 'form-status'; status.textContent = 'Sending…';
    try {
      if (CONFIG.formEndpoint) {
        const r = await fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!r.ok) throw new Error('send failed');
        status.className = 'form-status ok'; status.textContent = 'Message sent — thank you! I will reply soon.'; form.reset();
      } else {
        const body = `${data.message}\n\n— ${data.name} (${data.email})\nProject type: ${data.type}`;
        window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Portfolio enquiry: ' + data.type)}&body=${encodeURIComponent(body)}`;
        status.className = 'form-status ok'; status.textContent = 'Your email app should open with the message ready to send.';
      }
    } catch { status.className = 'form-status err'; status.textContent = `Could not send right now. Please email ${CONFIG.email} directly.`; }
    btn.disabled = false;
  });
}

// ───────────────────────── loader → reveal
function runLoader() {
  const L = $('#loader'), num = $('#ld-num'), ring = $('.ld-fg'), word = $('#ld-word'), skip = $('#ld-skip');
  const words = ['Hello', 'Salaam', 'Namaste', 'Hola', 'Ciao', 'Iman'];
  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    document.body.classList.remove('is-loading'); document.body.classList.add('is-ready');
    if (L) { L.classList.add('done'); setTimeout(() => L.remove(), reduced ? 0 : 1100); }
    $('.hero')?.classList.add('is-in'); document.body.classList.add('hero-in');
  };
  if (!L) return finish();
  skip?.addEventListener('click', () => { tl?.progress(1); finish(); });
  const o = { v: 0 };
  const tl = gsap.to(o, {
    v: 100, duration: reduced ? 0.3 : 2.4, ease: 'power1.inOut',
    onUpdate() {
      const v = Math.round(o.v); if (num) num.textContent = v;
      if (ring) ring.style.strokeDashoffset = String(339.3 * (1 - o.v / 100));
      if (word) word.textContent = words[Math.min(words.length - 1, Math.floor(o.v / (100 / words.length)))];
    },
    onComplete: () => setTimeout(finish, reduced ? 0 : 250),
  });
}

// ───────────────────────── boot
function boot() {
  injectContent(); splitChars(); typewriter(); buildProjects(); initModal(); initThemes(); initForm(); initMenu();
  try { scene = createScene($('#gl'), { reduced }); } catch (e) { scene = null; }
  if (!scene) document.body.classList.add('no-webgl'); else scene.setTheme(readTheme());
  initScroll(); initSections(); initReveal(); initPointerScene(); initCursor(); initMagnetic(); bindTilt();
  initConsole({ config: CONFIG, projects: PROJECTS, knowledge: KNOWLEDGE, suggestions: SUGGESTIONS, themes: THEMES, setTheme: (n) => setTheme(n), openProject, reduced });
  runLoader();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
