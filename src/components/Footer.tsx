import { Link } from "react-router-dom";
import { site } from "../data/site";
import { ResumeLink } from "./ResumeLink";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="site-wrap-wide flex flex-col gap-10 py-14 sm:flex-row sm:items-end sm:justify-between sm:py-16">
        <div>
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-paper">
            Justin Avne
          </p>
          <p className="mt-3 font-sans text-[15px] tracking-[0.04em] text-paper/65">
            Product • AI • Data • Sports Technology
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-3 font-sans text-[14px] uppercase tracking-[0.12em] text-paper/70">
          <Link to="/work" className="hover:text-paper">
            Work
          </Link>
          <Link to="/about" className="hover:text-paper">
            About
          </Link>
          <ResumeLink className="hover:text-paper">Resume</ResumeLink>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
