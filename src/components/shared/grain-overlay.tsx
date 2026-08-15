export function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.05]"
    >
      <filter id="grain">
        <feTurbulence
          baseFrequency="0.8"
          numOctaves={2}
          stitchTiles="stitch"
          type="fractalNoise"
        />
      </filter>
      <rect filter="url(#grain)" height="100%" width="100%" />
    </svg>
  );
}
