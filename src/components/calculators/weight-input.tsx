"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "ah-last-weight";

export type WeightState = {
  /** Always normalized to kg */
  kg: number;
  /** Raw input string (for UX) */
  raw: string;
  /** Unit toggle */
  unit: "kg" | "lb";
};

const LB_PER_KG = 2.20462;

function clamp(n: number, min = 0, max = 500) {
  return Math.max(min, Math.min(max, n));
}

export function useWeight(initial = "70"): WeightState & {
  setRaw: (v: string) => void;
  setUnit: (u: "kg" | "lb") => void;
} {
  const [unit, setUnitState] = useState<"kg" | "lb">("kg");
  const [raw, setRaw] = useState<string>(initial);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { kg } = JSON.parse(stored) as { kg: number };
        if (isFinite(kg) && kg > 0) {
          setRaw(String(kg));
        }
      }
    } catch {}
  }, []);

  const persist = useCallback((kg: number) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ kg }));
    } catch {}
  }, []);

  const setUnit = useCallback(
    (u: "kg" | "lb") => {
      if (u === unit) return;
      const n = parseFloat(raw);
      if (isFinite(n) && n > 0) {
        const next = u === "kg" ? n / LB_PER_KG : n * LB_PER_KG;
        setRaw(next.toFixed(next > 100 ? 0 : 1));
      }
      setUnitState(u);
    },
    [unit, raw]
  );

  const n = parseFloat(raw);
  const kg = unit === "kg" ? n : n / LB_PER_KG;
  const kgClamped = clamp(isFinite(kg) ? kg : 0);

  useEffect(() => {
    if (kgClamped > 0 && kgClamped < 500) persist(kgClamped);
  }, [kgClamped, persist]);

  return { kg: kgClamped, raw, unit, setRaw, setUnit };
}

export function WeightInput({
  raw,
  unit,
  setRaw,
  setUnit,
  label = "Patient weight",
}: Pick<ReturnType<typeof useWeight>, "raw" | "unit" | "setRaw" | "setUnit"> & {
  label?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <div className="mt-1.5 flex items-stretch rounded-xl border border-border bg-card focus-within:border-primary transition-colors overflow-hidden">
        <input
          type="number"
          min={0}
          max={500}
          step="0.1"
          inputMode="decimal"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          className="flex-1 bg-transparent h-11 px-3 outline-none text-sm"
        />
        <div className="flex border-l border-border">
          <button
            type="button"
            onClick={() => setUnit("kg")}
            className={`px-3 text-xs font-medium ${
              unit === "kg"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            kg
          </button>
          <button
            type="button"
            onClick={() => setUnit("lb")}
            className={`px-3 text-xs font-medium border-l border-border ${
              unit === "lb"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            lb
          </button>
        </div>
      </div>
    </label>
  );
}
