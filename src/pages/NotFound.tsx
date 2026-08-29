import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" description="This page does not exist." />
      <section className="site-wrap py-24">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-sans text-display-md">This page does not exist.</h1>
        <p className="mt-4 max-w-md text-ink/65">
          The work is still here. Start with selected work, or go back home.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/" className="btn-primary">
            Home
          </Link>
          <Link to="/work" className="btn-secondary">
            Selected Work
          </Link>
        </div>
      </section>
    </>
  );
}
