import { Nav, Footer } from "@/components/Nav";

type Project = {
  name: string;
  status?: string;
  link: string;
  linkLabel: string;
  tagline: string;
  description: string;
  tech: string[];
};

const PROJECTS: Project[] = [
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
      "Built with my brother for the KidneyX EMPOWER challenge. It runs retrieval over 400+ physician-reviewed Q&A entries to answer donor questions and point people toward the right pathway, wrapped in a React/Vite front end with a Node backend.",
    tech: ["React", "Vite", "Node.js", "OpenAI"],
  },
  {
    name: "Dance Practice Tool",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tagline:
      "A web app for looping and annotating dance audio — actually used by my team.",
    description:
      "A Flask + SQLAlchemy CRUD app that lets dancers mark up tracks, set loop points for tricky sections, and save notes per song. My Bhangra team uses it to drill choreography during practice.",
    tech: ["Flask", "SQLAlchemy", "Bootstrap"],
  },
  {
    name: "ML Projects",
    link: "https://github.com/roshiguru4",
    linkLabel: "GitHub",
    tagline: "One repo, three models I built to scratch different itches.",
    description:
      "Predicting NBA career longevity from rookie stats (77.2% accuracy), classifying obesity risk with a random forest (95.5%), and a buy/hold/sell risk classifier for the S&P 500 (87.7%). Each one started as a dataset I couldn't stop poking at.",
    tech: ["Scikit-learn", "Pandas", "BeautifulSoup", "yfinance"],
  },
];

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="border-t border-line py-10">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-medium">{project.name}</h2>
          {project.status && (
            <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              {project.status}
            </span>
          )}
        </div>
        <a
          href={project.link}
          className="font-mono text-xs text-accent underline-offset-4 hover:underline"
        >
          {project.linkLabel} →
        </a>
      </div>
      <p className="mt-2 text-[15px] font-medium text-ink/90">
        {project.tagline}
      </p>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <header className="mb-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Things I&apos;ve built
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            A mix of tools I needed, problems I couldn&apos;t stop thinking
            about, and models I trained for the fun of it.
          </p>
        </header>

        <div>
          {PROJECTS.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
