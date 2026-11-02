/* Service worker: makes the portfolio installable and usable offline after the first visit.
   Same-origin files use stale-while-revalidate; API calls (OpenAI, GitHub) are never cached. Bump VERSION when you deploy changes. */
const VERSION = 'iu-v2';
const CORE = ['./', 'index.html', 'css/style.css', 'js/app.js', 'site-config.js', 'manifest.webmanifest', 'assets/favicon.svg', 'assets/portrait.jpg',
  'assets/fonts/syne-latin-800-normal.woff2', 'assets/fonts/space-grotesk-latin-400-normal.woff2'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(async (cache) => {
    const hit = await cache.match(e.request);
    const net = fetch(e.request).then((r) => { if (r.ok) cache.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
