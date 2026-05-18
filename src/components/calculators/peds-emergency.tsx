"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Field } from "./calculator-shell";
import { formatNumber } from "@/lib/utils";

export function PedsEmergencyCalc() {
  const [w, setW] = useState("15");

  const doses = useMemo(() => {
    const kg = parseFloat(w);
    if (!isFinite(kg) || kg <= 0) return null;
    return {
      epi: kg * 0.01, // mg IV/IO
      atropine: Math.max(0.1, Math.min(0.5, kg * 0.02)), // 0.02 mg/kg, min 0.1, max 0.5
      sux: kg * 2, // mg
      rocuronium: kg * 1.2, // mg RSI
      propofol: kg * 2.5,
      ketamine: kg * 2,
      fentanyl: kg * 2, // mcg
      defib: kg * 2, // J initial
      cardiovert: kg * 0.5,
      ettCuffed: 0,
      bolus: kg * 20,
    };
  }, [w]);

  return (
    <CalculatorShell
      title="Pediatric Emergency Doses"
      description="Weight-based, ready-to-use doses for resuscitation, RSI, and code situations."
      formula="Always confirm with a second clinician before administration."
      references={["acls", "miller", "stanfordEM"]}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Weight" unit="kg" value={w} onChange={setW} />
      </div>

      {doses && (
        <div className="mt-6 space-y-6">
          <DoseGroup title="Resuscitation">
            <Dose
              label="Epinephrine"
              value={`${formatNumber(doses.epi, 2)} mg IV/IO`}
              note="(0.01 mg/kg of 1:10,000)"
            />
            <Dose
              label="Atropine"
              value={`${formatNumber(doses.atropine, 2)} mg IV`}
              note="(0.02 mg/kg; min 0.1, max 0.5 mg)"
            />
            <Dose
              label="Fluid bolus"
              value={`${formatNumber(doses.bolus, 0)} mL`}
              note="(20 mL/kg LR/NS)"
            />
            <Dose
              label="Defibrillation"
              value={`${formatNumber(doses.defib, 0)} J`}
              note="(2 J/kg initial, then 4 J/kg)"
            />
            <Dose
              label="Synch cardioversion"
              value={`${formatNumber(doses.cardiovert, 1)} J`}
              note="(0.5–1 J/kg)"
            />
          </DoseGroup>

          <DoseGroup title="RSI / Induction">
            <Dose
              label="Succinylcholine"
              value={`${formatNumber(doses.sux, 0)} mg IV`}
              note="(2 mg/kg in infants, 1.5 mg/kg children)"
            />
            <Dose
              label="Rocuronium (RSI)"
              value={`${formatNumber(doses.rocuronium, 1)} mg IV`}
              note="(1.2 mg/kg)"
            />
            <Dose
              label="Propofol"
              value={`${formatNumber(doses.propofol, 0)} mg IV`}
              note="(2.5 mg/kg induction)"
            />
            <Dose
              label="Ketamine"
              value={`${formatNumber(doses.ketamine, 0)} mg IV`}
              note="(2 mg/kg IV or 4–6 mg/kg IM)"
            />
            <Dose
              label="Fentanyl"
              value={`${formatNumber(doses.fentanyl, 0)} mcg IV`}
              note="(1–2 mcg/kg)"
            />
          </DoseGroup>
        </div>
      )}
    </CalculatorShell>
  );
}

function DoseGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] font-medium text-primary mb-3">
        {title}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">{children}</div>
    </div>
  );
}

function Dose({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
      {note && (
        <div className="mt-0.5 text-[11px] text-muted-foreground">{note}</div>
      )}
    </div>
  );
}
