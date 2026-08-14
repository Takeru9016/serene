"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function WishCards({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".wish-card");

      gsap.set(cards, { opacity: 0, y: 24 });

      gsap.to(cards, {
        duration: 0.8,
        ease: "power2.out",
        opacity: 1,
        scrollTrigger: {
          start: "top 85%",
          trigger: containerRef.current,
        },
        stagger: 0.15,
        y: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-5" ref={containerRef}>
      {items.map((item) => (
        <p
          className="wish-card rounded-lg bg-surface px-6 py-5 font-light font-sans text-ink leading-relaxed"
          key={item}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
