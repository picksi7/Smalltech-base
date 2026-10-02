import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, ArticleLd, BreadcrumbLd } from "@/components/site/JsonLd";
import Rich from "@/content/Rich";
import { manifesto as t } from "@/content/manifesto";

const Manifesto = () => {
  return (
    <article className="anim-fade">
      <Seo
        title="Манифест Смоллтех — большой выход малых ИТ-компаний"
        description="Кто такой смоллтех, почему его не видят и почему пора это менять. Манифест сообщества малых и средних ИТ-компаний России."
        path="/manifesto"
        type="article"
        publishedTime="2025-01-01"
        modifiedTime="2025-01-01"
        keywords="смоллтех, smalltech, midtech, манифест, ИТ-сообщество, малые ИТ-компании, технобренд"
      />
      <OrganizationLd />
      <ArticleLd
        headline="Манифест Смоллтех — большой выход малых ИТ-компаний"
        description="Кто такой смоллтех, почему его не видят и почему пора это менять."
        path="/manifesto"
        datePublished="2025-01-01"
        dateModified="2025-01-01"
      />
      <BreadcrumbLd items={[{ name: 'Манифест', path: '/manifesto' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
        <div
          className="absolute inset-0 -z-10 opacity-80"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="container-prose py-24 sm:py-32">
          <span className="chip-amber">{t.hero.chip}</span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <Rich text={t.hero.title} />
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            <Rich text={t.hero.description} />
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="container-prose py-20 sm:py-24">
        <p className="text-lg leading-relaxed text-foreground/90">
          {t.intro.first}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          <Rich text={t.intro.second} />
        </p>
      </section>

      {/* SIZES */}
      <section className="container-prose py-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t.sizes.title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.sizes.cards.map((s) => (
            <div key={s.tier} className="surface-card rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.tier}</p>
              <p className="mt-3 font-display text-2xl font-semibold text-gradient-amber">{s.range}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          <Rich text={t.sizes.description} />
        </p>
      </section>

      {/* WHY THE NAME */}
      <section className="container-prose py-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t.name.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/90">
          <Rich text={t.name.text} />
        </p>
        <blockquote className="my-8 surface-card rounded-2xl p-6 sm:p-8">
          <Quote className="h-6 w-6 text-primary" />
          <p className="mt-3 font-display text-xl leading-snug sm:text-2xl text-balance">
            {t.name.quote}
          </p>
        </blockquote>
      </section>

      {/* PROBLEM */}
      <section className="container-prose py-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{t.problem.title}</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          {t.problem.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
      </section>

      {/* FACTORS */}
      <section className="container-wide py-20 sm:py-24">
        <div className="container-prose px-0">
          <SectionHeading
            eyebrow={t.factors.eyebrow}
            title={t.factors.title}
            description={t.factors.description}
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {t.factors.cards.map((f) => (
            <div key={f.n} className="surface-card relative overflow-hidden rounded-3xl p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-mono-tech text-xs text-muted-foreground">#{f.n}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary">{t.factors.cardLabel}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold sm:text-2xl">{f.title}</h3>
              <p className="mt-1 text-sm text-primary/90">{f.sub}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section className="container-prose py-12">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.solution.title}</h2>
        <p className="mt-6 font-display text-3xl font-semibold text-gradient-amber sm:text-4xl">
          {t.solution.keyword}
        </p>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            <Rich text={t.solution.paragraphs[0]} />
          </p>
          <p>{t.solution.paragraphs[1]}</p>
          <p className="text-foreground">{t.solution.paragraphs[2]}</p>
        </div>
      </section>

      <section className="container-prose pb-24 pt-8">
        <div className="surface-card rounded-3xl p-8 sm:p-10">
          <p className="font-display text-xl font-semibold leading-snug sm:text-2xl text-balance">
            {t.invitation.text}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/join"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              {t.invitation.primaryButton} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/research"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/60 px-6 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {t.invitation.secondaryButton}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Manifesto;
