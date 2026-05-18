"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Result } from "./calculator-shell";

const factors = [
  { id: "female", label: "Female sex" },
  { id: "nonSmoker", label: "Non-smoker" },
  { id: "hxPonv", label: "History of PONV or motion sickness" },
  { id: "postopOpioids", label: "Postoperative opioids anticipated" },
];

const riskBy: Record<number, { pct: string; recommendation: string }> = {
  0: { pct: "≈10%", recommendation: "No prophylaxis or single agent if cost-effective." },
  1: { pct: "≈20%", recommendation: "Consider single agent (5-HT3 antagonist or dexamethasone)." },
  2: { pct: "≈40%", recommendation: "Two-drug prophylaxis (ondansetron + dexamethasone)." },
  3: { pct: "≈60%", recommendation: "Multimodal prophylaxis + TIVA; consider scopolamine, droperidol." },
  4: { pct: "≈80%", recommendation: "Aggressive multimodal: TIVA + 3+ agents (5-HT3 + dex + NK1 / haloperidol / scopolamine)." },
};

export function ApfelCalc() {
  const [picked, setPicked] = useState<Record<string, boolean>>({});

  const score = useMemo(
    () => Object.values(picked).filter(Boolean).length,
    [picked]
  );
  const data = riskBy[score];

  return (
    <CalculatorShell
      title="Apfel PONV Score"
      description="Estimate post-operative nausea & vomiting risk and choose prophylaxis intensity."
      formula="Score = number of risk factors present (0–4)"
      references={["apfel", "apfelImpact"]}
    >
      <div className="space-y-2">
        {factors.map((f) => (
          <label
            key={f.id}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 cursor-pointer hover:border-primary/40 transition-colors"
          >
            <input
              type="checkbox"
              checked={!!picked[f.id]}
              onChange={(e) =>
                setPicked((p) => ({ ...p, [f.id]: e.target.checked }))
              }
              className="h-4 w-4 accent-primary"
            />
            <span className="text-sm">{f.label}</span>
          </label>
        ))}
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Result label="Score" value={`${score} / 4`} note={`PONV risk ${data.pct}`} />
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="text-xs uppercase tracking-wider text-primary font-medium">
            Recommendation
          </div>
          <div className="mt-2 text-sm leading-relaxed">{data.recommendation}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}
