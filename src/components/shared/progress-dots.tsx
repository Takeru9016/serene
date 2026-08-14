"use client";

import { usePathname } from "next/navigation";

const steps = ["/wishes", "/gift", "/poetry", "/reasons", "/letter"];

function Bloom({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={filled ? "text-violet" : "text-orchid"}
      height="12"
      viewBox="0 0 16 16"
      width="12"
    >
      <g
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <circle cx="8" cy="4" r="2.4" />
        <circle cx="12" cy="8" r="2.4" />
        <circle cx="8" cy="12" r="2.4" />
        <circle cx="4" cy="8" r="2.4" />
      </g>
    </svg>
  );
}

export function ProgressDots() {
  const pathname = usePathname();
  const current = steps.indexOf(pathname);

  if (current === -1) {
    return null;
  }

  return (
    <div
      aria-label={`Step ${current + 1} of ${steps.length}`}
      aria-valuemax={steps.length}
      aria-valuemin={1}
      aria-valuenow={current + 1}
      className="flex items-center justify-center gap-3 py-6"
      role="progressbar"
    >
      {steps.map((step, i) => (
        <Bloom filled={i === current} key={step} />
      ))}
    </div>
  );
}
