import { ScrollRestoration } from "react-router-dom";
import { CaseStudySection, RoleSection } from "../components/CaseStudySection";
import { ArchitectureLayers, ProcessFlow } from "../components/ProcessFlow";
import { ProductStatement } from "../components/ProductStatement";
import { SEO } from "../components/SEO";
import { site } from "../data/site";

export const OPERATING_APPROACH_SLUG = "technology-operations-plan-7x4m9";

const phases = [
  {
    range: "Days 1–30",
    label: "Understand",
    output: "Current-State Technology Map",
    items: [
      "Inventory applications, devices, vendors, contracts, licenses, and system owners",
      "Map Salesforce, One Click Contractor, Sage Intacct, Microsoft 365, and other critical systems",
      "Document major data flows and integrations",
      "Review identity, access, onboarding, and offboarding",
      "Understand field-device usage and support needs",
      "Review recurring support problems",
      "Meet with leadership, finance, sales, field operations, and system power users",
      "Identify business-critical systems and single points of failure",
      "Establish an initial risk and opportunity register",
    ],
  },
  {
    range: "Days 31–60",
    label: "Stabilize",
    output: "Stable Operating Foundation",
    items: [
      "Establish a clear technology support intake process",
      "Define ticket categories, priorities, ownership, and escalation",
      "Establish practical service expectations / SLAs",
      "Standardize access and permission practices",
      "Create onboarding and offboarding procedures",
      "Build documentation and SOP standards",
      "Review device-management requirements and define an MDM approach",
      "Identify integration failures and manual workarounds",
      "Review vendors, licenses, duplicate tools, and unnecessary spend",
      "Address highest-priority security and operational risks",
    ],
  },
  {
    range: "Days 61–90",
    label: "Build",
    output: "Scalable Technology Roadmap",
    items: [
      "Create a 12-month technology roadmap",
      "Prioritize integration improvements",
      "Define technology KPIs",
      "Determine first technology hires based on actual support and platform needs",
      "Establish system ownership",
      "Create a device lifecycle strategy",
      "Formalize vendor management",
      "Identify 2–3 high-value automation opportunities",
      "Create an initial AI adoption roadmap",
      "Establish recurring technology reviews with executive leadership",
    ],
  },
] as const;

const kpis = [
  {
    title: "System reliability",
    copy: "Critical system availability and recurring incidents",
  },
  {
    title: "Support",
    copy: "Ticket volume, resolution time, and reduction of repeat issues",
  },
  {
    title: "Access & security",
    copy: "Provisioning time, deprovisioning compliance, and access reviews",
  },
  {
    title: "Devices",
    copy: "Deployment time, compliance, and replacement lifecycle",
  },
  {
    title: "Integrations",
    copy: "Failures, manual interventions, and data-synchronization health",
  },
  {
    title: "Automation",
    copy: "Hours eliminated, error reduction, and workflow completion time",
  },
  {
    title: "Adoption",
    copy: "Usage of core systems and process compliance",
  },
  {
    title: "Cost",
    copy: "Licensing, vendors, duplicate technology, and support cost",
  },
] as const;

const aiCategories = [
  {
    title: "Internal knowledge",
    copy: "Search and answer questions across SOPs, documentation, policies, and internal information.",
  },
  {
    title: "Workflow automation",
    copy: "Assist with repetitive administrative tasks and routing.",
  },
  {
    title: "Data & reporting",
    copy: "Make operational information easier for leaders to access and understand.",
  },
  {
    title: "Sales & operations support",
    copy: "Assist teams with preparation, summaries, structured information, and follow-up.",
  },
  {
    title: "System administration",
    copy: "Accelerate documentation, analysis, troubleshooting, and internal technology work.",
  },
] as const;

const credibility = [
  "Salesforce Certified",
  "CA DMV Modernization",
  "50+ Refinement Sessions",
  "15+ Transactional Systems",
  "Internal Product Builder",
  "Business Owner",
  "People Leadership",
] as const;

