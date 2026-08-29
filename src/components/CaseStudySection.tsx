import type { ReactNode } from "react";

type CaseStudySectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
  wide?: boolean;
};

export function CaseStudySection({
  eyebrow,
  title,
  children,
  dark = false,
  wide = false,
}: CaseStudySectionProps) {
  return (
    <section className={dark ? "bg-ink text-paper" : "bg-paper text-ink"}>
      <div className={`${wide ? "site-wrap-wide" : "site-wrap"} py-16 sm:py-20`}>
        {eyebrow ? (
          <p className={`section-label ${dark ? "!text-paper/40" : ""}`}>{eyebrow}</p>
        ) : null}
        <h2 className="mt-3 max-w-2xl font-sans text-display-md">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

type Role = {
  title: string;
  copy: string;
};

export function RoleSection({ roles }: { roles: Role[] }) {
  return (
    <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
      {roles.map((role) => (
        <article key={role.title} className="bg-paper p-6 sm:p-8">
          <h3 className="font-sans text-lg text-ink">{role.title}</h3>
          <p className="mt-3 text-[1.0625rem] leading-[1.7] text-ink/70">{role.copy}</p>
        </article>
      ))}
    </div>
  );
}

export function ConfidentialityNote({ className = "" }: { className?: string }) {
  return (
    <p className={`max-w-2xl text-[15px] leading-relaxed text-ink/50 ${className}`}>
      Representative product mockups recreated with generic branding to protect
      internal business information.
    </p>
  );
}
