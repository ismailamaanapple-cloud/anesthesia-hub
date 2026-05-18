export type EmergencyStep = {
  title: string;
  body: string; // supports markdown-ish (used with Markdown component)
};

export type Emergency = {
  slug: string;
  name: string;
  tagline: string;
  icon: string; // lucide
  color: string; // tailwind gradient
  callOut?: string; // hotline / first action
  signs: string[];
  steps: EmergencyStep[];
  doses: { label: string; value: string; note?: string }[];
  pitfalls: string[];
  references: string[];
};

export const emergencies: Emergency[] = [
  // ---------------- MALIGNANT HYPERTHERMIA ----------------
  {
    slug: "malignant-hyperthermia",
    name: "Malignant Hyperthermia",
    tagline:
      "Hypermetabolic crisis triggered by halogenated volatiles or succinylcholine.",
    icon: "Flame",
    color: "from-red-600 to-orange-600",
    callOut: "Call MHAUS — 1-800-MH-HYPER (1-800-644-9737)",
    signs: [
      "Unexplained ↑↑ EtCO₂ (most sensitive & specific early sign)",
      "Tachycardia, tachypnea",
      "Muscle rigidity (esp. masseter after sux)",
      "Mixed metabolic / respiratory acidosis",
      "Hyperthermia — LATE sign (1–2 °C every 5 min)",
      "Dark urine (myoglobinuria), hyperkalemia",
    ],
    steps: [
      {
        title: "STOP triggers",
        body: `- Stop all **volatile anesthetics** and **succinylcholine**
- Switch to TIVA (propofol + opioid + non-depolarizing NMBA)
- High-flow O₂ 10 L/min via clean circuit (or charcoal filter); change CO₂ absorbent`,
      },
      {
        title: "Hyperventilate",
        body: `- 100% FiO₂, increase minute ventilation **2–3×** to blow off CO₂`,
      },
      {
        title: "Call for help",
        body: `- Call MHAUS hotline: **1-800-MH-HYPER (1-800-644-9737)**
- Mobilize additional staff (need many hands to mix old dantrolene)
- Get the **MH cart** to the room`,
      },
      {
        title: "Dantrolene",
        body: `- **2.5 mg/kg IV bolus** every 5 min until reaction abates
- Often need 10 mg/kg total; up to 30 mg/kg possible
- **Ryanodex** (250 mg vial in 5 mL sterile water) — fast prep
- Old dantrolene: 20 mg vial + mannitol in 60 mL sterile water — slow prep, need help
- Continue **1 mg/kg IV q6h × 24–48 h** after acute event`,
      },
      {
        title: "Cool the patient",
        body: `- Cold saline IV (avoid LR)
- Ice packs to axillae, groin
- Lavage open cavities, NG, bladder with cold fluid
- **Stop cooling at 38 °C** to avoid overshoot hypothermia`,
      },
      {
        title: "Treat hyperkalemia",
        body: `- Calcium chloride 1 g IV (central) or Ca gluconate 1–2 g (peripheral)
- Insulin 10 units IV + D50 25 g
- Sodium bicarbonate 50–100 mEq IV
- Albuterol nebulized
- **AVOID calcium channel blockers with dantrolene** — risk of cardiovascular collapse`,
      },
      {
        title: "Treat dysrhythmias & acidosis",
        body: `- Standard antiarrhythmics (avoid CCBs)
- Sodium bicarbonate for acidosis
- Maintain UOP > 1 mL/kg/h (consider mannitol, furosemide) to prevent myoglobinuria-induced AKI`,
      },
      {
        title: "ICU transfer",
        body: `- 24–48 h ICU monitoring — recrudescence in ~25%
- Repeat CK, K⁺, myoglobin, BUN/Cr, coags
- Refer for MH testing; counsel family (first-degree relatives 50% risk)
- Add to MHAUS registry, issue MedicAlert`,
      },
    ],
    doses: [
      { label: "Dantrolene", value: "2.5 mg/kg IV bolus q5 min", note: "Up to 10–30 mg/kg total" },
      { label: "Calcium chloride", value: "1 g IV (central)", note: "Or Ca gluconate 1–2 g peripheral" },
      { label: "Insulin + D50", value: "10 U IV + 25 g D50" },
      { label: "Bicarbonate", value: "1–2 mEq/kg IV" },
      { label: "Cooling", value: "Cold saline + surface ice", note: "Stop at 38 °C" },
    ],
    pitfalls: [
      "Confusing late hyperthermia with normal heat retention — CO₂ rises first.",
      "Giving verapamil or other CCB with dantrolene → cardiovascular collapse.",
      "Failing to mobilize enough staff to mix old dantrolene formulation quickly.",
      "Missing recrudescence in PACU/ICU — must monitor 24–48 h.",
    ],
    references: ["mhaus", "stanfordEM", "miller", "stoelting", "stanfordCa1"],
  },

  // ---------------- LAST ----------------
  {
    slug: "last",
    name: "Local Anesthetic Systemic Toxicity (LAST)",
    tagline:
      "Lipid emulsion is the antidote. Modified ACLS — small epi doses, avoid vasopressin.",
    icon: "Crosshair",
    color: "from-emerald-600 to-teal-600",
    callOut: "Lipid emulsion 20% — 1.5 mL/kg bolus → 0.25 mL/kg/min infusion",
    signs: [
      "Perioral numbness, tinnitus, metallic taste",
      "Agitation → seizure (CNS excitation)",
      "Drowsiness, coma (CNS depression)",
      "Bradycardia, AV block, ventricular arrhythmia, refractory arrest",
      "Onset typically within minutes of injection",
    ],
    steps: [
      {
        title: "Get help — manage airway with 100% O₂",
        body: `- Hypoxemia and acidosis dramatically worsen toxicity
- Intubate if needed for airway protection`,
      },
      {
        title: "Stop seizures",
        body: `- **Midazolam 1–2 mg IV** (preferred)
- Small doses of propofol acceptable, but avoid if CV unstable
- Avoid large propofol doses (more myocardial depression)`,
      },
      {
        title: "Lipid emulsion 20%",
        body: `- **1.5 mL/kg bolus over 1 min** (~100 mL in an adult)
- **Infusion 0.25 mL/kg/min** (~18 mL/min in 70 kg)
- Continue at least 10 min after circulatory stability
- Repeat bolus q3–5 min for persistent CV collapse
- Maximum 10 mL/kg over first 30 min`,
      },
      {
        title: "Modified ACLS",
        body: `- ↓ **Epinephrine doses to ≤ 1 mcg/kg** (NOT standard 1 mg)
- **AVOID:** vasopressin, calcium channel blockers, β-blockers, local-anesthetic antiarrhythmics (lidocaine, procainamide)
- **Amiodarone** preferred for ventricular arrhythmia
- Continue CPR as long as needed — full recovery reported after > 1 h CPR`,
      },
      {
        title: "If refractory",
        body: `- Activate **cardiopulmonary bypass / ECMO** early
- Notify perfusion / cardiac surgery
- Maintain CPR throughout`,
      },
      {
        title: "Post-event",
        body: `- Continue monitoring at least 4–6 h after resolution
- Report to LipidRescue registry (lipidrescue.org)
- Refer to allergist if no clear dose explanation`,
      },
    ],
    doses: [
      {
        label: "Lipid emulsion 20% bolus",
        value: "1.5 mL/kg over 1 min",
        note: "~100 mL in a 70-kg adult",
      },
      {
        label: "Lipid emulsion infusion",
        value: "0.25 mL/kg/min",
        note: "Double to 0.5 mL/kg/min if BP remains low",
      },
      {
        label: "Epinephrine",
        value: "≤ 1 mcg/kg per dose",
        note: "NOT standard 1 mg ACLS doses",
      },
      { label: "Midazolam (seizure)", value: "1–2 mg IV" },
    ],
    pitfalls: [
      "Giving full-dose epinephrine (1 mg) — worsens outcome in LAST.",
      "Giving vasopressin, β-blocker, or CCB.",
      "Stopping CPR too early — recovery after prolonged CPR is well-documented.",
      "Forgetting that propofol is NOT a lipid emulsion substitute (lipid content too low).",
    ],
    references: ["asraLast", "weinbergLipid", "stoelting", "miller"],
  },

  // ---------------- ANAPHYLAXIS ----------------
  {
    slug: "anaphylaxis",
    name: "Anaphylaxis",
    tagline:
      "Stop trigger, 100% O₂, fluid bolus, EPINEPHRINE. NMBAs cause >50% of intraoperative cases.",
    icon: "AlertOctagon",
    color: "from-red-600 to-pink-600",
    callOut: "Epinephrine 10–100 mcg IV bolus (titrate); 0.3–0.5 mg IM thigh if no IV",
    signs: [
      "Hypotension, tachycardia (or bradycardia preceding arrest)",
      "↑ peak airway pressure, ↓ lung compliance, wheezing",
      "Hypoxia, pulmonary edema",
      "Cutaneous: flushing, urticaria, periorbital/perioral edema",
      "Onset usually within 3 min of trigger (faster = more severe)",
    ],
    steps: [
      {
        title: "STOP the trigger",
        body: `- NMBA, antibiotic, latex, chlorhexidine, colloid, blood product, contrast
- Notify surgeon AND call for help`,
      },
      {
        title: "100% FiO₂",
        body: `- Switch to manual ventilation; consider higher PIP for bronchospasm
- Intubate early if angioedema present`,
      },
      {
        title: "Discontinue vasodilating agents",
        body: `- Turn off volatile, stop opioid infusions
- Give midazolam or ketamine for amnesia if hypotensive`,
      },
      {
        title: "IV fluid bolus — large volume",
        body: `- 2–4 L crystalloid (or more); may need many liters
- Treats vasodilation and capillary leak
- Trendelenburg / leg elevation`,
      },
      {
        title: "EPINEPHRINE",
        body: `- **10–100 mcg IV bolus** initially; escalate as needed
- **Infusion 0.02–0.3 mcg/kg/min**
- **0.3–0.5 mg IM anterolateral thigh** if no IV (repeat q5–15 min)
- **ACLS doses (0.1–1 mg IV)** for cardiovascular collapse`,
      },
      {
        title: "Escalate vasopressors if needed",
        body: `- **Vasopressin** 1–2 U bolus then 0.01–0.04 U/min infusion
- **Norepinephrine** 0.02–1 mcg/kg/min
- **Methylene blue** 1.5–2 mg/kg for refractory vasoplegia`,
      },
      {
        title: "Treat bronchospasm",
        body: `- Inhaled albuterol via inline nebulizer
- More epinephrine (β2 effect)
- Consider IV magnesium sulfate 2 g over 20 min`,
      },
      {
        title: "Secondary treatment (once stable)",
        body: `- **H1 blocker:** diphenhydramine 0.5–1 mg/kg IV
- **H2 blocker:** famotidine 20 mg IV
- **Steroid:** hydrocortisone 200 mg IV or methylprednisolone 1–2 mg/kg
- Establish invasive monitoring (A-line, CVC, Foley)`,
      },
      {
        title: "Diagnostics & follow-up",
        body: `- **Tryptase** at 1–2 h and 24 h after event
- Document clearly (event, timing, drugs given)
- Refer to allergist for skin testing in 4–6 weeks
- Notify patient, PCP, pharmacy; consider MedicAlert`,
      },
    ],
    doses: [
      { label: "Epinephrine IV", value: "10–100 mcg bolus", note: "Escalate to ACLS doses for arrest" },
      { label: "Epinephrine IM", value: "0.3–0.5 mg thigh", note: "Repeat q5–15 min if no IV" },
      { label: "Epi infusion", value: "0.02–0.3 mcg/kg/min" },
      { label: "IV fluid bolus", value: "2–4 L crystalloid", note: "Many liters often needed" },
      { label: "Vasopressin", value: "1–2 U bolus then 0.01–0.04 U/min" },
      { label: "Diphenhydramine", value: "0.5–1 mg/kg IV" },
      { label: "Hydrocortisone", value: "200 mg IV" },
    ],
    pitfalls: [
      "Delaying epinephrine while giving fluids and antihistamines first.",
      "Using only IM epi when IV access exists.",
      "Forgetting NMBAs are #1 trigger — review all drugs administered.",
      "Skipping tryptase — needed to confirm diagnosis later.",
    ],
    references: ["gabaCrisis", "stanfordEM", "miller", "barash", "stanfordCa1"],
  },

  // ---------------- CICV ----------------
  {
    slug: "cicv",
    name: "Cannot Intubate, Cannot Ventilate",
    tagline:
      "Oxygenation is paramount. Default to whatever works. Surgical airway last but don't delay.",
    icon: "Wind",
    color: "from-orange-600 to-red-600",
    callOut: "Call for help · Get the difficult airway cart · Prepare for surgical airway",
    signs: [
      "Failed mask ventilation AND failed laryngoscopy",
      "Falling SpO₂ despite attempts",
      "Bradycardia heralding hypoxic arrest",
    ],
    steps: [
      {
        title: "Call for help — early",
        body: `- Second anesthesiologist
- Surgeon at the head of the bed
- ENT / general surgery for surgical airway
- Get the difficult airway cart`,
      },
      {
        title: "Optimize mask ventilation",
        body: `- 100% O₂, two-handed mask + jaw thrust
- Oral + nasal airway
- Reposition: sniffing position, head extension, ramp obese patients
- ↑ PIP up to 25–30 cmH₂O if needed`,
      },
      {
        title: "Place a supraglottic airway (LMA)",
        body: `- Single best rescue maneuver
- Use 2nd-gen LMA (Supreme, ProSeal, i-gel)
- Adequate ventilation through LMA buys time`,
      },
      {
        title: "If LMA works",
        body: `- Maintain SGA, oxygenate, then decide:
  - Wake patient up if elective
  - Intubate via SGA with fiberoptic if surgery must proceed
  - Proceed with surgery via SGA if low-risk
  - Convert to surgical airway electively if needed`,
      },
      {
        title: "If LMA fails — CICV",
        body: `- Call out **"CANNOT INTUBATE, CANNOT VENTILATE"** loudly
- Proceed to **emergency front-of-neck airway** — DO NOT WAIT
- Concurrently: maximize O₂ via nasal cannula (apneic oxygenation)
- If sugammadex available and ROC given: **16 mg/kg sugammadex** to attempt to wake the patient`,
      },
      {
        title: "Scalpel-bougie-tube cricothyrotomy",
        body: `1. Extend the neck; identify the cricothyroid membrane
2. **Vertical skin incision** over cricothyroid membrane (~8 cm long)
3. **Horizontal stab** through the membrane
4. Insert **bougie** caudally
5. Railroad **6.0 ETT** over bougie
6. Inflate cuff, confirm with EtCO₂, secure
> Avoid needle cricothyrotomy if surgical option available — jet ventilation has high complication rate (barotrauma).`,
      },
      {
        title: "Post-event",
        body: `- Document airway exam, attempts, devices used, complications
- Award patient a **difficult airway letter** for medical record
- MedicAlert bracelet
- Notify patient and family`,
      },
    ],
    doses: [
      { label: "Sugammadex (post-roc)", value: "16 mg/kg IV", note: "May restore spontaneous ventilation" },
      { label: "Cricothyroid tube", value: "6.0 cuffed ETT over bougie" },
      { label: "Apneic O₂", value: "Nasal cannula 15 L/min", note: "Provides minutes of safe apnea" },
    ],
    pitfalls: [
      "Delaying SGA placement after one or two failed intubation attempts.",
      "Insisting on more laryngoscopy attempts in a desaturating patient.",
      "Choosing needle cricothyrotomy over surgical when adult equipment is available.",
      "Forgetting sugammadex when roc was used.",
    ],
    references: ["asaDifficultAirway", "proact", "stanfordEM", "miller"],
  },

  // ---------------- MASSIVE TRANSFUSION ----------------
  {
    slug: "massive-transfusion",
    name: "Massive Transfusion",
    tagline:
      "Balanced 1:1:1 resuscitation, TXA within 3 h, calcium for citrate, warm the patient.",
    icon: "Droplets",
    color: "from-red-500 to-rose-600",
    callOut: "Activate Massive Transfusion Protocol (MTP) early — don't wait for labs",
    signs: [
      "EBL > 1 blood volume OR > 4 units RBC in 1 h with ongoing need",
      "Persistent hypotension despite resuscitation",
      "Falling Hgb, INR ↑, fibrinogen ↓, platelets ↓",
      "Hypothermia, acidosis, hypocalcemia (the 'diamond of death')",
    ],
    steps: [
      {
        title: "Activate MTP",
        body: `- Call blood bank — say "Massive Transfusion Protocol"
- Will start sending **coolers** with 1:1:1 ratio (6 RBC : 6 FFP : 1 platelet apheresis)
- Designate one person to track products received and given`,
      },
      {
        title: "1:1:1 ratio (RBC : FFP : Platelets)",
        body: `- Per PROPPR trial — improves hemostasis in trauma
- Once labs available, transition to goal-directed (TEG/ROTEM, fibrinogen)
- Don't wait for labs to start FFP or platelets`,
      },
      {
        title: "Tranexamic Acid (TXA)",
        body: `- **1 g IV over 10 min** (within 3 h of injury)
- Then **1 g IV over 8 h infusion**
- Most effective if given EARLY — diminishing benefit after 3 h, possibly harmful after 6 h`,
      },
      {
        title: "Cryoprecipitate",
        body: `- 10 units in an adult to keep fibrinogen > 150 mg/dL (200 in OB)
- 1 unit cryo ≈ 5× fibrinogen of 1 unit FFP
- Consider fibrinogen concentrate (RiaSTAP) if available`,
      },
      {
        title: "Calcium",
        body: `- **1 g CaCl₂ (or 3 g Ca gluconate) per 4 units RBC**
- Citrate binds Ca²⁺ → ↓ ionized Ca → hypotension, prolonged QT
- Check ionized Ca q30 min; goal > 1.1 mmol/L`,
      },
      {
        title: "Permissive hypotension",
        body: `- Target **SBP 80–90 mmHg** until source control in non-TBI patients
- ≥ MAP 65 in TBI to maintain CPP
- Avoid dilutional coagulopathy from crystalloid overload`,
      },
      {
        title: "Warm the patient",
        body: `- Fluid warmer (Belmont, Level 1)
- Forced-air warming, blankets, ↑ room temperature
- Hypothermia worsens coagulopathy dramatically below 35 °C`,
      },
      {
        title: "Targets",
        body: `- Hgb > 7 (8 if cardiac disease)
- Platelets > 50,000 (100,000 if intracranial/ocular)
- Fibrinogen > 150–200 mg/dL
- INR < 1.5
- iCa > 1.1 mmol/L
- Temperature > 36 °C
- pH > 7.2`,
      },
    ],
    doses: [
      { label: "TXA load", value: "1 g IV over 10 min", note: "Within 3 h of injury" },
      { label: "TXA infusion", value: "1 g IV over 8 h" },
      { label: "Calcium chloride", value: "1 g per 4 units RBC", note: "Central line preferred" },
      { label: "Cryoprecipitate", value: "10 units adult", note: "Targets fibrinogen > 150" },
      { label: "1:1:1 cooler", value: "6 RBC : 6 FFP : 1 apheresis plt" },
    ],
    pitfalls: [
      "Giving 'balanced crystalloid' as the primary resuscitation fluid — dilutes coagulation factors.",
      "Forgetting calcium replacement — citrate toxicity is common at high transfusion rates.",
      "Delaying TXA beyond 3 hours.",
      "Not warming aggressively — hypothermia + acidosis + coagulopathy = lethal triad.",
    ],
    references: ["asaTransfusion", "prismMassiveTx", "trali", "miller"],
  },

  // ---------------- LARYNGOSPASM ----------------
  {
    slug: "laryngospasm",
    name: "Laryngospasm",
    tagline:
      "Larson's maneuver + CPAP. Sux 10–20 mg IV breaks refractory cases.",
    icon: "Siren",
    color: "from-red-500 to-rose-600",
    callOut: "Pressure on Larson's notch + jaw thrust + CPAP 40 cmH₂O",
    signs: [
      "Inspiratory stridor or silent airway",
      "Tracheal tug, paradoxical chest/abdominal movement",
      "Loss of EtCO₂ tracing, desaturation",
      "Bradycardia, central cyanosis",
    ],
    steps: [
      {
        title: "Stop the stimulus",
        body: `- Pause surgery, remove oropharyngeal stimulation
- Increase FiO₂ to 100%`,
      },
      {
        title: "Open the airway + CPAP",
        body: `- **Jaw thrust** + head tilt + oral or nasal airway
- **Larson's maneuver:** firm bilateral pressure on the **laryngospasm notch** — behind the angle of the mandible, in front of the mastoid
- **CPAP** via tight mask seal at 100% O₂, often need 40 cmH₂O`,
      },
      {
        title: "Suction",
        body: `- Clear blood, mucus, vomit from oropharynx`,
      },
      {
        title: "Deepen anesthesia",
        body: `- Propofol bolus (0.5–1 mg/kg)
- Consider IV lidocaine 1–2 mg/kg`,
      },
      {
        title: "Succinylcholine",
        body: `- **10–20 mg IV** (low-dose, often breaks laryngospasm without full paralysis)
- If no IV: **4 mg/kg IM** (deltoid or thigh)
- Pretreat children with atropine 0.02 mg/kg if bradycardic`,
      },
      {
        title: "Reintubate vs. continue with mask",
        body: `- If oxygenation restored and surgery brief: continue with mask/LMA
- If patient remains apneic or surgical needs require: intubate
- Prepare for surgical airway if persistent CICV`,
      },
      {
        title: "Watch for NPPE",
        body: `- **Negative Pressure Pulmonary Edema** can follow laryngospasm (esp. young healthy males)
- Frothy pink secretions, hypoxia, ↑ A-a gradient
- Treat supportively with PEEP, diuresis; usually self-limited within 24 h
- Consider PACU monitoring 4+ h after significant laryngospasm`,
      },
    ],
    doses: [
      { label: "Succinylcholine IV", value: "10–20 mg IV" },
      { label: "Succinylcholine IM", value: "4 mg/kg", note: "If no IV" },
      { label: "Propofol", value: "0.5–1 mg/kg IV" },
      { label: "Atropine (peds)", value: "0.02 mg/kg IV", note: "Pre-sux in infants" },
      { label: "CPAP", value: "Tight mask, 40 cmH₂O O₂" },
    ],
    pitfalls: [
      "Failing to use Larson's maneuver — it works far more often than propofol alone.",
      "Forgetting to suction first — blood/mucus may be the trigger.",
      "Pressing too low (on the carotid) instead of on the mandibular notch.",
      "Discharging too quickly — NPPE may evolve over hours.",
    ],
    references: ["gabaCrisis", "stanfordEM", "miller", "stanfordCa1"],
  },

  // ---------------- CODE BLUE / ACLS ----------------
  {
    slug: "code-blue",
    name: "Code Blue / Adult ACLS",
    tagline:
      "High-quality CPR. Reversible causes (Hs and Ts). Epi q3–5 min. Defibrillate shockable rhythms.",
    icon: "HeartPulse",
    color: "from-rose-600 to-red-700",
    callOut: "Call code, start CPR, rhythm check at 2 min",
    signs: [
      "Pulselessness or severe bradycardia with poor perfusion",
      "Sudden loss of capnography trace",
      "Asystole, PEA, VF, pulseless VT on monitor",
    ],
    steps: [
      {
        title: "Call code, start CPR",
        body: `- Activate code blue / call for crash cart
- Rate **100–120/min**, depth **2–2.4 inches**, full recoil
- Minimize interruptions — switch compressors every 2 min
- Place defibrillator pads ASAP`,
      },
      {
        title: "Airway and ventilation",
        body: `- Bag-mask with 100% O₂; advanced airway if not already intubated
- Once intubated: **10 breaths/min** (asynchronous with compressions)
- Capnography to assess CPR quality (EtCO₂ > 10–20 desired)`,
      },
      {
        title: "Rhythm check every 2 min",
        body: `- **Shockable (VF / pulseless VT):** defibrillate 200 J biphasic, immediate CPR
- **Non-shockable (asystole / PEA):** continue CPR, search for cause
- Pulse and rhythm check < 10 seconds`,
      },
      {
        title: "Epinephrine",
        body: `- **1 mg IV/IO every 3–5 min**
- Give as soon as possible in non-shockable; after 2nd shock in shockable`,
      },
      {
        title: "Antiarrhythmic for shockable rhythm",
        body: `- **Amiodarone 300 mg IV** (then 150 mg if needed)
- Or **lidocaine 1–1.5 mg/kg** (then 0.5–0.75 mg/kg)`,
      },
      {
        title: "Search for reversible causes — Hs and Ts",
        body: `**Hs:** Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hyper-/hypokalemia, Hypothermia, Hypoglycemia
**Ts:** Tension pneumothorax, Tamponade, Toxins, Thrombosis (PE), Thrombosis (MI), Trauma`,
      },
      {
        title: "Post-arrest care",
        body: `- **Targeted Temperature Management:** 32–36 °C × 24 h (per latest evidence including TTM2, often 36 °C)
- Avoid fever × 72 h
- 12-lead EKG, troponin
- Cath lab if STEMI / shockable arrest
- ABG, lactate, glucose 140–180
- ICU disposition`,
      },
    ],
    doses: [
      { label: "Epinephrine", value: "1 mg IV/IO q3–5 min" },
      { label: "Amiodarone", value: "300 mg IV (then 150 mg)", note: "For shockable rhythms" },
      { label: "Lidocaine", value: "1–1.5 mg/kg IV (then 0.5–0.75)", note: "Alternative antiarrhythmic" },
      { label: "Defibrillation", value: "200 J biphasic", note: "Manufacturer max for monophasic" },
      { label: "Bicarbonate", value: "1 mEq/kg IV", note: "Hyperkalemia, TCA OD, salicylate" },
      { label: "Calcium chloride", value: "1 g IV", note: "Hyperkalemia, hypocalcemia, CCB OD" },
    ],
    pitfalls: [
      "Hyperventilating after intubation — keep 10 breaths/min and watch capnography.",
      "Long interruptions in compressions for pulse checks.",
      "Forgetting to consider PE, tamponade, tension PTX — bedside US helps.",
      "Skipping post-arrest TTM and cath when indicated.",
    ],
    references: ["acls", "fasterTtm", "miller", "barash"],
  },
];

export function getEmergency(slug: string) {
  return emergencies.find((e) => e.slug === slug);
}
