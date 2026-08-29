import { CaseStudySection, ConfidentialityNote, RoleSection } from "../../components/CaseStudySection";
import { NextProject } from "../../components/NextProject";
import { ArchitectureFlow } from "../../components/ProcessFlow";
import { ProductStatement } from "../../components/ProductStatement";
import { ProductTour } from "../../components/ProductTour";
import { ProjectHero, ProjectMeta } from "../../components/ProjectHero";
import { ScreenshotShowcase } from "../../components/ScreenshotShowcase";
import { SEO } from "../../components/SEO";
import { getNextProject, getProject } from "../../data/projects";

const project = getProject("ai-creative")!;

export function AiCreativePage() {
  const next = getNextProject(project.slug);
  const [chartShot, libraryShot, outputShot] = project.featureShots;

  return (
    <>
      <SEO
        title="AI-Assisted Creative Production Platform"
        description="A centralized creative-production product designed to turn natural-language requests into structured, editable visual outputs."
      />
      <ProjectHero
        category={project.category}
        title={project.title}
        intro="A centralized creative-production product designed to turn natural-language requests into structured, editable visual outputs for recurring business workflows."
      />
      <ProjectMeta
        items={[{ label: "Role", value: "Product Lead / Builder" }]}
      />

      <CaseStudySection title="Product overview">
        <p className="prose-copy max-w-3xl">
          Creative teams do not only need a model that can produce a picture.
          They need a way to start from a business request, keep brand and
          editorial constraints in the workflow, generate options that can be
          refined, and send a finished asset through review and presentation.
        </p>
      </CaseStudySection>

      <ProductStatement
        quote="The product problem is fragmentation — not a shortage of image generators."
        support="Requests, prompts, asset creation, revisions, approvals, reusable branding, output formats, and presentation workflows usually live in different places. The product is the system that holds them together."
      />

      <CaseStudySection title="The problem">
        <p className="prose-copy max-w-3xl">
          Production work fragments across tools: a business request becomes a
          prompt in one place, an asset in another, a revision thread somewhere
          else, and approval in a conversation that never makes it back into the
          file.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Business request",
            "Prompt",
            "Asset creation",
            "Revision",
            "Approval",
            "Reusable brand rules",
            "Output formats",
            "Presentation workflows",
          ].map((item) => (
            <li
              key={item}
              className="border-t border-ink/10 pt-3 font-sans text-sm uppercase tracking-[0.08em] text-ink/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="My role" eyebrow="Product thinking, close to the system">
        <RoleSection
          roles={[
            {
              title: "Opportunity, concept & scope",
              copy: "Identified the product opportunity and defined concept, scope, and the jobs the system needed to support.",
            },
            {
              title: "Workflow, UX & information architecture",
              copy: "Designed the path from request through generation, library, review, and presentation — including how work is organized and retrieved.",
            },
            {
              title: "AI-assisted interaction design",
              copy: "Shaped prompt-driven setup, multi-concept review, language-based refinement, and the points where a person has to decide.",
            },
            {
              title: "APIs, permissions, governance & roadmap",
              copy: "Planned API integration, permissions, human review, prototyping, testing, prioritization, and what should come next.",
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

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-20 sm:py-28">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            Production workflow
          </p>
          <h2 className="mt-4 max-w-2xl font-sans text-display-md">
            Request in. Reviewable output out.
          </h2>
          <p className="mt-6 max-w-2xl text-[1.175rem] leading-[1.7] text-paper/65">
            AI sits inside a controlled production path — from the business
            request through structured actions to an editable output a person
            can review.
          </p>
          <div className="mt-14">
            <ArchitectureFlow
              dark
              nodes={[
                { label: "Business Request" },
                { label: "AI Interpretation" },
                { label: "Structured Instructions" },
                { label: "Tool / API Actions" },
                { label: "Editable Output" },
                { label: "Human Review" },
              ]}
            />
          </div>
        </div>
      </section>

      {chartShot && libraryShot ? (
        <section className="bg-white">
          <div className="site-wrap-wide py-16 sm:py-20">
            <p className="section-label">Human review and reusable rules</p>
            <h2 className="mt-3 max-w-xl font-sans text-display-md">
              Data visuals and brand assets stay inside the same production system.
            </h2>
            <div className="mt-10">
              <ScreenshotShowcase shots={[chartShot, libraryShot]} layout="stack" />
            </div>
          </div>
        </section>
      ) : null}

      {outputShot ? (
        <section className="bg-ink text-paper">
          <div className="site-wrap-wide py-16 sm:py-20">
            <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
              Presentation output
            </p>
            <h2 className="mt-3 max-w-xl font-sans text-display-md">
              The workflow ends in something a producer can use.
            </h2>
            <div className="mt-10">
              <ScreenshotShowcase shots={[outputShot]} tone="dark" />
            </div>
          </div>
        </section>
      ) : null}

      <CaseStudySection title="The resulting workflow">
        <p className="prose-copy max-w-3xl">
          AI becomes one layer of a controlled production system rather than a
          separate tool teams have to work around.
        </p>
      </CaseStudySection>

      <NextProject project={next} />
    </>
  );
}
