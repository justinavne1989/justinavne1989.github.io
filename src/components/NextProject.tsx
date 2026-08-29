import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export function NextProject({ project }: { project: Project }) {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="site-wrap py-16 sm:py-20">
        <p className="section-label">Next Project</p>
        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">
              {project.category}
            </p>
            <h2 className="mt-3 font-sans text-display-md">{project.title}</h2>
          </div>
          <Link
            to={project.href}
            className="case-link"
          >
            View Case Study
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
