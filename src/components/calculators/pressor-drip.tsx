"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Select, Field } from "./calculator-shell";
import { WeightInput, useWeight } from "./weight-input";

type Pressor = {
  key: string;
  name: string;
  brand?: string;
  unit: "mcg/kg/min" | "mcg/min" | "U/min" | "mcg/kg/h";
  defaultConcMcgPerMl?: number; // typical bag/syringe concentration in mcg/mL
  defaultConcUPerMl?: number; // for vasopressin
  typicalRange: string; // for the helper text
  notes?: string;
};

const PRESSORS: Pressor[] = [
  {
    key: "phenylephrine",
    name: "Phenylephrine",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 100, // 10 mg / 100 mL = 100 mcg/mL
    typicalRange: "0.15–0.75 mcg/kg/min (often 20–200 mcg/min total)",
    notes: "Reflex bradycardia; avoid in low-CO states.",
  },
  {
    key: "norepinephrine",
    name: "Norepinephrine",
    brand: "Levophed",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 16, // 4 mg / 250 mL = 16 mcg/mL
    typicalRange: "0.02–1 mcg/kg/min",
    notes: "First-line for vasodilatory shock.",
  },
  {
    key: "epinephrine",
    name: "Epinephrine",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 16, // 4 mg / 250 mL = 16 mcg/mL
    typicalRange: "0.02–0.2 mcg/kg/min (up to 1+ in arrest)",
    notes: "Dose-dependent α vs β effect.",
  },
  {
    key: "dopamine",
    name: "Dopamine",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 1600, // 400 mg / 250 mL = 1600 mcg/mL
    typicalRange: "1–10 mcg/kg/min",
    notes: "Arrhythmogenic at high doses; falling out of favor.",
  },
  {
    key: "dobutamine",
    name: "Dobutamine",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 1000, // 250 mg / 250 mL = 1000 mcg/mL
    typicalRange: "2–20 mcg/kg/min",
    notes: "β1 inotrope; can drop SVR.",
  },
  {
    key: "milrinone",
    name: "Milrinone",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 200, // 20 mg / 100 mL
    typicalRange: "0.125–0.5 mcg/kg/min (load 50 mcg/kg over 10 min)",
    notes: "Inodilator; pulmonary vasodilator.",
  },
  {
    key: "vasopressin",
    name: "Vasopressin",
    unit: "U/min",
    defaultConcUPerMl: 0.6, // 60 U / 100 mL = 0.6 U/mL
    typicalRange: "0.01–0.04 U/min (fixed dose)",
    notes: "Catecholamine-sparing in vasodilatory shock.",
  },
  {
    key: "nitroglycerin",
    name: "Nitroglycerin",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 200, // 50 mg / 250 mL = 200 mcg/mL
    typicalRange: "0.1–1 mcg/kg/min (or 5–100 mcg/min total)",
    notes: "Venous > arterial dilation.",
  },
  {
    key: "nicardipine",
    name: "Nicardipine",
    unit: "mcg/kg/min",
    defaultConcMcgPerMl: 100, // 25 mg / 250 mL
    typicalRange: "5–15 mg/h total (≈ 1–3 mcg/kg/min in 70 kg)",
    notes: "Arterial vasodilator; smooth BP control.",
  },
];

