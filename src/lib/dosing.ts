// Centralized weight-based dosing definitions used by the drug-doses calculator
// AND the in-line quick-dose widget on drug detail pages.

export type DoseRule = {
  /** Display name */
  drug: string;
  /** Optional brand */
  brand?: string;
  /** Indication / label shown next to the dose */
  label: string;
  /** Lower mg/kg (or mcg/kg if unitsMicro) */
  doseLow: number;
  /** Upper mg/kg */
  doseHigh: number;
  /** "mg/kg" by default; set "mcg/kg" for micro-dosed drugs */
  doseUnit?: "mg/kg" | "mcg/kg" | "U/kg" | "mL/kg";
  /** Maximum single dose (mg) */
  maxAdult?: number;
  /** Standard concentration in mg/mL for syringe math */
  concMgPerMl?: number;
  /** Or mcg/mL */
  concMcgPerMl?: number;
  /** Body-weight basis */
  weightBasis?: "TBW" | "IBW" | "LBW" | "ABW";
  /** Optional notes */
  notes?: string;
};

export type DoseCategory = {
  category: string;
  color: string; // tailwind from-* to-*
  rules: DoseRule[];
};

export const DOSE_CATEGORIES: DoseCategory[] = [
  {
    category: "Induction agents",
    color: "from-violet-500 to-fuchsia-500",
    rules: [
      {
        drug: "Propofol",
        label: "Induction",
        doseLow: 1.5,
        doseHigh: 2.5,
        doseUnit: "mg/kg",
        concMgPerMl: 10,
        weightBasis: "LBW",
        notes: "↓ 25–50% in elderly, hypovolemic, frail.",
      },
      {
        drug: "Propofol",
        label: "Maintenance infusion",
        doseLow: 100,
        doseHigh: 200,
        doseUnit: "mcg/kg",
        concMgPerMl: 10,
        weightBasis: "TBW",
        notes: "mcg/kg/MIN. Sedation 25–75 mcg/kg/min.",
      },
      {
        drug: "Etomidate",
        label: "Induction",
        doseLow: 0.2,
        doseHigh: 0.3,
        doseUnit: "mg/kg",
        concMgPerMl: 2,
        weightBasis: "TBW",
        notes: "Hemodynamically stable; transient adrenal suppression.",
      },
      {
        drug: "Ketamine",
        label: "IV induction",
        doseLow: 1,
        doseHigh: 2,
        doseUnit: "mg/kg",
        concMgPerMl: 50,
        weightBasis: "TBW",
        notes: "IM 4–6 mg/kg. Avoid in active psychosis, severe CAD.",
      },
      {
        drug: "Ketamine",
        label: "Analgesic infusion",
        doseLow: 0.1,
        doseHigh: 0.5,
        doseUnit: "mg/kg",
        concMgPerMl: 1,
        weightBasis: "TBW",
        notes: "mg/kg/HOUR.",
      },
      {
        drug: "Midazolam",
        label: "Premedication",
        doseLow: 0.02,
        doseHigh: 0.05,
        doseUnit: "mg/kg",
        maxAdult: 2,
        concMgPerMl: 1,
        weightBasis: "TBW",
        notes: "Typical adult: 1–2 mg IV. ↓ in elderly.",
      },
      {
        drug: "Dexmedetomidine",
        label: "Loading dose",
        doseLow: 0.5,
        doseHigh: 1,
        doseUnit: "mcg/kg",
        concMcgPerMl: 4,
        weightBasis: "TBW",
        notes: "Over 10 min. Often omitted to avoid hemodynamic swings.",
      },
    ],
  },
  {
    category: "Neuromuscular blockers",
    color: "from-rose-500 to-orange-500",
    rules: [
      {
        drug: "Succinylcholine",
        label: "Intubation",
        doseLow: 1,
        doseHigh: 1.5,
        doseUnit: "mg/kg",
        concMgPerMl: 20,
        weightBasis: "TBW",
        notes: "Peds infants 2 mg/kg. IM 3–4 mg/kg.",
      },
      {
        drug: "Rocuronium",
        label: "Intubation",
        doseLow: 0.6,
        doseHigh: 0.6,
        doseUnit: "mg/kg",
        concMgPerMl: 10,
        weightBasis: "IBW",
        notes: "RSI: 1.2 mg/kg.",
      },
      {
        drug: "Rocuronium",
        label: "RSI dose",
        doseLow: 1.2,
        doseHigh: 1.2,
        doseUnit: "mg/kg",
        concMgPerMl: 10,
        weightBasis: "IBW",
      },
      {
        drug: "Vecuronium",
        label: "Intubation",
        doseLow: 0.08,
        doseHigh: 0.1,
        doseUnit: "mg/kg",
        concMgPerMl: 1,
        weightBasis: "IBW",
      },
      {
        drug: "Cisatracurium",
        label: "Intubation",
        doseLow: 0.15,
        doseHigh: 0.2,
        doseUnit: "mg/kg",
        concMgPerMl: 2,
        weightBasis: "IBW",
        notes: "Organ-independent (Hofmann). Not reversed by sugammadex.",
      },
    ],
  },
  {
    category: "Opioids",
    color: "from-amber-500 to-orange-500",
    rules: [
      {
        drug: "Fentanyl",
        label: "Induction adjunct",
        doseLow: 1,
        doseHigh: 3,
        doseUnit: "mcg/kg",
        concMcgPerMl: 50,
        weightBasis: "TBW",
        notes: "Maintenance 0.5–2 mcg/kg PRN.",
      },
      {
        drug: "Hydromorphone",
        label: "Post-op analgesia",
        doseLow: 0.005,
        doseHigh: 0.02,
        doseUnit: "mg/kg",
        maxAdult: 1,
        concMgPerMl: 1,
        weightBasis: "TBW",
        notes: "Adult: 0.2–1 mg IV; peak 15 min.",
      },
      {
        drug: "Morphine",
        label: "Post-op analgesia",
        doseLow: 0.05,
        doseHigh: 0.1,
        doseUnit: "mg/kg",
        maxAdult: 5,
        concMgPerMl: 1,
        weightBasis: "TBW",
        notes: "Histamine release; avoid M6G accumulation in renal failure.",
      },
      {
        drug: "Remifentanil",
        label: "Infusion",
        doseLow: 0.05,
        doseHigh: 0.3,
        doseUnit: "mcg/kg",
        concMcgPerMl: 50,
        weightBasis: "IBW",
        notes: "mcg/kg/MIN. Always have longer-acting opioid on board.",
      },
      {
        drug: "Sufentanil",
        label: "Infusion",
        doseLow: 0.1,
        doseHigh: 0.5,
        doseUnit: "mcg/kg",
        concMcgPerMl: 5,
        weightBasis: "IBW",
        notes: "mcg/kg/HOUR.",
      },
    ],
  },
  {
    category: "Reversal agents",
    color: "from-blue-500 to-cyan-500",
    rules: [
      {
        drug: "Sugammadex",
        label: "Routine reversal (TOF ≥ 2)",
        doseLow: 2,
        doseHigh: 2,
        doseUnit: "mg/kg",
        concMgPerMl: 100,
        weightBasis: "TBW",
      },
      {
        drug: "Sugammadex",
        label: "Deep reversal (PTC 1–2)",
        doseLow: 4,
        doseHigh: 4,
        doseUnit: "mg/kg",
        concMgPerMl: 100,
        weightBasis: "TBW",
      },
      {
        drug: "Sugammadex",
        label: "Immediate (post-RSI roc)",
        doseLow: 16,
        doseHigh: 16,
        doseUnit: "mg/kg",
        concMgPerMl: 100,
        weightBasis: "TBW",
        notes: "Wait 24 h before re-dosing rocuronium.",
      },
      {
        drug: "Neostigmine",
        label: "Reversal (TOF ≥ 2)",
        doseLow: 0.04,
        doseHigh: 0.07,
        doseUnit: "mg/kg",
        maxAdult: 5,
        concMgPerMl: 1,
        weightBasis: "TBW",
        notes: "Co-admin glycopyrrolate 0.2 mg per 1 mg neostigmine.",
      },
      {
        drug: "Glycopyrrolate",
        label: "With neostigmine",
        doseLow: 0.008,
        doseHigh: 0.014,
        doseUnit: "mg/kg",
        maxAdult: 1,
        concMgPerMl: 0.2,
        weightBasis: "TBW",
        notes: "Approximately 0.2 mg per 1 mg neostigmine.",
      },
      {
        drug: "Naloxone",
        label: "Opioid reversal (titrate)",
        doseLow: 0.0005,
        doseHigh: 0.002,
        doseUnit: "mg/kg",
        concMgPerMl: 0.4,
        weightBasis: "TBW",
        notes: "Titrate 0.04 mg increments to restore RR without abolishing analgesia.",
      },
      {
        drug: "Flumazenil",
        label: "Benzo reversal",
        doseLow: 0.002,
        doseHigh: 0.01,
        doseUnit: "mg/kg",
        maxAdult: 1,
        concMgPerMl: 0.1,
        weightBasis: "TBW",
        notes: "Avoid in chronic benzo use (seizure risk).",
      },
    ],
  },
  {
    category: "Vasopressors & emergency drugs",
    color: "from-red-500 to-pink-500",
    rules: [
      {
        drug: "Phenylephrine",
        label: "Bolus",
        doseLow: 1,
        doseHigh: 5,
        doseUnit: "mcg/kg",
        concMcgPerMl: 100,
        weightBasis: "TBW",
        notes: "Adult: 50–200 mcg IV. Pure α1.",
      },
      {
        drug: "Ephedrine",
        label: "Bolus",
        doseLow: 0.1,
        doseHigh: 0.2,
        doseUnit: "mg/kg",
        maxAdult: 10,
        concMgPerMl: 5,
        weightBasis: "TBW",
        notes: "Adult: 5–10 mg IV.",
      },
      {
        drug: "Epinephrine (anaphylaxis IM)",
        label: "Anaphylaxis IM",
        doseLow: 0.01,
        doseHigh: 0.01,
        doseUnit: "mg/kg",
        maxAdult: 0.5,
        concMgPerMl: 1,
        weightBasis: "TBW",
        notes: "Anterolateral thigh, repeat q 5–15 min if needed.",
      },
      {
        drug: "Epinephrine (arrest)",
        label: "ACLS arrest",
        doseLow: 0.01,
        doseHigh: 0.01,
        doseUnit: "mg/kg",
        maxAdult: 1,
        concMgPerMl: 0.1,
        weightBasis: "TBW",
        notes: "1 mg IV adult q 3–5 min in arrest.",
      },
      {
        drug: "Atropine",
        label: "Bradycardia",
        doseLow: 0.01,
        doseHigh: 0.02,
        doseUnit: "mg/kg",
        maxAdult: 1,
        concMgPerMl: 0.4,
        weightBasis: "TBW",
        notes: "Peds 0.02 mg/kg, min 0.1 mg, max 0.5 mg single dose.",
      },
      {
        drug: "Calcium chloride",
        label: "Hyperkalemia / hypotension",
        doseLow: 10,
        doseHigh: 20,
        doseUnit: "mg/kg",
        maxAdult: 1000,
        concMgPerMl: 100,
        weightBasis: "TBW",
        notes: "Central line preferred. Adult: 1 g.",
      },
      {
        drug: "Tranexamic acid",
        label: "Trauma / hemorrhage",
        doseLow: 15,
        doseHigh: 15,
        doseUnit: "mg/kg",
        maxAdult: 1000,
        concMgPerMl: 100,
        weightBasis: "TBW",
        notes: "Adult: 1 g over 10 min within 3 h of injury; then 1 g over 8 h.",
      },
    ],
  },
  {
    category: "Antiemetics & analgesic adjuncts",
    color: "from-lime-500 to-emerald-500",
    rules: [
      {
        drug: "Ondansetron",
        label: "PONV prophylaxis",
        doseLow: 0.05,
        doseHigh: 0.1,
        doseUnit: "mg/kg",
        maxAdult: 4,
        concMgPerMl: 2,
        weightBasis: "TBW",
        notes: "Adult: 4 mg IV at end of case.",
      },
      {
        drug: "Dexamethasone",
        label: "PONV prophylaxis",
        doseLow: 0.1,
        doseHigh: 0.15,
        doseUnit: "mg/kg",
        maxAdult: 8,
        concMgPerMl: 4,
        weightBasis: "TBW",
        notes: "Give post-induction (perineal itch if awake).",
      },
      {
        drug: "Acetaminophen IV",
        label: "Multimodal",
        doseLow: 15,
        doseHigh: 15,
        doseUnit: "mg/kg",
        maxAdult: 1000,
        concMgPerMl: 10,
        weightBasis: "TBW",
        notes: "Max 4 g / 24 h adult.",
      },
      {
        drug: "Ketorolac",
        label: "NSAID analgesia",
        doseLow: 0.25,
        doseHigh: 0.5,
        doseUnit: "mg/kg",
        maxAdult: 30,
        concMgPerMl: 15,
        weightBasis: "TBW",
        notes: "Adult: 15–30 mg IV. Avoid in renal failure, bleeding risk.",
      },
      {
        drug: "Lidocaine (anti-cough)",
        label: "Pre-intubation",
        doseLow: 1,
        doseHigh: 1.5,
        doseUnit: "mg/kg",
        maxAdult: 100,
        concMgPerMl: 20,
        weightBasis: "TBW",
        notes: "Blunts intubation response; also analgesic infusion 1 mg/kg/h.",
      },
    ],
  },
];

