import { CaseStudySection, ConfidentialityNote, RoleSection } from "../../components/CaseStudySection";
import { NextProject } from "../../components/NextProject";
import { ProductStatement } from "../../components/ProductStatement";
import { ProductTour } from "../../components/ProductTour";
import { ProjectHero, ProjectMeta } from "../../components/ProjectHero";
import { ScreenshotShowcase } from "../../components/ScreenshotShowcase";
import { SEO } from "../../components/SEO";
import { getNextProject, getProject } from "../../data/projects";

const project = getProject("subscription-intelligence")!;

export function SubscriptionIntelligencePage() {
  const next = getNextProject(project.slug);
  const [lifecycleShot, alertsShot, reportsShot] = project.featureShots;

  return (
    <>
      <SEO
        title="Subscription Growth & Intelligence Platform"
        description="A centralized decision environment for subscriber, revenue, acquisition, engagement, marketing, and lifecycle information."
      />
      <ProjectHero
        category={project.category}
        title={project.title}
        intro="A centralized decision environment designed to bring fragmented subscriber, revenue, acquisition, engagement, marketing, and lifecycle information together."
      />
      <ProjectMeta
        items={[{ label: "Role", value: "Product Lead / Builder" }]}
      />

      <CaseStudySection title="Product overview" eyebrow="More than a dashboard">
        <p className="prose-copy max-w-3xl">
          This is a subscription operating environment: membership health,
          subscriber intelligence, acquisition, retention, lifecycle offers,
          campaigns, questions, and source trust in one product — so growth
          decisions are not assembled from disconnected systems and reports.
        </p>
      </CaseStudySection>

      <ProductStatement
        dark
        quote="Important subscription decisions become difficult when subscriber, revenue, acquisition, engagement, lifecycle, and marketing information live across disconnected systems and reports."
      />

      <CaseStudySection title="The problem">
        <p className="prose-copy max-w-3xl">
          Growth, retention, and marketing teams rarely lack data. They lack a
          shared place where subscriber health, revenue, funnel, engagement, and
          campaign work can be read together — with enough trust in the sources
          to act.
        </p>
        <ul className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Subscriber intelligence",
            "Revenue visibility",
            "Acquisition funnel",
            "Engagement",
            "Lifecycle",
            "Retention",
            "Marketing performance",
            "Operational decision-making",
          ].map((item) => (
            <li key={item} className="bg-paper px-4 py-5 font-sans text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="My role" eyebrow="From discovery to a decision environment">
        <RoleSection
          roles={[
            {
              title: "Product concept & stakeholder discovery",
              copy: "Defined the product as a decision environment, then translated stakeholder discovery into what the workspace actually had to hold.",
            },
            {
              title: "Requirements & information architecture",
              copy: "Turned fragmented reporting needs into requirements and an architecture spanning membership health, analytics, audience, campaigns, and trust.",
            },
            {
              title: "Dashboard design & data structures",
              copy: "Shaped the operating views and the canonical structures underneath them — what needed to be joined, governed, and made trustworthy.",
            },
            {
              title: "Workflows, prioritization & implementation planning",
              copy: "Designed the product workflows operators would actually use, sequenced what could wait, and planned implementation against that order.",
            },
          ]}
        />
      </CaseStudySection>

      <section className="border-y border-ink/10 bg-white">
        <div className="site-wrap-wide py-16 sm:py-20">
          <ProductTour shots={project.tour} />
          <ConfidentialityNote className="mt-10" />
        </div>
      </section>

      {lifecycleShot ? (
        <section className="bg-ink text-paper">
          <div className="site-wrap-wide py-16 sm:py-20">
            <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
              How it works
            </p>
            <h2 className="mt-3 max-w-xl font-sans text-display-md">
              From a business question to a sequenced plan.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.7] text-paper/65">
              Asking the data and recommending next work live in the same
              environment as membership health — so a question can become a plan
              without leaving the product.
            </p>
            <div className="mt-10">
              <ScreenshotShowcase shots={[lifecycleShot]} tone="dark" />
            </div>
          </div>
        </section>
      ) : null}

      {alertsShot && reportsShot ? (
        <section>
          <div className="site-wrap-wide py-16 sm:py-20">
            <p className="section-label">Operating the environment</p>
            <h2 className="mt-3 max-w-xl font-sans text-display-md">
              Alerts and reporting are part of the product, not a side process.
            </h2>
            <div className="mt-10">
              <ScreenshotShowcase shots={[alertsShot, reportsShot]} layout="split" />
            </div>
          </div>
        </section>
      ) : null}

      <CaseStudySection title="The resulting product">
        <p className="prose-copy max-w-3xl">
          A single operating environment where teams can move from subscriber
          signals to action without reconstructing the story across disconnected
          systems.
        </p>
      </CaseStudySection>

      <NextProject project={next} />
    </>
  );
}
