import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { EcosystemDiagram } from "./EcosystemDiagram";
import { ScreenshotLightbox } from "./ScreenshotLightbox";
import { StatusLabel } from "./StatusLabel";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  numbered?: boolean;
};

const MAX_TAGS = 5;

export function ProjectCard({
  project,
  featured = false,
  numbered = false,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const tags = project.tags.slice(0, MAX_TAGS);

  return (
    <article className={`group ${featured ? "" : "h-full border-t border-ink/10 pt-10"}`}>
      {project.hero ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mb-8 block w-full text-left"
          aria-label={`Open larger view: ${project.hero.alt}`}
        >
          <span className="shot-frame block">
            <img
              src={project.hero.src}
              alt={project.hero.alt}
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          </span>
        </button>
      ) : (
        <div className="mb-8">
          <EcosystemDiagram />
        </div>
      )}

      <p className="section-label">
        {numbered && project.sequence
          ? `${String(project.sequence).padStart(2, "0")} / ${project.category}`
          : project.category}
      </p>
      <h3
        className={`mt-5 font-sans tracking-tight text-ink ${
          featured
            ? "text-3xl font-medium sm:text-4xl"
            : "text-[1.7rem] font-medium leading-snug sm:text-[1.85rem]"
        }`}
      >
        {project.title}
      </h3>
      {project.inDevelopment ? (
        <div className="mt-3">
          <StatusLabel>Personal product in development</StatusLabel>
        </div>
      ) : null}
      {project.subtitle ? (
        <p className="mt-3 text-[1.0625rem] leading-snug text-ink/55">{project.subtitle}</p>
      ) : null}
      <p
        className={`mt-5 max-w-2xl leading-[1.7] text-ink/70 ${
          featured ? "text-[1.125rem] sm:text-[1.2rem]" : "text-[1.0625rem]"
        }`}
      >
        {project.description}
      </p>
      <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
        {tags.map((tag) => (
          <li key={tag} className="tag-meta">
            {tag}
          </li>
        ))}
      </ul>
      <Link to={project.href} className="case-link mt-8">
        View Case Study
        <ArrowUpRight size={16} />
      </Link>

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
