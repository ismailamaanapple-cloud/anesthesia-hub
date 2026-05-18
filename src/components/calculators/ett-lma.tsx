"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Field, Result } from "./calculator-shell";
import { formatNumber } from "@/lib/utils";

function lmaSizeForWeight(kg: number): { size: string; cuff: string } | null {
  if (!isFinite(kg) || kg <= 0) return null;
  if (kg < 5) return { size: "1", cuff: "≤4 mL" };
  if (kg < 10) return { size: "1.5", cuff: "≤7 mL" };
  if (kg < 20) return { size: "2", cuff: "≤10 mL" };
  if (kg < 30) return { size: "2.5", cuff: "≤14 mL" };
  if (kg < 50) return { size: "3", cuff: "≤20 mL" };
  if (kg < 70) return { size: "4", cuff: "≤30 mL" };
  if (kg < 100) return { size: "5", cuff: "≤40 mL" };
  return { size: "6", cuff: "≤50 mL" };
}

export function EttLmaCalc() {
  const [age, setAge] = useState("4");
  const [weight, setWeight] = useState("16");

  const { cuffed, uncuffed, depth, lma } = useMemo(() => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const cuffed = isFinite(a) ? a / 4 + 3.5 : NaN;
    const uncuffed = isFinite(a) ? a / 4 + 4 : NaN;
    const depth = isFinite(a) ? a / 2 + 12 : NaN;
    return { cuffed, uncuffed, depth, lma: lmaSizeForWeight(w) };
  }, [age, weight]);

  return (
    <CalculatorShell
      title="Pediatric ETT & LMA Sizing"
      description="Endotracheal tube size and depth (Cole) and LMA size by weight."
      formula="Cuffed ETT = age/4 + 3.5   ·   Uncuffed ETT = age/4 + 4   ·   Depth (cm) = age/2 + 12"
      references={["miller", "stanfordCa1"]}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Age" unit="years" value={age} onChange={setAge} />
        <Field label="Weight" unit="kg" value={weight} onChange={setWeight} />
      </div>
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <Result
          label="Cuffed ETT"
          value={formatNumber(cuffed, 1)}
          unit="mm ID"
        />
        <Result
          label="Uncuffed ETT"
          value={formatNumber(uncuffed, 1)}
          unit="mm ID"
        />
        <Result label="Depth at lip" value={formatNumber(depth, 1)} unit="cm" />
      </div>
      {lma && (
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <Result label="LMA size" value={lma.size} />
          <Result label="Cuff volume" value={lma.cuff} />
        </div>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        Have one size above and below available. Confirm with bilateral breath
        sounds, capnography, and assess for leak (cuffed: leak at 20–25 cmH₂O).
      </p>
    </CalculatorShell>
  );
}
