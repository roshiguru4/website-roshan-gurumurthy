import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/content";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 80}>
      <div className="group relative border-t border-line py-12 transition-[padding] duration-300 hover:pl-5">
        {/* Accent bar slides in on hover */}
        <span
          className="absolute left-0 top-12 h-9 w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-y-100"
          aria-hidden
        />
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent">
              {project.name}
            </h2>
            {project.status && (
              <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                {project.status}
              </span>
            )}
          </div>
          <div className="flex items-center gap-x-5">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent underline-offset-4 transition-colors hover:underline"
              >
                Live demo →
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent underline-offset-4 transition-colors hover:underline"
            >
              {project.linkLabel} →
            </a>
          </div>
        </div>
        <p className="mt-3 text-lg font-medium text-ink/90">{project.tagline}</p>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <>
      <Nav heroTheme="dark" />

      {/* Dark full-viewport hero */}
      <header className="flex min-h-[80vh] flex-col justify-center bg-ink px-6 text-paper">
        <div className="mx-auto w-full max-w-5xl">
          <p className="hero-rise mb-6 font-mono text-xs uppercase tracking-[0.3em] text-paper/50" style={{ animationDelay: "0ms" }}>
            Selected work
          </p>
          <h1
            className="hero-rise text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Things I&apos;ve built
          </h1>
          <p
            className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-paper/70"
            style={{ animationDelay: "320ms" }}
          >
            A mix of tools I needed, problems I couldn&apos;t stop thinking about,
            and models I trained for the fun of it.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-24">
        {projects.map((p, i) => (
          <ProjectRow key={p.name} project={p} index={i} />
        ))}
      </main>

      <Footer />
    </>
  );
}
