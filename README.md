# Iman Umar — 3D Portfolio (“the home of animation and AI”)

A single-page portfolio with a living **Three.js particle universe** that morphs as you scroll
(sphere → knot → lattice → wave → helix → a little **house** in the contact section), animated themes,
8 project case studies with generative poster art, and an **AI Lab** console (local RAG + optional GPT mode).

## Run it
```bash
# easiest: just open index.html (the bundle is pre-built), or serve it:
python -m http.server 5173        # then open http://localhost:5173
```
Edit text, links and projects in **`js/src/data.js`**, then rebuild:
```bash
npm install
npm run build                      # writes js/app.js  (npm run dev = watch mode)
npm test                           # logic tests;  node tests/dom.mjs = DOM smoke test
```
Deploy by uploading the whole folder (`index.html`, `css/`, `js/app.js`, `assets/`) to GitHub Pages or Netlify.
You do **not** need to upload `node_modules/`.

## Things to fill in (js/src/data.js → CONFIG)
| Field | Why |
|---|---|
| `linkedin`, `instagram` | Buttons stay hidden while empty |
| `github` | Set to your real profile URL (currently guessed from your repo) |
| `formEndpoint` | Paste a Formspree/compatible URL for real message delivery. While empty, the form opens the visitor's email app |
| `whatsapp` | Digits with country code, or `''` to hide the WhatsApp link (it exposes your phone number) |
| project `links` | Add `live` / `github` per project; “Case study” cards show “Ask for a demo” until you do |

## The AI Lab (and your API key)
* The console **asks for an OpenAI key first**, or you type `skip` for **local mode** (BM25 retrieval over your notes — no key, no network).
* In **GPT mode** the retrieved notes are sent to OpenAI (`gpt-4o-mini`) and the answer streams back. The key lives only in that tab's memory,
  goes only to `api.openai.com`, is never stored and is never echoed. `forget` removes it.
* A public site can't safely hold *your* key in front-end code, so visitors use their own or local mode. For a public chatbot on your key,
  add a tiny backend proxy (Cloudflare Worker / Netlify Function) and point `askOpenAI` at it.
* Teach it more: add notes to `KNOWLEDGE` in `data.js`.

## Design system
Themes (switch with the swatches or press **T**; the change reveals as a circular wipe and the 3D colours cross-fade):
**Nocturne** (ink + violet/mint), **Pearl** (light), **Aubergine & Marigold** (your #3A0F34 / #EAAA00 / #DDE3E8 palette).
Fonts are self-hosted (Syne, Space Grotesk, JetBrains Mono). Text/button contrast is ≥ 4.5:1 in all three themes.

## Accessibility & performance
Keyboard navigation, focus rings, skip link, ARIA labels, modal focus-trap, `prefers-reduced-motion` support, `noscript` fallback,
particle count and pixel ratio reduced on phones, no-WebGL fallback to a CSS gradient background.

## Honest notes
* Tested with Node + jsdom (27 DOM checks, 0 runtime errors, plus logic tests). **Not yet viewed in a real browser** — the 3D look, spacing
  and motion timing deserve a quick visual pass; tell me what to tune.
* Your portrait is used as provided (duotone treatment). Swap `assets/portrait.jpg` any time.
* Project years and descriptions come from what the apps do; correct anything in `data.js`.
