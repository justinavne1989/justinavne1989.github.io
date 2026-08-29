import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site";
import { ResumeLink } from "./ResumeLink";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-sans text-[14px] tracking-[0.12em] uppercase transition-colors ${
      isActive ? "text-accent" : "text-ink/70 hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-ink/10 bg-paper/92 backdrop-blur-md"
          : "border-transparent bg-paper/80 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="site-wrap-wide flex h-[68px] items-center justify-between">
        <Link
          to="/"
          className="font-sans text-[14px] font-semibold uppercase tracking-[0.2em] text-ink"
        >
          Justin Avne
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <ResumeLink className="font-sans text-[14px] uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-ink">
            Resume
          </ResumeLink>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[14px] uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-ink/10 bg-paper px-5 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <ResumeLink className="font-sans text-[14px] uppercase tracking-[0.12em] text-ink/70">
              Resume
            </ResumeLink>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[14px] uppercase tracking-[0.12em] text-ink/70"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
