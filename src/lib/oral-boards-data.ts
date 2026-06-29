// Oral Boards case data. See oral-boards.ts for the types and SAFETY phrases.
// Original synthesis of standard perioperative/crisis algorithms for study use.

import { type OralCase, type OralCaseSection, SAFETY } from "@/lib/oral-boards";

type CaseDef = OralCase & { sections: OralCaseSection[] };

export const oralCases: CaseDef[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "cannot-intubate-cannot-oxygenate",
    number: 1,
    category: "Airway",
    title: "Can't Intubate, Can't Oxygenate (CICO)",
    tagline: "Failed intubation and failed mask ventilation after induction.",
    icon: "Wind",
    color: "from-orange-500 to-red-500",
    stem: "A 48-year-old man is induced for an urgent appendectomy. After induction you cannot intubate, and now you cannot mask ventilate. SpO₂ is 84% and falling.",
    sections: [
      {
        title: "Recognize & call for help",
        prompt: "The saturation is dropping. What do you do?",
        phrases: [
          { ...SAFETY.callHelp },
          { ...SAFETY.oxygen },
          { text: "Declare a cannot-intubate-cannot-oxygenate emergency", alts: ["cico", "cannot ventilate", "failed airway", "this is an emergency"], critical: true },
          { text: "Optimize mask ventilation", alts: ["two hand mask", "two person mask", "oral airway", "nasal airway", "jaw thrust"], critical: true },
        ],
      },
      {
        title: "Follow the difficult airway algorithm",
        prompt: "Mask ventilation still fails. What is your next step?",
        phrases: [
          { text: "Place a supraglottic airway / LMA", alts: ["lma", "supraglottic", "rescue airway", "place an lma"], critical: true },
          { text: "Limit intubation attempts and call for the difficult airway cart", alts: ["difficult airway cart", "video laryngoscope", "limit attempts", "bougie"] },
          { text: "Proceed to emergency front-of-neck access", alts: ["cricothyrotomy", "front of neck", "surgical airway", "cric"], critical: true },
        ],
      },
      {
        title: "After the airway is secured",
        prompt: "You have an airway. What now?",
        phrases: [
          { text: "Confirm placement with end-tidal CO₂", alts: ["etco2", "end tidal", "capnography", "confirm placement"], critical: true },
          { text: "Consider waking the patient or postponing the case", alts: ["wake the patient", "postpone", "cancel the case", "abort"] },
          { text: "Document and plan for future difficult airway", alts: ["document", "difficult airway letter", "mh registry"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "malignant-hyperthermia",
    number: 2,
    category: "Crisis",
    title: "Malignant Hyperthermia",
    tagline: "Rising EtCO₂, tachycardia, and rigidity under a volatile anesthetic.",
    icon: "Flame",
    color: "from-red-500 to-orange-500",
    stem: "During a sevoflurane anesthetic, end-tidal CO₂ is climbing despite increased ventilation, the patient is tachycardic, and the masseters feel rigid.",
    sections: [
      {
        title: "Recognize & stop the trigger",
        prompt: "What is your differential and first action?",
        phrases: [
          { text: "Suspect malignant hyperthermia", alts: ["malignant hyperthermia", "this is mh", "mh"], critical: true },
          { text: "Stop all volatile anesthetics and succinylcholine", alts: ["stop the volatile", "stop triggers", "turn off the vaporizer", "stop succinylcholine"], critical: true },
          { ...SAFETY.callHelp },
          { ...SAFETY.oxygen, text: "100% oxygen at high fresh gas flow", alts: ["100 percent oxygen", "high flow oxygen", "hyperventilate", "high fresh gas flow"] },
          { text: "Convert to a non-triggering total IV anesthetic", alts: ["tiva", "propofol infusion", "non triggering"] },
        ],
      },
      {
        title: "Treat with dantrolene",
        prompt: "How do you treat?",
        phrases: [
          { text: "Give dantrolene 2.5 mg/kg and repeat as needed", alts: ["dantrolene", "ryanodex"], critical: true },
          { text: "Call the MH hotline (MHAUS)", alts: ["mhaus", "mh hotline", "1 800 644"], },
          { text: "Get the MH cart", alts: ["mh cart", "malignant hyperthermia cart"] },
          { text: "Actively cool the patient", alts: ["cool the patient", "cooling", "ice packs", "cold saline", "lavage"], critical: true },
        ],
      },
      {
        title: "Manage complications & disposition",
        prompt: "What complications do you anticipate?",
        phrases: [
          { text: "Treat hyperkalemia", alts: ["hyperkalemia", "calcium", "insulin and glucose", "bicarbonate"], critical: true },
          { text: "Treat acidosis and arrhythmias", alts: ["acidosis", "arrhythmias", "metabolic acidosis"] },
          { text: "Monitor for rhabdomyolysis and protect the kidneys", alts: ["rhabdomyolysis", "myoglobinuria", "creatine kinase", "urine output"] },
          { text: "Admit to ICU and observe for recrudescence", alts: ["icu", "intensive care", "recrudescence", "24 to 48 hours"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "local-anesthetic-toxicity",
    number: 3,
    category: "Regional",
    title: "Local Anesthetic Systemic Toxicity (LAST)",
    tagline: "Seizure and arrhythmia after a regional block.",
    icon: "Zap",
    color: "from-fuchsia-500 to-rose-500",
    stem: "Minutes after an interscalene block with bupivacaine, the patient complains of perioral numbness and tinnitus, then has a seizure and becomes hypotensive with a wide-complex rhythm.",
    sections: [
      {
        title: "Recognize & stabilize",
        prompt: "What is happening and what do you do first?",
        phrases: [
          { text: "Recognize local anesthetic systemic toxicity", alts: ["last", "local anesthetic toxicity", "systemic toxicity"], critical: true },
          { text: "Stop injecting the local anesthetic", alts: ["stop the injection", "stop the local"], critical: true },
          { ...SAFETY.callHelp },
          { ...SAFETY.oxygen, text: "Airway and 100% oxygen", alts: ["secure the airway", "100 percent oxygen", "ventilate"] },
          { text: "Stop the seizure with a benzodiazepine", alts: ["benzodiazepine", "midazolam", "versed", "treat the seizure"] },
        ],
      },
      {
        title: "Lipid emulsion rescue",
        prompt: "The patient becomes unstable. What is the specific treatment?",
        phrases: [
          { text: "Give 20% lipid emulsion (Intralipid)", alts: ["lipid emulsion", "intralipid", "lipid rescue", "20 percent lipid"], critical: true },
          { text: "Bolus then start an infusion", alts: ["bolus", "1.5 ml per kg", "infusion"] },
          { text: "Reduce epinephrine doses (small boluses)", alts: ["small dose of epinephrine", "reduce epinephrine", "low dose epi"] },
          { text: "Avoid vasopressin, calcium channel blockers, and local anesthetic antiarrhythmics", alts: ["avoid vasopressin", "avoid calcium channel blocker", "avoid lidocaine"] },
        ],
      },
      {
        title: "If arrest / refractory",
        prompt: "The patient arrests. What now?",
        phrases: [
          { text: "Start ACLS / CPR", alts: ["acls", "cpr", "chest compressions", "code"], critical: true },
          { text: "Prolonged resuscitation may be needed", alts: ["prolonged", "extended resuscitation"] },
          { text: "Consider cardiopulmonary bypass / ECMO", alts: ["bypass", "ecmo", "cardiopulmonary bypass"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "anaphylaxis",
    number: 4,
    category: "Crisis",
    title: "Intraoperative Anaphylaxis",
    tagline: "Sudden hypotension, bronchospasm, and rash after a drug.",
    icon: "Siren",
    color: "from-rose-500 to-red-500",
    stem: "Shortly after antibiotic administration the patient becomes profoundly hypotensive with high airway pressures, wheezing, and a flushed rash.",
    sections: [
      {
        title: "Recognize & first actions",
        prompt: "What is your diagnosis and immediate management?",
        phrases: [
          { text: "Suspect anaphylaxis", alts: ["anaphylaxis", "anaphylactic", "allergic reaction"], critical: true },
          { text: "Stop the likely trigger", alts: ["stop the antibiotic", "remove the trigger", "stop the drug"], critical: true },
          { ...SAFETY.callHelp },
          { ...SAFETY.oxygen },
          { text: "Give epinephrine", alts: ["epinephrine", "epi", "adrenaline"], critical: true },
        ],
      },
      {
        title: "Resuscitate",
        prompt: "Blood pressure is still low. What else?",
        phrases: [
          { text: "Give IV fluid bolus", alts: ["fluid bolus", "iv fluids", "crystalloid", "volume"], critical: true },
          { text: "Consider an epinephrine infusion for refractory hypotension", alts: ["epinephrine infusion", "epi drip", "vasopressin"] },
          { text: "Treat bronchospasm with a bronchodilator", alts: ["albuterol", "bronchodilator", "beta agonist"] },
        ],
      },
      {
        title: "Second-line & workup",
        prompt: "What adjuncts and follow-up?",
        phrases: [
          { text: "Give antihistamines and corticosteroids", alts: ["antihistamine", "diphenhydramine", "steroids", "h1 and h2", "hydrocortisone"] },
          { text: "Send a tryptase level", alts: ["tryptase", "mast cell"] },
          { text: "Refer for allergy testing and document", alts: ["allergy testing", "allergist", "document the allergy"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "intraop-bronchospasm",
    number: 5,
    category: "Respiratory",
    title: "Intraoperative Bronchospasm",
    tagline: "Wheezing and rising peak pressures after intubation.",
    icon: "Wind",
    color: "from-sky-500 to-blue-500",
    stem: "Shortly after intubating an asthmatic patient, you note wheezing, high peak inspiratory pressures, and a sloping (shark-fin) capnograph.",
    sections: [
      {
        title: "Recognize & differential",
        prompt: "What is your differential for high airway pressures and wheeze?",
        phrases: [
          { text: "Bronchospasm is likely", alts: ["bronchospasm", "wheezing"], critical: true },
          { text: "Rule out mechanical causes: mainstem, kinked tube, mucus plug, pneumothorax", alts: ["mainstem", "kinked tube", "mucus plug", "pneumothorax", "tube obstruction"], critical: true },
          { text: "Hand-ventilate to assess compliance", alts: ["hand ventilate", "feel the compliance", "manual ventilation"] },
          { ...SAFETY.oxygen, text: "100% oxygen", alts: ["100 percent oxygen", "increase fio2"] },
        ],
      },
      {
        title: "Treat",
        prompt: "You confirm bronchospasm. Treatment?",
        phrases: [
          { text: "Deepen the anesthetic", alts: ["deepen anesthesia", "increase the volatile", "propofol", "more anesthetic"], critical: true },
          { text: "Give an inhaled beta-2 agonist", alts: ["albuterol", "beta agonist", "inhaler", "bronchodilator"], critical: true },
          { text: "Consider epinephrine for severe bronchospasm", alts: ["epinephrine", "epi"] },
          { text: "Consider steroids and an anticholinergic", alts: ["steroids", "ipratropium", "anticholinergic", "magnesium"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "laryngospasm",
    number: 6,
    category: "Airway",
    title: "Laryngospasm",
    tagline: "Stridor and obstruction on emergence.",
    icon: "Wind",
    color: "from-orange-500 to-amber-500",
    stem: "During emergence, the patient develops stridor that progresses to silent total airway obstruction with paradoxical chest movement and a falling SpO₂.",
    sections: [
      {
        title: "Recognize & first maneuvers",
        prompt: "What is happening and what do you do?",
        phrases: [
          { text: "Recognize laryngospasm", alts: ["laryngospasm", "cords are closed"], critical: true },
          { text: "Remove the stimulus and suction secretions", alts: ["remove the stimulus", "suction", "clear secretions"] },
          { ...SAFETY.oxygen, text: "100% oxygen with CPAP and jaw thrust", alts: ["100 percent oxygen", "cpap", "positive pressure", "jaw thrust"], critical: true },
          { text: "Apply pressure at the laryngospasm notch (Larson's maneuver)", alts: ["larson", "laryngospasm notch"] },
          { ...SAFETY.callHelp },
        ],
      },
      {
        title: "Break it",
        prompt: "It does not break and the saturation is dropping. Next?",
        phrases: [
          { text: "Deepen anesthesia with propofol", alts: ["propofol", "deepen anesthesia"], critical: true },
          { text: "Give succinylcholine if it persists", alts: ["succinylcholine", "sux", "paralytic"], critical: true },
          { text: "Re-intubate if needed", alts: ["reintubate", "intubate", "secure the airway"] },
          { text: "Watch for negative-pressure pulmonary edema", alts: ["negative pressure pulmonary edema", "pulmonary edema", "nppe"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "aspiration",
    number: 7,
    category: "Respiratory",
    title: "Pulmonary Aspiration",
    tagline: "Gastric contents in the airway on induction.",
    icon: "Droplet",
    color: "from-amber-500 to-orange-500",
    stem: "On induction of a non-fasted trauma patient you see gastric contents in the oropharynx, and the SpO₂ begins to fall.",
    sections: [
      {
        title: "Immediate management",
        prompt: "What do you do right now?",
        phrases: [
          { text: "Head-down and turn the patient to the side", alts: ["head down", "trendelenburg", "turn to the side", "lateral"], critical: true },
          { text: "Suction the airway", alts: ["suction"], critical: true },
          { text: "Secure the airway and intubate", alts: ["intubate", "secure the airway", "endotracheal tube"], critical: true },
          { ...SAFETY.oxygen },
        ],
      },
      {
        title: "After securing the airway",
        prompt: "The airway is secured. What now?",
        phrases: [
          { text: "Suction the ETT before positive pressure if able", alts: ["suction the tube", "suction before ventilating"] },
          { text: "Apply PEEP and supportive ventilation", alts: ["peep", "lung protective", "supportive ventilation"] },
          { text: "Do not give empiric antibiotics or steroids routinely", alts: ["no routine antibiotics", "avoid steroids", "antibiotics only if infection"] },
          { text: "Obtain a chest X-ray and plan disposition", alts: ["chest x ray", "cxr", "observe", "icu if severe"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "massive-hemorrhage",
    number: 8,
    category: "Crisis",
    title: "Massive Hemorrhage",
    tagline: "Rapid, ongoing surgical blood loss.",
    icon: "Droplets",
    color: "from-red-600 to-rose-500",
    stem: "During a hepatic resection there is sudden, brisk bleeding. The blood pressure is 70/40 and the heart rate is 130.",
    sections: [
      {
        title: "Communicate & resuscitate",
        prompt: "How do you manage this?",
        phrases: [
          { text: "Communicate with the surgeon to control bleeding", alts: ["tell the surgeon", "surgical control", "pack the field", "control the bleeding"], critical: true },
          { ...SAFETY.callHelp },
          { text: "Activate the massive transfusion protocol", alts: ["massive transfusion protocol", "mtp", "activate the protocol"], critical: true },
          { text: "Get large-bore IV access and a rapid infuser", alts: ["large bore iv", "two iv", "rapid infuser", "central line", "more access"], critical: true },
        ],
      },
      {
        title: "Transfuse in balanced ratio",
        prompt: "What do you give?",
        phrases: [
          { text: "Transfuse a balanced 1:1:1 ratio of products", alts: ["1 to 1 to 1", "balanced ratio", "prbc ffp platelets", "packed cells plasma platelets"], critical: true },
          { text: "Warm fluids and the patient", alts: ["warm the fluids", "fluid warmer", "warm the patient", "avoid hypothermia"] },
          { text: "Give calcium for citrate toxicity", alts: ["calcium", "citrate", "ionized calcium"] },
          { text: "Consider tranexamic acid", alts: ["tranexamic acid", "txa", "antifibrinolytic"] },
        ],
      },
      {
        title: "Monitor & avoid the triad",
        prompt: "What are you watching for?",
        phrases: [
          { text: "Place an arterial line and send labs/ABGs", alts: ["arterial line", "a line", "abg", "labs", "rotem", "teg"] },
          { text: "Avoid the lethal triad: hypothermia, acidosis, coagulopathy", alts: ["lethal triad", "acidosis", "coagulopathy", "hypothermia"], critical: true },
          { text: "Target adequate perfusion and urine output", alts: ["urine output", "perfusion", "lactate", "permissive hypotension"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "venous-air-embolism",
    number: 9,
    category: "Neuro",
    title: "Venous Air Embolism",
    tagline: "Sudden EtCO₂ drop in a sitting craniotomy.",
    icon: "Wind",
    color: "from-indigo-500 to-violet-500",
    stem: "During a sitting-position posterior fossa craniotomy, the end-tidal CO₂ abruptly falls, the blood pressure drops, and you hear a mill-wheel murmur.",
    sections: [
      {
        title: "Recognize & first actions",
        prompt: "What is your diagnosis and immediate response?",
        phrases: [
          { text: "Suspect venous air embolism", alts: ["venous air embolism", "air embolism", "vae"], critical: true },
          { text: "Tell the surgeon to flood the field and stop air entry", alts: ["flood the field", "tell the surgeon", "saline on the field", "bone wax"], critical: true },
          { ...SAFETY.oxygen, text: "100% oxygen and stop nitrous oxide", alts: ["100 percent oxygen", "stop nitrous", "turn off nitrous"], critical: true },
          { ...SAFETY.callHelp },
        ],
      },
      {
        title: "Treat",
        prompt: "How do you treat?",
        phrases: [
          { text: "Aspirate air from a central line if present", alts: ["aspirate air", "central line", "right atrial catheter"] },
          { text: "Position head-down / left lateral (Durant)", alts: ["head down", "left lateral", "durant", "trendelenburg"] },
          { text: "Support hemodynamics with fluids and vasopressors", alts: ["fluids", "vasopressors", "pressors", "epinephrine"], critical: true },
          { text: "Lower the surgical site below the heart if possible", alts: ["lower the head", "below the heart"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "intraop-cardiac-arrest",
    number: 10,
    category: "Cardiac",
    title: "Intraoperative Cardiac Arrest",
    tagline: "Sudden loss of pulse and pressure under anesthesia.",
    icon: "HeartPulse",
    color: "from-red-500 to-pink-500",
    stem: "Mid-case the arterial line goes flat and you cannot palpate a pulse. The rhythm shows ventricular fibrillation.",
    sections: [
      {
        title: "Start ACLS",
        prompt: "What do you do?",
        phrases: [
          { text: "Confirm arrest and call for help / code", alts: ["call a code", "call for help", "confirm arrest", "no pulse"], critical: true },
          { text: "Start high-quality chest compressions", alts: ["chest compressions", "cpr", "compressions"], critical: true },
          { ...SAFETY.oxygen, text: "100% oxygen and confirm the airway", alts: ["100 percent oxygen", "secure the airway", "ventilate"] },
          { text: "Defibrillate the shockable rhythm", alts: ["defibrillate", "shock", "defibrillation"], critical: true },
          { text: "Give epinephrine every 3–5 minutes", alts: ["epinephrine", "epi", "1 mg"], critical: true },
        ],
      },
      {
        title: "Find the cause (Hs & Ts)",
        prompt: "What reversible causes are you considering?",
        phrases: [
          { text: "Search the Hs and Ts", alts: ["hs and ts", "reversible causes", "hypoxia hypovolemia", "tension pneumothorax tamponade"], critical: true },
          { text: "Consider anesthetic causes: high anesthetic, LAST, anaphylaxis, gas embolism", alts: ["turn off the volatile", "last", "anaphylaxis", "air embolism", "high anesthetic"] },
          { text: "Stop surgical stimulation / triggers", alts: ["stop surgery", "stop the trigger", "turn off the anesthetic"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "intraop-myocardial-ischemia",
    number: 11,
    category: "Cardiac",
    title: "Intraoperative Myocardial Ischemia",
    tagline: "New ST changes and hemodynamic instability.",
    icon: "HeartPulse",
    color: "from-rose-500 to-red-500",
    stem: "Intraoperatively you note new ST-segment depression on lead V5 with tachycardia and hypertension in a patient with coronary disease.",
    sections: [
      {
        title: "Optimize supply and demand",
        prompt: "What is your goal and approach?",
        phrases: [
          { text: "Recognize myocardial ischemia and optimize oxygen supply vs demand", alts: ["ischemia", "supply and demand", "oxygen supply demand"], critical: true },
          { ...SAFETY.oxygen, text: "Increase oxygen and ensure adequate hemoglobin", alts: ["increase fio2", "100 percent oxygen", "transfuse", "hemoglobin"] },
          { text: "Control heart rate (slow it)", alts: ["control the heart rate", "beta blocker", "esmolol", "slow the heart rate"], critical: true },
          { text: "Optimize coronary perfusion pressure / treat hypotension or hypertension", alts: ["coronary perfusion pressure", "treat the blood pressure", "maintain diastolic pressure"], critical: true },
        ],
      },
      {
        title: "Treat & escalate",
        prompt: "What else and disposition?",
        phrases: [
          { text: "Give nitroglycerin if not hypotensive", alts: ["nitroglycerin", "ntg", "nitro"] },
          { text: "Deepen analgesia to blunt sympathetic response", alts: ["analgesia", "opioid", "deepen anesthesia", "fentanyl"] },
          { text: "Get a 12-lead ECG and troponin", alts: ["12 lead", "ecg", "troponin", "cardiology"] },
          { text: "Consult cardiology / consider catheterization", alts: ["cardiology", "cath lab", "catheterization", "echo"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "intraop-hypoxia",
    number: 12,
    category: "Respiratory",
    title: "Intraoperative Hypoxemia",
    tagline: "A falling SpO₂ — a systematic approach.",
    icon: "Activity",
    color: "from-sky-500 to-indigo-500",
    stem: "Mid-case the SpO₂ reads 86% and is trending down on an intubated, ventilated patient.",
    sections: [
      {
        title: "Confirm & oxygenate",
        prompt: "How do you approach the low saturation?",
        phrases: [
          { ...SAFETY.oxygen, text: "Increase FiO₂ to 100%", alts: ["100 percent oxygen", "increase fio2", "fio2 1 0"], critical: true },
          { text: "Confirm it is real (waveform, probe)", alts: ["confirm the reading", "check the probe", "plethysmograph", "is it real"] },
          { text: "Hand-ventilate to assess compliance", alts: ["hand ventilate", "feel compliance", "manual ventilation"], critical: true },
          { ...SAFETY.callHelp },
        ],
      },
      {
        title: "Work the differential",
        prompt: "What is your differential?",
        phrases: [
          { text: "Check the circuit and machine for disconnect or low oxygen delivery", alts: ["disconnect", "circuit", "oxygen supply", "check the machine"], critical: true },
          { text: "Auscultate and rule out mainstem, mucus plug, bronchospasm, pneumothorax", alts: ["mainstem", "mucus plug", "bronchospasm", "pneumothorax", "breath sounds"], critical: true },
          { text: "Consider pulmonary edema, atelectasis, aspiration, embolism", alts: ["pulmonary edema", "atelectasis", "aspiration", "embolism", "shunt"] },
          { text: "Recruit and apply PEEP for atelectasis", alts: ["recruitment", "peep", "recruit"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "tension-pneumothorax",
    number: 13,
    category: "Respiratory",
    title: "Tension Pneumothorax",
    tagline: "Hypotension, high airway pressures, absent breath sounds.",
    icon: "Wind",
    color: "from-orange-500 to-red-500",
    stem: "During positive-pressure ventilation the patient becomes hypotensive with rising airway pressures, absent breath sounds on the right, and distended neck veins.",
    sections: [
      {
        title: "Recognize & decompress",
        prompt: "What is your diagnosis and immediate action?",
        phrases: [
          { text: "Suspect tension pneumothorax", alts: ["tension pneumothorax", "pneumothorax"], critical: true },
          { ...SAFETY.oxygen, text: "100% oxygen", alts: ["100 percent oxygen", "increase fio2"] },
          { text: "Immediate needle decompression", alts: ["needle decompression", "needle thoracostomy", "decompress", "angiocath"], critical: true },
          { text: "Tell the surgeon and call for help", alts: ["tell the surgeon", "call for help"], critical: true },
        ],
      },
      {
        title: "Definitive management",
        prompt: "What is definitive treatment?",
        phrases: [
          { text: "Place a chest tube / thoracostomy", alts: ["chest tube", "thoracostomy", "tube thoracostomy"], critical: true },
          { text: "Support hemodynamics with fluids and pressors", alts: ["fluids", "vasopressors", "pressors", "epinephrine"] },
          { text: "Confirm with exam and chest X-ray", alts: ["chest x ray", "cxr", "confirm"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "hemolytic-transfusion-reaction",
    number: 14,
    category: "Crisis",
    title: "Acute Hemolytic Transfusion Reaction",
    tagline: "Fever, hypotension, and hemoglobinuria during transfusion.",
    icon: "Droplets",
    color: "from-red-500 to-rose-600",
    stem: "Minutes into a transfusion the anesthetized patient becomes hypotensive and tachycardic with diffuse oozing in the field and dark urine in the Foley.",
    sections: [
      {
        title: "Stop & confirm",
        prompt: "What is happening and what is your first step?",
        phrases: [
          { text: "Stop the transfusion immediately", alts: ["stop the transfusion", "stop the blood"], critical: true },
          { text: "Suspect an acute hemolytic transfusion reaction", alts: ["hemolytic transfusion reaction", "transfusion reaction", "hemolysis"], critical: true },
          { ...SAFETY.callHelp },
          { text: "Recheck the unit and patient identifiers; notify the blood bank", alts: ["recheck the unit", "clerical check", "blood bank", "check the labels"], critical: true },
        ],
      },
      {
        title: "Support & protect kidneys",
        prompt: "How do you manage it?",
        phrases: [
          { text: "Support blood pressure with fluids and vasopressors", alts: ["fluids", "vasopressors", "pressors"], critical: true },
          { text: "Maintain urine output / protect the kidneys", alts: ["urine output", "maintain urine output", "diuresis", "fluids to protect kidneys"], critical: true },
          { text: "Watch for and treat DIC", alts: ["dic", "disseminated intravascular coagulation", "coagulopathy"] },
          { text: "Send labs (haptoglobin, LDH, Coombs, coags)", alts: ["haptoglobin", "ldh", "coombs", "coagulation labs", "free hemoglobin"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "high-spinal",
    number: 15,
    category: "Regional",
    title: "High / Total Spinal",
    tagline: "Profound hypotension and apnea after neuraxial anesthesia.",
    icon: "Zap",
    color: "from-violet-500 to-purple-500",
    stem: "Shortly after a spinal anesthetic for cesarean delivery, the patient becomes hypotensive and bradycardic, reports difficulty breathing, and then loses consciousness.",
    sections: [
      {
        title: "Airway & circulation",
        prompt: "What is happening and what do you do?",
        phrases: [
          { text: "Recognize a high or total spinal", alts: ["high spinal", "total spinal"], critical: true },
          { ...SAFETY.callHelp },
          { text: "Support the airway and ventilate; intubate if apneic", alts: ["support the airway", "ventilate", "intubate", "secure the airway"], critical: true },
          { ...SAFETY.oxygen },
        ],
      },
      {
        title: "Treat hemodynamics",
        prompt: "Blood pressure and heart rate are low. Treatment?",
        phrases: [
          { text: "Give IV fluids", alts: ["fluids", "fluid bolus", "iv fluids"], critical: true },
          { text: "Give vasopressors (phenylephrine/ephedrine, epinephrine if severe)", alts: ["vasopressor", "phenylephrine", "ephedrine", "epinephrine"], critical: true },
          { text: "Treat bradycardia with atropine/glycopyrrolate", alts: ["atropine", "glycopyrrolate", "treat bradycardia"], critical: true },
          { text: "Left uterine displacement if pregnant", alts: ["left uterine displacement", "left lateral tilt", "displace the uterus"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "severe-preeclampsia",
    number: 16,
    category: "Obstetrics",
    title: "Severe Preeclampsia / Eclampsia",
    tagline: "Hypertension, proteinuria, and seizure risk at term.",
    icon: "Activity",
    color: "from-pink-500 to-rose-500",
    stem: "A 32-week parturient presents with a blood pressure of 175/115, headache, and brisk reflexes for an urgent cesarean delivery.",
    sections: [
      {
        title: "Control BP & prevent seizures",
        prompt: "What are your management priorities?",
        phrases: [
          { text: "Control blood pressure with labetalol or hydralazine", alts: ["labetalol", "hydralazine", "nicardipine", "control the blood pressure"], critical: true },
          { text: "Give magnesium for seizure prophylaxis", alts: ["magnesium", "seizure prophylaxis", "mag"], critical: true },
          { text: "Monitor for magnesium toxicity (have calcium ready)", alts: ["magnesium toxicity", "calcium", "reflexes"] },
          { text: "Assess airway edema and platelets/coagulation", alts: ["airway edema", "platelets", "coagulation", "hellp"], critical: true },
        ],
      },
      {
        title: "Anesthetic plan",
        prompt: "How will you anesthetize for cesarean?",
        phrases: [
          { text: "Neuraxial is preferred if platelets and coagulation are adequate", alts: ["neuraxial", "spinal", "epidural", "regional"], critical: true },
          { text: "Blunt the hypertensive response if general anesthesia is needed", alts: ["blunt the response", "obtund the response", "esmolol", "remifentanil", "control the airway response"] },
          { text: "Anticipate a difficult airway", alts: ["difficult airway", "airway edema", "smaller tube"] },
          { text: "Aspiration prophylaxis and left uterine displacement", alts: ["aspiration prophylaxis", "left uterine displacement", "antacid"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "postpartum-hemorrhage",
    number: 17,
    category: "Obstetrics",
    title: "Postpartum Hemorrhage",
    tagline: "Uterine atony and ongoing bleeding after delivery.",
    icon: "Droplets",
    color: "from-rose-500 to-red-500",
    stem: "After a vaginal delivery the patient has continued heavy bleeding with a boggy uterus, a heart rate of 120, and a falling blood pressure.",
    sections: [
      {
        title: "Resuscitate & communicate",
        prompt: "What is your immediate management?",
        phrases: [
          { ...SAFETY.callHelp },
          { text: "Large-bore IV access and resuscitate with fluids/blood", alts: ["large bore iv", "fluids", "transfuse", "blood", "more access"], critical: true },
          { text: "Activate the massive transfusion protocol if severe", alts: ["massive transfusion protocol", "mtp"], },
          { text: "Communicate with the obstetric team", alts: ["tell the obstetrician", "ob team", "surgeon"], critical: true },
        ],
      },
      {
        title: "Treat the cause (4 Ts)",
        prompt: "What is causing it and how do you treat?",
        phrases: [
          { text: "Identify the cause — tone, trauma, tissue, thrombin", alts: ["four ts", "tone trauma tissue thrombin", "atony", "retained products"], critical: true },
          { text: "Give uterotonics: oxytocin, then methylergonovine / carboprost / misoprostol", alts: ["oxytocin", "uterotonic", "methergine", "methylergonovine", "carboprost", "hemabate", "misoprostol"], critical: true },
          { text: "Support with uterine massage and surgical/IR measures", alts: ["uterine massage", "balloon tamponade", "interventional radiology", "hysterectomy", "b lynch"] },
          { text: "Give tranexamic acid", alts: ["tranexamic acid", "txa"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "aortic-stenosis-noncardiac",
    number: 18,
    category: "Cardiac",
    title: "Severe Aortic Stenosis for Noncardiac Surgery",
    tagline: "The fixed-output lesion — keep it full, slow, and in sinus.",
    icon: "HeartPulse",
    color: "from-rose-500 to-pink-500",
    stem: "A 78-year-old with severe aortic stenosis (valve area 0.7 cm²) presents for hip fracture repair.",
    sections: [
      {
        title: "Hemodynamic goals",
        prompt: "What are your hemodynamic goals?",
        phrases: [
          { text: "Maintain preload — keep them full", alts: ["maintain preload", "keep them full", "adequate preload", "avoid hypovolemia"], critical: true },
          { text: "Maintain afterload / coronary perfusion pressure", alts: ["maintain afterload", "maintain svr", "coronary perfusion", "avoid hypotension", "phenylephrine"], critical: true },
          { text: "Maintain sinus rhythm and normal heart rate (avoid tachycardia)", alts: ["sinus rhythm", "avoid tachycardia", "normal heart rate", "treat arrhythmia"], critical: true },
          { text: "Maintain contractility", alts: ["maintain contractility", "avoid myocardial depression"] },
        ],
      },
      {
        title: "Anesthetic plan & monitoring",
        prompt: "How will you anesthetize and monitor?",
        phrases: [
          { text: "Consider invasive arterial monitoring", alts: ["arterial line", "a line", "invasive monitoring"], critical: true },
          { text: "Have a vasopressor (phenylephrine) ready", alts: ["phenylephrine", "vasopressor ready", "neo"], critical: true },
          { text: "Cautious neuraxial — avoid abrupt sympathectomy", alts: ["careful neuraxial", "avoid spinal", "slow epidural", "avoid sympathectomy"] },
          { text: "Treat hypotension early and aggressively; have pads/defibrillator", alts: ["treat hypotension early", "defibrillator", "pads", "resuscitation drugs"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "pheochromocytoma",
    number: 19,
    category: "Endocrine",
    title: "Pheochromocytoma",
    tagline: "Catecholamine storm — block before you cut.",
    icon: "Activity",
    color: "from-amber-500 to-orange-500",
    stem: "A patient with a catecholamine-secreting adrenal tumor presents for adrenalectomy; on tumor manipulation the blood pressure spikes to 230/130.",
    sections: [
      {
        title: "Preoperative preparation",
        prompt: "How should this patient be optimized before surgery?",
        phrases: [
          { text: "Alpha blockade first (e.g., phenoxybenzamine)", alts: ["alpha blockade", "phenoxybenzamine", "alpha blocker", "doxazosin"], critical: true },
          { text: "Add beta blockade only after alpha blockade", alts: ["beta blockade after alpha", "beta blocker after", "never beta before alpha"], critical: true },
          { text: "Volume expansion / rehydrate", alts: ["volume expansion", "fluids", "rehydrate", "intravascular volume"], critical: true },
          { text: "Confirm adequate blockade (BP and heart rate criteria)", alts: ["adequate blockade", "blood pressure controlled", "roizen criteria"] },
        ],
      },
      {
        title: "Intraoperative management",
        prompt: "BP spikes during tumor manipulation. What do you do?",
        phrases: [
          { text: "Arterial line and have short-acting vasodilators ready", alts: ["arterial line", "nicardipine", "nitroprusside", "phentolamine", "esmolol"], critical: true },
          { text: "Treat the surge with short-acting agents", alts: ["treat the hypertension", "short acting", "magnesium"], critical: true },
          { text: "Anticipate hypotension after the tumor vein is clamped", alts: ["hypotension after clamping", "vasopressors after", "fluids and pressors after ligation"], critical: true },
          { text: "Monitor glucose postoperatively", alts: ["glucose", "hypoglycemia", "blood sugar"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "autonomic-dysreflexia",
    number: 20,
    category: "Neuro",
    title: "Autonomic Dysreflexia",
    tagline: "Severe hypertension from stimulation below a high cord lesion.",
    icon: "Zap",
    color: "from-indigo-500 to-violet-500",
    stem: "A patient with a T4 spinal cord injury undergoing cystoscopy develops a pounding headache, flushing above the lesion, and a blood pressure of 210/120 with reflex bradycardia.",
    sections: [
      {
        title: "Recognize & remove the stimulus",
        prompt: "What is happening and what is your first step?",
        phrases: [
          { text: "Recognize autonomic dysreflexia", alts: ["autonomic dysreflexia", "autonomic hyperreflexia"], critical: true },
          { text: "Stop the surgical stimulus", alts: ["stop the stimulus", "stop the procedure", "remove the stimulus", "drain the bladder"], critical: true },
          { text: "Deepen anesthesia / ensure adequate anesthetic depth", alts: ["deepen anesthesia", "increase the anesthetic", "anesthetic depth"], critical: true },
        ],
      },
      {
        title: "Treat & prevent",
        prompt: "The blood pressure is still dangerously high. What now?",
        phrases: [
          { text: "Give short-acting antihypertensives", alts: ["short acting", "nitroprusside", "nicardipine", "nitroglycerin", "treat the hypertension"], critical: true },
          { text: "Prevent recurrence with adequate block depth (neuraxial/general)", alts: ["neuraxial", "spinal", "deep general", "dense block", "prevent recurrence"] },
          { text: "Watch for cerebral hemorrhage and arrhythmia", alts: ["cerebral hemorrhage", "stroke", "arrhythmia"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "pediatric-laryngospasm",
    number: 21,
    category: "Pediatrics",
    title: "Pediatric Laryngospasm",
    tagline: "Obstruction and desaturation in a child on emergence.",
    icon: "Wind",
    color: "from-pink-500 to-rose-500",
    stem: "A 3-year-old undergoing a mask anesthetic for myringotomy develops stridor and then complete obstruction with rapid desaturation and bradycardia.",
    sections: [
      {
        title: "Recognize & first maneuvers",
        prompt: "What do you do, and why is time critical in children?",
        phrases: [
          { text: "Recognize laryngospasm; children desaturate quickly", alts: ["laryngospasm", "desaturate quickly", "low reserve"], critical: true },
          { ...SAFETY.oxygen, text: "100% oxygen with positive pressure and jaw thrust", alts: ["100 percent oxygen", "positive pressure", "cpap", "jaw thrust"], critical: true },
          { text: "Larson's maneuver / remove the stimulus and suction", alts: ["larson", "laryngospasm notch", "remove the stimulus", "suction"] },
          { ...SAFETY.callHelp },
        ],
      },
      {
        title: "Break it & anticipate bradycardia",
        prompt: "It does not break and the heart rate is dropping. Next?",
        phrases: [
          { text: "Deepen with propofol", alts: ["propofol", "deepen anesthesia"], critical: true },
          { text: "Give succinylcholine (with atropine for bradycardia)", alts: ["succinylcholine", "sux", "atropine", "im succinylcholine"], critical: true },
          { text: "Treat bradycardia / be ready for CPR", alts: ["treat bradycardia", "atropine", "cpr", "epinephrine"], critical: true },
          { text: "Watch for negative-pressure pulmonary edema", alts: ["negative pressure pulmonary edema", "pulmonary edema"] },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "trauma-head-injury",
    number: 22,
    category: "Trauma",
    title: "Traumatic Brain Injury",
    tagline: "Full stomach, possible C-spine injury, and raised ICP.",
    icon: "Activity",
    color: "from-slate-500 to-indigo-500",
    stem: "A combative trauma patient with a GCS of 7 and a depressed skull fracture needs an emergent craniotomy. He ate two hours ago and has a possible cervical-spine injury.",
    sections: [
      {
        title: "Airway with precautions",
        prompt: "How will you secure the airway?",
        phrases: [
          { text: "Rapid sequence induction with cricoid (full stomach)", alts: ["rapid sequence induction", "rsi", "cricoid pressure", "full stomach"], critical: true },
          { text: "Maintain manual in-line stabilization of the C-spine", alts: ["in line stabilization", "manual in line", "c spine precautions", "cervical spine"], critical: true },
          { text: "Hemodynamically stable induction; blunt the laryngoscopy response", alts: ["stable induction", "blunt the response", "etomidate", "avoid hypotension on induction"] },
          { ...SAFETY.oxygen, text: "Pre-oxygenate", alts: ["preoxygenate", "100 percent oxygen"] },
        ],
      },
      {
        title: "Protect the brain",
        prompt: "How do you manage intracranial pressure and perfusion?",
        phrases: [
          { text: "Maintain cerebral perfusion pressure (avoid hypotension)", alts: ["cerebral perfusion pressure", "cpp", "avoid hypotension", "maintain blood pressure"], critical: true },
          { text: "Avoid hypoxia and hypercarbia; ventilate to normocapnia", alts: ["avoid hypoxia", "normocapnia", "avoid hypercarbia", "ventilation"], critical: true },
          { text: "Lower ICP: head up, mannitol or hypertonic saline", alts: ["head up", "mannitol", "hypertonic saline", "lower icp"], critical: true },
          { text: "Maintain normoglycemia and normothermia; treat seizures", alts: ["glucose", "normoglycemia", "normothermia", "seizure prophylaxis"] },
        ],
      },
    ],
  },
];

export function getOralCase(slug: string): CaseDef | undefined {
  return oralCases.find((c) => c.slug === slug);
}
