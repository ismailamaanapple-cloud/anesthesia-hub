import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Brain,
  Heart,
  Baby,
  Crosshair,
  HeartPulse,
  Zap,
  Activity,
  Siren,
  Stethoscope,
  Sparkles,
  ListChecks,
  Pill,
} from "lucide-react";
import { subspecialties, getSubspecialty } from "@/lib/subspecialties";
import { ReferenceList } from "@/components/reference-list";
import { BookmarkButton } from "@/components/bookmark-button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Brain,
  Baby,
  Crosshair,
  HeartPulse,
  Zap,
  Activity,
  Siren,
};

export function generateStaticParams() {
  return subspecialties.map((s) => ({ slug: s.slug }));
}

export default async function SubspecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSubspecialty(slug);
  if (!s) notFound();
  const Icon = iconMap[s.icon] ?? Stethoscope;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/subspecialties"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All subspecialties
      </Link>

      {/* Header */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-8 relative overflow-hidden">
        <div
          className={`absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-3xl`}
        />
        <div className="relative flex items-start gap-4">
          <span
            className={`h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`}
          >
            <Icon className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight">{s.name}</h1>
                <p className="mt-1 text-muted-foreground">{s.tagline}</p>
              </div>
              <BookmarkButton
                kind="subspecialty"
                slug={s.slug}
                title={s.name}
                subtitle={s.tagline}
                href={`/subspecialties/${s.slug}`}
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/85 max-w-3xl">
              {s.overview}
            </p>
          </div>
        </div>
      </div>

      {/* Key concepts */}
      <section className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-xl font-semibold tracking-tight">Key concepts</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {s.keyConcepts.map((k) => (
            <div
              key={k.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="text-sm font-semibold text-primary">
                {k.title}
              </div>
              <p className="mt-2 text-sm text-foreground/85 leading-relaxed">
                {k.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Monitoring + Drugs */}
      <section className="mt-10 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks className="h-4 w-4 text-primary" />
            <h3 className="text-base font-semibold">Monitoring</h3>
          </div>
          <ul className="space-y-2">
            {s.monitoring.map((m) => (
              <li key={m} className="text-sm flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Pill className="h-4 w-4 text-primary" />
            <h3 className="text-base font-semibold">Common drugs</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {s.commonDrugs.map((d) => (
              <span
                key={d}
                className="px-2.5 py-1 rounded-lg bg-muted text-xs text-foreground/80"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pearls */}
      <section className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-xl font-semibold tracking-tight">
            Clinical pearls
          </h2>
        </div>
        <div className="space-y-3">
          {s.pearls.map((p, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed flex items-start gap-3"
            >
              <span className="h-6 w-6 grid place-items-center rounded-full bg-primary/15 text-primary text-xs font-semibold shrink-0">
                {i + 1}
              </span>
              {p}
            </div>
          ))}
        </div>
      </section>

      {s.references && s.references.length > 0 && (
        <ReferenceList ids={s.references} />
      )}
    </div>
  );
}
