// ─────────────────────────────────────────────────────────────
//  EASY-TO-EDIT CONTENT.  Change text, links and projects here;
//  then run `npm run build` (or edit js/app.js only if you skip the build).
// ─────────────────────────────────────────────────────────────
export const CONFIG = {
  name: 'Iman Umar',
  email: 'imanumarrrr@gmail.com',
  whatsapp: '923107695950',                     // digits only, with country code (leave '' to hide)
  github: 'https://github.com/imanumarrrr-dotcom',
  linkedin: '',                                 // e.g. https://www.linkedin.com/in/your-handle  (hidden while empty)
  instagram: '',                                // e.g. https://www.instagram.com/your-handle    (hidden while empty)
  cv: 'assets/Iman_Umar_CV.docx',
  // Contact form delivery: paste a Formspree (or compatible) endpoint, e.g. https://formspree.io/f/xxxxxxx
  // While empty, the form opens the visitor's email app with the message pre-filled.
  formEndpoint: '',
  openaiModel: 'gpt-4o-mini',
};

export const ROLES = ['Frontend Developer', 'AI App Builder', 'Creative Coder', 'RAG & LLM Tinkerer'];

export const STATS = [
  { n: 8, label: 'Projects built' },
  { n: 7, label: 'AI apps' },
  { n: 2, label: 'Internships' },
  { n: 1, label: 'E-commerce store' },
];

export const CAPABILITIES = [
  { k: '01', t: 'Creative Frontend', d: 'Responsive, mobile-first interfaces in HTML5, CSS3 and vanilla JavaScript with motion that supports the story.' },
  { k: '02', t: 'AI Apps & RAG', d: 'Chat assistants that read PDFs, Word and Excel files, cite their sources and stream answers.' },
  { k: '03', t: 'Full-stack PHP / MySQL', d: 'Database-driven pages and a working e-commerce store with a storefront and an admin panel.' },
  { k: '04', t: 'Motion & 3D', d: 'Animated themes, particle scenes and interaction details that make a page feel alive.' },
];

export const STACK = [
  ['HTML5', 'Frontend'], ['CSS3', 'Frontend'], ['JavaScript', 'Frontend'], ['Responsive Design', 'Frontend'],
  ['PHP', 'Backend'], ['MySQL', 'Backend'], ['XAMPP', 'Backend'], ['Python', 'AI'],
  ['LangChain', 'AI'], ['OpenAI API', 'AI'], ['Streamlit', 'AI'], ['RAG', 'AI'],
  ['Git & GitHub', 'Tools'], ['Canva', 'Tools'], ['MS Office', 'Tools'],
];

