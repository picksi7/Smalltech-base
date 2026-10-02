import { useState } from "react";
import { Calendar, MapPin, Play, FileText, ExternalLink, ArrowDown } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Seo from "@/components/site/Seo";
import { OrganizationLd, BreadcrumbLd } from "@/components/site/JsonLd";

import Rich from "@/content/Rich";
import { MEETUPS, materials as t, type LogoKey, type Partner, type Talk, type Meetup } from "@/content/materials";

import petrovichLogo from "@/assets/partners/petrovich-tech.png";
import vitechLogo from "@/assets/partners/vitech.png";
import pprLogo from "@/assets/partners/ppr.png";
import ithrLogo from "@/assets/partners/it-hr-awards.png";
import byteLogo from "@/assets/partners/byte.png";
import tochkaLogo from "@/assets/partners/tochka-kipeniya.png";

const LOGOS: Record<LogoKey, string> = {
  petrovich: petrovichLogo,
  vitech: vitechLogo,
  ppr: pprLogo,
  ithr: ithrLogo,
  byte: byteLogo,
  tochka: tochkaLogo,
};

// ===== Sub-components =====

const PartnerLogo = ({ partner }: { partner: Partner }) => (
  <a
    href={partner.url}
    target="_blank" rel="noopener noreferrer"
    title={partner.name}
    aria-label={partner.name}
    className="group flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 p-2 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/15 hover:shadow-glow sm:h-20 sm:w-40"
  >
    {partner.logo ? (
      <img
        src={LOGOS[partner.logo]}
        alt={partner.name}
        className="h-full w-full object-contain transition-transform group-hover:scale-[1.04]"
        loading="lazy"
      />
    ) : (
      <span className="font-display text-base font-semibold tracking-tight text-foreground transition-transform group-hover:scale-[1.04] sm:text-lg">
        {partner.label ?? partner.name}
      </span>
    )}
  </a>
);

const VideoEmbed = ({ src, title }: { src: string; title: string }) => {
  const [active, setActive] = useState(false);
  if (active) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`${src}&autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
          allowFullScreen
          frameBorder={0}
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Запустить видео: ${title}`}
      className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface-elevated to-background transition-all hover:border-primary/50"
    >
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(ellipse_60%_55%_at_50%_50%,hsl(270_100%_60%/_0.45),hsl(264_100%_50%/_0.25)_50%,transparent_75%)] blur-2xl transition-opacity group-hover:opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-amber text-primary-foreground shadow-glow transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
        <Play className="h-7 w-7 translate-x-0.5 fill-current sm:h-8 sm:w-8" />
      </span>
      <span className="absolute bottom-3 left-3 right-3 z-10 truncate rounded-md bg-background/70 px-2 py-1 text-left text-xs text-muted-foreground backdrop-blur sm:text-sm">
        {t.labels.videoHint}
      </span>
    </button>
  );
};

const TalkCard = ({ talk, index }: { talk: Talk; index: number }) => {
  const isSpecial = talk.kind === "panel" || talk.kind === "workshop";
  const kindLabel =
    talk.kind === "panel"
      ? t.labels.kindPanel
      : talk.kind === "workshop"
      ? t.labels.kindWorkshop
      : t.labels.kindTalk;
  return (
    <article className="surface-card grid gap-6 rounded-2xl p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      <div className="flex flex-col">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={isSpecial ? "chip-amber" : "chip"}>
            {kindLabel}
          </span>
        </div>
        <h4 className="font-display text-xl font-semibold leading-snug text-balance sm:text-2xl">
          {talk.title}
        </h4>
        {talk.speaker && (
          <p className="mt-2 text-sm text-primary-glow">{talk.speaker}</p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {talk.description}
        </p>
        {talk.slidesUrl && (
          <a
            href={talk.slidesUrl}
            target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-glow transition-colors hover:bg-primary/20"
          >
            <FileText className="h-4 w-4" />
            {talk.slidesLabel ?? t.labels.defaultSlidesLabel}
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        )}
      </div>
      <div className="self-start">
        <VideoEmbed src={talk.embedSrc} title={talk.title} />
      </div>
    </article>
  );
};

const MeetupSection = ({ meetup }: { meetup: Meetup }) => {
  return (
    <section
      id={meetup.id}
      className="container-wide scroll-mt-24 py-20 sm:py-24"
    >
      {/* Header */}
      <div className="mb-12 max-w-4xl">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="chip-amber">{meetup.chip ?? `${t.labels.meetupChipPrefix} ${meetup.vol}`}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {meetup.date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {meetup.city}
          </span>
        </div>
        <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl">
          {meetup.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
          {t.labels.hostedBy}{" "}
          {meetup.venue.url ? (
            <a
              href={meetup.venue.url}
              target="_blank" rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              {meetup.venue.name}
            </a>
          ) : (
            <span className="text-foreground">{meetup.venue.name}</span>
          )}
          . {meetup.intro}
        </p>
      </div>

      {/* Partners */}
      <div className="mb-12">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {meetup.partnersLabel ?? t.labels.defaultPartnersLabel}
        </h3>
        <div className="flex flex-wrap gap-3">
          {meetup.partners.map((p) => (
            <PartnerLogo key={p.name} partner={p} />
          ))}
        </div>
      </div>

      {/* Talks */}
      <div className="space-y-6">
        {meetup.talks.map((t, i) => (
          <TalkCard key={t.title} talk={t} index={i} />
        ))}
      </div>
    </section>
  );
};

// ===== Page =====
const Materials = () => {
  return (
    <div className="anim-fade">
      <Seo
        title="Материалы и медиа Смоллтех"
        description="Презентации, исследования, статьи и медиа сообщества Смоллтех — для журналистов, партнёров и участников."
        path="/materials"
        type="website"
        keywords="смоллтех, smalltech, материалы, медиа, презентации, исследования"
      />
      <OrganizationLd />
      <BreadcrumbLd items={[{ name: 'Материалы', path: '/materials' }]} />
      {/* HEAD */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
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

            {/* Quick nav */}
            <div className="mt-8 flex flex-wrap gap-3">
              {MEETUPS.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <span className="font-mono-tech text-xs text-primary-glow">
                    {m.navLabel ?? m.vol}
                  </span>
                  <span>{m.title}</span>
                  <ArrowDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MEETUPS */}
      {MEETUPS.map((m, idx) => (
        <div key={m.id}>
          {idx > 0 && (
            <div className="container-wide">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          )}
          <MeetupSection meetup={m} />
        </div>
      ))}

      {/* Outro */}
      <section className="container-wide pb-24">
        <div className="surface-card rounded-2xl p-8 text-center sm:p-12">
          <SectionHeading
            align="center"
            eyebrow={t.outro.eyebrow}
            title={<Rich text={t.outro.title} />}
            description={t.outro.description}
          />
        </div>
      </section>
    </div>
  );
};

export default Materials;
