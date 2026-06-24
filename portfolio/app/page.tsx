import Image from "next/image";
import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ParallaxImage } from "@/components/Parallax";
import { Counter } from "@/components/Counter";
import {
  profile,
  about,
  experience,
  education,
  skills,
  stats,
  photos,
} from "@/lib/content";

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-12 flex items-baseline gap-4 border-b border-line pb-3">
      <span className="font-mono text-xs text-accent">{label}</span>
      <h2 className="text-sm font-medium uppercase tracking-[0.18em]">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero — full viewport, big type */}
      <header className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="hero-glow" aria-hidden />
        <p className="hero-rise mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted" style={{ animationDelay: "0ms" }}>
          {profile.location}
        </p>
        <h1
          className="hero-name max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          {profile.name}
        </h1>
        <p
          className="hero-rise mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "320ms" }}
        >
          {profile.tagline}
        </p>
        <div
          className="scroll-cue absolute bottom-10 font-mono text-xs text-muted"
          aria-hidden
        >
          ↓ scroll
        </div>
      </header>

      {/* Full-bleed parallax headshot */}
      <ParallaxImage
        src={photos.headshot}
        alt={profile.name}
        speed={0.18}
        priority
        className="h-[70vh] w-full"
      />

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 py-28">
        <Reveal className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            I&apos;m {profile.firstName}.
          </h2>
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-ink/85">
          {about.map((para, i) => (
            <Reveal as="p" key={i} delay={i * 120}>
              {para}
            </Reveal>
          ))}
        </div>

        {/* Contact */}
        <Reveal className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="link-underline transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <Link
            href="/projects"
            className="link-underline text-accent"
          >
            See what I&apos;ve built →
          </Link>
        </Reveal>
      </section>

      {/* Stats band — animated, résumé-true numbers */}
      <section className="grain relative overflow-hidden bg-ink py-24 text-paper">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/50">
              By the numbers
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-3 text-sm leading-snug text-paper/60">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-3xl px-6 py-28">
        <SectionHeader label="01" title="Where I've worked" />
        <div className="space-y-14">
          {experience.map((item, i) => (
            <Reveal key={item.org} delay={i * 100}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-medium">{item.org}</h3>
                <span className="font-mono text-xs text-muted">{item.dates}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{item.role}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                {item.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-3xl px-6 py-28">
        <SectionHeader label="02" title="Education" />
        <div className="space-y-14">
          {education.map((edu) => (
            <Reveal key={edu.school}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-medium">{edu.school}</h3>
                <span className="font-mono text-xs text-muted">{edu.dates}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{edu.degree}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">
                {edu.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-3xl px-6 py-28">
        <SectionHeader label="03" title="Stack" />
        <div className="space-y-8">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 100}>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <p className="shrink-0 pt-0.5 font-mono text-xs uppercase tracking-wider text-muted sm:w-48">
                  {group.group}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dark photo strip — personal closer */}
      <section className="bg-ink py-28 text-paper">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/50">
              Off the clock
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.strip.map((src, i) => (
              <Reveal key={src} delay={i * 140}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-paper/10">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
