import Link from "next/link";
import { NightMotif } from "@/components/shared/night-motif";
import { home } from "@/lib/content";

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-bg px-6 text-center">
      <NightMotif />
      <div className="relative z-10 flex max-w-lg flex-col items-center gap-6">
        <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
          {home.eyebrow}
        </p>
        <h1 className="font-display text-4xl text-violet-deep italic sm:text-5xl">
          {home.title}
        </h1>
        <p className="font-light font-sans text-ink text-lg">{home.subtitle}</p>
        <Link
          className="mt-4 font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
          href="/wishes"
        >
          {home.cta}
        </Link>
      </div>
    </main>
  );
}
