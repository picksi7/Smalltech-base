import { Github, GitPullRequest, MessageCircle, Mic, Eye, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, BreadcrumbLd } from "@/components/site/JsonLd";
import Rich from "@/content/Rich";
import { join as t } from "@/content/join";

const roleIcons = {
  eye: Eye,
  message: MessageCircle,
  mic: Mic,
};

const Join = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Присоединиться к сообществу Смоллтех"
        description="Как стать частью сообщества малых и средних ИТ-компаний. Открыто для инженеров, деврелов и менеджеров технобренда."
        path="/join"
        type="website"
        keywords="смоллтех, smalltech, присоединиться, ИТ-сообщество, деврел, инженерное сообщество"
      />
      <OrganizationLd />
      <BreadcrumbLd items={[{ name: 'Присоединиться', path: '/join' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div className="container-wide py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="chip-amber"><Sparkles className="h-3.5 w-3.5" /> {t.hero.chip}</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <Rich text={t.hero.title} />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
              {t.hero.description}
            </p>
          </div>
        </div>
      </header>

      {/* ROLES */}
      <section className="container-wide py-20">
        <SectionHeading
          eyebrow={t.roles.eyebrow}
          title={t.roles.title}
          description={t.roles.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.roles.items.map((r) => {
            const Icon = roleIcons[r.icon as keyof typeof roleIcons];
            return (
              <div key={r.title} className="surface-card rounded-3xl p-7 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTRIBUTE */}
      <section className="container-wide py-12 sm:py-20">
        <div className="surface-card overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
            <div className="border-b border-border lg:border-b-0 lg:border-r p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.contribute.label}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl text-balance">
                {t.contribute.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.contribute.description}
              </p>
              <a
                href="https://github.com/picksi7/Smalltech"
                target="_blank" rel="noopener noreferrer"
                className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                onClick={() => window.ym?.(108988295, 'reachGoal', 'click_github_repo_join')}
              >
                {t.contribute.button} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <GitPullRequest className="h-5 w-5 text-primary" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.contribute.stepsLabel}</span>
              </div>
              <ol className="mt-7 space-y-7">
                {t.contribute.steps.map((s) => (
                  <li key={s.n} className="flex gap-5">
                    <span className="font-mono-tech text-sm text-muted-foreground pt-1">{s.n}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* WAYS */}
      <section className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow={t.ways.eyebrow}
          title={t.ways.title}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.ways.items.map((c) => (
            <div key={c.title} className="surface-card rounded-2xl p-6 sm:p-7">
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              {"links" in c && (
                <div className="mt-5 rounded-2xl border border-primary/35 bg-primary/10 p-3 shadow-glow">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                    {t.ways.writeUsLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-4 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.ym?.(108988295, 'reachGoal', l.goal)}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide pb-24">
        <div className="surface-card relative overflow-hidden rounded-3xl px-8 py-12 sm:px-12 sm:py-16 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-amber opacity-[0.06]" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl text-balance">
              {t.cta.title}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/picksi7/Smalltech"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow"
                onClick={() => window.ym?.(108988295, 'reachGoal', 'click_github_cta_join')}
              >
                <Github className="h-4 w-4" /> {t.cta.githubButton}
              </a>
              <Link
                to="/community"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium transition-colors hover:bg-secondary"
              >
                {t.cta.communityButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
