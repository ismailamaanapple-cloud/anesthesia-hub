import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Siren,
  Flame,
  Crosshair,
  AlertOctagon,
  Wind,
  Droplets,
  HeartPulse,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { emergencies, getEmergency } from "@/lib/emergencies";
import { Markdown } from "@/components/markdown";
import { ReferenceList } from "@/components/reference-list";
import { BookmarkButton } from "@/components/bookmark-button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Crosshair,
  AlertOctagon,
  Wind,
  Droplets,
  HeartPulse,
  Siren,
};

export function generateStaticParams() {
  return emergencies.map((e) => ({ slug: e.slug }));
}

export default async function EmergencyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getEmergency(slug);
  if (!e) notFound();

  const Icon = iconMap[e.icon] ?? Siren;
  const idx = emergencies.findIndex((x) => x.slug === e.slug);
  const prev = idx > 0 ? emergencies[idx - 1] : null;
  const next = idx < emergencies.length - 1 ? emergencies[idx + 1] : null;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 print:py-4">
      <div className="flex items-center justify-between print:hidden">
        <Link
          href="/emergency"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All cards
        </Link>
        <PrintButton />
      </div>

      {/* Header / Call-out */}
      <div className="mt-5 rounded-3xl border border-border bg-card p-7 relative overflow-hidden">
        <div
          className={`absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br ${e.color} opacity-20 blur-3xl print:hidden`}
        />
        <div className="relative flex items-start gap-4">
          <span
            className={`h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br ${e.color} text-white shadow-lg`}
          >
            <Icon className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-destructive font-medium">
                  Emergency · Crisis Card
                </div>
                <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight">
                  {e.name}
                </h1>
                <p className="mt-2 text-muted-foreground">{e.tagline}</p>
              </div>
              <BookmarkButton
                kind="emergency"
                slug={e.slug}
                title={e.name}
                subtitle="Emergency"
                href={`/emergency/${e.slug}`}
              />
            </div>
          </div>
        </div>
        {e.callOut && (
          <div className="relative mt-5 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm font-medium text-destructive flex items-start gap-3">
            <Siren className="h-5 w-5 shrink-0 mt-0.5" />
            <span>{e.callOut}</span>
          </div>
        )}
      </div>

      {/* Signs */}
      <section className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Recognize
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-2">
          {e.signs.map((s, i) => (
            <li
              key={i}
              className="text-sm rounded-lg border border-border bg-background p-3 flex items-start gap-2"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Doses */}
      <section className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Doses
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {e.doses.map((d, i) => (
            <div
              key={i}
              className="rounded-lg bg-background border border-border p-3"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                {d.label}
              </div>
              <div className="mt-1 font-semibold text-base">{d.value}</div>
              {d.note && (
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {d.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-base font-semibold tracking-tight">
            Sequenced Actions
          </h2>
        </div>
        <ol className="space-y-3">
          {e.steps.map((step, i) => (
            <li
              key={i}
              className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4"
            >
              <span className="h-8 w-8 grid place-items-center rounded-xl bg-primary/15 text-primary font-bold shrink-0">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-base font-semibold tracking-tight mb-2">
                  {step.title}
                </div>
                <Markdown text={step.body} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Pitfalls */}
      <section className="mt-8 rounded-2xl border border-warning/30 bg-warning/5 p-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-warning">
            Common Pitfalls
          </h2>
        </div>
        <ul className="space-y-2">
          {e.pitfalls.map((p, i) => (
            <li key={i} className="text-sm flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-warning mt-0.5 shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* References */}
      <ReferenceList ids={e.references} />

      {/* Prev/Next */}
      <div className="mt-8 grid sm:grid-cols-2 gap-3 print:hidden">
        {prev ? (
          <Link
            href={`/emergency/${prev.slug}`}
            className="rounded-2xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
          >
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" /> Previous
            </div>
            <div className="mt-1 font-semibold text-sm">{prev.name}</div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/emergency/${next.slug}`}
            className="rounded-2xl border border-border bg-card p-4 text-right hover:border-primary/40 transition-colors sm:ml-auto sm:w-full"
          >
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center justify-end gap-1">
              Next <ArrowRight className="h-3 w-3" />
            </div>
            <div className="mt-1 font-semibold text-sm">{next.name}</div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
