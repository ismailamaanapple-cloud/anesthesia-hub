"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Select } from "./calculator-shell";
import { WeightInput, useWeight } from "./weight-input";
import { AlertTriangle, ShieldCheck } from "lucide-react";

type LADrug = {
  name: string;
  plain: number; // mg/kg
  withEpi?: number; // mg/kg
  commonConcs: number[]; // %
  notes?: string;
};

const DRUGS: LADrug[] = [
  {
    name: "Lidocaine",
    plain: 4.5,
    withEpi: 7,
    commonConcs: [0.5, 1, 1.5, 2],
    notes:
      "First sign of LAST often peri-oral numbness, tinnitus, metallic taste.",
  },
  {
    name: "Bupivacaine",
    plain: 2.5,
    withEpi: 3,
    commonConcs: [0.125, 0.25, 0.5],
    notes:
      "Cardiotoxic — avoid IV regional (Bier block). Lipid rescue 1.5 mL/kg if LAST.",
  },
  {
    name: "Ropivacaine",
    plain: 3,
    commonConcs: [0.1, 0.2, 0.5, 0.75],
    notes: "Less cardiotoxic than bupivacaine. Ideal for labor epidural.",
  },
  {
    name: "Mepivacaine",
    plain: 5,
    withEpi: 7,
    commonConcs: [1, 1.5, 2],
  },
  {
    name: "Chloroprocaine",
    plain: 10,
    withEpi: 15,
    commonConcs: [1, 2, 3],
    notes: "Rapid plasma cholinesterase metabolism → low systemic toxicity.",
  },
  {
    name: "Tetracaine",
    plain: 1.5,
    commonConcs: [0.5, 1],
    notes: "Mostly used spinally; long duration.",
  },
];

export function LocalAnestheticMaxCalc() {
  const w = useWeight("70");
  const [drugName, setDrugName] = useState("Lidocaine");
  const [withEpi, setWithEpi] = useState(false);
  const [conc, setConc] = useState("1");

  const drug = useMemo(
    () => DRUGS.find((d) => d.name === drugName) ?? DRUGS[0],
    [drugName]
  );

  const epiAvailable = !!drug.withEpi;
  const useEpi = withEpi && epiAvailable;
  const mgPerKg = useEpi ? drug.withEpi! : drug.plain;

  const concNum = parseFloat(conc); // % (g/100 mL)
  const mgPerMl = concNum * 10; // 1% = 10 mg/mL

  const maxMg = w.kg * mgPerKg;
  const maxMl = mgPerMl > 0 ? maxMg / mgPerMl : NaN;

  // Cap by absolute adult max for lidocaine (300 plain, 500 with epi) — informational
  const absMax =
    drug.name === "Lidocaine" ? (useEpi ? 500 : 300) :
    drug.name === "Bupivacaine" ? (useEpi ? 225 : 175) :
    drug.name === "Ropivacaine" ? 300 :
    undefined;

  const overAbsolute = absMax !== undefined && maxMg > absMax;

  return (
    <CalculatorShell
      title="Local Anesthetic Max Dose"
      description="Per-patient maximum mg and the equivalent volume of common concentrations. Quick safety check before you draw up."
      formula="max mg = weight (kg) × max mg/kg   ·   max mL = max mg ÷ (concentration % × 10)"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <WeightInput
          raw={w.raw}
          unit={w.unit}
          setRaw={w.setRaw}
          setUnit={w.setUnit}
        />
        <Select
          label="Drug"
          value={drugName}
          onChange={setDrugName}
          options={DRUGS.map((d) => ({ value: d.name, label: d.name }))}
        />
        <Select
          label="Concentration"
          value={conc}
          onChange={setConc}
          options={drug.commonConcs.map((c) => ({
            value: String(c),
            label: `${c}% (${c * 10} mg/mL)`,
          }))}
        />
        <label className="block">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            With epinephrine
          </span>
          <div className="mt-1.5 flex rounded-xl border border-border bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setWithEpi(false)}
              className={`flex-1 h-11 text-sm font-medium ${
                !withEpi
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              Plain
            </button>
            <button
              type="button"
              onClick={() => setWithEpi(true)}
              disabled={!epiAvailable}
              className={`flex-1 h-11 text-sm font-medium border-l border-border ${
                useEpi
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-transparent"
              }`}
            >
              With Epi
            </button>
          </div>
          {!epiAvailable && (
            <div className="mt-1 text-[10px] text-muted-foreground">
              Not applicable for {drug.name}.
            </div>
          )}
        </label>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <div className="text-xs uppercase tracking-wider text-primary font-medium">
            Max dose ({mgPerKg} mg/kg)
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight">
              {w.kg > 0 ? maxMg.toFixed(0) : "—"}
            </span>
            <span className="text-sm text-muted-foreground">mg</span>
          </div>
          {absMax !== undefined && (
            <div className="mt-1 text-[11px] text-muted-foreground">
              Absolute adult max: {absMax} mg
            </div>
          )}
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <div className="text-xs uppercase tracking-wider text-primary font-medium">
            Max volume at {conc}%
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight">
              {w.kg > 0 && isFinite(maxMl) ? maxMl.toFixed(1) : "—"}
            </span>
            <span className="text-sm text-muted-foreground">mL</span>
          </div>
          <div className="mt-1 text-[11px] text-muted-foreground">
            ({mgPerMl} mg/mL)
          </div>
        </div>
      </div>

      {overAbsolute && (
        <div className="mt-4 rounded-xl border border-warning/30 bg-warning/5 p-3 text-xs text-warning flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>
            Calculated max exceeds the typical absolute adult cap of{" "}
            <strong>{absMax} mg</strong> — cap your total dose here regardless of weight.
          </span>
        </div>
      )}

      <div className="mt-4 rounded-xl border border-border bg-card p-4 text-sm">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <strong>LAST safety quick reference</strong>
        </div>
        <ul className="space-y-1 text-foreground/85 leading-relaxed">
          <li>Aspirate before injection; use fractionated dosing (3–5 mL increments).</li>
          <li>Treat seizures with midazolam; secure airway with 100% O₂.</li>
          <li>
            <strong>Lipid emulsion 20% — 1.5 mL/kg bolus, then 0.25 mL/kg/min infusion.</strong>
          </li>
          <li>Modified ACLS — epi ≤ 1 mcg/kg, avoid vasopressin, CCB, β-blocker.</li>
        </ul>
      </div>

      {drug.notes && (
        <div className="mt-3 text-xs text-muted-foreground">{drug.notes}</div>
      )}
    </CalculatorShell>
  );
}
