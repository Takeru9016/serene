"use client";

import { gsap } from "gsap";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { HeadingGlow } from "@/components/shared/heading-glow";
import { NightMotif } from "@/components/shared/night-motif";
import { ProgressDots } from "@/components/shared/progress-dots";
import { poetry } from "@/lib/content";

const PoetryScene = dynamic(() => import("@/components/three/poetry-scene"), {
  ssr: false,
});

export default function Poetry() {
  const [revealed, setRevealed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const chromeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  const revealChrome = useCallback(() => {
    setRevealed(true);
    gsap.fromTo(
      chromeRef.current,
      { opacity: 0, y: 16 },
      { duration: 0.7, ease: "power2.out", opacity: 1, y: 0 }
    );
  }, []);

  useEffect(() => {
    if (reducedMotion === true) {
      revealChrome();
    }
  }, [reducedMotion, revealChrome]);

  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-bg px-6 py-16">
      <NightMotif />
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10">
        <div
          className={
            reducedMotion === false && !revealed
              ? "flex flex-col items-center gap-3 text-center opacity-0"
              : "flex flex-col items-center gap-3 text-center"
          }
          ref={chromeRef}
        >
          <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
            {poetry.eyebrow}
          </p>
          <HeadingGlow>
            <h2 className="font-display text-3xl text-violet-deep italic sm:text-4xl">
              {poetry.title}
            </h2>
          </HeadingGlow>
        </div>

        {reducedMotion === false && (
          <div className="h-190 w-full max-w-full">
            <PoetryScene onOpen={revealChrome} />
          </div>
        )}

        {reducedMotion === true && (
          <p className="relative whitespace-pre-line text-center font-light font-sans text-ink text-xl leading-loose">
            {poetry.body}
          </p>
        )}

        {reducedMotion === false && revealed && (
          <Link
            className="font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
            href="/reasons"
          >
            Keep going →
          </Link>
        )}
        {reducedMotion === true && (
          <Link
            className="mt-4 font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
            href="/reasons"
          >
            Keep going →
          </Link>
        )}
      </div>
      <ProgressDots />
    </main>
  );
}
