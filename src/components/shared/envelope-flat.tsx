"use client";

export function EnvelopeFlat({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      aria-label="Open envelope"
      className="group flex flex-col items-center gap-4"
      onClick={onOpen}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-32 w-48 drop-shadow-[0_0_18px_rgba(224,194,133,0.25)]"
        viewBox="0 0 200 130"
      >
        <rect
          fill="var(--color-surface)"
          height="120"
          rx="6"
          width="190"
          x="5"
          y="5"
        />
        <path
          d="M 5 11 L 100 75 L 195 11"
          fill="none"
          stroke="var(--color-ink)"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <circle cx="100" cy="55" fill="var(--color-gold)" r="12" />
      </svg>
      <span className="font-sans text-orchid text-sm uppercase tracking-[0.3em] transition-colors group-hover:text-violet">
        Tap to open
      </span>
    </button>
  );
}
