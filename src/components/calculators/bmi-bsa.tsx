"use client";

import { useState, useMemo } from "react";
import { CalculatorShell, Field, Result } from "./calculator-shell";
import { formatNumber } from "@/lib/utils";

export function BmiBsaCalc() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");

  const { bmi, bsa, classification } = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h) return { bmi: NaN, bsa: NaN, classification: "" };
    const bmi = w / Math.pow(h / 100, 2);
    const bsa = Math.sqrt((h * w) / 3600); // Mosteller
    let classification = "";
    if (bmi < 18.5) classification = "Underweight";
    else if (bmi < 25) classification = "Normal";
    else if (bmi < 30) classification = "Overweight";
    else if (bmi < 35) classification = "Obese class I";
    else if (bmi < 40) classification = "Obese class II";
    else classification = "Obese class III";
    return { bmi, bsa, classification };
  }, [weight, height]);

  return (
    <CalculatorShell
      title="BMI & BSA"
      description="Body Mass Index and Body Surface Area (Mosteller formula)."
      formula="BSA (m²) = √(height × weight / 3600)"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Weight" unit="kg" value={weight} onChange={setWeight} />
        <Field label="Height" unit="cm" value={height} onChange={setHeight} />
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Result
          label="BMI"
          value={formatNumber(bmi, 1)}
          unit="kg/m²"
          note={classification}
        />
        <Result label="BSA" value={formatNumber(bsa, 2)} unit="m²" />
      </div>
    </CalculatorShell>
  );
}
