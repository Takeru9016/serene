import Link from "next/link";
import { HeadingGlow } from "@/components/shared/heading-glow";
import { NightMotif } from "@/components/shared/night-motif";
import { PolaroidPhoto } from "@/components/shared/polaroid-photo";
import { ProgressDots } from "@/components/shared/progress-dots";
import { RibbonReveal } from "@/components/shared/ribbon-reveal";
import { gift } from "@/lib/content";

export default function Gift() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-bg px-6 py-16">
      <NightMotif />
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
            {gift.eyebrow}
          </p>
          <HeadingGlow>
            <h2 className="font-display text-3xl text-violet-deep italic sm:text-4xl">
              {gift.title}
            </h2>
          </HeadingGlow>
        </div>

        <RibbonReveal>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
            <PolaroidPhoto alt={gift.title} src={gift.image} />
            <div className="flex flex-col gap-4 md:flex-1">
              {gift.body.map((paragraph) => (
                <p
                  className="font-light font-sans text-ink leading-relaxed"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </RibbonReveal>

        <Link
          className="mt-4 font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)]"
          href="/poetry"
        >
          Read the poetry →
        </Link>
      </div>
      <ProgressDots />
    </main>
  );
}
