import { CaseStudySection, ConfidentialityNote, RoleSection } from "../../components/CaseStudySection";
import { NextProject } from "../../components/NextProject";
import { ProcessFlow } from "../../components/ProcessFlow";
import { ProductStatement } from "../../components/ProductStatement";
import { ProductTour } from "../../components/ProductTour";
import { ProjectHero, ProjectMeta } from "../../components/ProjectHero";
import { ScreenshotShowcase } from "../../components/ScreenshotShowcase";
import { SEO } from "../../components/SEO";
import { getNextProject, getProject } from "../../data/projects";

const project = getProject("product-planning")!;

export function ProductPlanningPage() {
  const next = getNextProject(project.slug);
  const relatedShot = project.featureShots[0];

  return (
    <>
      <SEO
        title="Product Planning & Prototyping Platform"
        description="An interactive product-planning environment that turns audits, feature concepts, and redesign ideas into visual prototypes and clearer requirements."
      />
      <ProjectHero
        category={project.category}
        title={project.title}
        intro="An interactive product-planning environment designed to turn website audits, feature concepts, and redesign ideas into visual prototypes and clearer implementation requirements."
      />
      <ProjectMeta
        items={[{ label: "Role", value: "Product Lead / Builder" }]}
      />

      <CaseStudySection title="Product overview">
        <p className="prose-copy max-w-3xl">
          Instead of discussing potential product changes only through documents
          or static screenshots, teams can visualize proposed experiences and
          use them as a more concrete basis for requirements and implementation
          planning.
        </p>
      </CaseStudySection>

      <ProductStatement
        quote="The gap is not a shortage of ideas. It is the distance between idea, written requirement, shared understanding, prototype, and implementation."
      />

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            Product value
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-display-md">
            Discuss the proposed experience, not only the document that describes it.
          </h2>
          <div className="mt-10">
            <ProcessFlow
              dark
              steps={[
                "Product issue / opportunity",
                "Concept",
                "Visual prototype",
                "Comparison / demonstration",
                "Implementation-ready thinking",
              ]}
            />
          </div>
        </div>
      </section>

      <CaseStudySection title="My role">
        <RoleSection
          roles={[
            {
              title: "Product concept & workflow",
              copy: "Defined the product as a planning environment: idea cards, priority, guided tour, and an instant result state.",
            },
            {
              title: "Requirements & information architecture",
              copy: "Structured how audits, concepts, and redesign ideas become a backlog that can be presented and reordered in the room.",
            },
            {
              title: "UX & prototype design",
              copy: "Designed the control surface and the fidelity of the prototypes it plays — including desktop and mobile without a second build.",
            },
            {
              title: "Stakeholder discovery, prioritization & implementation planning",
              copy: "Used stakeholder discovery to sequence work and turn visualized concepts into clearer implementation requirements.",
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

      {relatedShot ? (
        <section className="bg-ink text-paper">
          <div className="site-wrap-wide py-16 sm:py-20">
            <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
              From concept to a visible change
            </p>
            <h2 className="mt-3 max-w-xl font-sans text-display-md">
              The planning environment exists to make a proposed module discussable.
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-paper/65">
              Related stories is one of the concepts the backlog can play into
              the live page — a next-read decision placed where the article
              actually ends.
            </p>
            <div className="mt-10">
              <ScreenshotShowcase shots={[relatedShot]} tone="dark" />
            </div>
          </div>
        </section>
      ) : null}

      <CaseStudySection title="The resulting workflow">
        <p className="prose-copy max-w-3xl">
          Product conversations move from abstract requirements to shared,
          visible experiences before implementation begins.
        </p>
      </CaseStudySection>

      <NextProject project={next} />
    </>
  );
}
