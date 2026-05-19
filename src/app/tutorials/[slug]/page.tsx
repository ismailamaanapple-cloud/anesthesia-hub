import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Sparkles,
  Activity,
  Wind,
  Brain,
  Syringe,
  Pill,
  HeartPulse,
  Zap,
  Droplet,
  Droplets,
  AlertTriangle,
  AlertOctagon,
  Crosshair,
  Flame,
  ClipboardCheck,
  Settings2,
  Shield,
  MessageCircleQuestion,
  GraduationCap,
  Layers,
  Snowflake,
  ArrowUpFromLine,
  Siren,
  FlaskConical,
  BookMarked,
} from "lucide-react";
import { tutorials, getTutorial } from "@/lib/tutorials";
import { Markdown } from "@/components/markdown";
import { ReferenceList } from "@/components/reference-list";
import { BookmarkButton } from "@/components/bookmark-button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Wind,
  Brain,
  Syringe,
  Pill,
  HeartPulse,
  Zap,
  Droplet,
  Droplets,
  AlertTriangle,
  AlertOctagon,
  Crosshair,
  Flame,
  ClipboardCheck,
  Settings2,
  Shield,
  MessageCircleQuestion,
  GraduationCap,
  Layers,
  Snowflake,
  ArrowUpFromLine,
  Siren,
  FlaskConical,
  BookMarked,
};

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTutorial(slug);
  if (!t) notFound();

  const Icon = iconMap[t.icon] ?? BookMarked;
  const idx = tutorials.findIndex((x) => x.slug === t.slug);
  const prev = idx > 0 ? tutorials[idx - 1] : null;
  const next = idx < tutorials.length - 1 ? tutorials[idx + 1] : null;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/tutorials"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All chapters
      </Link>

      {/* Header */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-9 relative overflow-hidden">
        <div
          className={`absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br ${t.color} opacity-20 blur-3xl`}
        />
        <div className="relative">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`h-11 w-11 grid place-items-center rounded-2xl bg-gradient-to-br ${t.color} text-white shadow-lg shrink-0`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-medium px-2 py-1 rounded-full bg-primary/10 border border-primary/20 truncate max-w-[55%]">
              Ch {t.number} · {t.category}
            </span>
            <div className="ml-auto">
              <BookmarkButton
                kind="tutorial"
                slug={t.slug}
                title={t.title}
                subtitle={`Ch ${t.number} · ${t.category}`}
                href={`/tutorials/${t.slug}`}
                size="sm"
              />
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tight">
              {t.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">{t.tagline}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {t.readMinutes} min read
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
              Key Points
            </h2>
          </div>
          <ul className="space-y-2">
            {t.keyPoints.map((k, i) => (
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
        {t.sections.map((section, i) => (
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
            <Markdown text={section.body} />
          </section>
        ))}
      </article>

      {/* References */}
      <ReferenceList ids={t.references} />

      {/* Section TOC (mobile-friendly, anchors) */}
      <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5">
        <div className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-3">
          In this chapter
        </div>
        <ul className="grid sm:grid-cols-2 gap-1.5 text-sm">
          {t.sections.map((s, i) => (
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
            href={`/tutorials/${prev.slug}`}
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
            href={`/tutorials/${next.slug}`}
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
