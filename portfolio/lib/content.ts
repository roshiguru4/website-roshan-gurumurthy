// Single source of truth for site content.

export const profile = {
  name: "Roshan Gurumurthy",
  email: "g.roshan@wustl.edu",
  github: "https://github.com/roshiguru4",
  linkedin: "https://linkedin.com/in/roshan-gurumurthy",
};

// URLs for the inline links in the home-page intro. Edit these in one place.
// A few are best guesses — swap in the real URLs when you have them.
export const links = {
  developer: "/work",
  researcher: "/research",
  washu: "https://wustl.edu",
  schaeffler: "https://www.schaeffler.com",
  holab: "https://chienjuho.com",
};

export type Project = {
  slug: string;
  name: string;
  /** One or more paragraphs of description. */
  description: string[];
  /** Tech line, dot-separated, shown under the description. */
  tech: string;
  /** Optional source/live link for the detail page. */
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "genie-search",
    name: "Genie Search",
    description: [
      "A production RAG platform I built at Schaeffler. It indexes internal documents and surfaces answers through a chat interface, running on Azure OpenAI, Azure AI Search, and Kubernetes. Most of the hard work was in the chunking strategy and making retrieval reliable across document types that don't behave well.",
    ],
    tech: "Azure OpenAI · Azure AI Search · AKS · Docker · Python",
  },
  {
    slug: "embcache",
    name: "embcache",
    description: [
      "A drop-in caching layer for text embeddings, now published on PyPI (pip install embcache). Wrap any embedding function and identical inputs come back instantly instead of hitting the API again. Model-aware keys keep different models from colliding, vectors are packed as float32 to keep storage tight, and it tracks every call, token, and dollar it saves across runs.",
      "On a ~1,500-chunk benchmark with lots of repeats, it cut API calls from 1,500 to 260, tokens from ~375K to ~65K, and per-run cost from $0.0075 to $0.0013 — about 148 seconds saved each run. Backed by SQLite out of the box or Redis, with 74 tests behind it.",
    ],
    tech: "Python · SQLite · Redis",
    link: "https://github.com/roshiguru4/embcache",
    linkLabel: "Source",
  },
  {
    slug: "nephly",
    name: "Nephly",
    description: [
      "Built with my brother for the KidneyX EMPOWER Challenge. It's a navigator for people exploring living kidney donation — intake, eligibility screening, and a warm handoff to a nephrologist if they qualify. The hard part was structuring the knowledge base to handle the range of situations people come in with.",
    ],
    tech: "React · Node.js · Azure OpenAI · LangChain",
  },
  {
    slug: "sp500-classifier",
    name: "S&P 500 risk classifier",
    description: [
      "A buy/hold/sell classifier trained on engineered features across S&P 500 equities — Sharpe ratio, beta, rolling volatility. I benchmarked a random forest against a TensorFlow net to see where ensembles pull ahead. The random forest won on accuracy and interpretability.",
    ],
    tech: "Scikit-learn · TensorFlow · Pandas · yfinance",
    link: "https://github.com/roshiguru4",
    linkLabel: "Source",
  },
  {
    slug: "dance-practice-tool",
    name: "Dance practice tool",
    description: [
      "A web app for looping and annotating dance audio that my team actually uses. Dancers upload tracks, set loop points for the tricky sections, and leave timestamped notes per song — so a team stops passing audio files around in group chats. JWT auth for multi-user access, with the audio-metadata schema modeled in SQLAlchemy.",
    ],
    tech: "Flask · SQLAlchemy · Bootstrap · JWT",
    link: "https://github.com/roshiguru4",
    linkLabel: "Source",
  },
];

export type Research = {
  title: string;
  /** Lab + term, e.g. "Ho Lab · Fall 2025". */
  term: string;
  description: string;
  /** Link to the poster. */
  link: string;
  linkLabel: string;
};

export const research: Research[] = [
  {
    title: "Does Role Framing Shape Cognitive Engagement in AI-Assisted Decisions?",
    term: "Ho Lab · Spring 2026",
    description:
      "With Tory Farmer. A between-subjects priming experiment on AI-assisted credit decisions: does framing someone as the decision-maker versus a reviewer of the AI change how critically they engage with it? We measure decision time, how often people inspect the AI's reasoning, and how often they just accept its answer.",
    link: "https://canva.link/x235l9bkags1iqx",
    linkLabel: "Poster",
  },
  {
    title: "Judging LLM Debates: How Judge Experience and Evidence Styles Affect Accuracy",
    term: "Ho Lab · Fall 2025",
    description:
      "With Andrew Tian. We test whether giving human judges verifiable evidence — runnable code they can actually execute and check — helps them more accurately referee debates between LLMs, and whether novice judges gain more from that evidence than experts do.",
    link: "https://canva.link/jp919xbjzsn1vf7",
    linkLabel: "Poster",
  },
];
