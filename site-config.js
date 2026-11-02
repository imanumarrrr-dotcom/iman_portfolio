/* ──────────────────────────────────────────────────────────────
   SITE CONFIG — edit ONLY this file to add your links. No build or npm needed:
   save the file and refresh the page.
   • Links must start with https://   • Leave '' to hide a button
   ────────────────────────────────────────────────────────────── */
window.SITE_CONFIG = {
  contact: {
    github: 'https://github.com/imanumarrrr-dotcom',   // your GitHub profile
    linkedin: 'https://www.linkedin.com/in/iman-umar-36699b447?utm_source=share_via&utm_content=profile&utm_medium=member_ios',                                      // e.g. 'https://www.linkedin.com/in/your-name'
    instagram: '',                                     // e.g. 'https://www.instagram.com/your-handle'
    email: 'imanumarrrr@gmail.com',
    whatsapp: '923107695950',                          // digits with country code, or '' to hide
    formEndpoint: '',                                  // Formspree URL, e.g. 'https://formspree.io/f/xxxxxxx' (real message delivery)
    aiEndpoint: '',                                    // Cloudflare Worker URL (see worker/README.md) → visitors chat with the AI, no key needed
    siteUrl: '',                                       // your deployed address, e.g. 'https://imanumar.dev'
  },

  // Privacy-friendly analytics (optional). Plausible:  { plausibleDomain: 'imanumar.dev' }   Umami: { umamiId: '…', umamiSrc: 'https://…/script.js' }
  analytics: {},

  // Project links. 'live' = deployed app / website, 'github' = source code. Leave '' for none.
  projects: {
    // image: 'assets/shots/minddesk.jpg' → shows a real screenshot (with hover distortion) instead of the generated poster
    voiceagent: {
  live: 'https://voice-agent1.streamlit.app/',
  github: ''
},
    marketmind:    { live: 'https://marketmind-1.streamlit.app', github: '' },
    customai:      { live: 'https://custom-ai.streamlit.app/', github: '' },
     ragagent:      { live: 'https://rag-pd.streamlit.app/', github: '' },
    minddesk:      { live: 'https://minddesk.streamlit.app/', github: '' },
    supportpearlz: { live: 'https://supportpearlz-a-i.streamlit.app/', github: '' },
    finwise:       { live: 'https://finwise-1.streamlit.app/', github: '' },
    mediguide:     { live: 'https://mediguide-1.streamlit.app/', github: '' },
    ceramichub:    { live: '', github: '' },
  },

  // Kind words and certificates — the “Proof” section appears as soon as you add one.
  testimonials: [
    // { name: 'Sir/Madam name', role: 'Supervisor, Algolix Technologies', quote: 'Short, truthful quote…' },
  ],
  certificates: [
    // { title: 'ISPR Summer Internship Programme', issuer: 'ISPR', year: '2026', url: '' },
  ],

  // Journal posts (Markdown). The section appears when at least one post exists. These two are editable starters — rewrite or delete them.
  posts: [
    { title: 'Why Python does the maths in FinWise AI', date: '2026-10', tags: ['llm', 'python'],
      body: 'Language models are good at **explaining** and unreliable at **arithmetic**.\n\nIn FinWise AI, Python calculates every total, ratio and a preliminary score. The model only receives those numbers and must answer in a strict JSON schema, which I validate before showing anything.\n\n- Deterministic maths in code\n- Interpretation by the model\n- A rule-based fallback if the JSON is invalid\n\nSeparating the two removed a whole class of mistakes.' },
    { title: 'Safety rules belong in code, not only in the prompt', date: '2026-10', tags: ['safety', 'rag'],
      body: 'MediGuide AI never claims a diagnosis. A prompt can ask the model to be careful, but a prompt can be ignored.\n\nSo a small Python screen looks for red-flag combinations (for example chest pain with shortness of breath) and sets a **minimum urgency** that the model can raise but never lower.\n\n> Put the non-negotiable rules where the model cannot talk its way around them.' },
  ],

  // Extra facts the AI Lab can answer about (optional)
  notes: [
    // { title: 'Hobbies', text: 'Iman enjoys …' },
  ],
};
