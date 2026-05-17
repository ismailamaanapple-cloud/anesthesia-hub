import Link from "next/link";
import { BookOpen, Heart, Brain, Baby, Crosshair, HeartPulse, Zap, Activity, Siren, Stethoscope } from "lucide-react";
import { subspecialties } from "@/lib/subspecialties";

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

export default function SubspecialtiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <BookOpen className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Subspecialties</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Structured primers across the major fields of anesthesia practice.
            Each covers core concepts, monitoring, common drugs, and the
            clinical pearls that distinguish veteran clinicians.
          </p>
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subspecialties.map((s) => {
          const Icon = iconMap[s.icon] ?? Stethoscope;
          return (
            <Link
              key={s.slug}
              href={`/subspecialties/${s.slug}`}
              className="card-lift group rounded-2xl border border-border bg-card p-6 relative overflow-hidden"
            >
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-15 blur-3xl group-hover:opacity-25 transition-opacity`}
              />
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-md`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-lg font-semibold tracking-tight">
                {s.name}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.tagline}</div>
              <div className="mt-4 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                {s.overview}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.keyConcepts.slice(0, 3).map((k) => (
                  <span
                    key={k.title}
                    className="text-[10px] uppercase tracking-wider rounded-full border border-border bg-muted/50 px-2 py-0.5 text-muted-foreground"
                  >
                    {k.title}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
