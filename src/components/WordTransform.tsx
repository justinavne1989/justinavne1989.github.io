import { useEffect, useState } from "react";

const FROM = "problems";
const TO = "products";
const HOLD_MS = 2400;
const FLIP_MS = 980;

export function WordTransform() {
  const [showTo, setShowTo] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAnimate(!motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!animate) {
      setShowTo(false);
      return;
    }

    let cancelled = false;
    let timer = 0;
    let next = true;

    const tick = () => {
      timer = window.setTimeout(() => {
        if (cancelled) return;
        setShowTo(next);
        next = !next;
        timer = window.setTimeout(tick, HOLD_MS + FLIP_MS);
      }, HOLD_MS);
    };

    tick();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [animate]);

  return (
    <p className="word-morph" aria-hidden="true">
      {FROM.split("").map((from, index) => {
        const to = TO[index];
        const changes = from !== to;
        const current = showTo && changes ? to : from;
        const delay = changes ? `${(index - 3) * 85}ms` : "0ms";

        return (
          <span key={index} className="word-morph-slot">
            <span className="word-morph-ghost">{current}</span>
            {changes ? (
              <span
                className={`word-morph-flip${showTo ? " is-to" : ""}`}
                style={{ transitionDelay: animate ? delay : "0ms" }}
              >
                <span className="word-morph-face word-morph-face-front">{from}</span>
                <span className="word-morph-face word-morph-face-back">{to}</span>
              </span>
            ) : (
              <span className="word-morph-live">{current}</span>
            )}
          </span>
        );
      })}
    </p>
  );
}
