"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Field, Select, Result } from "./calculator-shell";
import { formatNumber } from "@/lib/utils";

const macAt40: Record<string, number> = {
  sevoflurane: 2.0,
  isoflurane: 1.15,
  desflurane: 6.0,
  nitrousOxide: 104,
  halothane: 0.75,
};

const agentLabel: Record<string, string> = {
  sevoflurane: "Sevoflurane",
  isoflurane: "Isoflurane",
  desflurane: "Desflurane",
  nitrousOxide: "Nitrous oxide",
  halothane: "Halothane",
};

export function MacCalc() {
  const [agent, setAgent] = useState("sevoflurane");
  const [age, setAge] = useState("40");

  const { mac } = useMemo(() => {
    const a = parseFloat(age);
    if (!isFinite(a) || a < 0) return { mac: NaN };
    // Mapleson: MAC (age) = MAC40 × 10^(-0.00269 × (age − 40))
    const base = macAt40[agent];
    const mac = base * Math.pow(10, -0.00269 * (a - 40));
    return { mac };
  }, [agent, age]);

  return (
    <CalculatorShell
      title="MAC (Age-Adjusted)"
      description="Minimum Alveolar Concentration adjusted to patient age via the Mapleson equation."
      formula="MAC(age) = MAC₄₀ × 10^(−0.00269 × (age − 40))"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Select
          label="Agent"
          value={agent}
          onChange={setAgent}
          options={Object.keys(macAt40).map((k) => ({
            value: k,
            label: agentLabel[k],
          }))}
        />
        <Field label="Age" unit="years" value={age} onChange={setAge} />
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Result
          label="1.0 MAC"
          value={formatNumber(mac, 2)}
          unit="vol %"
          note={`Reference MAC₄₀ = ${macAt40[agent]} vol %`}
        />
        <Result
          label="MAC awake (~0.34)"
          value={formatNumber(mac * 0.34, 2)}
          unit="vol %"
          note="Approximate concentration of return of awareness"
        />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Remember: MAC values are additive (e.g., 0.5 MAC sevo + 0.5 MAC N₂O ≈
        1 MAC). MAC ↓ with opioids, benzos, hypothermia, pregnancy,
        hyponatremia, anemia; ↑ with chronic alcohol use, hyperthermia,
        sympathomimetics.
      </p>
    </CalculatorShell>
  );
}
