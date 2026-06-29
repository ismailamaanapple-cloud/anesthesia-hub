// Oral Boards trainer — high-yield ABA Standardized Oral Exam (SOE) cases.
//
// Each case carries the scenario "stem," the examiner's phase prompts, and the
// KEY PHRASES a strong candidate is expected to say to demonstrate a safe,
// systematic approach. Content is an original synthesis of standard crisis and
// perioperative management algorithms (ASA, ACLS, MHAUS, etc.) written for
// AnesthesiaHub — it is a study aid, not a substitute for board prep or
// clinical judgment.
//
// Matching tip: keep `text` human-readable; put forgiving keyword variants in
// `alts` so the speech matcher catches natural phrasing.

export type OralKeyPhrase = {
  /** Human-readable canonical phrase shown in the checklist. */
  text: string;
  /** Accepted alternate phrasings / keywords — any match counts as "said." */
  alts?: string[];
  /** Must-say safety/algorithm step; a miss is flagged as a critical miss. */
  critical?: boolean;
};

export type OralCaseSection = {
  title: string;
  /** The examiner's question for this phase. */
  prompt?: string;
  phrases: OralKeyPhrase[];
};

export type OralCase = {
  slug: string;
  number: number;
  category:
    | "Crisis"
    | "Airway"
    | "Cardiac"
    | "Obstetrics"
    | "Pediatrics"
    | "Neuro"
    | "Regional"
    | "Trauma"
    | "Endocrine"
    | "Respiratory";
  title: string;
  tagline: string;
  /** Scenario stem (markdown). */
  stem: string;
  icon: string;
  color: string;
  sections: OralCaseSection[];
};

export const oralBoardCategories = [
  "All",
  "Crisis",
  "Airway",
  "Cardiac",
  "Respiratory",
  "Obstetrics",
  "Pediatrics",
  "Neuro",
  "Regional",
  "Trauma",
  "Endocrine",
] as const;

/** Phrases nearly every crisis answer should contain — reused across cases. */
const SAFETY = {
  callHelp: {
    text: "Call for help",
    alts: ["get help", "call for assistance", "ask for help", "summon help"],
    critical: true,
  } as OralKeyPhrase,
  oxygen: {
    text: "100% oxygen",
    alts: [
      "hundred percent oxygen",
      "fio2 of 1",
      "fio2 1 0",
      "100 percent o2",
      "increase fio2",
      "high flow oxygen",
    ],
    critical: true,
  } as OralKeyPhrase,
  monitors: {
    text: "Confirm ASA standard monitors",
    alts: ["standard monitors", "asa monitors", "pulse oximetry", "capnography", "ekg and blood pressure"],
  } as OralKeyPhrase,
  abc: {
    text: "Assess airway, breathing, circulation",
    alts: ["abcs", "airway breathing circulation", "check the airway"],
  } as OralKeyPhrase,
};

// The case bodies live in oral-boards-data.ts (it imports SAFETY + types from
// here). Import `oralCases` / `getOralCase` from that module.
export { SAFETY };
