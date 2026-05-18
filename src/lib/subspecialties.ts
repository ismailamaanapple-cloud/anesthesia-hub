export type Subspecialty = {
  slug: string;
  name: string;
  tagline: string;
  icon: string; // lucide name
  color: string; // tailwind from-* to-*
  overview: string;
  keyConcepts: { title: string; body: string }[];
  monitoring: string[];
  commonDrugs: string[];
  pearls: string[];
  /** Reference IDs from src/lib/references.ts */
  references?: string[];
};

export const subspecialties: Subspecialty[] = [
  {
    slug: "cardiac",
    name: "Cardiac Anesthesia",
    tagline: "Hemodynamics, CPB, and the perioperative ICU mindset.",
    icon: "Heart",
    color: "from-rose-500 to-orange-500",
    overview:
      "Cardiac anesthesia covers anesthetic management for open-heart surgery, structural interventions, and high-risk cardiac patients. The hallmarks are invasive monitoring, deliberate manipulation of preload/afterload/contractility, comfort with TEE, and seamless coordination with perfusion during cardiopulmonary bypass.",
    keyConcepts: [
      {
        title: "Pre-bypass goals",
        body: "Maintain coronary perfusion (DBP × diastolic time / HR), avoid tachycardia in ischemic disease, and avoid hypotension below the autoregulatory threshold. Anticoagulate with heparin 300–400 U/kg targeting ACT >480 sec before bypass.",
      },
      {
        title: "On bypass",
        body: "Maintain MAP 50–80 mmHg, monitor ACT q30 min, run blood gases/lactate. Hypothermia (28–34°C) reduces metabolic rate.",
      },
      {
        title: "Separation from CPB",
        body: "Mnemonic — 'CVP': Cold? Volume? Pacing? Plus rate, rhythm, contractility (inotropes), and afterload (vasopressor/vasodilator). TEE assesses ventricular function and de-airing.",
      },
      {
        title: "TEE",
        body: "Routine for valve, congenital, transplant cases; invaluable for diagnosing tamponade, RV failure, dynamic LVOT obstruction.",
      },
    ],
    monitoring: [
      "Arterial line (often pre-induction)",
      "Central venous catheter",
      "Pulmonary artery catheter (selective)",
      "Transesophageal echocardiography",
      "Cerebral oximetry (NIRS)",
      "Activated clotting time (ACT)",
    ],
    commonDrugs: ["Fentanyl/sufentanil", "Etomidate", "Cisatracurium", "Heparin", "Protamine", "Epinephrine", "Norepinephrine", "Vasopressin", "Milrinone", "Nitroglycerin", "Tranexamic acid"],
    pearls: [
      "Protamine reactions — slow administration; have epinephrine and pulmonary vasodilators ready.",
      "Right ventricular failure post-bypass is a clinical and TEE diagnosis — treat with inhaled pulmonary vasodilators and inotropes.",
      "Antifibrinolytics (TXA) reduce transfusion in cardiac surgery — dose-dependent seizure risk at high doses.",
    ],
    references: ["miller", "barash", "morganMikhail"],
  },
  {
    slug: "neuroanesthesia",
    name: "Neuroanesthesia",
    tagline: "ICP, CPP, and protecting the brain.",
    icon: "Brain",
    color: "from-violet-500 to-indigo-500",
    overview:
      "Neuroanesthesia balances surgical exposure with neuronal protection. Central concepts include cerebral perfusion pressure (CPP = MAP − ICP), autoregulation, the BBB, and avoiding secondary injury from hypoxia, hyper/hypocapnia, hyper/hypoglycemia, and hyperthermia.",
    keyConcepts: [
      {
        title: "CPP & ICP",
        body: "Maintain CPP 60–70 mmHg in TBI. ICP > 22 mmHg requires intervention. Modulators: head-up 30°, normocapnia (avoid prolonged hypocapnia), 3% saline or mannitol, sedation/paralysis.",
      },
      {
        title: "Choice of agents",
        body: "TIVA (propofol + remifentanil) for neuro-monitoring (SSEPs, MEPs). Volatiles >1 MAC suppress motor evoked potentials. Nitrous can enlarge pneumocephalus.",
      },
      {
        title: "Awake craniotomy",
        body: "Asleep-awake-asleep or monitored anesthesia care with dexmedetomidine + remifentanil + scalp block. Cooperative patient is essential for cortical mapping.",
      },
      {
        title: "Subarachnoid hemorrhage",
        body: "Goals: prevent re-bleed (BP control, avoid hypertension before aneurysm secured) and prevent vasospasm (nimodipine, euvolemia).",
      },
    ],
    monitoring: [
      "Arterial line (transduce at tragus for CPP estimation)",
      "Processed EEG (BIS) for TIVA",
      "Motor & somatosensory evoked potentials",
      "ICP monitor (EVD)",
      "Cerebral oximetry",
    ],
    commonDrugs: ["Propofol", "Remifentanil", "Mannitol 0.25–1 g/kg", "Hypertonic saline 3%", "Phenylephrine", "Esmolol", "Nimodipine"],
    pearls: [
      "Avoid succinylcholine in spinal cord injury > 48 h, prolonged immobilization, denervation — hyperkalemia risk.",
      "Anchor your hemodynamic targets to the patient's baseline BP, not population norms.",
    ],
    references: ["miller", "barash", "stoelting"],
  },
  {
    slug: "obstetric",
    name: "Obstetric Anesthesia",
    tagline: "Two patients, one anesthetic, zero margin.",
    icon: "Baby",
    color: "from-pink-500 to-fuchsia-500",
    overview:
      "OB anesthesia is high-volume, time-sensitive, and unforgiving. Maternal physiology (decreased FRC, increased oxygen consumption, aspiration risk, edematous airway) means failed intubation can become failed oxygenation within minutes.",
    keyConcepts: [
      {
        title: "Neuraxial analgesia for labor",
        body: "Epidural with dilute LA + opioid (e.g., bupivacaine 0.0625–0.125% + fentanyl 2 mcg/mL). CSE for faster onset. Avoid dense motor block.",
      },
      {
        title: "Spinal for C-section",
        body: "Bupivacaine 0.75% hyperbaric 1.4–1.8 mL + fentanyl 10–15 mcg + morphine 100–200 mcg. Target sensory level T4 (cold) for visceral coverage.",
      },
      {
        title: "Aortocaval compression",
        body: "Left uterine displacement ≥15° after 20 weeks gestation — non-negotiable to maintain venous return.",
      },
      {
        title: "Hypotension at C-section",
        body: "Phenylephrine infusion (~25–50 mcg/min) titrated from spinal placement reduces nausea and fetal acidosis vs. ephedrine.",
      },
      {
        title: "PPH",
        body: "Quantify blood loss. Uterotonics: oxytocin → methergine (avoid HTN) → carboprost (avoid asthma) → misoprostol. Activate massive transfusion protocol early.",
      },
    ],
    monitoring: ["Non-invasive blood pressure (every 1–2 min after spinal)", "Fetal heart tones", "Pulse oximetry", "Capnography"],
    commonDrugs: ["Bupivacaine (hyperbaric)", "Fentanyl", "Morphine (intrathecal)", "Phenylephrine", "Oxytocin", "Methylergonovine", "Carboprost", "Tranexamic acid"],
    pearls: [
      "Always have a difficult airway plan — the OB airway is the most feared.",
      "Failed intubation drill: maintain cricoid (or release if obstructing), bag-mask + LMA, wake or proceed per algorithm.",
      "Magnesium-treated preeclamptic patients — anticipate potentiation of NMBA.",
    ],
    references: ["soapHypotension", "asaNpo", "miller", "barash"],
  },
  {
    slug: "pediatric",
    name: "Pediatric Anesthesia",
    tagline: "Tiny patients, vast physiology.",
    icon: "Baby",
    color: "from-sky-500 to-cyan-400",
    overview:
      "Children are not small adults. Pediatric anesthesia requires familiarity with weight-based dosing, age-related airway anatomy (large occiput, anterior larynx, narrowest at cricoid in <8 yo), brisk vagal tone, rapid desaturation, and developmental considerations.",
    keyConcepts: [
      {
        title: "ETT sizing",
        body: "Cuffed: (age/4) + 3.5. Uncuffed: (age/4) + 4. Depth (cm): age/2 + 12, or 3× ETT size.",
      },
      {
        title: "Maintenance fluids — 4-2-1 rule",
        body: "4 mL/kg/h for first 10 kg, 2 mL/kg/h for next 10 kg, 1 mL/kg/h thereafter.",
      },
      {
        title: "Inhalational induction",
        body: "Sevoflurane is agent of choice — sweet, fast, hemodynamically stable. Watch for emergence delirium (mitigate with low-dose propofol or fentanyl).",
      },
      {
        title: "Emergence delirium",
        body: "Most common in preschoolers post-sevoflurane. Premedicate with midazolam, use IV adjuncts (propofol, fentanyl, dexmedetomidine).",
      },
      {
        title: "Fasting",
        body: "ASA: clear liquids 2 h, breast milk 4 h, formula/light meal 6 h, fatty meal 8 h.",
      },
    ],
    monitoring: ["Precordial stethoscope", "Pulse oximetry", "Capnography", "Temperature (active warming)"],
    commonDrugs: ["Sevoflurane", "Propofol", "Fentanyl", "Rocuronium", "Acetaminophen", "Dexmedetomidine", "Atropine 0.02 mg/kg"],
    pearls: [
      "Pre-treat with atropine before succinylcholine in infants to prevent bradycardia.",
      "Avoid succinylcholine in undiagnosed myopathies — hyperkalemic cardiac arrest reported.",
      "Always have a clear weight in kg — most pediatric errors are dosing errors.",
    ],
    references: ["asaNpo", "miller", "barash", "morganMikhail"],
  },
  {
    slug: "regional",
    name: "Regional Anesthesia",
    tagline: "Precise anatomy, profound analgesia.",
    icon: "Crosshair",
    color: "from-emerald-500 to-teal-500",
    overview:
      "Regional anesthesia provides targeted analgesia, reduces opioid exposure, and enables ambulatory surgery. Modern ultrasound guidance has dramatically improved efficacy and safety, but LAST and nerve injury remain ever-present concerns.",
    keyConcepts: [
      {
        title: "LAST",
        body: "Local Anesthetic Systemic Toxicity — prevent with aspiration, fractionated dosing, max-dose discipline. Treat seizures with benzodiazepine, give 20% lipid emulsion 1.5 mL/kg bolus + 0.25 mL/kg/min.",
      },
      {
        title: "Common upper extremity blocks",
        body: "Interscalene (shoulder), supraclavicular (elbow/hand — 'spinal of the arm'), infraclavicular (elbow/hand), axillary (hand).",
      },
      {
        title: "Common lower extremity blocks",
        body: "Femoral / adductor canal (knee — adductor preserves quadriceps), popliteal sciatic (foot/ankle), iPACK (posterior knee).",
      },
      {
        title: "Truncal blocks",
        body: "TAP, rectus sheath, quadratus lumborum, ESP, PECS I/II, serratus plane — opioid-sparing for abdominal and thoracic surgery.",
      },
      {
        title: "Anticoagulation",
        body: "Follow ASRA guidelines for neuraxial/deep blocks. Don't skim — the consequences (epidural hematoma) are catastrophic.",
      },
    ],
    monitoring: ["Pulse oximetry", "ECG", "BP", "Lipid emulsion at hand for any block"],
    commonDrugs: ["Ropivacaine 0.2–0.5%", "Bupivacaine 0.25–0.5%", "Mepivacaine 1.5%", "Lidocaine 1–2% (± epi)", "Dexamethasone (adjunct)"],
    pearls: [
      "Phrenic nerve palsy occurs in ~100% of interscalene blocks — avoid in severe pulmonary disease.",
      "Always image the needle tip in plane and confirm circumferential spread.",
      "Pneumothorax risk: highest with supraclavicular > infraclavicular > interscalene.",
    ],
    references: ["asraAnticoag", "asraLast", "miller", "barash"],
  },
  {
    slug: "critical-care",
    name: "Critical Care Medicine",
    tagline: "Resuscitation, ventilation, and multi-organ support.",
    icon: "HeartPulse",
    color: "from-red-500 to-rose-500",
    overview:
      "Anesthesiologists practicing critical care manage the sickest patients — septic shock, ARDS, multi-organ failure, post-cardiac arrest. Familiarity with ventilator modes, vasoactive choices, hemodynamic targets, and end-of-life conversations is essential.",
    keyConcepts: [
      {
        title: "Sepsis bundle",
        body: "Lactate, blood cultures before antibiotics, broad-spectrum antibiotics within 1 h, 30 mL/kg crystalloid if hypotensive/lactate >4, vasopressor if MAP <65 after fluids.",
      },
      {
        title: "ARDS ventilation",
        body: "Low tidal volume 6 mL/kg PBW, plateau <30, driving pressure <15, PEEP per FiO2 table, prone if PaO2/FiO2 <150.",
      },
      {
        title: "Shock classification",
        body: "Hypovolemic, distributive, cardiogenic, obstructive — each demands different fluid/vasoactive/inotrope strategy.",
      },
      {
        title: "Post-arrest care",
        body: "Targeted temperature management 32–36°C ×24 h, treat reversible causes, hemodynamic targets MAP >65, glucose 140–180.",
      },
    ],
    monitoring: ["Arterial line", "Central venous catheter", "Continuous SvO2 (some)", "Lactate trend", "POCUS / bedside echo"],
    commonDrugs: ["Norepinephrine", "Vasopressin", "Epinephrine", "Hydrocortisone", "Propofol", "Dexmedetomidine", "Fentanyl"],
    pearls: [
      "POCUS rapidly distinguishes shock states — IVC, cardiac windows, lungs.",
      "Fluid responsiveness is dynamic — passive leg raise or pulse pressure variation > static CVP.",
    ],
    references: ["ssc", "ardsnet", "acls", "miller"],
  },
  {
    slug: "pain",
    name: "Pain Medicine",
    tagline: "Acute, chronic, cancer, and interventional.",
    icon: "Zap",
    color: "from-amber-500 to-orange-500",
    overview:
      "Pain medicine spans acute postoperative pain management, chronic pain syndromes, cancer pain, and interventional procedures (epidural steroid injections, facet blocks, spinal cord stimulators). Multimodal, opioid-sparing approaches dominate modern practice.",
    keyConcepts: [
      {
        title: "Multimodal analgesia",
        body: "Acetaminophen + NSAIDs + neuropathic agents (gabapentin/pregabalin) + regional + judicious opioid. Reduces opioid need by 30–50%.",
      },
      {
        title: "Acute on chronic",
        body: "Continue baseline opioids; add multimodal & regional; convert PO to IV equivalents during NPO periods.",
      },
      {
        title: "Common chronic syndromes",
        body: "Low back pain, neuropathic pain (diabetic, post-herpetic), CRPS, fibromyalgia, cancer pain.",
      },
      {
        title: "Interventional",
        body: "Epidural steroid injection, medial branch blocks → RFA, sympathetic blocks (stellate ganglion, celiac plexus), SCS/intrathecal pumps.",
      },
    ],
    monitoring: ["Numeric rating scale", "Functional outcomes", "Opioid risk tool"],
    commonDrugs: ["Acetaminophen", "Ibuprofen/ketorolac", "Gabapentin/pregabalin", "Duloxetine", "Lidocaine infusion", "Ketamine infusion", "Methadone", "Buprenorphine"],
    pearls: [
      "Screen all chronic opioid patients for OUD — naloxone Rx, PDMP review.",
      "Ketamine infusion 0.1–0.3 mg/kg/h has growing evidence for acute and chronic pain.",
    ],
    references: ["miller", "barash", "stoelting"],
  },
  {
    slug: "ambulatory",
    name: "Ambulatory Anesthesia",
    tagline: "Fast, safe, same-day discharge.",
    icon: "Activity",
    color: "from-lime-500 to-emerald-500",
    overview:
      "Ambulatory anesthesia prioritizes rapid emergence, minimal PONV, effective analgesia, and quick discharge readiness. Patient selection, multimodal opioid-sparing analgesia, and PONV prophylaxis are the pillars.",
    keyConcepts: [
      {
        title: "Patient selection",
        body: "ASA I–III stable. OSA — risk-stratify with STOP-BANG. Most BMI <40 acceptable. Frailty matters more than age.",
      },
      {
        title: "Drug selection",
        body: "Short-acting agents: propofol, sevo/desflurane, remifentanil, sugammadex.",
      },
      {
        title: "PONV prophylaxis",
        body: "Apfel score-based: 0–1 risk factors → none/single agent; 2 → two agents; 3–4 → multimodal + TIVA + dexamethasone.",
      },
      {
        title: "Discharge criteria",
        body: "Aldrete or PADSS score; tolerating PO, voiding (selectively), ambulating, controlled pain & nausea, responsible adult escort.",
      },
    ],
    monitoring: ["Standard ASA monitors", "Discharge readiness scores"],
    commonDrugs: ["Propofol", "Sevoflurane/desflurane", "Remifentanil/fentanyl", "Sugammadex", "Ondansetron", "Dexamethasone", "Acetaminophen", "Ketorolac"],
    pearls: [
      "Avoid long-acting opioids — they undermine your discharge time and create unsafe outpatients.",
      "Field block / wound infiltration before incision provides hours of analgesia for free.",
    ],
    references: ["apfel", "apfelImpact", "asaNpo", "miller"],
  },
  {
    slug: "trauma",
    name: "Trauma Anesthesia",
    tagline: "Hemorrhage control, damage control resuscitation.",
    icon: "Siren",
    color: "from-red-600 to-amber-500",
    overview:
      "Trauma anesthesia demands rapid assessment, parallel processing, and damage-control resuscitation. Permissive hypotension, balanced transfusion (1:1:1), early TXA, and avoiding the lethal triad (acidosis, hypothermia, coagulopathy) save lives.",
    keyConcepts: [
      {
        title: "Massive transfusion protocol",
        body: "Activate early — 1:1:1 RBC:FFP:platelets, TXA 1 g over 10 min then 1 g over 8 h (within 3 h of injury), 1 g calcium per 4 units RBC.",
      },
      {
        title: "Damage-control resuscitation",
        body: "Permissive hypotension (SBP 80–90) in non-TBI patients until hemorrhage controlled; avoid dilutional coagulopathy from crystalloid.",
      },
      {
        title: "Hypothermia",
        body: "Fluid warmers, forced-air warming, ambient room temperature — coagulopathy worsens dramatically below 35°C.",
      },
      {
        title: "Difficult airway",
        body: "Full stomach + potential c-spine + facial trauma + hypotension — RSI with ketamine (1–2 mg/kg) + roc (1.2 mg/kg) is workhorse.",
      },
    ],
    monitoring: ["Arterial line (when feasible)", "Large bore peripheral / RIC introducer", "Rapid infuser", "Point-of-care labs (TEG, ABG)"],
    commonDrugs: ["Ketamine", "Etomidate", "Rocuronium", "Norepinephrine", "Calcium chloride", "Tranexamic acid", "Cryoprecipitate"],
    pearls: [
      "If hemorrhaging — blood, not crystalloid.",
      "Recheck the patient continually; trauma is a moving target.",
      "Communicate clearly with surgical team about pressure goals.",
    ],
    references: ["acls", "prismMassiveTx", "miller", "barash"],
  },
  {
    slug: "transplant",
    name: "Transplant Anesthesia",
    tagline: "Complex physiology, complex coordination.",
    icon: "Activity",
    color: "from-purple-500 to-pink-500",
    overview:
      "Solid-organ transplant anesthesia (liver, kidney, lung, heart) is a niche of high acuity and prolonged cases. Liver transplant in particular tests every domain — massive transfusion, coagulopathy, hemodynamic upheaval during reperfusion.",
    keyConcepts: [
      {
        title: "Liver transplant — phases",
        body: "Pre-anhepatic (dissection — coagulopathy emerges), anhepatic (clamp IVC — cardiac filling drops), reperfusion (hyperkalemia, acidosis, hypotension — 'post-reperfusion syndrome').",
      },
      {
        title: "Reperfusion management",
        body: "Pre-treat with calcium, bicarbonate (selectively), be ready with epinephrine, vasopressin. Continuously assess with TEE and POCUS.",
      },
      {
        title: "Kidney transplant",
        body: "Avoid nephrotoxic agents; mannitol + furosemide at unclamping; maintain CVP / generous volume to support graft.",
      },
      {
        title: "Lung transplant",
        body: "One-lung ventilation, often on ECMO/CPB. Right ventricle is the limiting organ — protective ventilation, pulmonary vasodilators.",
      },
    ],
    monitoring: ["Arterial line", "Multiple large-bore access", "PA catheter or TEE", "Rapid transfusion device", "TEG/ROTEM"],
    commonDrugs: ["Fentanyl", "Cisatracurium", "Albumin", "Calcium chloride", "Sodium bicarbonate", "Vasopressin", "Norepinephrine", "Methylprednisolone (induction immunosuppression)"],
    pearls: [
      "TEG/ROTEM trumps the conventional coag panel for guiding component therapy in liver transplant.",
      "Brief communication with surgeon at every clamp/unclamp prevents the worst surprises.",
    ],
    references: ["miller", "barash", "jaffe"],
  },
];

export function getSubspecialty(slug: string) {
  return subspecialties.find((s) => s.slug === slug);
}
