import Link from "next/link";
import {
  Siren,
  Flame,
  Crosshair,
  AlertOctagon,
  Wind,
  Droplets,
  HeartPulse,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { emergencies } from "@/lib/emergencies";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Crosshair,
  AlertOctagon,
  Wind,
  Droplets,
  HeartPulse,
  Siren,
};

export const metadata = {
  title: "Emergency Manual — Crisis cards for the OR",
  description:
    "Single-page crisis cards for MH, LAST, anaphylaxis, CICV, massive transfusion, laryngospasm, and code blue.",
};

export default function EmergencyIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30">
          <Siren className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Emergency Manual
          </h1>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            Crisis cards designed for the OR. Single-page, scannable, with
            doses, sequenced steps, and the pitfalls that catch teams off
            guard. Built to be used at the head of the bed when seconds count.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-warning bg-warning/10 border border-warning/30 rounded-lg px-3 py-1.5">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>
              These are cognitive aids — not a substitute for institutional
              protocols. Practice them before you need them.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {emergencies.map((e) => {
          const Icon = iconMap[e.icon] ?? Siren;
          return (
            <Link
              key={e.slug}
              href={`/emergency/${e.slug}`}
              className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
            >
              <div
                className={`absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${e.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`}
              />
              <div
                className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${e.color} text-white shadow-lg`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-lg font-semibold tracking-tight">
                {e.name}
              </div>
              <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {e.tagline}
              </div>
              {e.callOut && (
                <div className="mt-3 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-xs text-primary font-medium">
                  {e.callOut}
                </div>
              )}
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Open card <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
