type ProjectHeroProps = {
  category: string;
  title: string;
  subtitle?: string;
  badge?: string;
  intro?: string;
};

export function ProjectHero({
  category,
  title,
  subtitle,
  badge,
  intro,
}: ProjectHeroProps) {
  return (
    <header className="border-b border-ink/10 bg-ink text-paper">
      <div className="site-wrap py-16 sm:py-24">
        <p className="font-sans text-[12.5px] font-medium uppercase tracking-[0.18em] text-accent">
          {category}
        </p>
        <h1 className="mt-6 font-sans text-display-lg text-paper">{title}</h1>
        {badge ? (
          <p className="mt-4 inline-flex items-center gap-2.5 font-sans text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
            <span className="h-px w-4 bg-accent/80" aria-hidden />
            {badge}
          </p>
        ) : null}
        {subtitle ? (
          <p className="mt-4 max-w-2xl font-body text-[1.1875rem] text-paper/70">
            {subtitle}
          </p>
        ) : null}
        {intro ? (
          <p className="mt-10 max-w-2xl font-body text-[1.1875rem] leading-[1.7] text-paper/80">
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}

type ProjectMetaProps = {
  items: { label: string; value: string }[];
};

export function ProjectMeta({ items }: ProjectMetaProps) {
  const columns =
    items.length >= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : items.length === 2
        ? "sm:grid-cols-2"
        : "";

  return (
    <dl className={`site-wrap-wide grid gap-8 border-b border-ink/10 py-8 ${columns}`}>
      {items.map((item) => (
        <div key={item.label}>
          <dt className="section-label">{item.label}</dt>
          <dd className="mt-2 font-sans text-[15px] text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
