import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ResumeLink } from "../components/ResumeLink";
import { aboutFocus, site } from "../data/site";

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Justin Avne is a product leader working at the intersection of product strategy, technology, data, and AI."
      />
      <section className="border-b border-ink/10">
        <div className="site-wrap grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="eyebrow">About</p>
            <h1 className="mt-5 font-sans text-display-md">Justin Avne</h1>
          </div>
          <div className="space-y-6 lg:col-span-8">
            <p className="text-xl leading-relaxed text-ink/85 sm:text-2xl">
              I’m a product leader who enjoys taking complex, ambiguous problems
              and turning them into clear, practical products.
            </p>
            <p className="prose-copy">
              My strengths sit at the intersection of product strategy,
              technology, data, and AI. I’m comfortable moving from high-level
              business objectives into the details required to make something
              real: understanding users, defining requirements, shaping
              workflows, working through technical constraints, prototyping
              ideas, and coordinating execution.
            </p>
            <p className="prose-copy">
              I’m especially interested in products where data or AI can make
              complicated decisions simpler for the user, particularly across
              AI-enabled products, consumer technology, sports technology, and
              data-driven decision tools.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <ResumeLink className="btn-primary">View Resume</ResumeLink>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-wrap">
          <p className="section-label">Focus Areas</p>
          <ul className="mt-8 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {aboutFocus.map((item) => (
              <li
                key={item}
                className="border-b border-ink/[0.08] py-6 font-sans text-lg sm:px-5"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link to="/work" className="case-link">
              View selected work →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
