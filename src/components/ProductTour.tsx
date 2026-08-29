import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Screenshot } from "../data/projects";
import { ScreenshotLightbox } from "./ScreenshotLightbox";

type ProductTourProps = {
  shots: Screenshot[];
  tone?: "light" | "dark";
  label?: string;
  hint?: string;
};

export function ProductTour({
  shots,
  tone = "light",
  label = "Explore the product",
  hint = "Select a screen to inspect the product.",
}: ProductTourProps) {
  const labelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const active = shots[index];
  const dark = tone === "dark";

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => (current + direction + shots.length) % shots.length);
    },
    [shots.length],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      const inTour = Boolean(rootRef.current?.contains(document.activeElement));
      if (!lightbox && !inTour) return;

      if (event.key === "Escape" && lightbox) {
        event.preventDefault();
        setLightbox(false);
        return;
      }
      if (lightbox) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, lightbox]);

  if (!active) return null;

  return (
    <div
      ref={rootRef}
      className="overflow-x-hidden"
      role="region"
      aria-labelledby={labelId}
    >
      <p
        id={labelId}
        className={
          dark
            ? "font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent"
            : "section-label"
        }
      >
        {label}
      </p>
      <p
        className={`mt-2 text-[1.0625rem] leading-[1.7] ${
          dark ? "text-paper/60" : "text-ink/55"
        }`}
      >
        {hint}
      </p>

      <figure className="mt-6">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="group relative block w-full text-left"
          aria-label={`Enlarge ${active.title ?? active.alt}`}
        >
          <span className="shot-frame block bg-white">
            <img
              src={active.src}
              alt={active.alt}
              className="mx-auto h-auto max-h-[min(78vh,820px)] w-full object-contain"
            />
          </span>
          <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-sm bg-ink/80 px-3 py-2 font-sans text-[11px] uppercase tracking-[0.14em] text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={12} />
            Enlarge
          </span>
        </button>
        <figcaption className="mt-6 max-w-3xl">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
            {String(index + 1).padStart(2, "0")}
            {active.title ? ` / ${active.title}` : ""}
          </p>
          <p
            className={`mt-3 text-[1.125rem] leading-[1.7] ${
              dark ? "text-paper/70" : "text-ink/70"
            }`}
          >
            {active.caption}
          </p>
        </figcaption>
      </figure>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className={`inline-flex h-10 w-10 items-center justify-center border ${
              dark
                ? "border-paper/20 text-paper hover:bg-white/10"
                : "border-ink/15 text-ink hover:bg-white"
            }`}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className={`inline-flex h-10 w-10 items-center justify-center border ${
              dark
                ? "border-paper/20 text-paper hover:bg-white/10"
                : "border-ink/15 text-ink hover:bg-white"
            }`}
            aria-label="Next screenshot"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <p
          className={`font-sans text-[12.5px] uppercase tracking-[0.14em] ${
            dark ? "text-paper/45" : "text-ink/45"
          }`}
        >
          {index + 1} / {shots.length}
        </p>
      </div>

      <ul className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {shots.map((shot, shotIndex) => {
          const selected = shotIndex === index;
          return (
            <li key={shot.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(shotIndex)}
                className={`block w-28 overflow-hidden border sm:w-36 ${
                  selected
                    ? dark
                      ? "border-accent"
                      : "border-ink"
                    : dark
                      ? "border-paper/15 opacity-70 hover:opacity-100"
                      : "border-ink/15 opacity-70 hover:opacity-100"
                }`}
                aria-label={shot.navLabel ?? shot.title ?? shot.alt}
                aria-current={selected ? "true" : undefined}
              >
                <img
                  src={shot.src}
                  alt=""
                  className="h-16 w-full object-cover object-top sm:h-20"
                />
                {shot.navLabel || shot.title ? (
                  <span
                    className={`block px-2 py-1.5 text-left font-sans text-[10px] uppercase tracking-[0.12em] sm:text-[11px] ${
                      selected
                        ? dark
                          ? "bg-accent/20 text-paper"
                          : "bg-ink text-paper"
                        : dark
                          ? "text-paper/55"
                          : "text-ink/55"
                    }`}
                  >
                    {shot.navLabel ?? shot.title}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {lightbox ? (
        <ScreenshotLightbox
          src={active.src}
          alt={active.alt}
          caption={active.caption}
          title={active.title}
          onClose={() => setLightbox(false)}
          onPrev={() => go(-1)}
          onNext={() => go(1)}
        />
      ) : null}
    </div>
  );
}
