import Link from "next/link";
import { HeadingGlow } from "@/components/shared/heading-glow";
import { NightMotif } from "@/components/shared/night-motif";
import { ProgressDots } from "@/components/shared/progress-dots";
import { WishCards } from "@/components/shared/wish-cards";
import { wishes } from "@/lib/content";

export default function Wishes() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-bg px-6 py-16">
      <NightMotif />
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
            {wishes.eyebrow}
          </p>
          <HeadingGlow>
            <h2 className="font-display text-3xl text-violet-deep italic sm:text-4xl">
              {wishes.title}
            </h2>
          </HeadingGlow>
        </div>
        <WishCards items={wishes.items} />
        <Link
          className="mt-4 font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
          href="/gift"
        >
          On to your gift →
        </Link>
      </div>
      <ProgressDots />
    </main>
  );
}
