"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Field, Result, Select } from "./calculator-shell";
import { formatNumber } from "@/lib/utils";

export function IbwAbwCalc() {
  const [sex, setSex] = useState("male");
  const [heightCm, setHeightCm] = useState("170");
  const [actual, setActual] = useState("90");

  const { ibw, abw, lbw } = useMemo(() => {
    const cm = parseFloat(heightCm);
    const aw = parseFloat(actual);
    if (!cm || !aw) return { ibw: NaN, abw: NaN, lbw: NaN };
    const inches = cm / 2.54;
    const inchesOver60 = Math.max(0, inches - 60);
    // Devine
    const ibw =
      sex === "male" ? 50 + 2.3 * inchesOver60 : 45.5 + 2.3 * inchesOver60;
    const abw = ibw + 0.4 * (aw - ibw);
    // Janmahasatian LBW
    const bmi = aw / Math.pow(cm / 100, 2);
    const lbw =
      sex === "male"
        ? (9270 * aw) / (6680 + 216 * bmi)
        : (9270 * aw) / (8780 + 244 * bmi);
    return { ibw, abw, lbw };
  }, [sex, heightCm, actual]);

  return (
    <CalculatorShell
      title="Ideal & Adjusted Body Weight"
      description="Devine ideal body weight; adjusted body weight (ABW) for dosing in obesity; Janmahasatian lean body weight."
      formula="IBW (kg) = 50 [M] or 45.5 [F] + 2.3 × inches over 60   ·   ABW = IBW + 0.4 × (actual − IBW)"
      references={["devine", "janmahasatian"]}
    >
      <div className="grid sm:grid-cols-3 gap-4">
        <Select
          label="Sex"
          value={sex}
          onChange={setSex}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
        <Field
          label="Height"
          unit="cm"
          value={heightCm}
          onChange={setHeightCm}
        />
        <Field
          label="Actual weight"
          unit="kg"
          value={actual}
          onChange={setActual}
        />
      </div>
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        <Result label="IBW" value={formatNumber(ibw, 1)} unit="kg" />
        <Result label="Adjusted BW" value={formatNumber(abw, 1)} unit="kg" />
        <Result label="Lean BW" value={formatNumber(lbw, 1)} unit="kg" />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        General dosing tips: succinylcholine → TBW; rocuronium → IBW;
        propofol induction → LBW, maintenance → TBW; remifentanil → IBW;
        opioids → titrate.
      </p>
    </CalculatorShell>
  );
}
