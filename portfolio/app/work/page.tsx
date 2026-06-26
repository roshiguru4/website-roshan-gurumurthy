import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { projects, research } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — Roshan Gurumurthy",
};

export default function Work() {
  return (
    <main>
      <Nav />

      <h1 className="mb-10">Work</h1>

      {projects.map((project) => (
        <section key={project.slug} className="mb-10">
          <h2>
            <Link href={`/work/${project.slug}`}>{project.name}</Link>
          </h2>
          {project.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p>{project.tech}</p>
        </section>
      ))}

      <h1 className="mb-10">Research</h1>

      {research.map((r) => (
        <section key={r.link} className="mb-10">
          <h2>
            <a href={r.link} target="_blank" rel="noopener noreferrer">
              {r.title}
            </a>
          </h2>
          <p>{r.description}</p>
          <p>{r.term}</p>
        </section>
      ))}
    </main>
  );
}
