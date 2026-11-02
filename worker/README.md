# Hosted AI for the Lab (so visitors need no API key)

The browser never sees your key: it sends the question + the retrieved notes to this Worker, which adds your key server-side.
It validates input sizes, only accepts your own origins, rate-limits per IP and never forwards upstream error details.

1. Create a free account at cloudflare.com and install Wrangler:  `npm i -g wrangler`  then  `wrangler login`
2. In this folder edit `wrangler.toml` → `ALLOWED_ORIGINS` (your real site address).
3. `wrangler secret put OPENAI_API_KEY`  (paste a **project key with a monthly spend limit** from platform.openai.com)
4. `wrangler deploy`  → copy the URL it prints (https://iman-portfolio-ai.<you>.workers.dev)
5. In `site-config.js` set  `contact.aiEndpoint: 'https://iman-portfolio-ai.<you>.workers.dev'`  and refresh. The Lab now shows **HOSTED AI**.

Optional hard limit: Cloudflare dashboard → Security → WAF → Rate limiting rules (e.g. 20 requests / minute per IP) on this Worker's route.
Cost note: every visitor message spends your OpenAI credit; the spend limit in step 3 is your safety net.
