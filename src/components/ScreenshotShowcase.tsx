import { useState } from "react";
import type { Screenshot } from "../data/projects";
import { ScreenshotButton, ScreenshotLightbox } from "./ScreenshotLightbox";

type ScreenshotShowcaseProps = {
  shots: Screenshot[];
  layout?: "stack" | "split" | "feature";
  tone?: "light" | "dark";
};

function Caption({
  shot,
  className,
}: {
  shot: Screenshot;
  className: string;
}) {
  if (!shot.title && !shot.caption) return null;
  return (
    <figcaption className={className}>
      {shot.title ? (
        <span className="mb-2 block font-sans text-[12.5px] uppercase tracking-[0.14em] text-accent">
          {shot.title}
        </span>
      ) : null}
      {shot.caption}
    </figcaption>
  );
}

export function ScreenshotShowcase({
  shots,
  layout = "stack",
  tone = "light",
}: ScreenshotShowcaseProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? shots[openIndex] : null;
  const captionClass =
    tone === "dark"
      ? "text-[1.0625rem] leading-[1.7] text-paper/65"
      : "text-[1.0625rem] leading-[1.7] text-ink/65";

  if (shots.length === 0) return null;

  return (
    <>
      {layout === "split" && shots.length >= 2 ? (
        <div className="grid gap-8 lg:grid-cols-2">
          {shots.map((shot, index) => (
            <figure key={shot.src}>
              <ScreenshotButton
                src={shot.src}
                alt={shot.alt}
                onOpen={() => setOpenIndex(index)}
              />
              <Caption shot={shot} className={`mt-4 max-w-xl ${captionClass}`} />
            </figure>
          ))}
        </div>
      ) : layout === "feature" ? (
        <div className="space-y-16">
          {shots.map((shot, index) => (
            <figure
              key={shot.src}
              className={`grid items-end gap-6 lg:grid-cols-12 ${
                index % 2 === 1 ? "lg:[&>figcaption]:order-first" : ""
              }`}
            >
              <div className="lg:col-span-8">
                <ScreenshotButton
                  src={shot.src}
                  alt={shot.alt}
                  onOpen={() => setOpenIndex(index)}
                />
              </div>
              <Caption
                shot={shot}
                className={`max-w-sm lg:col-span-4 lg:pb-2 ${captionClass}`}
              />
            </figure>
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {shots.map((shot, index) => (
            <figure key={shot.src}>
              <ScreenshotButton
                src={shot.src}
                alt={shot.alt}
                onOpen={() => setOpenIndex(index)}
              />
              <Caption shot={shot} className={`mt-4 max-w-2xl ${captionClass}`} />
            </figure>
          ))}
        </div>
      )}
      {active ? (
        <ScreenshotLightbox
          src={active.src}
          alt={active.alt}
          caption={active.caption}
          title={active.title}
          onClose={() => setOpenIndex(null)}
          onPrev={
            shots.length > 1
              ? () =>
                  setOpenIndex((current) =>
                    current === null
                      ? 0
                      : (current - 1 + shots.length) % shots.length,
                  )
              : undefined
          }
          onNext={
            shots.length > 1
              ? () =>
                  setOpenIndex((current) =>
                    current === null ? 0 : (current + 1) % shots.length,
                  )
              : undefined
          }
        />
      ) : null}
    </>
  );
}
