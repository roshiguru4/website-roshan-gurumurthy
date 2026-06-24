import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
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
      : "Work — Roshan Gurumurthy",
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      <Nav />

      <h1 className="mb-4">{project.name}</h1>

      {project.description.map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      <p>{project.tech}</p>

      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.linkLabel ?? "Source"}
          </a>
        </p>
      )}

      <p>
        <Link href="/work">Back to work</Link>
      </p>
    </main>
  );
}
