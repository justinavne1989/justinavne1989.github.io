import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

type LightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export function ScreenshotLightbox({
  src,
  alt,
  caption,
  title,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev?.();
      if (event.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/88 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-paper hover:bg-white/20"
        aria-label="Close screenshot"
      >
        <X size={18} />
      </button>
      {onPrev ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-paper hover:bg-white/20 sm:inline-flex"
          aria-label="Previous screenshot"
        >
          <ChevronLeft size={18} />
        </button>
      ) : null}
      {onNext ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-paper hover:bg-white/20 sm:inline-flex"
          aria-label="Next screenshot"
        >
          <ChevronRight size={18} />
        </button>
      ) : null}
      <figure
        className="max-h-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[82vh] w-auto max-w-full object-contain"
        />
        {title || caption ? (
          <figcaption className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-paper/75">
            {title ? (
              <span className="mb-1 block font-sans text-[12px] uppercase tracking-[0.14em] text-accent">
                {title}
              </span>
            ) : null}
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}

type ShotButtonProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  children?: ReactNode;
  onOpen: () => void;
};

export function ScreenshotButton({
  src,
  alt,
  className = "",
  onOpen,
}: ShotButtonProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group block w-full text-left ${className}`}
      aria-label={`Open larger view: ${alt}`}
    >
      <span className="shot-frame block">
        <img
          src={src}
          alt={alt}
          className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      </span>
    </button>
  );
}
