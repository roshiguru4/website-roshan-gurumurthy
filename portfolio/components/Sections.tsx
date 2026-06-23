export function Hero() {
  return (
    <header className="fade-up mb-28">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Roshan Gurumurthy
      </p>
      <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
        I build AI retrieval systems,
        <br />
        ML pipelines, and tools
        <br />
        <span className="text-muted">people actually use.</span>
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        Computer Science + Math junior at Washington University in St. Louis,
        currently working on production RAG infrastructure at Schaeffler Group.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <a href="mailto:g.roshan@wustl.edu" className="underline-offset-4 hover:text-accent hover:underline">
          g.roshan@wustl.edu
        </a>
        <a href="https://github.com/roshiguru4" className="underline-offset-4 hover:text-accent hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/roshan-gurumurthy" className="underline-offset-4 hover:text-accent hover:underline">
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-24">
      <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-3">
        <span className="font-mono text-xs text-accent">{label}</span>
        <h2 className="text-sm font-medium uppercase tracking-[0.15em]">{title}</h2>
      </div>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

export function ExperienceItem({
  role,
  org,
  location,
  dates,
  bullets,
  tech,
}: {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
  tech: string[];
}) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-lg font-medium">{org}</h3>
        <span className="font-mono text-xs text-muted">{dates}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">
        {role} · {location}
      </p>
      <ul className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
            <span className="mt-2.5 h-px w-3 shrink-0 bg-accent/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="font-mono text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectItem({
  name,
  tagline,
  description,
  tech,
  link,
  linkLabel,
}: {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
}) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-lg font-medium">{name}</h3>
        <a
          href={link}
          className="font-mono text-xs text-accent underline-offset-4 hover:underline"
        >
          {linkLabel} →
        </a>
      </div>
      <p className="mt-1 text-[15px] font-medium text-ink/90">{tagline}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="font-mono text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function EducationBlock() {
  return (
    <div>
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-lg font-medium">Washington University in St. Louis</h3>
        <span className="font-mono text-xs text-muted">Expected May 2027</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">
        B.S. Computer Science + Mathematics, Minor in Finance · McKelvey School of Engineering
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
        GPA 3.75 · Dean&apos;s List (Fall 2024, Fall 2025, Spring 2026)
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">
        Coursework: Data Structures &amp; Algorithms, Machine Learning, Probability
        &amp; Statistics, Linear Algebra, Database Systems, Intro to Data Science,
        Intro to AI
      </p>
    </div>
  );
}

const SKILLS = {
  Languages: ["Python", "SQL", "Java", "R", "JavaScript", "HTML/CSS"],
  "Libraries & Frameworks": [
    "Pandas/NumPy",
    "Scikit-learn",
    "PyTorch/TensorFlow",
    "LangChain",
    "FastAPI",
    "Flask",
  ],
  "Tools & Platforms": [
    "Docker",
    "Azure (Blob, AI Search, OpenAI, AKS)",
    "Git",
    "Jira",
    "Power BI",
    "Excel VBA",
  ],
};

export function SkillsSpec() {
  return (
    <div className="border border-line bg-white/40 font-mono text-sm">
      {Object.entries(SKILLS).map(([category, items], i) => (
        <div
          key={category}
          className={`flex flex-col gap-2 px-5 py-4 sm:flex-row sm:gap-6 ${
            i !== 0 ? "border-t border-line" : ""
          }`}
        >
          <span className="w-48 shrink-0 text-[11px] uppercase tracking-wider text-muted">
            {category}
          </span>
          <span className="text-ink/85">{items.join("  ·  ")}</span>
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line pt-8 font-mono text-xs text-muted">
      <p>Built with Next.js · Deployed on Vercel</p>
      <p className="mt-1">Roshan Gurumurthy · St. Louis, MO</p>
    </footer>
  );
}
