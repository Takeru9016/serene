"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const WishCardScene = dynamic(
  () =>
    import("@/components/three/wish-card-scene").then((m) => m.WishCardScene),
  { ssr: false }
);

const MOTIF_KINDS = ["sprout", "moon", "hearts", "spark", "bloom"] as const;

export function WishCards({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const [activeCards, setActiveCards] = useState<boolean[]>(() =>
    new Array(items.length).fill(false)
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".wish-card");

      gsap.set(cards, { opacity: 0, y: 24 });

      cards.forEach((card, index) => {
        gsap.to(card, {
          duration: 0.8,
          ease: "power2.out",
          onStart: () => {
            setActiveCards((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          },
          opacity: 1,
          scrollTrigger: {
            start: "top 85%",
            trigger: card,
          },
          y: 0,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-5" ref={containerRef}>
      {items.map((item, index) => (
        <div className="wish-card relative" key={item}>
          {reducedMotion === false && (
            <div className="pointer-events-none absolute -top-9 -left-9 z-10 h-18 w-18">
              <WishCardScene
                active={activeCards[index]}
                kind={MOTIF_KINDS[index % MOTIF_KINDS.length]}
              />
            </div>
          )}
          {reducedMotion === true && (
            <div
              aria-hidden="true"
              className="absolute -top-2 -left-2 z-10 h-4 w-4 rounded-full bg-gold"
            />
          )}
          <p className="rounded-lg bg-surface px-6 py-5 font-light font-sans text-ink leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
