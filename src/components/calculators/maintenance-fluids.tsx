"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Field, Result } from "./calculator-shell";
import { formatNumber } from "@/lib/utils";

export function MaintenanceFluidsCalc() {
  const [w, setW] = useState("25");

  const { perHour, deficit4h } = useMemo(() => {
    const kg = parseFloat(w);
    if (!isFinite(kg) || kg <= 0) return { perHour: NaN, deficit4h: NaN };
    let rate = 0;
    if (kg <= 10) rate = kg * 4;
    else if (kg <= 20) rate = 40 + (kg - 10) * 2;
    else rate = 60 + (kg - 20) * 1;
    return { perHour: rate, deficit4h: rate * 4 };
  }, [w]);

  return (
    <CalculatorShell
      title="Maintenance Fluids (4-2-1)"
      description="Holliday-Segar hourly maintenance fluid rate."
      formula="4 mL/kg/h (first 10 kg) + 2 mL/kg/h (next 10 kg) + 1 mL/kg/h (>20 kg)"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Weight" unit="kg" value={w} onChange={setW} />
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Result
          label="Hourly rate"
          value={formatNumber(perHour, 0)}
          unit="mL/h"
        />
        <Result
          label="NPO deficit (4 h)"
          value={formatNumber(deficit4h, 0)}
          unit="mL"
          note="Classic teaching: replace ½ in first hour, ¼ in second, ¼ in third."
        />
      </div>
    </CalculatorShell>
  );
}
