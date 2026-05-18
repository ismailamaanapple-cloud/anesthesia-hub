export type CalculatorMeta = {
  slug: string;
  name: string;
  category: "Dosing" | "Patient" | "Airway" | "Fluids & Blood" | "Risk" | "Pediatric";
  description: string;
  icon: string;
};

export const calculators: CalculatorMeta[] = [
  // ---------- DOSING (new headline section) ----------
  {
    slug: "drug-doses",
    name: "Weight-Based Drug Doses",
    category: "Dosing",
    description:
      "Enter patient weight (lb or kg) → induction, NMBA, opioid, vasopressor, reversal, and emergency doses, all at once.",
    icon: "Syringe",
  },
  {
    slug: "local-anesthetic-max",
    name: "Local Anesthetic Max Dose",
    category: "Dosing",
    description:
      "Max mg + max mL by drug, concentration, weight, and whether epinephrine is added.",
    icon: "Crosshair",
  },
  {
    slug: "opioid-converter",
    name: "Opioid Equianalgesic Converter",
    category: "Dosing",
    description:
      "Convert between morphine, fentanyl, hydromorphone, oxycodone — IV and PO — with cross-tolerance reduction.",
    icon: "Repeat",
  },
  {
    slug: "pressor-drip",
    name: "Vasopressor & Inotrope Drip Rates",
    category: "Dosing",
    description:
      "Convert mcg/kg/min (or U/min) ↔ mL/h at standard institutional concentrations.",
    icon: "Activity",
  },
  {
    slug: "reversal",
    name: "NMBA Reversal Calculator",
    category: "Dosing",
    description:
      "Sugammadex dose by depth of block; neostigmine + glycopyrrolate dose with caveats.",
    icon: "RotateCcw",
  },

  // ---------- Existing ----------
  {
    slug: "bmi-bsa",
    name: "BMI & BSA",
    category: "Patient",
    description: "Body Mass Index and Body Surface Area (Mosteller).",
    icon: "Scale",
  },
  {
    slug: "ibw-abw",
    name: "Ideal & Adjusted Body Weight",
    category: "Patient",
    description: "Devine formula IBW and adjusted weight for dosing in obesity.",
    icon: "Scale",
  },
  {
    slug: "mac",
    name: "MAC (Age-Adjusted)",
    category: "Patient",
    description: "Minimum Alveolar Concentration adjusted for patient age.",
    icon: "Activity",
  },
  {
    slug: "ett-lma",
    name: "Pediatric ETT & LMA Sizing",
    category: "Airway",
    description: "Cuffed/uncuffed ETT size & depth; LMA size by weight.",
    icon: "Wind",
  },
  {
    slug: "maintenance-fluids",
    name: "Maintenance Fluids (4-2-1)",
    category: "Fluids & Blood",
    description: "Holliday-Segar hourly maintenance fluid rate.",
    icon: "Droplet",
  },
  {
    slug: "allowable-blood-loss",
    name: "Allowable Blood Loss",
    category: "Fluids & Blood",
    description: "ABL using EBV and starting vs. target hematocrit.",
    icon: "Droplets",
  },
  {
    slug: "peds-emergency",
    name: "Pediatric Emergency Doses",
    category: "Pediatric",
    description: "Weight-based atropine, epi, succinylcholine, defib energy.",
    icon: "Siren",
  },
  {
    slug: "apfel-ponv",
    name: "Apfel PONV Score",
    category: "Risk",
    description: "Estimate post-op nausea & vomiting risk.",
    icon: "Gauge",
  },
  {
    slug: "rcri",
    name: "Revised Cardiac Risk Index",
    category: "Risk",
    description: "Lee criteria for perioperative cardiac complications.",
    icon: "HeartPulse",
  },
];
