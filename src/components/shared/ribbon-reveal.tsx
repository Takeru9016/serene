"use client";

import { gsap } from "gsap";
import { useCallback, useRef, useState } from "react";

function RibbonBow() {
  return (
    <svg
      aria-hidden="true"
      className="text-gold"
      height="72"
      viewBox="0 0 96 72"
      width="96"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M48 30 C 30 6, 4 10, 12 26 C 18 38, 40 34, 48 30 Z" />
        <path d="M48 30 C 66 6, 92 10, 84 26 C 78 38, 56 34, 48 30 Z" />
        <circle cx="48" cy="30" r="4" />
        <path d="M48 32 L 40 70" />
        <path d="M48 32 L 56 70" />
      </g>
    </svg>
  );
}

export function RibbonReveal({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  const ribbonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleUnwrap = useCallback(() => {
    if (revealed) {
      return;
    }
    setRevealed(true);

    const tl = gsap.timeline();
    tl.to(ribbonRef.current, {
      duration: 0.6,
      ease: "power2.in",
      opacity: 0,
      scale: 1.1,
    }).fromTo(
      contentRef.current,
      { opacity: 0, y: 16 },
      { duration: 0.7, ease: "power2.out", opacity: 1, y: 0 },
      "-=0.15"
    );
  }, [revealed]);

  return (
    <div className="relative w-full">
      <div className="opacity-0" ref={contentRef}>
        {children}
      </div>
      {!revealed && (
        <button
          aria-label="Unwrap your gift"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg/90"
          onClick={handleUnwrap}
          ref={ribbonRef}
          type="button"
        >
          <RibbonBow />
          <span className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
            click to unwrap
          </span>
        </button>
      )}
    </div>
  );
}
