import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project
      ? `${project.name} — Roshan Gurumurthy`
      : "Project — Roshan Gurumurthy",
  };
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-primary/90">{body}</p>
    </div>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <Link href="/projects" className="transition-colors hover:text-primary">
            projects
          </Link>
          <span>/</span>
          <span className="text-primary">{project.slug}</span>
        </div>

        {/* Title */}
        <div className="mt-8 flex items-center gap-3">
          <h1 className="text-3xl font-medium tracking-tight">{project.name}</h1>
          {project.status && (
            <span className="rounded border border-line bg-elevated px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-2 font-mono text-xs text-muted">{project.year}</p>

        {/* Story */}
        <div className="mt-12 space-y-8">
          <Block label="Problem" body={project.detail.problem} />
          <Block label="Approach" body={project.detail.approach} />
          <Block label="Outcome" body={project.detail.outcome} />
        </div>

        {/* Tech */}
        <div className="mt-12 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-elevated px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-primary"
          >
            {project.linkLabel} →
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:text-primary"
            >
              Live demo →
            </a>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
