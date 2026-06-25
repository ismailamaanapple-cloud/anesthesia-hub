import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Sparkles,
  Lightbulb,
  TriangleAlert,
  Stethoscope,
  Activity,
  Wind,
  Brain,
  Syringe,
  Droplet,
  Settings2,
  Gauge,
  ArrowUpFromLine,
} from "lucide-react";
import { playbookGuides, getPlaybookGuide } from "@/lib/playbook";
import { Markdown } from "@/components/markdown";
import { BookmarkButton } from "@/components/bookmark-button";
import { Diagram } from "@/components/diagrams/playbook-diagrams";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Settings2,
  Gauge,
  Syringe,
  Activity,
  ArrowUpFromLine,
  Droplet,
  Brain,
  Wind,
  Stethoscope,
};

export function generateStaticParams() {
  return playbookGuides.map((g) => ({ slug: g.slug }));
}

export default async function PlaybookGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getPlaybookGuide(slug);
  if (!g) notFound();

  const Icon = iconMap[g.icon] ?? Stethoscope;
  const idx = playbookGuides.findIndex((x) => x.slug === g.slug);
  const prev = idx > 0 ? playbookGuides[idx - 1] : null;
  const next = idx < playbookGuides.length - 1 ? playbookGuides[idx + 1] : null;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/playbook"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> OR Playbook
      </Link>

      {/* Header */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-9 relative overflow-hidden">
        <div
          className={`absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br ${g.color} opacity-20 blur-3xl`}
        />
        <div className="relative">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`h-11 w-11 grid place-items-center rounded-2xl bg-gradient-to-br ${g.color} text-white shadow-lg shrink-0`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-medium px-2 py-1 rounded-full bg-primary/10 border border-primary/20 truncate max-w-[55%]">
              Step {g.number} · {g.category}
            </span>
            <div className="ml-auto">
              <BookmarkButton
                kind="playbook"
                slug={g.slug}
                title={g.title}
                subtitle={`Step ${g.number} · ${g.category}`}
                href={`/playbook/${g.slug}`}
                size="sm"
              />
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tight">
              {g.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              {g.tagline}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {g.readMinutes} min read
            </div>
          </div>
        </div>
      </div>

      {/* Key points */}
      <section className="mt-8">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              The TL;DR
            </h2>
          </div>
          <ul className="space-y-2">
            {g.keyPoints.map((k, i) => (
              <li
                key={i}
                className="text-sm leading-relaxed flex items-start gap-2.5"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sections */}
      <article className="mt-10 space-y-10">
        {g.sections.map((section, i) => (
          <section
            key={i}
            id={`s-${i + 1}`}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 scroll-mt-24"
          >
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4 flex items-baseline gap-3">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.heading}
            </h2>

            {section.body && <Markdown text={section.body} />}

            {section.diagram && (
              <figure className="mt-6">
                <Diagram name={section.diagram} />
                {section.diagramCaption && (
                  <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">
                    {section.diagramCaption}
                  </figcaption>
                )}
              </figure>
            )}

            {section.pearls && section.pearls.length > 0 && (
              <div className="mt-6 rounded-xl border border-success/30 bg-success/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4 text-success" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-success">
                    Pearls
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {section.pearls.map((p, pi) => (
                    <li
                      key={pi}
                      className="text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.pitfalls && section.pitfalls.length > 0 && (
              <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TriangleAlert className="h-4 w-4 text-destructive" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive">
                    Common mistakes
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {section.pitfalls.map((p, pi) => (
                    <li
                      key={pi}
                      className="text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </article>

      {/* Section TOC */}
      <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5">
        <div className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-3">
          In this guide
        </div>
        <ul className="grid sm:grid-cols-2 gap-1.5 text-sm">
          {g.sections.map((s, i) => (
            <li key={i}>
              <a
                href={`#s-${i + 1}`}
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="text-[10px] text-muted-foreground font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/playbook/${prev.slug}`}
            className="rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" /> Previous
            </div>
            <div className="mt-1 font-semibold text-sm">{prev.title}</div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/playbook/${next.slug}`}
            className="rounded-2xl border border-border bg-card p-4 text-right hover:border-primary/40 transition-colors sm:ml-auto sm:w-full"
          >
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center justify-end gap-1">
              Next <ArrowRight className="h-3 w-3" />
            </div>
            <div className="mt-1 font-semibold text-sm">{next.title}</div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
