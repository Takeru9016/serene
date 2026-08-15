import type { ReactNode } from "react";

export function HeadingGlow({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-deep/15 blur-3xl sm:h-32 sm:w-72"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
