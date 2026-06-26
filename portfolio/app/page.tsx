import Link from "next/link";
import { Nav } from "@/components/Nav";
import { profile, links, research } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Nav />

      <h1 className="mb-4">Roshan Gurumurthy</h1>

      <p>
        I&apos;m a <Link href={links.developer}>developer</Link> and{" "}
        <Link href={links.researcher}>researcher</Link>. I study CS and Math at{" "}
        <a href={links.washu} target="_blank" rel="noopener noreferrer">
          WashU
        </a>{" "}
        and I&apos;m currently interning at{" "}
        <a href={links.schaeffler} target="_blank" rel="noopener noreferrer">
          Schaeffler
        </a>{" "}
        building AI search infrastructure. I&apos;ve been coding for about four
        years, mostly on retrieval systems and ML pipelines.
      </p>

      <p>
        Outside of work I&apos;m on WashU Bhangra, run pickup at the rec
        center, and play poker.
        I&apos;m also building <Link href="/work/nephly">Nephly</Link> with my
        brother — a navigation tool for people exploring kidney donation.
      </p>

      <p>Some things I&apos;ve built:</p>

      <ul>
        <li>
          <Link href="/work/genie-search">Genie Search</Link>
        </li>
        <li>
          <Link href="/work/embcache">embcache</Link>
        </li>
        <li>
          <Link href="/work/nephly">Nephly</Link>
        </li>
        <li>
          <Link href="/work/sp500-classifier">S&amp;P 500 risk classifier</Link>
        </li>
        <li>
          <Link href="/work/dance-practice-tool">Dance practice tool</Link>
        </li>
      </ul>

      <p>Research posters from the Ho Lab:</p>

      {research.map((r) => (
        <p key={r.link}>
          <a href={r.link} target="_blank" rel="noopener noreferrer">
            {r.title}
          </a>{" "}
          ({r.term}). {r.description}
        </p>
      ))}

      <p>
        You can browse my <Link href="/work">work</Link> or{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          code
        </a>
        , or{" "}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          follow me online
        </a>
        . I&apos;m looking for full-time roles starting Summer 2027.{" "}
        <a href={`mailto:${profile.email}`}>Reach out</a> if interested.
      </p>
    </main>
  );
}
