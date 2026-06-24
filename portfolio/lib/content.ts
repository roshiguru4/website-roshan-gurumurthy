// Single source of truth for all site content.
// To add or edit anything on the site, change it here — the pages render from these objects.

export const profile = {
  name: "Roshan Gurumurthy",
  firstName: "Roshan",
  location: "St. Louis, MO",
  email: "g.roshan@wustl.edu",
  linkedin: "https://linkedin.com/in/roshan-gurumurthy",
  github: "https://github.com/roshiguru4",
};

// ─── HERO TYPEWRITER ─────────────────────────────────────────────────────
// The home page cycles through these lines, one at a time. Keep them
// specific and real — exact systems and numbers, not "I build AI things".
// Format that reads well: <thing> → <what it does, concretely>.
export const typewriter: string[] = [
  "Genie Search → RAG over 4,000+ engineering PDFs on AKS",
  "embcache → sub-millisecond embedding retrieval, with receipts",
  "Nephly → triage for kidney donors across 400+ reviewed answers",
  "S&P 500 classifier → buy / hold / sell at 87.7% accuracy",
];

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
  /** URL slug for /projects/[slug]. Keep lowercase, hyphenated. */
  slug: string;
  name: string;
  /** One-line description shown in the list. */
  description: string;
  /** Year shown on the right of the list row. */
  year: string;
  status?: string;
  /** Source repo. */
  link: string;
  linkLabel: string;
  /** Optional deployed/demo URL. Renders a "Live demo →" link when set. */
  liveLink?: string;
  tech: string[];
  /** Detail page story — keep each to a short paragraph. */
  detail: {
    problem: string;
    approach: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "embcache",
    name: "embcache",
    description: "A caching layer for text embeddings that proves its own savings.",
    year: "2025",
    status: "In progress",
    link: "https://github.com/roshiguru4/embcache",
    linkLabel: "GitHub",
    tech: ["Python", "SQLite", "Redis"],
    detail: {
      problem:
        "Embedding the same text twice is pure waste — you pay the API again for a vector you already computed. In any RAG pipeline that re-indexes or re-runs, that adds up fast in both latency and dollars.",
      approach:
        "embcache wraps any embedding function. Identical text returns a cached vector instantly instead of hitting the API. Keys are model-aware so different models never collide, vectors are packed as float32 to keep storage tight, and every hit is logged.",
      outcome:
        "It doesn't just save calls — it proves it, tracking exactly how many calls, tokens, and dollars it has saved you. Sub-millisecond retrieval on repeat lookups, with a receipt.",
    },
  },
  {
    slug: "nephly",
    name: "Nephly",
    description: "AI navigation that helps potential kidney donors find their next step.",
    year: "2024",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tech: ["React", "Node.js", "Azure OpenAI", "LangChain", "Vercel"],
    detail: {
      problem:
        "Becoming a kidney donor means navigating a maze of eligibility rules and medical questions, and most people don't know where to even start. Built with my brother for the KidneyX EMPOWER Challenge.",
      approach:
        "I wrote the RAG pipeline and the Excel-parsing logic that structures 400+ physician-reviewed Q&A entries across 15 categories into a knowledge base, behind a five-stage flow from intake and eligibility screening to retrieval and a warm handoff.",
      outcome:
        "Each person gets triaged toward an eligibility pathway or a referral to a nephrologist. It went in front of judges as part of our competition submission.",
    },
  },
  {
    slug: "dance-practice-tool",
    name: "Dance Practice Tool",
    description: "A web app for looping and annotating dance audio that my team uses.",
    year: "2024",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tech: ["Flask", "SQLAlchemy", "Bootstrap", "JWT"],
    detail: {
      problem:
        "My dance team kept passing audio files around in group chats, with loop points and notes living nowhere. Drilling a tricky 8-count meant scrubbing the same clip by hand every practice.",
      approach:
        "A full-stack CRUD app where dancers upload tracks, set loop points for hard sections, and leave timestamped notes per song. I added JWT auth for secure multi-user access and designed the relational audio-metadata schema in SQLAlchemy.",
      outcome:
        "It replaced the group-chat shuffle — the team actually uses it to run practice.",
    },
  },
  {
    slug: "ml-projects",
    name: "ML Projects",
    description: "One repo, three models I built to scratch different itches.",
    year: "2023",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tech: ["Scikit-learn", "TensorFlow", "Pandas", "BeautifulSoup", "yfinance"],
    detail: {
      problem:
        "Three datasets I couldn't stop poking at: S&P 500 risk, NBA careers, and obesity risk. Each one was a question I wanted a model to answer.",
      approach:
        "The one I keep coming back to is a buy/hold/sell risk classifier for the S&P 500 — a random forest trained on 9 engineered features (Sharpe ratio, beta, 30-day volatility) across 500+ equities, benchmarked against a TensorFlow/Keras net to see how ensembles stack up against deep models.",
      outcome:
        "87.7% accuracy on the S&P 500 classifier, plus models predicting NBA career longevity from rookie stats (77.2%) and classifying obesity risk (95.5%).",
    },
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
