import Link from "next/link";

export function Nav() {
  return (
    <nav className="border-b border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight hover:text-accent"
        >
          roshan_g
        </Link>
        <div className="flex items-center gap-x-6 font-mono text-sm text-muted">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <a href="https://github.com/roshiguru4" className="hover:text-accent">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-8 font-mono text-xs text-muted">
        <p>Built with Next.js · Deployed on Vercel</p>
        <p className="mt-1">Roshan Gurumurthy · St. Louis, MO</p>
      </div>
    </footer>
  );
}
