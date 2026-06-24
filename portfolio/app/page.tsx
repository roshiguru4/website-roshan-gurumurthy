import Link from "next/link";
import { Nav, Footer } from "@/components/Nav";
import { Typewriter } from "@/components/Typewriter";
import { profile, typewriter } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
        <p
          className="fade-in font-mono text-xs uppercase tracking-[0.1em] text-muted"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
        </p>

        <div className="fade-in mt-6" style={{ animationDelay: "200ms" }}>
          <Typewriter
            phrases={typewriter}
            className="min-h-[2.4em] text-[2rem] font-medium leading-[1.2] text-primary sm:text-5xl"
          />
        </div>

        <div
          className="fade-in mt-12 flex gap-x-8 font-mono text-xs"
          style={{ animationDelay: "320ms" }}
        >
          <Link
            href="/projects"
            className="text-muted transition-colors hover:text-primary"
          >
            Projects →
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-primary"
          >
            GitHub →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
