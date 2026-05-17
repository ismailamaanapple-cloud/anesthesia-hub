import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pill, AlertTriangle, ShieldAlert, Sparkles, Clock, Activity, FlaskConical, Stethoscope } from "lucide-react";
import { drugs, getDrug } from "@/lib/drugs";

export function generateStaticParams() {
  return drugs.map((d) => ({ slug: d.slug }));
}

export default async function DrugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const drug = getDrug(slug);
  if (!drug) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/drugs"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All drugs
      </Link>

      {/* HEADER */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-7 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary to-accent opacity-15 blur-3xl" />
        <div className="flex items-start gap-4 relative">
          <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
            <Pill className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <div className="text-[10px] uppercase tracking-wider text-primary font-medium">
              {drug.category} · {drug.class}
            </div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">
              {drug.name}
            </h1>
            {drug.brands && (
              <div className="text-sm text-muted-foreground">
                {drug.brands.join(", ")}
              </div>
            )}
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              <span className="font-medium text-foreground">Mechanism:</span>{" "}
              {drug.mechanism}
            </p>
          </div>
        </div>
      </div>

      {/* KEY STATS */}
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <StatCard icon={Clock} label="Onset" value={drug.onset} />
        <StatCard icon={Activity} label="Duration" value={drug.duration} />
        <StatCard icon={FlaskConical} label="Metabolism" value={drug.metabolism} />
      </div>

      {/* DOSING */}
      <Section title="Dosing" icon={<Stethoscope className="h-4 w-4" />}>
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
          <div className="text-xs text-primary uppercase tracking-wider font-medium">
            Adult
          </div>
          <div className="mt-1 text-base font-medium">{drug.adultDose}</div>
        </div>
        {drug.pediatricDose && (
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 mt-3">
            <div className="text-xs text-accent uppercase tracking-wider font-medium">
              Pediatric
            </div>
            <div className="mt-1 text-base font-medium">{drug.pediatricDose}</div>
          </div>
        )}
      </Section>

      {/* INDICATIONS */}
      <Section title="Indications">
        <ul className="grid sm:grid-cols-2 gap-2">
          {drug.indications.map((i) => (
            <li
              key={i}
              className="text-sm rounded-lg border border-border bg-card p-3 flex items-start gap-2"
            >
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {i}
            </li>
          ))}
        </ul>
      </Section>

      {/* CONTRAINDICATIONS */}
      <Section
        title="Contraindications"
        icon={<ShieldAlert className="h-4 w-4 text-destructive" />}
      >
        <ul className="grid sm:grid-cols-2 gap-2">
          {drug.contraindications.map((c) => (
            <li
              key={c}
              className="text-sm rounded-lg border border-destructive/30 bg-destructive/5 p-3 flex items-start gap-2"
            >
              <ShieldAlert className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* SIDE EFFECTS */}
      <Section
        title="Side Effects"
        icon={<AlertTriangle className="h-4 w-4 text-warning" />}
      >
        <ul className="grid sm:grid-cols-2 gap-2">
          {drug.sideEffects.map((s) => (
            <li
              key={s}
              className="text-sm rounded-lg border border-warning/20 bg-warning/5 p-3 flex items-start gap-2"
            >
              <AlertTriangle className="h-4 w-4 text-warning mt-0.5 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </Section>

      {/* PEARLS */}
      <Section
        title="Clinical Pearls"
        icon={<Sparkles className="h-4 w-4 text-primary" />}
      >
        <div className="space-y-3">
          {drug.pearls.map((p, i) => (
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
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}
