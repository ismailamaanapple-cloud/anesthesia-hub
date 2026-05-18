"use client";

import { useMemo, useState } from "react";
import { CalculatorShell } from "./calculator-shell";
import { WeightInput, useWeight } from "./weight-input";
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";

type Depth = "moderate" | "deep" | "rsi";

const DEPTH_OPTIONS: { value: Depth; label: string; sub: string }[] = [
  {
    value: "moderate",
    label: "Moderate (TOF ≥ 2)",
    sub: "Typical end-of-case reversal.",
  },
  {
    value: "deep",
    label: "Deep (PTC 1–2)",
    sub: "Surgical block returning; TOF count 0.",
  },
  {
    value: "rsi",
    label: "Immediate (post-RSI rocuronium)",
    sub: "Rescue from cannot-intubate-cannot-ventilate.",
  },
];

export function ReversalCalc() {
  const w = useWeight("70");
  const [depth, setDepth] = useState<Depth>("moderate");

  const sugammadexDose = useMemo(() => {
    const mgPerKg = depth === "moderate" ? 2 : depth === "deep" ? 4 : 16;
    return { mgPerKg, totalMg: mgPerKg * w.kg };
  }, [depth, w.kg]);

  // Vials of 200 mg (typical)
  const sugVialMg = 200;
  const sugVialsRaw = sugammadexDose.totalMg / sugVialMg;
  const sugVialsRounded = Math.ceil(sugVialsRaw * 10) / 10;

  const sugMl = sugammadexDose.totalMg / 100; // sugammadex 100 mg/mL

  // Neostigmine (max 5 mg adult; 0.04–0.07 mg/kg)
  const neoLow = 0.04 * w.kg;
  const neoHigh = 0.07 * w.kg;
  const neoCapped = neoHigh > 5;
  const neoUseLow = Math.min(neoLow, 5);
  const neoUseHigh = Math.min(neoHigh, 5);
  // Glycopyrrolate 0.2 mg per 1 mg of neostigmine; typical syringe 0.2 mg/mL
  const glycoLow = neoUseLow * 0.2;
  const glycoHigh = neoUseHigh * 0.2;

  // Neostigmine vial: 1 mg/mL typical
  const neoMlLow = neoUseLow / 1;
  const neoMlHigh = neoUseHigh / 1;
  // Glyco vial: 0.2 mg/mL
  const glycoMlLow = glycoLow / 0.2;
  const glycoMlHigh = glycoHigh / 0.2;

  return (
    <CalculatorShell
      title="NMBA Reversal Calculator"
      description="Sugammadex dose by depth of block, with vials and mL math. Neostigmine + glycopyrrolate alternative with caveats."
      formula="Sugammadex: 2 / 4 / 16 mg/kg by depth   ·   Neostigmine 0.04–0.07 mg/kg + glyco 0.2 mg per 1 mg neo"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <WeightInput
          raw={w.raw}
          unit={w.unit}
          setRaw={w.setRaw}
          setUnit={w.setUnit}
        />
        <div className="rounded-xl border border-border bg-card p-3 flex flex-col">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Computed weight
          </div>
          <div className="mt-0.5 font-semibold text-lg">
            {w.kg > 0 ? `${w.kg.toFixed(1)} kg` : "—"}
          </div>
          <div className="text-[11px] text-muted-foreground mt-0.5">
            Sugammadex dosed to total body weight.
          </div>
        </div>
      </div>

      {/* Depth selector */}
      <div className="mt-6">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          Depth of block
        </div>
        <div className="grid sm:grid-cols-3 gap-2">
          {DEPTH_OPTIONS.map((opt) => {
            const active = depth === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setDepth(opt.value)}
                className={`text-left rounded-xl border p-3 transition-colors ${
                  active
                    ? "border-primary/40 bg-primary/10"
                    : "border-border bg-card hover:bg-muted"
                }`}
              >
                <div className="text-sm font-semibold">{opt.label}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  {opt.sub}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sugammadex result */}
      <section className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <h3 className="text-base font-semibold tracking-tight">Sugammadex</h3>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-medium">
                Dose
              </div>
              <div className="mt-1 text-2xl font-bold tracking-tight">
                {w.kg > 0 ? sugammadexDose.totalMg.toFixed(0) : "—"}{" "}
                <span className="text-sm font-normal text-muted-foreground">mg</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                {sugammadexDose.mgPerKg} mg/kg
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-medium">
                Volume (100 mg/mL)
              </div>
              <div className="mt-1 text-2xl font-bold tracking-tight">
                {w.kg > 0 ? sugMl.toFixed(1) : "—"}{" "}
                <span className="text-sm font-normal text-muted-foreground">mL</span>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-medium">
                200 mg vials
              </div>
              <div className="mt-1 text-2xl font-bold tracking-tight">
                {w.kg > 0 ? sugVialsRounded.toFixed(1) : "—"}
              </div>
              <div className="text-[11px] text-muted-foreground">
                ({Math.ceil(sugVialsRaw)} vials needed)
              </div>
            </div>
          </div>
        </div>
        {depth === "rsi" && (
          <div className="mt-3 rounded-xl border border-warning/30 bg-warning/5 p-3 text-xs flex items-start gap-2">
            <Clock className="h-4 w-4 text-warning mt-0.5 shrink-0" />
            <span>
              After a 16 mg/kg dose, <strong>wait 24 hours</strong> before
              re-administering rocuronium or vecuronium. Use a
              benzylisoquinolinium (cisatracurium) if paralysis needed
              sooner.
            </span>
          </div>
        )}
      </section>

      {/* Neostigmine result */}
      <section className="mt-6">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <h3 className="text-base font-semibold tracking-tight">
            Neostigmine + Glycopyrrolate
          </h3>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Neostigmine
              </div>
              <div className="mt-1 text-xl font-bold tracking-tight">
                {w.kg > 0 ? `${neoUseLow.toFixed(2)} – ${neoUseHigh.toFixed(2)}` : "—"}{" "}
                <span className="text-sm font-normal text-muted-foreground">mg</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                = {w.kg > 0 ? `${neoMlLow.toFixed(1)} – ${neoMlHigh.toFixed(1)}` : "—"} mL
                of 1 mg/mL
              </div>
              {neoCapped && (
                <div className="mt-1 text-[11px] text-warning flex items-start gap-1">
                  <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0" />
                  Capped at 5 mg adult max.
                </div>
              )}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Glycopyrrolate
              </div>
              <div className="mt-1 text-xl font-bold tracking-tight">
                {w.kg > 0 ? `${glycoLow.toFixed(2)} – ${glycoHigh.toFixed(2)}` : "—"}{" "}
                <span className="text-sm font-normal text-muted-foreground">mg</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                = {w.kg > 0 ? `${glycoMlLow.toFixed(1)} – ${glycoMlHigh.toFixed(1)}` : "—"} mL
                of 0.2 mg/mL
              </div>
            </div>
          </div>
          {depth !== "moderate" && (
            <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/5 p-2.5 text-xs text-destructive flex items-start gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 mt-0.5 shrink-0" />
              <span>
                Neostigmine has a <strong>ceiling effect</strong> — it cannot
                reverse deep block (PTC 1–2) or immediate post-RSI paralysis.
                Sugammadex is the appropriate choice at this depth.
              </span>
            </div>
          )}
        </div>
      </section>

      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-4 text-xs text-foreground/85 leading-relaxed">
        <strong>Sugammadex pearls:</strong> renal clearance — caution if CrCl
        &lt; 30. Rare bradycardia / anaphylaxis (~0.3%). Reduces efficacy of
        hormonal contraception for ~7 days (counsel).
      </div>
    </CalculatorShell>
  );
}
