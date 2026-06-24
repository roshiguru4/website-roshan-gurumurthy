import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import { skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Uses — Roshan Gurumurthy",
};

export default function Uses() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <h1 className="text-sm font-medium">Uses</h1>
        <p className="mt-2 text-[15px] text-muted">
          What I&apos;m building with right now.
        </p>

        <div className="mt-12 space-y-10">
          {skills.map((group) => (
            <div
              key={group.group}
              className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:gap-6"
            >
              <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted sm:w-48">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-elevated px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
