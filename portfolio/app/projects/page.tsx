import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { projects, type Project } from "@/lib/content";

function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group -mx-4 flex items-center justify-between gap-6 border-b border-line px-4 py-4 transition-colors duration-[120ms] ease-out hover:bg-surface"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          <span className="text-[15px] font-medium text-primary transition-colors duration-[120ms] group-hover:text-accent">
            {project.name}
          </span>
          {project.status && (
            <span className="rounded border border-line bg-elevated px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-0.5 truncate text-[13px] text-muted">
          {project.description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <div className="hidden items-center gap-2 md:flex">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-elevated px-1.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="font-mono text-xs tabular-nums text-muted">
          {project.year}
        </span>
        <span
          aria-hidden
          className="text-muted transition-[transform,color] duration-[120ms] ease-out group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <h1 className="text-sm font-medium">Projects</h1>
        <p className="mt-2 text-[15px] text-muted">
          Tools I needed, problems I couldn&apos;t stop thinking about, and
          models I trained for the fun of it.
        </p>

        <div className="mt-10 border-t border-line">
          {projects.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
