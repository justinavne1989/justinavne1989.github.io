import { CaseStudySection, RoleSection } from "../../components/CaseStudySection";
import { EcosystemDiagram } from "../../components/EcosystemDiagram";
import { NextProject } from "../../components/NextProject";
import { ArchitectureFlow, DeliverySystem } from "../../components/ProcessFlow";
import { ProductStatement } from "../../components/ProductStatement";
import { ProjectHero, ProjectMeta } from "../../components/ProjectHero";
import { SEO } from "../../components/SEO";
import { getNextProject, getProject } from "../../data/projects";
import { afterLaunchFlow } from "../../data/site";

const project = getProject("consumer-app")!;

export function ConsumerAppPage() {
  const next = getNextProject(project.slug);

  return (
    <>
      <SEO
        title="Consumer App & Subscription Platform Launch"
        description="Cross-functional delivery of a consumer mobile application and paid subscription platform."
      />
      <ProjectHero
        category="Consumer Product"
        title={project.title}
        intro={project.description}
      />
      <ProjectMeta
        items={[{ label: "Role", value: "Lead Project Manager" }]}
      />

      <ProductStatement quote="A consumer launch is not a date. It is a system that has to keep working after the app is in people's hands." />

      <section className="border-b border-ink/10">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="section-label">01 — What shipped</p>
          <h2 className="mt-3 max-w-2xl font-sans text-display-md">
            A customer product and a subscription system, launched together.
          </h2>
          <div className="mt-10 grid gap-px bg-ink/10 lg:grid-cols-2">
            <article className="bg-ink px-6 py-10 text-paper sm:px-10 sm:py-14">
              <p className="font-sans text-[12.5px] uppercase tracking-[0.16em] text-accent">
                Consumer Mobile Application
              </p>
              <p className="mt-6 font-sans text-display-md">
                A customer-facing mobile product experience.
              </p>
            </article>
            <article className="bg-ink px-6 py-10 text-paper sm:px-10 sm:py-14">
              <p className="font-sans text-[12.5px] uppercase tracking-[0.16em] text-accent">
                Paid Subscription Platform
              </p>
              <p className="mt-6 font-sans text-display-md">
                A subscription experience spanning access, payments, member
                operations, lifecycle engagement, and supporting business
                workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            02 — What had to work together
          </p>
          <h2 className="mt-3 max-w-xl font-sans text-display-md">
            Launch depended on the whole system, not a single screen.
          </h2>
          <div className="mt-10">
            <EcosystemDiagram />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="section-label">03 — The delivery challenge</p>
          <h2 className="mt-3 max-w-2xl font-sans text-display-md">
            Interconnected workstreams, one critical path.
          </h2>
          <p className="prose-copy mt-6 max-w-3xl">
            The mobile product, subscription platform, internal technology,
            partner build, operations, and fulfillment could not move as
            isolated tracks. Dependencies had to stay visible, sequenced, and
            resolved together.
          </p>
          <div className="mt-10">
            <DeliverySystem />
          </div>
        </div>
      </section>

      <CaseStudySection title="My responsibility" eyebrow="04 — Across the launch">
        <RoleSection
          roles={[
            {
              title: "Product requirements & priorities",
              copy: "Defined and coordinated requirements, dependencies, priorities, and delivery needs across the launch.",
            },
            {
              title: "Cross-functional & partner coordination",
              copy: "Served as the primary coordination point between internal teams and the external application-development partner — including an external vendor supporting physical subscription gift inventory and fulfillment.",
            },
            {
              title: "Testing & launch readiness",
              copy: "Coordinated testing, issue resolution, launch dependencies, and readiness across participating teams.",
            },
            {
              title: "Post-launch analytics & lifecycle",
              copy: "Supported subscriber/payment analytics, acquisition reporting, lifecycle communication, engagement, retention, and operational workflows after launch.",
            },
          ]}
        />
      </CaseStudySection>

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            05 — After launch
          </p>
          <h2 className="mt-3 max-w-xl font-sans text-display-md">
            The work continued once customers were in the product.
          </h2>
          <div className="mt-10">
            <ArchitectureFlow
              dark
              nodes={afterLaunchFlow.map((label) => ({ label }))}
            />
          </div>
        </div>
      </section>

      <CaseStudySection title="The resulting operating model" eyebrow="06">
        <p className="prose-copy max-w-3xl">
          The launch became an ongoing customer and subscription operating
          system: the mobile product, paid access, payments, lifecycle
          communication, and the analytics used to improve the experience after
          release — not a one-time ship date.
        </p>
      </CaseStudySection>

      <NextProject project={next} />
    </>
  );
}
