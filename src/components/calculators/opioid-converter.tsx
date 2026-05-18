"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Field, Select } from "./calculator-shell";
import { AlertTriangle } from "lucide-react";

// Equianalgesic doses in milligrams, normalized to IV morphine 10 mg.
// Source: standard equianalgesic table (Stoelting, Miller). Always apply
// 25–50% cross-tolerance reduction when switching drugs.

type OpioidRoute = "IV" | "PO";
type OpioidKey =
  | "morphineIV"
  | "morphinePO"
  | "hydromorphoneIV"
  | "hydromorphonePO"
  | "fentanylIV"
  | "oxycodonePO"
  | "hydrocodonePO"
  | "codeinePO"
  | "tramadolPO"
  | "methadonePO";

type OpioidDef = {
  key: OpioidKey;
  label: string;
  route: OpioidRoute;
  /** mg equivalent to 10 mg IV morphine (so smaller = stronger) */
  mgPer10MgMorphineIV: number;
  /** mcg unit for fentanyl */
  units: "mg" | "mcg";
  notes?: string;
};

const OPIOIDS: OpioidDef[] = [
  { key: "morphineIV", label: "Morphine IV", route: "IV", mgPer10MgMorphineIV: 10, units: "mg" },
  { key: "morphinePO", label: "Morphine PO", route: "PO", mgPer10MgMorphineIV: 30, units: "mg" },
  { key: "hydromorphoneIV", label: "Hydromorphone IV", route: "IV", mgPer10MgMorphineIV: 1.5, units: "mg" },
  { key: "hydromorphonePO", label: "Hydromorphone PO", route: "PO", mgPer10MgMorphineIV: 7.5, units: "mg" },
  { key: "fentanylIV", label: "Fentanyl IV", route: "IV", mgPer10MgMorphineIV: 0.1, units: "mg", notes: "Display in mcg." },
  { key: "oxycodonePO", label: "Oxycodone PO", route: "PO", mgPer10MgMorphineIV: 20, units: "mg" },
  { key: "hydrocodonePO", label: "Hydrocodone PO", route: "PO", mgPer10MgMorphineIV: 30, units: "mg" },
  { key: "codeinePO", label: "Codeine PO", route: "PO", mgPer10MgMorphineIV: 200, units: "mg" },
  { key: "tramadolPO", label: "Tramadol PO", route: "PO", mgPer10MgMorphineIV: 100, units: "mg", notes: "Highly variable; weak μ + SNRI." },
  { key: "methadonePO", label: "Methadone PO", route: "PO", mgPer10MgMorphineIV: 3, units: "mg", notes: "Variable ratio (3:1 to 14:1 vs morphine) — consult chronic pain." },
];

const REDUCTION_OPTIONS = [
  { value: "0", label: "None (0%) — same drug class" },
  { value: "0.25", label: "Light (25%)" },
  { value: "0.33", label: "Standard (33%) — recommended" },
  { value: "0.5", label: "Heavy (50%) — opioid-naive / elderly" },
];

export function OpioidConverterCalc() {
  const [from, setFrom] = useState<OpioidKey>("morphineIV");
  const [doseRaw, setDoseRaw] = useState("10");
  const [reduction, setReduction] = useState("0.33");

  const fromDef = OPIOIDS.find((o) => o.key === from)!;
  const doseNum = parseFloat(doseRaw);

  // Normalize input to morphine IV equivalent
  const inputUnits = from === "fentanylIV" ? "mcg" : "mg";
  // Convert mcg to mg if needed
  const inputDoseMg = inputUnits === "mcg" ? doseNum / 1000 : doseNum;

  const morphineIVEq = useMemo(() => {
    if (!isFinite(inputDoseMg) || inputDoseMg <= 0) return 0;
    return (inputDoseMg / fromDef.mgPer10MgMorphineIV) * 10;
  }, [inputDoseMg, fromDef]);

  const reductionFactor = 1 - parseFloat(reduction);

  return (
    <CalculatorShell
      title="Opioid Equianalgesic Converter"
      description="Convert any opioid dose to its equivalent across routes and agents. Built-in cross-tolerance reduction applied before display."
      formula="equivalent dose = (input dose × ref mg) / (input ref mg)  →  × (1 − reduction)"
    >
      <div className="grid sm:grid-cols-3 gap-4">
        <Select
          label="From drug & route"
          value={from}
          onChange={(v) => setFrom(v as OpioidKey)}
          options={OPIOIDS.map((o) => ({ value: o.key, label: o.label }))}
        />
        <Field
          label={`Dose (${inputUnits})`}
          unit={inputUnits}
          value={doseRaw}
          onChange={setDoseRaw}
        />
        <Select
          label="Cross-tolerance reduction"
          value={reduction}
          onChange={setReduction}
          options={REDUCTION_OPTIONS}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5">
        <div className="text-xs uppercase tracking-wider text-primary font-medium">
          Morphine IV equivalent
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight">
            {morphineIVEq > 0 ? morphineIVEq.toFixed(1) : "—"}
          </span>
          <span className="text-sm text-muted-foreground">mg</span>
        </div>
        <div className="mt-1 text-[11px] text-muted-foreground">
          Reduction applied below: {(parseFloat(reduction) * 100).toFixed(0)}% (×{" "}
          {reductionFactor.toFixed(2)})
        </div>
      </div>

      <div className="mt-6">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-3">
          Equivalent doses (after reduction)
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {OPIOIDS.filter((o) => o.key !== from).map((o) => {
            const equiv = (morphineIVEq * o.mgPer10MgMorphineIV) / 10;
            const adj = equiv * reductionFactor;
            const displayUnits = o.key === "fentanylIV" ? "mcg" : "mg";
            const display =
              o.key === "fentanylIV"
                ? adj * 1000
                : adj;
            return (
              <div
                key={o.key}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="text-xs font-semibold tracking-tight">{o.label}</div>
                <div className="mt-2 text-2xl font-bold tracking-tight text-gradient">
                  {display > 0 ? display.toFixed(display < 1 ? 2 : display < 10 ? 1 : 0) : "—"}{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    {displayUnits}
                  </span>
                </div>
                {o.notes && (
                  <div className="mt-1.5 text-[10px] text-muted-foreground border-t border-border pt-1.5">
                    {o.notes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-warning/30 bg-warning/5 p-4 text-xs text-foreground/85 flex items-start gap-2">
        <AlertTriangle className="h-4 w-4 text-warning mt-0.5 shrink-0" />
        <div>
          <strong>Equianalgesic doses are estimates.</strong> Patient
          variability, prior opioid exposure, age, and renal/hepatic function
          all affect actual potency. Always start lower and titrate, and
          consult an acute pain or palliative service for high-dose
          conversions (especially involving <em>methadone</em> or{" "}
          <em>fentanyl patches</em>).
        </div>
      </div>
    </CalculatorShell>
  );
}
