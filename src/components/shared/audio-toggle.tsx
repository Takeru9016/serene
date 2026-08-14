"use client";

import { useCallback, useRef, useState } from "react";

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying((prev) => !prev);
  }, [playing]);

  return (
    <>
      {/* biome-ignore lint/a11y/useMediaCaption: ambient instrumental music, no dialogue to caption */}
      <audio loop ref={audioRef} src="/audio/ambient.mp3" />
      <button
        aria-label={playing ? "Pause music" : "Play music"}
        aria-pressed={playing}
        className="fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-orchid bg-surface text-violet-deep transition-shadow hover:shadow-[0_0_10px_var(--color-orchid)]"
        onClick={toggle}
        type="button"
      >
        {playing ? (
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="16"
            viewBox="0 0 24 24"
            width="16"
          >
            <rect height="14" width="4" x="6" y="5" />
            <rect height="14" width="4" x="14" y="5" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="16"
            viewBox="0 0 24 24"
            width="16"
          >
            <path d="M7 5v14l12-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
