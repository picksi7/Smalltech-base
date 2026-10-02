import { Link } from "react-router-dom";
import { ArrowRight, Activity, Layers, Mic, Users2 } from "lucide-react";
import Seo from "@/components/site/Seo";
import { OrganizationLd, ArticleLd, DatasetLd, BreadcrumbLd } from "@/components/site/JsonLd";
import researchImg from "@/assets/research-grid.jpg";
import StatCard from "@/components/site/StatCard";
import SectionHeading from "@/components/site/SectionHeading";
import PainBar from "@/components/site/PainBar";
import Rich from "@/content/Rich";
import { research as t } from "@/content/research";

const Research = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Исследование болей smalltech и midtech — 468 анкет, 6 конференций"
        description="Топ-6 болей малых и средних ИТ-компаний. 468 анкет, 6 крупнейших ИТ-конференций, 979 аналитических единиц. Карта программы конференции Смоллтех."
        path="/research"
        type="article"
        publishedTime="2026-04-01"
        modifiedTime="2026-04-01"
        keywords="смоллтех, smalltech, midtech, исследование, боли ИТ-компаний, конференция, программа"
      />
      <OrganizationLd />
      <ArticleLd
        headline="Исследование болей smalltech и midtech — 468 анкет, 6 конференций"
        description="Топ-6 болей малых и средних ИТ-компаний. 468 анкет, 6 крупнейших ИТ-конференций, 979 аналитических единиц."
        path="/research"
        datePublished="2026-04-01"
        dateModified="2026-04-01"
      />
      <DatasetLd />
      <BreadcrumbLd items={[{ name: 'Исследование', path: '/research' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <img
          src={researchImg}
          alt=""
          aria-hidden
          width={1400}
          height={900}
          className="pointer-events-none absolute -right-20 top-0 -z-10 h-full w-[55%] object-cover opacity-30 mix-blend-screen"
        />
        <div className="container-wide py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="chip-amber">{t.hero.chip}</span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <Rich text={t.hero.title} />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
              {t.hero.description}
            </p>
          </div>

          {/* Top stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.hero.stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                accent={i === 0}
                value={stat.value}
                label={stat.label}
                hint={stat.hint}
              />
            ))}
          </div>
        </div>
      </header>

      {/* METHODOLOGY */}
      <section id="methodology" className="container-wide py-24">
        <SectionHeading
          eyebrow={t.methodology.eyebrow}
          title={t.methodology.title}
          description={t.methodology.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="surface-card rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">{t.methodology.reach.title}</h3>
            </div>
            <p className="mt-3 font-mono-tech text-xs text-muted-foreground">
              {t.methodology.reach.formula}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.methodology.reach.description}
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">{t.methodology.intensity.title}</h3>
            </div>
            <p className="mt-3 font-mono-tech text-xs text-muted-foreground">
              {t.methodology.intensity.formula}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.methodology.intensity.description}
            </p>
          </div>
          <div className="surface-card rounded-2xl p-6 border-primary/40">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold text-gradient-amber">{t.methodology.score.title}</h3>
            </div>
            <p className="mt-3 font-mono-tech text-xs text-muted-foreground">
              {t.methodology.score.formula}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.methodology.score.description}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t.methodology.sourcesTitle}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.methodology.sources.map((s) => (
              <div key={s.name} className="surface-card flex items-center justify-between rounded-xl px-5 py-4">
                <div>
                  <p className="font-display font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.date}</p>
                </div>
                <p className="font-mono-tech text-sm text-primary">{s.count} {t.methodology.sourceCountSuffix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COHORTS */}
      <section id="cohorts" className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow={t.cohorts.eyebrow}
          title={t.cohorts.title}
          description={t.cohorts.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.cohorts.items.map((c) => (
            <div
              key={c.name}
              className={`surface-card rounded-2xl p-7 ${c.dim ? "" : "border-primary/30"}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className={`font-display text-xl font-semibold ${c.dim ? "" : "text-gradient-amber"}`}>{c.name}</h3>
                <span className="font-mono-tech text-xs text-muted-foreground">{c.pct}%</span>
              </div>
              <p className="mt-4 font-display text-3xl font-semibold tabular-nums">{c.count}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.note} {t.cohorts.noteSuffix}</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-secondary/60">
                <div
                  className={`h-full rounded-full ${c.dim ? "bg-muted-foreground/30" : "bg-gradient-amber"}`}
                  style={{ width: `${c.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAIN RANKING */}
      <section id="pains" className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow={t.pains.eyebrow}
          title={t.pains.title}
          description={t.pains.description}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.pains.items.map((p) => (
            <PainBar key={p.rank} {...p} />
          ))}
        </div>
      </section>

      {/* MUST-COVER DETAIL */}
      <section className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow={t.mustCover.eyebrow}
          title={t.mustCover.title}
          description={t.mustCover.description}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {t.pains.items.slice(0, 6).map((p) => (
            <div key={p.rank} className="surface-card rounded-2xl p-7 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.name}</h3>
                <span className="font-display text-2xl font-semibold text-gradient-amber tabular-nums">
                  {p.score.toFixed(1)}
                </span>
              </div>
              <p className="mt-1 text-sm text-primary/90">{p.description}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="font-mono-tech text-xs text-muted-foreground">{t.mustCover.respondentsLabel}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{p.respondents}</p>
                </div>
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="font-mono-tech text-xs text-muted-foreground">{t.mustCover.reachLabel}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{p.reach}</p>
                </div>
                <div className="rounded-lg bg-secondary/40 p-3">
                  <p className="font-mono-tech text-xs text-muted-foreground">{t.mustCover.tierLabel}</p>
                  <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wider text-primary">{t.mustCover.tierValue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow={t.formats.eyebrow}
          title={t.formats.title}
          description={t.formats.description}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.formats.items.map((f) => (
            <div key={f.name} className="surface-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Mic className="h-4 w-4 text-primary" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.formats.cardLabel}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{f.name}</h3>
              <p className="mt-1 text-xs text-primary/80">{f.scope}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BALANCE & ACTIONS */}
      <section className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow={t.decisions.eyebrow}
          title={t.decisions.title}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">{t.decisions.balanceTitle}</h3>
            </div>
            <div className="mt-7 space-y-5">
              {t.decisions.balance.map((b) => (
                <div key={b.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm">{b.name}</span>
                    <span className="font-display text-lg font-semibold tabular-nums">{b.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary/60">
                    <div
                      className={`h-full rounded-full ${b.accent ? "bg-gradient-amber" : "bg-muted-foreground/40"}`}
                      style={{ width: `${b.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Users2 className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">{t.decisions.actionsTitle}</h3>
            </div>
            <ol className="mt-7 space-y-5">
              {t.decisions.actions.map((a, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-2xl font-semibold text-gradient-amber tabular-nums leading-none">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">{a}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <blockquote className="mt-12 surface-card rounded-3xl p-8 sm:p-10">
          <p className="font-display text-xl leading-snug sm:text-2xl text-balance">
            {t.decisions.quote}
          </p>
        </blockquote>
      </section>

      <section className="container-wide pb-24">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/community"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            {t.buttons.community} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/join"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium transition-colors hover:bg-secondary"
          >
            {t.buttons.join}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Research;
