import {
  ArrowRight,
  BarChart3,
  Calendar,
  ExternalLink,
  Handshake,
  MapPin,
  Megaphone,
  Mic,
  Send,
  Users,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, BreadcrumbLd } from "@/components/site/JsonLd";
import Rich from "@/content/Rich";
import { partnership as t } from "@/content/partnership";

const Partnership = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Партнёрство со Смоллтех — для ИТ-компаний и организаторов"
        description="Форматы сотрудничества с сообществом Смоллтех. Партнёрство с Онтико, организатором HighLoad++ и других ведущих ИТ-конференций."
        path="/partnership"
        type="website"
        keywords="смоллтех, smalltech, партнёрство, Онтико, HighLoad++, ИТ-конференции"
      />
      <OrganizationLd />
      <BreadcrumbLd items={[{ name: 'Партнёрство', path: '/partnership' }]} />
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 -z-10 h-[420px] w-[520px] rounded-[55%] blob-violet-soft"
        />
        <div className="container-wide py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="chip-amber">
              <Handshake className="h-3.5 w-3.5" />
              {t.hero.chip}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <Rich text={t.hero.title} />
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
              {t.hero.description}
            </p>
          </div>
        </div>
      </header>

      <section id="partnership_meetup" className="container-wide py-20 sm:py-24">
        <SectionHeading
          eyebrow={t.meetup.eyebrow}
          title={t.meetup.title}
          description={t.meetup.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="surface-card relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <span className="chip">
                <Mic className="h-3.5 w-3.5" /> {t.meetup.chip}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                {t.meetup.cfpTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.meetup.cfpText}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {t.meetup.whenLabel}
                  </div>
                  <p className="mt-2 font-display text-2xl font-semibold">{t.meetup.whenValue}</p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {t.meetup.whereLabel}
                  </div>
                  <p className="mt-2 font-display text-base font-semibold leading-tight">
                    {t.meetup.whereValue}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <Send className="h-3.5 w-3.5" /> {t.meetup.deadlineLabel}
                  </div>
                  <p className="mt-2 font-display text-2xl font-semibold">{t.meetup.deadlineValue}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="surface-card rounded-2xl p-6">
              <Users className="h-5 w-5 text-primary" />
              <h4 className="mt-3 font-display text-lg font-semibold">{t.meetup.whoTitle}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.meetup.whoText}
              </p>
            </div>
            <div className="surface-card rounded-2xl p-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h4 className="mt-3 font-display text-lg font-semibold">{t.meetup.topicsTitle}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.meetup.topicsText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="partnership_ontico" className="container-wide py-12 sm:py-20">
        <SectionHeading
          eyebrow={t.ontico.eyebrow}
          title={t.ontico.title}
          description={t.ontico.description}
        />

        <div className="mt-12 grid gap-5">
          <a
            href="https://highload.ru/spb/2026"
            target="_blank" rel="noopener noreferrer"
            className="surface-card group relative overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated sm:p-8"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
              <MapPin className="h-3.5 w-3.5" /> {t.ontico.conference.city}
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
              {t.ontico.conference.title}
            </h3>
            <p className="mt-2 font-mono-tech text-sm text-muted-foreground">{t.ontico.conference.dates}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.ontico.conference.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              {t.ontico.conference.linkLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <Megaphone className="h-5 w-5 text-primary" />
            <h4 className="mt-3 font-display text-lg font-semibold">{t.ontico.zone.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.ontico.zone.text}
            </p>
          </div>
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <Users className="h-5 w-5 text-primary" />
            <h4 className="mt-3 font-display text-lg font-semibold">{t.ontico.peer.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.ontico.peer.text}
            </p>
          </div>
          <div className="surface-card rounded-3xl p-7 sm:p-8">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h4 className="mt-3 font-display text-lg font-semibold">{t.ontico.metrics.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.ontico.metrics.text}
            </p>
          </div>
        </div>

        <div className="mt-10 surface-card rounded-3xl p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <span className="chip-amber">
                <Mic className="h-3.5 w-3.5" /> {t.ontico.program.chip}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                {t.ontico.program.title}
              </h3>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              {t.ontico.program.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a
                href="https://highload.ru/spb/2026/streams/smalltech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {t.ontico.program.streamLinkLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <details className="group mt-8 rounded-3xl border border-border bg-secondary/30 p-6 open:bg-secondary/45 sm:p-7">
            <summary className="flex cursor-pointer list-none flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">
                  {t.ontico.program.listCount}
                </p>
                <h4 className="mt-2 font-display text-xl font-semibold">
                  {t.ontico.program.listTitle}
                </h4>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {t.ontico.program.listHint}
                </p>
              </div>
              <span className="inline-flex h-11 items-center justify-center rounded-full bg-primary/10 px-5 text-sm font-medium text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
                {t.ontico.program.listButton}
              </span>
            </summary>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.ontico.program.talks.map((talk) => (
                <a
                  key={talk.url}
                  href={talk.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/talk rounded-2xl border border-border bg-background/70 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                    <span className="rounded-full bg-secondary px-3 py-1">{talk.time}</span>
                    <span className="rounded-full bg-secondary px-3 py-1">{talk.room}</span>
                  </div>
                  <h5 className="mt-4 font-display text-lg font-semibold leading-tight text-foreground">
                    {talk.title}
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{talk.summary}</p>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{talk.speaker}</span>
                      <br />
                      {talk.company}
                    </p>
                    <ExternalLink className="mt-1 h-4 w-4 flex-none text-primary transition-transform group-hover/talk:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </details>
        </div>

        <div className="mt-10">
          <SectionHeading
            eyebrow={t.ontico.formats.eyebrow}
            title={t.ontico.formats.title}
            description={t.ontico.formats.description}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.ontico.formats.packages.map((pack) => (
              <div key={pack.name} className="surface-card rounded-3xl p-7">
                <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">{t.ontico.formats.packageLabel}</p>
                <h4 className="mt-2 font-display text-xl font-semibold">{pack.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pack.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 surface-card relative overflow-hidden rounded-3xl border-primary/30 p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber/15 blur-3xl"
              aria-hidden
            />
            <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t.ontico.formats.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="surface-card relative overflow-hidden rounded-3xl px-8 py-12 sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-amber/15 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <span className="chip-amber">
                <Send className="h-3.5 w-3.5" /> {t.cta.chip}
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl text-balance">
                {t.cta.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.cta.text}
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="https://t.me/LisaTsareva"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
                onClick={() => window.ym?.(108988295, 'reachGoal', 'click_contact_lisa')}
              >
                {t.cta.button} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
