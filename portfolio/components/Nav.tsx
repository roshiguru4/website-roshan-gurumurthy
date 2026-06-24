"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const LINKS = [
  { href: "/projects", label: "Projects", external: false },
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.resume, label: "Resume", external: true },
];

/**
 * Fixed top nav. Transparent on load; a blurred base-color background fades in
 * only once you scroll past 40px (prevents the frosted glass flashing on load).
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-line bg-base/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-xs text-muted transition-colors hover:text-primary"
        >
          rg
        </Link>
        <div className="flex items-center gap-x-6 font-mono text-xs">
          {LINKS.map((link) => {
            const active = !link.external && pathname.startsWith(link.href);
            const className = `transition-colors hover:text-primary ${
              active ? "text-primary" : "text-muted"
            }`;
            return link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <div className="space-y-1">
          <p>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
          </p>
          <p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              github.com/roshiguru4
            </a>
          </p>
        </div>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
