import Link from "next/link";
import { HeadingGlow } from "@/components/shared/heading-glow";
import { ProgressDots } from "@/components/shared/progress-dots";
import { poetry } from "@/lib/content";

export default function Poetry() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-bg px-6 py-16">
      <div className="flex w-full max-w-2xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
            {poetry.eyebrow}
          </p>
          <HeadingGlow>
            <h2 className="font-display text-3xl text-violet-deep italic sm:text-4xl">
              {poetry.title}
            </h2>
          </HeadingGlow>
        </div>

        <div className="relative w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orchid/20 blur-3xl motion-safe:animate-[glow-pulse_10s_ease-in-out_infinite]"
          />
          <p className="relative whitespace-pre-line text-center font-light font-sans text-ink text-lg leading-loose">
            {poetry.body}
          </p>
        </div>

        <Link
          className="mt-4 font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
          href="/reasons"
        >
          Keep going →
        </Link>
      </div>
      <ProgressDots />
    </main>
  );
}
