type EcosystemDiagramProps = {
  className?: string;
  nodes?: readonly string[];
  label?: string;
  compact?: boolean;
};

const DEFAULT_NODES = [
  "Consumer Experience",
  "Mobile App",
  "Subscription",
  "Payments / Subscriber Data",
  "Lifecycle & Engagement",
  "Analytics / Operations",
] as const;

export function EcosystemDiagram({
  className = "",
  nodes = DEFAULT_NODES,
  label = "Product ecosystem",
  compact = false,
}: EcosystemDiagramProps) {
  return (
    <div className={`border border-paper/12 bg-ink text-paper ${className}`}>
      <div className={compact ? "px-5 py-6 sm:px-7 sm:py-8" : "px-5 py-8 sm:px-8 sm:py-10"}>
        <p className="font-sans text-[12px] uppercase tracking-[0.18em] text-paper/40">
          {label}
        </p>
        <ol className="mt-7 flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch">
          {nodes.map((node, index) => {
            const last = index === nodes.length - 1;
            return (
              <li
                key={node}
                className="flex flex-1 flex-col lg:min-w-[9.5rem] lg:max-w-[13.5rem] lg:flex-row lg:items-stretch"
              >
                <div className="flex flex-1 flex-col justify-between border border-paper/15 px-4 py-5">
                  <span className="font-sans text-[11px] tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 font-sans text-[13px] uppercase leading-snug tracking-[0.1em]">
                    {node}
                  </span>
                </div>
                {!last ? (
                  <p
                    className="flex items-center justify-center py-2 font-sans text-xs tracking-[0.18em] text-paper/30 lg:w-6 lg:shrink-0 lg:py-0"
                    aria-hidden
                  >
                    <span className="lg:hidden">↓</span>
                    <span className="hidden lg:inline">→</span>
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

