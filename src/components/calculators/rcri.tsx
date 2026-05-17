"use client";

import { useMemo, useState } from "react";
import { CalculatorShell, Result } from "./calculator-shell";

const criteria = [
  { id: "highRiskSurg", label: "High-risk surgery (intraperitoneal, intrathoracic, suprainguinal vascular)" },
  { id: "ihd", label: "Ischemic heart disease (MI, +stress test, current angina, nitrate use, Q-waves)" },
  { id: "chf", label: "History of congestive heart failure" },
  { id: "cva", label: "History of cerebrovascular disease (TIA/stroke)" },
  { id: "dm", label: "Diabetes mellitus on insulin" },
  { id: "ckd", label: "Creatinine > 2.0 mg/dL" },
];

const riskBy: Record<number, string> = {
  0: "0.4% — Class I (very low risk)",
  1: "0.9% — Class II (low risk)",
  2: "6.6% — Class III (moderate risk)",
  3: "≥11% — Class IV (high risk)",
};

export function RcriCalc() {
  const [picked, setPicked] = useState<Record<string, boolean>>({});

  const score = useMemo(
    () => Object.values(picked).filter(Boolean).length,
    [picked]
  );
  const label = riskBy[Math.min(score, 3)];

  return (
    <CalculatorShell
      title="Revised Cardiac Risk Index (RCRI / Lee)"
      description="Predicts perioperative risk of major cardiac complications in non-cardiac surgery."
      formula="One point per criterion. ≥2 points often triggers further cardiac workup."
    >
      <div className="space-y-2">
        {criteria.map((c) => (
          <label
            key={c.id}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 cursor-pointer hover:border-primary/40 transition-colors"
          >
            <input
              type="checkbox"
              className="h-4 w-4 accent-primary mt-0.5"
              checked={!!picked[c.id]}
              onChange={(e) =>
                setPicked((p) => ({ ...p, [c.id]: e.target.checked }))
              }
            />
            <span className="text-sm">{c.label}</span>
          </label>
        ))}
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <Result label="RCRI" value={`${score} / 6`} />
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="text-xs uppercase tracking-wider text-primary font-medium">
            30-day MACE risk
          </div>
          <div className="mt-2 text-sm leading-relaxed">{label}</div>
        </div>
      </div>
    </CalculatorShell>
  );
}
