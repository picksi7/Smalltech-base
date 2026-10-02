import { Link } from "react-router-dom";
import { Github, Mail } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/content/site";

const SiteFooter = () => {
  return (
    <footer className="mt-32 border-t border-border/60 bg-surface/40">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="compact" className="text-xl" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {site.footer.sectionsTitle}
          </h4>
          <ul className="space-y-2 text-sm">
            {site.nav
              .filter((item) => item.to !== "/")
              .map((item) => (
                <li key={item.to}><Link to={item.to} className="link-underline">{item.label}</Link></li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {site.footer.partnersTitle}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://ontico.ru" target="_blank" rel="noreferrer" className="link-underline">
                {site.footer.partnerName}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {site.footer.contactTitle}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://github.com/picksi7/Smalltech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-underline">
                <Github className="h-4 w-4" /> {site.footer.githubLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.footer.email}`} className="inline-flex items-center gap-2 link-underline">
                <Mail className="h-4 w-4" /> {site.footer.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-wide flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.footer.copyright}</p>
          <p className="font-mono-tech">{site.footer.version}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
