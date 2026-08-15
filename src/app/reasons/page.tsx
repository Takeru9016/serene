import Link from "next/link";
import { ProgressDots } from "@/components/shared/progress-dots";
import { ReasonCards } from "@/components/shared/reason-cards";
import { reasons } from "@/lib/content";

export default function Reasons() {
  return (
    <main className="flex flex-1 flex-col items-center bg-bg px-6 py-16">
      <div className="flex w-full max-w-3xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
            {reasons.eyebrow}
          </p>
          <h2 className="font-display text-3xl text-violet-deep italic sm:text-4xl">
            {reasons.title}
          </h2>
        </div>
        <ReasonCards items={reasons.items} />
        <Link
          className="mt-4 font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
          href="/letter"
        >
          One more thing →
        </Link>
      </div>
      <ProgressDots />
    </main>
  );
}
