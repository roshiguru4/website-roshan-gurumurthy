import Link from "next/link";
import { profile } from "@/lib/content";

export function Nav() {
  return (
    <nav className="flex gap-5 mb-12">
      <Link href="/">Home</Link>
      <Link href="/work">Work</Link>
      <Link href="/research">Research</Link>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </nav>
  );
}
