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
  // ============ BOARD EXPANSION BATCH 1: Pharmacology / Physiology ============
  {
    id: "q236",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which volatile anesthetic is most associated with carbon monoxide production when passed through desiccated CO2 absorbent?",
    choices: ["Sevoflurane", "Isoflurane", "Desflurane", "Halothane"],
    answer: 2,
    explanation:
      "CO production from desiccated absorbent is greatest with the agents containing the CHF2 moiety: desflurane > enflurane > isoflurane. Sevoflurane produces little CO but instead generates Compound A and heat (risk of fire) with dry absorbent.",
  },
  {
    id: "q237",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Sevoflurane degradation by CO2 absorbents produces which potentially nephrotoxic compound?",
    choices: ["Compound A", "Carbon monoxide", "Trifluoroacetic acid", "Fluoride only"],
    answer: 0,
    explanation:
      "Sevoflurane reacts with strong bases (KOH/NaOH) in absorbent to form Compound A, a vinyl ether nephrotoxic in rats. FDA recommends fresh gas flow ≥1–2 L/min. Newer Ca(OH)2-based absorbents produce minimal Compound A.",
  },
  {
    id: "q238",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Which factor SPEEDS the rate of rise of alveolar to inspired anesthetic concentration (FA/FI)?",
    choices: ["High blood:gas solubility", "Increased cardiac output", "Large right-to-left shunt", "Increased alveolar ventilation"],
    answer: 3,
    explanation:
      "Increased alveolar ventilation speeds the rise of FA/FI. High solubility, increased cardiac output, and shunts all slow induction. Low solubility agents (desflurane, N2O) have the fastest wash-in.",
  },
  {
    id: "q239",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "The second gas effect is best explained by:",
    choices: ["Increased metabolism of the second gas", "Rapid uptake of a high-volume first gas concentrating the second gas", "Decreased solubility of the second gas", "Increased cardiac output"],
    answer: 1,
    explanation:
      "High-volume uptake of nitrous oxide concentrates the remaining alveolar gases (concentrating effect) and augments tracheal inflow, accelerating uptake of a concurrently administered volatile agent (the second gas).",
  },
  {
    id: "q240",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which opioid is metabolized to normeperidine, a metabolite that can cause seizures with accumulation?",
    choices: ["Morphine", "Fentanyl", "Meperidine", "Hydromorphone"],
    answer: 2,
    explanation:
      "Meperidine is demethylated to normeperidine, a CNS excitatory metabolite with a long half-life that accumulates in renal failure and can cause tremors and seizures. Naloxone does not reverse normeperidine neurotoxicity.",
  },
  {
    id: "q241",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Morphine's active metabolite responsible for prolonged effect in renal failure is:",
    choices: ["Morphine-3-glucuronide", "Morphine-6-glucuronide", "Normorphine", "Hydromorphone-3-glucuronide"],
    answer: 1,
    explanation:
      "Morphine-6-glucuronide is a potent µ-agonist renally excreted; it accumulates in renal failure causing prolonged sedation and respiratory depression. Morphine-3-glucuronide is inactive at the µ receptor (may be neuroexcitatory).",
  },
  {
    id: "q242",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Remifentanil's ultra-short context-sensitive half-time is due to metabolism by:",
    choices: ["Hepatic CYP3A4", "Plasma and tissue nonspecific esterases", "Plasma pseudocholinesterase", "Renal excretion"],
    answer: 1,
    explanation:
      "Remifentanil is hydrolyzed by nonspecific plasma and tissue esterases (NOT pseudocholinesterase), giving a context-sensitive half-time of ~3–5 min independent of infusion duration or organ function.",
  },
  {
    id: "q243",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which neuromuscular blocker undergoes Hofmann elimination and is preferred in combined hepatic and renal failure?",
    choices: ["Rocuronium", "Vecuronium", "Cisatracurium", "Pancuronium"],
    answer: 2,
    explanation:
      "Cisatracurium undergoes organ-independent Hofmann elimination (pH/temperature-dependent), making it ideal in hepatic and renal failure. Unlike atracurium, it produces clinically negligible laudanosine.",
  },
  {
    id: "q244",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "A patient with atypical (homozygous) pseudocholinesterase receives succinylcholine. Expected duration of paralysis is approximately:",
    choices: ["5–10 minutes", "15–20 minutes", "1–2 hours or longer", "No effect"],
    answer: 2,
    explanation:
      "Homozygous atypical pseudocholinesterase markedly prolongs succinylcholine to hours. Management is continued sedation and ventilation until block resolves. Dibucaine number is low (~20).",
  },
  {
    id: "q245",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A dibucaine number of 80 indicates:",
    choices: ["Homozygous atypical enzyme", "Heterozygous atypical enzyme", "Normal homozygous enzyme", "Absent enzyme"],
    answer: 2,
    explanation:
      "Dibucaine inhibits normal pseudocholinesterase ~80%. A dibucaine number of 80 = normal homozygous; ~40–60 = heterozygous (mildly prolonged); ~20 = homozygous atypical (markedly prolonged). It measures enzyme quality, not quantity.",
  },
  {
    id: "q246",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which property describes the relationship: greater potency of a volatile agent correlates with:",
    choices: ["Higher MAC", "Higher oil:gas partition coefficient", "Lower lipid solubility", "Higher blood:gas coefficient"],
    answer: 1,
    explanation:
      "The Meyer-Overton correlation: anesthetic potency (low MAC) correlates with high lipid (oil:gas) solubility. Blood:gas coefficient relates to speed of onset/offset, not potency.",
  },
  {
    id: "q247",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "Which condition INCREASES MAC?",
    choices: ["Hypothermia", "Chronic alcohol use", "Acute alcohol intoxication", "Pregnancy"],
    answer: 1,
    explanation:
      "Chronic alcohol use, hyperthermia, hypernatremia, and stimulants (chronic) increase MAC. Hypothermia, acute intoxication, pregnancy, age, opioids, and acidosis decrease MAC.",
  },
  {
    id: "q248",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Dexmedetomidine produces sedation primarily by acting on which receptor?",
    choices: ["GABA-A", "Central alpha-2 adrenergic", "NMDA antagonism", "Mu opioid"],
    answer: 1,
    explanation:
      "Dexmedetomidine is a selective central alpha-2 agonist (locus coeruleus) producing sedation that mimics natural sleep with minimal respiratory depression, plus analgesia and sympatholysis (risk of bradycardia/hypotension).",
  },
  {
    id: "q249",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Ketamine produces dissociative anesthesia primarily via:",
    choices: ["GABA-A agonism", "NMDA receptor antagonism", "Alpha-2 agonism", "Opioid receptor agonism"],
    answer: 1,
    explanation:
      "Ketamine is a noncompetitive NMDA receptor antagonist. It preserves airway reflexes and respiration, is a bronchodilator, and provides analgesia, but raises sympathetic tone (caution in catecholamine-depleted patients).",
  },
  {
    id: "q250",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Propofol infusion syndrome is characterized by all EXCEPT:",
    choices: ["Metabolic acidosis", "Rhabdomyolysis", "Hyperkalemia and cardiac failure", "Hypoglycemia"],
    answer: 3,
    explanation:
      "PRIS features metabolic acidosis, rhabdomyolysis, hyperkalemia, lipemia, hepatomegaly, and refractory bradycardia/cardiac failure—typically with prolonged high-dose infusions (>4 mg/kg/h >48 h). Hyperglycemia, not hypoglycemia, may occur.",
  },
  {
    id: "q251",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which local anesthetic is an ESTER linked agent?",
    choices: ["Lidocaine", "Bupivacaine", "Chloroprocaine", "Ropivacaine"],
    answer: 2,
    explanation:
      "Esters (one 'i' in the name): procaine, chloroprocaine, tetracaine, cocaine, benzocaine—metabolized by plasma cholinesterase to PABA (allergy risk). Amides (two 'i's): lidocaine, bupivacaine, ropivacaine, mepivacaine—hepatic metabolism.",
  },
  {
    id: "q252",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which local anesthetic is most associated with methemoglobinemia?",
    choices: ["Bupivacaine", "Benzocaine", "Ropivacaine", "Lidocaine"],
    answer: 1,
    explanation:
      "Benzocaine (topical) and prilocaine are the classic causes of methemoglobinemia. Treatment is methylene blue 1–2 mg/kg IV. Suspect with low SpO2 (~85%) unresponsive to oxygen and chocolate-colored blood.",
  },
  {
    id: "q253",
    category: "Pharmacology",
    difficulty: "Easy",
    stem: "The maximum recommended dose of lidocaine WITH epinephrine is approximately:",
    choices: ["3 mg/kg", "4.5 mg/kg", "7 mg/kg", "10 mg/kg"],
    answer: 2,
    explanation:
      "Lidocaine max is ~4.5 mg/kg plain and ~7 mg/kg with epinephrine (epinephrine slows systemic absorption). Bupivacaine max ~2.5 mg/kg (3 mg/kg with epi).",
  },
  {
    id: "q254",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Which local anesthetic has the highest risk of cardiotoxicity that is refractory to resuscitation?",
    choices: ["Lidocaine", "Bupivacaine", "Chloroprocaine", "Mepivacaine"],
    answer: 1,
    explanation:
      "Bupivacaine is the most cardiotoxic due to its slow dissociation from cardiac Na channels ('fast-in, slow-out'), causing refractory ventricular arrhythmias. Ropivacaine and levobupivacaine are less cardiotoxic alternatives.",
  },
  {
    id: "q255",
    category: "Physiology",
    difficulty: "Medium",
    stem: "A leftward shift of the oxyhemoglobin dissociation curve is caused by:",
    choices: ["Acidosis", "Hyperthermia", "Increased 2,3-DPG", "Hypothermia"],
    answer: 3,
    explanation:
      "Leftward shift (increased O2 affinity, decreased release to tissues): hypothermia, alkalosis, decreased CO2, decreased 2,3-DPG, fetal hemoglobin, carbon monoxide. The opposite conditions shift it rightward.",
  },
  {
    id: "q256",
    category: "Physiology",
    difficulty: "Medium",
    stem: "The Bohr effect describes:",
    choices: ["CO2 carriage influenced by oxygenation of hemoglobin", "Increased CO2 shifting the O2 curve rightward", "O2 affinity of fetal hemoglobin", "Effect of 2,3-DPG on storage"],
    answer: 1,
    explanation:
      "Bohr effect: increased CO2/H+ (acidosis) reduces hemoglobin O2 affinity (rightward shift), enhancing O2 unloading at tissues. The Haldane effect is the reciprocal—deoxygenated Hb carries more CO2.",
  },
  {
    id: "q257",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Hypoxic pulmonary vasoconstriction is inhibited by which of the following?",
    choices: ["Hypothermia", "Volatile anesthetics at high dose", "Hypercapnia", "Acidosis"],
    answer: 1,
    explanation:
      "Volatile anesthetics (dose-dependent), vasodilators (nitroprusside, nitroglycerin, dobutamine, calcium channel blockers), and high mixed venous PO2 inhibit HPV, potentially worsening shunt during one-lung ventilation.",
  },
  {
    id: "q258",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which lung volume CANNOT be measured by simple spirometry?",
    choices: ["Tidal volume", "Inspiratory reserve volume", "Residual volume", "Expiratory reserve volume"],
    answer: 2,
    explanation:
      "Residual volume (and thus FRC and total lung capacity, which contain it) cannot be measured by spirometry; it requires helium dilution, nitrogen washout, or body plethysmography.",
  },
  {
    id: "q259",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Functional residual capacity is decreased by all of the following EXCEPT:",
    choices: ["General anesthesia", "Supine positioning", "Pregnancy", "Standing/upright posture"],
    answer: 3,
    explanation:
      "FRC falls with general anesthesia, supine/Trendelenburg position, obesity, pregnancy, and abdominal distension. Upright posture increases FRC. Reduced FRC predisposes to atelectasis and rapid desaturation.",
  },
  {
    id: "q260",
    category: "Physiology",
    difficulty: "Hard",
    stem: "The alveolar gas equation gives PAO2 = FiO2(Patm − PH2O) − PaCO2/R. At sea level on room air, normal PAO2 is approximately:",
    choices: ["60 mmHg", "100 mmHg", "150 mmHg", "713 mmHg"],
    answer: 1,
    explanation:
      "PAO2 = 0.21(760 − 47) − 40/0.8 = 0.21(713) − 50 ≈ 150 − 50 = 100 mmHg. A widened A-a gradient suggests shunt, V/Q mismatch, or diffusion limitation.",
  },
  {
    id: "q261",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which acid-base disturbance is expected with prolonged vomiting (loss of gastric contents)?",
    choices: ["Hyperchloremic metabolic acidosis", "Hypochloremic hypokalemic metabolic alkalosis", "Anion gap metabolic acidosis", "Respiratory acidosis"],
    answer: 1,
    explanation:
      "Loss of HCl and volume from vomiting causes hypochloremic, hypokalemic metabolic alkalosis with paradoxical aciduria. Treatment is volume and potassium/chloride repletion (normal saline).",
  },
  {
    id: "q262",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Using Winter's formula, the expected PaCO2 for a patient with metabolic acidosis and HCO3 of 12 is approximately:",
    choices: ["20 mmHg", "26 mmHg", "32 mmHg", "40 mmHg"],
    answer: 1,
    explanation:
      "Winter's formula: expected PaCO2 = 1.5(HCO3) + 8 ± 2 = 1.5(12) + 8 = 26 mmHg. A measured PaCO2 higher than this indicates an additional respiratory acidosis (inadequate compensation).",
  },
  {
    id: "q263",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Cerebral blood flow is autoregulated over a mean arterial pressure range of approximately:",
    choices: ["20–60 mmHg", "50–150 mmHg", "100–200 mmHg", "60–100 mmHg"],
    answer: 1,
    explanation:
      "CBF is autoregulated between MAP ~50–150 mmHg in normotensive adults; the curve shifts right in chronic hypertension. Outside this range CBF becomes pressure-dependent.",
  },
  {
    id: "q264",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Within the autoregulatory range, cerebral blood flow changes by roughly how much per 1 mmHg change in PaCO2?",
    choices: ["1–2 mL/100g/min", "0.1 mL/100g/min", "10 mL/100g/min", "No change"],
    answer: 0,
    explanation:
      "CBF changes ~1–2 mL/100g/min per mmHg change in PaCO2 (range ~20–80 mmHg). Hyperventilation reduces CBF/ICP; hypoventilation increases it. Effect is transient (~6–24 h) due to CSF bicarbonate buffering.",
  },
  {
    id: "q265",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Which volatile anesthetic causes the greatest increase in cerebral blood flow at equipotent (1 MAC) concentrations?",
    choices: ["Sevoflurane", "Desflurane", "Isoflurane", "Halothane"],
    answer: 3,
    explanation:
      "Halothane is the most potent cerebral vasodilator (uncoupling CBF from metabolism). Among modern agents the order is roughly halothane > enflurane > isoflurane ≈ desflurane > sevoflurane. All decrease CMRO2.",
  },
  {
    id: "q266",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Coronary perfusion of the left ventricle occurs predominantly during:",
    choices: ["Systole", "Diastole", "Isovolumic contraction", "Equally throughout the cycle"],
    answer: 1,
    explanation:
      "LV myocardium is perfused mainly during diastole because systolic wall tension compresses intramural vessels. Tachycardia (shortened diastole) and low diastolic pressure reduce coronary perfusion—important in aortic stenosis/CAD.",
  },
  {
    id: "q267",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which formula correctly expresses cardiac output?",
    choices: ["Heart rate × systemic vascular resistance", "Stroke volume × heart rate", "MAP × stroke volume", "Preload × afterload"],
    answer: 1,
    explanation:
      "CO = stroke volume × heart rate. Stroke volume depends on preload, afterload, and contractility. MAP = CO × SVR (analogous to Ohm's law).",
  },
  {
    id: "q268",
    category: "Physiology",
    difficulty: "Hard",
    stem: "The Fick principle calculates cardiac output using:",
    choices: ["Thermodilution temperature change", "O2 consumption divided by arteriovenous O2 difference", "Pulse contour analysis", "Doppler velocity"],
    answer: 1,
    explanation:
      "Fick: CO = VO2 / (CaO2 − CvO2). Oxygen consumption divided by the arteriovenous oxygen content difference gives cardiac output. Thermodilution is a separate clinical method.",
  },
  {
    id: "q269",
    category: "Physiology",
    difficulty: "Medium",
    stem: "On a normal renal/cardiac response, which hormone promotes water reabsorption by inserting aquaporins in the collecting duct?",
    choices: ["Aldosterone", "Antidiuretic hormone (vasopressin)", "Atrial natriuretic peptide", "Renin"],
    answer: 1,
    explanation:
      "ADH (vasopressin) acts on V2 receptors in the collecting duct to insert aquaporin-2 channels, increasing water reabsorption. Aldosterone drives Na reabsorption/K secretion in the distal tubule.",
  },
  {
    id: "q270",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which electrolyte abnormality classically produces peaked T waves progressing to a sine-wave ECG?",
    choices: ["Hypokalemia", "Hyperkalemia", "Hypocalcemia", "Hypermagnesemia"],
    answer: 1,
    explanation:
      "Hyperkalemia: peaked T waves → widened QRS → loss of P waves → sine wave → arrest. Treatment: calcium (membrane stabilization), insulin/glucose, beta-agonist, bicarbonate, then removal (diuretics/dialysis/kayexalate).",
  },
  {
    id: "q271",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which antiemetic carries an FDA warning for QT prolongation and is given at the END of surgery for maximal effect?",
    choices: ["Dexamethasone", "Ondansetron", "Metoclopramide", "Scopolamine"],
    answer: 1,
    explanation:
      "Ondansetron (5-HT3 antagonist) prolongs QT and is most effective given near the end of surgery. Dexamethasone is best given at induction. Combining agents of different classes is most effective for high PONV risk.",
  },
  {
    id: "q272",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Sugammadex encapsulates which agents most effectively?",
    choices: ["Cisatracurium and atracurium", "Rocuronium and vecuronium", "Succinylcholine", "Pancuronium and mivacurium"],
    answer: 1,
    explanation:
      "Sugammadex (a modified gamma-cyclodextrin) selectively encapsulates aminosteroid agents—rocuronium > vecuronium > pancuronium. It has no effect on benzylisoquinoliniums (cisatracurium) or succinylcholine.",
  },
  {
    id: "q273",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "A patient who received sugammadex needs urgent re-paralysis 1 hour later. Best choice is:",
    choices: ["Immediate standard-dose rocuronium", "A benzylisoquinolinium (e.g., cisatracurium) or wait/increase roc dose", "Repeat sugammadex", "Neostigmine"],
    answer: 1,
    explanation:
      "After sugammadex, aminosteroid blockers may be ineffective due to residual encapsulation. Within 24 h, use a benzylisoquinolinium agent (cisatracurium) or high-dose rocuronium (1.2 mg/kg) if needed.",
  },
  {
    id: "q274",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Neostigmine is co-administered with glycopyrrolate primarily to:",
    choices: ["Enhance neuromuscular reversal", "Prevent muscarinic bradycardia and secretions", "Prolong the block", "Reverse opioids"],
    answer: 1,
    explanation:
      "Neostigmine increases acetylcholine at both nicotinic (reversal) and muscarinic (bradycardia, salivation, bronchospasm) sites. Glycopyrrolate (antimuscarinic) blocks the unwanted muscarinic effects; its onset matches neostigmine better than atropine.",
  },
  {
    id: "q275",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Giving neostigmine when neuromuscular function has already fully recovered (no block) can cause:",
    choices: ["Prolonged paralysis from depolarizing-type weakness", "Tachycardia", "Mydriasis", "Hypertension"],
    answer: 0,
    explanation:
      "Excess acetylcholine without block to antagonize can paradoxically cause muscle weakness (a depolarizing-type block) and worsen respiratory function. Reversal agents should be dosed to the depth of residual block (guided by TOF).",
  },
  {
    id: "q276",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which induction agent most reliably preserves the ventilatory response to hypercapnia and airway reflexes?",
    choices: ["Propofol", "Ketamine", "Thiopental", "Etomidate"],
    answer: 1,
    explanation:
      "Ketamine maintains respiratory drive and airway reflexes (though aspiration is still possible) and is a bronchodilator. Propofol and barbiturates produce dose-dependent respiratory depression.",
  },
  {
    id: "q277",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "The primary mechanism of action of most IV induction agents (propofol, barbiturates, etomidate) is:",
    choices: ["NMDA antagonism", "Potentiation of GABA-A receptor chloride conductance", "Opioid agonism", "Sodium channel blockade"],
    answer: 1,
    explanation:
      "Propofol, barbiturates, etomidate, and benzodiazepines act primarily by enhancing GABA-A receptor function (increased Cl- conductance, hyperpolarization). Ketamine is the notable exception (NMDA antagonist).",
  },
  {
    id: "q278",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Flumazenil reverses benzodiazepine sedation but carries the risk of:",
    choices: ["Methemoglobinemia", "Seizures in benzodiazepine-dependent patients", "Malignant hyperthermia", "Prolonged QT"],
    answer: 1,
    explanation:
      "Flumazenil (competitive GABA-A benzodiazepine-site antagonist) can precipitate seizures in chronic benzodiazepine users or mixed overdoses (e.g., TCA co-ingestion). Its short half-life risks re-sedation.",
  },
  {
    id: "q279",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which opioid is associated with serotonin syndrome and should be used cautiously with MAOIs/SSRIs?",
    choices: ["Morphine", "Hydromorphone", "Meperidine", "Codeine"],
    answer: 2,
    explanation:
      "Meperidine has serotonergic activity and can precipitate serotonin syndrome with MAOIs/SSRIs (also tramadol, methadone, fentanyl to a lesser degree). Avoid meperidine with MAOIs.",
  },
  {
    id: "q280",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Codeine is a prodrug requiring conversion to morphine by which enzyme?",
    choices: ["CYP3A4", "CYP2D6", "Plasma esterase", "UGT2B7"],
    answer: 1,
    explanation:
      "Codeine is O-demethylated to morphine by CYP2D6. Poor metabolizers get little analgesia; ultra-rapid metabolizers risk toxicity—hence codeine is contraindicated in children post-tonsillectomy.",
  },
  {
    id: "q281",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Which volatile agent has the lowest blood:gas partition coefficient, producing the fastest onset and offset?",
    choices: ["Halothane", "Isoflurane", "Sevoflurane", "Desflurane"],
    answer: 3,
    explanation:
      "Desflurane has the lowest blood:gas coefficient (~0.42), giving the fastest wash-in/wash-out among potent volatiles. Its high pungency limits use for inhalational induction (airway irritation/laryngospasm).",
  },
  {
    id: "q282",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Nitrous oxide should be avoided in which situation?",
    choices: ["Mask induction in children", "Pneumothorax or bowel obstruction", "Labor analgesia", "Brief dental procedures"],
    answer: 1,
    explanation:
      "N2O diffuses into air-filled spaces faster than nitrogen leaves, expanding pneumothorax, bowel gas, middle ear, pneumocephalus, and emboli. Avoid in these settings and in vitreoretinal surgery with gas bubble.",
  },
  {
    id: "q283",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Diffusion hypoxia after discontinuing nitrous oxide is prevented by:",
    choices: ["Administering 100% oxygen for several minutes", "Hyperventilation with room air", "Immediate extubation", "Giving naloxone"],
    answer: 0,
    explanation:
      "When N2O is stopped, large volumes rapidly diffuse into alveoli, diluting alveolar O2 and CO2 (diffusion hypoxia). Administer 100% O2 for ~3–5 min at emergence to prevent hypoxemia.",
  },
  {
    id: "q284",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Chronic nitrous oxide exposure can cause neurologic deficits by inactivating:",
    choices: ["Vitamin B12 (cobalamin)-dependent methionine synthase", "Folate reductase", "Thiamine", "Pyridoxine"],
    answer: 0,
    explanation:
      "N2O irreversibly oxidizes the cobalt of vitamin B12, inhibiting methionine synthase. Prolonged/repeated exposure (or in B12-deficient patients) can cause megaloblastic anemia and subacute combined degeneration of the cord.",
  },
  {
    id: "q285",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Phenylephrine causes reflex bradycardia because it:",
    choices: ["Directly slows the SA node", "Increases blood pressure via alpha-1 agonism triggering baroreceptor reflex", "Blocks beta-1 receptors", "Stimulates vagal nuclei directly"],
    answer: 1,
    explanation:
      "Phenylephrine is a pure alpha-1 agonist; the rise in afterload/BP activates the baroreceptor reflex, producing reflex bradycardia. It is useful when hypotension is paired with tachycardia.",
  },
  // ============ BOARD EXPANSION BATCH 2: Regional / Airway / Equipment / Monitoring ============
  {
    id: "q286",
    category: "Regional",
    difficulty: "Medium",
    stem: "The most common serious complication that limits the use of an interscalene brachial plexus block is:",
    choices: ["Pneumothorax", "Ipsilateral phrenic nerve (hemidiaphragm) paralysis", "Total spinal", "Horner syndrome causing harm"],
    answer: 1,
    explanation:
      "Interscalene blocks cause near-100% ipsilateral phrenic nerve paralysis (C3-5), so they are relatively contraindicated in patients with severe respiratory compromise. Horner syndrome and hoarseness are common but benign.",
  },
  {
    id: "q287",
    category: "Regional",
    difficulty: "Medium",
    stem: "Which brachial plexus block best covers the ulnar (medial) aspect of the hand but may spare the musculocutaneous nerve?",
    choices: ["Interscalene", "Supraclavicular", "Axillary", "Infraclavicular"],
    answer: 2,
    explanation:
      "The axillary block reliably covers median, ulnar, and radial nerves but often spares the musculocutaneous nerve (which leaves the sheath early)—it must be blocked separately in the coracobrachialis. Interscalene spares the inferior trunk (ulnar/C8-T1).",
  },
  {
    id: "q288",
    category: "Regional",
    difficulty: "Hard",
    stem: "Which block carries the highest risk of pneumothorax?",
    choices: ["Axillary", "Supraclavicular", "Femoral", "Adductor canal"],
    answer: 1,
    explanation:
      "The supraclavicular block ('spinal of the arm') has the highest pneumothorax risk because the plexus lies near the dome of the pleura. Ultrasound guidance reduces but does not eliminate this risk.",
  },
  {
    id: "q289",
    category: "Regional",
    difficulty: "Medium",
    stem: "An adductor canal block primarily provides analgesia to the knee while sparing motor function of which muscle group compared with a femoral nerve block?",
    choices: ["Hamstrings", "Quadriceps", "Gastrocnemius", "Adductors"],
    answer: 1,
    explanation:
      "The adductor canal block targets the saphenous nerve (sensory) with relative quadriceps sparing, preserving more quadriceps strength than a femoral nerve block—beneficial for early ambulation after knee surgery.",
  },
  {
    id: "q290",
    category: "Regional",
    difficulty: "Medium",
    stem: "A high/total spinal presents with hypotension, bradycardia, and apnea. The most appropriate immediate management includes:",
    choices: ["Trendelenburg only", "Airway support/intubation, vasopressors, and fluids", "Flumazenil", "Lipid emulsion"],
    answer: 1,
    explanation:
      "Total spinal requires airway and ventilatory support (often intubation), vasopressors/atropine for hemodynamic collapse, and fluids. It results from excessive cephalad spread of local anesthetic.",
  },
  {
    id: "q291",
    category: "Regional",
    difficulty: "Hard",
    stem: "Transient neurologic symptoms (TNS) after spinal anesthesia are most associated with which local anesthetic?",
    choices: ["Bupivacaine", "Lidocaine", "Ropivacaine", "Tetracaine"],
    answer: 1,
    explanation:
      "TNS (back/buttock/leg pain without neurologic deficit, resolving in days) is most common with intrathecal lidocaine, especially in the lithotomy position. NSAIDs are the mainstay of treatment.",
  },
  {
    id: "q292",
    category: "Regional",
    difficulty: "Medium",
    stem: "A postdural puncture headache is classically:",
    choices: ["Worse lying flat, better upright", "Positional—worse upright, relieved when supine", "Constant and non-positional", "Associated with fever and neck rigidity"],
    answer: 1,
    explanation:
      "PDPH is positional: worse sitting/standing, relieved supine, often frontal/occipital with neck stiffness, photophobia, tinnitus. Risk factors: young, female, pregnancy, large-bore cutting needle. Treatment: conservative measures then epidural blood patch.",
  },
  {
    id: "q293",
    category: "Regional",
    difficulty: "Easy",
    stem: "Which spinal needle design reduces the incidence of postdural puncture headache?",
    choices: ["Quincke (cutting) tip", "Larger gauge needle", "Pencil-point (Whitacre/Sprotte) tip", "Tuohy needle"],
    answer: 2,
    explanation:
      "Pencil-point (non-cutting) needles such as Whitacre and Sprotte separate rather than cut dural fibers, reducing PDPH. Smaller gauge also reduces risk. Tuohy needles are for epidural catheter placement.",
  },
  {
    id: "q294",
    category: "Regional",
    difficulty: "Hard",
    stem: "Per ASRA guidelines, neuraxial block should be delayed for how long after the last prophylactic dose of low-molecular-weight heparin (enoxaparin 40 mg daily)?",
    choices: ["6 hours", "12 hours", "24 hours", "No delay needed"],
    answer: 1,
    explanation:
      "ASRA recommends ≥12 hours after prophylactic LMWH and ≥24 hours after therapeutic dosing before neuraxial procedures, to reduce spinal/epidural hematoma risk. Catheter removal also requires appropriate timing.",
  },
  {
    id: "q295",
    category: "Regional",
    difficulty: "Medium",
    stem: "The classic triad/presentation prompting urgent MRI for spinal epidural hematoma after neuraxial block is:",
    choices: ["Headache, fever, photophobia", "New/progressive motor weakness, back pain, and bowel/bladder dysfunction", "Hypotension and bradycardia", "Pruritus and nausea"],
    answer: 1,
    explanation:
      "Progressive lower-extremity weakness, severe back pain, and bowel/bladder dysfunction suggest epidural hematoma (or abscess). Emergent MRI and surgical decompression within ~8 hours offer the best chance of neurologic recovery.",
  },
  {
    id: "q296",
    category: "Regional",
    difficulty: "Medium",
    stem: "Adding epinephrine to a local anesthetic for peripheral nerve block primarily serves to:",
    choices: ["Speed metabolism", "Prolong block duration and act as an intravascular marker", "Increase pH", "Reduce allergy risk"],
    answer: 1,
    explanation:
      "Epinephrine causes vasoconstriction (slows systemic absorption, prolongs block, lowers peak plasma levels) and serves as an intravascular injection marker (tachycardia/hypertension). Avoid in end-arterial fields (digits, penis).",
  },
  {
    id: "q297",
    category: "Airway",
    difficulty: "Medium",
    stem: "Which Mallampati class indicates that only the hard palate is visible?",
    choices: ["Class I", "Class II", "Class III", "Class IV"],
    answer: 3,
    explanation:
      "Mallampati IV = only hard palate visible (most difficult). Class I: faucial pillars, soft palate, uvula. II: soft palate and uvula. III: soft palate and base of uvula. Higher class correlates with more difficult laryngoscopy.",
  },
  {
    id: "q298",
    category: "Airway",
    difficulty: "Hard",
    stem: "In a cannot-intubate, cannot-oxygenate scenario, the definitive rescue per the difficult airway algorithm is:",
    choices: ["Continued mask attempts", "Emergency invasive airway (cricothyrotomy)", "Awake fiberoptic intubation", "Repeat direct laryngoscopy"],
    answer: 1,
    explanation:
      "When supraglottic and facemask ventilation fail and intubation is impossible (CICO), an emergency invasive airway—surgical or needle cricothyrotomy—is indicated without delay to restore oxygenation.",
  },
  {
    id: "q299",
    category: "Airway",
    difficulty: "Medium",
    stem: "Application of cricoid pressure (Sellick maneuver) during RSI is intended to:",
    choices: ["Improve laryngeal view always", "Compress the esophagus to reduce passive regurgitation/aspiration", "Open the vocal cords", "Prevent laryngospasm"],
    answer: 1,
    explanation:
      "Cricoid pressure compresses the esophagus against the vertebral body to reduce passive regurgitation during RSI. Evidence is debated; it may worsen the laryngeal view and should be released if it impedes ventilation or intubation.",
  },
  {
    id: "q300",
    category: "Airway",
    difficulty: "Medium",
    stem: "Laryngospasm refractory to positive pressure and jaw thrust is best treated with:",
    choices: ["Reintubation immediately", "Deepening anesthesia and/or succinylcholine", "Racemic epinephrine", "Heliox"],
    answer: 1,
    explanation:
      "First-line: remove stimulus, jaw thrust, CPAP with 100% O2 (Larson maneuver). If refractory: deepen anesthesia (propofol) and/or low-dose succinylcholine (0.1–0.5 mg/kg IV, or IM if no IV) to break the spasm and prevent hypoxia.",
  },
  {
    id: "q301",
    category: "Airway",
    difficulty: "Hard",
    stem: "Negative pressure pulmonary edema most classically follows:",
    choices: ["Slow emergence", "Forceful inspiration against an obstructed airway (e.g., laryngospasm)", "Excessive fluid administration", "Aspiration of gastric contents"],
    answer: 1,
    explanation:
      "Negative pressure (post-obstructive) pulmonary edema follows vigorous inspiratory effort against a closed glottis (laryngospasm, biting the tube), generating large negative intrathoracic pressure that drives transudation. Treatment is supportive (O2, PEEP/CPAP, often self-limited).",
  },
  {
    id: "q302",
    category: "Airway",
    difficulty: "Easy",
    stem: "A reassuring thyromental distance suggesting easier laryngoscopy is:",
    choices: ["Less than 3 cm", "Greater than approximately 6 cm (3 fingerbreadths)", "Exactly 2 cm", "Distance does not matter"],
    answer: 1,
    explanation:
      "A thyromental distance >6–6.5 cm (about 3 fingerbreadths) suggests adequate mandibular space for laryngoscopy. Shorter distances predict more difficult direct laryngoscopy (anterior larynx).",
  },
  {
    id: "q303",
    category: "Airway",
    difficulty: "Medium",
    stem: "A Cormack-Lehane grade III view at laryngoscopy means:",
    choices: ["Full glottis visible", "Only posterior glottis/arytenoids visible", "Only epiglottis visible", "Neither glottis nor epiglottis visible"],
    answer: 2,
    explanation:
      "Cormack-Lehane: I full glottis; II partial glottis/arytenoids; III only epiglottis; IV neither epiglottis nor glottis. Grades III–IV indicate difficult laryngoscopy; consider bougie, video laryngoscopy, or alternative techniques.",
  },
  {
    id: "q304",
    category: "Airway",
    difficulty: "Medium",
    stem: "The preferred technique for a patient with a known severely difficult airway who is cooperative is:",
    choices: ["Rapid sequence induction", "Awake fiberoptic intubation", "Deep inhalational induction", "Blind nasal intubation under GA"],
    answer: 1,
    explanation:
      "Awake fiberoptic intubation maintains spontaneous ventilation and airway tone, making it the gold standard for an anticipated difficult airway in a cooperative patient. Adequate topicalization and judicious sedation are key.",
  },
  {
    id: "q305",
    category: "Airway",
    difficulty: "Hard",
    stem: "A supraglottic airway (LMA) is relatively contraindicated in which situation?",
    choices: ["Short ambulatory procedure", "Full stomach / high aspiration risk", "Spontaneous ventilation case", "Difficult mask ventilation as a rescue"],
    answer: 1,
    explanation:
      "Standard LMAs do not protect against aspiration, so they are relatively contraindicated with full stomach, GERD, obesity with high risk, or prone position. Second-generation devices with gastric ports reduce but do not eliminate risk.",
  },
  {
    id: "q306",
    category: "Equipment",
    difficulty: "Medium",
    stem: "The pin index safety system on a gas cylinder is designed to:",
    choices: ["Prevent overfilling", "Prevent connecting the wrong gas cylinder to a yoke", "Regulate flow rate", "Indicate pressure"],
    answer: 1,
    explanation:
      "The Pin Index Safety System uses a unique pin configuration for each medical gas to prevent attaching the wrong cylinder to a hanger yoke. The Diameter Index Safety System (DISS) serves the same purpose for pipeline connections.",
  },
  {
    id: "q307",
    category: "Equipment",
    difficulty: "Medium",
    stem: "A full E-cylinder of oxygen reads approximately 1900–2200 psi. As oxygen is used, the pressure:",
    choices: ["Stays constant until nearly empty", "Falls linearly because oxygen is stored as a compressed gas", "Falls only at the end", "Rises with use"],
    answer: 1,
    explanation:
      "Oxygen in an E-cylinder is a compressed gas, so pressure falls linearly with content (full ~660 L at ~2000 psi). In contrast, nitrous oxide is stored as liquid—its pressure stays ~745 psi until liquid is exhausted, then falls.",
  },
  {
    id: "q308",
    category: "Equipment",
    difficulty: "Hard",
    stem: "The oxygen failure (fail-safe) device on an anesthesia machine primarily prevents:",
    choices: ["Delivery of a hypoxic mixture if oxygen pressure fails", "Barotrauma", "Hypercapnia", "Vaporizer overdose"],
    answer: 0,
    explanation:
      "The fail-safe (oxygen pressure-sensor shutoff) cuts off or proportionally reduces other gases (e.g., N2O) if oxygen supply pressure falls, preventing a hypoxic mixture from pipeline/cylinder failure. The oxygen analyzer is the ultimate monitor of delivered FiO2.",
  },
  {
    id: "q309",
    category: "Equipment",
    difficulty: "Medium",
    stem: "Modern variable-bypass vaporizers are agent-specific and temperature-compensated. Desflurane requires a special heated, pressurized vaporizer because:",
    choices: ["It is the most potent agent", "Its boiling point (~22.8°C) is near room temperature with high vapor pressure", "It is explosive", "It degrades sevoflurane"],
    answer: 1,
    explanation:
      "Desflurane's boiling point (~22.8°C) and high saturated vapor pressure make conventional variable-bypass vaporizers unsuitable. The Tec 6 heats desflurane to 39°C and pressurizes it, injecting vapor electronically to maintain accurate output.",
  },
  {
    id: "q310",
    category: "Equipment",
    difficulty: "Hard",
    stem: "Filling a vaporizer with the wrong, more volatile agent (e.g., a higher vapor pressure agent) generally results in:",
    choices: ["No change in output", "Overdose (higher than dialed output)", "Underdose only", "Machine shutdown"],
    answer: 1,
    explanation:
      "An agent with higher saturated vapor pressure than the calibrated one yields a higher-than-set output (relative overdose), and vice versa. Agent-specific keyed fillers exist to prevent misfilling.",
  },
  {
    id: "q311",
    category: "Equipment",
    difficulty: "Medium",
    stem: "In a circle breathing system, the function of the CO2 absorbent is to:",
    choices: ["Warm the gas", "Chemically neutralize exhaled CO2 allowing rebreathing", "Add humidity only", "Scavenge waste gases"],
    answer: 1,
    explanation:
      "CO2 absorbent (soda lime, Ca(OH)2 absorbents) neutralizes exhaled CO2 via an acid-base reaction, permitting low-flow rebreathing. Exhaustion is signaled by a pH-indicator color change and rising inspired CO2.",
  },
  {
    id: "q312",
    category: "Equipment",
    difficulty: "Medium",
    stem: "An unexpectedly elevated inspired CO2 on capnography during a circle system case suggests:",
    choices: ["Hyperventilation", "Exhausted CO2 absorbent or incompetent expiratory valve", "Air embolism", "Esophageal intubation"],
    answer: 1,
    explanation:
      "Elevated inspired (baseline) CO2 indicates rebreathing—commonly exhausted absorbent or a stuck/incompetent unidirectional valve. Increase fresh gas flow, change absorbent, and inspect valves.",
  },
  {
    id: "q313",
    category: "Equipment",
    difficulty: "Hard",
    stem: "The scavenging system on an anesthesia machine functions to:",
    choices: ["Recirculate anesthetic gas", "Remove waste anesthetic gases to limit OR pollution", "Increase fresh gas flow", "Humidify gases"],
    answer: 1,
    explanation:
      "Scavenging systems collect and remove excess/waste anesthetic gases from the breathing circuit and ventilator to reduce occupational exposure. They may be active (suction) or passive and require proper pressure relief to avoid barotrauma.",
  },
  {
    id: "q314",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "A capnograph waveform showing a gradually upsloping (steep) expiratory plateau (phase III) suggests:",
    choices: ["Esophageal intubation", "Bronchospasm or obstructive airway disease", "Cardiac arrest", "Rebreathing"],
    answer: 1,
    explanation:
      "A 'shark-fin' upsloping phase III reflects uneven alveolar emptying from airflow obstruction (bronchospasm, COPD, kinked tube). Sudden loss of waveform suggests disconnection, cardiac arrest, or esophageal intubation.",
  },
  {
    id: "q315",
    category: "Monitoring",
    difficulty: "Hard",
    stem: "A sudden drop in end-tidal CO2 to near zero with an unchanged ventilator is most concerning for:",
    choices: ["Hypoventilation", "Cardiac arrest, circuit disconnect, or massive pulmonary embolism", "Malignant hyperthermia", "Fever"],
    answer: 1,
    explanation:
      "An abrupt fall in EtCO2 toward zero indicates failure of CO2 delivery to the lungs or sampling: circuit disconnection/obstruction, cardiac arrest, or massive PE/air embolism. Malignant hyperthermia and sepsis raise EtCO2.",
  },
  {
    id: "q316",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "Pulse oximetry can read falsely NORMAL (around 85% or ~100%) in which poisoning?",
    choices: ["Cyanide", "Carbon monoxide", "Organophosphate", "Iron"],
    answer: 1,
    explanation:
      "Carboxyhemoglobin absorbs light similarly to oxyhemoglobin, so standard pulse oximetry overestimates oxygen saturation in CO poisoning. Co-oximetry is required. Methemoglobinemia drives SpO2 toward ~85% regardless of true saturation.",
  },
  {
    id: "q317",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "The Bispectral Index (BIS) monitor is used to:",
    choices: ["Measure neuromuscular blockade", "Assess depth of anesthesia/sedation to reduce awareness", "Measure cardiac output", "Detect air embolism"],
    answer: 1,
    explanation:
      "BIS processes the EEG into a 0–100 scale (40–60 targets general anesthesia) to help titrate hypnotics and reduce intraoperative awareness, particularly with TIVA or paralysis. It does not reliably track ketamine/N2O effects.",
  },
  {
    id: "q318",
    category: "Monitoring",
    difficulty: "Hard",
    stem: "Which neuromuscular monitoring pattern best detects residual block at the end of surgery?",
    choices: ["Single twitch", "Train-of-four ratio (T4/T1) >0.9", "Tetanus alone", "Double burst by feel only"],
    answer: 1,
    explanation:
      "Adequate recovery requires a quantitative train-of-four ratio (T4/T1) ≥0.9. Subjective (tactile/visual) assessment cannot reliably detect ratios between 0.4 and 0.9, so quantitative (e.g., electromyography/acceleromyography) monitoring is preferred.",
  },
  {
    id: "q319",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "An arterial line transducer that is 'overdamped' will:",
    choices: ["Overestimate systolic and underestimate diastolic", "Underestimate systolic and overestimate diastolic, with preserved MAP", "Have no effect on readings", "Increase the dicrotic notch"],
    answer: 1,
    explanation:
      "Overdamping (air bubbles, clots, kinks) narrows the waveform: underestimated systolic, overestimated diastolic, with MAP relatively preserved. Underdamping causes systolic overshoot. A square-wave (fast-flush) test assesses dynamic response.",
  },
  {
    id: "q320",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "For an invasive arterial pressure transducer, the reference point ('phlebostatic axis') for zeroing in the supine patient is:",
    choices: ["Sternal notch", "Mid-axillary line at the 4th intercostal space (level of the right atrium)", "Symphysis pubis", "External auditory meatus"],
    answer: 1,
    explanation:
      "Transducers are zeroed/leveled at the right atrium (mid-axillary line, 4th ICS) for systemic pressures. For cerebral perfusion (e.g., beach-chair position), leveling at the external auditory meatus (Circle of Willis) is recommended.",
  },
  {
    id: "q321",
    category: "Monitoring",
    difficulty: "Hard",
    stem: "A large 'cannon' a-wave on the central venous pressure tracing is characteristic of:",
    choices: ["Tricuspid regurgitation", "Atrioventricular dissociation (e.g., complete heart block, junctional rhythm)", "Atrial fibrillation", "Constrictive pericarditis"],
    answer: 1,
    explanation:
      "Cannon a-waves occur when the atrium contracts against a closed tricuspid valve (AV dissociation, complete heart block, junctional rhythm, PVCs). Tricuspid regurgitation produces large v-waves; AF abolishes the a-wave.",
  },
  {
    id: "q322",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "Pulse pressure variation (PPV) >13% in a mechanically ventilated patient suggests:",
    choices: ["Fluid overload", "Likely fluid responsiveness (volume depletion)", "Left ventricular failure", "Pericardial tamponade only"],
    answer: 1,
    explanation:
      "In a passive, mechanically ventilated patient in sinus rhythm with adequate tidal volumes, PPV/SVV >~13% predicts fluid responsiveness (preload-dependent). Arrhythmias, spontaneous breathing, and low tidal volumes reduce reliability.",
  },
  {
    id: "q323",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "The most sensitive monitor for detecting venous air embolism during a sitting craniotomy is:",
    choices: ["End-tidal CO2", "Precordial Doppler / transesophageal echocardiography", "Pulse oximetry", "ECG"],
    answer: 1,
    explanation:
      "TEE is the most sensitive monitor for VAE (detects tiny bubbles), followed by precordial Doppler. A sudden fall in EtCO2 with a rise in end-tidal nitrogen is a useful, less sensitive sign. Management: flood field, aspirate via central line, left lateral/Trendelenburg.",
  },
  {
    id: "q324",
    category: "Monitoring",
    difficulty: "Hard",
    stem: "Somatosensory evoked potentials (SSEPs) monitor the integrity of which spinal pathway?",
    choices: ["Anterior corticospinal (motor) tracts", "Dorsal columns (posterior, sensory)", "Spinothalamic tracts", "Cerebellar pathways"],
    answer: 1,
    explanation:
      "SSEPs assess the dorsal column-medial lemniscus (sensory) pathway. They can miss anterior cord (motor) ischemia, so motor evoked potentials (MEPs) complement them in spine/aortic surgery. Volatile agents and hypothermia attenuate evoked potentials.",
  },
  {
    id: "q325",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "Which anesthetic technique best preserves motor evoked potential signals during scoliosis surgery?",
    choices: ["High-dose volatile anesthesia", "Total intravenous anesthesia (propofol + opioid) avoiding muscle relaxants", "Nitrous oxide at 70%", "Deep neuromuscular blockade"],
    answer: 1,
    explanation:
      "Volatile agents and neuromuscular blockers depress MEPs. TIVA (propofol/remifentanil) with avoidance of paralysis after intubation best preserves evoked-potential monitoring during neurophysiologic spinal surgery.",
  },
  {
    id: "q326",
    category: "Regional",
    difficulty: "Medium",
    stem: "Which additive prolongs the duration of a peripheral nerve block and is a useful adjunct via perineural or IV route?",
    choices: ["Dexamethasone", "Sodium bicarbonate", "Hyaluronidase", "Calcium"],
    answer: 0,
    explanation:
      "Dexamethasone (perineural or IV) prolongs analgesia from peripheral nerve blocks. Other adjuncts include dexmedetomidine, epinephrine, and clonidine. Bicarbonate speeds onset (by raising the non-ionized fraction) rather than prolonging the block.",
  },
  {
    id: "q327",
    category: "Regional",
    difficulty: "Hard",
    stem: "Baricity determines spread of intrathecal local anesthetic. A hyperbaric solution in a patient placed supine after injection will tend to pool:",
    choices: ["Toward the cervical region", "In the dependent thoracic kyphosis/sacrum (gravity-dependent)", "Uniformly", "In the epidural space"],
    answer: 1,
    explanation:
      "Hyperbaric solutions (mixed with dextrose) settle to dependent regions. Supine, the thoracic kyphosis (T4-6) is a low point, limiting cephalad spread; the sacrum also fills. Patient position after injection controls block height.",
  },
  {
    id: "q328",
    category: "Regional",
    difficulty: "Medium",
    stem: "Which nerve must be blocked in addition to a popliteal sciatic block to provide complete anesthesia of the foot/ankle medially?",
    choices: ["Common peroneal", "Saphenous (terminal branch of femoral)", "Tibial", "Sural"],
    answer: 1,
    explanation:
      "The saphenous nerve (from the femoral) supplies the medial leg/ankle and is not covered by a sciatic/popliteal block. It is added (e.g., adductor canal/saphenous block) for complete foot and ankle anesthesia.",
  },
  {
    id: "q329",
    category: "Airway",
    difficulty: "Medium",
    stem: "Which finding best confirms correct endotracheal tube placement?",
    choices: ["Bilateral breath sounds alone", "Sustained end-tidal CO2 waveform over several breaths", "Chest rise", "Tube fogging"],
    answer: 1,
    explanation:
      "A sustained capnographic waveform over multiple breaths is the gold standard confirming tracheal (not esophageal) placement. Auscultation, chest rise, and condensation are supportive but not definitive (esophageal CO2 disappears quickly).",
  },
  {
    id: "q330",
    category: "Airway",
    difficulty: "Hard",
    stem: "During one-lung ventilation, the patient desaturates. After confirming tube position and FiO2 1.0, the next maneuver is typically:",
    choices: ["Stop ventilation", "Apply CPAP to the non-dependent (operative) lung and/or PEEP to the dependent lung", "Pull the double-lumen tube", "Increase tidal volume drastically"],
    answer: 1,
    explanation:
      "For hypoxemia during OLV: verify tube position (fiberoptic), FiO2 1.0, then apply CPAP (~5 cmH2O) to the nonventilated lung and/or PEEP to the ventilated lung; recruitment maneuvers and, if persistent, intermittent two-lung ventilation. Reduced cardiac output also worsens shunt.",
  },
  {
    id: "q331",
    category: "Equipment",
    difficulty: "Medium",
    stem: "The Bain circuit is a type of Mapleson D system in which fresh gas:",
    choices: ["Enters near the patient through an inner tube", "Is delivered at the reservoir bag end", "Requires no fresh gas flow", "Has no APL valve"],
    answer: 0,
    explanation:
      "The Bain is a coaxial Mapleson D: fresh gas flows through an inner tube to the patient end while exhaled gas travels in the outer tube. It requires high fresh gas flow (~1.5–2× minute ventilation) to prevent rebreathing during spontaneous ventilation.",
  },
  {
    id: "q332",
    category: "Equipment",
    difficulty: "Hard",
    stem: "The hypoxic guard (proportioning) system links nitrous oxide and oxygen flows to ensure a minimum delivered oxygen concentration of at least:",
    choices: ["18%", "21%", "25%", "30%"],
    answer: 2,
    explanation:
      "Mechanical/pneumatic proportioning systems (e.g., Link-25, ORMC) limit the N2O:O2 ratio to maintain a minimum delivered FiO2 of ~25%. They prevent a hypoxic mixture from the flowmeters but do not protect against downstream leaks or wrong central supply.",
  },
  {
    id: "q333",
    category: "Monitoring",
    difficulty: "Medium",
    stem: "A 'beat-to-beat' systolic pressure variation that worsens with positive-pressure ventilation and is relieved by fluids indicates:",
    choices: ["Heart failure", "Hypovolemia (preload responsiveness)", "Tamponade resolution", "Sepsis only"],
    answer: 1,
    explanation:
      "Respiratory-induced systolic/pulse pressure variation reflects the heart's position on the steep (preload-dependent) Starling curve—i.e., hypovolemia and likely fluid responsiveness. It diminishes after adequate volume resuscitation.",
  },
  {
    id: "q334",
    category: "Monitoring",
    difficulty: "Easy",
    stem: "Per ASA standard monitors, which must be continuously evaluated during every anesthetic?",
    choices: ["Cardiac output", "Oxygenation, ventilation, circulation, and temperature", "Bispectral index", "Central venous pressure"],
    answer: 1,
    explanation:
      "ASA standard monitoring requires continual evaluation of oxygenation (pulse oximetry, FiO2 analyzer), ventilation (capnography), circulation (ECG, BP at least q5 min), and temperature when clinically significant changes are intended/anticipated, plus a qualified anesthesia provider present.",
  },
  {
    id: "q335",
    category: "Monitoring",
    difficulty: "Hard",
    stem: "A pulmonary artery catheter wedge (occlusion) pressure best estimates:",
    choices: ["Right atrial pressure", "Left atrial / left ventricular end-diastolic pressure (preload)", "Mean pulmonary artery pressure", "Systemic vascular resistance"],
    answer: 1,
    explanation:
      "When the balloon occludes a pulmonary artery branch, the catheter reads a static column to the left atrium, estimating LA pressure and thus LV preload (LVEDP), assuming no mitral disease or high airway pressures (must measure in West zone 3).",
  },
  // ============ BOARD EXPANSION BATCH 3: Cardiac / Critical Care ============
  {
    id: "q336",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "The hemodynamic goal for a patient with severe aortic stenosis undergoing noncardiac surgery is best summarized as:",
    choices: ["Fast, vasodilated, low preload", "Maintain sinus rhythm, normal-to-slow heart rate, adequate preload and afterload", "Tachycardia and reduced afterload", "Aggressive afterload reduction"],
    answer: 1,
    explanation:
      "Aortic stenosis: keep the patient 'full, slow, and tight'—maintain sinus rhythm (atrial kick is critical), avoid tachycardia (needs diastolic filling/coronary perfusion), and preserve afterload (the fixed obstruction makes the heart dependent on SVR). Treat hypotension promptly with phenylephrine.",
  },
  {
    id: "q337",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Optimal hemodynamic management of chronic severe aortic regurgitation favors:",
    choices: ["Bradycardia and high afterload", "Slightly increased heart rate with afterload reduction ('fast and loose')", "Maximal afterload", "Negative inotropy"],
    answer: 1,
    explanation:
      "Aortic regurgitation: 'fast and loose'—a relatively higher heart rate shortens diastole (less regurgitant time) and reduced afterload promotes forward flow. Avoid bradycardia and high SVR, which worsen regurgitation.",
  },
  {
    id: "q338",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "In severe mitral stenosis, which is most detrimental?",
    choices: ["Maintained sinus rhythm", "New-onset tachycardia or atrial fibrillation with rapid ventricular response", "Adequate preload", "Normal afterload"],
    answer: 1,
    explanation:
      "Mitral stenosis depends on diastolic filling time across the narrowed valve. Tachycardia or rapid AF shortens diastole, raising left atrial pressure and precipitating pulmonary edema. Maintain a slow-normal rate, sinus rhythm, and avoid hypovolemia and increases in pulmonary vascular resistance.",
  },
  {
    id: "q339",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Hypertrophic obstructive cardiomyopathy (HOCM) dynamic outflow obstruction is WORSENED by:",
    choices: ["Increased preload", "Decreased contractility", "Hypovolemia, tachycardia, and decreased afterload", "Increased afterload"],
    answer: 2,
    explanation:
      "HOCM obstruction worsens with anything that reduces LV cavity size or increases ejection velocity: hypovolemia, tachycardia, reduced afterload, and increased contractility. Manage with volume, beta-blockade, phenylephrine (pure alpha), and avoiding inotropes/vasodilators.",
  },
  {
    id: "q340",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Which ECG change is most specific for acute transmural myocardial ischemia/infarction?",
    choices: ["T-wave flattening", "ST-segment elevation in contiguous leads", "Sinus tachycardia", "First-degree AV block"],
    answer: 1,
    explanation:
      "ST-segment elevation in two or more contiguous leads indicates acute transmural injury (STEMI). ST depression and T-wave inversion suggest subendocardial ischemia. Intraoperatively, lead II and V5 detect most ischemia.",
  },
  {
    id: "q341",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Per ACC/AHA guidance, elective noncardiac surgery should generally be delayed after placement of a drug-eluting coronary stent for at least:",
    choices: ["2 weeks", "1 month", "3–6 months (ideally 6 months) on dual antiplatelet therapy", "2 years"],
    answer: 2,
    explanation:
      "Optimal delay for elective surgery after a DES is ~6 months (minimum 3 months if surgery is time-sensitive and risk of delay is high), continuing dual antiplatelet therapy when possible. Premature discontinuation risks catastrophic stent thrombosis. Bare-metal stents: ≥30 days.",
  },
  {
    id: "q342",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "A patient with a permanent pacemaker is having surgery with monopolar electrocautery. The most appropriate precaution is:",
    choices: ["Place a magnet permanently", "Reprogram to asynchronous mode or apply magnet, use bipolar cautery, and position grounding pad away from the device", "No precautions needed", "Avoid all anesthesia"],
    answer: 1,
    explanation:
      "Electromagnetic interference can inhibit pacing. For pacemaker-dependent patients, reprogram to asynchronous (or apply a magnet) and place the cautery return pad so current does not cross the generator; prefer bipolar/short bursts. ICDs need tachytherapy disabled with backup external pads.",
  },
  {
    id: "q343",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Placing a magnet over most implantable cardioverter-defibrillators (ICDs) typically:",
    choices: ["Converts pacing to asynchronous mode", "Suspends tachyarrhythmia (shock) therapy without changing pacing mode", "Turns the device off completely", "Increases the pacing rate"],
    answer: 1,
    explanation:
      "A magnet over an ICD usually suspends antitachycardia/shock therapy but does NOT change the pacing mode (unlike pacemakers, where a magnet causes asynchronous pacing). Always confirm device-specific behavior; have external defibrillation available.",
  },
  {
    id: "q344",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "During cardiopulmonary bypass, protamine is given to reverse heparin. A severe protamine reaction can manifest as:",
    choices: ["Hypertension and bradycardia only", "Catastrophic pulmonary hypertension, systemic hypotension, and right heart failure", "Hyperkalemia", "Malignant hyperthermia"],
    answer: 1,
    explanation:
      "Protamine reactions range from histamine-related hypotension (rapid administration) to anaphylaxis and the feared catastrophic pulmonary vasoconstriction with RV failure. Risk factors: prior protamine/NPH insulin exposure, fish allergy. Give slowly.",
  },
  {
    id: "q345",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "The first-line treatment for unstable ventricular tachycardia with a pulse but hypotension is:",
    choices: ["Amiodarone infusion only", "Synchronized cardioversion", "Defibrillation (unsynchronized)", "Adenosine"],
    answer: 1,
    explanation:
      "Unstable VT with a pulse → synchronized cardioversion. Pulseless VT/VF → unsynchronized defibrillation. Stable VT → antiarrhythmics (amiodarone, procainamide). Adenosine is for regular narrow-complex SVT.",
  },
  {
    id: "q346",
    category: "Cardiac",
    difficulty: "Easy",
    stem: "The first drug given for an adult in pulseless ventricular fibrillation after the first shock and CPR is:",
    choices: ["Atropine 1 mg", "Epinephrine 1 mg IV", "Adenosine 6 mg", "Calcium chloride"],
    answer: 1,
    explanation:
      "In VF/pulseless VT, deliver shocks and high-quality CPR; give epinephrine 1 mg IV every 3–5 minutes. Amiodarone 300 mg (then 150 mg) is the antiarrhythmic for refractory VF/VT. Atropine is no longer used for asystole/PEA.",
  },
  {
    id: "q347",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Beck's triad (hypotension, muffled heart sounds, jugular venous distension) indicates:",
    choices: ["Tension pneumothorax", "Cardiac tamponade", "Massive pulmonary embolism", "Aortic dissection"],
    answer: 1,
    explanation:
      "Beck's triad suggests cardiac tamponade. Echocardiography shows pericardial effusion with diastolic RV/RA collapse and respiratory variation in flows. Management favors maintaining preload, heart rate, and contractility ('full, fast, tight') until pericardiocentesis/drainage.",
  },
  {
    id: "q348",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "For a patient with pulmonary hypertension undergoing anesthesia, which factor will WORSEN pulmonary vascular resistance?",
    choices: ["Adequate oxygenation", "Hypercarbia, hypoxia, acidosis, and hypothermia", "Normocapnia", "Mild alkalosis"],
    answer: 1,
    explanation:
      "PVR rises with hypoxia, hypercarbia, acidosis, hypothermia, high airway pressures, pain, and light anesthesia. Maintain oxygenation, normo-to-mild hypocarbia, normothermia, and consider inhaled pulmonary vasodilators (nitric oxide, epoprostenol).",
  },
  {
    id: "q349",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Which inotrope/vasopressor primarily increases contractility and heart rate via beta-1 with minimal alpha effect at moderate doses?",
    choices: ["Phenylephrine", "Dobutamine", "Vasopressin", "Norepinephrine"],
    answer: 1,
    explanation:
      "Dobutamine is predominantly a beta-1 agonist (positive inotropy/chronotropy) with mild beta-2 vasodilation, useful in low cardiac output states. Norepinephrine is alpha>beta; phenylephrine is pure alpha; vasopressin acts on V1 receptors.",
  },
  {
    id: "q350",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Milrinone improves cardiac output in heart failure by:",
    choices: ["Beta-1 agonism", "Phosphodiesterase-3 inhibition (inodilator), increasing cAMP", "Alpha-1 agonism", "Calcium channel blockade"],
    answer: 1,
    explanation:
      "Milrinone inhibits phosphodiesterase-3, raising cAMP to increase contractility and cause systemic/pulmonary vasodilation (an 'inodilator'). It is useful in RV failure/pulmonary hypertension but can cause hypotension; it is renally cleared.",
  },
  {
    id: "q351",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "The Revised Cardiac Risk Index (RCRI) includes all of the following EXCEPT:",
    choices: ["History of ischemic heart disease", "History of congestive heart failure", "Age over 80 by itself", "Insulin-dependent diabetes"],
    answer: 2,
    explanation:
      "RCRI predictors: high-risk surgery, ischemic heart disease, congestive heart failure, cerebrovascular disease, insulin-treated diabetes, and creatinine >2 mg/dL. Age alone is not a component (though it factors into other tools).",
  },
  {
    id: "q352",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "A functional capacity threshold of ≥4 METs (e.g., climbing a flight of stairs) is used to:",
    choices: ["Mandate cardiac catheterization", "Suggest adequate reserve allowing surgery without further cardiac testing in many patients", "Diagnose heart failure", "Quantify ejection fraction"],
    answer: 1,
    explanation:
      "Functional capacity ≥4 METs without symptoms generally indicates sufficient cardiopulmonary reserve; further preoperative cardiac testing is usually unnecessary if it would not change management. Poor/unknown capacity in high-risk patients may warrant testing.",
  },
  {
    id: "q353",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "The ARDSnet lung-protective ventilation strategy uses a tidal volume of approximately:",
    choices: ["10–12 mL/kg actual body weight", "6 mL/kg predicted body weight with plateau pressure <30 cmH2O", "15 mL/kg ideal body weight", "4 mL/kg actual body weight"],
    answer: 1,
    explanation:
      "ARDSnet: tidal volume ~6 mL/kg predicted body weight, plateau pressure goal <30 cmH2O, permissive hypercapnia, and adequate PEEP. This reduces ventilator-induced lung injury and improves mortality in ARDS.",
  },
  {
    id: "q354",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "The Berlin definition classifies ARDS severity primarily by:",
    choices: ["Tidal volume", "PaO2/FiO2 ratio", "PEEP level alone", "Chest x-ray score"],
    answer: 1,
    explanation:
      "Berlin ARDS severity uses PaO2/FiO2 (with PEEP ≥5): mild 200–300, moderate 100–200, severe <100, with bilateral infiltrates not fully explained by cardiac failure/overload, within 1 week of insult.",
  },
  {
    id: "q355",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "In the Surviving Sepsis guidelines, the first-line vasopressor for septic shock after fluid resuscitation is:",
    choices: ["Dopamine", "Norepinephrine", "Phenylephrine", "Epinephrine"],
    answer: 1,
    explanation:
      "Norepinephrine is first-line in septic shock (target MAP ≥65 mmHg). Vasopressin or epinephrine may be added. Dopamine is generally avoided due to arrhythmias. Early broad-spectrum antibiotics and source control are essential.",
  },
  {
    id: "q356",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Which lab finding supports a diagnosis of inadequate tissue perfusion in shock?",
    choices: ["Low lactate", "Elevated serum lactate / metabolic acidosis", "Respiratory alkalosis only", "Hypernatremia"],
    answer: 1,
    explanation:
      "Elevated lactate reflects anaerobic metabolism from tissue hypoperfusion and is a marker of shock severity and resuscitation adequacy (lactate clearance). Mixed/central venous O2 saturation also helps assess oxygen delivery vs consumption.",
  },
  {
    id: "q357",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "Permissive hypercapnia during lung-protective ventilation should be avoided or used cautiously in:",
    choices: ["Mild asthma", "Elevated intracranial pressure", "Healthy patients", "Hypokalemia"],
    answer: 1,
    explanation:
      "Hypercapnia raises cerebral blood flow and ICP, so permissive hypercapnia is relatively contraindicated in patients with intracranial hypertension. It is also cautioned in pulmonary hypertension/RV failure (raises PVR).",
  },
  {
    id: "q358",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "The most common cause of postoperative hypoxemia in the PACU is:",
    choices: ["Pulmonary embolism", "Atelectasis and hypoventilation/residual anesthetic", "Pneumonia", "Pneumothorax"],
    answer: 1,
    explanation:
      "Atelectasis (reduced FRC) plus residual anesthetic/opioid-related hypoventilation and residual neuromuscular blockade are the most common PACU causes of hypoxemia. Management: supplemental O2, encourage deep breathing/incentive spirometry, reverse residual block, treat pain without oversedation.",
  },
  {
    id: "q359",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Which is the most appropriate initial fluid for resuscitation of most patients in hypovolemic/septic shock?",
    choices: ["Hypotonic dextrose", "Balanced crystalloid (e.g., lactated Ringer's) or normal saline", "5% albumin as first choice always", "Hydroxyethyl starch"],
    answer: 1,
    explanation:
      "Balanced crystalloids are first-line; large-volume normal saline can cause hyperchloremic acidosis. Hydroxyethyl starches are avoided (renal injury, mortality). Albumin is reasonable in selected patients but not routinely superior for initial resuscitation.",
  },
  {
    id: "q360",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "Rapid correction of chronic hyponatremia risks:",
    choices: ["Cerebral edema", "Osmotic demyelination syndrome (central pontine myelinolysis)", "Hyperkalemia", "Seizures from low sodium"],
    answer: 1,
    explanation:
      "Overly rapid correction of chronic hyponatremia causes osmotic demyelination (central pontine myelinolysis). Limit correction to ~6–8 mEq/L per 24 h. Conversely, too-rapid correction of hypernatremia causes cerebral edema.",
  },
  {
    id: "q361",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Which electrolyte derangement most commonly accompanies massive blood transfusion (citrated blood)?",
    choices: ["Hypercalcemia", "Hypocalcemia (citrate chelation) and hyperkalemia", "Hypernatremia", "Hypomagnesemia only"],
    answer: 1,
    explanation:
      "Citrate in stored blood chelates calcium, causing ionized hypocalcemia (and the citrate metabolizes to alkalosis); potassium leaks from stored RBCs causing hyperkalemia. Monitor ionized calcium and treat with calcium; watch for hypothermia and coagulopathy (lethal triad).",
  },
  {
    id: "q362",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "TRALI (transfusion-related acute lung injury) is characterized by:",
    choices: ["Hypertension and volume overload responsive to diuretics", "Acute hypoxemia and noncardiogenic pulmonary edema within 6 hours of transfusion", "Delayed jaundice", "Hyperkalemic arrest"],
    answer: 1,
    explanation:
      "TRALI is acute hypoxemic respiratory failure with bilateral noncardiogenic pulmonary edema within ~6 hours of transfusion (donor anti-leukocyte antibodies). Treatment is supportive; diuretics are unhelpful (unlike TACO, which is volume overload).",
  },
  {
    id: "q363",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "TACO (transfusion-associated circulatory overload) differs from TRALI in that TACO:",
    choices: ["Is noncardiogenic", "Reflects volume overload with elevated filling pressures and responds to diuresis", "Occurs only after 24 hours", "Causes hemolysis"],
    answer: 1,
    explanation:
      "TACO is hydrostatic (cardiogenic) pulmonary edema from volume overload—elevated BNP/filling pressures, hypertension, responds to diuretics and slowing transfusion. TRALI is noncardiogenic with normal filling pressures.",
  },
  {
    id: "q364",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "An acute hemolytic transfusion reaction is most often due to:",
    choices: ["IgA deficiency", "ABO incompatibility from clerical/identification error", "Bacterial contamination", "Citrate toxicity"],
    answer: 1,
    explanation:
      "Acute hemolytic reactions usually stem from ABO mismatch (clerical error). Signs under anesthesia: fever, hypotension, hemoglobinuria, DIC, and oozing. Stop transfusion, support BP, maintain urine output, and send blood/labs.",
  },
  {
    id: "q365",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Cushing's triad (hypertension, bradycardia, irregular respirations) signals:",
    choices: ["Hypovolemic shock", "Dangerously elevated intracranial pressure / impending herniation", "Sepsis", "Anaphylaxis"],
    answer: 1,
    explanation:
      "Cushing's triad indicates critically raised ICP and impending herniation. Acute measures: head elevation, normocapnia-to-mild hyperventilation (temporizing), osmotic therapy (mannitol/hypertonic saline), and neurosurgical decompression.",
  },
  {
    id: "q366",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "Which ventilator setting change most directly improves oxygenation in ARDS (assuming recruitable lung)?",
    choices: ["Decreasing PEEP", "Increasing PEEP / FiO2", "Decreasing FiO2", "Increasing respiratory rate"],
    answer: 1,
    explanation:
      "Oxygenation is governed mainly by mean airway pressure (PEEP) and FiO2. Increasing PEEP recruits collapsed alveoli and reduces shunt. CO2 elimination is governed by minute ventilation (rate × tidal volume).",
  },
  {
    id: "q367",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Diabetic ketoacidosis management priorities include:",
    choices: ["Bicarbonate first", "IV fluids, insulin infusion, and potassium repletion as it falls", "Insulin alone", "Rapid glucose lowering with no fluids"],
    answer: 1,
    explanation:
      "DKA: aggressive isotonic fluids, insulin infusion, and careful potassium management (total-body depletion despite normal/high initial serum K—replace as it falls with insulin). Bicarbonate is reserved for severe acidosis (pH <6.9). Watch for cerebral edema in children.",
  },
  {
    id: "q368",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "The earliest reliable sign of malignant hyperthermia under general anesthesia is usually:",
    choices: ["Fever", "An unexplained rise in end-tidal CO2 (and tachycardia)", "Bradycardia", "Hypotension"],
    answer: 1,
    explanation:
      "An unexplained, rapidly rising EtCO2 (with tachycardia and masseter/generalized rigidity) is the earliest sign of MH; hyperthermia is a late finding. Treatment: stop triggers, dantrolene 2.5 mg/kg, hyperventilate with 100% O2, cool, treat hyperkalemia/arrhythmias.",
  },
  {
    id: "q369",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "The definitive treatment of malignant hyperthermia is:",
    choices: ["Cooling alone", "Dantrolene", "Beta-blockers", "Calcium gluconate"],
    answer: 1,
    explanation:
      "Dantrolene (initial 2.5 mg/kg IV, repeated to effect) inhibits ryanodine receptor calcium release in skeletal muscle and is the specific antidote for MH, alongside supportive care. Calcium channel blockers are avoided with dantrolene (hyperkalemia/cardiac depression).",
  },
  {
    id: "q370",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Adenosine is the drug of choice for which arrhythmia?",
    choices: ["Atrial fibrillation", "Stable regular narrow-complex supraventricular tachycardia (AVNRT)", "Ventricular fibrillation", "Asystole"],
    answer: 1,
    explanation:
      "Adenosine (6 mg then 12 mg rapid IV push) transiently blocks the AV node, terminating reentrant SVT (AVNRT/AVRT) and unmasking atrial flutter. It is ineffective for AF/flutter rate control and for VT.",
  },
  {
    id: "q371",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Wolff-Parkinson-White with atrial fibrillation should NOT be treated with which agent?",
    choices: ["Procainamide", "AV nodal blockers (adenosine, verapamil, digoxin, beta-blockers)", "Synchronized cardioversion if unstable", "Ibutilide"],
    answer: 1,
    explanation:
      "In WPW with AF, AV nodal blockers can promote conduction down the accessory pathway, accelerating ventricular response and risking VF. Use procainamide/ibutilide (or cardioversion if unstable) instead.",
  },
  {
    id: "q372",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Nitroglycerin's principal anti-ischemic benefit derives from:",
    choices: ["Increased heart rate", "Venodilation reducing preload and myocardial oxygen demand", "Arterial constriction", "Positive inotropy"],
    answer: 1,
    explanation:
      "Nitroglycerin predominantly venodilates (at low doses), reducing preload and ventricular wall tension/oxygen demand; it also dilates coronaries and relieves spasm. Higher doses cause arterial dilation. Avoid with severe AS, HOCM, or recent PDE5 inhibitors.",
  },
  {
    id: "q373",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Sodium nitroprusside infusions risk which toxicity with prolonged/high-dose use?",
    choices: ["Methemoglobinemia only", "Cyanide and thiocyanate toxicity", "Hyperkalemia", "Digoxin toxicity"],
    answer: 1,
    explanation:
      "Nitroprusside metabolism releases cyanide (then thiocyanate, renally cleared). Toxicity presents as tachyphylaxis, metabolic acidosis, and elevated mixed venous O2. Treatment: stop infusion, sodium thiosulfate, hydroxocobalamin, sodium nitrite. Limit dose/duration.",
  },
  {
    id: "q374",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Which beta-blocker is ultra-short-acting due to metabolism by red-cell esterases, useful for intraoperative tachycardia/hypertension?",
    choices: ["Metoprolol", "Esmolol", "Atenolol", "Propranolol"],
    answer: 1,
    explanation:
      "Esmolol is a cardioselective beta-1 blocker hydrolyzed by red blood cell esterases (half-life ~9 minutes), allowing rapid titration for acute tachycardia/hypertension and easy offset if hypotension occurs.",
  },
  {
    id: "q375",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Which finding distinguishes obstructive (tension pneumothorax) from cardiogenic shock at the bedside?",
    choices: ["Bilateral crackles", "Unilateral absent breath sounds with tracheal deviation and hypotension", "Murmur", "Peripheral edema"],
    answer: 1,
    explanation:
      "Tension pneumothorax: hypotension, distended neck veins, unilateral absent breath sounds/hyperresonance, and tracheal deviation away from the affected side. It is a clinical diagnosis requiring immediate needle decompression then chest tube—do not wait for imaging.",
  },
  {
    id: "q376",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "In a patient with elevated intracranial pressure, which IV induction agent is generally preferred for its cerebral protective profile?",
    choices: ["Ketamine", "Propofol or thiopental (reduce CMRO2 and CBF)", "Etomidate is contraindicated", "Nitrous oxide"],
    answer: 1,
    explanation:
      "Propofol and barbiturates reduce cerebral metabolic rate, cerebral blood flow, and ICP, making them suitable for neuroanesthesia (maintaining CPP). Ketamine historically was avoided (though re-evaluated); N2O can raise ICP/CBF.",
  },
  {
    id: "q377",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "The recommended initial mannitol dose to acutely reduce intracranial pressure is approximately:",
    choices: ["0.05 g/kg", "0.25–1 g/kg IV", "5 g/kg", "10 mg/kg"],
    answer: 1,
    explanation:
      "Mannitol 0.25–1 g/kg IV creates an osmotic gradient drawing water from brain tissue, lowering ICP (also improves rheology). Monitor serum osmolality and avoid hypovolemia/hypotension. Hypertonic saline is an alternative, preferred when hypovolemic.",
  },
  {
    id: "q378",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "After return of spontaneous circulation from cardiac arrest, targeted temperature management aims to:",
    choices: ["Induce hyperthermia", "Maintain a constant target temperature (e.g., 32–36°C) and aggressively prevent fever", "Cool to 20°C", "Rewarm rapidly to 40°C"],
    answer: 1,
    explanation:
      "Post-arrest TTM targets a constant temperature between 32–36°C for ≥24 hours and emphasizes avoidance of fever, to improve neurologic outcome in comatose survivors. Avoid hyperthermia, which worsens neuronal injury.",
  },
  {
    id: "q379",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "The most appropriate immediate treatment of symptomatic, severe hyperkalemia with ECG changes is:",
    choices: ["Kayexalate", "IV calcium (gluconate or chloride) to stabilize the myocardium", "Loop diuretic alone", "Oral potassium binder"],
    answer: 1,
    explanation:
      "Give IV calcium first to stabilize cardiac membranes (does not lower K), then shift K intracellularly (insulin/glucose, beta-agonist, bicarbonate if acidotic), and finally remove K (diuretics, dialysis, binders).",
  },
  {
    id: "q380",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "Anaphylaxis under anesthesia (most commonly from neuromuscular blockers, latex, or antibiotics) is treated first with:",
    choices: ["Diphenhydramine", "Epinephrine and IV fluids", "Steroids alone", "Vasopressin first-line"],
    answer: 1,
    explanation:
      "Epinephrine is the first-line, life-saving treatment for anaphylaxis (bronchodilation, vasoconstriction, mast-cell stabilization), along with stopping the trigger, 100% O2, and aggressive IV fluids. Antihistamines and steroids are adjuncts. Serum tryptase aids later confirmation.",
  },
  {
    id: "q381",
    category: "Cardiac",
    difficulty: "Medium",
    stem: "Which condition is the most common cause of perioperative myocardial injury (Type 2 MI)?",
    choices: ["Coronary plaque rupture", "Supply-demand mismatch (tachycardia, hypotension, anemia)", "Coronary dissection", "Pericarditis"],
    answer: 1,
    explanation:
      "Perioperative myocardial injury is frequently Type 2—oxygen supply/demand imbalance from tachycardia, hypotension, anemia, hypoxemia, or hypertension—rather than acute plaque rupture (Type 1). Management focuses on optimizing hemodynamics and oxygen delivery.",
  },
  {
    id: "q382",
    category: "Cardiac",
    difficulty: "Hard",
    stem: "Which ECG leads best monitor for inferior wall ischemia?",
    choices: ["V1-V2", "II, III, aVF", "I and aVL", "V4-V6"],
    answer: 1,
    explanation:
      "Inferior wall (right coronary territory): leads II, III, aVF. Anterior/septal: V1-V4 (LAD). Lateral: I, aVL, V5-V6. Intraoperative monitoring of II and V5 detects the majority of ischemic events.",
  },
  {
    id: "q383",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Which is a recognized indication for emergent dialysis (the 'AEIOU' mnemonic) in acute kidney injury?",
    choices: ["Mild proteinuria", "Refractory acidosis, electrolyte disturbance (hyperkalemia), intoxication, fluid overload, or uremic complications", "Isolated elevated BUN", "Hypokalemia"],
    answer: 1,
    explanation:
      "Emergent dialysis indications (AEIOU): refractory metabolic Acidosis, severe Electrolyte abnormalities (hyperkalemia), Ingestions/Intoxications (e.g., toxic alcohols, lithium, salicylates), fluid Overload refractory to diuretics, and symptomatic Uremia (pericarditis, encephalopathy).",
  },
  {
    id: "q384",
    category: "Critical Care",
    difficulty: "Hard",
    stem: "The 'lethal triad' contributing to mortality in massive trauma/hemorrhage is:",
    choices: ["Hypertension, bradycardia, fever", "Hypothermia, acidosis, and coagulopathy", "Hyperkalemia, hypocalcemia, alkalosis", "Hypoxia, hypercarbia, hyperglycemia"],
    answer: 1,
    explanation:
      "The lethal triad of trauma is hypothermia, acidosis, and coagulopathy, which reinforce each other. Damage-control resuscitation addresses all three: warming, balanced blood product ratios (1:1:1), permissive hypotension until control, and limiting crystalloid.",
  },
  {
    id: "q385",
    category: "Critical Care",
    difficulty: "Medium",
    stem: "Tranexamic acid reduces bleeding by:",
    choices: ["Activating thrombin", "Inhibiting plasminogen activation (antifibrinolytic)", "Providing clotting factors", "Chelating calcium"],
    answer: 1,
    explanation:
      "Tranexamic acid is a lysine analog that blocks plasminogen binding to fibrin, inhibiting fibrinolysis. Early administration reduces mortality in trauma hemorrhage (CRASH-2) and decreases bleeding in many surgeries.",
  },
  // ============ BOARD EXPANSION BATCH 4: Obstetric / Pediatric ============
  {
    id: "q386",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Compared with the non-pregnant state, MAC of volatile anesthetics in pregnancy is:",
    choices: ["Increased ~40%", "Decreased ~30–40%", "Unchanged", "Decreased only in the first trimester"],
    answer: 1,
    explanation:
      "MAC decreases ~30–40% in pregnancy (progesterone, endorphins). Combined with increased minute ventilation and decreased FRC, inhalational induction is faster but the risk of overdose/hypotension is higher.",
  },
  {
    id: "q387",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Which respiratory change of pregnancy accelerates desaturation during apnea?",
    choices: ["Increased FRC", "Decreased FRC with increased oxygen consumption", "Decreased minute ventilation", "Increased residual volume"],
    answer: 1,
    explanation:
      "Pregnancy reduces FRC (~20%) while increasing oxygen consumption (~20%), so the apneic oxygen reservoir is small and parturients desaturate rapidly. Thorough preoxygenation and rapid airway management are essential.",
  },
  {
    id: "q388",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "Pregnant patients are considered to have a 'full stomach' for aspiration risk after approximately:",
    choices: ["8 weeks", "Roughly the second trimester onward (commonly cited ~12–20 weeks), and especially with labor", "Only at term", "Only during labor"],
    answer: 1,
    explanation:
      "Progesterone reduces lower-esophageal sphincter tone and the gravid uterus raises intragastric pressure; aspiration precautions (RSI, antacids) are standard from the second trimester and especially in labor. Plan accordingly for general anesthesia.",
  },
  {
    id: "q389",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "The local anesthetic historically avoided for epidural top-up because of cardiotoxicity in pregnancy is:",
    choices: ["2-chloroprocaine", "0.75% bupivacaine (concentrated)", "Lidocaine", "Ropivacaine"],
    answer: 1,
    explanation:
      "0.75% bupivacaine was withdrawn for obstetric use after maternal cardiac arrests from accidental intravascular injection. Pregnancy increases sensitivity to bupivacaine cardiotoxicity. Use dilute solutions, incremental dosing, and test doses.",
  },
  {
    id: "q390",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "First-line treatment of magnesium toxicity (areflexia, respiratory depression) in a preeclamptic patient is:",
    choices: ["Furosemide", "IV calcium gluconate", "Naloxone", "Sodium bicarbonate"],
    answer: 1,
    explanation:
      "IV calcium gluconate antagonizes magnesium at the neuromuscular junction and cardiac membranes. Stop the magnesium infusion, support ventilation, and check levels (loss of deep tendon reflexes ~10 mEq/L; respiratory arrest ~15 mEq/L). Magnesium also potentiates neuromuscular blockers.",
  },
  {
    id: "q391",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "The definitive treatment for eclampsia/severe preeclampsia is:",
    choices: ["Magnesium alone indefinitely", "Delivery of the fetus and placenta", "Bed rest", "Aspirin"],
    answer: 1,
    explanation:
      "Delivery is the definitive treatment. Magnesium prevents/treats seizures and antihypertensives (labetalol, hydralazine, nifedipine) control blood pressure as temporizing measures until delivery.",
  },
  {
    id: "q392",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "The most common cause of obstetric hemorrhage after delivery is:",
    choices: ["Uterine atony", "Retained placenta", "Genital tract laceration", "Coagulopathy"],
    answer: 0,
    explanation:
      "Uterine atony is the leading cause of postpartum hemorrhage. Management: uterine massage and uterotonics—oxytocin first-line, then methylergonovine (avoid in hypertension), carboprost/15-methyl PGF2α (avoid in asthma), and misoprostol; then surgical measures.",
  },
  {
    id: "q393",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Methylergonovine (Methergine) is relatively contraindicated in patients with:",
    choices: ["Asthma", "Hypertension/preeclampsia", "Diabetes", "Anemia"],
    answer: 1,
    explanation:
      "Methylergonovine causes vasoconstriction and can precipitate severe hypertension, so it is avoided in hypertensive/preeclamptic patients. Carboprost (PGF2α) is avoided in asthma (bronchospasm). Oxytocin can cause hypotension if given as a rapid bolus.",
  },
  {
    id: "q394",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "Amniotic fluid embolism classically presents with:",
    choices: ["Gradual hypertension", "Sudden cardiovascular collapse, hypoxemia, and DIC during labor/delivery", "Isolated fever", "Slow-onset jaundice"],
    answer: 1,
    explanation:
      "AFE is a catastrophic, often biphasic syndrome—acute hypoxemia and cardiovascular collapse (pulmonary hypertension/RV failure) followed by DIC. Treatment is supportive: high-quality resuscitation, oxygenation, hemodynamic support, and aggressive correction of coagulopathy.",
  },
  {
    id: "q395",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "For a category-1 (crash) cesarean delivery in a patient without a working epidural, the fastest reliable anesthetic is usually:",
    choices: ["Awake fiberoptic intubation", "General anesthesia with rapid sequence induction", "Slow epidural dosing", "Local infiltration only"],
    answer: 1,
    explanation:
      "When immediate delivery is needed and neuraxial anesthesia is not already established/feasible, general anesthesia with RSI provides the fastest reliable surgical conditions, accepting the airway and aspiration risks inherent in the obstetric airway.",
  },
  {
    id: "q396",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "The most appropriate vasopressor management to minimize fetal acidosis during spinal for cesarean is:",
    choices: ["Ephedrine boluses only", "Prophylactic phenylephrine infusion titrated to baseline BP", "Permissive hypotension", "Withholding all vasopressors"],
    answer: 1,
    explanation:
      "A prophylactic phenylephrine infusion titrated to maintain maternal baseline blood pressure best preserves uteroplacental perfusion and minimizes fetal acidosis compared with ephedrine, which crosses the placenta and increases fetal metabolism.",
  },
  {
    id: "q397",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "Aortocaval compression in the term parturient is best relieved by:",
    choices: ["Supine flat position", "Left uterine displacement (left lateral tilt ≥15°)", "Reverse Trendelenburg", "Right lateral position"],
    answer: 1,
    explanation:
      "Left uterine displacement (manual or ≥15° left tilt) shifts the gravid uterus off the inferior vena cava and aorta, restoring venous return and uteroplacental perfusion. This is essential during cesarean and maternal resuscitation.",
  },
  {
    id: "q398",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "During maternal cardiac arrest at >20 weeks gestation, if there is no ROSC, perimortem cesarean delivery should ideally be performed within:",
    choices: ["1 minute", "4–5 minutes of arrest", "15 minutes", "30 minutes"],
    answer: 1,
    explanation:
      "Aim to deliver within ~5 minutes of arrest (incision by ~4 minutes) to relieve aortocaval compression, improve maternal resuscitation, and salvage the neonate. Continue high-quality CPR with left uterine displacement throughout.",
  },
  {
    id: "q399",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Which neuraxial opioid is most associated with delayed respiratory depression after intrathecal/epidural administration?",
    choices: ["Fentanyl", "Sufentanil", "Preservative-free morphine (hydrophilic)", "Remifentanil"],
    answer: 2,
    explanation:
      "Hydrophilic morphine spreads cephalad in CSF, causing delayed respiratory depression (peaking ~6–12 h) and requiring extended monitoring. Lipophilic opioids (fentanyl, sufentanil) act quickly and locally with mainly early respiratory effects.",
  },
  {
    id: "q400",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "A parturient on therapeutic enoxaparin presents in labor desiring epidural analgesia. The safest course is:",
    choices: ["Place epidural immediately", "Delay neuraxial block until appropriate time has elapsed per ASRA (≥24 h after therapeutic LMWH)", "Give protamine then place block immediately", "Use spinal instead, no delay"],
    answer: 1,
    explanation:
      "Therapeutic LMWH requires ≥24 hours before neuraxial placement to reduce epidural hematoma risk; prophylactic dosing requires ≥12 hours. Coordinate timing and anticoagulant management; consider alternative analgesia (e.g., IV remifentanil PCA) if neuraxial is unsafe.",
  },
  {
    id: "q401",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Compared with adults, the pediatric airway (infant) is characterized by:",
    choices: ["Anterior, cephalad larynx with a large floppy epiglottis and narrowest point at the cricoid (in young children)", "Posterior larynx", "Narrowest at the glottis", "Small tongue relative to mouth"],
    answer: 0,
    explanation:
      "Infant airway: large head/occiput and tongue, cephalad and anterior larynx (~C3-4), long floppy U/omega-shaped epiglottis, and a funnel shape historically described with the narrowest point at the cricoid. These features guide positioning, blade choice, and tube selection.",
  },
  {
    id: "q402",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "The most common cause of bradycardia in an anesthetized infant/child is:",
    choices: ["Hyperkalemia", "Hypoxemia", "Hypothermia", "Vagal stimulation alone"],
    answer: 1,
    explanation:
      "Hypoxia is the leading cause of pediatric bradycardia. Because infants have rate-dependent cardiac output, bradycardia rapidly lowers output. The first response is to ensure oxygenation/ventilation; atropine and epinephrine follow if needed.",
  },
  {
    id: "q403",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "An ex-premature infant at 44 weeks postconceptual age is at risk for what postoperative complication after general anesthesia?",
    choices: ["Malignant hyperthermia", "Postoperative apnea", "Emergence delirium only", "Laryngomalacia"],
    answer: 1,
    explanation:
      "Former preterm infants are at risk for postoperative apnea, generally up to ~50–60 weeks postconceptual age. Such infants warrant overnight apnea monitoring after anesthesia; caffeine may be used and avoidance of opioids/spinal-only techniques considered.",
  },
  {
    id: "q404",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "Using the formula, the appropriate cuffed ETT internal diameter for a 6-year-old child is approximately:",
    choices: ["4.0", "5.0", "5.5", "6.5"],
    answer: 1,
    explanation:
      "Cuffed ETT size = (age/4) + 3.5 = (6/4) + 3.5 = 1.5 + 3.5 = 5.0. Uncuffed = (age/4) + 4. Always have a half-size above and below available.",
  },
  {
    id: "q405",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Succinylcholine can cause hyperkalemic cardiac arrest in children with undiagnosed:",
    choices: ["Asthma", "Duchenne muscular dystrophy / occult myopathy", "Otitis media", "GERD"],
    answer: 1,
    explanation:
      "Because of the risk of hyperkalemic arrest and rhabdomyolysis in boys with undiagnosed muscular dystrophy, succinylcholine carries a boxed warning against routine use in children; it is reserved for emergency airway/laryngospasm in pediatrics.",
  },
  {
    id: "q406",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Estimated blood volume of a full-term neonate is approximately:",
    choices: ["50 mL/kg", "70 mL/kg", "85–90 mL/kg", "100 mL/kg"],
    answer: 2,
    explanation:
      "Estimated blood volume: premature neonate ~90–100 mL/kg, full-term neonate ~80–90 mL/kg, infant ~75–80 mL/kg, child ~70 mL/kg, adult ~65–70 mL/kg. EBV is used to calculate allowable blood loss.",
  },
  {
    id: "q407",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "A child presents for tonsillectomy with a recent (within 2 weeks) upper respiratory infection. The main intraoperative concern is:",
    choices: ["Malignant hyperthermia", "Increased airway reactivity (laryngospasm, bronchospasm, desaturation)", "Hyperthermia", "Hyperkalemia"],
    answer: 1,
    explanation:
      "Recent URI increases airway reactivity for up to ~4–6 weeks, raising the risk of laryngospasm, bronchospasm, and desaturation. Decisions weigh urgency and severity; strategies include deeper anesthesia for airway manipulation and avoiding unnecessary instrumentation.",
  },
  {
    id: "q408",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Pyloric stenosis is primarily a:",
    choices: ["Surgical emergency requiring immediate operation", "Medical emergency requiring fluid/electrolyte correction (hypochloremic, hypokalemic metabolic alkalosis) before surgery", "Cardiac emergency", "Indication for awake intubation"],
    answer: 1,
    explanation:
      "Pyloric stenosis is a medical, not surgical, emergency: correct the hypochloremic, hypokalemic metabolic alkalosis and dehydration first. Anesthesia involves stomach decompression (full stomach) and RSI; postoperative apnea/hypoventilation risk from CSF alkalosis exists.",
  },
  {
    id: "q409",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Emergence delirium in children is most associated with which anesthetic and is reduced by adjuncts such as:",
    choices: ["Halothane; lidocaine", "Sevoflurane; dexmedetomidine or propofol/opioid", "Isoflurane; ketamine alone", "Nitrous oxide; flumazenil"],
    answer: 1,
    explanation:
      "Sevoflurane (and desflurane) are associated with pediatric emergence delirium. Prophylaxis includes dexmedetomidine, propofol, opioids (fentanyl), and adequate analgesia. It is usually self-limited but distressing and risks self-injury.",
  },
  {
    id: "q410",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "Standard ASA fasting guidelines allow clear liquids up until how long before anesthesia?",
    choices: ["1 hour", "2 hours", "4 hours", "6 hours"],
    answer: 1,
    explanation:
      "ASA NPO guidelines: clear liquids 2 h, breast milk 4 h, infant formula/nonhuman milk and light meal 6 h, fatty/fried/heavy meal 8 h. Some institutions now permit clear fluids up to 1 hour in children to reduce dehydration/irritability.",
  },
  {
    id: "q411",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "A neonate with a tracheoesophageal fistula (most common type) is at risk during positive-pressure ventilation of:",
    choices: ["Gastric distension and impaired ventilation via the fistula", "Pneumothorax only", "Hyperkalemia", "Hypoglycemia"],
    answer: 0,
    explanation:
      "In the common (type C) TEF, positive-pressure ventilation can inflate the stomach through the fistula, worsening ventilation and risking gastric rupture. Strategies include positioning the tube tip beyond the fistula and gentle/spontaneous ventilation until ligation.",
  },
  {
    id: "q412",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Congenital diaphragmatic hernia management emphasizes avoiding which ventilatory practice?",
    choices: ["Gentle ventilation", "High peak airway pressures / aggressive mask ventilation (risk of pulmonary hypertension and barotrauma to hypoplastic lung)", "Permissive hypercapnia", "Preductal saturation monitoring"],
    answer: 1,
    explanation:
      "CDH involves pulmonary hypoplasia and pulmonary hypertension. Avoid vigorous mask ventilation (gastric distension) and high pressures; use gentle ventilation, permissive hypercapnia, preductal SpO2 monitoring, and avoid factors increasing PVR.",
  },
  {
    id: "q413",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "The most appropriate initial energy for synchronized cardioversion of an unstable child with SVT (per PALS) is:",
    choices: ["0.1 J/kg", "0.5–1 J/kg", "4 J/kg", "10 J/kg"],
    answer: 1,
    explanation:
      "PALS: synchronized cardioversion for unstable SVT/VT with a pulse starts at 0.5–1 J/kg, increasing to 2 J/kg if needed. Defibrillation (pulseless VF/VT) starts at 2 J/kg then 4 J/kg.",
  },
  {
    id: "q414",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Neonates are predisposed to hypothermia under anesthesia primarily because of:",
    choices: ["Shivering thermogenesis", "High surface-area-to-mass ratio, thin skin, and reliance on nonshivering (brown fat) thermogenesis", "Excess subcutaneous fat", "Low metabolic rate"],
    answer: 1,
    explanation:
      "Neonates lose heat rapidly (large surface area-to-mass ratio, thin skin, little insulating fat) and cannot shiver—they rely on nonshivering thermogenesis (brown fat), which is impaired by anesthesia. Active warming (forced-air, warmed room/fluids) is essential.",
  },
  {
    id: "q415",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "The recommended dose of IV epinephrine in pediatric cardiac arrest (PALS) is:",
    choices: ["0.001 mg/kg", "0.01 mg/kg (0.1 mL/kg of 1:10,000)", "0.1 mg/kg", "1 mg fixed"],
    answer: 1,
    explanation:
      "PALS epinephrine dose is 0.01 mg/kg IV/IO (0.1 mL/kg of 0.1 mg/mL '1:10,000') every 3–5 minutes. The endotracheal dose is higher (0.1 mg/kg). Defibrillation, CPR, and treating reversible causes remain central.",
  },
  {
    id: "q416",
    category: "Pediatric",
    difficulty: "Easy",
    stem: "Maintenance fluid rate for a 5-kg infant by the 4-2-1 rule is:",
    choices: ["5 mL/h", "10 mL/h", "20 mL/h", "40 mL/h"],
    answer: 2,
    explanation:
      "4 mL/kg/h for the first 10 kg → 4 × 5 = 20 mL/h. (For weights ≤10 kg, the rate is simply 4 mL/kg/h.)",
  },
  {
    id: "q417",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Why are infants more sensitive to nondepolarizing neuromuscular blockers in terms of onset but with variable dose requirements?",
    choices: ["Immature neuromuscular junctions and larger volume of distribution (extracellular fluid)", "Increased pseudocholinesterase", "Decreased muscle mass only", "Hyperkalemia"],
    answer: 0,
    explanation:
      "Infants have immature neuromuscular junctions (increased sensitivity) but a larger extracellular fluid volume of distribution (dilutional effect), so the per-kg dose is often similar to adults while onset and recovery differ. Monitor with a nerve stimulator.",
  },
  {
    id: "q418",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "A child presents with stridor, drooling, high fever, and a tripod posture. The most likely diagnosis and approach is:",
    choices: ["Croup; nebulized epinephrine and discharge", "Epiglottitis; avoid agitation, take to OR for inhalational induction with ENT/surgical airway backup", "Foreign body; immediate Heimlich", "Asthma; albuterol only"],
    answer: 1,
    explanation:
      "Acute epiglottitis is a life-threatening airway emergency. Keep the child calm (no IVs/exams that agitate), bring to the OR for a gentle inhalational induction maintaining spontaneous ventilation, with ENT/surgery ready for rigid bronchoscopy or surgical airway.",
  },
  {
    id: "q419",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Caudal anesthesia in children is performed by accessing the epidural space via the:",
    choices: ["L3-4 interspace", "Sacral hiatus through the sacrococcygeal membrane", "Thoracic paravertebral space", "Foramen magnum"],
    answer: 1,
    explanation:
      "A caudal block enters the epidural space through the sacral hiatus (sacrococcygeal ligament). It provides reliable analgesia for sub-umbilical surgery in children (e.g., 0.25% bupivacaine ~1 mL/kg for a mid-thoracic level by the Armitage scheme).",
  },
  {
    id: "q420",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "A child with Down syndrome requires careful neck positioning because of the risk of:",
    choices: ["Malignant hyperthermia", "Atlantoaxial instability", "Hyperkalemia", "Pyloric stenosis"],
    answer: 1,
    explanation:
      "Down syndrome is associated with atlantoaxial instability (ligamentous laxity), risking cord injury with neck hyperextension during laryngoscopy/positioning. Other concerns include congenital heart disease, subglottic stenosis, and obstructive sleep apnea.",
  },
  {
    id: "q421",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Oxytocin administered as a rapid IV bolus can cause:",
    choices: ["Severe hypertension and bradycardia", "Hypotension, tachycardia, and flushing", "Bronchospasm", "Hyperkalemia"],
    answer: 1,
    explanation:
      "Rapid oxytocin boluses cause vasodilation with hypotension, reflex tachycardia, and flushing (and can cause coronary vasoconstriction). Give as a slow infusion or small titrated doses, especially in cardiac patients.",
  },
  {
    id: "q422",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "Placenta accreta spectrum poses which major anesthetic concern?",
    choices: ["Minimal blood loss", "Massive hemorrhage requiring preparation for transfusion and possible hysterectomy", "Hyperkalemia", "Malignant hyperthermia"],
    answer: 1,
    explanation:
      "Placenta accreta/increta/percreta carries a high risk of catastrophic hemorrhage. Plan with large-bore access, blood products available (massive transfusion protocol), often general anesthesia, possible interventional radiology, and readiness for cesarean hysterectomy.",
  },
  {
    id: "q423",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Painless vaginal bleeding in the third trimester most suggests:",
    choices: ["Placental abruption", "Placenta previa", "Uterine rupture", "Vasa previa only"],
    answer: 1,
    explanation:
      "Placenta previa classically causes painless third-trimester bleeding. Placental abruption causes painful bleeding with a tender, hypertonic uterus and possible DIC/fetal distress. Avoid digital vaginal exam in suspected previa.",
  },
  {
    id: "q424",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "The minimal sensory block level required for cesarean delivery anesthesia is approximately:",
    choices: ["T10", "T4-T6", "L1", "C8"],
    answer: 1,
    explanation:
      "Cesarean delivery requires a sensory level to ~T4-T6 (peritoneal traction). Labor analgesia needs only ~T10. Inadequate height causes intraoperative pain, especially with uterine exteriorization.",
  },
  {
    id: "q425",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "The most reliable sign that a child is adequately preoxygenated/denitrogenated before induction is:",
    choices: ["Heart rate", "End-tidal oxygen concentration approaching ~80–90%", "Skin color", "Respiratory rate"],
    answer: 1,
    explanation:
      "End-tidal oxygen (or expired O2) approaching ~80–90% indicates effective denitrogenation, maximizing the apneic oxygen reservoir. Children desaturate quickly due to high oxygen consumption and small FRC, so good preoxygenation is critical.",
  },
  {
    id: "q426",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Which physiologic feature explains why neonates have higher anesthetic (volatile) requirements per the MAC curve in infancy?",
    choices: ["MAC is highest in neonates", "MAC is highest around 1–6 months of infancy, then declines with age", "MAC does not change with age", "MAC is highest in the elderly"],
    answer: 1,
    explanation:
      "MAC is relatively lower in neonates, peaks at around 1–6 months of age (highest requirement), then progressively declines with increasing age. This influences dosing and the risk of overdose/hemodynamic depression in infants.",
  },
  {
    id: "q427",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "A laryngospasm occurs in a child during emergence. After failure of jaw thrust/CPAP, a small dose of which agent is used to break it while preserving an IV-free approach if needed?",
    choices: ["Rocuronium IM", "Succinylcholine (IV 0.1–0.5 mg/kg, or IM 4 mg/kg if no IV)", "Atropine alone", "Neostigmine"],
    answer: 1,
    explanation:
      "Persistent laryngospasm is broken with succinylcholine (small IV dose, or IM ~4 mg/kg with atropine if no IV access), accompanied by deepening anesthesia and 100% O2 with positive pressure to prevent hypoxia and bradycardia.",
  },
  {
    id: "q428",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Which intravenous fluid is generally avoided as a maintenance fluid in children due to hyponatremia risk?",
    choices: ["Isotonic balanced crystalloid", "Hypotonic solutions (e.g., 0.2% saline) as maintenance", "Normal saline", "Lactated Ringer's"],
    answer: 1,
    explanation:
      "Hypotonic maintenance fluids increase the risk of hospital-acquired hyponatremia (especially with non-osmotic ADH release perioperatively). Current guidance favors isotonic fluids for maintenance, with glucose added as needed in infants/neonates to prevent hypoglycemia.",
  },
  {
    id: "q429",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "An infant for emergency surgery has a heart rate of 80 and falling SpO2 during induction. The immediate priority is:",
    choices: ["Give atropine first", "Establish effective oxygenation/ventilation, then atropine/epinephrine if bradycardia persists", "Start chest compressions immediately", "Increase volatile agent"],
    answer: 1,
    explanation:
      "Pediatric bradycardia is most often hypoxic; the first action is to ensure airway, oxygenation, and ventilation (and stop any volatile overdose). If bradycardia persists despite oxygenation, give atropine/epinephrine and begin CPR per PALS if HR <60 with poor perfusion.",
  },
  {
    id: "q430",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "The uteroplacental circulation at term is best described as:",
    choices: ["Highly autoregulated", "A maximally dilated, pressure-dependent system without autoregulation", "Constricted at baseline", "Independent of maternal blood pressure"],
    answer: 1,
    explanation:
      "Uteroplacental blood flow is not autoregulated—it is pressure-dependent and the vessels are near-maximally dilated. Therefore maternal hypotension directly reduces placental perfusion, underscoring prompt treatment of spinal-induced hypotension.",
  },
  {
    id: "q431",
    category: "Obstetric",
    difficulty: "Hard",
    stem: "A laboring patient with severe aortic stenosis is best managed for delivery with:",
    choices: ["Rapid single-shot spinal", "Carefully titrated epidural (slow onset) maintaining preload/afterload, or general anesthesia, avoiding sudden sympathectomy", "No analgesia", "Aggressive vasodilation"],
    answer: 1,
    explanation:
      "Severe AS tolerates abrupt sympathectomy (single-shot spinal) poorly. A slowly titrated epidural maintains hemodynamic stability; maintain preload, afterload (phenylephrine), sinus rhythm, and avoid tachycardia. Have invasive monitoring and a multidisciplinary plan.",
  },
  {
    id: "q432",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Caffeine is used perioperatively in former preterm infants primarily to:",
    choices: ["Treat hypoglycemia", "Reduce the risk of postoperative apnea", "Prevent emergence delirium", "Treat bradycardia from succinylcholine"],
    answer: 1,
    explanation:
      "Caffeine (a respiratory stimulant) reduces apnea of prematurity and postoperative apnea risk in ex-preterm infants. It is an adjunct to postoperative apnea monitoring rather than a replacement for it.",
  },
  {
    id: "q433",
    category: "Pediatric",
    difficulty: "Hard",
    stem: "Which feature of fetal hemoglobin (HbF) affects oxygen delivery?",
    choices: ["Right-shifted O2 curve", "Higher oxygen affinity (left-shifted) facilitating placental O2 uptake", "Lower oxygen affinity", "No P50 difference from adult Hb"],
    answer: 1,
    explanation:
      "HbF has a higher oxygen affinity (lower P50, left-shifted curve) because it binds 2,3-DPG poorly, favoring oxygen uptake across the placenta. After birth, HbF is gradually replaced by adult hemoglobin over the first months of life.",
  },
  {
    id: "q434",
    category: "Obstetric",
    difficulty: "Medium",
    stem: "Which feature distinguishes HELLP syndrome?",
    choices: ["High platelets", "Hemolysis, Elevated Liver enzymes, and Low Platelets", "Low liver enzymes", "Hypertension is always absent"],
    answer: 1,
    explanation:
      "HELLP (Hemolysis, Elevated Liver enzymes, Low Platelets) is a severe variant of preeclampsia. Thrombocytopenia raises neuraxial bleeding concerns (check platelet count/trend), and there is risk of hepatic rupture, DIC, and the need for urgent delivery.",
  },
  {
    id: "q435",
    category: "Pediatric",
    difficulty: "Medium",
    stem: "Inhalational induction is faster in children than adults primarily because of:",
    choices: ["Lower cardiac output", "Higher alveolar ventilation relative to FRC", "Higher blood:gas solubility", "Larger FRC"],
    answer: 1,
    explanation:
      "Children have a high ratio of alveolar ventilation to FRC and greater vessel-rich group blood flow, speeding the rise of alveolar anesthetic concentration and thus inhalational induction compared with adults.",
  },
  // ============ BOARD EXPANSION BATCH 5: Anatomy / Perioperative / Mixed ============
  {
    id: "q436",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "During spinal anesthesia placement in an adult, the needle traverses ligaments in which order from skin?",
    choices: ["Ligamentum flavum → interspinous → supraspinous → dura", "Supraspinous → interspinous → ligamentum flavum → dura", "Dura → ligamentum flavum → interspinous → skin", "Interspinous → supraspinous → dura → ligamentum flavum"],
    answer: 1,
    explanation:
      "Midline approach order: skin → subcutaneous fat → supraspinous ligament → interspinous ligament → ligamentum flavum → epidural space → dura → arachnoid → subarachnoid (CSF). The ligamentum flavum gives the characteristic 'pop'/loss of resistance.",
  },
  {
    id: "q437",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "In adults, the spinal cord typically terminates (conus medullaris) at which level, guiding safe spinal needle insertion below it?",
    choices: ["T12", "L1-L2", "L4-L5", "S2"],
    answer: 1,
    explanation:
      "The adult conus medullaris ends at ~L1-L2, so spinal needles are placed at L3-L4 or L4-L5 (Tuffier's line ~L4) to avoid cord injury. In neonates the cord ends lower (~L3), requiring even more caudal placement.",
  },
  {
    id: "q438",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The intercristal (Tuffier's) line connecting the iliac crests usually crosses the spine at approximately:",
    choices: ["L1", "L4 (or L4-L5 interspace)", "T12", "S1"],
    answer: 1,
    explanation:
      "Tuffier's line crosses near the L4 spinous process or L4-L5 interspace, a landmark for neuraxial blocks. Surface estimation is often inaccurate (frequently one level higher), so caution is needed in patients where cord level is critical.",
  },
  {
    id: "q439",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The recurrent laryngeal nerve supplies all intrinsic laryngeal muscles EXCEPT the:",
    choices: ["Posterior cricoarytenoid", "Cricothyroid (supplied by the external branch of the superior laryngeal nerve)", "Lateral cricoarytenoid", "Thyroarytenoid"],
    answer: 1,
    explanation:
      "The recurrent laryngeal nerve innervates all intrinsic laryngeal muscles except the cricothyroid (external branch of the superior laryngeal nerve). The internal branch of the SLN provides sensation above the cords; the RLN provides sensation below.",
  },
  {
    id: "q440",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "Bilateral recurrent laryngeal nerve injury causes:",
    choices: ["Hoarseness only", "Airway obstruction/stridor from unopposed adduction (paramedian cords)", "Loss of sensation only", "No effect"],
    answer: 1,
    explanation:
      "Acute bilateral RLN injury leaves the vocal cords in a paramedian position (abductors—posterior cricoarytenoids—lost), risking airway obstruction and stridor that may require reintubation. Unilateral injury causes hoarseness.",
  },
  {
    id: "q441",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "Sensory innervation of the airway above the vocal cords (supraglottic) is provided by the:",
    choices: ["Glossopharyngeal nerve only", "Internal branch of the superior laryngeal nerve", "Recurrent laryngeal nerve", "Hypoglossal nerve"],
    answer: 1,
    explanation:
      "The internal branch of the superior laryngeal nerve provides sensation from the epiglottis to the vocal cords; the RLN supplies below the cords. The glossopharyngeal nerve covers the posterior tongue/oropharynx—relevant for awake airway topicalization.",
  },
  {
    id: "q442",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "For an awake fiberoptic intubation, blocking the glossopharyngeal nerve targets which area?",
    choices: ["Trachea below the cords", "Posterior third of the tongue and oropharynx (gag reflex)", "Nasal mucosa", "Cricothyroid membrane"],
    answer: 1,
    explanation:
      "Glossopharyngeal nerve block (or topicalization at the palatoglossal arch) anesthetizes the posterior tongue/oropharynx, abolishing the gag reflex. Superior laryngeal nerve block covers supraglottis; transtracheal/translaryngeal block (via cricothyroid membrane) covers the trachea and cords.",
  },
  {
    id: "q443",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The cricothyroid membrane is the target for emergency cricothyrotomy because it:",
    choices: ["Overlies the thyroid gland", "Is relatively avascular and lies between the thyroid and cricoid cartilages, just deep to the skin", "Is above the hyoid", "Contains the vocal cords"],
    answer: 1,
    explanation:
      "The cricothyroid membrane lies between the thyroid (above) and cricoid (below) cartilages, is superficial and relatively avascular, making it the access site for emergency surgical/needle airway and transtracheal local anesthetic injection.",
  },
  {
    id: "q444",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The stellate ganglion lies anterior to which structure, relevant to its blockade?",
    choices: ["C2 vertebral body", "C7 transverse process / first rib (over the C7-T1 region)", "Manubrium", "L1 vertebral body"],
    answer: 1,
    explanation:
      "The stellate (cervicothoracic) ganglion lies at the C7-T1 level near the transverse process of C7/neck of the first rib. Successful block produces ipsilateral Horner syndrome; it is used for upper extremity/head sympathetically-mediated pain.",
  },
  {
    id: "q445",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "The celiac plexus block relieves visceral pain from upper abdominal organs because the plexus surrounds which structure?",
    choices: ["The aortic bifurcation", "The origin of the celiac artery at approximately L1 (anterolateral aorta)", "The renal pelvis", "The inferior mesenteric artery"],
    answer: 1,
    explanation:
      "The celiac plexus lies anterolateral to the aorta at the level of the celiac trunk (~T12-L1), transmitting visceral afferents from upper abdominal organs (e.g., pancreas). Neurolytic celiac plexus block is used for pancreatic cancer pain; orthostatic hypotension and diarrhea are common side effects.",
  },
  {
    id: "q446",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The brachial plexus is formed by the ventral rami of which nerve roots?",
    choices: ["C3-C7", "C5-T1", "C6-T2", "C4-C8"],
    answer: 1,
    explanation:
      "The brachial plexus arises from the ventral rami of C5-T1 (roots → trunks → divisions → cords → branches). Interscalene blocks target the roots/trunks (sparing C8-T1), while axillary blocks target terminal branches.",
  },
  {
    id: "q447",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "Which nerve provides sensation to the skin over the medial forearm and is commonly spared by an interscalene block?",
    choices: ["Musculocutaneous", "Medial antebrachial cutaneous (from the medial cord, C8-T1)", "Radial", "Axillary"],
    answer: 1,
    explanation:
      "The medial antebrachial cutaneous nerve (C8-T1, lower trunk/medial cord) supplies the medial forearm and is often spared by interscalene blocks (which favor C5-C7), explaining incomplete block of the ulnar/medial distribution.",
  },
  {
    id: "q448",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The dermatome at the level of the umbilicus is:",
    choices: ["T4", "T10", "L1", "T6"],
    answer: 1,
    explanation:
      "Useful dermatome landmarks: nipple line T4, xiphoid T6, umbilicus T10, inguinal region L1. These guide assessment of neuraxial block height (e.g., T4 for cesarean, T10 for labor/lower limb).",
  },
  {
    id: "q449",
    category: "Anatomy",
    difficulty: "Easy",
    stem: "The dermatome at the nipple line corresponds to:",
    choices: ["T2", "T4", "T6", "T8"],
    answer: 1,
    explanation:
      "The nipple line is T4—a key landmark for confirming an adequate block level for cesarean delivery (need ~T4-T6). The xiphoid is T6 and the umbilicus is T10.",
  },
  {
    id: "q450",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "The phrenic nerve, important in interscalene block side effects, arises mainly from which roots?",
    choices: ["C2-C3", "C3-C5", "C5-C7", "T1-T2"],
    answer: 1,
    explanation:
      "The phrenic nerve arises from C3-C5 ('C3,4,5 keep the diaphragm alive'). Its proximity to the interscalene plexus explains the near-universal ipsilateral hemidiaphragm paresis with interscalene blocks.",
  },
  {
    id: "q451",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The sciatic nerve divides into the tibial and common peroneal (fibular) nerves, typically in the:",
    choices: ["Gluteal region always", "Popliteal fossa (variable, usually proximal to the popliteal crease)", "Ankle", "Femoral triangle"],
    answer: 1,
    explanation:
      "The sciatic nerve usually bifurcates into tibial and common peroneal nerves in the distal thigh/popliteal fossa, often a few centimeters above the popliteal crease—relevant to local anesthetic deposition for a popliteal block to cover both components.",
  },
  {
    id: "q452",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "Injury to the common peroneal (fibular) nerve, often from improper positioning against the fibular head, causes:",
    choices: ["Foot drop (impaired dorsiflexion) and sensory loss over the dorsum of the foot", "Loss of plantar flexion", "Hip flexion weakness", "Quadriceps weakness"],
    answer: 0,
    explanation:
      "The common peroneal nerve is superficial at the fibular head and vulnerable to compression (e.g., lithotomy or lateral position). Injury causes foot drop (weak dorsiflexion/eversion) and sensory loss over the dorsum of the foot. Padding prevents this.",
  },
  {
    id: "q453",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The most commonly injured nerve from improper arm positioning/abduction under anesthesia is the:",
    choices: ["Radial nerve", "Ulnar nerve", "Median nerve", "Axillary nerve"],
    answer: 1,
    explanation:
      "The ulnar nerve is the most frequently injured perioperative nerve (vulnerable at the cubital tunnel/medial epicondyle). Prevention: pad the elbow, keep the forearm supinated/neutral, and avoid arm abduction >90°. Brachial plexus stretch is another positioning risk.",
  },
  {
    id: "q454",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "Which positioning is most associated with perioperative vision loss from ischemic optic neuropathy?",
    choices: ["Supine short cases", "Prolonged prone spine surgery with significant blood loss/hypotension", "Lithotomy", "Lateral decubitus"],
    answer: 1,
    explanation:
      "Ischemic optic neuropathy is associated with prolonged prone spine surgery, large blood loss, hypotension, anemia, and venous congestion. Strategies: avoid direct globe pressure, keep the head neutral/level or above the heart, limit hypotension/anemia, and stage long cases.",
  },
  {
    id: "q455",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "The internal jugular vein, targeted for central line placement, typically lies in what relationship to the carotid artery at the neck?",
    choices: ["Directly posterior", "Anterolateral to the carotid artery", "Medial", "Inferior only"],
    answer: 1,
    explanation:
      "The internal jugular vein usually lies anterolateral to the carotid artery within the carotid sheath. Ultrasound guidance confirms vessel identity and patency, reducing carotid puncture and other complications.",
  },
  {
    id: "q456",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "An ASA physical status classification of III describes a patient with:",
    choices: ["Normal healthy patient", "Mild systemic disease", "Severe systemic disease that is not an immediate threat to life but limits function", "A moribund patient not expected to survive"],
    answer: 2,
    explanation:
      "ASA I: healthy; II: mild systemic disease (controlled HTN, smoker); III: severe systemic disease (poorly controlled diabetes/HTN, COPD); IV: severe disease that is a constant threat to life; V: moribund, not expected to survive without operation; VI: brain-dead organ donor. 'E' denotes emergency.",
  },
  {
    id: "q457",
    category: "Perioperative",
    difficulty: "Easy",
    stem: "Per ASA fasting guidelines, a light meal (e.g., toast and clear liquids) requires a minimum fasting period of:",
    choices: ["2 hours", "4 hours", "6 hours", "8 hours"],
    answer: 2,
    explanation:
      "Light meal → 6 hours; fatty/fried/heavy meal → 8 hours; nonhuman milk/infant formula → 6 hours; breast milk → 4 hours; clear liquids → 2 hours. These reduce aspiration risk on induction.",
  },
  {
    id: "q458",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Which chronic medication is generally CONTINUED on the morning of surgery?",
    choices: ["ACE inhibitors in all cases", "Beta-blockers (continue to avoid withdrawal)", "SGLT2 inhibitors", "Oral hypoglycemics"],
    answer: 1,
    explanation:
      "Beta-blockers should be continued perioperatively to avoid rebound ischemia/tachycardia. ACE inhibitors/ARBs are often held the morning of surgery (intraoperative hypotension). SGLT2 inhibitors are stopped ~3–4 days prior (euglycemic DKA risk); most oral hypoglycemics are held.",
  },
  {
    id: "q459",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "SGLT2 inhibitors (e.g., empagliflozin) should be withheld preoperatively because of the risk of:",
    choices: ["Hyperkalemia", "Euglycemic diabetic ketoacidosis", "Lactic acidosis", "Hypoglycemia"],
    answer: 1,
    explanation:
      "SGLT2 inhibitors can cause euglycemic DKA perioperatively; guidelines recommend holding them ~3–4 days before surgery. Metformin is typically held due to lactic acidosis risk with renal impairment/contrast.",
  },
  {
    id: "q460",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "The single most important factor in preventing surgical site infection related to antibiotic prophylaxis is:",
    choices: ["Choosing the broadest antibiotic", "Administering the appropriate antibiotic within 60 minutes before incision", "Giving antibiotics after closure", "Using two antibiotics always"],
    answer: 1,
    explanation:
      "Prophylactic antibiotics should be infused within 60 minutes before incision (120 minutes for vancomycin/fluoroquinolones) and re-dosed for long cases or major blood loss to maintain tissue levels. Timing is the key modifiable factor.",
  },
  {
    id: "q461",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Perioperative hypothermia is associated with all of the following EXCEPT:",
    choices: ["Increased surgical site infection", "Coagulopathy and increased blood loss", "Reduced drug metabolism and prolonged recovery", "Decreased risk of cardiac events"],
    answer: 3,
    explanation:
      "Hypothermia increases wound infection, coagulopathy/transfusion, drug duration, shivering (raising O2 demand), and cardiac events. Active warming to maintain normothermia (≥36°C) is a quality measure. It does NOT decrease cardiac risk.",
  },
  {
    id: "q462",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "The most appropriate first-line treatment for postoperative shivering (after ensuring normothermia/oxygenation) is:",
    choices: ["Naloxone", "Meperidine (low dose) or other agents like dexmedetomidine/clonidine", "Flumazenil", "Neostigmine"],
    answer: 1,
    explanation:
      "Low-dose meperidine is classically effective for postoperative shivering (kappa-opioid and other effects). Alternatives include dexmedetomidine, clonidine, and tramadol, plus active warming. Shivering raises oxygen consumption and can stress patients with limited cardiac reserve.",
  },
  {
    id: "q463",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "According to the Apfel score, risk factors for PONV include all EXCEPT:",
    choices: ["Female sex", "Nonsmoking status", "History of PONV/motion sickness", "Older age"],
    answer: 3,
    explanation:
      "Apfel's four risk factors: female sex, nonsmoker, history of PONV/motion sickness, and postoperative opioid use. Younger (not older) age increases risk. Higher scores warrant multimodal prophylaxis (different antiemetic classes, TIVA, opioid-sparing).",
  },
  {
    id: "q464",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Which anesthetic strategy reduces PONV in high-risk patients?",
    choices: ["Volatile anesthesia with high-dose opioids", "Total intravenous anesthesia with propofol and opioid-sparing multimodal analgesia", "Nitrous oxide use", "Neostigmine over sugammadex"],
    answer: 1,
    explanation:
      "TIVA with propofol (which has antiemetic properties), avoidance/reduction of volatile agents and nitrous oxide, opioid-sparing multimodal analgesia, adequate hydration, and combination antiemetics all reduce PONV in high-risk patients.",
  },
  {
    id: "q465",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "An Aldrete score is used in the PACU to assess:",
    choices: ["Depth of anesthesia", "Readiness for discharge from the recovery room (activity, respiration, circulation, consciousness, oxygenation)", "Pain severity", "Neuromuscular recovery"],
    answer: 1,
    explanation:
      "The modified Aldrete score (each of activity, respiration, circulation, consciousness, and oxygen saturation scored 0–2) assesses recovery and readiness for PACU discharge, typically requiring a score ≥9.",
  },
  {
    id: "q466",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "STOP-BANG is a screening tool used preoperatively to identify patients at risk for:",
    choices: ["Malignant hyperthermia", "Obstructive sleep apnea", "PONV", "Difficult IV access"],
    answer: 1,
    explanation:
      "STOP-BANG (Snoring, Tiredness, Observed apnea, Pressure/HTN, BMI, Age, Neck circumference, Gender) screens for OSA. Higher scores predict OSA and increased perioperative respiratory risk, warranting opioid caution and enhanced monitoring.",
  },
  {
    id: "q467",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "A patient with severe OSA is at greatest postoperative risk from:",
    choices: ["Hyperthermia", "Opioid-induced respiratory depression and airway obstruction", "Hypokalemia", "Hyperglycemia"],
    answer: 1,
    explanation:
      "OSA patients are highly sensitive to the respiratory depressant and upper-airway-collapsing effects of opioids and sedatives. Use opioid-sparing multimodal analgesia, regional techniques, continuous oximetry/capnography, and continue CPAP postoperatively.",
  },
  {
    id: "q468",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "The 'time-out' portion of the WHO surgical safety checklist occurs:",
    choices: ["After the patient leaves the room", "Immediately before skin incision, confirming patient, site, and procedure", "During preoperative holding only", "After closure"],
    answer: 1,
    explanation:
      "The time-out occurs just before incision, with the whole team confirming correct patient, site/side, and procedure, plus antibiotic prophylaxis, anticipated critical events, and equipment—reducing wrong-site/wrong-patient surgery.",
  },
  {
    id: "q469",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Multimodal analgesia in enhanced recovery (ERAS) protocols emphasizes:",
    choices: ["High-dose opioids alone", "Combining non-opioid analgesics and regional techniques to reduce opioid use", "Avoiding all analgesia", "Benzodiazepine premedication routinely"],
    answer: 1,
    explanation:
      "ERAS multimodal analgesia combines acetaminophen, NSAIDs, gabapentinoids (selectively), regional/neuraxial blocks, and adjuncts (ketamine, dexmedetomidine, lidocaine) to minimize opioids, reduce PONV/ileus, and speed recovery.",
  },
  {
    id: "q470",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "Which preoperative laboratory or test is most appropriately ordered based on clinical indication rather than routinely for all patients?",
    choices: ["Routine CBC and coagulation for everyone", "Tests guided by history, physical, and planned procedure", "Routine chest x-ray for all", "Routine ECG for all ages"],
    answer: 1,
    explanation:
      "Evidence supports selective, indication-based preoperative testing (guided by comorbidities and surgical risk) rather than routine batteries, which add cost and false positives without improving outcomes in healthy patients undergoing low-risk surgery.",
  },
  {
    id: "q471",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Aspirin for secondary cardiovascular prevention is generally:",
    choices: ["Always stopped 2 weeks before any surgery", "Often continued for high cardiac risk patients except where bleeding risk is prohibitive (e.g., intracranial, posterior eye)", "Never continued", "Replaced by warfarin"],
    answer: 1,
    explanation:
      "For patients with significant cardiac/stent risk, aspirin is frequently continued perioperatively; it is held when the bleeding consequences are severe (neurosurgery, posterior eye, some prostate procedures). Decisions balance thrombotic vs bleeding risk individually.",
  },
  {
    id: "q472",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "Bridging anticoagulation with heparin/LMWH is most clearly indicated for which patient on warfarin?",
    choices: ["Atrial fibrillation with low CHA2DS2-VASc", "Mechanical mitral valve (high thromboembolic risk)", "Single remote DVT", "Bioprosthetic valve >3 months"],
    answer: 1,
    explanation:
      "Bridging is reserved for high thromboembolic risk—e.g., mechanical mitral valves, recent VTE/stroke, or high-risk AF—because routine bridging in lower-risk patients (e.g., many AF patients, per BRIDGE trial) increases bleeding without reducing thromboembolism.",
  },
  {
    id: "q473",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "Which is the most appropriate management of a patient's home opioids/buprenorphine for major surgery (current general guidance)?",
    choices: ["Always abruptly stop buprenorphine days before", "Often continue buprenorphine and add multimodal/short-acting opioids as needed", "Withhold all analgesia", "Double the home dose routinely"],
    answer: 1,
    explanation:
      "Current consensus increasingly favors continuing buprenorphine perioperatively (rather than abrupt discontinuation) and managing acute pain with multimodal analgesia, regional techniques, and additional full-agonist opioids titrated to effect, coordinated with the prescriber.",
  },
  {
    id: "q474",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "A patient on chronic steroids may require perioperative 'stress-dose' steroids to prevent:",
    choices: ["Hyperglycemia", "Adrenal (Addisonian) crisis from suppression of the HPA axis", "Hyperkalemia", "Hypertension"],
    answer: 1,
    explanation:
      "Chronic exogenous steroids suppress the hypothalamic-pituitary-adrenal axis; major surgical stress may precipitate adrenal insufficiency. Supplemental ('stress-dose') glucocorticoids are given based on steroid dose/duration and surgical magnitude to prevent hypotensive crisis.",
  },
  {
    id: "q475",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "Which is the most appropriate intraoperative management for a patient with a known latex allergy?",
    choices: ["Schedule as the last case of the day", "Schedule as the first case in a latex-safe environment with non-latex products", "Premedicate and use latex normally", "Avoid surgery entirely"],
    answer: 1,
    explanation:
      "Latex-allergic patients should be the FIRST case (lowest ambient latex aeroallergen) in a latex-free/latex-safe environment with all non-latex equipment. Have anaphylaxis treatment ready. Premedication does not reliably prevent latex anaphylaxis.",
  },
  {
    id: "q476",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which antihypertensive class is most associated with refractory intraoperative hypotension and is frequently held the morning of surgery?",
    choices: ["Beta-blockers", "ACE inhibitors and ARBs", "Calcium channel blockers", "Diuretics"],
    answer: 1,
    explanation:
      "ACE inhibitors/ARBs blunt the renin-angiotensin response, predisposing to refractory hypotension under anesthesia (responsive to vasopressin if catecholamine-resistant). They are commonly held the morning of surgery; beta-blockers are continued.",
  },
  {
    id: "q477",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Catecholamine-resistant hypotension after ACE inhibitor use or in vasoplegia often responds to:",
    choices: ["More phenylephrine only", "Vasopressin", "Esmolol", "Nitroglycerin"],
    answer: 1,
    explanation:
      "Vasopressin (acting via V1 receptors, independent of adrenergic pathways) is effective in catecholamine-resistant vasoplegia (e.g., post-bypass, ACE inhibitor-related, sepsis). Methylene blue is an additional option for refractory vasoplegic syndrome.",
  },
  {
    id: "q478",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which is the predominant determinant of cerebral perfusion pressure (CPP)?",
    choices: ["CPP = MAP − (ICP or CVP, whichever is higher)", "CPP = ICP − MAP", "CPP = CVP − MAP", "CPP = MAP + ICP"],
    answer: 0,
    explanation:
      "CPP = MAP − ICP (or CVP if higher). Maintaining adequate MAP and controlling ICP preserves cerebral perfusion. In neurocritical care, CPP is commonly targeted around 60–70 mmHg.",
  },
  {
    id: "q479",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Which condition causes a normal anion gap (hyperchloremic) metabolic acidosis?",
    choices: ["Diabetic ketoacidosis", "Lactic acidosis", "Diarrhea or large-volume normal saline administration", "Methanol toxicity"],
    answer: 2,
    explanation:
      "Non-anion-gap (hyperchloremic) acidosis: GI bicarbonate loss (diarrhea), renal tubular acidosis, and large-volume saline. High-anion-gap causes (MUDPILES): methanol, uremia, DKA, propylene glycol, isoniazid/iron, lactic acidosis, ethylene glycol, salicylates.",
  },
  {
    id: "q480",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which property explains why adding bicarbonate to local anesthetic speeds the onset of block?",
    choices: ["Decreases the non-ionized fraction", "Raises pH, increasing the non-ionized (lipid-soluble) fraction that crosses the nerve membrane", "Increases protein binding", "Reduces lipid solubility"],
    answer: 1,
    explanation:
      "Local anesthetics are weak bases; alkalinization raises the proportion of non-ionized drug, which more readily crosses the lipid nerve membrane, hastening onset. The ionized form is active intracellularly at the sodium channel.",
  },
  {
    id: "q481",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Why does local anesthetic fail to work well in infected (acidic) tissue?",
    choices: ["Increased metabolism", "Acidic pH increases the ionized fraction, reducing membrane penetration", "Decreased blood flow only", "Allergy"],
    answer: 1,
    explanation:
      "In acidic (infected/inflamed) tissue, more of the weak-base local anesthetic is ionized, so less of the lipid-soluble non-ionized form crosses into the nerve, reducing efficacy. Increased local blood flow from inflammation also speeds removal.",
  },
  {
    id: "q482",
    category: "Physiology",
    difficulty: "Medium",
    stem: "The primary buffer system in the blood is:",
    choices: ["Phosphate", "Bicarbonate–carbonic acid", "Hemoglobin only", "Protein only"],
    answer: 1,
    explanation:
      "The bicarbonate/carbonic acid system is the principal extracellular buffer, linked to respiratory (CO2) and renal (HCO3-) regulation, as described by the Henderson-Hasselbalch equation. Hemoglobin and proteins/phosphate are additional buffers.",
  },
  {
    id: "q483",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Which factor primarily determines oxygen content (CaO2) of blood?",
    choices: ["PaO2 alone", "Hemoglobin concentration and its saturation (1.34 × Hb × SaO2 + 0.003 × PaO2)", "Cardiac output", "Hematocrit alone"],
    answer: 1,
    explanation:
      "CaO2 = (1.34 × Hb × SaO2) + (0.003 × PaO2). Hemoglobin-bound oxygen dominates; dissolved oxygen (0.003 × PaO2) is small. This is why anemia markedly reduces oxygen content/delivery despite a normal PaO2.",
  },
  {
    id: "q484",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which reversal strategy is preferred for profound (deep) rocuronium blockade when rapid recovery is required?",
    choices: ["Neostigmine 70 mcg/kg", "Sugammadex 4–16 mg/kg depending on depth", "Edrophonium", "Wait without reversal"],
    answer: 1,
    explanation:
      "Neostigmine cannot reverse deep block. Sugammadex reverses deep rocuronium block: 4 mg/kg at post-tetanic count 1–2, and 16 mg/kg for immediate reversal shortly after a high-dose RSI roc dose. This is a key advantage over anticholinesterases.",
  },
  {
    id: "q485",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "A patient receiving an MAO inhibitor should avoid which sympathomimetic due to risk of hypertensive crisis?",
    choices: ["Phenylephrine (direct-acting)", "Indirect-acting agents like ephedrine", "Norepinephrine titrated low", "Vasopressin"],
    answer: 1,
    explanation:
      "Indirect-acting sympathomimetics (ephedrine) release stored norepinephrine, which accumulates with MAO inhibition, risking hypertensive crisis. Use small, titrated doses of direct-acting agents (phenylephrine) instead. Also avoid meperidine (serotonin syndrome).",
  },
  {
    id: "q486",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which agent provides analgesia and reduces opioid requirements via NMDA antagonism as a low-dose infusion adjunct?",
    choices: ["Dexamethasone", "Ketamine", "Ondansetron", "Glycopyrrolate"],
    answer: 1,
    explanation:
      "Low-dose ketamine infusions reduce opioid consumption, prevent central sensitization/hyperalgesia, and are useful in opioid-tolerant or chronic pain patients as part of multimodal analgesia, with minimal respiratory depression.",
  },
  {
    id: "q487",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Intravenous lidocaine infusion as an analgesic adjunct is most beneficial in which surgery and acts by:",
    choices: ["Spinal surgery; GABA agonism", "Abdominal/colorectal surgery; sodium channel blockade with anti-inflammatory and anti-hyperalgesic effects", "Cardiac surgery; beta-blockade", "Eye surgery; alpha-2 agonism"],
    answer: 1,
    explanation:
      "Systemic lidocaine infusion reduces pain, opioid use, ileus, and length of stay—particularly in abdominal/colorectal surgery—via sodium channel blockade plus anti-inflammatory and anti-hyperalgesic actions. Monitor for local anesthetic toxicity.",
  },
  {
    id: "q488",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Naloxone reverses opioid-induced respiratory depression but its short duration risks:",
    choices: ["Prolonged sedation", "Re-narcotization once naloxone wears off", "Hyperthermia", "Bradycardia only"],
    answer: 1,
    explanation:
      "Naloxone's duration (~30–60 min) is shorter than many opioids, so re-narcotization (recurrent respiratory depression) can occur, especially with long-acting opioids—requiring repeat dosing or an infusion and continued monitoring. Titrate to avoid precipitating acute withdrawal.",
  },
  {
    id: "q489",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Methadone's analgesic and safety profile is influenced by its action as both a mu-opioid agonist and:",
    choices: ["A GABA agonist", "An NMDA antagonist with QT-prolonging effect and a long, variable half-life", "A beta-blocker", "A sodium channel opener"],
    answer: 1,
    explanation:
      "Methadone is a mu-agonist and NMDA antagonist with a long, variable half-life and QT-prolongation risk—features that complicate dosing/conversions and create a risk of delayed respiratory depression and torsades. Careful titration and ECG monitoring are advised.",
  },
  {
    id: "q490",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which volatile anesthetic is most likely to trigger malignant hyperthermia?",
    choices: ["Nitrous oxide", "All potent volatile agents (e.g., sevoflurane, desflurane, isoflurane)", "Propofol", "Dexmedetomidine"],
    answer: 1,
    explanation:
      "All potent volatile anesthetics and succinylcholine are MH triggers. Nitrous oxide, propofol, etomidate, ketamine, benzodiazepines, opioids, and nondepolarizing relaxants are safe. A 'clean' machine and dantrolene availability are required for susceptible patients.",
  },
  {
    id: "q491",
    category: "Anatomy",
    difficulty: "Medium",
    stem: "The epidural space contains all of the following EXCEPT:",
    choices: ["Fat and the internal vertebral venous (Batson's) plexus", "Spinal nerve roots", "Cerebrospinal fluid", "Lymphatics and connective tissue"],
    answer: 2,
    explanation:
      "The epidural space contains fat, the Batson venous plexus, nerve roots, lymphatics, and connective tissue—but NOT free CSF (CSF is in the subarachnoid space). The engorged epidural veins in pregnancy increase the risk of intravascular catheter placement.",
  },
  {
    id: "q492",
    category: "Anatomy",
    difficulty: "Hard",
    stem: "Why is the risk of local anesthetic systemic toxicity from epidural veins increased in pregnancy?",
    choices: ["Decreased cardiac output", "Engorgement of the epidural (Batson's) venous plexus from aortocaval compression", "Lower local anesthetic doses used", "Increased CSF volume"],
    answer: 1,
    explanation:
      "The gravid uterus compresses the inferior vena cava, diverting venous return through the engorged epidural venous plexus. This increases the chance of intravascular catheter/needle placement and reduces the epidural/intrathecal dose needed (smaller space).",
  },
  {
    id: "q493",
    category: "Perioperative",
    difficulty: "Medium",
    stem: "A 'difficult mask ventilation' is predicted by the mnemonic MOANS, which includes all EXCEPT:",
    choices: ["Mask seal problems (beard)", "Obesity/obstruction", "Age over 55", "Normal dentition (teeth present)"],
    answer: 3,
    explanation:
      "MOANS: Mask seal (beard, facial deformity), Obesity/Obstruction, Age >55, No teeth (edentulous worsens seal), and Stiff lungs/Snores (OSA). Edentulousness—not normal dentition—predicts difficult mask ventilation.",
  },
  {
    id: "q494",
    category: "Perioperative",
    difficulty: "Hard",
    stem: "Awareness under anesthesia is most likely in which scenario?",
    choices: ["High-dose volatile anesthesia", "Cardiac surgery, trauma, and cesarean under general with paralysis and minimal anesthetic", "Regional anesthesia", "Sedation cases"],
    answer: 1,
    explanation:
      "Higher awareness risk occurs when light anesthesia is used for hemodynamic reasons (cardiac, trauma, obstetric GA) combined with neuromuscular blockade (masking movement). Use end-tidal agent monitoring, consider processed EEG (BIS), and ensure adequate amnesia.",
  },
  {
    id: "q495",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Glycopyrrolate is preferred over atropine to treat bradycardia when avoiding CNS effects because it:",
    choices: ["Crosses the blood-brain barrier readily", "Is a quaternary amine that does not cross the blood-brain barrier", "Is shorter acting", "Causes tachycardia more reliably"],
    answer: 1,
    explanation:
      "Glycopyrrolate is a quaternary ammonium compound that does not cross the blood-brain barrier (no central anticholinergic effects/delirium) and reduces secretions more, whereas atropine (tertiary amine) crosses and has faster, more pronounced chronotropy and central effects.",
  },
  {
    id: "q496",
    category: "Physiology",
    difficulty: "Hard",
    stem: "During hemorrhage, the body's compensatory response includes all EXCEPT:",
    choices: ["Baroreceptor-mediated tachycardia and vasoconstriction", "Increased renin-angiotensin-aldosterone activity", "ADH release", "Decreased sympathetic tone"],
    answer: 3,
    explanation:
      "Hemorrhage triggers INCREASED sympathetic tone (baroreceptor reflex → tachycardia, vasoconstriction), RAAS activation, and ADH release to preserve blood pressure and volume. Decreased sympathetic tone would be maladaptive in shock.",
  },
  {
    id: "q497",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which property of remifentanil makes it well-suited for cases requiring rapid emergence but mandates a plan for postoperative analgesia?",
    choices: ["Long duration of action", "Ultra-short, infusion-duration-independent offset (esterase metabolism), leaving no residual analgesia", "Active renal metabolites", "Slow hepatic clearance"],
    answer: 1,
    explanation:
      "Remifentanil's esterase metabolism gives a context-insensitive ultra-short offset and rapid emergence, but analgesia disappears almost immediately on stopping—so a longer-acting analgesic must be given before emergence. Acute opioid tolerance/hyperalgesia can also occur.",
  },
  {
    id: "q498",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Context-sensitive half-time refers to:",
    choices: ["The elimination half-life at steady state", "The time for plasma concentration to fall by 50% after stopping an infusion, dependent on infusion duration", "The time to peak effect", "The volume of distribution"],
    answer: 1,
    explanation:
      "Context-sensitive half-time is the time for plasma drug concentration to decrease by 50% after discontinuing a continuous infusion; it lengthens with infusion duration for most drugs (e.g., fentanyl) but stays nearly constant for remifentanil.",
  },
  {
    id: "q499",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which change occurs with aging that affects anesthetic management?",
    choices: ["Increased MAC", "Decreased MAC, reduced drug clearance, and decreased physiologic reserve", "Increased renal clearance", "Increased lean body mass"],
    answer: 1,
    explanation:
      "Aging decreases MAC (~6% per decade after 40), reduces hepatic/renal clearance, lowers protein binding and physiologic reserve, and alters body composition (less lean mass/water, more fat). Drug doses should be reduced and titrated carefully.",
  },
  {
    id: "q500",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "An obese patient's induction dose of a lipophilic drug like propofol for a single bolus is best based on:",
    choices: ["Total body weight always", "Lean body weight for induction bolus (maintenance infusions may use adjusted/total weight)", "Ideal body weight only for everything", "Height alone"],
    answer: 1,
    explanation:
      "For induction boluses, lean body weight better reflects the central volume/cardiac output and avoids overdose; maintenance infusions of propofol are often dosed to adjusted/total body weight. Succinylcholine uses total body weight; many other drugs use lean or ideal weight—dosing scalar choice matters in obesity.",
  },
  {
    id: "q501",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which agent is the recommended succinylcholine dose for routine rapid sequence intubation?",
    choices: ["0.1 mg/kg", "0.3 mg/kg", "1–1.5 mg/kg IV", "5 mg/kg IV"],
    answer: 2,
    explanation:
      "Succinylcholine 1–1.5 mg/kg IV provides rapid (~45–60 s) onset and short duration for RSI. An IM dose (~3–4 mg/kg) can be used if no IV access. Pretreatment/precautions address bradycardia (especially repeat doses, children), hyperkalemia, and myalgias.",
  },
  {
    id: "q502",
    category: "Physiology",
    difficulty: "Medium",
    stem: "Which is the most important physiologic effect of positive end-expiratory pressure (PEEP) that can reduce cardiac output?",
    choices: ["Increased preload", "Increased intrathoracic pressure decreasing venous return (preload)", "Decreased afterload", "Increased contractility"],
    answer: 1,
    explanation:
      "PEEP raises intrathoracic pressure, reducing venous return (preload) and thus cardiac output, especially in hypovolemic patients. It improves oxygenation by recruiting alveoli/raising FRC but can also raise pulmonary vascular resistance (RV afterload).",
  },
  {
    id: "q503",
    category: "Physiology",
    difficulty: "Hard",
    stem: "Which statement about dead space ventilation is correct?",
    choices: ["Dead space is alveoli that are perfused but not ventilated", "Dead space is ventilation that does not participate in gas exchange (anatomic + alveolar)", "Dead space lowers PaCO2", "Dead space equals shunt"],
    answer: 1,
    explanation:
      "Dead space is ventilated lung that is not perfused (wasted ventilation): anatomic (conducting airways) plus alveolar. Increased dead space (e.g., pulmonary embolism, hypotension) raises the PaCO2-to-EtCO2 gradient. Shunt is the opposite—perfusion without ventilation.",
  },
  {
    id: "q504",
    category: "Pharmacology",
    difficulty: "Medium",
    stem: "Which antiemetic also reduces postoperative pain/inflammation and is best given at induction?",
    choices: ["Ondansetron", "Dexamethasone", "Scopolamine patch", "Promethazine"],
    answer: 1,
    explanation:
      "Dexamethasone (4–8 mg) provides PONV prophylaxis plus anti-inflammatory/analgesic benefit and is most effective when given at induction (delayed onset). It can transiently raise blood glucose; combine with a 5-HT3 antagonist for high-risk patients.",
  },
  {
    id: "q505",
    category: "Pharmacology",
    difficulty: "Hard",
    stem: "Which statement about nitrous oxide and the closed gas spaces is the basis for avoiding it in middle ear surgery (tympanoplasty)?",
    choices: ["It is too weak to use", "It diffuses into the middle ear faster than nitrogen exits, raising pressure and risking graft displacement", "It cools the gas", "It causes hyperkalemia"],
    answer: 1,
    explanation:
      "Nitrous oxide diffuses into the air-filled middle ear faster than nitrogen leaves, raising pressure that can dislodge a tympanic graft; on discontinuation, reabsorption can create negative pressure. Hence N2O is avoided (or stopped before graft placement) in middle ear surgery.",
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
