"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Field, Result, Select } from "./calculator-shell";
import { formatNumber } from "@/lib/utils";

// EBV by population (mL/kg)
const ebvPerKg: Record<string, number> = {
  premature: 95,
  fullTerm: 85,
  infant: 80,
  child: 75,
  adultMale: 75,
  adultFemale: 65,
};

const ebvLabel: Record<string, string> = {
  premature: "Premature neonate",
  fullTerm: "Full-term neonate",
  infant: "Infant (<1 yr)",
  child: "Child",
  adultMale: "Adult male",
  adultFemale: "Adult female",
};

export function AblCalc() {
  const [population, setPopulation] = useState("adultMale");
  const [weight, setWeight] = useState("80");
  const [startHct, setStartHct] = useState("42");
  const [targetHct, setTargetHct] = useState("30");

  const { ebv, abl, avgHct } = useMemo(() => {
    const w = parseFloat(weight);
    const sh = parseFloat(startHct);
    const th = parseFloat(targetHct);
    if (!w || !sh || !th) return { ebv: NaN, abl: NaN, avgHct: NaN };
    const ebv = w * ebvPerKg[population];
    const avgHct = (sh + th) / 2;
    const abl = (ebv * (sh - th)) / avgHct;
    return { ebv, abl, avgHct };
  }, [population, weight, startHct, targetHct]);

  return (
    <CalculatorShell
      title="Allowable Blood Loss"
      description="Estimated allowable blood loss before transfusion threshold."
      formula="ABL = EBV × (Hct_start − Hct_target) / Hct_avg"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Select
          label="Population"
          value={population}
          onChange={setPopulation}
          options={Object.keys(ebvPerKg).map((k) => ({
            value: k,
            label: `${ebvLabel[k]} (${ebvPerKg[k]} mL/kg)`,
          }))}
        />
        <Field label="Weight" unit="kg" value={weight} onChange={setWeight} />
        <Field
          label="Starting Hct"
          unit="%"
          value={startHct}
          onChange={setStartHct}
        />
        <Field
          label="Target (lowest) Hct"
          unit="%"
          value={targetHct}
          onChange={setTargetHct}
        />
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Result label="EBV" value={formatNumber(ebv, 0)} unit="mL" />
        <Result
          label="Allowable blood loss"
          value={formatNumber(abl, 0)}
          unit="mL"
          note={`Average Hct = ${formatNumber(avgHct, 1)}%`}
        />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        ABL is a guide, not a transfusion trigger. Consider the patient&apos;s
        oxygen demand, comorbidities, ongoing losses, and dynamic markers
        (ScvO₂, lactate, hemodynamics).
      </p>
    </CalculatorShell>
  );
}
