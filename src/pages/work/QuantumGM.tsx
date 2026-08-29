import { CaseStudySection, RoleSection } from "../../components/CaseStudySection";
import { NextProject } from "../../components/NextProject";
import { ArchitectureFlow, MetricCallout, ProcessFlow } from "../../components/ProcessFlow";
import { ProductStatement } from "../../components/ProductStatement";
import { ProductTour } from "../../components/ProductTour";
import { ProjectHero, ProjectMeta } from "../../components/ProjectHero";
import { ScreenshotShowcase } from "../../components/ScreenshotShowcase";
import { SEO } from "../../components/SEO";
import { getNextProject, getProject } from "../../data/projects";

const project = getProject("quantum-gm")!;

export function QuantumGMPage() {
  const next = getNextProject(project.slug);
  const decisionShot = project.featureShots[0];

  return (
    <>
      <SEO
        title="Quantum GM"
        description="Fantasy football decision and optimization platform — a personal product in development by Justin Avne."
      />
      <ProjectHero
        category={project.category}
        title={project.title}
        subtitle={project.subtitle}
        badge="Personal product in development"
        intro="Fantasy players have enormous amounts of rankings, projections, and expert analysis. The harder problem is determining what those inputs mean for a specific roster."
      />
      <ProjectMeta
        items={[
          { label: "Role", value: "Creator / Builder" },
          { label: "Status", value: "Personal product in development" },
        ]}
      />

      <ProductStatement quote="The goal is not to give the user more fantasy data. It is to turn the data into a decision." />

      <CaseStudySection title="The product problem">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="prose-copy">
              Fantasy decisions are interconnected. A trade cannot be evaluated
              solely by comparing two player rankings. Its value depends on the
              user’s actual roster, league scoring, starting requirements,
              positional scarcity, replacement options, schedule, and downstream
              season impact.
            </p>
            <p className="prose-copy mt-5">
              Quantum GM is being designed around a narrower question: what
              decision gives this particular fantasy team the best expected
              outcome?
            </p>
          </div>
          <ul className="space-y-3 border-l border-ink/10 pl-6 text-[1.0625rem] leading-[1.7] text-ink/70 lg:col-span-5">
            {[
              "The user's actual roster",
              "League scoring",
              "Starting requirements",
              "Positional scarcity",
              "Replacement options",
              "Schedule",
              "Downstream season impact",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection title="My role" eyebrow="Product through implementation">
        <RoleSection
          roles={[
            {
              title: "Product Concept",
              copy: "Defined the problem, target user, product strategy, and core decision workflow.",
            },
            {
              title: "UX & Decision Design",
              copy: "Designed dashboards, recommendation flows, trade analysis, and methods for translating model outputs into understandable fantasy decisions.",
            },
            {
              title: "Data Foundation",
              copy: "Built canonical models for leagues, teams, rosters, players, scoring systems, and player identities.",
            },
            {
              title: "Decision Engine",
              copy: "Developed league-specific valuation, roster analysis, Monte Carlo simulation, and optimization logic.",
            },
          ]}
        />
      </CaseStudySection>

      <section className="border-y border-ink/10 bg-white">
        <div className="site-wrap-wide py-16 sm:py-20">
          <ProductTour shots={project.tour} />
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            Core experience
          </p>
          <h2 className="mt-3 font-sans text-display-md">From league to action.</h2>
          <div className="mt-10">
            <ProcessFlow
              dark
              steps={[
                "Connect League",
                "Understand Roster",
                "Identify Opportunities",
                "Simulate Decisions",
                "Recommend Action",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="section-label">Product / data architecture</p>
          <h2 className="mt-3 max-w-xl font-sans text-display-md">
            League context first. Recommendation last.
          </h2>
          <div className="mt-10 overflow-x-hidden">
            <ArchitectureFlow
              nodes={[
                { label: "Sleeper League Data" },
                { label: "Player Identity + NFL Data" },
                { label: "League-Specific Scoring" },
                { label: "Player & Roster Valuation" },
                { label: "Season Simulation" },
                { label: "Decision Optimization" },
                { label: "User Recommendation" },
              ]}
            />
          </div>
        </div>
      </section>

      <CaseStudySection title="Data foundation">
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Sleeper Integration",
              copy: "Imports league structure, roster construction, scoring configuration, teams, and player identifiers.",
            },
            {
              title: "Identity Mapping",
              copy: "Maps Sleeper players into canonical NFL / GSIS identities.",
            },
            {
              title: "nflverse Data",
              copy: "Provides historical NFL player and performance data used by the valuation layer.",
            },
            {
              title: "League Normalization",
              copy: "Converts player performance into the scoring and positional context of the individual fantasy league.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-ink/10 pt-5">
              <h3 className="font-sans text-lg">{item.title}</h3>
              <p className="mt-2 text-[1.0625rem] leading-[1.7] text-ink/70">{item.copy}</p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="Valuation & decision engine" dark>
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Replacement-Level Valuation",
              copy: "Models positional scarcity and realistic replacement alternatives.",
            },
            {
              title: "VORP-Style Player Value",
              copy: "Estimates player value relative to replacement within the specific league environment.",
            },
            {
              title: "Monte Carlo Simulation",
              copy: "Simulates season and playoff outcomes across repeated seasons.",
            },
            {
              title: "Scenario Comparison",
              copy: "Evaluates candidate roster changes against consistent baseline conditions to determine how a move changes expected team outcomes.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-paper/15 pt-5">
              <h3 className="font-sans text-lg">{item.title}</h3>
              <p className="mt-2 text-[1.0625rem] leading-[1.7] text-paper/65">{item.copy}</p>
            </article>
          ))}
        </div>
        {decisionShot ? (
          <div className="mt-12">
            <ScreenshotShowcase shots={[decisionShot]} tone="dark" />
          </div>
        ) : null}
      </CaseStudySection>

      <section>
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="section-label">Engineering rigor</p>
          <h2 className="mt-3 max-w-xl font-sans text-display-md">
            Same results. Less runtime per candidate.
          </h2>
          <div className="mt-10">
            <MetricCallout
              metrics={[
                { value: "10,000", label: "Simulated seasons per candidate" },
                { value: "Paired", label: "Baseline vs. candidate scenarios" },
                { value: "Exact", label: "Baseline equivalence after optimization" },
              ]}
            />
          </div>
          <p className="prose-copy mt-10 max-w-3xl">
            Built an optimized simulation kernel that precomputes immutable
            season data and evaluates candidate roster changes against the same
            simulation conditions. The optimized implementation was validated
            against the original simulation path to preserve identical results
            while substantially reducing per-candidate runtime.
          </p>
        </div>
      </section>

      <CaseStudySection title="The product principle">
        <p className="prose-copy max-w-3xl">
          More computation only creates value if it produces a clearer decision
          for the fantasy manager.
        </p>
      </CaseStudySection>

      <NextProject project={next} />
    </>
  );
}
