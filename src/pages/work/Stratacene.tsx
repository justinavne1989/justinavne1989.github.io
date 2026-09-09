import { CaseStudySection, RoleSection } from "../../components/CaseStudySection";
import { NextProject } from "../../components/NextProject";
import { ArchitectureLayers, ProcessFlow } from "../../components/ProcessFlow";
import { ProductStatement } from "../../components/ProductStatement";
import { ProjectHero, ProjectMeta } from "../../components/ProjectHero";
import { ScreenshotShowcase } from "../../components/ScreenshotShowcase";
import { SEO } from "../../components/SEO";
import { StatusLabel } from "../../components/StatusLabel";
import { getNextProject, getProject } from "../../data/projects";

const project = getProject("stratacene")!;

const actionCategories = [
  "Tax & Spending",
  "Resources",
  "Industry",
  "Trade",
  "Migration",
  "Diplomacy",
  "Strategic Policy",
];

const experimentQuestions = [
  "How does its strategy evolve?",
  "Does it learn from consequences?",
  "Does it sacrifice long-term stability for short-term progress?",
  "How does it respond when other agents interfere with its plan?",
  "Do different models develop systematically different strategies?",
  "Can the same agent reproduce success across different worlds?",
];

export function StratacenePage() {
  const next = getNextProject(project.slug);
  const overviewShot = project.hero;
  const [countryShot, setupShot, benchmarkShot, replayShot] = project.featureShots;

  return (
    <>
      <SEO
        title="Stratacene"
        description="AI multi-agent world simulation platform — a personal product in development by Justin Avne."
      />
      <ProjectHero
        category={project.category}
        title={project.title}
        subtitle={project.subtitle}
        badge="Personal product in development"
        intro="Stratacene is an experimental world-simulation platform built to study what happens when autonomous AI agents are given control of synthetic nations, competing objectives, limited information, and meaningful strategic choices."
      />
      <ProjectMeta
        items={[
          { label: "Role", value: "Creator / Builder" },
          { label: "Status", value: "Personal product in development" },
        ]}
      />

      <ProductStatement
        dark
        quote="Agents choose. Reality resolves."
        support="Rather than allowing an LLM to narrate outcomes, Stratacene separates decision-making from reality. Agents decide what they want to do. A simulation engine determines what actually happens."
      />

      {overviewShot ? (
        <section className="border-b border-ink/10 bg-white">
          <div className="site-wrap-wide py-16 sm:py-20">
            <ScreenshotShowcase shots={[overviewShot]} />
          </div>
        </section>
      ) : null}

      <CaseStudySection title="How do you give AI agents freedom without letting them invent reality?">
        <p className="prose-copy max-w-3xl">
          The initial idea was simple: place different AI agents in charge of
          different countries and give each one an objective. The difficult part
          was determining what the AI should actually control.
        </p>
        <p className="prose-copy mt-5 max-w-3xl">
          If an agent can simply describe what happens next, the result becomes
          roleplay. If every possible decision is hard-coded, the agents have
          little meaningful autonomy. Stratacene is built around the boundary
          between those two extremes.
        </p>
        <p className="prose-copy mt-5 max-w-3xl">
          The agent controls strategy. The engine controls consequences. That
          turns the LLM into a decision-maker operating inside a simulation
          rather than the author of the simulation itself.
        </p>
      </CaseStudySection>

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            Decision loop
          </p>
          <h2 className="mt-3 font-sans text-display-md">How it works</h2>
          <div className="mt-10 overflow-x-hidden">
            <ProcessFlow
              dark
              steps={[
                "Objective + World State",
                "AI Agent Reasons",
                "Selects Valid Action",
                "Engine Resolves Action",
                "World State Changes",
                "Outcome Becomes Context",
                "Next Decision",
              ]}
            />
          </div>
          <p className="mt-10 max-w-3xl text-[1.175rem] leading-[1.7] text-paper/70">
            Each decision becomes part of a continuing feedback loop. An agent
            may raise taxes, alter spending, change trade policy, increase
            production, pursue resources, impose sanctions, change migration
            policy, or take other permitted actions.
          </p>
          <p className="mt-5 max-w-3xl text-[1.175rem] leading-[1.7] text-paper/70">
            The engine evaluates those choices against the state of the country
            and the broader world. Decisions can create intended effects,
            unintended consequences, second-order effects, and reactions from
            other agents. The agents then have to make their next decisions in
            the world their previous decisions helped create.
          </p>
        </div>
      </section>

      {countryShot ? (
        <section>
          <div className="site-wrap-wide py-16 sm:py-20">
            <ScreenshotShowcase shots={[countryShot]} />
          </div>
        </section>
      ) : null}

      <CaseStudySection title="Constrained actions. Open-ended strategy.">
        <p className="prose-copy max-w-3xl">
          One of the central product decisions was to avoid giving agents
          unrestricted control over the simulation. Stratacene instead uses a
          defined Action Registry. The current architecture contains
          approximately 43 strategic action types spanning taxation, spending,
          resources, production, trade, sanctions, migration, and other state
          decisions.
        </p>
        <p className="prose-copy mt-5 max-w-3xl">
          The constraint is deliberate. It creates a common interface between
          very different AI models and the simulation engine. Two models can
          face the same country, objective, available actions, and starting
          conditions, yet develop completely different strategies. That makes
          their behavior measurable and comparable.
        </p>
        <ul className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {actionCategories.map((item) => (
            <li key={item} className="bg-paper px-4 py-5 font-sans text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        title="The product is not just the simulation. It is the experiment."
        eyebrow="Reproducibility"
      >
        <p className="prose-copy max-w-3xl">
          A major design goal is reproducibility. Stratacene is being designed
          so experiments can compare different agents, strategies, objectives,
          and world configurations under controlled conditions — multiple
          synthetic countries, different models, heuristic baselines, controlled
          randomness, long horizons, repeated runs, and complete replay.
        </p>
        <p className="prose-copy mt-5 max-w-3xl">
          The goal is to move beyond asking whether an AI agent made an
          interesting decision. The more useful questions are:
        </p>
        <ul className="mt-8 space-y-3 border-l border-ink/10 pl-6 text-[1.0625rem] leading-[1.7] text-ink/70">
          {experimentQuestions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {setupShot ? (
          <div className="mt-12">
            <ScreenshotShowcase shots={[setupShot]} />
          </div>
        ) : null}
      </CaseStudySection>

      {benchmarkShot && replayShot ? (
        <section className="border-y border-ink/10 bg-white">
          <div className="site-wrap-wide py-16 sm:py-20">
            <p className="section-label">Comparison and inspection</p>
            <h2 className="mt-3 max-w-2xl font-sans text-display-md">
              Same world. Different agents. Inspectable runs.
            </h2>
            <div className="mt-10">
              <ScreenshotShowcase
                shots={[benchmarkShot, replayShot]}
                layout="split"
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-20">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            Architecture in development
          </p>
          <h2 className="mt-3 max-w-xl font-sans text-display-md">
            Separating intelligence from the world
          </h2>
          <div className="mt-10">
            <ArchitectureLayers
              dark
              layers={[
                {
                  title: "Agent Layer",
                  items: ["Objectives", "Context", "Reasoning", "Action selection"],
                },
                {
                  title: "Action Interface",
                  items: [
                    "Validated strategic actions",
                    "Parameters",
                    "Constraints",
                  ],
                },
                {
                  title: "Simulation Engine",
                  items: [
                    "Economy",
                    "Resources",
                    "Industry",
                    "Trade",
                    "Population",
                    "Government",
                    "Diplomacy",
                    "Controlled uncertainty",
                  ],
                },
                {
                  title: "Experiment Layer",
                  items: [
                    "World state",
                    "Metrics",
                    "Benchmarks",
                    "Replay",
                    "Comparison",
                  ],
                },
              ]}
            />
          </div>
          <p className="mt-10 max-w-3xl text-[1.175rem] leading-[1.7] text-paper/70">
            This separation is intentional. The agent layer can evolve as AI
            models improve without requiring the simulation itself to become
            model-dependent. Likewise, the engine can become more sophisticated
            without changing the fundamental interface through which agents
            interact with the world.
          </p>
          <p className="mt-5 max-w-3xl text-[1.175rem] leading-[1.7] text-paper/70">
            That also makes it possible to compare local models, frontier API
            models, heuristic agents, and future agent architectures against the
            same underlying environment. The layers above describe the
            architecture being actively developed — not a finished system.
          </p>
        </div>
      </section>

      <CaseStudySection
        title="From an idea to an executable system"
        eyebrow="Product through implementation"
      >
        <p className="prose-copy max-w-3xl">
          Stratacene began as a broad concept rather than a defined product
          specification. Much of the work has been determining what the product
          actually needs to be: reducing a large idea into components that can
          be implemented, tested, and reconciled without losing the integrity of
          the overall simulation.
        </p>
        <div className="mt-10">
          <RoleSection
            roles={[
              {
                title: "Product architecture",
                copy: "Defined the boundary between AI reasoning and simulation logic, and the layers the product has to hold together.",
              },
              {
                title: "Action system & world models",
                copy: "Designed the action registry, country and world-state models, and the dependencies between simulation systems.",
              },
              {
                title: "Experiment design",
                copy: "Defined agent objectives, decision loops, benchmark structures, and the replay and observability the product needs.",
              },
              {
                title: "Iterative build",
                copy: "Translated the architecture into technical specifications and is building the system iteratively — with AI-assisted development tools under human control.",
              },
            ]}
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Using AI to build an AI system">
        <p className="prose-copy max-w-3xl">
          AI is also part of the development process. I use modern AI coding and
          reasoning tools to accelerate architecture exploration, requirements
          development, implementation, testing, and debugging.
        </p>
        <p className="prose-copy mt-5 max-w-3xl">
          That does not mean delegating product judgment to the model. For a
          system this interconnected, an AI-generated implementation can be
          locally correct while violating assumptions somewhere else in the
          simulation. I therefore treat AI as a development accelerator while
          keeping product architecture, requirements, validation, and
          reconciliation under human control.
        </p>
        <p className="prose-copy mt-5 max-w-3xl">
          This project has reinforced a principle that also guides my
          professional AI work: AI can accelerate the work without owning the
          judgment.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Current status">
        <StatusLabel>Personal product in active development</StatusLabel>
        <p className="prose-copy mt-6 max-w-3xl">
          Stratacene is in active development. Current work is focused on
          building and reconciling the underlying simulation foundation,
          expanding the action space available to agents, validating decision
          and resolution loops, and developing the experiment layer needed to
          compare agent behavior over long-running simulations.
        </p>
        <p className="prose-copy mt-5 max-w-3xl">
          As the engine matures, the product layer will increasingly focus on
          making complex simulations understandable through experiment setup,
          dashboards, world-state inspection, comparison, and replay.
        </p>
      </CaseStudySection>

      <NextProject project={next} />
    </>
  );
}
