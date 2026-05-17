export type CalculatorMeta = {
  slug: string;
  name: string;
  category: "Patient" | "Airway" | "Fluids & Blood" | "Risk" | "Pediatric";
  description: string;
  icon: string;
};

export const calculators: CalculatorMeta[] = [
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
