import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { links, research } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research — Roshan Gurumurthy",
};

export default function Research() {
  return (
    <main>
      <Nav />

      <h1 className="mb-10">Research</h1>

      <p>
        I&apos;m a research assistant in the{" "}
        <a href={links.holab} target="_blank" rel="noopener noreferrer">
          Chien-Ju Ho Lab
        </a>{" "}
        at WashU, where we study human-AI interaction — how people engage with,
        and decide when to trust, AI systems while making decisions.
      </p>

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

      <p>
        <Link href="/work">Back to work</Link>
      </p>
    </main>
  );
}
