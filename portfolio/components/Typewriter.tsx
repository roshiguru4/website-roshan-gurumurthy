"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 50; // per character
const HOLD_MS = 1800; // pause once a phrase is fully typed
const FADE_MS = 300; // fade-out before the next phrase

/**
 * Terminal-style typewriter. Types each phrase out, holds, fades, types the
 * next. A static (non-blinking) accent caret sits at the end of the typed text —
 * "this just ran", not "this is an animation".
 *
 * Respects prefers-reduced-motion: shows the first phrase immediately, no timers.
 */
export function Typewriter({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [fading, setFading] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || phrases.length === 0) return;
    const phrase = phrases[idx];
    const timers: ReturnType<typeof setTimeout>[] = [];
    let char = 0;
    setText("");
    setFading(false);

    const typeNext = () => {
      char += 1;
      setText(phrase.slice(0, char));
      if (char < phrase.length) {
        timers.push(setTimeout(typeNext, TYPE_MS));
      } else {
        timers.push(
          setTimeout(() => {
            setFading(true);
            timers.push(
              setTimeout(
                () => setIdx((i) => (i + 1) % phrases.length),
                FADE_MS
              )
            );
          }, HOLD_MS)
        );
      }
    };

    timers.push(setTimeout(typeNext, TYPE_MS));
    return () => timers.forEach(clearTimeout);
  }, [idx, reduced, phrases]);

  const shown = reduced ? phrases[0] ?? "" : text;

  return (
    <div className={className}>
      <span
        className="transition-opacity"
        style={{
          opacity: fading && !reduced ? 0 : 1,
          transitionDuration: `${FADE_MS}ms`,
        }}
      >
        {shown}
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block bg-accent"
        style={{ width: "2px", height: "1.1em", verticalAlign: "middle" }}
      />
    </div>
  );
}
