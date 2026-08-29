type ProcessFlowProps = {
  steps: string[];
  dark?: boolean;
};

export function ProcessFlow({ steps, dark = false }: ProcessFlowProps) {
  return (
    <ol
      className={`flex flex-col gap-0 lg:flex-row lg:flex-wrap lg:items-stretch ${
        dark ? "text-paper" : "text-ink"
      }`}
    >
      {steps.map((step, index) => (
        <li
          key={step}
          className="relative flex flex-1 items-start gap-4 border-l border-current/15 py-4 pl-5 lg:border-l-0 lg:border-t lg:px-4 lg:py-6 lg:pl-4"
        >
          <span
            className={`font-sans text-[12px] tracking-[0.16em] ${
              dark ? "text-accent" : "text-accent"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-sans text-base leading-snug sm:text-lg">{step}</span>
          {index < steps.length - 1 ? (
            <span
              className="pointer-events-none absolute -bottom-2 left-[11px] hidden text-current/30 lg:left-auto lg:right-0 lg:top-6 lg:block"
              aria-hidden
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

type ArchitectureNode = {
  label: string;
  note?: string;
};

export function ArchitectureFlow({
  nodes,
  dark = false,
}: {
  nodes: ArchitectureNode[];
  dark?: boolean;
}) {
  return (
    <ol className="flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch">
      {nodes.map((node, index) => (
        <li
          key={node.label}
          className="flex flex-1 flex-col lg:min-w-[9.5rem] lg:max-w-[14rem] lg:flex-row lg:items-stretch"
        >
          <div
            className={`flex-1 border px-4 py-5 ${
              dark
                ? "border-paper/15 bg-white/5 text-paper"
                : "border-ink/10 bg-white text-ink"
            }`}
          >
            <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-sans text-base leading-snug">{node.label}</p>
            {node.note ? (
              <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-paper/60" : "text-ink/55"}`}>
                {node.note}
              </p>
            ) : null}
          </div>
          {index < nodes.length - 1 ? (
            <p
              className={`flex items-center justify-center py-2 font-sans text-xs tracking-[0.18em] lg:w-6 lg:shrink-0 lg:py-0 ${
                dark ? "text-paper/40" : "text-ink/35"
              }`}
              aria-hidden
            >
              <span className="lg:hidden">↓</span>
              <span className="hidden lg:inline">→</span>
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function SystemNode({
  label,
  dark,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex-1 border px-4 py-5 ${
        dark
          ? "border-paper/15 bg-white/5 text-paper"
          : "border-ink/10 bg-white text-ink"
      }`}
    >
      <p className="font-sans text-[13px] uppercase leading-snug tracking-[0.1em]">
        {label}
      </p>
    </div>
  );
}

export function DeliverySystem({ dark = false }: { dark?: boolean }) {
  const arrow = dark ? "text-paper/35" : "text-ink/30";

  return (
    <div className="flex flex-col items-stretch overflow-x-hidden">
      <SystemNode label="Business Requirements" dark={dark} />
      <p className={`py-3 text-center font-sans text-xs tracking-[0.18em] ${arrow}`} aria-hidden>
        ↓
      </p>
      <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <SystemNode label="Internal Technology Team" dark={dark} />
        <p
          className={`py-2 text-center font-sans text-xs tracking-[0.18em] sm:py-0 ${arrow}`}
          aria-hidden
        >
          ↔
        </p>
        <SystemNode label="External App Development Partner" dark={dark} />
      </div>
      <p className={`py-3 text-center font-sans text-xs tracking-[0.18em] ${arrow}`} aria-hidden>
        ↓
      </p>
      <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <SystemNode label="Subscription Operations" dark={dark} />
        <p
          className={`py-2 text-center font-sans text-xs tracking-[0.18em] sm:py-0 ${arrow}`}
          aria-hidden
        >
          ↔
        </p>
        <SystemNode label="Physical Fulfillment Vendor" dark={dark} />
      </div>
      <p className={`py-3 text-center font-sans text-xs tracking-[0.18em] ${arrow}`} aria-hidden>
        ↓
      </p>
      <SystemNode label="Testing / Launch Readiness" dark={dark} />
    </div>
  );
}

type Metric = {
  value: string;
  label: string;
};

export function MetricCallout({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-px bg-paper/10 sm:grid-cols-3">
      {metrics.map((metric) => (
        <article key={metric.label} className="bg-ink px-6 py-8 text-paper sm:px-8">
          <p className="font-sans text-4xl tracking-tight sm:text-5xl">{metric.value}</p>
          <p className="mt-3 max-w-[14rem] text-[15px] leading-relaxed text-paper/65">
            {metric.label}
          </p>
        </article>
      ))}
    </div>
  );
}
