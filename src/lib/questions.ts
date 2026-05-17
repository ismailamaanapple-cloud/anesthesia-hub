export type Question = {
  id: string;
  category:
    | "Pharmacology"
    | "Physiology"
    | "Regional"
    | "Cardiac"
    | "Obstetric"
    | "Pediatric"
    | "Critical Care"
    | "Airway"
    | "Equipment";
  difficulty: "Easy" | "Medium" | "Hard";
  stem: string;
  choices: string[];
  answer: number; // index in choices
  explanation: string;
};

export const questions: Question[] = [
  {
    id: "q1",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "A 70-kg adult is induced with propofol. What is the appropriate IV induction dose range?",
    choices: ["0.1–0.3 mg/kg", "0.5–1 mg/kg", "1.5–2.5 mg/kg", "5–10 mg/kg"],
    answer: 2,
    explanation:
      "Standard adult propofol induction dose is 1.5–2.5 mg/kg IV. Reduce by 25–50% in elderly, hypovolemic, or hemodynamically tenuous patients.",
  },
  {
    id: "q2",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which induction agent is best suited for a hypotensive trauma patient requiring emergent intubation?",
    choices: ["Propofol", "Etomidate", "Thiopental", "Midazolam"],
    answer: 1,
    explanation:
      "Etomidate (0.2–0.3 mg/kg) has minimal hemodynamic effects, making it ideal in hemodynamically unstable patients. Ketamine is another acceptable option. Single-dose adrenal suppression is rarely clinically significant.",
  },
  {
    id: "q3",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which of the following is an absolute contraindication to succinylcholine?",
    choices: [
      "Penetrating eye injury",
      "Family history of malignant hyperthermia",
      "Pregnancy",
      "Asthma",
    ],
    answer: 1,
    explanation:
      "Personal or family history of MH is an absolute contraindication. Other contraindications include hyperkalemia, major burns >24–48 h, denervation injury, prolonged immobility, and Duchenne muscular dystrophy.",
  },
  {
    id: "q4",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "The dose of sugammadex for routine reversal of rocuronium at TOF ≥2 is:",
    choices: ["1 mg/kg", "2 mg/kg", "4 mg/kg", "16 mg/kg"],
    answer: 1,
    explanation:
      "2 mg/kg for routine reversal (TOF ≥2), 4 mg/kg for deep block (PTC 1–2), 16 mg/kg for immediate reversal after a high-dose roc RSI.",
  },
  {
    id: "q5",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A patient develops cardiac arrest 5 minutes after a peripheral nerve block with bupivacaine. After ACLS is started, what is the most appropriate specific intervention?",
    choices: [
      "Epinephrine 1 mg q3 min until ROSC",
      "Amiodarone 300 mg IV bolus",
      "20% lipid emulsion 1.5 mL/kg bolus then 0.25 mL/kg/min",
      "Sodium bicarbonate 1 mEq/kg",
    ],
    answer: 2,
    explanation:
      "Local anesthetic systemic toxicity is treated with 20% lipid emulsion 1.5 mL/kg bolus followed by 0.25 mL/kg/min infusion. Reduce epinephrine doses to ≤1 mcg/kg, and AVOID vasopressin, calcium-channel blockers, β-blockers, and local anesthetic antiarrhythmics.",
  },
  {
    id: "q6",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "What is the appropriate uncuffed ETT size for a 4-year-old child?",
    choices: ["3.5", "4.5", "5.0", "6.0"],
    answer: 2,
    explanation:
      "Uncuffed ETT size = (age/4) + 4 = (4/4) + 4 = 5.0. For cuffed: (age/4) + 3.5.",
  },
  {
    id: "q7",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Using the 4-2-1 rule, what is the hourly maintenance fluid rate for a 25-kg child?",
    choices: ["40 mL/h", "55 mL/h", "65 mL/h", "100 mL/h"],
    answer: 2,
    explanation:
      "4×10 + 2×10 + 1×5 = 40 + 20 + 5 = 65 mL/h.",
  },
  {
    id: "q8",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "A parturient develops hypotension 5 minutes after spinal anesthesia for C-section. Which vasopressor is first-line?",
    choices: ["Ephedrine", "Epinephrine", "Phenylephrine", "Norepinephrine"],
    answer: 2,
    explanation:
      "Phenylephrine is first-line for spinal-induced hypotension at C-section. Compared with ephedrine, it produces less fetal acidosis. A prophylactic infusion (25–50 mcg/min) is increasingly standard.",
  },
  {
    id: "q9",
    category: "Obstetric",
    difficulty: "Easy",
    stem: "Left uterine displacement should be maintained beyond which gestational age?",
    choices: ["12 weeks", "20 weeks", "28 weeks", "36 weeks"],
    answer: 1,
    explanation:
      "Aortocaval compression becomes significant after ~20 weeks gestation. Maintain at least 15° of left uterine displacement.",
  },
  {
    id: "q10",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "What is the target ACT (seconds) before initiating cardiopulmonary bypass?",
    choices: [">200", ">300", ">400", ">480"],
    answer: 3,
    explanation:
      "Most institutions target ACT >480 seconds (some >400) before going on CPB. Heparin 300–400 U/kg is the typical loading dose.",
  },
  {
    id: "q11",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "A patient cannot wean from CPB despite full inotropic support. TEE shows a dilated, hypokinetic right ventricle with leftward septal bowing. Best next step?",
    choices: [
      "Increase systemic vasopressor",
      "Inhaled pulmonary vasodilator (epoprostenol or NO)",
      "Methylene blue 1.5 mg/kg",
      "Defibrillate",
    ],
    answer: 1,
    explanation:
      "RV failure with elevated PVR. Inhaled pulmonary vasodilators (NO 20–40 ppm or inhaled epoprostenol) selectively reduce PVR without systemic hypotension. Combine with inotropic support (milrinone, epinephrine) and consider mechanical support if persistent.",
  },
  {
    id: "q12",
    category: "Regional",
    difficulty: "Medium",
    stem: "Phrenic nerve palsy occurs in approximately what proportion of patients receiving an interscalene brachial plexus block?",
    choices: ["10%", "30%", "60%", "100%"],
    answer: 3,
    explanation:
      "Hemidiaphragmatic paresis occurs in ~100% of interscalene blocks. Avoid in patients with severe COPD, contralateral diaphragmatic dysfunction, or limited pulmonary reserve.",
  },
  {
    id: "q13",
    category: "Regional",
    difficulty: "Easy",
    stem: "Maximum dose of lidocaine with epinephrine is:",
    choices: ["3 mg/kg", "4.5 mg/kg", "7 mg/kg", "10 mg/kg"],
    answer: 2,
    explanation:
      "7 mg/kg with epinephrine; 4.5 mg/kg plain. Always verify weight and concentration before dosing.",
  },
  {
    id: "q14",
    category: "Airway",
    difficulty: "Medium",
    stem: "Which feature of pediatric airway anatomy is most clinically significant compared to adults?",
    choices: [
      "Posteriorly placed larynx",
      "Narrowest at the cricoid cartilage in children <8 yo",
      "Long, narrow epiglottis until age 5",
      "Vocal cords angled superiorly",
    ],
    answer: 1,
    explanation:
      "In children younger than ~8 years, the cricoid cartilage is the narrowest point (functionally, despite some MRI data suggesting glottic narrowing). This is why cuffed tube selection and pressure monitoring matter — overcuff can cause subglottic edema.",
  },
  {
    id: "q15",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "First-line vasopressor for septic shock is:",
    choices: ["Phenylephrine", "Dopamine", "Norepinephrine", "Vasopressin"],
    answer: 2,
    explanation:
      "Norepinephrine is first-line per Surviving Sepsis. Add vasopressin (fixed 0.03 U/min) if escalating norepinephrine needs. Avoid dopamine due to arrhythmia and mortality signal.",
  },
  {
    id: "q16",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Lung-protective ventilation in ARDS targets tidal volumes of:",
    choices: ["4 mL/kg actual body weight", "6 mL/kg predicted body weight", "8 mL/kg actual body weight", "10 mL/kg predicted body weight"],
    answer: 1,
    explanation:
      "ARDSnet — 6 mL/kg PBW with plateau pressure <30 cmH2O. Driving pressure <15 cmH2O is increasingly emphasized.",
  },
  {
    id: "q17",
    category: "Physiology",
    difficulty: "Medium",
    stem: "MAC in a healthy adult is decreased by all of the following EXCEPT:",
    choices: ["Pregnancy", "Hyperthermia", "Chronic ethanol use", "Acute opioid administration"],
    answer: 2,
    explanation:
      "Chronic ethanol use INCREASES MAC. Pregnancy, hypothermia, hyperthermia (mild), opioids, benzodiazepines, hypotension, hyponatremia, anemia, and age all decrease MAC.",
  },
  {
    id: "q18",
    category: "Physiology",
    difficulty: "Easy",
    stem: "Cerebral perfusion pressure (CPP) equals:",
    choices: ["MAP", "MAP − ICP", "MAP − CVP", "MAP × HR"],
    answer: 1,
    explanation:
      "CPP = MAP − ICP (or CVP, whichever is greater). In TBI, target CPP 60–70 mmHg.",
  },
  {
    id: "q19",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A patient with chronic alcohol abuse undergoes elective surgery. Compared to a healthy patient, MAC of volatile agent is:",
    choices: ["Increased", "Decreased", "Unchanged", "Variable depending on age"],
    answer: 0,
    explanation:
      "Chronic alcohol use causes upregulation that INCREASES MAC requirements (cross-tolerance). Acute intoxication, by contrast, decreases MAC.",
  },
  {
    id: "q20",
    category: "Equipment",
    difficulty: "Easy",
    stem: "The pin index safety system on a medical gas cylinder is designed primarily to:",
    choices: [
      "Prevent leakage at the yoke",
      "Prevent attachment of the wrong gas cylinder to the machine",
      "Indicate cylinder pressure",
      "Allow rapid cylinder change",
    ],
    answer: 1,
    explanation:
      "PISS prevents incorrect gas cylinder attachment. Each gas has a unique pin pattern.",
  },
  {
    id: "q21",
    category: "Equipment",
    difficulty: "Medium",
    stem: "The minimum oxygen flow that the modern anesthesia machine permits is set to:",
    choices: ["100 mL/min", "150 mL/min", "200 mL/min", "300 mL/min"],
    answer: 2,
    explanation:
      "Hypoxic guard / minimum O2 flow is typically 200 mL/min, preventing delivery of an entirely hypoxic gas mixture. Many machines also prevent N2O without proportional O2.",
  },
  {
    id: "q22",
    category: "Airway",
    difficulty: "Medium",
    stem: "After several failed laryngoscopy attempts, an LMA is placed and ventilation is adequate. The Difficult Airway Algorithm next step is:",
    choices: [
      "Continue mask ventilation and surgery",
      "Commit to surgery via LMA only if surgery is brief and patient stable; otherwise consider waking patient",
      "Attempt blind intubation via LMA",
      "Proceed to surgical airway",
    ],
    answer: 1,
    explanation:
      "Per ASA Difficult Airway Algorithm, if LMA ventilation is adequate, consider feasibility of surgery via supraglottic airway, awakening the patient, or proceeding with fiberoptic intubation through the LMA. Surgical airway is reserved for cannot-intubate-cannot-ventilate.",
  },
  {
    id: "q23",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Which neuromuscular blocker is eliminated primarily by Hofmann degradation?",
    choices: ["Vecuronium", "Rocuronium", "Cisatracurium", "Pancuronium"],
    answer: 2,
    explanation:
      "Cisatracurium undergoes organ-independent Hofmann elimination, making it ideal for hepatic and renal failure patients.",
  },
  {
    id: "q24",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "A patient post-cardiac arrest is admitted to ICU. Targeted temperature management should target:",
    choices: ["32°C × 12 h", "32–36°C × 24 h", "36°C × 72 h", "Active rewarming to 38°C"],
    answer: 1,
    explanation:
      "Current guidelines recommend TTM 32–36°C × 24 h followed by controlled rewarming and avoidance of fever for at least 72 h.",
  },
  {
    id: "q25",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "ASA fasting guidelines recommend NPO for clear liquids for at least:",
    choices: ["30 min", "1 h", "2 h", "6 h"],
    answer: 2,
    explanation:
      "Clear liquids 2 h, breast milk 4 h, formula/light meal 6 h, fatty meal 8 h.",
  },
  {
    id: "q26",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "A parturient develops sudden hypotension, hypoxia, and DIC after artificial rupture of membranes. Most likely diagnosis?",
    choices: ["Amniotic fluid embolism", "Pulmonary embolism", "Eclampsia", "Septic shock"],
    answer: 0,
    explanation:
      "Classic triad of AFE: sudden hypotension/cardiovascular collapse, hypoxia, and coagulopathy/DIC in a peripartum patient. Management is supportive — resuscitate, deliver, transfuse aggressively.",
  },
  {
    id: "q27",
    category: "Regional",
    difficulty: "Medium",
    stem: "Per ASRA guidelines, neuraxial blockade in a patient on therapeutic enoxaparin should wait at least:",
    choices: ["4 hours", "12 hours", "24 hours", "48 hours"],
    answer: 2,
    explanation:
      "Therapeutic LMWH (1 mg/kg q12h) — wait at least 24 hours before neuraxial puncture or catheter removal. Prophylactic dose: wait 12 hours.",
  },
  {
    id: "q28",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "During induction of a patient with severe aortic stenosis, which hemodynamic goal is MOST important?",
    choices: [
      "Maintain low heart rate, low SVR",
      "Maintain normal sinus rhythm, adequate preload, normal-to-high SVR",
      "Maintain tachycardia to maximize cardiac output",
      "Maintain low afterload to ease forward flow",
    ],
    answer: 1,
    explanation:
      "AS: 'Full, slow, tight, and in rhythm.' Avoid tachycardia (impairs diastolic filling and coronary perfusion), maintain preload and SVR, preserve sinus rhythm (atrial kick essential).",
  },
  {
    id: "q29",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "A patient receives 5 mg morphine IV. The approximate equivalent dose of IV hydromorphone is:",
    choices: ["0.2 mg", "0.75 mg", "2 mg", "5 mg"],
    answer: 1,
    explanation:
      "Conversion: hydromorphone IV is ~5–7× more potent than morphine IV. 5 mg morphine ≈ 0.75–1 mg hydromorphone.",
  },
  {
    id: "q30",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which of the following shifts the oxyhemoglobin dissociation curve to the RIGHT?",
    choices: [
      "Hypothermia",
      "Decreased 2,3-DPG",
      "Alkalosis",
      "Increased CO2 / acidosis",
    ],
    answer: 3,
    explanation:
      "Right shift = unloading O2 at tissues. Caused by ↑CO2, ↓pH (acidosis), ↑temperature, ↑2,3-DPG (CADET face right).",
  },
];

export const categories = [
  "All",
  "Pharmacology",
  "Physiology",
  "Regional",
  "Cardiac",
  "Obstetric",
  "Pediatric",
  "Critical Care",
  "Airway",
  "Equipment",
] as const;