// motif: which generative poster art is drawn for the project card
export const PROJECTS = [
  {
    id: 'minddesk', title: 'MindDesk', kicker: 'RAG + custom ChatGPT workspace', category: 'ai', year: '2026', motif: 'docs',
    palette: ['#8B6CFF', '#5CFFC8', '#1a1240'], status: 'Case study', links: {},
    summary: 'One calm workspace that merges a multi-chat assistant with document search. Upload PDF, Word, PowerPoint, Excel, CSV or text files and ask questions with numbered citations.',
    bullets: ['Spreadsheet-aware: every sheet gets a deterministic summary so totals and averages come from real figures.', 'Data explorer with chart builder, animated themes and an API-key gate before the console opens.', 'Pure NumPy vector store with MMR re-ranking and an on-disk embedding cache.'],
    stack: ['Python', 'Streamlit', 'OpenAI API', 'RAG', 'Plotly'], role: 'Design, prompts, retrieval and UI',
    ask: 'MindDesk is a Streamlit app that combines a ChatGPT-style assistant with RAG over PDF, Word, PowerPoint, Excel, CSV, text and JSON files. It cites sources, builds table summaries for spreadsheets, has a data explorer with charts and themes, and asks for an OpenAI API key before opening the console.',
  },
  {
    id: 'supportpearlz', title: 'SupportPearlz AI', kicker: 'RAG customer-support assistant', category: 'ai', year: '2026', motif: 'pearls',
    palette: ['#FF7AC8', '#7AD7FF', '#1c1030'], status: 'Case study', links: {},
    summary: 'A LangChain retrieval assistant for customer support that answers from a knowledge base, shows where each answer came from and can rebuild its index on demand.',
    bullets: ['Document ingestion pipeline with a one-click index rebuild.', 'Source citations so support staff can verify every answer.', 'Animated Streamlit interface with an API-key gate.'],
    stack: ['Python', 'LangChain', 'ChromaDB', 'Streamlit', 'OpenAI API'], role: 'Ingestion, retrieval chain and UI',
    ask: 'SupportPearlz AI is a LangChain RAG customer-support assistant built with Streamlit (assignment AAI-407). It ingests documents into a vector index, answers with citations and lets the user rebuild the index.',
  },
  {
    id: 'finwise', title: 'FinWise AI', kicker: 'Personal finance & budget assistant', category: 'ai', year: '2026', motif: 'bars',
    palette: ['#EAAA00', '#5CFFC8', '#0f1a14'], status: 'Case study', links: {},
    summary: 'Enter income and expenses; Python computes the ratios and a preliminary score, then an LLM turns the numbers into structured, educational budgeting advice.',
    bullets: ['Strict split: deterministic maths in Python, interpretation by the model.', 'Structured JSON output validated with a safe fallback.', 'Streaming recommendation, in-memory and SQLite caching, charts and downloadable report.'],
    stack: ['Python', 'LangChain', 'Streamlit', 'Plotly', 'SQLite'], role: 'Calculations, prompts, chain and dashboard',
    ask: 'FinWise AI is a LangChain and Streamlit personal-finance assistant. Python calculates totals, savings and expense ratios and a preliminary score; the LLM returns structured JSON insights and streams a written recommendation. It supports in-memory and SQLite caching and is for education only.',
  },
  {
    id: 'mediguide', title: 'MediGuide AI', kicker: 'Safety-first symptom guidance', category: 'ai', year: '2026', motif: 'pulse',
    palette: ['#FF5C7A', '#5CE1FF', '#1a0c16'], status: 'Case study', links: {},
    summary: 'An educational symptom-guidance assistant that never claims a diagnosis. A Python red-flag screen sets a minimum urgency that the AI can raise but never lower.',
    bullets: ['Urgency levels LOW / MEDIUM / HIGH / EMERGENCY with clear next steps.', 'Rule-based safety net plus a supportive message for self-harm keywords.', 'Answers in multiple languages including Urdu, with right-to-left support.'],
    stack: ['Python', 'LangChain', 'Streamlit', 'OpenAI API'], role: 'Safety rules, prompts and interface',
    ask: 'MediGuide AI is an educational symptom-guidance app. It collects symptoms, runs a Python red-flag safety check that sets a minimum urgency, then asks an LLM for structured guidance. It never presents a confirmed diagnosis and always tells users to seek emergency help in urgent cases.',
  },
  {
    id: 'marketmind', title: 'MarketMind AI', kicker: 'Autonomous market-research agent', category: 'ai', year: '2026', motif: 'radar',
    palette: ['#5CFFC8', '#8B6CFF', '#0c1a1a'], status: 'Live demo', links: { live: 'https://marketmind-1.streamlit.app', github: 'https://github.com/imanumarrrr-dotcom/marketmind' },
    summary: 'A research agent that plans, searches a corpus, saves evidence with source references and writes a report, with a named human approving before anything is published.',
    bullets: ['Every claim is traceable to evidence and typed as fact, inference or recommendation.', 'Quality-control pass, injection flags, cost ceiling and an audit trail.', 'Console with live log, tool dispatcher lab and downloadable run bundle.'],
    stack: ['Python', 'OpenAI API', 'Streamlit', 'Pydantic'], role: 'Agent loop, evidence model and console UI',
    ask: 'MarketMind AI is an autonomous business-research agent in Streamlit. It analyses a request, plans sub-questions, searches a corpus with tools, stores evidence with source references, runs QC and drafts a report that a named human must approve. It has a live demo and a GitHub repository.',
  },
  {
    id: 'customai', title: 'Custom AI Chat', kicker: 'ChatGPT-style assistant', category: 'ai', year: '2026', motif: 'chat',
    palette: ['#8B6CFF', '#FF7A59', '#170f2a'], status: 'Case study', links: {},
    summary: 'A customised multi-chat assistant with a sidebar of conversations, editable system roles, streaming answers and saved history.',
    bullets: ['Create, search and delete chats; each chat keeps its own system role.', 'Streaming tokens with a thinking indicator and clean reveal animation.', 'History saved to disk and exported as Markdown.'],
    stack: ['Python', 'Streamlit', 'LangChain', 'OpenAI API'], role: 'Product design and implementation',
    ask: 'Custom AI Chat is a ChatGPT-style Streamlit assistant with multiple chats, search, per-chat system roles, streaming responses and saved history. It was later merged with the RAG agent to become MindDesk.',
  },
  {
    id: 'ragagent', title: 'RAG Agent (DocMind)', kicker: 'Ask your PDFs', category: 'ai', year: '2026', motif: 'nodes',
    palette: ['#5CE1FF', '#8B6CFF', '#0b1424'], status: 'Case study', links: {},
    summary: 'A document question-answering agent: upload PDFs, split and embed them, retrieve diverse passages with MMR and answer with page-level sources.',
    bullets: ['Chunking, embeddings and MMR retrieval over uploaded PDFs.', 'Quick actions for summaries and key points.', 'Source passages shown beside every answer.'],
    stack: ['Python', 'LangChain', 'FAISS', 'Streamlit'], role: 'Retrieval pipeline and interface',
    ask: 'The RAG Agent (DocMind) lets users upload PDFs and ask questions. It splits documents into chunks, embeds them with FAISS, retrieves passages with MMR and answers with source pages and quick actions like summarize and key points.',
  },
  {
    id: 'ceramichub', title: 'CeramicHub', kicker: 'E-commerce store + admin panel', category: 'web', year: '2026', motif: 'vase',
    palette: ['#EAAA00', '#FF7A59', '#2a140c'], status: 'Case study', links: {},
    summary: 'A fully working PHP and MySQL ceramics store with product listings, database-driven pages and an admin panel to manage the catalogue.',
    bullets: ['Storefront with product listings and database-driven pages.', 'Admin dashboard for managing products and orders.', 'Built and tested locally on XAMPP (Apache + MySQL).'],
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'XAMPP'], role: 'Full-stack developer',
    ask: 'CeramicHub is a ceramic e-commerce website built with PHP, MySQL, JavaScript, HTML and CSS on XAMPP. It has a customer storefront with product listings and an admin panel for managing the store.',
  },
];

