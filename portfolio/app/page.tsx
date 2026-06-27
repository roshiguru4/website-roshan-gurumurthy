import Link from "next/link";
import { Nav } from "@/components/Nav";
import { profile, links } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <Nav />

      <h1 className="mb-4">Roshan Gurumurthy</h1>

      <p>
        I&apos;m Roshan, a <Link href={links.developer}>developer</Link> and{" "}
        <Link href={links.researcher}>researcher</Link>. I&apos;m studying CS and
        Math at{" "}
        <a href={links.washu} target="_blank" rel="noopener noreferrer">
          WashU
        </a>{" "}
        and currently interning at{" "}
        <a href={links.schaeffler} target="_blank" rel="noopener noreferrer">
          Schaeffler
        </a>{" "}
        building AI search infrastructure.
      </p>

      <p>
        Outside of work I&apos;m on WashU Bhangra, run pickup at the rec
        center, and play poker.
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

      <p>
        You can browse my <Link href="/work">work</Link> or{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          code
        </a>
        , or{" "}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          follow me online
        </a>
        .{" "}
        <a href={`mailto:${profile.email}`}>Reach out</a> if interested.
      </p>
    </main>
  );
}
