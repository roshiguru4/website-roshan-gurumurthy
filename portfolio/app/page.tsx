import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-3">
        <span className="font-mono text-xs text-accent">{label}</span>
        <h2 className="text-sm font-medium uppercase tracking-[0.15em]">
          {title}
        </h2>
      </div>
      <div className="space-y-12">{children}</div>
    </section>
  );
}

function ExperienceItem({
  org,
  role,
  dates,
  blurb,
}: {
  org: string;
  role: string;
  dates: string;
  blurb: string;
}) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="text-lg font-medium">{org}</h3>
        <span className="font-mono text-xs text-muted">{dates}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">{role}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{blurb}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        {/* Intro */}
        <header className="fade-up mb-16 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src="/photos/headshot.jpg"
            alt="Roshan Gurumurthy"
            width={128}
            height={128}
            className="h-32 w-32 shrink-0 rounded-full border border-line object-cover"
            priority
          />
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            I&apos;m Roshan.
          </h1>
        </header>

        {/* About */}
        <div className="mb-16 max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/85">
          <p>
            I&apos;m a junior at Washington University in St. Louis studying
            Computer Science and Math. Most of what I think about lately is how
            to make machines actually find the right information — right now
            that means working on production RAG systems at Schaeffler, where I
            help engineers dig answers out of thousands of dense technical
            documents.
          </p>
          <p>
            Outside of that I build things because they bug me until they exist.
            I made{" "}
            <Link
              href="/projects"
              className="text-accent underline-offset-4 hover:underline"
            >
              embcache
            </Link>{" "}
            because re-embedding the same text over and over felt wasteful, and
            I built Nephly with my brother for a kidney-care challenge. I also
            train a fair number of ML models for fun — sports, finance, whatever
            dataset I can&apos;t stop thinking about.
          </p>
          <p>
            When I&apos;m not at a keyboard I&apos;m probably playing basketball,
            running our Bhangra team as VP, or way too deep in an NBA game and
            the prediction markets around it.
          </p>
        </div>

        {/* Contact */}
        <div className="mb-20 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a
            href="mailto:g.roshan@wustl.edu"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            g.roshan@wustl.edu
          </a>
          <a
            href="https://linkedin.com/in/roshan-gurumurthy"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            LinkedIn
          </a>
          <Link
            href="/projects"
            className="text-accent underline-offset-4 hover:underline"
          >
            See what I&apos;ve built →
          </Link>
        </div>

        {/* Photo strip */}
        <div className="mb-20 grid grid-cols-3 gap-3">
          {["photo-1", "photo-2", "photo-3"].map((p) => (
            <div
              key={p}
              className="relative aspect-[4/5] overflow-hidden border border-line bg-line/40"
            >
              <Image
                src={`/photos/${p}.jpg`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, 230px"
              />
            </div>
          ))}
        </div>

        {/* Experience */}
        <Section label="01" title="Where I've worked">
          <ExperienceItem
            org="Schaeffler Group"
            role="IT & Digital Intern"
            dates="May 2026 — Aug. 2026"
            blurb="I work on the search system that helps engineers find answers buried in thousands of technical documents — improving how those documents get parsed and broken up so the right passage actually surfaces when someone asks a question."
          />
          <ExperienceItem
            org="WashU CSE — Chien-Ju Ho Lab"
            role="Undergraduate Research Assistant"
            dates="Aug. 2025 — Present"
            blurb="I help run behavioral experiments studying how people defer to AI, and I wrangle the messy session data into something we can actually analyze across a few hundred participants."
          />
          <ExperienceItem
            org="WashU CSE"
            role="Teaching Assistant — Intro CS (Java)"
            dates="Aug. 2025 — Present"
            blurb="I sit with first-year students every week, read through their code, and help them untangle the bugs and mental models that trip everyone up early on."
          />
        </Section>

        {/* Education */}
        <Section label="02" title="Education">
          <div>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-medium">
                Washington University in St. Louis
              </h3>
              <span className="font-mono text-xs text-muted">
                Expected May 2027
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted">
              B.S. Computer Science + Mathematics, Minor in Finance
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
              GPA 3.75 · Dean&apos;s List
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
