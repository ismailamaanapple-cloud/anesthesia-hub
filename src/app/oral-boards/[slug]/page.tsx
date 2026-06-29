import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Mic,
  Wind,
  Flame,
  Zap,
  Siren,
  Droplet,
  Droplets,
  HeartPulse,
  Activity,
} from "lucide-react";
import { oralCases, getOralCase } from "@/lib/oral-boards-data";
import { countPhrases } from "@/lib/oral-match";
import { OralPractice } from "@/components/oral-practice";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Flame,
  Zap,
  Siren,
  Droplet,
  Droplets,
  HeartPulse,
  Activity,
  Mic,
};

export function generateStaticParams() {
  return oralCases.map((c) => ({ slug: c.slug }));
}

export default async function OralCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getOralCase(slug);
  if (!c) notFound();

  const Icon = iconMap[c.icon] ?? Mic;
  const idx = oralCases.findIndex((x) => x.slug === c.slug);
  const prev = idx > 0 ? oralCases[idx - 1] : null;
  const next = idx < oralCases.length - 1 ? oralCases[idx + 1] : null;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/oral-boards"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Oral Boards
      </Link>

      {/* Header */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-5 sm:p-9 relative overflow-hidden">
        <div
          className={`absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-3xl`}
        />
        <div className="relative">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`h-11 w-11 grid place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-white shadow-lg shrink-0`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-medium px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
              Case {c.number} · {c.category}
            </span>
          </div>
          <h1 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tight">
            {c.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">{c.tagline}</p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Mic className="h-3.5 w-3.5" />
            {countPhrases(c)} key phrases across {c.sections.length} phases
          </div>
        </div>
      </div>

      {/* Practice (client) */}
      <div className="mt-8">
        <OralPractice c={c} />
      </div>

      {/* Prev / Next */}
      <div className="mt-10 grid sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/oral-boards/${prev.slug}`}
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
            href={`/oral-boards/${next.slug}`}
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
