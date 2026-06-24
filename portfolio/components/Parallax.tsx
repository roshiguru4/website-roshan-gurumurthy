"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** How much the image drifts relative to scroll. 0 = static, 0.3 = subtle. */
  speed?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Full-bleed image that drifts slowly as you scroll past it. Native scroll
 * listener + transform, throttled with requestAnimationFrame. Disabled for
 * users who prefer reduced motion.
 */
export function ParallaxImage({
  src,
  alt,
  speed = 0.25,
  className = "",
  priority = false,
}: ParallaxImageProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      // Only compute while the section is anywhere near the viewport.
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        ticking = false;
        return;
      }
      // Distance of section center from viewport center.
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      img.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Oversized so the parallax drift never exposes an edge. */}
      <div ref={imgRef} className="absolute inset-0 -top-[15%] h-[130%] w-full will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
