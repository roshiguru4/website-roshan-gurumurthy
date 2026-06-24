"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

/**
 * Fixed top nav for the dark site. Transparent over the hero, then fades in a
 * blurred surface background once you scroll. A thin accent bar at the bottom
 * tracks scroll progress through the page.
 */
export function Nav() {
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

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-fg transition-colors hover:text-accent"
        >
          roshan_g
        </Link>
        <div className="flex items-center gap-x-6 font-mono text-sm text-muted">
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
