import Image from "next/image";

export function PolaroidPhoto({
  alt,
  caption,
  src,
}: {
  alt: string;
  caption?: string;
  src: string | null;
}) {
  return (
    <figure className="w-64 shrink-0 -rotate-2 rounded-sm bg-white p-3 pb-8 shadow-lg sm:w-72">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        {src ? (
          <Image alt={alt} className="object-cover" fill src={src} />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-orchid/40 border-dashed px-4 text-center">
            <span className="font-sans text-orchid text-xs uppercase tracking-[0.2em]">
              photo coming soon
            </span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="pt-3 text-center font-sans text-ink/70 text-sm italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
