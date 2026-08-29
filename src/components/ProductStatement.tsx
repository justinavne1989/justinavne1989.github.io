type ProductStatementProps = {
  quote: string;
  support?: string;
  dark?: boolean;
};

export function ProductStatement({
  quote,
  support,
  dark = false,
}: ProductStatementProps) {
  return (
    <section className={dark ? "bg-ink text-paper" : "bg-paper text-ink"}>
      <div className="site-wrap py-16 sm:py-20">
        <blockquote className="max-w-3xl font-sans text-display-md">
          {quote}
        </blockquote>
        {support ? (
          <p className={`mt-6 max-w-xl text-[1.0625rem] leading-[1.7] ${dark ? "text-paper/65" : "text-ink/65"}`}>
            {support}
          </p>
        ) : null}
      </div>
    </section>
  );
}
