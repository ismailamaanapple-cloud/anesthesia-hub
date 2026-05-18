"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, AlertTriangle } from "lucide-react";
import {
  WeightInput,
  useWeight,
} from "@/components/calculators/weight-input";
import { DOSE_CATEGORIES, calculateDose, type DoseRule } from "@/lib/dosing";

export function QuickDoseWidget({ drugName }: { drugName: string }) {
  const w = useWeight("70");

  // Find rules whose `drug` includes the drugName (case-insensitive)
  const rules = useMemo<DoseRule[]>(() => {
    const needle = drugName.toLowerCase();
    const out: DoseRule[] = [];
    for (const cat of DOSE_CATEGORIES) {
      for (const r of cat.rules) {
        if (r.drug.toLowerCase().includes(needle)) out.push(r);
      }
    }
    return out;
  }, [drugName]);

  if (rules.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-15 blur-3xl pointer-events-none" />
        <div className="relative flex items-start gap-3 mb-4">
          <span className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md shrink-0">
            <Calculator className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <h2 className="text-base font-semibold tracking-tight">
              Calculate dose for your patient
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Enter weight (kg or lb). Always verify before administration.
            </p>
          </div>
        </div>

        <div className="relative grid sm:grid-cols-2 gap-4">
          <WeightInput
            raw={w.raw}
            unit={w.unit}
            setRaw={w.setRaw}
            setUnit={w.setUnit}
            label="Patient weight"
          />
          <div className="rounded-xl border border-border bg-card/60 backdrop-blur p-3 flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
              Computed weight
            </div>
            <div className="mt-0.5 font-semibold">
              {w.kg > 0
                ? `${w.kg.toFixed(1)} kg · ${(w.kg * 2.20462).toFixed(1)} lb`
                : "—"}
            </div>
          </div>
        </div>

        <div className="relative mt-5 grid sm:grid-cols-2 gap-3">
          {rules.map((rule, i) => {
            const res = calculateDose(rule, w.kg);
            return (
              <div
                key={`${rule.label}-${i}`}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  {rule.label}
                </div>
                <div className="mt-1.5 text-xl font-bold tracking-tight text-gradient">
                  {w.kg > 0 ? res.rangeDisplay : "—"}
                </div>
                {w.kg > 0 && res.mlLow !== undefined && res.mlHigh !== undefined && (
                  <div className="mt-1 text-[11px] text-muted-foreground">
                    ={" "}
                    {res.mlLow === res.mlHigh
                      ? `${res.mlLow.toFixed(2)} mL`
                      : `${res.mlLow.toFixed(2)}–${res.mlHigh.toFixed(2)} mL`}{" "}
                    {res.concDisplay && (
                      <span className="opacity-70">({res.concDisplay})</span>
                    )}
                  </div>
                )}
                {res.capped && w.kg > 0 && (
                  <div className="mt-2 flex items-start gap-1.5 text-[11px] text-warning">
                    <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0" />
                    <span>
                      Exceeds typical adult max {res.cappedAt} mg — cap and
                      reassess.
                    </span>
                  </div>
                )}
                {rule.notes && (
                  <div className="mt-2 text-[10px] text-muted-foreground border-t border-border pt-2">
                    {rule.notes}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative mt-5 flex items-center justify-between">
          <p className="text-[11px] text-muted-foreground">
            Weight is saved on this device for the next calculator you open.
          </p>
          <Link
            href="/calculators/drug-doses"
            className="text-xs font-medium text-primary inline-flex items-center gap-1 hover:underline"
          >
            Full dose calculator <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
