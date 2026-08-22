"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EnvelopeFlat } from "@/components/shared/envelope-flat";
import { HeadingGlow } from "@/components/shared/heading-glow";
import { NightMotif } from "@/components/shared/night-motif";
import { home } from "@/lib/content";

const HomeScene = dynamic(() => import("@/components/three/home-scene"), {
  ssr: false,
});

export default function Home() {
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  const handleOpen = () => setEnvelopeOpen(true);

  let envelopeContent: React.ReactNode = null;
  if (reducedMotion === true) {
    envelopeContent = <EnvelopeFlat onOpen={handleOpen} />;
  } else if (reducedMotion === false) {
    envelopeContent = <HomeScene onOpen={handleOpen} />;
  }

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-bg px-6 text-center">
      <NightMotif />

      {envelopeOpen ? null : (
        <div className="relative z-10 flex h-80 w-full max-w-md items-center justify-center">
          {envelopeContent}
        </div>
      )}

      {envelopeOpen ? (
        <div className="relative z-10 flex max-w-lg animate-fade-in flex-col items-center gap-6">
          <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
            {home.eyebrow}
          </p>
          <HeadingGlow>
            <h1 className="font-display text-4xl text-violet-deep italic sm:text-5xl">
              {home.title}
            </h1>
          </HeadingGlow>
          <p className="font-light font-sans text-ink text-lg">
            {home.subtitle}
          </p>
          <Link
            className="mt-4 font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
            href="/wishes"
          >
            {home.cta}
          </Link>
        </div>
      ) : null}
    </main>
  );
}
