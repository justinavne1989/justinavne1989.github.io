import { useEffect, useState } from "react";
import { site } from "../data/site";

type ResumeLinkProps = {
  className?: string;
  children: React.ReactNode;
};

export function ResumeLink({ className, children }: ResumeLinkProps) {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [notice, setNotice] = useState(false);
  const href = `${import.meta.env.BASE_URL}${site.resumePath}`;

  useEffect(() => {
    let cancelled = false;
    fetch(href, { method: "HEAD" })
      .then((response) => {
        const type = response.headers.get("content-type") || "";
        if (!cancelled) {
          setAvailable(response.ok && type.includes("pdf"));
        }
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, [href]);

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={(event) => {
          if (available === true) return;
          event.preventDefault();
          fetch(href, { method: "HEAD" })
            .then((response) => {
              const type = response.headers.get("content-type") || "";
              if (response.ok && type.includes("pdf")) {
                window.location.assign(href);
                return;
              }
              setNotice(true);
            })
            .catch(() => setNotice(true));
        }}
      >
        {children}
      </a>
      {notice ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-missing-title"
          onClick={() => setNotice(false)}
        >
          <div
            className="w-full max-w-md border border-ink/10 bg-paper p-6 shadow-lift"
            onClick={(event) => event.stopPropagation()}
          >
            <p id="resume-missing-title" className="font-sans text-lg font-medium">
              Resume PDF is not uploaded yet
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Place a file at{" "}
              <code className="font-sans text-[13px] text-ink">
                public/resume/justin-avne-resume.pdf
              </code>{" "}
              to enable this link. In the meantime, LinkedIn is the best public
              profile.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                LinkedIn
              </a>
              <button type="button" className="btn-secondary" onClick={() => setNotice(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
