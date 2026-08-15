import { NightMotif } from "@/components/shared/night-motif";
import { ProgressDots } from "@/components/shared/progress-dots";
import { letter } from "@/lib/content";

export default function Letter() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden bg-bg px-6 py-16">
      <NightMotif />
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-10">
        <p className="font-sans text-orchid text-sm uppercase tracking-[0.3em]">
          {letter.eyebrow}
        </p>
        <div className="flex flex-col gap-5">
          {letter.body.map((paragraph) => (
            <p
              className="font-light font-sans text-ink leading-relaxed"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <p className="font-script text-3xl text-violet-deep">
          {letter.signature}
        </p>
        <p
          className="mt-8 font-sans text-orchid text-sm uppercase tracking-[0.3em]"
          id="letter-reveal"
        >
          {letter.revealCue}
        </p>
      </div>
      <ProgressDots />
    </main>
  );
}
