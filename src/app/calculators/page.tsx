import Link from "next/link";
import {
  Calculator,
  Scale,
  Activity,
  Wind,
  Droplet,
  Droplets,
  Siren,
  Gauge,
  HeartPulse,
  ArrowRight,
  Syringe,
  Crosshair,
  Repeat,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { calculators } from "@/lib/calculators";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  Activity,
  Wind,
  Droplet,
  Droplets,
  Siren,
  Gauge,
  HeartPulse,
  Syringe,
  Crosshair,
  Repeat,
  RotateCcw,
};

const categoryColors: Record<string, string> = {
  Dosing: "from-violet-500 to-fuchsia-500",
  Patient: "from-primary to-accent",
  Airway: "from-sky-500 to-indigo-500",
  "Fluids & Blood": "from-rose-500 to-orange-500",
  Risk: "from-amber-500 to-yellow-500",
  Pediatric: "from-pink-500 to-fuchsia-500",
};

export default function CalculatorsPage() {
  const grouped = calculators.reduce<Record<string, typeof calculators>>(
    (acc, c) => {
      (acc[c.category] ||= []).push(c);
      return acc;
    },
    {}
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <Calculator className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Calculators</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Bedside calculations for daily anesthetic practice — weight-based
            dosing, airway sizing, fluid management, blood loss, and
            perioperative risk.
          </p>
        </div>
      </div>

      {/* Headline dosing CTA */}
      <Link
        href="/calculators/drug-doses"
        className="mt-8 group relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 card-lift block"
      >
        <div className="absolute inset-0 bg-aurora opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative flex items-start gap-4">
          <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30 shrink-0">
            <Syringe className="h-6 w-6" />
          </span>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-primary font-medium">
              <Sparkles className="h-3 w-3" />
              New · headline tool
            </div>
            <h2 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight">
              Weight-Based Drug Doses
            </h2>
            <p className="mt-1 text-sm text-muted-foreground max-w-md">
              Enter the patient&apos;s weight (kg or lb) and get every common
              anesthesia dose — induction, paralytics, opioids, reversal,
              vasopressors, antiemetics — at once.
            </p>
          </div>
        </div>
        <span className="relative inline-flex items-center gap-1.5 text-sm font-medium text-primary self-start sm:self-auto">
          Open <ArrowRight className="h-4 w-4" />
        </span>
      </Link>

      <div className="mt-10 space-y-10">
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat}>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium mb-4">
              {cat}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((c) => {
                const Icon = iconMap[c.icon] ?? Calculator;
                return (
                  <Link
                    key={c.slug}
                    href={`/calculators/${c.slug}`}
                    className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-5"
                  >
                    <div
                      className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${
                        categoryColors[c.category]
                      } opacity-15 blur-2xl group-hover:opacity-25 transition-opacity`}
                    />
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${
                        categoryColors[c.category]
                      } text-white shadow-md`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-semibold tracking-tight">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {c.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Open <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
