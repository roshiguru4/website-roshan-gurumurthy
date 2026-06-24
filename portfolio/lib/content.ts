// Single source of truth for all site content.
// To add or edit anything on the site, change it here — the pages render from these objects.

export const profile = {
  name: "Roshan Gurumurthy",
  firstName: "Roshan",
  // Short tagline shown under the name in the hero.
  tagline: "CS + Math junior at WashU, building RAG search and ML systems that find the right answer, not just a close one.",
  location: "St. Louis, MO",
  email: "g.roshan@wustl.edu",
  linkedin: "https://linkedin.com/in/roshan-gurumurthy",
  github: "https://github.com/roshiguru4",
};

// 3 conversational paragraphs for the About section. Plain English, no resume bullets.
export const about: string[] = [
  "I'm a junior at WashU studying Computer Science and Math. Lately I keep circling the same hard problem: getting machines to find the right answer instead of one that's merely close. Right now that's my job at Schaeffler, where I work on Genie Search, an internal RAG platform that pulls answers out of 4,000+ engineering documents so people stop digging through PDFs by hand.",
  "Most of what I build starts as something that annoyed me. embcache came from watching the same text get embedded over and over and wanting that waste to stop. I built Nephly with my brother to help kidney donors figure out their next step. And I train ML models whenever a dataset gets stuck in my head, usually something about sports or markets.",
  "Away from my laptop I'm on a basketball court, dancing, or watching an NBA game with a prediction-market position riding on it.",
];

export type Experience = {
  org: string;
  role: string;
  dates: string;
  blurb: string;
};

export const experience: Experience[] = [
  {
    org: "Schaeffler Group",
    role: "IT & Digital Intern",
    dates: "May 2026 — Aug. 2026",
    blurb:
      "This summer I'm on Genie Search, Schaeffler's internal RAG platform for engineering documents. I swapped the parser that reads those documents from Docling to MinerU and ran 4,000+ files through it at a 93.1% parse rate, rebuilt the Azure pipeline that turns raw files into clean markdown, and prototyped a smarter chunking strategy projected to lift retrieval accuracy a few percent.",
  },
  {
    org: "WashU CSE — Chien-Ju Ho Lab",
    role: "Undergraduate Research Assistant",
    dates: "Aug. 2025 — Present",
    blurb:
      "I built the full data pipeline for a 150+ participant study on how people decide when to lean on AI: a browser-based behavioral experiment that measures when people disengage under different levels of AI control, plus a Python ETL job that turns raw session logs into clean, analysis-ready features.",
  },
  {
    org: "WashU CSE",
    role: "Teaching Assistant — CS 1301 (Intro to CS, Java)",
    dates: "Aug. 2025 — Present",
    blurb:
      "Every week I read through 20+ Java submissions and work through 15+ debugging questions a session with first-year students, untangling the OOP, recursion, and edge-case mental models that trip almost everyone up early on.",
  },
];

export type Education = {
  school: string;
  degree: string;
  dates: string;
  detail: string;
};

export const education: Education[] = [
  {
    school: "Washington University in St. Louis",
    degree: "B.S. Computer Science + Mathematics, Minor in Finance",
    dates: "Expected May 2027",
    detail: "GPA 3.75 · Dean's List",
  },
];

export type Project = {
  name: string;
  status?: string;
  link: string;
  linkLabel: string;
  /** Optional deployed/demo URL. Renders a "Live demo →" link when set. */
  liveLink?: string;
  tagline: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "embcache",
    status: "In progress",
    link: "https://github.com/roshiguru4/embcache",
    linkLabel: "GitHub",
    tagline:
      "A drop-in caching layer for text embeddings that proves its own savings.",
    description:
      "Wrap any embedding function and identical text comes back instantly, for free, instead of hitting the API again. It uses model-aware keys so different models never collide, packs vectors as float32 to keep storage tight, and tracks exactly how many calls, tokens, and dollars it's saved you.",
    tech: ["Python", "SQLite", "Redis"],
  },
  {
    name: "Nephly",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tagline:
      "An AI navigation tool that helps potential kidney donors figure out their next step.",
    description:
      "Built with my brother for the KidneyX EMPOWER Challenge. I wrote the RAG pipeline and the Excel-parsing logic behind it, structuring 400+ physician-reviewed Q&A entries across 15 categories into a knowledge base. The whole thing runs as a five-stage flow, from intake and eligibility screening to retrieval and a warm handoff, triaging each person toward an eligibility pathway or a referral to a nephrologist. It went in front of judges as part of our competition submission.",
    tech: ["React", "Node.js", "Azure OpenAI", "LangChain", "Vercel"],
  },
  {
    name: "Dance Practice Tool",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tagline:
      "A web app for looping and annotating dance audio that my team actually uses.",
    description:
      "A full-stack CRUD app that lets dancers upload tracks, set loop points for tricky sections, and leave timestamped notes per song, so a team stops passing audio files around in group chats. I added JWT auth for secure multi-user access and designed the relational audio-metadata schema in SQLAlchemy.",
    tech: ["Flask", "SQLAlchemy", "Bootstrap", "JWT"],
  },
  {
    name: "ML Projects",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tagline: "One repo, three models I built to scratch different itches.",
    description:
      "The one I keep coming back to is a buy/hold/sell risk classifier for the S&P 500: a random forest trained on 9 engineered features (Sharpe ratio, beta, 30-day volatility) across 500+ equities, hitting 87.7% accuracy and benchmarked against a TensorFlow/Keras net to see how ensembles stack up against deep models. The other two predict NBA career longevity from rookie stats (77.2%) and classify obesity risk with a random forest (95.5%). Each one started as a dataset I couldn't stop poking at.",
    tech: ["Scikit-learn", "TensorFlow", "Pandas", "BeautifulSoup", "yfinance"],
  },
];

// Tech stack, grouped for the "Stack" section. Keep these to what you actually use.
export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["Python", "SQL", "Java", "R", "JavaScript", "HTML / CSS"] },
  {
    group: "Libraries & Frameworks",
    items: [
      "PyTorch / TF",
      "Scikit-learn",
      "LangChain",
      "FastAPI",
      "Flask",
      "Pandas / NumPy",
      "REST APIs",
      "Plotly",
    ],
  },
  {
    group: "Tools & Platforms",
    items: ["Azure", "Docker", "Git", "Jira", "Jupyter", "Power BI", "Excel VBA"],
  },
];

// Headline numbers for the animated stats band. Keep these résumé-true.
export type Stat = { value: number; suffix?: string; label: string; decimals?: number };

export const stats: Stat[] = [
  { value: 4000, suffix: "+", label: "engineering docs indexed at Schaeffler" },
  { value: 93.1, suffix: "%", label: "document parse success rate", decimals: 1 },
  { value: 150, suffix: "+", label: "participants in the Ho Lab study" },
  { value: 87.7, suffix: "%", label: "accuracy on the S&P 500 classifier", decimals: 1 },
];

// Photos used in the full-bleed and strip sections. Replace the files in public/photos/.
export const photos = {
  headshot: "/photos/headshot.jpg",
  strip: ["/photos/photo-1.jpg", "/photos/photo-2.jpg", "/photos/photo-3.jpg"],
};