function ModelNote({ children }: { children: string }) {
  return (
    <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/50">{children}</p>
  );
}

function LayerBox({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-ink/10 bg-white px-5 py-6 sm:px-7">
      {eyebrow ? (
        <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <p className="mt-2 font-sans text-[13px] uppercase tracking-[0.1em] text-ink">
        {title}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {items.map((item) => (
          <li key={item} className="font-sans text-[13px] uppercase tracking-[0.1em] text-ink/55">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OperatingApproachPage() {
  return (
    <>
      <SEO
        title="Building a Scalable Technology Function"
        description="How I would approach building a structured, scalable technology function from founder-led ownership — discovery first, then operating discipline, then a roadmap the business can run."
        robots="noindex, nofollow, noarchive"
      />
      <ScrollRestoration />
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <header className="border-b border-ink/10">
          <div className="site-wrap-wide flex h-[68px] items-center">
            <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.2em] text-ink">
              Justin Avne
            </p>
          </div>
        </header>

        <main id="main" className="flex-1">
          <header className="border-b border-ink/10 bg-ink text-paper">
            <div className="site-wrap py-16 sm:py-24">
              <p className="font-sans text-[12.5px] font-medium uppercase tracking-[0.18em] text-accent">
                Director of Information | Operating Approach
              </p>
              <h1 className="mt-6 font-sans text-display-lg text-paper">
                Building a Scalable Technology Function
              </h1>
              <p className="mt-8 max-w-2xl font-body text-[1.1875rem] leading-[1.7] text-paper/80">
                Mode Renovation appears to be at an inflection point: technology
                has become important enough to the business that informal
                ownership needs to evolve into a structured, scalable function.
              </p>
              <p className="mt-5 max-w-2xl font-body text-[1.1875rem] leading-[1.7] text-paper/80">
                Based on the responsibilities outlined in the role, this is how I
                would approach that transition.
              </p>
              <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-paper/45">
                This framework is based only on the information provided in the
                job description. Actual priorities would be determined after
                evaluating Mode’s systems, workflows, security posture, users,
                vendors, and business objectives.
              </p>
            </div>
          </header>

          <CaseStudySection title="Start with the business, not the technology">
            <p className="prose-copy max-w-3xl">
              The first objective would not be to replace tools or introduce new
              technology. It would be to understand how Mode actually operates.
            </p>
            <p className="prose-copy mt-5 max-w-3xl">
              Technology decisions should follow the workflows that generate
              revenue, support customers, equip field teams, move information
              between departments, and keep the company operating.
            </p>
            <div className="mt-10 overflow-x-hidden">
              <ProcessFlow
                steps={[
                  "Business Goals",
                  "People & Processes",
                  "Applications & Integrations",
                  "Data",
                  "Identity · Security · Devices · Infrastructure",
                ]}
              />
            </div>
            <p className="prose-copy mt-10 max-w-3xl">
              The technology function should make every layer above it more
              reliable, measurable, secure, and scalable.
            </p>
          </CaseStudySection>

          <section className="bg-ink text-paper">
            <div className="site-wrap-wide py-16 sm:py-20">
              <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
                Discovery before change
              </p>
              <h2 className="mt-3 font-sans text-display-md">The first 90 days</h2>
              <div className="mt-12 grid gap-px bg-paper/10 lg:grid-cols-3">
                {phases.map((phase, index) => (
                  <article key={phase.label} className="bg-ink px-6 py-8 sm:px-8 sm:py-10">
                    <p className="font-sans text-[11px] tracking-[0.16em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 font-sans text-[13px] uppercase tracking-[0.12em] text-paper/45">
                      {phase.range}
                    </p>
                    <h3 className="mt-2 font-sans text-[1.35rem] text-paper">{phase.label}</h3>
                    <ul className="mt-6 space-y-3 text-[1.02rem] leading-[1.65] text-paper/70">
                      {phase.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-8 border-t border-paper/15 pt-5 font-sans text-[12.5px] uppercase tracking-[0.14em] text-accent">
                      Output: {phase.output}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <CaseStudySection
            title="From founder-led technology to an organization"
            wide
          >
            <p className="prose-copy max-w-3xl">
              The goal is not to immediately build a large IT department. The
              goal is to build clear ownership: who decides, who supports, who
              owns each system, and how work enters and leaves the technology
              function.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <article className="border border-ink/10 bg-white p-6 sm:p-8">
                <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-accent">
                  Today
                </p>
                <h3 className="mt-3 font-sans text-lg">Executive leadership</h3>
                <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink/70">
                  Technology decisions, support, vendors, and systems sit with
                  the people already running the business.
                </p>
              </article>
              <article className="border border-ink/10 bg-white p-6 sm:p-8">
                <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-accent">
                  Transition
                </p>
                <h3 className="mt-3 font-sans text-lg">Director of Information</h3>
                <ul className="mt-4 space-y-2 text-[1.0625rem] leading-[1.7] text-ink/70">
                  {[
                    "Technology strategy",
                    "Systems",
                    "Security",
                    "Integrations",
                    "Vendors",
                    "Automation",
                    "Team building",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="border border-ink/10 bg-white p-6 sm:p-8">
                <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-accent">
                  Scale
                </p>
                <h3 className="mt-3 font-sans text-lg">Director of Information</h3>
                <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink/70">
                  Functions beneath the role would follow actual workload:
                </p>
                <ul className="mt-4 space-y-2 text-[1.0625rem] leading-[1.7] text-ink/70">
                  {[
                    "IT Support / Helpdesk",
                    "Systems Administration",
                    "Salesforce / Business Systems",
                    "Security / Infrastructure",
                    "Automation / Data",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="prose-copy mt-10 max-w-3xl">
              The actual hiring sequence should follow observed workload and
              business risk, not a predetermined org chart.
            </p>
          </CaseStudySection>

          <section className="border-y border-ink/10 bg-white">
            <div className="site-wrap-wide py-16 sm:py-20">
              <p className="section-label">Operating model</p>
              <h2 className="mt-3 max-w-2xl font-sans text-display-md">
                One technology environment, not a collection of tools
              </h2>
              <div className="mt-10 overflow-x-hidden">
                <div className="grid gap-3 lg:grid-cols-3">
                  <LayerBox
                    eyebrow="Field operations"
                    title="iPads / Mobile Devices"
                    items={["Field access", "Support", "Lifecycle"]}
                  />
                  <LayerBox
                    eyebrow="Sales & customer workflows"
                    title="Core operating systems"
                    items={["Salesforce", "One Click Contractor"]}
                  />
                  <LayerBox
                    eyebrow="Business operations"
                    title="Finance & administration"
                    items={["Sage Intacct"]}
                  />
                </div>
                <p className="py-3 text-center font-sans text-xs tracking-[0.18em] text-ink/35" aria-hidden>
                  ↓
                </p>
                <LayerBox
                  eyebrow="Collaboration & identity"
                  title="Microsoft 365"
                  items={["Outlook", "Identity", "Shared work"]}
                />
                <p className="py-3 text-center font-sans text-xs tracking-[0.18em] text-ink/35" aria-hidden>
                  ↓
                </p>
                <ArchitectureLayers
                  layers={[
                    {
                      title: "Integration layer",
                      items: ["APIs", "Automation", "Data flows", "Monitoring"],
                    },
                    {
                      title: "Foundation",
                      items: [
                        "Identity",
                        "Access",
                        "Security",
                        "Device management",
                        "Documentation",
                      ],
                    },
                  ]}
                />
              </div>
              <ModelNote>
                Illustrative operating model based on systems referenced in the
                job description. This is not a claim about Mode’s actual
                architecture.
              </ModelNote>
              <p className="prose-copy mt-8 max-w-3xl">
                A major priority would be ensuring each platform has a clear
                purpose, owner, integration strategy, permission model, and
                source-of-truth responsibility.
              </p>
            </div>
          </section>

          <CaseStudySection title="Technology should be measured like an operating function">
            <p className="prose-copy max-w-3xl">
              Once the current state is understood, technology should have a
              small set of measures leadership can actually use. Final KPIs
              would depend on current systems and business priorities.
            </p>
            <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {kpis.map((kpi) => (
                <article key={kpi.title} className="bg-paper px-5 py-6 sm:px-6 sm:py-8">
                  <h3 className="font-sans text-[13px] uppercase tracking-[0.12em] text-ink">
                    {kpi.title}
                  </h3>
                  <p className="mt-3 text-[1.0625rem] leading-[1.7] text-ink/70">
                    {kpi.copy}
                  </p>
                </article>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="A practical AI strategy" dark>
            <p className="max-w-3xl text-[1.175rem] leading-[1.7] text-paper/70">
              AI should enter the roadmap where it can remove friction from a
              real workflow, improve access to information, or reduce repetitive
              work — not because it is new.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {aiCategories.map((item) => (
                <article key={item.title} className="border-t border-paper/15 pt-5">
                  <h3 className="font-sans text-lg">{item.title}</h3>
                  <p className="mt-2 text-[1.0625rem] leading-[1.7] text-paper/65">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </CaseStudySection>

          <ProductStatement
            quote="Automate the workflow only when the cost of an incorrect result is understood."
            support="Higher-risk workflows should retain human review, auditability, permissions, and clear escalation paths."
          />

          <CaseStudySection title="What I would bring to the role">
            <RoleSection
              roles={[
                {
                  title: "Business + technology",
                  copy: "I have spent much of my career translating between operational needs and technical systems — including Salesforce work on a large public-sector modernization program, and internal systems built around real workflows.",
                },
                {
                  title: "Systems thinking",
                  copy: "I look for the process underneath an individual problem and ask what should exist so the problem does not keep returning: ownership, intake, permissions, documentation, and a measurable operating rhythm.",
                },
                {
                  title: "Builder mentality",
                  copy: "I have repeatedly taken ambiguous problems and moved them from idea to requirements, workflows, prototypes, systems, and operating processes — including internal products for subscription intelligence, product planning, and AI-assisted creative production.",
                },
                {
                  title: "AI + automation",
                  copy: "I use modern AI tools daily for analysis, requirements, workflow design, prototyping, and implementation. I treat them as components of a business system, not as a replacement for judgment.",
                },
              ]}
            />
            <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3 text-[13px] uppercase tracking-[0.12em] text-ink/50">
              {credibility.map((item, index) => (
                <li key={item} className="inline-flex items-center gap-3">
                  {index > 0 ? (
                    <span className="text-ink/25" aria-hidden>
                      |
                    </span>
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>
            <p className="prose-copy mt-10 max-w-3xl">
              I am based near Corona and can work on-site. I have owned and
              operated a business, delegated operational work, and held direct
              people-leadership responsibilities — including setting
              expectations, coordinating work, training people, and creating
              repeatable processes.
            </p>
          </CaseStudySection>

          <section className="bg-ink text-paper">
            <div className="site-wrap py-16 sm:py-24">
              <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
                The objective
              </p>
              <h2 className="mt-5 max-w-3xl font-sans text-display-md">
                Technology should become an operating advantage for Mode
                Renovation, not another source of complexity.
              </h2>
              <p className="mt-8 max-w-2xl text-[1.175rem] leading-[1.7] text-paper/70">
                The goal would be to create a technology organization that
                employees trust, leadership can understand, and the business can
                continue to scale on top of.
              </p>
              <div className="mt-14 border-t border-paper/15 pt-8">
                <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.2em]">
                  Justin Avne
                </p>
                <p className="mt-3 text-[1.0625rem] text-paper/65">
                  Technology Operations & Information Systems
                </p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex font-sans text-[14px] uppercase tracking-[0.12em] text-paper/70 hover:text-paper"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
