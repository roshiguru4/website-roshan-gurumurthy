import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { projects } from "@/lib/content";

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

      <h1 className="mb-4">Research</h1>

      <p>
        I also do human-AI interaction research in the Ho Lab.{" "}
        <Link href="/research">See my research →</Link>
      </p>
    </main>
  );
}