export function PressorDripCalc() {
  const w = useWeight("70");
  const [drugKey, setDrugKey] = useState("norepinephrine");
  const [doseRaw, setDoseRaw] = useState("0.05");

  const drug = useMemo(
    () => PRESSORS.find((p) => p.key === drugKey) ?? PRESSORS[0],
    [drugKey]
  );

  const [concRaw, setConcRaw] = useState(
    () =>
      String(
        drug.defaultConcMcgPerMl ?? drug.defaultConcUPerMl ?? 16
      )
  );

  // When drug changes, reset concentration to default
  const handleDrugChange = (key: string) => {
    setDrugKey(key);
    const next = PRESSORS.find((p) => p.key === key) ?? PRESSORS[0];
    setConcRaw(
      String(next.defaultConcMcgPerMl ?? next.defaultConcUPerMl ?? 16)
    );
  };

  const isVasopressin = drug.key === "vasopressin";
  const doseNum = parseFloat(doseRaw);
  const concNum = parseFloat(concRaw);

  // Compute mL/h
  let mlPerHr = NaN;
  if (isFinite(doseNum) && isFinite(concNum) && concNum > 0) {
    if (isVasopressin) {
      // dose U/min, conc U/mL → mL/min × 60 = mL/h
      mlPerHr = (doseNum / concNum) * 60;
    } else if (drug.unit === "mcg/kg/min" && w.kg > 0) {
      const mcgPerMin = doseNum * w.kg;
      mlPerHr = (mcgPerMin / concNum) * 60;
    } else if (drug.unit === "mcg/min") {
      mlPerHr = (doseNum / concNum) * 60;
    } else if (drug.unit === "mcg/kg/h" && w.kg > 0) {
      const mcgPerHr = doseNum * w.kg;
      mlPerHr = mcgPerHr / concNum;
    }
  }

  // Reverse direction: estimate dose from a target mL/h
  const [reverseMlH, setReverseMlH] = useState("");
  let reverseDose = NaN;
  const reverseNum = parseFloat(reverseMlH);
  if (isFinite(reverseNum) && isFinite(concNum) && concNum > 0) {
    if (isVasopressin) {
      reverseDose = (reverseNum / 60) * concNum;
    } else if (drug.unit === "mcg/kg/min" && w.kg > 0) {
      reverseDose = ((reverseNum / 60) * concNum) / w.kg;
    } else if (drug.unit === "mcg/min") {
      reverseDose = (reverseNum / 60) * concNum;
    } else if (drug.unit === "mcg/kg/h" && w.kg > 0) {
      reverseDose = (reverseNum * concNum) / w.kg;
    }
  }

  return (
    <CalculatorShell
      title="Vasopressor & Inotrope Drip Rates"
      description="Set dose → get mL/h. Or set mL/h → get effective dose. Defaults match common institutional concentrations; override as needed."
      formula="mL/h = (dose × weight × 60) / concentration"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Select
          label="Drug"
          value={drugKey}
          onChange={handleDrugChange}
          options={PRESSORS.map((p) => ({
            value: p.key,
            label: p.brand ? `${p.name} (${p.brand})` : p.name,
          }))}
        />
        <WeightInput
          raw={w.raw}
          unit={w.unit}
          setRaw={w.setRaw}
          setUnit={w.setUnit}
        />
        <Field
          label={`Dose (${drug.unit})`}
          unit={drug.unit}
          value={doseRaw}
          onChange={setDoseRaw}
        />
        <Field
          label={`Concentration (${isVasopressin ? "U/mL" : "mcg/mL"})`}
          unit={isVasopressin ? "U/mL" : "mcg/mL"}
          value={concRaw}
          onChange={setConcRaw}
        />
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <div className="text-xs uppercase tracking-wider text-primary font-medium">
            Pump rate
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight">
              {isFinite(mlPerHr) && mlPerHr >= 0 ? mlPerHr.toFixed(2) : "—"}
            </span>
            <span className="text-sm text-muted-foreground">mL/h</span>
          </div>
          <div className="mt-1 text-[11px] text-muted-foreground">
            {drug.typicalRange}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Reverse — pump set to
          </div>
          <Field
            label=""
            unit="mL/h"
            value={reverseMlH}
            onChange={setReverseMlH}
            placeholder="e.g. 10"
          />
          {reverseMlH && (
            <div className="mt-2 text-sm">
              ≈{" "}
              <span className="font-semibold">
                {isFinite(reverseDose) ? reverseDose.toFixed(reverseDose < 1 ? 3 : 2) : "—"}
              </span>{" "}
              <span className="text-xs text-muted-foreground">{drug.unit}</span>
            </div>
          )}
        </div>
      </div>

      {drug.notes && (
        <div className="mt-4 rounded-xl border border-border bg-card p-4 text-sm">
          <strong>Note:</strong> {drug.notes}
        </div>
      )}

      <div className="mt-4 text-[11px] text-muted-foreground">
        Common Stanford concentrations preloaded — verify your institution&apos;s
        standard concentration before programming the pump.
      </div>
    </CalculatorShell>
  );
}
