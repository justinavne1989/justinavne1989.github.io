export function StatusLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2.5 font-sans text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
      <span className="h-px w-4 bg-accent/80" aria-hidden />
      {children}
    </p>
  );
}
