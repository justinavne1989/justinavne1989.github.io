import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EcosystemDiagram } from "../components/EcosystemDiagram";
import { Reveal } from "../components/Reveal";
import { ScreenshotLightbox } from "../components/ScreenshotLightbox";
import { SEO } from "../components/SEO";
import { StatusLabel } from "../components/StatusLabel";
import {
  builtProjects,
  leadershipProject,
  type Project,
} from "../data/projects";

function IndexEntry({
  project,
  numbered,
}: {
  project: Project;
  numbered: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="grid items-start gap-8 border-t border-ink/10 py-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <p className="section-label">
          {numbered && project.sequence
            ? `${String(project.sequence).padStart(2, "0")} / ${project.category}`
            : project.category}
        </p>
        <h3 className="mt-4 font-sans text-[1.5rem] font-medium leading-snug tracking-tight sm:text-[1.65rem]">
          {project.title}
        </h3>
        {project.inDevelopment ? (
          <div className="mt-3">
            <StatusLabel>Personal product in development</StatusLabel>
          </div>
        ) : null}
        <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.7] text-ink/70">
          {project.kind === "leadership" ? project.description : project.thesis}
        </p>
        <Link to={project.href} className="case-link mt-6">
          {project.kind === "leadership" ? "View Launch Case Study" : "View Case Study"}
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="lg:col-span-7">
        {project.hero ? (
          <button
            type="button"
            className="group block w-full text-left"
            onClick={() => setOpen(true)}
            aria-label={`Open larger view: ${project.hero.alt}`}
          >
            <span className="shot-frame block">
              <img
                src={project.hero.src}
                alt={project.hero.alt}
                className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              />
            </span>
          </button>
        ) : (
          <EcosystemDiagram compact />
        )}
      </div>
      {open && project.hero ? (
        <ScreenshotLightbox
          src={project.hero.src}
          alt={project.hero.alt}
          caption={project.hero.caption}
          title={project.hero.title}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </article>
  );
}

export function WorkPage() {
  return (
    <>
      <SEO
        title="Selected Work"
        description="Work spanning consumer product delivery, subscription intelligence, applied AI, product prototyping, multi-agent simulation, and sports technology."
      />
      <section className="border-b border-ink/10 bg-ink text-paper">
        <div className="site-wrap py-16 sm:py-24">
          <p className="font-sans text-[12.5px] uppercase tracking-[0.18em] text-accent">
            Selected Work
          </p>
          <h1 className="mt-5 max-w-3xl font-sans text-display-lg">
            Products, platforms, and launches.
          </h1>
          <p className="mt-6 max-w-xl text-[1.1875rem] leading-[1.7] text-paper/70">
            Work spanning consumer product delivery, subscription intelligence,
            applied AI, product prototyping, multi-agent simulation, and sports
            technology.
          </p>
        </div>
      </section>

      <section className="border-b border-ink/10 py-16 sm:py-20">
        <div className="site-wrap-wide">
          <Reveal>
            <p className="section-label">Launch Leadership</p>
            <h2 className="mt-3 font-sans text-display-md">
              Shipping through organizational complexity.
            </h2>
          </Reveal>
          <div className="mt-10">
            <IndexEntry project={leadershipProject} numbered={false} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-wrap-wide">
          <Reveal>
            <p className="section-label">Selected Product Work</p>
            <h2 className="mt-3 font-sans text-display-md">
              Products conceived and built.
            </h2>
          </Reveal>
          <div className="mt-10">
            {builtProjects.map((project) => (
              <IndexEntry key={project.id} project={project} numbered />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
