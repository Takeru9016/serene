"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ReasonCards({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".reason-card");

      gsap.set(cards, { opacity: 0, scale: 0.85, y: 16 });

      gsap.to(cards, {
        duration: 0.7,
        ease: "back.out(1.4)",
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          start: "top 85%",
          trigger: containerRef.current,
        },
        stagger: 0.12,
        y: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2"
      ref={containerRef}
    >
      {items.map((item, i) => (
        <div
          className="reason-card flex flex-col gap-2 rounded-lg bg-surface px-6 py-5"
          key={item}
        >
          <span className="font-display text-gold text-sm italic">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="font-light font-sans text-ink leading-relaxed">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
