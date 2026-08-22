"use client";

export function LetterFlat({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      aria-label="Open letter"
      className="group flex flex-col items-center gap-4"
      onClick={onOpen}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-32 w-24 drop-shadow-[0_0_18px_rgba(185,143,209,0.25)]"
        viewBox="0 0 120 160"
      >
        <rect
          fill="var(--color-surface)"
          height="150"
          rx="6"
          width="110"
          x="5"
          y="5"
        />
        <line
          stroke="var(--color-ink)"
          strokeOpacity="0.2"
          x1="42"
          x2="42"
          y1="10"
          y2="150"
        />
        <line
          stroke="var(--color-ink)"
          strokeOpacity="0.2"
          x1="78"
          x2="78"
          y1="10"
          y2="150"
        />
        <circle cx="60" cy="80" fill="var(--color-violet)" r="10" />
      </svg>
      <span className="font-sans text-orchid text-sm uppercase tracking-[0.3em] transition-colors group-hover:text-violet">
        Tap to open
      </span>
    </button>
  );
}