export const JOURNEY = [
  { when: 'Nov 2022 – Jun 2026', t: 'BS Information Technology', d: 'Software engineering, database systems, web technologies and computer networks. Modules: Web Development, Human-Computer Interaction, Database Management, Computer Networks, IT Project Management.' },
  { when: '2024', t: 'Front-End Development Website', d: 'Responsive multi-page site in HTML5, CSS3 and vanilla JavaScript, built mobile-first for cross-device compatibility.' },
  { when: 'Feb – Mar 2026', t: 'Software Engineer Intern · Algolix Technologies', d: 'Eight weeks on live software projects in a collaborative engineering team, adapting to new tools and codebases under real deadlines.' },
  { when: '2026', t: 'ISPR Summer Internship Programme', d: 'Selected for a competitive 12-day national programme with 6,000+ interns across 21 stations. Documented expert sessions on media literacy, misinformation and national security in a structured report.' },
  { when: 'Now', t: 'Learning · Huawei HCCDA-AI', d: 'Studying AI at Corvit Lahore while building LLM and RAG applications.' },
];

// Notes the local "Lab" console searches (no API key needed). Add more notes to teach it more.
export const KNOWLEDGE = [
  { id: 'about', title: 'About Iman', tags: 'who iman umar introduction summary graduate developer', text: 'Iman Umar is a recent BS Information Technology graduate from Gujranwala, Pakistan. She builds responsive, user-friendly websites and AI applications, works across front end and back end with HTML, CSS, JavaScript, PHP and MySQL, and is a quick learner with strong leadership and teamwork skills looking to grow as a web developer and contribute to real projects from day one.' },
  { id: 'education', title: 'Education', tags: 'degree bsit university study studied graduate semester modules', text: 'Bachelor of Science in Information Technology, November 2022 to June 2026, covering software engineering, database systems, web technologies and computer networks. Relevant modules include Web Development, Human-Computer Interaction, Database Management, Computer Networks and IT Project Management.' },
  { id: 'algolix', title: 'Internship · Algolix Technologies', tags: 'internship intern algolix software engineer experience job work', text: 'Software Engineer Intern at Algolix Technologies (Pvt.) Ltd., February to March 2026: an 8-week internship contributing to live software projects in a collaborative team, adapting quickly to new tools and codebases under real-world deadlines, with recognition for work ethic and quality of output.' },
  { id: 'ispr', title: 'Internship · ISPR', tags: 'ispr internship summer programme media literacy national security report experience', text: 'ISPR Summer Internship Programme 2026: selected for a competitive 12-day national programme alongside 6,000+ interns across 21 stations. Attended expert sessions on media literacy, misinformation and disinformation detection and national security, and wrote a structured 12-day professional report.' },
  { id: 'learning', title: 'Currently learning', tags: 'learning learn huawei hccda ai course certification studying', text: 'Iman is currently learning Huawei HCCDA-AI at Corvit Lahore, alongside building LLM, RAG and Streamlit applications.' },
  { id: 'skills', title: 'Skills', tags: 'skills technologies tech stack languages tools frameworks', text: 'Technical: HTML5, CSS3, JavaScript, PHP, MySQL, XAMPP, responsive and mobile-first design. AI: Python, LangChain, OpenAI API, Streamlit and retrieval-augmented generation. Tools: Git and GitHub, Canva, MS Office. Soft skills: leadership, teamwork, communication, time management and problem solving.' },
  { id: 'contact', title: 'Contact', tags: 'contact email hire reach message whatsapp github linkedin instagram connect available', text: `You can email Iman at ${CONFIG.email}, message her on WhatsApp or use the contact form at the bottom of this page. Her code is on GitHub at ${CONFIG.github}. She is open to junior web developer roles, internships and selected freelance projects.` },
  { id: 'availability', title: 'Availability', tags: 'available availability hire freelance job opportunity open work remote', text: 'Iman is open to junior web developer and AI application roles, internships and selected freelance work. She is based in Gujranwala, Pakistan and can work remotely.' },
  { id: 'cv', title: 'CV', tags: 'cv resume download curriculum vitae', text: 'The CV can be downloaded from the Download CV button in the About section or from the contact section.' },
  ...PROJECTS.map((p) => ({
    id: p.id, title: `Project · ${p.title}`,
    tags: `project ${p.title} ${p.kicker} ${p.stack.join(' ')} ${p.category === 'ai' ? 'ai llm rag' : 'web ecommerce php'}`,
    text: `${p.ask} Tech: ${p.stack.join(', ')}. Status: ${p.status}.${p.links.live ? ' Live demo: ' + p.links.live + '.' : ''}${p.links.github ? ' GitHub: ' + p.links.github + '.' : ''}`,
  })),
  { id: 'projects', title: 'All projects', tags: 'projects portfolio work built made list everything', text: 'Iman has built eight projects: MindDesk (RAG plus custom ChatGPT), SupportPearlz AI (RAG support assistant), FinWise AI (finance assistant), MediGuide AI (symptom guidance), MarketMind AI (research agent), Custom AI Chat, RAG Agent (DocMind) and CeramicHub (PHP and MySQL e-commerce).' },
];

export const SUGGESTIONS = ['What did Iman build?', 'Tell me about MindDesk', 'Which internships has she done?', 'What is her tech stack?', 'How can I contact her?'];
