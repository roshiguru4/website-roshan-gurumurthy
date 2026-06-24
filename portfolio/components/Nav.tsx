"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

/**
 * @param heroTheme Color of the hero this nav floats over before scroll.
 *   "dark" hero → light nav text; "light" hero → dark nav text.
 *   Once scrolled past 50px the nav gets a paper background and always uses dark text.
 */
export function Nav({ heroTheme = "light" }: { heroTheme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Over a dark hero (not yet scrolled) we need light text; otherwise dark.
  const onDark = heroTheme === "dark" && !scrolled;
  const logoColor = onDark ? "text-paper" : "text-ink";
  const linkColor = onDark ? "text-paper/70" : "text-muted";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className={`font-mono text-sm font-medium tracking-tight transition-colors hover:text-accent ${logoColor}`}
        >
          roshan_g
        </Link>
        <div className={`flex items-center gap-x-6 font-mono text-sm transition-colors ${linkColor}`}>
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <Link href="/projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <a
            href={profile.github}
            className="transition-colors hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      {/* Scroll progress */}
      <div
        className="h-px origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-8 font-mono text-xs text-muted">
        <p>Built with Next.js · Deployed on Vercel</p>
        <p className="mt-1">
          {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
