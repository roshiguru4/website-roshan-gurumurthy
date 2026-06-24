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
  researcher: "/work",
  washu: "https://wustl.edu",
  schaeffler: "https://www.schaeffler.com",
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
      "A drop-in caching layer for text embeddings. Wrap any embedding function and identical inputs return instantly without hitting the API again. It uses model-aware keys so different models never collide, and it tracks exactly how many calls and tokens it's saved. Shipping as an open-source Python package.",
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
