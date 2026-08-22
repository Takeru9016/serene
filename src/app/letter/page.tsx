"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LetterFlat } from "@/components/shared/letter-flat";
import { NightMotif } from "@/components/shared/night-motif";
import { ProgressDots } from "@/components/shared/progress-dots";
import { letter } from "@/lib/content";

const LetterScene = dynamic(() => import("@/components/three/letter-scene"), {
  ssr: false,
});

export default function Letter() {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const [letterOpen, setLetterOpen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  const handleOpen = () => setLetterOpen(true);

  let letterMotif: React.ReactNode = null;
  if (reducedMotion === true) {
    letterMotif = <LetterFlat onOpen={handleOpen} />;
  } else if (reducedMotion === false) {
    letterMotif = <LetterScene onOpen={handleOpen} />;
  }

  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-bg px-6 py-16">
      <NightMotif />
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-10">
        {letterOpen ? null : (
          <div className="flex h-72 w-full max-w-xs items-center justify-center">
            {letterMotif}
          </div>
        )}

        {letterOpen ? (
          <div className="flex animate-fade-in flex-col items-center gap-10">
            <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
              {letter.eyebrow}
            </p>
            <div className="flex flex-col gap-5">
              {letter.body.map((paragraph) => (
                <p
                  className="font-light font-sans text-ink leading-relaxed"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="font-script text-3xl text-violet-deep">
              {letter.signature}
            </p>
            <p
              className="mt-8 font-sans text-orchid text-sm uppercase tracking-[0.3em]"
              id="letter-reveal"
            >
              {letter.revealCue}
            </p>
          </div>
        ) : null}
      </div>
      <ProgressDots />
    </main>
  );
}