/** Calculate a single dose result for a rule and weight (kg). */
export function calculateDose(rule: DoseRule, kg: number) {
  const low = rule.doseLow * kg;
  const high = rule.doseHigh * kg;
  const lowDisplay = formatDose(low, rule.doseUnit ?? "mg/kg");
  const highDisplay = formatDose(high, rule.doseUnit ?? "mg/kg");
  const rangeDisplay =
    rule.doseLow === rule.doseHigh ? lowDisplay : `${lowDisplay} – ${highDisplay}`;

  let mlLow: number | undefined;
  let mlHigh: number | undefined;
  let mlUnit = "mL";

  if (rule.concMgPerMl && (rule.doseUnit === "mg/kg" || !rule.doseUnit)) {
    mlLow = low / rule.concMgPerMl;
    mlHigh = high / rule.concMgPerMl;
  } else if (rule.concMcgPerMl && rule.doseUnit === "mcg/kg") {
    mlLow = low / rule.concMcgPerMl;
    mlHigh = high / rule.concMcgPerMl;
  } else if (rule.concMgPerMl && rule.doseUnit === "mcg/kg") {
    // dose is mcg, conc is mg/mL → 1 mg/mL = 1000 mcg/mL
    mlLow = low / (rule.concMgPerMl * 1000);
    mlHigh = high / (rule.concMgPerMl * 1000);
  }

  const capped =
    rule.maxAdult && (high > rule.maxAdult || low > rule.maxAdult);

  return {
    rangeDisplay,
    mlLow,
    mlHigh,
    mlUnit,
    capped,
    cappedAt: rule.maxAdult,
    concDisplay: rule.concMgPerMl
      ? `${rule.concMgPerMl} mg/mL`
      : rule.concMcgPerMl
      ? `${rule.concMcgPerMl} mcg/mL`
      : undefined,
  };
}

function formatDose(value: number, unit: string) {
  if (!isFinite(value) || value < 0) return "—";
  if (value === 0) return "0";
  const digits = value < 1 ? 2 : value < 10 ? 1 : 0;
  return `${value.toFixed(digits)} ${unitLabel(unit)}`;
}

function unitLabel(unit: string) {
  if (unit === "mg/kg") return "mg";
  if (unit === "mcg/kg") return "mcg";
  if (unit === "U/kg") return "U";
  if (unit === "mL/kg") return "mL";
  return "mg";
}
