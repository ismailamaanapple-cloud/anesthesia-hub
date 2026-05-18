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
    | "Equipment"
    | "Monitoring"
    | "Anatomy"
    | "Perioperative";
  difficulty: "Easy" | "Medium" | "Hard";
  stem: string;
  choices: string[];
  answer: number; // index in choices
  explanation: string;
};

export const questions: Question[] = [
  // ============ ORIGINAL 30 ============
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
    choices: ["Penetrating eye injury", "Family history of malignant hyperthermia", "Pregnancy", "Asthma"],
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
    choices: ["Epinephrine 1 mg q3 min until ROSC", "Amiodarone 300 mg IV bolus", "20% lipid emulsion 1.5 mL/kg bolus then 0.25 mL/kg/min", "Sodium bicarbonate 1 mEq/kg"],
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
    explanation: "Uncuffed ETT size = (age/4) + 4 = (4/4) + 4 = 5.0. For cuffed: (age/4) + 3.5.",
  },
  {
    id: "q7",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Using the 4-2-1 rule, what is the hourly maintenance fluid rate for a 25-kg child?",
    choices: ["40 mL/h", "55 mL/h", "65 mL/h", "100 mL/h"],
    answer: 2,
    explanation: "4×10 + 2×10 + 1×5 = 40 + 20 + 5 = 65 mL/h.",
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
    choices: ["Increase systemic vasopressor", "Inhaled pulmonary vasodilator (epoprostenol or NO)", "Methylene blue 1.5 mg/kg", "Defibrillate"],
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
    explanation: "7 mg/kg with epinephrine; 4.5 mg/kg plain. Always verify weight and concentration before dosing.",
  },
  {
    id: "q14",
    category: "Airway",
    difficulty: "Medium",
    stem: "Which feature of pediatric airway anatomy is most clinically significant compared to adults?",
    choices: ["Posteriorly placed larynx", "Narrowest at the cricoid cartilage in children <8 yo", "Long, narrow epiglottis until age 5", "Vocal cords angled superiorly"],
    answer: 1,
    explanation:
      "In children younger than ~8 years, the cricoid cartilage is the narrowest point (functionally, despite some MRI data suggesting glottic narrowing). Cuffed-tube pressure monitoring matters — over-inflation can cause subglottic edema.",
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
    explanation: "CPP = MAP − ICP (or CVP, whichever is greater). In TBI, target CPP 60–70 mmHg.",
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
    choices: ["Prevent leakage at the yoke", "Prevent attachment of the wrong gas cylinder to the machine", "Indicate cylinder pressure", "Allow rapid cylinder change"],
    answer: 1,
    explanation: "PISS prevents incorrect gas cylinder attachment. Each gas has a unique pin pattern.",
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
    choices: ["Continue mask ventilation and surgery", "Commit to surgery via LMA only if surgery is brief and patient stable; otherwise consider waking patient", "Attempt blind intubation via LMA", "Proceed to surgical airway"],
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
    explanation: "Clear liquids 2 h, breast milk 4 h, formula/light meal 6 h, fatty meal 8 h.",
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
    choices: ["Maintain low heart rate, low SVR", "Maintain normal sinus rhythm, adequate preload, normal-to-high SVR", "Maintain tachycardia to maximize cardiac output", "Maintain low afterload to ease forward flow"],
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
    choices: ["Hypothermia", "Decreased 2,3-DPG", "Alkalosis", "Increased CO2 / acidosis"],
    answer: 3,
    explanation:
      "Right shift = unloading O2 at tissues. Caused by ↑CO2, ↓pH (acidosis), ↑temperature, ↑2,3-DPG (CADET face right).",
  },

  // ============ PHARMACOLOGY (50+) ============
  {
    id: "q31",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Propofol is contraindicated (relative) in patients with allergy to:",
    choices: ["Penicillin", "Egg white protein only", "Egg lecithin / soybean oil", "Iodine"],
    answer: 2,
    explanation:
      "Propofol is in egg lecithin emulsion (yolk-derived, not white) with soybean oil. True egg-allergic patients with anaphylaxis history should generally avoid propofol; egg-white allergy alone is usually not a contraindication.",
  },
  {
    id: "q32",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which factor most reduces context-sensitive half-time of remifentanil?",
    choices: ["Hepatic metabolism", "Plasma esterase metabolism", "Renal excretion", "Volume of distribution"],
    answer: 1,
    explanation:
      "Remifentanil is metabolized by non-specific plasma esterases, making its half-time context-INSENSITIVE — about 5–10 min regardless of infusion duration.",
  },
  {
    id: "q33",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Ketamine produces its anesthetic effect primarily via:",
    choices: ["GABA-A potentiation", "NMDA receptor antagonism", "Mu opioid agonism", "α2 receptor agonism"],
    answer: 1,
    explanation:
      "Ketamine is a non-competitive NMDA antagonist producing dissociative anesthesia. It also has weak μ-opioid activity and σ effects.",
  },
  {
    id: "q34",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Dexmedetomidine acts at which receptor?",
    choices: ["α1", "α2", "β1", "GABA-A"],
    answer: 1,
    explanation:
      "Dexmedetomidine is a highly selective α2 agonist. It produces sedation, analgesia, and sympatholysis while preserving respiratory drive.",
  },
  {
    id: "q35",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A patient develops prolonged paralysis lasting 4 hours after a single intubating dose of succinylcholine. Most likely cause?",
    choices: ["Malignant hyperthermia", "Homozygous pseudocholinesterase deficiency", "Acetylcholine receptor upregulation", "Aminoglycoside potentiation"],
    answer: 1,
    explanation:
      "Homozygous pseudocholinesterase deficiency (~1/3200) extends sux paralysis 4–8 hours. Heterozygous (~1/480) extends 50–100%. Dibucaine number quantifies: normal 80, hetero 50, homo 20.",
  },
  {
    id: "q36",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which volatile anesthetic has the LOWEST blood:gas partition coefficient?",
    choices: ["Halothane", "Isoflurane", "Sevoflurane", "Desflurane"],
    answer: 3,
    explanation:
      "Desflurane (0.42) has the lowest blood:gas coefficient, giving it the fastest onset and offset of the modern agents.",
  },
  {
    id: "q37",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Compound A is produced when sevoflurane is exposed to:",
    choices: ["Cold operating room air", "Dry CO2 absorbent", "High oxygen concentration", "Soda lime that is fresh and moist"],
    answer: 1,
    explanation:
      "Sevoflurane degrades in DRY CO2 absorbent to Compound A. To minimize risk, use FGF ≥1–2 L/min and replace absorbent if desiccated. Theoretical nephrotoxicity has not been confirmed in clinical use.",
  },
  {
    id: "q38",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Propofol infusion syndrome (PRIS) is associated with prolonged infusions at rates exceeding:",
    choices: ["50 mcg/kg/min", "100 mcg/kg/min", "200 mcg/kg/min", "4 mg/kg/h"],
    answer: 3,
    explanation:
      "PRIS occurs with propofol infusions >4 mg/kg/h for prolonged periods — severe metabolic acidosis, rhabdomyolysis, cardiac failure, renal failure. High mortality. Particularly concerning in children.",
  },
  {
    id: "q39",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "The CORRECT dose of glycopyrrolate to administer with 5 mg of neostigmine is:",
    choices: ["0.4 mg", "1 mg", "2.5 mg", "5 mg"],
    answer: 1,
    explanation:
      "Use 0.2 mg glycopyrrolate per 1 mg neostigmine (1:5 ratio). For 5 mg neostigmine → 1 mg glycopyrrolate. Atropine alternative: 0.4 mg per 1 mg neostigmine.",
  },
  {
    id: "q40",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Which antiemetic carries a black-box warning for QT prolongation (at supra-clinical doses)?",
    choices: ["Ondansetron", "Dexamethasone", "Droperidol", "Scopolamine"],
    answer: 2,
    explanation:
      "Droperidol has a black-box warning, though based on doses 50–100× standard. Modern low-dose use (0.625–1.25 mg) is generally safe. Ondansetron also has dose-dependent QT effects.",
  },
  {
    id: "q41",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Naloxone duration is shorter than most opioids, leading to risk of:",
    choices: ["Hyperalgesia", "Hypotension", "Re-narcotization", "Withdrawal seizures"],
    answer: 2,
    explanation:
      "Naloxone duration is 30–60 min, shorter than fentanyl, morphine, hydromorphone, methadone — re-narcotization is a major risk. Anticipate redosing and observe for 4+ hours after the last opioid dose.",
  },
  {
    id: "q42",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Histamine release is most prominent with which NMBA?",
    choices: ["Cisatracurium", "Rocuronium", "Vecuronium", "Atracurium"],
    answer: 3,
    explanation:
      "Atracurium has the most histamine release among modern NMBAs. d-Tubocurarine had the most historically. Slow administration reduces release.",
  },
  {
    id: "q43",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which property determines anesthetic POTENCY of an inhaled agent?",
    choices: ["Blood:gas partition coefficient", "Oil:gas partition coefficient", "Vapor pressure", "Molecular weight"],
    answer: 1,
    explanation:
      "Potency follows lipid solubility (Meyer-Overton) — measured by oil:gas partition coefficient. Blood:gas determines speed of onset/offset, not potency.",
  },
  {
    id: "q44",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "The standard induction dose of etomidate is:",
    choices: ["0.05–0.1 mg/kg", "0.2–0.3 mg/kg", "1–2 mg/kg", "5 mg/kg"],
    answer: 1,
    explanation: "Etomidate 0.2–0.3 mg/kg IV. Minimal hemodynamic effect; transient adrenal suppression; PONV, myoclonus, and pain on injection are common side effects.",
  },
  {
    id: "q45",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which opioid is preferred in renal failure due to lack of clinically active renally-cleared metabolites?",
    choices: ["Morphine", "Hydromorphone", "Codeine", "Meperidine"],
    answer: 1,
    explanation:
      "Hydromorphone is preferred in renal failure. Morphine's M6G accumulates → prolonged sedation/respiratory depression. Meperidine's normeperidine is neurotoxic.",
  },
  {
    id: "q46",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Chest wall rigidity is a complication of high-dose, rapid administration of which opioid?",
    choices: ["Morphine", "Hydromorphone", "Fentanyl", "Tramadol"],
    answer: 2,
    explanation:
      "Fentanyl (and other potent synthetic opioids) can cause chest wall and laryngeal rigidity making ventilation impossible. Treat with NMBA + naloxone. More common with rapid bolus of high doses.",
  },
  {
    id: "q47",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A patient on chronic MAOI starts surgery. Which opioid is contraindicated due to serotonin syndrome risk?",
    choices: ["Fentanyl", "Morphine", "Meperidine", "Hydromorphone"],
    answer: 2,
    explanation:
      "Meperidine + MAOI → serotonin syndrome (hyperthermia, agitation, autonomic instability). Avoid this combination. Fentanyl is the safest alternative.",
  },
  {
    id: "q48",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "A 70-kg adult requires deep neuromuscular reversal at PTC 1-2. What is the sugammadex dose?",
    choices: ["140 mg", "280 mg", "560 mg", "1120 mg"],
    answer: 1,
    explanation: "Deep reversal (PTC 1–2): 4 mg/kg × 70 = 280 mg sugammadex.",
  },
  {
    id: "q49",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Flumazenil reverses which class of drugs?",
    choices: ["Opioids", "Benzodiazepines", "Barbiturates", "Non-depolarizing NMBAs"],
    answer: 1,
    explanation:
      "Flumazenil is a competitive antagonist at the GABA-A benzodiazepine binding site. Dose 0.2 mg IV q1 min (max 1 mg). Avoid in chronic benzo users (seizure risk).",
  },
  {
    id: "q50",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Lidocaine 1 mg/kg IV pre-intubation is used to:",
    choices: ["Prevent laryngospasm", "Blunt sympathetic response to laryngoscopy", "Provide post-op analgesia", "Treat ventricular arrhythmias"],
    answer: 1,
    explanation:
      "Lidocaine 1–1.5 mg/kg IV ~3 min before laryngoscopy blunts hemodynamic response. Also has antitussive properties. Useful in patients with ↑ ICP, severe CAD.",
  },
  {
    id: "q51",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "TXA dose for trauma resuscitation is:",
    choices: ["200 mg over 10 min, then 200 mg over 8 h", "1 g over 10 min, then 1 g over 8 h", "5 g over 30 min", "10 mg/kg, repeat as needed"],
    answer: 1,
    explanation:
      "CRASH-2 protocol: TXA 1 g over 10 min, then 1 g over 8 h, given within 3 h of injury. Benefit diminishes (and may be harmful) after 3 h.",
  },
  {
    id: "q52",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A patient receiving long-term high-dose remifentanil infusion develops:",
    choices: ["Tachyphylaxis only", "Opioid-induced hyperalgesia", "Withdrawal-resistant euphoria", "Acute renal failure"],
    answer: 1,
    explanation:
      "Long, high-dose remifentanil infusions (>0.15 mcg/kg/min) cause opioid-induced hyperalgesia — increased pain sensitivity that may persist for days to weeks. Multimodal analgesia + ketamine helps prevent.",
  },
  {
    id: "q53",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Ondansetron is most effective for PONV prophylaxis when given:",
    choices: ["At induction", "30 min before emergence", "Only as rescue in PACU", "Pre-operatively PO"],
    answer: 1,
    explanation:
      "Ondansetron 4 mg IV is most effective when given ~30 min before emergence (end of case). Re-dosing in PACU after prophylactic dose is less effective than choosing a different agent class.",
  },
  {
    id: "q54",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Methylene blue is contraindicated in patients with:",
    choices: ["Asthma", "G6PD deficiency", "Renal failure", "Beta-blocker therapy"],
    answer: 1,
    explanation:
      "Methylene blue can cause hemolysis in G6PD deficiency. It's used to treat methemoglobinemia but is contraindicated in G6PD — use ascorbic acid instead.",
  },
  {
    id: "q55",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Calcium channel blocker should NOT be given with dantrolene due to risk of:",
    choices: ["Cardiovascular collapse / hyperkalemia", "Liver toxicity", "Serotonin syndrome", "Respiratory depression"],
    answer: 0,
    explanation:
      "Dantrolene + CCB can cause myocardial depression, hyperkalemia, and cardiovascular collapse. Avoid this combination in MH treatment.",
  },
  {
    id: "q56",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Which opioid has the longest context-sensitive half-time at 4-hour infusion?",
    choices: ["Remifentanil", "Fentanyl", "Sufentanil", "Alfentanil"],
    answer: 1,
    explanation:
      "Fentanyl has the longest context-sensitive half-time, growing dramatically with infusion duration. Remifentanil is context-insensitive (~5–10 min always). Sufentanil and alfentanil fall in between.",
  },
  {
    id: "q57",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "A defasciculating dose of rocuronium is approximately:",
    choices: ["0.03 mg/kg", "0.06 mg/kg", "0.3 mg/kg", "0.6 mg/kg"],
    answer: 0,
    explanation:
      "Pre-treat with rocuronium 0.03 mg/kg, 3 min before sux to attenuate fasciculations. Higher doses delay return of strength.",
  },
  {
    id: "q58",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Maximum dose of bupivacaine plain is:",
    choices: ["1 mg/kg", "2.5 mg/kg", "4.5 mg/kg", "7 mg/kg"],
    answer: 1,
    explanation: "Bupivacaine plain max 2.5 mg/kg; with epi 3 mg/kg. Bupivacaine is more cardiotoxic than lidocaine.",
  },
  {
    id: "q59",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "The optimal cross-tolerance reduction when switching between opioids is generally:",
    choices: ["0% (no reduction)", "10%", "25–33%", "75%"],
    answer: 2,
    explanation:
      "Standard practice is 25–33% dose reduction when converting between opioids to account for incomplete cross-tolerance. Use 50% reduction in opioid-naive or elderly patients.",
  },
  {
    id: "q60",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A patient on chronic SSRI receives tramadol and develops hyperthermia, agitation, hyperreflexia. Most likely diagnosis?",
    choices: ["Malignant hyperthermia", "Neuroleptic malignant syndrome", "Serotonin syndrome", "Anticholinergic toxicity"],
    answer: 2,
    explanation:
      "Tramadol + SSRI can precipitate serotonin syndrome. Triad: mental status changes, autonomic hyperactivity, neuromuscular abnormalities (clonus, hyperreflexia). Stop the agent and provide supportive care.",
  },

  // ============ PHYSIOLOGY (25) ============
  {
    id: "q61",
    category: "Physiology",
    difficulty: "Easy",
    stem: "Cardiac output equals:",
    choices: ["HR × SVR", "HR × SV", "SV × MAP", "EF × CVP"],
    answer: 1,
    explanation: "CO = HR × SV. Stroke volume depends on preload, afterload, and contractility.",
  },
  {
    id: "q62",
    category: "Physiology",
    difficulty: "Easy",
    stem: "Normal P50 of adult hemoglobin is approximately:",
    choices: ["13 mmHg", "27 mmHg", "40 mmHg", "60 mmHg"],
    answer: 1,
    explanation:
      "P50 = PO2 at which Hb is 50% saturated. Normal adult Hb P50 ≈ 27 mmHg. Fetal Hb P50 ≈ 19 mmHg (left-shifted for placental O2 uptake).",
  },
  {
    id: "q63",
    category: "Physiology",
    difficulty: "Medium",
    stem: "The alveolar gas equation predicts PAO2. At sea level with FiO2 0.21, PaCO2 40, R 0.8:",
    choices: ["~50 mmHg", "~100 mmHg", "~150 mmHg", "~200 mmHg"],
    answer: 1,
    explanation:
      "PAO2 = FiO2 (Patm − PH2O) − PaCO2/0.8 = 0.21 × (760 − 47) − 50 = 100 mmHg approximately. Normal A-a gradient <10 mmHg at FiO2 0.21.",
  },
  {
    id: "q64",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Cerebral autoregulation is preserved when MAP is between:",
    choices: ["20–60 mmHg", "50–150 mmHg", "100–200 mmHg", "Always preserved"],
    answer: 1,
    explanation:
      "Cerebral autoregulation maintains constant CBF over MAP 50–150 mmHg in normotensives. Right-shifted in chronic HTN. Lost in severe TBI, large strokes, and at extremes of pressure.",
  },
  {
    id: "q65",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Coronary perfusion pressure to the LEFT ventricle is calculated as:",
    choices: ["MAP − ICP", "SBP − CVP", "Diastolic BP − LVEDP", "MAP − PCWP"],
    answer: 2,
    explanation:
      "LV coronary perfusion happens primarily during diastole. CPP_LV = DBP − LVEDP (or PCWP/LAP). Tachycardia shortens diastole → reduces coronary perfusion time.",
  },
  {
    id: "q66",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Phase 0 of the ventricular myocyte action potential is mediated by:",
    choices: ["Rapid Na+ influx", "Slow Ca2+ influx", "K+ efflux", "Na+/K+ ATPase"],
    answer: 0,
    explanation:
      "Phase 0 = rapid depolarization via fast Na+ channels (ventricular myocytes). SA node phase 0 is slower Ca2+ influx.",
  },
  {
    id: "q67",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Hypoxic pulmonary vasoconstriction primarily redistributes blood:",
    choices: ["From hypoxic to oxygenated lung regions", "From the left to the right lung", "From systemic to pulmonary circulation", "Has no effect on perfusion"],
    answer: 0,
    explanation:
      "HPV diverts blood from poorly ventilated alveoli to well-ventilated regions, improving V/Q matching. Inhaled anesthetics partially inhibit HPV. Important during one-lung ventilation.",
  },
  {
    id: "q68",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Functional residual capacity (FRC) decreases by approximately what percentage during general anesthesia in supine position?",
    choices: ["5%", "20%", "40%", "70%"],
    answer: 1,
    explanation:
      "Supine GA reduces FRC by ~20%. This contributes to atelectasis and rapid desaturation. Worsened by obesity, pregnancy, abdominal surgery.",
  },
  {
    id: "q69",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Venous oxygen saturation (SvO2) decreases when:",
    choices: ["Cardiac output increases", "Oxygen consumption decreases", "Cardiac output decreases", "Hemoglobin increases"],
    answer: 2,
    explanation:
      "Mixed venous saturation reflects O2 supply vs demand. SvO2 ↓ when: ↓ CO, ↓ Hgb, ↓ SaO2, or ↑ O2 consumption (fever, shivering, sepsis early). Normal ~75%.",
  },
  {
    id: "q70",
    category: "Physiology",
    difficulty: "Easy",
    stem: "The autonomic ganglia use which neurotransmitter for synaptic transmission?",
    choices: ["Norepinephrine", "Acetylcholine (nicotinic)", "Dopamine", "Acetylcholine (muscarinic)"],
    answer: 1,
    explanation:
      "All preganglionic autonomic fibers (both sympathetic and parasympathetic) use ACh on nicotinic receptors at the ganglia. Postganglionic sympathetic neurons release NE; parasympathetic release ACh on muscarinic receptors.",
  },
  {
    id: "q71",
    category: "Physiology",
    difficulty: "Hard",
    stem: "End-tidal CO2 is consistently 5 mmHg less than PaCO2 in a healthy patient under GA. The PRIMARY reason is:",
    choices: ["Equipment dead space", "Alveolar dead space ventilation", "Inadequate alveolar ventilation", "Cardiac shunt"],
    answer: 1,
    explanation:
      "Normal EtCO2-PaCO2 gradient of 2–5 mmHg reflects alveolar dead space (regions ventilated but underperfused). Widens with PE, low CO, supine positioning, and obstructive lung disease.",
  },
  {
    id: "q72",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Closing capacity exceeds FRC most predictably in:",
    choices: ["Young athletic adults", "Healthy 25-year-old standing", "Elderly patients lying supine", "Pregnant patients standing"],
    answer: 2,
    explanation:
      "Closing capacity ↑ with age and supine positioning. When CC > FRC, small airway closure during tidal breathing leads to shunting and atelectasis — common in elderly under anesthesia.",
  },
  {
    id: "q73",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Hypocapnia ([CO2] decrease) causes:",
    choices: ["Cerebral vasodilation", "Cerebral vasoconstriction and ↑ ICP", "Cerebral vasoconstriction and ↓ ICP", "No effect on cerebral vessels"],
    answer: 2,
    explanation:
      "Hypocapnia → cerebral vasoconstriction → ↓ CBF and ↓ ICP. Useful temporizing measure for ↑ ICP, but prolonged hyperventilation worsens cerebral ischemia.",
  },
  {
    id: "q74",
    category: "Physiology",
    difficulty: "Easy",
    stem: "The largest reservoir of body sodium is in the:",
    choices: ["Intracellular fluid", "Extracellular fluid", "Bone", "Plasma only"],
    answer: 1,
    explanation:
      "Sodium is predominantly extracellular (~140 mEq/L). Intracellular [Na+] is ~10 mEq/L. Maintained by Na/K ATPase.",
  },
  {
    id: "q75",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Reversal of fade with TOF stimulation is BEST explained by:",
    choices: ["Hofmann elimination", "Inhibition of presynaptic nicotinic receptors by NMBAs", "Postsynaptic receptor inactivation only", "Reduced ACh synthesis"],
    answer: 1,
    explanation:
      "NDMBs block presynaptic nicotinic receptors, impairing ACh mobilization — explaining 'fade' on TOF (each subsequent twitch is weaker). Sux does not cause fade.",
  },
  {
    id: "q76",
    category: "Physiology",
    difficulty: "Medium",
    stem: "The Frank-Starling relationship describes:",
    choices: ["Heart rate increases with preload", "Stroke volume increases with end-diastolic volume", "Cardiac output is independent of preload", "Afterload determines preload"],
    answer: 1,
    explanation:
      "Frank-Starling: stroke volume increases with end-diastolic volume (preload) within physiologic range. Failing hearts have a flatter curve.",
  },
  {
    id: "q77",
    category: "Physiology",
    difficulty: "Easy",
    stem: "Renal autoregulation maintains GFR constant over what MAP range?",
    choices: ["20–60 mmHg", "60–80 mmHg", "80–180 mmHg", "Always perfectly regulated"],
    answer: 2,
    explanation:
      "Renal autoregulation maintains relatively constant blood flow and GFR over MAP ~80–180 mmHg via myogenic and tubuloglomerular feedback. Lost below 80 mmHg.",
  },
  {
    id: "q78",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Hyperventilation in the obstetric patient typically results in:",
    choices: ["Respiratory acidosis", "Respiratory alkalosis", "Metabolic alkalosis", "No acid-base change"],
    answer: 1,
    explanation:
      "Pregnancy increases minute ventilation ~50% → chronic respiratory alkalosis (PaCO2 ~30 mmHg). Compensatory ↓ HCO3 (~20 mEq/L).",
  },
  {
    id: "q79",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Compared to adults, infants have what % oxygen consumption per kg?",
    choices: ["50%", "100% (same)", "150%", "200%"],
    answer: 3,
    explanation:
      "Infants consume ~6–7 mL/kg/min of O2 vs ~3 mL/kg/min in adults — roughly double. Combined with smaller FRC, this explains rapid desaturation.",
  },
  {
    id: "q80",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Total body water (% body weight) in an adult male is approximately:",
    choices: ["40%", "50%", "60%", "75%"],
    answer: 2,
    explanation:
      "TBW: 60% in adult male, 50% in adult female (more fat), 75–80% in neonates. Distribution: 40% intracellular, 20% extracellular (15% interstitial + 5% intravascular).",
  },
  {
    id: "q81",
    category: "Physiology",
    difficulty: "Easy",
    stem: "Anion gap is calculated as:",
    choices: ["Na − Cl", "Na − HCO3", "Na − (Cl + HCO3)", "(Na + K) − (Cl + HCO3)"],
    answer: 2,
    explanation: "Anion gap = Na − (Cl + HCO3). Normal 8–12 mEq/L. Elevated in MUDPILES (DKA, lactic acidosis, toxic ingestions).",
  },
  {
    id: "q82",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Plasma osmolarity is approximately:",
    choices: ["140 mOsm/L", "200 mOsm/L", "290 mOsm/L", "400 mOsm/L"],
    answer: 2,
    explanation:
      "Normal plasma osmolarity ~285–295 mOsm/L. Calculated: 2[Na] + glucose/18 + BUN/2.8. Lactated Ringers is hypoosmolar at 273 mOsm/L.",
  },
  {
    id: "q83",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Renal blood flow is approximately what fraction of cardiac output?",
    choices: ["5%", "10%", "20%", "40%"],
    answer: 2,
    explanation: "Kidneys receive ~20–25% of cardiac output (~1200 mL/min). Most of this perfuses the renal cortex.",
  },
  {
    id: "q84",
    category: "Physiology",
    difficulty: "Medium",
    stem: "The most common cause of hyperkalemia after succinylcholine administration in a young healthy patient is:",
    choices: ["Massive K+ release from muscle (~10 mEq/L)", "Mild K+ release (~0.5 mEq/L)", "Renal failure", "Acidosis"],
    answer: 1,
    explanation:
      "Healthy patients: sux ↑ K+ by ~0.5 mEq/L. Massive hyperkalemic responses occur in upregulated junctional/extrajunctional AChR conditions: burns >24-48 h, denervation, muscular dystrophy, prolonged immobility.",
  },
  {
    id: "q85",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Bohr effect describes:",
    choices: ["Right shift of oxyhemoglobin curve with ↑ CO2/H+", "Left shift with ↑ CO2", "Hb's affinity for CO is unchanged by O2", "Fetal Hb effect on O2 binding"],
    answer: 0,
    explanation:
      "Bohr effect: ↑ CO2 / ↓ pH right-shifts the oxyhemoglobin curve, facilitating O2 unloading at tissues. Reverse Bohr at lungs facilitates O2 uptake.",
  },

  // ============ AIRWAY (25) ============
  {
    id: "q86",
    category: "Airway",
    difficulty: "Easy",
    stem: "Mallampati class IV indicates:",
    choices: ["Soft palate, fauces, uvula, pillars visible", "Hard palate only visible", "Soft palate and base of uvula visible", "Soft palate, fauces, portion of uvula visible"],
    answer: 1,
    explanation:
      "Mallampati: I = pillars/uvula/soft palate all visible; II = uvula partially obscured; III = only base of uvula visible; IV = only hard palate. III–IV predict difficult intubation.",
  },
  {
    id: "q87",
    category: "Airway",
    difficulty: "Medium",
    stem: "Optimal sniffing position requires:",
    choices: ["Neck flexion at C7, extension at C5-C6 (atlanto-occipital)", "Maximum neck extension", "Maximum neck flexion", "Neutral position"],
    answer: 0,
    explanation:
      "Sniffing position: flexion at lower C-spine (C7), extension at upper C-spine / atlanto-occipital joint. Align tragus to sternum parallel to floor. Ramp obese patients.",
  },
  {
    id: "q88",
    category: "Airway",
    difficulty: "Medium",
    stem: "An adult with the following features predicts DIFFICULT mask ventilation. Which is NOT part of the MOANS criteria?",
    choices: ["Mask seal poor (beard, dysmorphic)", "Obesity (BMI >26)", "Age <40", "Snoring / OSA history"],
    answer: 2,
    explanation:
      "MOANS = Mask seal, Obese, Age >55, No teeth, Snoring/OSA. Young age is not a risk factor. (MaMaBOATS variant: Mallampati III/IV, ↓ Mandibular protrusion, Beard, Obesity, Age >57, Teeth lacking, Snoring).",
  },
  {
    id: "q89",
    category: "Airway",
    difficulty: "Easy",
    stem: "Cormack-Lehane grade 3 view shows:",
    choices: ["Full view of glottis", "Only posterior commissure", "Only epiglottis", "Neither glottis nor epiglottis"],
    answer: 2,
    explanation:
      "Cormack-Lehane: I = full glottis; II = partial glottis; III = only epiglottis; IV = neither. Grades III–IV predict difficult intubation.",
  },
  {
    id: "q90",
    category: "Airway",
    difficulty: "Medium",
    stem: "Thyromental distance predicting difficult intubation is:",
    choices: ["<3 cm", "<3 finger breadths (~6 cm)", "<5 cm", "<10 cm"],
    answer: 1,
    explanation:
      "Thyromental distance <3 finger breadths (~6 cm or 6.5 cm) predicts difficult intubation due to limited mandibular space for displacement of soft tissues.",
  },
  {
    id: "q91",
    category: "Airway",
    difficulty: "Medium",
    stem: "Most appropriate first action in laryngospasm:",
    choices: ["Succinylcholine 1 mg/kg IV", "Jaw thrust + CPAP with 100% O2", "Cricothyrotomy", "Reintubation"],
    answer: 1,
    explanation:
      "Larson's maneuver: jaw thrust + bilateral pressure on the mandibular notch (anterior to mastoid) + CPAP at 40 cmH2O with 100% O2. Sux 10–20 mg IV is for refractory cases.",
  },
  {
    id: "q92",
    category: "Airway",
    difficulty: "Hard",
    stem: "Negative pressure pulmonary edema MOST often occurs in:",
    choices: ["Elderly females with CHF", "Young healthy males after airway obstruction", "Children after T&A", "All emergence scenarios"],
    answer: 1,
    explanation:
      "NPPE: ~80% young (20–40) ASA I-II males. Risk after laryngospasm, ETT biting, upper airway obstruction. Frothy pink secretions, hypoxia. Usually self-limited with PEEP support.",
  },
  {
    id: "q93",
    category: "Airway",
    difficulty: "Medium",
    stem: "An awake fiberoptic intubation in a difficult-airway patient should NOT use:",
    choices: ["Glycopyrrolate as antisialagogue", "Topical 4% lidocaine", "Dexmedetomidine sedation", "High-dose propofol bolus"],
    answer: 3,
    explanation:
      "Awake FOB requires preservation of spontaneous ventilation and airway reflexes. Dexmedetomidine + low-dose midazolam/ketamine preserves this. High-dose propofol causes apnea and obtundation.",
  },
  {
    id: "q94",
    category: "Airway",
    difficulty: "Easy",
    stem: "Cuff pressure of an LMA should be kept below:",
    choices: ["20 cmH2O", "40 cmH2O", "60 cmH2O", "Pressure doesn't matter"],
    answer: 2,
    explanation:
      "LMA cuff pressure should be <60 cmH2O (some sources <40). Excessive pressure causes pharyngeal mucosal ischemia, sore throat, and nerve injury (recurrent laryngeal, lingual, hypoglossal).",
  },
  {
    id: "q95",
    category: "Airway",
    difficulty: "Medium",
    stem: "Apneic oxygenation via nasal cannula at 15 L/min extends safe apnea time by approximately:",
    choices: ["30 seconds", "2 minutes", "5+ minutes (sometimes 10+)", "Has no benefit"],
    answer: 2,
    explanation:
      "High-flow nasal O2 (apneic oxygenation / THRIVE) provides O2 reservoir and some CO2 clearance, extending safe apnea time significantly. Especially useful in obese, pregnant, and difficult-airway patients.",
  },
  {
    id: "q96",
    category: "Airway",
    difficulty: "Medium",
    stem: "Predictors of difficult LMA placement include all EXCEPT:",
    choices: ["Restricted mouth opening", "Distorted upper airway anatomy", "Obstruction at/below larynx", "Obesity alone"],
    answer: 3,
    explanation:
      "Mouth opening, distorted anatomy, glottic/subglottic obstruction, and stiff lungs predict LMA failure. Obesity alone is not a reliable predictor — LMA often works well in obese patients with proper sizing.",
  },
  {
    id: "q97",
    category: "Airway",
    difficulty: "Hard",
    stem: "If cricothyroidotomy is required, the bougie should be inserted in which direction?",
    choices: ["Toward the head (cephalad)", "Toward the feet (caudad)", "Either direction is fine", "Laterally toward the side"],
    answer: 1,
    explanation:
      "After scalpel incision and stab through cricothyroid membrane, bougie goes CAUDAD (toward the lungs). Confirm with 'hold-up' (clicks against tracheal rings or carina stop).",
  },
  {
    id: "q98",
    category: "Airway",
    difficulty: "Medium",
    stem: "RSI rocuronium dose to achieve intubating conditions in 60 seconds is:",
    choices: ["0.3 mg/kg", "0.6 mg/kg", "1.2 mg/kg", "2 mg/kg"],
    answer: 2,
    explanation:
      "RSI rocuronium 1.2 mg/kg achieves intubating conditions in ~60 sec, comparable to sux. Duration ~60–90 min. Sugammadex 16 mg/kg can rescue if needed.",
  },
  {
    id: "q99",
    category: "Airway",
    difficulty: "Easy",
    stem: "Cuff leak test before extubation: a leak of <10–15% of TV indicates:",
    choices: ["Normal", "Significant airway edema — defer extubation or use AEC + steroids", "Cuff failure", "Mainstem intubation"],
    answer: 1,
    explanation:
      "Cuff leak < 10–15% of TV → significant laryngeal edema. Consider deferring extubation, IV steroids 24 h before, racemic epinephrine, or extubation over airway exchange catheter (AEC).",
  },
  {
    id: "q100",
    category: "Airway",
    difficulty: "Medium",
    stem: "Deep extubation is RELATIVELY contraindicated in:",
    choices: ["Smooth case in cooperative patient", "Asthma history", "Difficult airway, full stomach, OSA", "Sinus surgery"],
    answer: 2,
    explanation:
      "Deep extubation avoids cough/HTN but risks laryngospasm during emergence. Contraindicated in difficult airway, full stomach, aspiration risk, OSA.",
  },
  {
    id: "q101",
    category: "Airway",
    difficulty: "Hard",
    stem: "Sevoflurane is preferred for inhalation induction because it is:",
    choices: ["Most potent volatile", "Sweet, non-pungent, with low airway irritation", "Fastest onset of all volatiles", "Provides analgesia"],
    answer: 1,
    explanation:
      "Sevoflurane is sweet and non-pungent → workhorse for pediatric inhalation induction. Desflurane is pungent and causes laryngospasm at induction. Sevo is also a bronchodilator.",
  },
  {
    id: "q102",
    category: "Airway",
    difficulty: "Medium",
    stem: "EtCO2 trace shape 'shark fin' (slow upslope of phase II) suggests:",
    choices: ["Hyperventilation", "Bronchospasm or COPD", "Esophageal intubation", "Cardiac output increase"],
    answer: 1,
    explanation:
      "Upsloping phase II ('shark fin') = obstructive airway disease (asthma, COPD, bronchospasm). Reflects prolonged emptying of alveoli.",
  },
  {
    id: "q103",
    category: "Airway",
    difficulty: "Easy",
    stem: "Depth of ETT (cm at lip) for an average adult male is:",
    choices: ["18 cm", "21 cm", "23 cm", "26 cm"],
    answer: 2,
    explanation:
      "Adult male: 23 cm at lip. Adult female: 21 cm. Confirm with bilateral breath sounds and capnography; recheck after positioning changes.",
  },
  {
    id: "q104",
    category: "Airway",
    difficulty: "Hard",
    stem: "Bilateral recurrent laryngeal nerve injury produces:",
    choices: ["Stridor and airway obstruction", "Hoarseness only", "Aspiration risk", "Loss of pitch control"],
    answer: 0,
    explanation:
      "Bilateral RLN injury → unopposed SLN activity → vocal cord adduction → stridor / obstruction (may require emergency reintubation or trach). Unilateral RLN → hoarseness, aspiration risk.",
  },
  {
    id: "q105",
    category: "Airway",
    difficulty: "Medium",
    stem: "The superior laryngeal nerve provides sensation to which region?",
    choices: ["Below the cords (subglottic)", "Above the cords (supraglottic) including epiglottis", "Tongue base only", "Trachea"],
    answer: 1,
    explanation:
      "SLN internal branch: sensation supraglottic including epiglottis. RLN: subglottic mucosa. External SLN: motor to cricothyroid (tensor of cords).",
  },
  {
    id: "q106",
    category: "Airway",
    difficulty: "Medium",
    stem: "What is the appropriate cuffed ETT size for a 5-year-old child?",
    choices: ["3.5", "4.5", "4.75", "5.5"],
    answer: 2,
    explanation: "Cuffed ETT = (age/4) + 3.5 = 5/4 + 3.5 = 4.75. Uncuffed = (age/4) + 4 = 5.25.",
  },
  {
    id: "q107",
    category: "Airway",
    difficulty: "Medium",
    stem: "Most appropriate management of suspected aspiration intra-op:",
    choices: ["Routine steroids and prophylactic antibiotics", "Suction, lung-protective ventilation, supportive care, no routine antibiotics or steroids", "Immediate bronchoalveolar lavage with saline", "Extubate immediately"],
    answer: 1,
    explanation:
      "Aspiration management: tilt head down/lateral, suction, intubate to protect airway, bronchoscopy if particulate, lung-protective ventilation. Routine steroids and prophylactic antibiotics are NOT indicated — reserved for bacterial superinfection.",
  },
  {
    id: "q108",
    category: "Airway",
    difficulty: "Hard",
    stem: "Awake fiberoptic intubation in a patient with significant glottic edema is preferred because:",
    choices: ["It allows spontaneous ventilation to be maintained", "It is faster than video laryngoscopy", "Anesthetic induction is safer", "Less coughing"],
    answer: 0,
    explanation:
      "Awake intubation preserves spontaneous ventilation, airway reflexes, and muscle tone — critical if anatomy distorts after induction. Topicalization is the key to success.",
  },
  {
    id: "q109",
    category: "Airway",
    difficulty: "Medium",
    stem: "Mapleson D circuit is most efficient for:",
    choices: ["Spontaneous ventilation", "Controlled ventilation", "CO2 absorption", "Volatile induction"],
    answer: 1,
    explanation:
      "Mapleson D (and Bain modification) is most efficient for CONTROLLED ventilation (~2 × MV to prevent rebreathing). Mapleson A (Magill) is most efficient for spontaneous ventilation (~1 × MV).",
  },
  {
    id: "q110",
    category: "Airway",
    difficulty: "Easy",
    stem: "Anatomic narrowest point of pediatric airway (<8 years) is at:",
    choices: ["Vocal cords", "Cricoid cartilage", "Trachea", "Hyoid bone"],
    answer: 1,
    explanation:
      "Historically taught: cricoid is narrowest in <8 yo. (MRI studies challenge this — glottis may be narrower — but functionally, cuffed ETTs still seal best below cords.) Avoid over-inflation in peds.",
  },

  // ============ CARDIAC (20) ============
  {
    id: "q111",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Mitral stenosis hemodynamic goals favor:",
    choices: ["Fast HR, low SVR", "Slow-normal HR, adequate preload, avoid sudden ↑ SVR", "Tachycardia and hypertension", "Low preload"],
    answer: 1,
    explanation:
      "MS: avoid tachycardia (shortens diastolic filling), maintain preload, avoid sudden ↑ SVR. Pulmonary hypertension and RV failure are concerns. Often these patients have atrial fibrillation.",
  },
  {
    id: "q112",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Patient with HOCM develops hypotension after spinal anesthesia. Best initial treatment:",
    choices: ["Ephedrine", "Phenylephrine", "Fluid bolus + phenylephrine", "Atropine"],
    answer: 2,
    explanation:
      "HOCM: dynamic LVOT obstruction worsens with ↓ preload, ↓ afterload, or ↑ contractility. Treat hypotension with volume + phenylephrine (pure α). AVOID inotropes (ephedrine, dobutamine) and β-agonists.",
  },
  {
    id: "q113",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Heparin-induced thrombocytopenia (HIT type II) is mediated by:",
    choices: ["Direct platelet destruction", "Antibodies to platelet factor 4-heparin complex", "Complement activation", "Cytokine release"],
    answer: 1,
    explanation:
      "HIT II: IgG antibodies to PF4-heparin complex → platelet activation, thrombocytopenia, paradoxical thrombosis (>50% risk). Stop ALL heparin (incl. flushes); use direct thrombin inhibitor (argatroban, bivalirudin).",
  },
  {
    id: "q114",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Aortic regurgitation hemodynamic goals favor:",
    choices: ["High SVR to maintain forward flow", "Low SVR + slightly increased HR to minimize regurgitant time", "Bradycardia to allow longer diastolic filling", "Maximum preload"],
    answer: 1,
    explanation:
      "AR: 'Fast and forward.' Slightly ↑ HR (~80–90) shortens diastolic regurgitant time. Low-normal SVR reduces afterload. Maintain contractility. Avoid bradycardia.",
  },
  {
    id: "q115",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Protamine reaction Type I (catastrophic pulmonary vasoconstriction) is treated with:",
    choices: ["More protamine", "Stop protamine, supportive care, inhaled pulmonary vasodilator, ECMO if needed", "Methylene blue", "Diphenhydramine alone"],
    answer: 1,
    explanation:
      "Protamine Type I = anaphylactoid catastrophic pulmonary HTN with RV failure. Stop protamine, give vasopressor, inhaled NO/epoprostenol, methylene blue for vasoplegia, consider ECMO if severe.",
  },
  {
    id: "q116",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "TEE finding suggestive of pulmonary embolism:",
    choices: ["RV hypokinesis with apical sparing (McConnell's sign)", "Pericardial effusion", "Severely depressed LV ejection", "Mitral regurgitation"],
    answer: 0,
    explanation:
      "McConnell's sign: RV free wall hypokinesis with preserved apical motion — relatively specific for acute PE. Also: dilated RV, septal flattening, tricuspid regurgitation jet velocity.",
  },
  {
    id: "q117",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Most important determinant of left ventricular myocardial oxygen demand:",
    choices: ["Preload", "Heart rate", "Contractility", "Wall tension (afterload)"],
    answer: 1,
    explanation:
      "HR is the most important determinant of MVO2 demand AND supply (diastolic time). Hence the value of HR control in CAD. Other determinants: contractility, wall tension (afterload, preload via LaPlace).",
  },
  {
    id: "q118",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Maintaining the patient with severe pulmonary hypertension during induction requires avoiding:",
    choices: ["Mild hypercapnia", "Hypoxia, acidosis, light anesthesia", "Volatile anesthetics", "Phenylephrine"],
    answer: 1,
    explanation:
      "PHTN: avoid hypoxia, hypercarbia, acidosis, hypothermia, and light anesthesia (all increase PVR). Maintain RV preload (avoid hypovolemia), augment RV contractility (epi, milrinone), and selectively reduce PVR (inhaled NO).",
  },
  {
    id: "q119",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "RCRI (Revised Cardiac Risk Index) includes all EXCEPT:",
    choices: ["History of ischemic heart disease", "History of CHF", "DM requiring insulin", "Age >65"],
    answer: 3,
    explanation:
      "RCRI: high-risk surgery, IHD, CHF, CVD (stroke/TIA), DM on insulin, Cr >2. Age is NOT included. ≥2 points = increased risk → consider further workup.",
  },
  {
    id: "q120",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Acute right heart failure after lung resection is BEST managed initially with:",
    choices: ["Aggressive fluid bolus", "Norepinephrine + inotrope + inhaled pulmonary vasodilator + avoid hypoxia", "Diuresis", "Vasopressin alone"],
    answer: 1,
    explanation:
      "Acute RHF needs systemic vasopressor (preserve RV coronary perfusion), inotrope (epi, milrinone), inhaled pulmonary vasodilator, and avoidance of triggers (hypoxia, acidosis). Fluid bolus often worsens RHF.",
  },
  {
    id: "q121",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Coronary artery patient: optimal hemodynamic goals are:",
    choices: ["High HR, high BP", "Low HR (60-80), avoid hypotension AND hypertension", "Very low BP to minimize O2 demand", "High HR with low BP"],
    answer: 1,
    explanation:
      "CAD: maintain HR 60–80, MAP near baseline. Tachycardia worsens demand AND shortens diastolic supply. Hypotension reduces CPP. Both extremes increase ischemia risk.",
  },
  {
    id: "q122",
    category: "Cardiac",
    difficulty: "Easy",
    stem: "Heparin loading dose for cardiopulmonary bypass is typically:",
    choices: ["50 U/kg", "100 U/kg", "300–400 U/kg", "1000 U/kg"],
    answer: 2,
    explanation:
      "Heparin 300–400 U/kg before CPB, targeting ACT >480 sec. Check ACT q30 min on bypass; redose as needed.",
  },
  {
    id: "q123",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Indication for TEE during non-cardiac surgery:",
    choices: ["All surgeries", "Persistent unexplained hemodynamic instability not responding to therapy", "Routine cardiac risk patients", "Should be avoided"],
    answer: 1,
    explanation:
      "Per ASA: TEE during non-cardiac surgery is indicated when unexplained persistent hemodynamic compromise won't respond to therapy and TEE is likely to alter management. Also: chest trauma with cardiac injury suspicion.",
  },
  {
    id: "q124",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Patient with chronic stable angina takes daily aspirin. Pre-op management:",
    choices: ["Stop 7 days before all surgery", "Continue for most surgeries except intracranial/spinal", "Switch to clopidogrel", "Stop and bridge with heparin"],
    answer: 1,
    explanation:
      "Continue ASA for most surgeries — benefits of cardiac protection outweigh bleeding risk. Stop for high-risk bleeding: intracranial, intraocular (posterior chamber), prostate, possibly some spine surgeries.",
  },
  {
    id: "q125",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Drug-eluting stent placed 4 months ago. Patient needs urgent surgery. Most appropriate antiplatelet management:",
    choices: ["Stop DAPT 7 days before", "Continue ASA, hold P2Y12 5–7 days before, restart ASAP post-op", "Stop both, no bridge", "Bridge with heparin"],
    answer: 1,
    explanation:
      "Continue ASA peri-op (high stent thrombosis risk if both held). Hold P2Y12 inhibitor (clopidogrel 5–7 d, ticagrelor 5–7 d, prasugrel 7 d) if surgery cannot be delayed. Restart DAPT ASAP postop. Ideally delay elective surgery 6–12 months after DES.",
  },
  {
    id: "q126",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "ST elevation in lead II during surgery most likely reflects ischemia of:",
    choices: ["Lateral wall (LAD distribution)", "Inferior wall (RCA distribution)", "Anterior wall", "Posterior wall only"],
    answer: 1,
    explanation:
      "Lead II ST changes typically reflect inferior wall (RCA territory) or right ventricular ischemia. V5 monitors lateral wall (LCx/LAD). Both leads recommended intraoperatively for sensitivity.",
  },
  {
    id: "q127",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Mitral regurgitation hemodynamic goals favor:",
    choices: ["Bradycardia, high SVR", "Fast and forward — moderately ↑ HR, ↓ SVR, full circulation", "Maximum afterload", "Low preload only"],
    answer: 1,
    explanation:
      "MR: 'Fast and forward.' Slightly higher HR (less regurgitant time), reduced SVR (forward flow), and adequate preload. Avoid bradycardia (more regurgitant fraction) and high afterload.",
  },
  {
    id: "q128",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Cardiac tamponade triad (Beck's):",
    choices: ["Hypotension, distended neck veins, muffled heart sounds", "Hypertension, bradycardia, irregular respirations", "Fever, hypotension, altered mental status", "Tachycardia, hypotension, jaundice"],
    answer: 0,
    explanation:
      "Beck's triad: hypotension, JVD, muffled heart sounds. Pulsus paradoxus is also characteristic. TEE confirms. Treat with pericardiocentesis. Avoid IPPV in unrelieved tamponade (worsens hypotension).",
  },
  {
    id: "q129",
    category: "Cardiac",
    difficulty: "Easy",
    stem: "Normal ejection fraction is:",
    choices: ["30–40%", "40–55%", "55–70%", "75–90%"],
    answer: 2,
    explanation:
      "Normal LV EF 55–70%. Mild reduction: 41–54%. Moderate 30–40%. Severe <30%. Sub-30% EF = significant cardiac risk for non-cardiac surgery.",
  },
  {
    id: "q130",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "First-degree AV block on ECG:",
    choices: ["PR > 200 ms but every P followed by QRS", "Progressively lengthening PR until dropped QRS (Mobitz I)", "Random non-conducted P waves (Mobitz II)", "Complete dissociation between P and QRS"],
    answer: 0,
    explanation:
      "1st degree: prolonged PR >200 ms, every P conducted. Usually benign. 2nd Mobitz I (Wenckebach) progressive PR; Mobitz II — sudden non-conduction, higher risk of progression. 3rd degree = complete AV dissociation.",
  },

  // ============ OBSTETRIC (15) ============
  {
    id: "q131",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Cardiac output in pregnancy peaks:",
    choices: ["At 20 weeks gestation", "At 32 weeks", "At term", "Immediately postpartum"],
    answer: 3,
    explanation:
      "CO increases ~40% during pregnancy, but peaks during labor (additional 30%) and especially IMMEDIATELY POSTPARTUM (autotransfusion from uterine contraction) — period of greatest cardiac risk for heart-disease patients.",
  },
  {
    id: "q132",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Failed intubation rate in obstetric anesthesia is approximately:",
    choices: ["1 in 100", "1 in 250", "1 in 2000", "1 in 10,000"],
    answer: 1,
    explanation:
      "OB failed intubation rate ~1 in 250–400, much higher than the general OR rate (~1 in 2000). Causes: edema, breast enlargement, urgency, full stomach. Always have a failed-intubation algorithm ready.",
  },
  {
    id: "q133",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "Hypertensive parturient on magnesium develops severe muscle weakness and respiratory difficulty. Most likely magnesium level:",
    choices: ["3 mg/dL", "5 mg/dL", "10 mg/dL", "Always therapeutic, weakness not related"],
    answer: 2,
    explanation:
      "Mg toxicity: therapeutic 4–8 mg/dL. >8 → loss of DTRs; >10 → respiratory paralysis; >15 → cardiac arrest. Treat with IV calcium gluconate, supportive care, dialysis if severe.",
  },
  {
    id: "q134",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Most common cause of postpartum hemorrhage:",
    choices: ["Uterine atony", "Retained placenta", "Lacerations", "Coagulopathy"],
    answer: 0,
    explanation:
      "Uterine atony causes ~80% of PPH. Treat: oxytocin first → methylergonovine (avoid in HTN) → carboprost (avoid in asthma) → misoprostol. Activate MTP early.",
  },
  {
    id: "q135",
    category: "Obstetric",
    difficulty: "Easy",
    stem: "Spinal anesthesia for C-section typically uses bupivacaine 0.75% hyperbaric dose of:",
    choices: ["0.5 mL", "1.4–1.8 mL (about 12 mg)", "3 mL", "5 mL"],
    answer: 1,
    explanation:
      "Spinal for C-section: bupivacaine 0.75% hyperbaric 1.4–1.8 mL (10.5–13.5 mg) + fentanyl 10–15 mcg + morphine 100–200 mcg. Target T4 sensory level.",
  },
  {
    id: "q136",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Test dose for labor epidural typically contains:",
    choices: ["Lidocaine 2% 3 mL only", "Lidocaine 1.5% 3 mL with epi 1:200,000 (15 mcg)", "Saline 5 mL", "Bupivacaine 0.25% 10 mL"],
    answer: 1,
    explanation:
      "Test dose = lidocaine 1.5% 3 mL + epi 15 mcg (1:200,000). Detect intrathecal (motor block) and intravascular (↑ HR >20 bpm, or paresthesia, anxiety with epi). Some now skip the epi component (controversial).",
  },
  {
    id: "q137",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "TAP block for C-section provides:",
    choices: ["Visceral and somatic abdominal coverage", "Somatic coverage of T10–L1 only (NOT visceral pain)", "Complete C-section anesthesia", "Lower extremity coverage"],
    answer: 1,
    explanation:
      "TAP blocks somatic afferents T10–L1. Provides somatic post-op analgesia but NOT visceral pain — supplement with neuraxial opioid or systemic analgesia. Useful when neuraxial morphine is contraindicated.",
  },
  {
    id: "q138",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Aspiration risk increases significantly in pregnancy beyond:",
    choices: ["8 weeks", "16–20 weeks", "28 weeks", "Term only"],
    answer: 1,
    explanation:
      "Aspiration risk increases after ~16–20 weeks due to ↓ LES tone, ↑ intragastric pressure, gravid uterus displacement. Consider RSI and antacid (Bicitra) prophylaxis after this point.",
  },
  {
    id: "q139",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Best management of fetal heart rate deceleration after spinal placement:",
    choices: ["Emergency C-section immediately", "Left uterine displacement, IV fluid, O2, phenylephrine, assess maternal BP", "Stop all maternal medications", "Position prone"],
    answer: 1,
    explanation:
      "Step 1: rule out aortocaval compression (LUD), maternal hypotension (fluid + vasopressor), and hypoxia. Position changes, 100% O2 by face mask, communicate with OB team.",
  },
  {
    id: "q140",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "Severe preeclampsia is defined by:",
    choices: ["BP >140/90 alone", "BP >160/110 OR end-organ damage / signs (HELLP, AKI, pulmonary edema, etc.)", "Proteinuria alone", "Maternal age >35"],
    answer: 1,
    explanation:
      "Severe preeclampsia: BP ≥160/110, or signs of end-organ involvement (LFTs ≥ 2× normal, plt <100k, AKI, pulmonary edema, persistent visual/headache, RUQ pain). Magnesium for seizure prophylaxis. Definitive treatment: delivery.",
  },
  {
    id: "q141",
    category: "Obstetric",
    difficulty: "Easy",
    stem: "Definitive treatment of preeclampsia:",
    choices: ["Antihypertensives", "Magnesium sulfate", "Delivery of fetus and placenta", "Bed rest"],
    answer: 2,
    explanation:
      "Delivery is definitive. Other interventions (BP control, magnesium) are temporizing until delivery is feasible.",
  },
  {
    id: "q142",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Neonatal Apgar score includes all EXCEPT:",
    choices: ["Heart rate", "Respiratory effort", "Skin color", "Birth weight"],
    answer: 3,
    explanation:
      "Apgar: Appearance (color), Pulse (HR), Grimace (reflex irritability), Activity (muscle tone), Respiration. Scored at 1 and 5 min. Weight is NOT part of the score.",
  },
  {
    id: "q143",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "Carboprost (PGF2α) for postpartum hemorrhage is contraindicated in:",
    choices: ["Hypertensive patients", "Severe asthma / reactive airway disease", "Diabetics", "Elderly patients"],
    answer: 1,
    explanation:
      "Carboprost causes bronchoconstriction — contraindicated in severe asthma. Methylergonovine contraindicated in HTN/preeclampsia. Oxytocin is first-line uterotonic.",
  },
  {
    id: "q144",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Most common cause of maternal death in developed countries (peripartum):",
    choices: ["Hemorrhage", "Embolic disease (VTE, AFE)", "Hypertensive disorders", "Sepsis"],
    answer: 1,
    explanation:
      "In developed countries, embolic disease (VTE, amniotic fluid embolism) is the leading direct cause of maternal mortality. In developing world: hemorrhage. Cardiovascular disease is increasingly important everywhere.",
  },
  {
    id: "q145",
    category: "Obstetric",
    difficulty: "Easy",
    stem: "FRC decreases in pregnancy by approximately:",
    choices: ["5%", "20%", "40%", "60%"],
    answer: 1,
    explanation:
      "FRC ↓ ~20% by term due to elevated diaphragm. Combined with ↑ O2 consumption (15–20%) → rapid desaturation. Pre-oxygenate fully before induction.",
  },

  // ============ PEDIATRIC (20) ============
  {
    id: "q146",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "ETT depth (cm) at lip for a 4-year-old:",
    choices: ["10", "12", "14", "16"],
    answer: 2,
    explanation: "Depth (cm) = age/2 + 12 = 4/2 + 12 = 14 cm. Or 3× ETT size = 3 × 5.0 = 15 cm (close).",
  },
  {
    id: "q147",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Pediatric epinephrine dose for cardiac arrest is:",
    choices: ["0.001 mg/kg", "0.01 mg/kg", "0.1 mg/kg", "1 mg/kg"],
    answer: 1,
    explanation:
      "Peds arrest: epinephrine 0.01 mg/kg IV/IO (0.1 mL/kg of 1:10,000). q3–5 min. ET dose 10× IV (0.1 mg/kg).",
  },
  {
    id: "q148",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Pediatric defibrillation initial energy:",
    choices: ["1 J/kg", "2 J/kg", "4 J/kg", "10 J/kg"],
    answer: 1,
    explanation:
      "Peds defib: 2 J/kg initial, 4 J/kg subsequent. Cardioversion 0.5–1 J/kg synch.",
  },
  {
    id: "q149",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Pre-treatment with atropine before pediatric succinylcholine is recommended primarily to prevent:",
    choices: ["MH triggering", "Bradycardia (especially in infants and with repeat dosing)", "Hyperkalemia", "Increased ICP"],
    answer: 1,
    explanation:
      "Atropine 0.02 mg/kg (min 0.1, max 0.5 mg) pretreats sux-induced bradycardia. Especially common in infants and with second dose of sux. Many institutions atropine all kids <5 yo with sux.",
  },
  {
    id: "q150",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "Pediatric blood volume per kg approximation (term neonate):",
    choices: ["55 mL/kg", "65 mL/kg", "80–90 mL/kg", "100 mL/kg"],
    answer: 2,
    explanation:
      "EBV: premature 95 mL/kg, term 85–90 mL/kg, infant <1 yr 80 mL/kg, 1–6 yr 75 mL/kg, adult male 70, adult female 65.",
  },
  {
    id: "q151",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Inhalation induction with sevoflurane in a 4-year-old: emergence delirium incidence is:",
    choices: ["<5%", "10–20%", "20–80%", "Always occurs"],
    answer: 2,
    explanation:
      "Emergence agitation/delirium common after sevo, especially in 2–5 yo. Incidence 20–80% depending on definition. Mitigate with low-dose propofol (~1 mg/kg) before emergence, midazolam premed, dexmedetomidine, fentanyl.",
  },
  {
    id: "q152",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Pediatric maintenance fluids — bolus dose for hypotension:",
    choices: ["5 mL/kg", "10 mL/kg", "20 mL/kg", "40 mL/kg"],
    answer: 2,
    explanation:
      "Peds resuscitation bolus = 20 mL/kg crystalloid (LR or NS). Reassess and repeat as needed. Blood loss: pRBCs 10 mL/kg ≈ Hct +10%.",
  },
  {
    id: "q153",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Most appropriate management of post-tonsillectomy hemorrhage:",
    choices: ["Routine elective intubation", "Treat as full stomach + hypovolemia: aggressive fluid resuscitation, RSI with backup airway", "Wait for ENT regardless of bleeding rate", "Standard premedication"],
    answer: 1,
    explanation:
      "Post-T&A bleed: hypovolemia + full stomach (swallowed blood) + difficult airway possible. Approach: 2 IVs, large-bore suction, fluid/blood ready, RSI (ketamine/etomidate + roc) with surgical airway backup. Often goes straight back to OR with anesthesia and ENT.",
  },
  {
    id: "q154",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Inhalation induction with sevoflurane reaches loss of eyelash reflex in approximately:",
    choices: ["10 seconds", "30 seconds", "1–2 minutes", "5 minutes"],
    answer: 2,
    explanation:
      "Sevoflurane inhalation induction: loss of eyelash reflex / acceptable mask seal in 1–2 min using 8% sevo with 60–70% N2O. Faster with single-breath technique.",
  },
  {
    id: "q155",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Pediatric LMA size 2 is appropriate for a child weighing:",
    choices: ["<5 kg", "5–10 kg", "10–20 kg", "20–30 kg"],
    answer: 2,
    explanation:
      "LMA sizes by weight: 1 (<5 kg), 1.5 (5–10), 2 (10–20), 2.5 (20–30), 3 (30–50), 4 (50–70), 5 (>70). Cuff volumes scale accordingly.",
  },
  {
    id: "q156",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Neonatal resuscitation: first action for an apneic neonate with HR <100:",
    choices: ["Chest compressions", "IV epinephrine", "Effective positive pressure ventilation", "Endotracheal intubation immediately"],
    answer: 2,
    explanation:
      "NRP: PPV is the cornerstone. If HR <100 after birth, start PPV with 21% O2 (or higher if needed); if HR <60 despite effective PPV for 30 sec, then chest compressions + ventilation + intubate; then epi.",
  },
  {
    id: "q157",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Children with a recent (within 2 weeks) URI have increased risk of:",
    choices: ["Malignant hyperthermia", "Laryngospasm, bronchospasm, desaturation (~10× more)", "Aspiration only", "Cardiac arrest"],
    answer: 1,
    explanation:
      "Recent URI ↑ risk of perioperative respiratory adverse events: laryngospasm, bronchospasm, desat, atelectasis. Risk highest within 2 weeks. Delay elective surgery 2–4 weeks if symptomatic or wheezy.",
  },
  {
    id: "q158",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Pediatric atropine dose for bradycardia is 0.02 mg/kg with minimum dose:",
    choices: ["0.05 mg", "0.1 mg", "0.2 mg", "0.5 mg"],
    answer: 1,
    explanation:
      "Atropine 0.02 mg/kg, MIN 0.1 mg (smaller doses can cause paradoxical bradycardia), MAX 0.5 mg single dose in peds.",
  },
  {
    id: "q159",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "Pediatric oral midazolam premedication dose:",
    choices: ["0.05 mg/kg", "0.5 mg/kg (max 20 mg)", "5 mg/kg", "10 mg/kg"],
    answer: 1,
    explanation:
      "PO midazolam premed: 0.5 mg/kg, max 20 mg. Onset ~15 min. Useful for separation anxiety. IV induction adjunct: 0.05–0.1 mg/kg.",
  },
  {
    id: "q160",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Patient with Duchenne muscular dystrophy receives succinylcholine. Most likely catastrophic complication:",
    choices: ["MH", "Hyperkalemic cardiac arrest", "Anaphylaxis", "Prolonged paralysis"],
    answer: 1,
    explanation:
      "DMD has upregulated extrajunctional AChRs → massive K+ release after sux → cardiac arrest. AVOID sux. Avoid volatile triggers if possible (rhabdomyolysis risk). Use TIVA or volatile with NDMR.",
  },
  {
    id: "q161",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Sevoflurane MAC in infants 1–6 months is approximately:",
    choices: ["1.0%", "2.0%", "3.2%", "5%"],
    answer: 2,
    explanation:
      "Sevo MAC: highest in 1–6 mo (3.2%), then decreases. Adult MAC 2.0%. Infants need higher concentrations but are more sensitive to cardiovascular depression.",
  },
  {
    id: "q162",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Pediatric propofol induction dose vs. adult:",
    choices: ["Same dose", "Lower dose", "Higher (2.5–3.5 mg/kg) due to larger Vd and higher clearance", "Avoid in children"],
    answer: 2,
    explanation:
      "Pediatric propofol induction: 2.5–3.5 mg/kg (higher than adult 1.5–2.5) due to larger volume of distribution and faster clearance.",
  },
  {
    id: "q163",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Single most common error in pediatric anesthesia:",
    choices: ["Wrong anesthetic agent", "Dosing error (medication or fluid)", "Wrong site surgery", "Wrong patient"],
    answer: 1,
    explanation:
      "Dosing errors (medication or fluid) are the most common pediatric anesthesia errors. Always confirm weight in kg, double-check decimal point in concentrations, use color-coded labels, and consider second-person check for high-risk drugs.",
  },
  {
    id: "q164",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "Neonates lose body heat primarily through:",
    choices: ["Conduction", "Convection", "Radiation and evaporation", "Sweating"],
    answer: 2,
    explanation:
      "Neonates lose heat predominantly through radiation (to cool walls) and evaporation. High surface area to volume ratio. Aggressive warming, plastic wrap, warmer, head covering, warmed IV fluids/blood essential.",
  },
  {
    id: "q165",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Most common congenital diaphragmatic hernia is:",
    choices: ["Right-sided (foramen of Morgagni)", "Left-sided (foramen of Bochdalek)", "Bilateral", "Hiatal"],
    answer: 1,
    explanation:
      "Bochdalek (posterolateral) hernia ~90% of CDH, ~85% left-sided. Associated pulmonary hypoplasia and pulmonary hypertension. Avoid bag-mask ventilation (insufflates bowel); intubate immediately if symptomatic.",
  },

  // ============ REGIONAL (15) ============
  {
    id: "q166",
    category: "Regional",
    difficulty: "Easy",
    stem: "The supraclavicular block is also known as:",
    choices: ["Spinal of the arm", "Spinal of the leg", "Bier block", "Lumbar plexus block"],
    answer: 0,
    explanation:
      "Supraclavicular block at the divisions/trunks provides dense coverage of the upper limb — 'spinal of the arm.' Pneumothorax risk reduced with ultrasound guidance.",
  },
  {
    id: "q167",
    category: "Regional",
    difficulty: "Medium",
    stem: "Most common side effect of intrathecal morphine:",
    choices: ["Hypotension", "Pruritus", "Nausea", "Bradycardia"],
    answer: 1,
    explanation:
      "Intrathecal morphine: pruritus (~60%), nausea (~30%), urinary retention, and delayed respiratory depression (up to 24 h). Monitor 24 h post-administration.",
  },
  {
    id: "q168",
    category: "Regional",
    difficulty: "Medium",
    stem: "Femoral nerve block provides sensation to:",
    choices: ["Posterior thigh and lower leg", "Anterior thigh, anterior knee, medial leg (saphenous), medial ankle", "Lateral foot", "Heel only"],
    answer: 1,
    explanation:
      "Femoral nerve: motor — quadriceps; sensory — anterior thigh + medial leg via saphenous branch. Adductor canal block preserves quadriceps function while still providing knee analgesia (preferred for TKA).",
  },
  {
    id: "q169",
    category: "Regional",
    difficulty: "Hard",
    stem: "Best block for analgesia after total knee arthroplasty (ambulatory):",
    choices: ["Femoral block (dense quad weakness)", "Adductor canal block (sensory, preserves quad strength)", "Sciatic block alone", "No block needed"],
    answer: 1,
    explanation:
      "Adductor canal block provides sensory coverage of the knee with minimal quadriceps weakness — allows early ambulation. Often combined with IPACK (posterior knee). Femoral block produces dense quad weakness.",
  },
  {
    id: "q170",
    category: "Regional",
    difficulty: "Easy",
    stem: "Most common immediate side effect of spinal anesthesia:",
    choices: ["High block", "Hypotension", "Headache", "Backache"],
    answer: 1,
    explanation:
      "Sympathetic blockade from spinal causes hypotension in ~30% of patients. Treat with phenylephrine and fluid. Higher blocks → more dropout.",
  },
  {
    id: "q171",
    category: "Regional",
    difficulty: "Medium",
    stem: "Post-dural puncture headache features:",
    choices: ["Worse lying down", "Worse upright, relieved by lying down", "Always frontal", "Resolves in <1 hour"],
    answer: 1,
    explanation:
      "PDPH: positional (worse upright, better supine), often frontal/occipital, may have visual/auditory symptoms. Treatment: hydration, caffeine, oral analgesics; epidural blood patch if persistent >24–48 h.",
  },
  {
    id: "q172",
    category: "Regional",
    difficulty: "Hard",
    stem: "Indication for ECMO in LAST:",
    choices: ["Mild symptoms (numbness)", "Refractory cardiovascular collapse despite lipid emulsion and modified ACLS", "Asymptomatic high-dose injection", "Routine after large blocks"],
    answer: 1,
    explanation:
      "ECMO/CPB is indicated in LAST when CV collapse is refractory to lipid emulsion + modified ACLS. Recovery has been reported after prolonged CPR (>1 h). Notify perfusion early in severe cases.",
  },
  {
    id: "q173",
    category: "Regional",
    difficulty: "Medium",
    stem: "Anticoagulant timing for neuraxial (per ASRA): therapeutic warfarin requires:",
    choices: ["Stop 24 hours pre-op", "Stop until INR ≤ 1.4 (typically 5 days)", "Bridge with heparin", "No restriction"],
    answer: 1,
    explanation:
      "Per ASRA: stop warfarin and document INR ≤ 1.4 before neuraxial block. Typically requires 5 days. Restart 6–8 h after catheter removal.",
  },
  {
    id: "q174",
    category: "Regional",
    difficulty: "Medium",
    stem: "Bupivacaine cardiotoxicity is enhanced by:",
    choices: ["Hypocapnia, alkalosis", "Acidosis, hypoxia, hyperkalemia, pregnancy", "Hypothermia only", "None of these"],
    answer: 1,
    explanation:
      "Bupivacaine cardiotoxicity exacerbated by acidosis (↑ ionized fraction, ↑ binding to Na channels), hypoxia, hyperkalemia, and pregnancy. Lipid emulsion is treatment.",
  },
  {
    id: "q175",
    category: "Regional",
    difficulty: "Easy",
    stem: "Spinal block typically loses motor function in which fiber order (first to last):",
    choices: ["Motor → autonomic → sensory", "Autonomic (B) → temperature/pain (C) → touch/pressure → motor (A)", "Random", "Motor first"],
    answer: 1,
    explanation:
      "Differential block: B fibers (sympathetic) first → C fibers (temperature/pain) → small A delta (sharp pain) → larger A alpha/beta (touch, pressure, motor). Sympathetic block extends 2 dermatomes above sensory.",
  },
  {
    id: "q176",
    category: "Regional",
    difficulty: "Medium",
    stem: "Erector spinae plane (ESP) block targets:",
    choices: ["Brachial plexus", "Sympathetic chain", "Spinal nerves via paraspinal fascial spread (segmental analgesia)", "Femoral nerve"],
    answer: 2,
    explanation:
      "ESP block: LA into the deep fascia of erector spinae muscle spreads to ventral and dorsal rami via paraspinal/paravertebral space. Safer than paravertebral (no pleural risk). Useful for rib fractures, thoracic/abdominal surgery.",
  },
  {
    id: "q177",
    category: "Regional",
    difficulty: "Hard",
    stem: "Transient neurologic symptoms (TNS) after spinal lidocaine are characterized by:",
    choices: ["Bilateral lower-extremity weakness", "Buttock/leg pain hours after spinal, self-limited 1-7 days", "Permanent motor deficit", "Sensory level above T4"],
    answer: 1,
    explanation:
      "TNS: bilateral buttock/leg pain 12–24 h after intrathecal lidocaine, self-limited 1–7 days. Higher with lidocaine 5%; lithotomy position increases risk. Treat with NSAIDs.",
  },
  {
    id: "q178",
    category: "Regional",
    difficulty: "Medium",
    stem: "Saddle block (low spinal) provides anesthesia to:",
    choices: ["Lower extremities only", "Perineum, buttocks, and inner thighs (S2-S5)", "Lower abdomen and legs", "Entire pelvis"],
    answer: 1,
    explanation:
      "Saddle block: low intrathecal dose of hyperbaric LA with patient sitting → S2–S5 distribution covering perineum, buttocks, posterior thigh. Used for transurethral or anal procedures.",
  },
  {
    id: "q179",
    category: "Regional",
    difficulty: "Easy",
    stem: "Most common needle for spinal anesthesia (lowest PDPH risk):",
    choices: ["22-gauge Quincke cutting", "25-gauge Quincke cutting", "Pencil-point (Whitacre/Sprotte) 25-27 gauge", "Tuohy"],
    answer: 2,
    explanation:
      "Pencil-point (Whitacre, Sprotte) needles, smaller gauges (25–27), reduce PDPH compared to cutting (Quincke) needles. Tuohy is for epidural.",
  },
  {
    id: "q180",
    category: "Regional",
    difficulty: "Hard",
    stem: "Hallmark of intravascular LA injection during ultrasound-guided block:",
    choices: ["Pain on injection", "Loss of resistance", "Rapid onset of dense block (intraneural) or systemic symptoms (intravascular)", "No characteristic finding"],
    answer: 2,
    explanation:
      "Intravascular = systemic LAST symptoms (tinnitus, perioral numbness). Intraneural = pain, abnormal needle resistance, rapid dense block. Always aspirate; inject in 3–5 mL increments; monitor patient.",
  },

  // ============ CRITICAL CARE (15) ============
  {
    id: "q181",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Initial septic shock fluid resuscitation (per Surviving Sepsis):",
    choices: ["10 mL/kg crystalloid over 30 min", "30 mL/kg crystalloid within 3 h", "60 mL/kg crystalloid", "Albumin only"],
    answer: 1,
    explanation:
      "SSC 2021: 30 mL/kg balanced crystalloid within 3 h for sepsis-induced hypoperfusion. Reassess with dynamic markers. Add norepinephrine if MAP <65 after fluids.",
  },
  {
    id: "q182",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "ARDS Berlin definition severity is based on:",
    choices: ["PaO2/FiO2 ratio", "Tidal volume", "PEEP requirement", "CXR alone"],
    answer: 0,
    explanation:
      "ARDS Berlin: P/F ratio with PEEP ≥5 — mild 200–300, moderate 100–200, severe ≤100. Plus acute onset, bilateral infiltrates, not fully explained by cardiac failure.",
  },
  {
    id: "q183",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Most appropriate initial ventilator setting for severe ARDS:",
    choices: ["TV 10 mL/kg ABW, low PEEP", "TV 6 mL/kg PBW, plateau ≤30, individualized PEEP", "TV 4 mL/kg, no PEEP", "Pressure support only"],
    answer: 1,
    explanation:
      "ARDSnet: TV 6 mL/kg PBW (predicted body weight), plateau pressure ≤30, driving pressure ≤15, individualized PEEP (often from PEEP/FiO2 table). Permissive hypercapnia OK if pH ≥7.20.",
  },
  {
    id: "q184",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Indication for prone positioning in ARDS:",
    choices: ["All ARDS patients", "Refractory hypoxemia with P/F <150 on PEEP ≥5", "Hemodynamic instability", "Avoid in ARDS"],
    answer: 1,
    explanation:
      "PROSEVA trial: proning in severe ARDS (P/F <150) for ≥16 h/day improves mortality. Position for at least 12-16 h sessions. Watch for skin breakdown, ETT dislodgement.",
  },
  {
    id: "q185",
    category: "Critical Care",
    difficulty: "Easy",
    stem: "Lactate >4 mmol/L in septic shock indicates:",
    choices: ["Normal variation", "Tissue hypoperfusion → activate aggressive resuscitation", "Liver failure only", "Hypoxemia only"],
    answer: 1,
    explanation:
      "Lactate >4 → ↑ mortality. Trigger aggressive resuscitation (30 mL/kg crystalloid + vasopressor). Trend with treatment; non-clearing lactate is a poor prognostic sign.",
  },
  {
    id: "q186",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "Vasopressin 0.03 U/min is added in septic shock when:",
    choices: ["MAP <65 despite norepinephrine 0.25–0.5 mcg/kg/min", "First-line vasopressor", "After 24 h of stable BP", "Never"],
    answer: 0,
    explanation:
      "Per SSC, add vasopressin (fixed 0.03 U/min) when norepinephrine is escalating to higher doses (~0.25–0.5 mcg/kg/min). Catecholamine-sparing; not titrated. May reduce mortality.",
  },
  {
    id: "q187",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Steroids in septic shock are indicated when:",
    choices: ["All septic patients", "Patients with refractory hypotension on adequate vasopressor support", "Only with adrenal insufficiency confirmed", "Only in children"],
    answer: 1,
    explanation:
      "Hydrocortisone 200 mg/day if refractory shock despite adequate fluids + vasopressors. Improves shock reversal; mortality benefit debated.",
  },
  {
    id: "q188",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "RV failure in pulmonary embolism is BEST treated initially with:",
    choices: ["Fluid bolus 30 mL/kg", "Norepinephrine + inhaled pulmonary vasodilator + careful fluid", "Vasopressin alone", "Vasodilators (NTG)"],
    answer: 1,
    explanation:
      "Acute PE / RV failure: vasopressor (norepi) to maintain RV coronary perfusion, inotrope (dobutamine, milrinone), inhaled NO for pulmonary vasodilation. AVOID large fluid bolus (worsens RV distention).",
  },
  {
    id: "q189",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Targeted temperature management (TTM) post-arrest current best practice:",
    choices: ["32°C for 24 h", "32–36°C for 24 h, then avoid fever × 72 h", "Active rewarming immediately", "No temperature target"],
    answer: 1,
    explanation:
      "TTM trial: 32 vs 36°C equivalent. TTM2 (2021): 33 vs normothermia with strict fever avoidance — no difference. Current: keep ≤37.7°C and consider 32–36°C × 24 h in non-shockable arrests, individualize.",
  },
  {
    id: "q190",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Hyperglycemia management in critically ill patients:",
    choices: ["Strict control 80–110 mg/dL", "Target 140–180 mg/dL", "Tight control with insulin drip in all", "Allow >250 mg/dL"],
    answer: 1,
    explanation:
      "Target 140–180 in ICU (NICE-SUGAR). Strict 80–110 increases mortality due to hypoglycemia. Higher targets in trauma/brain injury due to hypoglycemia risk.",
  },
  {
    id: "q191",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "Most accurate fluid responsiveness predictor in patient under positive-pressure ventilation:",
    choices: ["Static CVP", "Pulse pressure variation (PPV) >12-13%", "MAP alone", "Urine output trend"],
    answer: 1,
    explanation:
      "PPV >12-13% during PPV (with TV >8 mL/kg, sinus rhythm, closed chest) predicts fluid responsiveness. Stroke volume variation similar. Passive leg raise is good in spontaneous breathing.",
  },
  {
    id: "q192",
    category: "Critical Care",
    difficulty: "Easy",
    stem: "DKA initial fluid resuscitation:",
    choices: ["LR 30 mL/kg", "NS at high rate initially, then transition to LR or 1/2 NS", "D5W only", "Albumin"],
    answer: 1,
    explanation:
      "DKA: start with 0.9% NS at high rate (1–2 L over first 1–2 h). Transition to 1/2 NS once volume restored. Add D5 when glucose ~250. Insulin drip starts after K+ confirmed not severely low.",
  },
  {
    id: "q193",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Most common cause of new respiratory failure in PACU:",
    choices: ["MI", "Residual paralysis with airway obstruction or hypoventilation", "PE", "Aspiration"],
    answer: 1,
    explanation:
      "Residual paralysis (TOF ratio <0.9) is a leading cause of postoperative respiratory failure, aspiration, and reintubation. Pre-extubation TOF 4/4 with sustained tetany should be confirmed.",
  },
  {
    id: "q194",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "Severe rhabdomyolysis: targets are:",
    choices: ["UOP >0.5 mL/kg/h, alkalinize urine to pH >6.5", "UOP >1–2 mL/kg/h, alkalinize urine pH >6.5, consider mannitol", "Avoid fluid resuscitation", "Treat hyperkalemia only"],
    answer: 1,
    explanation:
      "Rhabdo: aggressive hydration (UOP target 1–2 mL/kg/h), alkalinize urine (pH >6.5) with bicarb to prevent myoglobin precipitation in tubules. Consider mannitol. Monitor for hyperkalemia, hypocalcemia, AKI.",
  },
  {
    id: "q195",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Recommended PEEP for moderate ARDS (P/F 100-200):",
    choices: ["0 cmH2O", "5 cmH2O", "Individualized higher PEEP (10-20)", "Always 20 cmH2O"],
    answer: 2,
    explanation:
      "Higher PEEP improves oxygenation in moderate-severe ARDS. Titrate using PEEP/FiO2 table, esophageal pressure, or driving pressure-guided approach. Watch for barotrauma and hemodynamic compromise.",
  },

  // ============ EQUIPMENT & MONITORING (15) ============
  {
    id: "q196",
    category: "Equipment",
    difficulty: "Easy",
    stem: "Color code (USA) for nitrous oxide tank:",
    choices: ["Green", "Blue", "Yellow", "Brown"],
    answer: 1,
    explanation:
      "USA gas tank colors: O2 green, air yellow, N2O blue, N2 black, CO2 gray. International standards differ (e.g., O2 white). PISS prevents wrong-tank attachment.",
  },
  {
    id: "q197",
    category: "Equipment",
    difficulty: "Medium",
    stem: "Full E-cylinder of O2 contains how many liters?",
    choices: ["100 L", "660 L", "1500 L", "5000 L"],
    answer: 1,
    explanation:
      "Full O2 E-cylinder: 660 L at 1900 psi. N2O E-cylinder: 1590 L at 745 psi (liquid). H-cylinder of O2 ~6900 L.",
  },
  {
    id: "q198",
    category: "Equipment",
    difficulty: "Hard",
    stem: "Calculate remaining time on O2 E-cylinder reading 1500 psi at 4 L/min flow:",
    choices: ["~30 min", "~60 min", "~125 min (2 h)", "~250 min"],
    answer: 2,
    explanation:
      "O2 E-cylinder: ratio of psi to L: 660 L / 1900 psi ≈ 0.35 L/psi. At 1500 psi → ~520 L. At 4 L/min → 130 min. Quick formula: time(min) = PSI ÷ (3 × flow) = 1500 ÷ 12 = 125 min.",
  },
  {
    id: "q199",
    category: "Equipment",
    difficulty: "Medium",
    stem: "First step if pipeline O2 pressure fails during a case:",
    choices: ["Continue with backup tanks on machine, switch to manual ventilation with O2 from cylinder", "Extubate and abort", "Call hospital engineer first", "Increase total fresh gas flow"],
    answer: 0,
    explanation:
      "O2 pipeline failure: open E-cylinder O2 on machine (already attached). Switch to TIVA or maintain volatile from backup. Disconnect pipeline (so backup tank doesn't drain through it). Call for help.",
  },
  {
    id: "q200",
    category: "Equipment",
    difficulty: "Medium",
    stem: "Capnography is critical for confirming:",
    choices: ["Adequate cardiac output", "Successful endotracheal intubation", "Pulmonary function", "Hemoglobin level"],
    answer: 1,
    explanation:
      "Sustained EtCO2 waveform is the gold standard for ETT placement confirmation. Absence (or transient brief readings only) = esophageal intubation. Also detects circuit disconnection, low CO, PE, MH.",
  },
  {
    id: "q201",
    category: "Monitoring",
    difficulty: "Easy",
    stem: "Pulse oximetry uses two wavelengths of light at:",
    choices: ["660 nm (red) and 940 nm (infrared)", "500 nm and 600 nm", "400 nm and 700 nm", "Variable"],
    answer: 0,
    explanation:
      "Pulse ox: 660 nm (red — absorbed more by deoxy-Hb) and 940 nm (infrared — absorbed more by oxy-Hb). Ratio of pulsatile absorption derives SpO2.",
  },
  {
    id: "q202",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "Pulse oximeter reading is FALSELY LOW with:",
    choices: ["Carboxyhemoglobin (COHb)", "Methylene blue dye", "Hemoglobin S", "Bilirubin"],
    answer: 1,
    explanation:
      "Methylene blue → falsely LOW SpO2 (absorbs at 660 nm). COHb falsely HIGH (similar to O2Hb). MetHb pulls toward 85%. HbS, bilirubin, jaundice — no effect.",
  },
  {
    id: "q203",
    category: "Monitoring",
    difficulty: "Hard",
    stem: "Arterial line damping (over-damped, flat trace):",
    choices: ["Falsely high SBP, low DBP", "Falsely low SBP, high DBP, narrow PP, accurate MAP", "Falsely high MAP", "Accurate all values"],
    answer: 1,
    explanation:
      "Over-damped: ↓ SBP, ↑ DBP, narrow PP, MAP usually accurate. Under-damped: ↑ SBP, ↓ DBP, wide PP. Square-wave (flush) test confirms; oscillations should be 1.5–2 per cycle.",
  },
  {
    id: "q204",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "BIS (Bispectral Index) target for general anesthesia:",
    choices: ["0–20", "40–60", "70–90", "100"],
    answer: 1,
    explanation:
      "BIS 40–60 for GA. 60–70 light. <40 deep. Reduces awareness risk in TIVA. Not foolproof — can fail to detect light anesthesia or paralysis-related artifact.",
  },
  {
    id: "q205",
    category: "Monitoring",
    difficulty: "Easy",
    stem: "Best lead for detecting atrial dysrhythmias:",
    choices: ["Lead I", "Lead II", "Lead V5", "Lead aVR"],
    answer: 1,
    explanation:
      "Lead II shows tallest P wave (axis alignment) and is best for detecting P-wave morphology and atrial arrhythmias. V5 is best single lead for ischemia.",
  },
  {
    id: "q206",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "Train-of-four ratio (TOF ratio) safe for extubation:",
    choices: [">0.5", ">0.7", ">0.9", ">1.0"],
    answer: 2,
    explanation:
      "TOF ratio (T4/T1) >0.9 by acceleromyography → adequate recovery. <0.9 = residual paralysis risk → airway obstruction, aspiration. Direct palpation cannot quantify >0.7.",
  },
  {
    id: "q207",
    category: "Monitoring",
    difficulty: "Hard",
    stem: "Cerebral oximetry (NIRS) measures:",
    choices: ["Mixed venous saturation", "Regional cerebral O2 saturation (mostly venous, near-infrared spectroscopy)", "Arterial saturation", "Cerebral blood flow directly"],
    answer: 1,
    explanation:
      "NIRS (e.g. INVOS) uses near-infrared spectroscopy to estimate regional cerebral O2 saturation (~75% venous, 25% arterial). Baseline ~60–80%; >20% drop concerning for cerebral hypoperfusion.",
  },
  {
    id: "q208",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "Most accurate site for core temperature measurement under GA:",
    choices: ["Axillary", "Skin", "PA catheter (or distal esophageal/nasopharyngeal)", "Bladder"],
    answer: 2,
    explanation:
      "Core sites: PA catheter (gold standard), tympanic membrane, distal esophagus, nasopharynx. Bladder lags during fast thermal swings. Rectum inaccurate with stool. Skin always cooler than core.",
  },
  {
    id: "q209",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "ACT (Activated Clotting Time) target for cardiopulmonary bypass:",
    choices: [">200 seconds", ">300 seconds", ">480 seconds", ">1000 seconds"],
    answer: 2,
    explanation: "ACT >480 sec for full heparinization on CPB. Some centers >400. Check q30 min on bypass; redose heparin as needed.",
  },
  {
    id: "q210",
    category: "Monitoring",
    difficulty: "Easy",
    stem: "ASA Standards for Basic Anesthetic Monitoring REQUIRES which to be continually evaluated?",
    choices: ["Oxygenation, ventilation, circulation, temperature", "Oxygenation only", "Heart rate only", "Blood pressure only"],
    answer: 0,
    explanation:
      "ASA Standard II: continually evaluate oxygenation (FiO2 + SpO2), ventilation (capnography), circulation (ECG + BP), and temperature (if clinically significant changes expected).",
  },

  // ============ PERIOPERATIVE / MISC (15) ============
  {
    id: "q211",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Most important predictor of difficult intubation in pre-op evaluation:",
    choices: ["BMI alone", "Documented history of prior difficult intubation", "Mallampati alone", "Thyromental distance alone"],
    answer: 1,
    explanation:
      "Documented prior difficult intubation is the single strongest predictor. Always check anesthesia records (anesthesia tab in EHR), ask the patient, and review prior intubation notes.",
  },
  {
    id: "q212",
    category: "Perioperative",
    difficulty: "Easy",
    stem: "Antibiotic prophylaxis (cefazolin) optimal timing relative to incision:",
    choices: ["At time of skin incision", "Within 60 minutes before incision (ideally 15-45 min)", "After incision", "Day before"],
    answer: 1,
    explanation:
      "Cefazolin within 60 min before incision (ideally 15–45). Vancomycin and cipro need longer infusion → start ~1 h before. Give before tourniquet inflation.",
  },
  {
    id: "q213",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Cefazolin re-dosing interval:",
    choices: ["Every 1 hour", "Every 4 hours", "Every 8 hours", "No re-dose needed"],
    answer: 1,
    explanation:
      "Cefazolin re-dose q4h or with EBL >1500 mL. Other re-doses: cefoxitin/cefuroxime/zosyn q2h; clinda/metronidazole q6h; vanco generally no re-dose if <6 h case.",
  },
  {
    id: "q214",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "Cefazolin in patient with reported \"penicillin allergy\" (mild rash 20 years ago):",
    choices: ["Avoid all β-lactams, use vancomycin only", "Cefazolin is generally safe — cross-reactivity ~1%", "Use clindamycin only", "Skin test before all surgeries"],
    answer: 1,
    explanation:
      "Cross-reactivity penicillin → cephalosporin is ~1% (much lower than historical 10%). Cefazolin is safe in most patients with non-severe penicillin reactions. Avoid only with documented severe reactions (anaphylaxis, SJS, TEN).",
  },
  {
    id: "q215",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Best PONV prophylaxis combination for a patient with 4 Apfel risk factors:",
    choices: ["Single agent", "Ondansetron + dexamethasone", "Multimodal: TIVA + 5-HT3 + steroid + scopolamine ± droperidol/aprepitant", "Avoid all opioids"],
    answer: 2,
    explanation:
      "Apfel 3–4: multimodal — TIVA with propofol, ondansetron, dexamethasone, scopolamine patch, ± droperidol or aprepitant. Combine agents with different mechanisms.",
  },
  {
    id: "q216",
    category: "Perioperative",
    difficulty: "Easy",
    stem: "Holliday-Segar maintenance fluid for 70 kg adult:",
    choices: ["70 mL/h", "110 mL/h", "210 mL/h", "300 mL/h"],
    answer: 1,
    explanation:
      "4-2-1 rule: 4×10 + 2×10 + 1×50 = 40 + 20 + 50 = 110 mL/h. Modern practice often uses zero-balance or goal-directed strategies instead of routine maintenance.",
  },
  {
    id: "q217",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Initial action for unexpected intra-op hypertension under stable anesthesia:",
    choices: ["Immediate antihypertensive bolus", "Deepen anesthesia, ensure adequate analgesia, then reassess", "Stop volatile", "Decrease minute ventilation"],
    answer: 1,
    explanation:
      "First, deepen anesthesia (propofol bolus, ↑ volatile) and ensure analgesia (fentanyl). Then assess for other causes: TIVA pump issue, hypercarbia, light anesthesia, sympathetic surge. Reach for specific antihypertensives last.",
  },
  {
    id: "q218",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "ERAS (Enhanced Recovery After Surgery) principles include all EXCEPT:",
    choices: ["Pre-op carbohydrate loading", "Multimodal analgesia (avoid opioid reliance)", "Aggressive crystalloid resuscitation", "Early mobilization and feeding"],
    answer: 2,
    explanation:
      "ERAS uses GOAL-DIRECTED fluid strategy, not aggressive fluids (avoid bowel edema). Other principles: carb loading, minimal preop fasting, multimodal analgesia, regional anesthesia, normothermia, early feeding/mobility, PONV prophylaxis.",
  },
  {
    id: "q219",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Pre-op aspirin in patient with coronary stents <6 months old:",
    choices: ["Stop 7 days before all surgery", "Continue through surgery (high stent thrombosis risk)", "Stop and bridge with heparin", "No specific recommendation"],
    answer: 1,
    explanation:
      "Continue ASA peri-op in patients with recent stents to reduce stent thrombosis risk. Delay non-essential surgery 6 (BMS) to 12 months (DES) post-PCI. P2Y12 inhibitors may be held if urgent.",
  },
  {
    id: "q220",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "AICD management for surgery above the umbilicus:",
    choices: ["Always disable with magnet", "Interrogate device pre-op, anti-tachy therapy can be disabled with magnet if monopolar electrocautery used", "Permanent magnet placement", "Reprogram only by cardiology pre-op"],
    answer: 1,
    explanation:
      "Pre-op interrogation. Magnet placement DISABLES anti-tachy therapy (shocks) only — does NOT change pacing. Reprogram to asynchronous mode if pacing-dependent and EMI expected. Have external defib ready.",
  },
  {
    id: "q221",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "Anaphylaxis intra-operatively: most common culprit drug class:",
    choices: ["Volatile anesthetics", "Neuromuscular blockers (~50–70%)", "Opioids", "Crystalloids"],
    answer: 1,
    explanation:
      "NMBAs cause 50–70% of intra-op anaphylaxis (rocuronium and sux most common). Antibiotics ~15%, latex/chlorhexidine ~10%. Tryptase confirms; refer to allergy for skin testing.",
  },
  {
    id: "q222",
    category: "Perioperative",
    difficulty: "Easy",
    stem: "Most appropriate first step in suspected intra-op anaphylaxis:",
    choices: ["Diphenhydramine", "Stop trigger, 100% O2, fluid bolus, epinephrine 10-100 mcg IV", "Steroids", "Albuterol alone"],
    answer: 1,
    explanation:
      "Anaphylaxis treatment: stop offending agent, 100% O2, fluid bolus, EPINEPHRINE 10–100 mcg IV titrated. Don't delay epi waiting for histamine blockers. Histamine blockers/steroids are secondary.",
  },
  {
    id: "q223",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Most common cause of intra-operative awareness:",
    choices: ["Inadequate amnestic agents in high-risk cases (esp. with paralysis)", "Patient noncompliance", "Equipment failure", "Excessive anesthetic depth"],
    answer: 0,
    explanation:
      "Awareness 1–2 per 1000. Higher in cardiac, trauma, OB, ICU. Risk factors: paralysis without adequate anesthesia, light anesthesia in unstable patient, chronic alcohol/opioid/cocaine use, history of awareness.",
  },
  {
    id: "q224",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Continuous monitoring required by ASA for all anesthetics:",
    choices: ["EEG and BIS", "EtCO2 disconnect alarm during mechanical ventilation, EKG, BP q5 min, SpO2 continuously", "Arterial line", "TEE"],
    answer: 1,
    explanation:
      "ASA Standard II requirements: ECG continuously displayed, BP q5 min minimum, SpO2 continuously, capnography (continuous), temperature when clinically significant. Disconnect alarm required during mechanical ventilation.",
  },
  {
    id: "q225",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "Latex allergy: most likely cross-reactive food allergen:",
    choices: ["Peanuts", "Wheat", "Banana, kiwi, avocado (tropical fruits + chestnut)", "Shellfish"],
    answer: 2,
    explanation:
      "Latex-fruit syndrome: banana, kiwi, avocado, chestnut, passion fruit, mango. Profilins share epitopes. Ask about these foods in allergy history. Use latex-free room.",
  },

  // ============ ANATOMY (10) ============
  {
    id: "q226",
    category: "Anatomy",
    difficulty: "Easy",
    stem: "Coronary artery branching: right coronary artery supplies the SA node in approximately what percentage of patients?",
    choices: ["20%", "40%", "60%", "80% (right-dominant)"],
    answer: 2,
    explanation:
      "SA node: ~60% supplied by RCA, ~40% by LCx. AV node: ~85-90% by RCA (right-dominant). PDA supplied by RCA in 'right-dominant' coronaries.",
  },
  {
    id: "q227",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "Stellate ganglion lies anterior to which vertebral level?",
    choices: ["C2-C3", "C7-T1", "T4-T5", "L2"],
    answer: 1,
    explanation:
      "Stellate ganglion = fusion of inferior cervical and 1st thoracic ganglion. Located anterior to C7-T1 (transverse process of C7 / 1st rib head). Blocked for CRPS, vascular insufficiency of upper extremity.",
  },
  {
    id: "q228",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The internal jugular vein has what relationship to the carotid artery at the level of cricoid cartilage?",
    choices: ["Medial", "Lateral and slightly anterior", "Deep", "Variable but commonly anterolateral"],
    answer: 3,
    explanation:
      "IJ commonly anterolateral to carotid at cricoid level — but anatomic variation is significant. Always use ultrasound for CVL placement to identify position and rule out overlap.",
  },
  {
    id: "q229",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "Phrenic nerve originates from:",
    choices: ["C2-C3", "C3-C5 ('3, 4, 5 keep the diaphragm alive')", "T1-T2", "L1-L2"],
    answer: 1,
    explanation:
      "Phrenic nerve C3-C5. High cervical injury can cause diaphragmatic paralysis. Interscalene block at C5-C6 level causes ~100% phrenic palsy via local spread.",
  },
  {
    id: "q230",
    category: "Anatomy",
    difficulty: "Easy",
    stem: "The cricoid cartilage is at the level of:",
    choices: ["C3", "C6", "T1", "T4"],
    answer: 1,
    explanation:
      "Cricoid = C6 in adults. Marks transition pharynx → esophagus and larynx → trachea. Site of Sellick maneuver (cricoid pressure).",
  },
  {
    id: "q231",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "Brachial plexus is formed from ventral rami of:",
    choices: ["C3-C7", "C5-T1", "C8-T2", "T1-T4"],
    answer: 1,
    explanation: "Brachial plexus: C5-T1. Roots → trunks → divisions → cords → terminal branches. Blocks target these at different levels.",
  },
  {
    id: "q232",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "The dermatome at the umbilicus is:",
    choices: ["T6", "T10", "L1", "L3"],
    answer: 1,
    explanation: "Key dermatomes: nipples T4, xiphoid T6, umbilicus T10, pubic symphysis L1. C-section needs T4 sensory block.",
  },
  {
    id: "q233",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "Spinal cord typically ends in adults at:",
    choices: ["T12", "L1 (conus medullaris)", "L4-L5", "S2"],
    answer: 1,
    explanation:
      "Conus medullaris ends at L1 (adult) or L3 (neonate). Spinal punctures done at L3-L4 or L4-L5 to avoid cord. Tuffier's line (iliac crests) ≈ L4 vertebra.",
  },
  {
    id: "q234",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "Stellate ganglion block successful sign:",
    choices: ["Horner's syndrome (ptosis, miosis, anhidrosis) ipsilateral", "Bilateral Horner's", "Vocal cord paralysis", "Trismus"],
    answer: 0,
    explanation:
      "Successful stellate ganglion block → ipsilateral Horner's (ptosis, miosis, anhidrosis), conjunctival injection, warm dry hand. Also may cause hoarseness (RLN), phrenic palsy.",
  },
  {
    id: "q235",
    category: "Anatomy",
    difficulty: "Easy",
    stem: "Adult epidural space distance from skin (lumbar):",
    choices: ["1–2 cm", "3–5 cm in average adults", "8–10 cm", ">15 cm"],
    answer: 1,
    explanation:
      "Adult lumbar epidural depth typically 3–5 cm from skin. Deeper with obesity (up to 8+ cm), shallower in thin patients (2–3 cm).",
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
  "Monitoring",
  "Anatomy",
  "Perioperative",
] as const;
