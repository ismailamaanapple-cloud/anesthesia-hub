"use client";

import { useMemo, useState } from "react";
import { CalculatorShell } from "./calculator-shell";
import { WeightInput, useWeight } from "./weight-input";
import { DOSE_CATEGORIES, calculateDose } from "@/lib/dosing";
import { cn } from "@/lib/utils";
import { Filter, AlertTriangle } from "lucide-react";

export function DrugDosesCalc() {
  const w = useWeight("70");
  const [activeCat, setActiveCat] = useState<string>("All");

  const visibleCategories = useMemo(() => {
    if (activeCat === "All") return DOSE_CATEGORIES;
    return DOSE_CATEGORIES.filter((c) => c.category === activeCat);
  }, [activeCat]);

  return (
    <CalculatorShell
      title="Weight-Based Drug Doses"
      description="Enter the patient's weight to compute standard adult doses for the agents you use every day — induction, paralytics, opioids, reversal, vasopressors, and emergency drugs."
      formula="dose (mg) = weight (kg) × dose (mg/kg)"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <WeightInput
          raw={w.raw}
          unit={w.unit}
          setRaw={w.setRaw}
          setUnit={w.setUnit}
        />
        <div className="rounded-xl border border-border bg-card p-3 flex flex-col justify-center">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Computed weight
          </div>
          <div className="mt-0.5 font-semibold text-lg">
            {w.kg > 0 ? `${w.kg.toFixed(1)} kg · ${(w.kg * 2.20462).toFixed(1)} lb` : "—"}
          </div>
        </div>
      </div>

      {/* Category filter — horizontal scroll on mobile, wrap on desktop */}
      <div className="mt-6 flex items-center gap-2">
        <Filter className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
        <div className="flex gap-2 overflow-x-auto -mr-4 pr-4 pb-1 sm:flex-wrap sm:mr-0 sm:pr-0 sm:pb-0 sm:overflow-visible">
          <FilterPill
            label="All"
            active={activeCat === "All"}
            onClick={() => setActiveCat("All")}
          />
          {DOSE_CATEGORIES.map((c) => (
            <FilterPill
              key={c.category}
              label={c.category}
              active={activeCat === c.category}
              onClick={() => setActiveCat(c.category)}
            />
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 space-y-8">
        {w.kg <= 0 ? (
          <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            Enter a valid weight to compute doses.
          </div>
        ) : (
          visibleCategories.map((cat) => (
            <section key={cat.category}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={cn(
                    "h-7 w-7 rounded-lg bg-gradient-to-br",
                    cat.color,
                    "shadow-md"
                  )}
                />
                <h3 className="text-base font-semibold tracking-tight">
                  {cat.category}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {cat.rules.map((rule, i) => {
                  const res = calculateDose(rule, w.kg);
                  return (
                    <div
                      key={`${rule.drug}-${rule.label}-${i}`}
                      className="rounded-xl border border-border bg-card p-4"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold tracking-tight">
                            {rule.drug}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {rule.label}
                          </div>
                        </div>
                        {rule.weightBasis && rule.weightBasis !== "TBW" && (
                          <span className="text-[9px] uppercase tracking-wider rounded-full bg-muted px-1.5 py-0.5 text-muted-foreground shrink-0">
                            {rule.weightBasis}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-xl font-bold tracking-tight text-gradient">
                          {res.rangeDisplay}
                        </span>
                      </div>
                      {res.mlLow !== undefined && res.mlHigh !== undefined && (
                        <div className="mt-1 text-[11px] text-muted-foreground">
                          ={" "}
                          {res.mlLow === res.mlHigh
                            ? `${res.mlLow.toFixed(2)} mL`
                            : `${res.mlLow.toFixed(2)}–${res.mlHigh.toFixed(2)} mL`}{" "}
                          {res.concDisplay && (
                            <span className="opacity-70">
                              ({res.concDisplay})
                            </span>
                          )}
                        </div>
                      )}
                      {res.capped && (
                        <div className="mt-2 flex items-start gap-1.5 text-[11px] text-warning">
                          <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0" />
                          <span>
                            Weight-based exceeds typical adult max{" "}
                            {res.cappedAt} mg — cap and reassess.
                          </span>
                        </div>
                      )}
                      {rule.notes && (
                        <div className="mt-2 text-[11px] text-muted-foreground border-t border-border pt-2">
                          {rule.notes}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </div>

      <div className="mt-8 rounded-xl border border-warning/30 bg-warning/5 p-4 text-xs text-foreground/85 flex items-start gap-2">
        <AlertTriangle className="h-4 w-4 text-warning mt-0.5 shrink-0" />
        <div>
          <strong>Verify every dose</strong> against the package insert,
          your institutional protocol, and the patient&apos;s physiology.
          Weight-basis tags (IBW / LBW / ABW) are shown for drugs where
          choice of weight matters — see the{" "}
          <a href="/calculators/ibw-abw" className="underline text-primary">
            IBW / ABW calculator
          </a>{" "}
          to derive those.
        </div>
      </div>
    </CalculatorShell>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-3 h-7 rounded-full text-[11px] font-medium border transition-colors whitespace-nowrap",
        active
          ? "bg-primary/10 border-primary/40 text-primary"
          : "border-border bg-card hover:bg-muted text-muted-foreground"
      )}
    >
      {label}
    </button>
  );
}
