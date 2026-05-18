// Canonical references used throughout the site.
// Cite these by key (e.g. "barash8") in chapter, drug, subspecialty data.

export type Reference = {
  id: string;
  citation: string;
  url?: string;
  type: "textbook" | "guideline" | "journal" | "society" | "package-insert" | "web";
};

export const REFERENCES: Record<string, Reference> = {
  // ---- Core textbooks ----
  barash: {
    id: "barash",
    citation:
      "Barash PG, Cullen BF, Stoelting RK, Cahalan MK, Stock MC, Ortega R, Sharar SR, Holt NF. Clinical Anesthesia. 8th ed. Philadelphia: Wolters Kluwer; 2017.",
    type: "textbook",
  },
  miller: {
    id: "miller",
    citation:
      "Gropper MA, Miller RD, Cohen NH, et al., eds. Miller's Anesthesia. 9th ed. Philadelphia: Elsevier; 2020.",
    type: "textbook",
  },
  stoelting: {
    id: "stoelting",
    citation:
      "Flood P, Rathmell JP, Shafer S. Stoelting's Pharmacology and Physiology in Anesthetic Practice. 5th ed. Philadelphia: Wolters Kluwer; 2015.",
    type: "textbook",
  },
  morganMikhail: {
    id: "morganMikhail",
    citation:
      "Butterworth JF IV, Mackey DC, Wasnick JD. Morgan & Mikhail's Clinical Anesthesiology. 6th ed. New York: McGraw-Hill; 2018.",
    type: "textbook",
  },
  jaffe: {
    id: "jaffe",
    citation:
      "Jaffe RA, Schmiesing CA, Golianu B. Anesthesiologist's Manual of Surgical Procedures. 5th ed. Philadelphia: Wolters Kluwer; 2014.",
    type: "textbook",
  },
  gabaCrisis: {
    id: "gabaCrisis",
    citation:
      "Gaba DM, Fish KJ, Howard SK, Burden A. Crisis Management in Anesthesiology. 2nd ed. Philadelphia: Saunders/Elsevier; 2014.",
    type: "textbook",
  },

  // ---- ASA Practice Guidelines & Standards ----
  asaMonitors: {
    id: "asaMonitors",
    citation:
      "American Society of Anesthesiologists. Standards for Basic Anesthetic Monitoring. Last amended October 2020. asahq.org/standards-and-guidelines.",
    url: "https://www.asahq.org/standards-and-practice-parameters/standards-for-basic-anesthetic-monitoring",
    type: "society",
  },
  asaDifficultAirway: {
    id: "asaDifficultAirway",
    citation:
      "Apfelbaum JL, Hagberg CA, Connis RT, et al. 2022 American Society of Anesthesiologists Practice Guidelines for Management of the Difficult Airway. Anesthesiology. 2022;136(1):31-81.",
    url: "https://pubs.asahq.org/anesthesiology/article/136/1/31/117843",
    type: "guideline",
  },
  asaNpo: {
    id: "asaNpo",
    citation:
      "American Society of Anesthesiologists. Practice Guidelines for Preoperative Fasting and the Use of Pharmacologic Agents to Reduce the Risk of Pulmonary Aspiration. Anesthesiology. 2017;126(3):376-393.",
    url: "https://pubs.asahq.org/anesthesiology/article/126/3/376/19733",
    type: "guideline",
  },
  asaTransfusion: {
    id: "asaTransfusion",
    citation:
      "Practice Guidelines for Perioperative Blood Management: An Updated Report by the American Society of Anesthesiologists Task Force. Anesthesiology. 2015;122(2):241-275.",
    url: "https://pubs.asahq.org/anesthesiology/article/122/2/241/13496",
    type: "guideline",
  },
  asaAwareness: {
    id: "asaAwareness",
    citation:
      "American Society of Anesthesiologists. Practice Advisory for Intraoperative Awareness and Brain Function Monitoring. Anesthesiology. 2006;104(4):847-864.",
    type: "guideline",
  },

  // ---- Specialty societies ----
  asraAnticoag: {
    id: "asraAnticoag",
    citation:
      "Horlocker TT, Vandermeuelen E, Kopp SL, et al. Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy: ASRA Evidence-Based Guidelines (Fourth Edition). Reg Anesth Pain Med. 2018;43(3):263-309.",
    url: "https://rapm.bmj.com/content/43/3/263",
    type: "guideline",
  },
  asraLast: {
    id: "asraLast",
    citation:
      "Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine Local Anesthetic Systemic Toxicity Checklist: 2020 Version. Reg Anesth Pain Med. 2021;46(1):81-82.",
    url: "https://www.asra.com/guidelines-articles/guidelines/local-anesthetic-systemic-toxicity",
    type: "guideline",
  },
  mhaus: {
    id: "mhaus",
    citation:
      "Malignant Hyperthermia Association of the United States (MHAUS). Recognition and Treatment of MH. Hotline 1-800-MH-HYPER. mhaus.org.",
    url: "https://www.mhaus.org/",
    type: "society",
  },
  apsf: {
    id: "apsf",
    citation:
      "Anesthesia Patient Safety Foundation (APSF). Newsletter and Safety Resources. apsf.org.",
    url: "https://www.apsf.org/",
    type: "society",
  },
  ssc: {
    id: "ssc",
    citation:
      "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.",
    type: "guideline",
  },
  ardsnet: {
    id: "ardsnet",
    citation:
      "The Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes for acute lung injury and ARDS. N Engl J Med. 2000;342(18):1301-1308.",
    type: "journal",
  },
  acls: {
    id: "acls",
    citation:
      "Panchal AR, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for CPR and ECC. Circulation. 2020;142(16_suppl_2):S366-S468.",
    url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
    type: "guideline",
  },
  soapHypotension: {
    id: "soapHypotension",
    citation:
      "Kinsella SM, Carvalho B, Dyer RA, et al. International consensus statement on the management of hypotension with vasopressors during cesarean section under spinal anaesthesia. Anaesthesia. 2018;73(1):71-92.",
    type: "guideline",
  },

  // ---- Foundational papers ----
  apfel: {
    id: "apfel",
    citation:
      "Apfel CC, Läärä E, Koivuranta M, Greim CA, Roewer N. A simplified risk score for predicting postoperative nausea and vomiting. Anesthesiology. 1999;91(3):693-700.",
    type: "journal",
  },
  apfelImpact: {
    id: "apfelImpact",
    citation:
      "Apfel CC, Korttila K, Abdalla M, et al. A factorial trial of six interventions for the prevention of postoperative nausea and vomiting (IMPACT). N Engl J Med. 2004;350(24):2441-2451.",
    type: "journal",
  },
  rcri: {
    id: "rcri",
    citation:
      "Lee TH, Marcantonio ER, Mangione CM, et al. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999;100(10):1043-1049.",
    type: "journal",
  },
  hollidaySegar: {
    id: "hollidaySegar",
    citation:
      "Holliday MA, Segar WE. The maintenance need for water in parenteral fluid therapy. Pediatrics. 1957;19(5):823-832.",
    type: "journal",
  },
  devine: {
    id: "devine",
    citation:
      "Devine BJ. Gentamicin therapy. Drug Intell Clin Pharm. 1974;8:650-655.",
    type: "journal",
  },
  mosteller: {
    id: "mosteller",
    citation:
      "Mosteller RD. Simplified calculation of body-surface area. N Engl J Med. 1987;317(17):1098.",
    type: "journal",
  },
  mapleson: {
    id: "mapleson",
    citation:
      "Mapleson WW. Effect of age on MAC in humans: a meta-analysis. Br J Anaesth. 1996;76(2):179-185.",
    type: "journal",
  },
  janmahasatian: {
    id: "janmahasatian",
    citation:
      "Janmahasatian S, Duffull SB, Ash S, Ward LC, Byrne NM, Green B. Quantification of lean bodyweight. Clin Pharmacokinet. 2005;44(10):1051-1065.",
    type: "journal",
  },
  proact: {
    id: "proact",
    citation:
      "Cook TM, Woodall N, Frerk C; Fourth National Audit Project. Major complications of airway management in the UK (NAP4). Br J Anaesth. 2011;106(5):617-642.",
    type: "journal",
  },
  classenAbx: {
    id: "classenAbx",
    citation:
      "Classen DC, Evans RS, Pestotnik SL, Horn SD, Menlove RL, Burke JP. The timing of prophylactic administration of antibiotics and the risk of surgical-wound infection. N Engl J Med. 1992;326(5):281-286.",
    type: "journal",
  },
  shcAbx: {
    id: "shcAbx",
    citation:
      "Stanford Health Care. Surgical Antimicrobial Prophylaxis Guidelines (2017). Stanford Antimicrobial Safety & Sustainability Program.",
    type: "guideline",
  },
  bratzler: {
    id: "bratzler",
    citation:
      "Bratzler DW, Dellinger EP, Olsen KM, et al. Clinical practice guidelines for antimicrobial prophylaxis in surgery. Am J Health Syst Pharm. 2013;70(3):195-283.",
    type: "guideline",
  },
  prismMassiveTx: {
    id: "prismMassiveTx",
    citation:
      "Holcomb JB, Tilley BC, Baraniuk S, et al. Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio and Mortality in Patients With Severe Trauma: PROPPR Randomized Clinical Trial. JAMA. 2015;313(5):471-482.",
    type: "journal",
  },
  trali: {
    id: "trali",
    citation:
      "Vlaar APJ, Toy P, Fung M, et al. A consensus redefinition of transfusion-related acute lung injury. Transfusion. 2019;59(7):2465-2476.",
    type: "journal",
  },
  weinbergLipid: {
    id: "weinbergLipid",
    citation:
      "Weinberg GL. Treatment of local anesthetic systemic toxicity (LAST). Reg Anesth Pain Med. 2010;35(2):188-193.",
    type: "journal",
  },
  groudineRsi: {
    id: "groudineRsi",
    citation:
      "Sajayan A, Wicker J, Ungureanu N, Mendonca C, Kimani PK. Current practice of rapid sequence induction of anaesthesia in the UK — a national survey. Br J Anaesth. 2016;117 Suppl 1:i69-i74.",
    type: "journal",
  },
  fasterTtm: {
    id: "fasterTtm",
    citation:
      "Dankiewicz J, Cronberg T, Lilja G, et al. Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest. N Engl J Med. 2021;384(24):2283-2294.",
    type: "journal",
  },
  // ---- Stanford CA-1 source ----
  stanfordCa1: {
    id: "stanfordCa1",
    citation:
      "Adriano A, Morris R, eds. 2021 CA-1 Tutorial Textbook (15th Ed.). Stanford University Medical Center, Department of Anesthesiology.",
    type: "textbook",
  },
  // Stanford Emergency Manual
  stanfordEM: {
    id: "stanfordEM",
    citation:
      "Stanford Anesthesia Cognitive Aid Group. Stanford Anesthesia Emergency Manual. emergencymanual.stanford.edu.",
    url: "http://emergencymanual.stanford.edu/",
    type: "web",
  },
};

export function refs(ids: string[]): Reference[] {
  return ids.map((id) => REFERENCES[id]).filter(Boolean);
}
