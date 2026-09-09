import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EcosystemDiagram } from "../components/EcosystemDiagram";
import { ProcessFlow } from "../components/ProcessFlow";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SEO } from "../components/SEO";
import { WordTransform } from "../components/WordTransform";
import { builtProjects, leadershipProject } from "../data/projects";
import { focusAreas, launchProofs, processSteps } from "../data/site";

export function HomePage() {
  const [first, second, third, fourth, fifth] = builtProjects;

  return (
    <>
      <SEO />
      <section className="border-b border-ink/10">
        <div className="site-wrap-wide grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-8">
            <p className="eyebrow">Product · AI · Data</p>
            <h1 className="mt-6 font-sans text-display-xl text-ink">
              Turning complex problems into products.
            </h1>
            <div className="word-morph-stage">
              <WordTransform />
            </div>
          </div>
          <div className="flex flex-col justify-end lg:col-span-4">
            <p className="max-w-md text-[1.1875rem] leading-[1.7] text-ink/70">
              I work at the intersection of product strategy, technology, data,
              and AI — turning ambiguous problems into clear products, workflows,
              and user experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/work" className="btn-primary">
                View Selected Work
                <ArrowRight size={14} />
              </Link>
              <Link to="/about" className="btn-secondary">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-24">
          <Reveal>
            <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
              Launch Leadership
            </p>
            <h2 className="mt-5 max-w-3xl font-sans text-[1.7rem] font-medium leading-snug text-paper sm:text-[1.85rem]">
              {leadershipProject.title}
            </h2>
            <p className="mt-4 font-sans text-[12.5px] uppercase tracking-[0.16em] text-paper/45">
              {leadershipProject.category}
            </p>
            <p className="mt-6 max-w-3xl text-[1.175rem] leading-[1.7] text-paper/70">
              {leadershipProject.description}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <EcosystemDiagram />
          </Reveal>

          <Reveal className="mt-12">
            <ol className="grid gap-px bg-paper/10 sm:grid-cols-3">
              {launchProofs.map((proof, index) => (
                <li key={proof.title} className="bg-ink px-5 py-6 sm:px-6 sm:py-8">
                  <p className="font-sans text-[11px] tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-sans text-[13px] uppercase tracking-[0.12em] text-paper">
                    {proof.title}
                  </h3>
                  <p className="mt-3 text-[1.0625rem] leading-[1.7] text-paper/65">
                    {proof.copy}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-10">
            <Link to={leadershipProject.href} className="case-link !text-paper hover:!text-accent">
              View Launch Case Study
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/10 py-16 sm:py-24">
        <div className="site-wrap-wide">
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-6">
              <h2 className="font-sans text-display-md">Selected Product Work</h2>
              <Link
                to="/work"
                className="hidden font-sans text-[14px] uppercase tracking-[0.12em] text-ink/55 hover:text-ink sm:inline"
              >
                All work
              </Link>
            </div>
          </Reveal>

          {first ? (
            <Reveal>
              <ProjectCard project={first} featured numbered />
            </Reveal>
          ) : null}

          <div className="mt-20 grid gap-x-16 gap-y-20 lg:grid-cols-2">
            {[second, third].filter(Boolean).map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} numbered />
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-x-16 gap-y-20 lg:grid-cols-2">
            {[fourth, fifth].filter(Boolean).map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} numbered />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="site-wrap-wide py-16 sm:py-24">
          <Reveal>
            <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
              From ambiguity to product
            </p>
            <h2 className="mt-4 max-w-2xl font-sans text-display-md">
              The work happens between disciplines.
            </h2>
            <p className="mt-5 max-w-2xl text-[1.175rem] leading-[1.7] text-paper/65">
              My strongest work happens between disciplines — translating
              business needs into product decisions while staying close enough to
              the technology to understand what is actually possible.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <ProcessFlow steps={[...processSteps]} dark />
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-wrap-wide">
          <Reveal>
            <p className="section-label">Where I work</p>
            <h2 className="mt-4 font-sans text-display-md">Focus areas</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:gap-y-12">
            {focusAreas.map((area) => (
              <article key={area.title} className="border-t border-ink/[0.08] pt-7">
                <h3 className="font-sans text-xl font-medium tracking-tight text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-md text-[1.0625rem] leading-[1.7] text-ink/70">
                  {area.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
