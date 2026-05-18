// Tutorial chapters adapted from the Stanford CA-1 Tutorial Textbook (2021, 15th Ed.)
// Editors: Aileen Adriano, MD; Rebecca Morris, MD
// Educational use — distilled and reformatted for the AnesthesiaHub website.

export type TutorialSection = {
  heading: string;
  body: string; // supports **bold**, lists (- / 1.), simple tables (| col | col |), and paragraphs
};

export type Tutorial = {
  slug: string;
  number: number;
  category:
    | "Monitoring & Equipment"
    | "Pharmacology"
    | "Airway"
    | "Hemodynamics"
    | "Fluids & Blood"
    | "Critical Events"
    | "Perioperative Care"
    | "Subspecialty";
  title: string;
  tagline: string;
  icon: string;
  color: string;
  readMinutes: number;
  keyPoints: string[];
  sections: TutorialSection[];
};

export const tutorials: Tutorial[] = [
  // ---------------------------------------------------------------
  {
    slug: "standard-monitors",
    number: 1,
    category: "Monitoring & Equipment",
    title: "Standard Monitors",
    tagline: "ASA monitoring standards, pulse oximetry, capnography, EKG, BP.",
    icon: "Activity",
    color: "from-primary to-accent",
    readMinutes: 8,
    keyPoints: [
      "ASA Standard II: oxygenation, ventilation, circulation, and temperature continually evaluated.",
      "'Continual' = frequent steady succession. 'Continuous' = no interruption.",
      "Pulse ox uses 660 nm (red, Hb) and 940 nm (infrared, O₂Hb); when not connected the reading defaults to ~85% (1:1 ratio).",
      "MetHb pulls SpO₂ toward 85%; COHb falsely elevates SpO₂.",
      "Capnography tracing is as informative as the number — shape detects bronchospasm, rebreathing, esophageal intubation.",
    ],
    sections: [
      {
        heading: "ASA Basic Anesthetic Monitoring Standards",
        body: `**Standard I** — Qualified anesthesia personnel shall be present in the room throughout the conduct of all general anesthetics, regional anesthetics, and monitored anesthesia care.

**Standard II** — During all anesthetics, the patient's **oxygenation, ventilation, circulation, and temperature** shall be continually evaluated.

- **Oxygenation:** Anesthesia machine → inspired FiO₂ analyzer + low-O₂ alarm. All anesthetics → pulse oximetry with variable-pitch tone.
- **Ventilation:** Capnography with expired tidal volume. Disconnect alarm required if mechanically ventilated.
- **Circulation:** EKG (minimum 3-lead, 5-lead if cardiac concern); BP cycle q5 min minimum; at least one additional continual assessment (pulse-ox tracing, A-line tracing, palpable pulse, auscultation, doppler).
- **Temperature:** Probe if clinically significant changes are anticipated.

**Continual vs continuous (ITE):** *Continual* = repeated regularly and frequently in steady rapid succession (e.g., BP q5 min). *Continuous* = prolonged without any interruption (e.g., EKG display, disconnect alarm during mechanical ventilation).`,
      },
      {
        heading: "Pulse Oximetry — Fundamentals",
        body: `- **SaO₂ (fractional)** = O₂Hb / (O₂Hb + Hb + MetHb + COHb)
- **SpO₂ (functional, what the probe reads)** = O₂Hb / (O₂Hb + Hb)

The probe emits at **660 nm** (red, for Hb) and **940 nm** (infrared, for O₂Hb). Photoplethysmography isolates arterial pulsatile flow (AC) from non-pulsatile background (DC) — the patient is their own control.

The R ratio (AC/DC at 660 ÷ AC/DC at 940) maps to SpO₂. A 1:1 ratio = SpO₂ 85%, which is why a disconnected probe reads ~85%.`,
      },
      {
        heading: "Pulse Oximetry Pearls",
        body: `**Methemoglobin (MetHb)** — Absorbs equally at 660 and 940 nm. Pulls SpO₂ toward 85%.
- If true SpO₂ > 85% → reads falsely LOW
- If true SpO₂ < 85% → reads falsely HIGH
- Causes: prilocaine, benzocaine, dapsone, metoclopramide, nitric oxide, nitroglycerin
- Treatment: methylene blue (vitamin C in G6PD deficiency)

**Carboxyhemoglobin (COHb)** — Absorbs similarly to O₂Hb. 50% COHb → SpO₂ ~95% despite low SaO₂. Falsely HIGH reading.
- Causes: smoke inhalation, desiccated CO₂ absorbent, volatile degradation
- Treatment: 100% FiO₂, hyperbaric O₂

**Cyanide toxicity** — Cyanosis with HIGH SpO₂. Uncoupling of oxidative phosphorylation → high lactate, similar PO₂ on ABG vs. VBG.
- Causes: sodium nitroprusside, smoke inhalation
- Treatment: hydroxocobalamin

**Other falsely LOW SpO₂:** dyes (methylene blue > indocyanine > indigo carmine), blue nail polish, motion, ambient light, low perfusion (cold, anemic, high SVR).
**No effect on SpO₂:** bilirubin, HbF, HbS, acrylic nails, fluorescein.
**Cyanosis** clinically apparent at 5 g/dL desaturated Hb (~SpO₂ < 85%).`,
      },
      {
        heading: "Capnography",
        body: `Both the **number** and **tracing** provide physiologic information:
- **Bronchospasm** → upsloping (shark-fin) trace
- **Rebreathing / exhausted CO₂ absorber** → elevated baseline
- **Esophageal intubation** → no sustained CO₂ trace (may see brief washout from gastric CO₂)
- **Cardiac oscillations** → ripples on the plateau
- **Spontaneous breaths during mechanical ventilation** → curare cleft / notch

**EtCO₂ vs PaCO₂:** EtCO₂ is typically 2–5 mmHg lower than PaCO₂. Gradient widens with V/Q mismatch, dead space, low CO, PE.`,
      },
      {
        heading: "EKG Configurations",
        body: `**3-lead system** — Monitors I, II, or III (one at a time). Lead II is best for P waves and sinus rhythm.

**5-lead system** — Four limb leads + V5 at left anterior axillary line, 5th ICS.
- V5 alone: ~75% sensitive for ischemia
- II + V5: ~80%
- II + V4 + V5: ~98%

**Modified 3-lead:** if anterior ischemia is the concern, move L arm lead to V5 position and monitor lead I.`,
      },
      {
        heading: "Blood Pressure Monitoring",
        body: `**NIBP (oscillometric)** — MAP is the most accurate value (largest oscillation). SBP and DBP are proprietary algorithms. Inaccurate in atrial fibrillation, severe PVD, very calcified vessels. Affected by external pressure on the cuff (surgeon leaning on arm).

**Cuff sizing:** width should be ~40% of arm circumference. Cuff **too small** → falsely HIGH reading. Cuff **too large** → falsely LOW.

**Invasive arterial line** — Gold standard for beat-to-beat BP. Most accurate when zeroed, leveled, and properly damped. Allows ABG sampling and dynamic indices (pulse-pressure variation).`,
      },
      {
        heading: "Additional Monitors",
        body: `- **Depth of anesthesia:** BIS, Sedline (processed EEG); target 40–60 for general anesthesia.
- **Neuromuscular block:** train-of-four at adductor pollicis, ulnar nerve.
- **Temperature:** core sites (esophageal, nasopharyngeal, tympanic, bladder, PA catheter).
- **Cerebral oximetry (NIRS):** regional cerebral O₂ saturation; useful in cardiac, neuro, beach-chair shoulder cases.
- **Precordial / esophageal stethoscope:** classic teaching tool, still useful in peds.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "inhalational-agents",
    number: 2,
    category: "Pharmacology",
    title: "Inhalational Agents",
    tagline: "Volatile anesthetics: pharmacokinetics, properties, side effects.",
    icon: "Wind",
    color: "from-sky-500 to-indigo-500",
    readMinutes: 10,
    keyPoints: [
      "PARTIAL PRESSURE drives effect, not concentration. At equilibrium, PCNS = Parterial blood = Palveoli.",
      "Speed of induction: ↓ blood solubility, ↓ CO, ↓ alveolar-venous partial pressure difference → faster.",
      "Sevoflurane: sweet, non-pungent, agent of choice for inhalational induction.",
      "Desflurane: pungent → not for inhalational induction; fastest emergence; tachycardia with rapid increases.",
      "N₂O: avoid in closed air spaces (pneumothorax, bowel obstruction, middle ear surgery, eye gas bubbles).",
    ],
    sections: [
      {
        heading: "Pharmacokinetic Phases",
        body: `Inhalational pharmacokinetics has four phases:
1. **Uptake** (lungs → blood)
2. **Distribution** (blood → CNS, the site of action)
3. **Metabolism** (minimal for modern agents)
4. **Elimination** (mostly exhaled unchanged)

**The goal** is to develop an alveolar partial pressure that equilibrates with the CNS to render anesthesia. PARTIAL PRESSURE — not concentration — produces effect.

> At altitude (Patm < 760 mmHg), the same vol% produces a *lower partial pressure* and therefore *less* anesthetic effect.`,
      },
      {
        heading: "FA / FI: What Determines Speed of Onset?",
        body: `**FI** (inspired concentration) is set by fresh gas flow, circuit volume, and absorption by the machine/circuit. ↑ FGF and ↓ circuit absorption make FI ≈ delivered Fi.

**FA** (alveolar concentration) = input − uptake. **Uptake** depends on:
- **Blood solubility** — higher solubility = more gas needed to saturate blood = slower rise of FA/FI.
- **Alveolar blood flow (≈ cardiac output)** — higher CO = larger "tank" to fill = slower rise (esp. for soluble agents).
- **Alveolar-to-venous partial pressure difference** — wider gradient = more uptake = slower rise.

Net: **agents with low blood solubility (desflurane, sevoflurane, N₂O) reach the CNS fastest.**`,
      },
      {
        heading: "Special Effects",
        body: `**Concentration effect** — ↑ FI not only ↑ FA but also ↑ the rate at which FA approaches FI. Most dramatic with N₂O (used in high concentrations).

**Second gas effect** — Rapid uptake of one gas (e.g., N₂O) concentrates a second gas in the alveoli. Questionably clinically relevant.

**Shunts:**
- **R-to-L shunt** (intracardiac, mainstem intubation) — shunted blood without volatile dilutes arterial partial pressure → slower induction. IV agents become *faster* (bypass the lungs).
- **L-to-R shunt** — little effect on speed.`,
      },
      {
        heading: "Agent Properties",
        body: `| Agent | Blood:Gas | Oil:Gas | MAC (40 yo) | Notes |
|---|---|---|---|---|
| Halothane | 2.5 | 197 | 0.75% | Historical; hepatotoxic |
| Isoflurane | 1.4 | 90.8 | 1.2% | Pungent; airway irritant |
| Sevoflurane | 0.65 | 50 | 2.0% | Sweet; inhalational induction |
| Desflurane | 0.45 | 19 | 6.0% | Fastest emergence; pungent; tachycardia |
| N₂O | 0.47 | 1.3 | 104% | Cannot give 1 MAC alone; closed-space expansion |

**Oil:gas coefficient determines potency** (Meyer-Overton). **Blood:gas determines onset/offset speed.**`,
      },
      {
        heading: "Sevoflurane",
        body: `- 2/3 as potent as isoflurane (MAC 1.85–2.0%)
- Rapid uptake & elimination
- Sweet, non-pungent → workhorse for inhalational induction (especially pediatrics)
- Mild bronchodilator
- Degrades in dry CO₂ absorbent → **Compound A** (theoretical nephrotoxicity; use FGF ≥ 1–2 L/min for long cases)
- Minimal cardiovascular depression at clinical doses
- No catecholamine sensitization`,
      },
      {
        heading: "Desflurane",
        body: `- Lowest blood:gas coefficient → fastest emergence
- Pungent — **never** for inhalational induction (laryngospasm, breath-holding)
- Rapid increases in concentration → **transient sympathetic surge** (tachycardia, HTN) — increase slowly in CAD
- Requires heated, pressurized vaporizer (boiling point 23 °C)
- Best agent for obese patients and long cases (fast offset regardless of duration)`,
      },
      {
        heading: "Isoflurane",
        body: `- Pungent (like des) → not for inhalational induction
- Most potent volatile vasodilator
- "Coronary steal" historically described, no longer clinically concerning
- Slow emergence relative to sevo/des — useful in long cases where slow wakeup is acceptable`,
      },
      {
        heading: "Nitrous Oxide (N₂O)",
        body: `- MAC 104% → impossible to give 1 MAC alone at sea level
- Often used as a 50–70% adjunct to reduce volatile requirement
- **Expansion of closed gas spaces** — 30× more soluble than nitrogen → diffuses in faster than nitrogen leaves
- **Contraindicated:** pneumothorax, bowel obstruction, middle-ear surgery, retinal gas bubbles, intracranial air after dural opening
- Inactivates vitamin B12 (methionine synthase) — risk with chronic exposure, megaloblastic anemia, myeloneuropathy
- **Diffusion hypoxia** at emergence — rapid outflow can dilute alveolar O₂; treat with 100% FiO₂ for several minutes`,
      },
      {
        heading: "All Volatile Agents — Shared Effects",
        body: `- **Respiratory:** dose-dependent ↓ tidal volume, ↑ RR (overall ↓ minute ventilation), blunted hypoxic and hypercapnic ventilatory drive, bronchodilation
- **Cardiovascular:** ↓ SVR, ↓ contractility, ↓ MAP. Halothane sensitized myocardium to catecholamines; modern agents do not (clinically).
- **CNS:** ↓ CMRO₂, vasodilation → ↑ CBF and ↑ ICP (significant > 1 MAC). N₂O is the worst offender for ↑ CBF.
- **MH trigger:** all halogenated agents and succinylcholine. N₂O does NOT trigger.
- **PONV:** all volatiles are emetogenic.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "mac-and-awareness",
    number: 3,
    category: "Pharmacology",
    title: "MAC & Intraoperative Awareness",
    tagline: "Minimum alveolar concentration, factors that change it, awareness risk.",
    icon: "Brain",
    color: "from-violet-500 to-fuchsia-500",
    readMinutes: 6,
    keyPoints: [
      "MAC = alveolar concentration at 1 atm at steady state at which 50% of subjects don't respond to surgical incision (= ED50).",
      "MAC is additive (0.5 MAC sevo + 0.5 MAC N₂O = 1 MAC).",
      "MAC ↓ ~6% per decade after age 40.",
      "MACawake ~0.34 × MAC; MAC-BAR (blunt autonomic response) ~1.6 × MAC; MAC-EI (intubation) ~1.3.",
      "Awareness ~1–2 per 1000 GA cases. Higher with paralysis, high-risk surgery (cardiac, trauma, OB).",
    ],
    sections: [
      {
        heading: "What is MAC?",
        body: `**Minimum Alveolar Concentration** = the alveolar concentration of a gas at 1 atm at steady state at which **50% of subjects do not move in response to surgical incision**.

- MAC = ED50. ED95 is roughly 20% higher → 1.2 MAC prevents movement in 95% of patients.
- MAC is a **population average**, not a predictor of individual response.
- MAC values are **additive** (0.5 MAC sevoflurane + 0.5 MAC N₂O ≈ 1 MAC).
- MAC is **inversely related to potency**. Potency tracks **oil:gas partition coefficient** (Meyer-Overton), NOT blood:gas.
- Blood:gas coefficient determines speed of induction/emergence, NOT potency.`,
      },
      {
        heading: "Variations on MAC",
        body: `- **MAC-awake** — concentration that prevents response to verbal/tactile stimulation. Volatiles: ~0.34 MAC. N₂O: ~0.6 MAC.
- **MAC-movement** — 1.0 MAC (the classic definition).
- **MAC-EI (Endotracheal Intubation)** — concentration that blunts laryngeal response. ~1.3 MAC (ED95).
- **MAC-BAR (Blunt Autonomic Response)** — prevents adrenergic response to noxious stimulus. ~1.6 MAC. Opioids and N₂O reduce this requirement.`,
      },
      {
        heading: "Factors that DECREASE MAC",
        body: `- **Medications:** opioids, benzodiazepines, barbiturates, propofol, ketamine, α2-agonists, local anesthetics, verapamil, chronic methamphetamine
- **Acute ethanol** intoxication
- **Age:** highest at 6 months; ↓ ~6% per decade after age 40
- **Pregnancy** (down ~30–40%)
- **Hypothermia, hypoxia, hypercarbia**
- **Severe anemia** (Hb < 5)
- **Hyponatremia**
- **Sepsis**`,
      },
      {
        heading: "Factors that INCREASE MAC",
        body: `- **Catecholamine reuptake inhibition:** amphetamines, ephedrine, L-dopa, TCAs
- **Chronic ethanol abuse** (cross-tolerance)
- **First months of life** (peak MAC at 6 months)
- **Hyperthermia, hypernatremia**
- **Genotype** related to red hair (MC1R mutations)`,
      },
      {
        heading: "Intraoperative Awareness",
        body: `- Estimated **1–2 per 1000** GA cases. Pediatric incidence up to **2.7%** in kids > 6 yo (psychological sequelae less common).
- **2× more likely with neuromuscular blockade.**
- Higher risk: chronic alcohol/opioid/meth/cocaine use, high-risk surgery (cardiac 1–1.5%, trauma 11–43%, C-section 0.4%).
- Most common sensation: **hearing voices.**
- Mostly occurs during **induction or emergence.**
- Dreaming ≠ awareness; not related to anesthetic depth.

**Prevention:**
- Consider amnestic premedication (midazolam) in high-risk cases
- Avoid or minimize NMBA when feasible
- Use potent end-tidal monitoring; consider BIS/processed EEG in TIVA or high-risk patients
- Premedicate with scopolamine in trauma / CV cases when anesthesia must be light

**After an episode:** acknowledge, apologize, document, refer for early psychological counseling (40–60% benefit).`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "iv-anesthetic-agents",
    number: 4,
    category: "Pharmacology",
    title: "IV Anesthetic Agents",
    tagline: "Propofol, etomidate, ketamine, barbiturates, benzodiazepines, dexmedetomidine.",
    icon: "Syringe",
    color: "from-emerald-500 to-teal-500",
    readMinutes: 9,
    keyPoints: [
      "GABA-A is the most common target. Propofol/barbiturates ↑ duration of channel opening; benzos ↑ frequency.",
      "Ketamine is a non-competitive NMDA antagonist; dexmedetomidine is a selective α2 agonist.",
      "All hypnotics except ketamine cause dose-dependent respiratory depression. Etomidate has the least CV depression.",
      "Propofol infusion syndrome (PRIS): >4 mg/kg/h for prolonged periods → severe metabolic acidosis, rhabdo, cardiac failure.",
      "Etomidate: adrenal suppression even after a single dose (~24 h); rarely clinically significant outside septic shock.",
    ],
    sections: [
      {
        heading: "CNS Targets",
        body: `- **GABA-A receptors** (most common target) — primary inhibitory neurotransmitter. Activation ↑ chloride conductance → hyperpolarization.
  - **Propofol & barbiturates** ↓ rate of GABA dissociation → ↑ duration of channel opening.
  - **Benzodiazepines** facilitate GABA binding → ↑ frequency of channel opening.
- **NMDA receptors** — glutamate-gated excitatory channels. **Ketamine** is a non-competitive antagonist.
- **α2 receptors** — **Dexmedetomidine** is a selective α2 agonist → inhibits NE release at locus coeruleus (sedation) and dorsal horn (analgesia).`,
      },
      {
        heading: "Induction Doses & Onset",
        body: `| Drug | Dose (mg/kg) | Onset | Duration | HR | BP |
|---|---|---|---|---|---|
| Thiopental | 3–6 | < 30 s | 5–10 min | ↑ | ↓↓ |
| Propofol | 1.5–2.5 | 15–45 s | 5–10 min | 0/↓ | ↓↓ |
| Etomidate | 0.2–0.3 | 15–45 s | 3–12 min | 0 | 0 |
| Ketamine | 1–2 | 45–60 s | 10–20 min | ↑↑ | ↑↑ |
| Midazolam | 0.2–0.4 | 30–90 s | 10–30 min | 0 | 0/↓ |

> Adjust DOWN for elderly, hypovolemic, and frail patients (reduced volume of distribution, slower redistribution).`,
      },
      {
        heading: "Propofol",
        body: `- 2,6-diisopropylphenol in **egg lecithin emulsion** (egg yolk → relevant to egg allergy, which is usually egg white). Soybean oil → relevant to soy allergy.
- Bacteria grow readily → strict sterile technique; label with 12-hour expiration.
- **Induction:** 1.5–2.5 mg/kg. **Infusion:** 100–200 mcg/kg/min (hypnosis), 25–75 mcg/kg/min (sedation).
- ↑ doses in children (larger Vd, higher clearance). ↓ doses in elderly.
- ↓ CMRO₂, CBF, ICP. Cerebral vasoconstrictor (counterintuitive).
- Anticonvulsant.
- ↓ SVR (arterial AND venous) + direct myocardial depressant.
- **Pain on injection** in 32–67% — mitigate with lidocaine 20–40 mg in the syringe or large-vein injection.
- Antiemetic at sub-hypnotic doses (10–20 mg).
- **PRIS (Propofol Infusion Syndrome):** > 4 mg/kg/h for prolonged periods → severe metabolic acidosis, rhabdomyolysis, cardiac and renal failure, hypertriglyceridemia. High mortality, especially in children. Supportive treatment.`,
      },
      {
        heading: "Etomidate",
        body: `- Imidazole; GABA-A modulator.
- **0.2–0.3 mg/kg IV.** Minimal hemodynamic effect → workhorse for unstable patients.
- **Side effects:**
  - **Myoclonus** on induction (cortical disinhibition, not seizure)
  - **Pain on injection** (propylene glycol carrier)
  - **PONV** (high incidence)
  - **Adrenal suppression** via 11β-hydroxylase inhibition — even a single dose can suppress cortisol for ~24 h. Outcomes data mixed; consider risk-benefit in septic shock.
- No analgesia.
- ↓ CBF, ↓ CMRO₂; preserves CPP.`,
      },
      {
        heading: "Ketamine",
        body: `- Phencyclidine derivative; non-competitive NMDA antagonist. **Dissociative anesthesia.**
- **IV induction:** 1–2 mg/kg. **IM:** 4–6 mg/kg (useful when no IV in pediatrics or behavioral emergency).
- **Analgesic infusion:** 0.1–0.5 mg/kg/h (modern multimodal analgesia).
- ↑ HR, ↑ BP via central sympathetic stimulation (caution in CAD, uncontrolled HTN). In catecholamine-depleted patients, direct myocardial depression dominates → ↓ BP.
- **Preserves airway reflexes & respiratory drive.**
- **Bronchodilator** — first-line for severe asthma.
- ↑ secretions (consider glycopyrrolate).
- **Emergence reactions / hallucinations** — mitigate with benzodiazepine or low-dose propofol.
- Historical concern about ↑ ICP — modern data more permissive in TBI.`,
      },
      {
        heading: "Benzodiazepines (Midazolam, Diazepam, Lorazepam)",
        body: `- Mechanism: ↑ frequency of GABA-mediated chloride channel openings.
- Effects: **anxiolysis, anterograde amnesia, sedation, anticonvulsant, muscle relaxation** (centrally mediated).
- **Midazolam** is the workhorse: water-soluble, rapid onset (1–3 min IV), short duration (30–60 min after a single dose).
- **Premedication doses:** Adult 1–2 mg IV. Pediatric PO 0.5 mg/kg (max 20 mg).
- Synergistic respiratory depression with opioids.
- Paradoxical agitation in elderly and children.
- **Reversal:** flumazenil 0.2 mg IV q1 min (max 1 mg). Avoid in chronic benzo users — precipitates seizures.`,
      },
      {
        heading: "Dexmedetomidine",
        body: `- Highly selective α2 agonist (1620:1 vs clonidine 220:1).
- Provides sedation, analgesia, sympatholysis with **preserved respiratory drive** — ideal for awake fiberoptic intubation, MAC sedation, ICU sedation.
- **Load:** 1 mcg/kg over 10 min (often skipped in elderly / cardiac). **Infusion:** 0.2–0.7 mcg/kg/h.
- Bradycardia and hypotension are common; transient hypertension can occur with bolus loading.
- ↓ opioid and volatile requirements.
- ↓ emergence delirium (especially pediatric).`,
      },
      {
        heading: "Barbiturates (Thiopental, Methohexital)",
        body: `- Historical but tested: ultra-short-acting barbiturate, potent GABA potentiator.
- **Thiopental** 3–6 mg/kg IV induction; long context-sensitive half-time → no longer used clinically (largely unavailable).
- Cerebral protection (↓ CMRO₂); used in some neuro applications.
- **Contraindications:** acute intermittent porphyria (precipitates attack).
- Pain on injection, venous irritation, severe tissue necrosis if extravasated.
- **Methohexital** still used for ECT (lowers seizure threshold less than other agents).`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "rational-opioid-use",
    number: 5,
    category: "Pharmacology",
    title: "Rational IV Opioid Use",
    tagline: "Fentanyl, hydromorphone, morphine, remifentanil, sufentanil — when and why.",
    icon: "Pill",
    color: "from-amber-500 to-orange-500",
    readMinutes: 8,
    keyPoints: [
      "Analgesia via μ-opioid agonism (PAG in brain, substantia gelatinosa in cord).",
      "All opioids cause respiratory depression, sedation, miosis, ileus, pruritus. Hemodynamically stable when given alone.",
      "Fentanyl: rapid onset; long context-sensitive half-time on infusion.",
      "Remifentanil: organ-independent ester metabolism, ~5–10 min duration regardless of infusion length. Sudden cessation → acute opioid tolerance.",
      "Hydromorphone: longer-acting, no histamine release. Preferred in renal failure (M3G no active analgesic metabolite).",
    ],
    sections: [
      {
        heading: "Basic Opioid Pharmacology",
        body: `Analgesia is produced by **μ (mu) opioid receptor** agonism:
- In the brain (**periaqueductal gray matter**)
- In the spinal cord (**substantia gelatinosa**)

**Side-effect profile** is consistent across the class:
- Sedation, respiratory depression
- Chest-wall rigidity (rapid bolus of potent fentanyl/sufentanil/remifentanil)
- Bradycardia, hypotension (especially with other anesthetics)
- Pruritus, nausea, ileus, urinary retention
- Miosis (useful to assess patients under GA)
- **Reduce MAC** of volatile anesthetics.

Opioids alone are **hemodynamically stable**; in combination with volatiles or propofol they ↓ CO/SV/BP.`,
      },
      {
        heading: "Opioid Receptor Subtypes",
        body: `| Receptor | Clinical effect | Agonists |
|---|---|---|
| μ (mu) | Supraspinal analgesia (μ1), respiratory depression (μ2), physical dependence, muscle rigidity | Morphine, fentanyl, met-enkephalin, β-endorphin |
| κ (kappa) | Sedation, spinal analgesia | Nalbuphine, butorphanol, dynorphin, oxycodone |
| δ (delta) | Analgesia, behavioral, epileptogenic | Leu-enkephalin, β-endorphin |
| σ (sigma) | Dysphoria, hallucinations | Pentazocine, ketamine |`,
      },
      {
        heading: "Opioid Comparison",
        body: `| Drug | Equianalgesic IV | Peak | Duration (single bolus) | Infusion? |
|---|---|---|---|---|
| Fentanyl | 50 mcg | 3–5 min | 30–60 min | Use with caution* |
| Alfentanil | 150–250 mcg | 1–2 min | 5–10 min | Uncommon |
| Sufentanil | 5 mcg | 3–5 min | 20–45 min | OR |
| Remifentanil | 50 mcg | 3–5 min | 5–10 min | OR |
| Morphine | 5 mg | 10–20 min | 4–5 h | ICU/comfort |
| Hydromorphone | 0.75 mg | 5–15 min | 2–4 h | ICU |
| Meperidine | 37.5 mg | 5–15 min | 2–4 h | No |
| Methadone | 2.5 mg | 10 min | 24 h | No |

*Fentanyl infusion: long context-sensitive half-time — predict prolonged duration after stopping.`,
      },
      {
        heading: "Fentanyl",
        body: `- Synthetic phenylpiperidine; 75–125× more potent than morphine.
- **Easy to titrate** — rapid onset and short duration after a *single bolus*.
- Frequently used to blunt sympathetic response to laryngoscopy / LMA placement.
- **Context-sensitive half-time grows dramatically with infusion** — cut dose in half every 2 hours and expect a prolonged tail.
- No histamine release; no active metabolites.`,
      },
      {
        heading: "Hydromorphone",
        body: `- 5–7× more potent than morphine.
- Longer duration of action (2–4 h) → workhorse for **postoperative analgesia** and PCA.
- Titrate to effect near end of case for smooth wakeup — peak effect can take ~15 min.
- Metabolite (hydromorphone-3-glucuronide) has no analgesic activity but can cause neuroexcitation in renal failure.
- **No histamine release.**
- **Preferred over morphine in renal failure.**`,
      },
      {
        heading: "Remifentanil",
        body: `- Esterase-metabolized (plasma esterases) → **context-INSENSITIVE half-time** (~5–10 min regardless of duration).
- **Infusion:** start 0.05–0.1 mcg/kg/min, titrate as needed (rarely > 0.3 mcg/kg/min).
- Useful when intense intraoperative stimulation but minimal post-op pain expected, OR when paralysis is contraindicated (neuromonitoring).
- **Bradycardia** is common — have glycopyrrolate or atropine ready for bolus dosing.
- **Sudden cessation** → acute opioid tolerance (within minutes). Treatable with more opioid.
- **Long, high-dose infusions** (> 0.15 mcg/kg/min) → opioid-induced hyperalgesia. Less responsive to additional opioid.
- **Always have a longer-acting opioid on board** before stopping the infusion.
- Dosing units: **mcg/kg/MIN** (not /hr — don't confuse with sufentanil dosing).`,
      },
      {
        heading: "Sufentanil",
        body: `- 5–10× more potent than fentanyl.
- High-dose cardiac induction provides exceptional hemodynamic stability.
- Infusion dosing **mcg/kg/HOUR** (not /min — common error).
- Useful neuraxially (intrathecal/epidural).`,
      },
      {
        heading: "Morphine",
        body: `- Natural opioid; **histamine release** → hypotension, urticaria.
- Active metabolite **morphine-6-glucuronide** is renally cleared → accumulates in renal failure with prolonged sedation/respiratory depression.
- Intrathecal morphine (Duramorph): excellent post-op analgesia up to 24 h. Monitor for **delayed respiratory depression**.`,
      },
      {
        heading: "Strategies for Opioid Use",
        body: `- **Standard GETA:** use fentanyl to blunt sympathetic response to laryngoscopy; transition to longer-acting hydromorphone before incision; titrate near end of case based on RR.
- **Short ambulatory cases:** smaller doses of fentanyl ± local infiltration.
- **Painful surgery, smooth wakeup needed:** load with hydromorphone early; use remifentanil infusion for moment-to-moment titration; assess RR on wean.
- **OSA / opioid-sparing:** multimodal (acetaminophen, NSAID, regional, ketamine infusion, dexmedetomidine).
- **Anticipate respiratory depression in PACU** when redosing after a case.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "intraoperative-bp",
    number: 6,
    category: "Hemodynamics",
    title: "Intraoperative Hypotension & Hypertension",
    tagline: "BP determinants, differential diagnoses, vasopressor/antihypertensive choice.",
    icon: "HeartPulse",
    color: "from-rose-500 to-pink-500",
    readMinutes: 8,
    keyPoints: [
      "MAP = CO × SVR. CO = HR × SV. SV depends on preload, afterload, contractility.",
      "Pulse pressure: narrow → AS, cardiac tamponade, low SV. Wide → AR, AVM, thyrotoxicosis.",
      "First step in any hemodynamic change: confirm the measurement is real.",
      "Phenylephrine is a pure α1 agonist — useful in hypotension with adequate HR. Avoid in low-CO states.",
      "Norepinephrine is first-line for vasodilatory shock and increasingly used for routine intraoperative hypotension.",
    ],
    sections: [
      {
        heading: "Determinants of Blood Pressure",
        body: `**BP** = the force exerted by circulating blood on the vessel walls.
**(MAP − CVP) = CO × SVR**

**Cardiac Output (CO) = HR × SV**
- Cardiac Index (CO/BSA) normal range 2.6–4.2 L/min/m²
- Infants: SV relatively fixed → CO depends mainly on HR
- Adults: SV plays a major role, especially when tachycardia is undesirable (CAD, HOCM, AS)

**Stroke Volume (SV)** depends on:
1. **Preload** — LVEDV
2. **Afterload** — SVR accounts for 95% of impedance to ejection
3. **Contractility** — EF is the most clinically useful index (normal LV EF ~60%)`,
      },
      {
        heading: "Components & Pulse Pressure",
        body: `**SBP, DBP, MAP**
**Pulse Pressure (PP) = SBP − DBP**
- Normal ~40 mmHg at rest, up to ~100 with exertion
- **Narrow PP (< 25 mmHg):** aortic stenosis, coarctation, tension pneumothorax, myocardial failure, shock, damping
- **Wide PP (> 40 mmHg):** aortic regurgitation, PDA, atherosclerotic vessels, thyrotoxicosis, AVM, pregnancy, anxiety`,
      },
      {
        heading: "Intraoperative Hypertension — DDx",
        body: `Always start with: *"Is this measurement real?"* (check cuff size, position, transducer level)

- **Light anesthesia** — most common
- **Pain** (sympathetic activation from surgical stimulation)
- **Chronic hypertension** (uncontrolled or under-medicated)
- **Illicit drug use** (cocaine, amphetamines)
- **Hypermetabolic state** (MH, thyrotoxicosis, NMS, serotonin syndrome)
- **Elevated ICP** — Cushing's triad: HTN + bradycardia + irregular respirations
- **Autonomic hyperreflexia** (spinal cord lesion > T5)
- **Endocrine** (pheochromocytoma, hyperaldosteronism)
- **Hypervolemia**
- **Drug contamination** (intentional — local with epi — or unintentional)
- **Hypercarbia**`,
      },
      {
        heading: "Treatment of Hypertension",
        body: `**Temporize with fast-onset, short-acting drugs**, then diagnose and treat the cause.

- **Deepen anesthesia:** propofol bolus, ↑ volatile
- **Add analgesia:** opioid (fentanyl 25–100 mcg)
- **Short-acting vasodilators:**
  - **Clevidipine** — CCB in lipid emulsion (looks like propofol); 0.5–32 mg/h
  - **Nitroglycerin** — venous > arterial dilation
  - **Nitroprusside** — arterial > venous; cyanide toxicity risk; very expensive
  - *Avoid NTG/NTP in intracerebral hemorrhage* (cerebral vasodilator → ↑ ICP)
- **β-blockers:**
  - **Esmolol** — affects HR >> BP
  - **Labetalol** — combined α + β, longer acting
- **Hydralazine** — less predictable kinetics; longer acting`,
      },
      {
        heading: "Antihypertensive Comparison",
        body: `| Drug | Bolus | Onset | Peak | Duration | Infusion |
|---|---|---|---|---|---|
| Clevidipine | 50–100 mcg | 1 min | 2–4 min | 5–15 min | 0.5–32 mg/h |
| Nitroglycerin | 10–50 mcg | 1 min | 1–3 min | 3–5 min | 0.1–1 mcg/kg/min |
| Nitroprusside | 10–50 mcg | < 1 min | 1 min | 1–10 min | 0.1–1 mcg/kg/min |
| Labetalol | 5–10 mg | 2–5 min | 10–15 min | 45 min – 6 h | — |
| Esmolol | 10–20 mg | 1 min | 2 min | 10 min | 50–300 mcg/kg/min |
| Hydralazine | 5 mg | 5–20 min | 15–30 min | 2–6 h | — |`,
      },
      {
        heading: "Intraoperative Hypotension — DDx",
        body: `**Start with measurement error:** cuff size/position, transducer level, damping.

**Then by mechanism:**
- **Preload** (hypovolemia): hemorrhage, evaporative loss, diuretics, prolonged NPO, vasodilation from anesthetics, positioning, PEEP, pneumoperitoneum, vena cava compression
- **Afterload** (vasodilation): induction agents, volatiles, sepsis, anaphylaxis, sympathectomy from neuraxial block
- **Contractility**: MI, cardiomyopathy, severe acidosis, hypocalcemia, β-blocker overdose
- **Obstruction**: tension PTX, cardiac tamponade, PE, dynamic LVOT obstruction (HOCM), auto-PEEP
- **Rhythm**: bradycardia, tachyarrhythmia, heart block`,
      },
      {
        heading: "Pressor Comparison",
        body: `| Drug | Receptors | Bolus | Infusion | Notes |
|---|---|---|---|---|
| Phenylephrine | α1 | 50–200 mcg | 20–200 mcg/min | Reflex bradycardia; avoid in low-CO |
| Ephedrine | Mixed α/β indirect | 5–10 mg | — | Tachyphylaxis; ↑ HR |
| Norepinephrine | α1 + β1 | — | 0.02–1 mcg/kg/min | First-line for vasodilatory shock |
| Epinephrine | α + β (dose-dep) | 10–100 mcg | 0.02–0.2 mcg/kg/min | Arrest 1 mg; anaphylaxis 0.3 mg IM |
| Vasopressin | V1 | 1–2 U | 0.01–0.04 U/min | Catecholamine-sparing |
| Dopamine | DA, β, α (dose) | — | 1–10 mcg/kg/min | Arrhythmogenic; falling out of favor |
| Dobutamine | β1 >> β2 | — | 2–20 mcg/kg/min | Inotrope; ↓ SVR; for low CO |
| Milrinone | PDE-3 | 50 mcg/kg load | 0.125–0.5 mcg/kg/min | Inodilator; pulmonary vasodilator |`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "nmba",
    number: 7,
    category: "Pharmacology",
    title: "Neuromuscular Blocking Agents",
    tagline: "Depolarizing vs. non-depolarizing, monitoring, reversal.",
    icon: "Zap",
    color: "from-red-500 to-orange-500",
    readMinutes: 10,
    keyPoints: [
      "Succinylcholine: depolarizing, 1–1.5 mg/kg, onset 30–60 s, duration ~10 min. Metabolized by plasma pseudocholinesterase.",
      "Sux contraindications: hyperkalemia risk (burns > 24 h, MS/SCI/denervation, muscular dystrophy), MH, open globe.",
      "Roc 1.2 mg/kg IV is the RSI alternative when sux is contraindicated. Sugammadex 16 mg/kg can rescue.",
      "Cisatracurium undergoes organ-independent Hofmann elimination → best for hepatic/renal failure.",
      "TOF count of 4/4 with ratio ≥ 0.9 (acceleromyography) = adequate reversal. Direct palpation cannot confirm ratio ≥ 0.9.",
    ],
    sections: [
      {
        heading: "Neuromuscular Transmission",
        body: `1. Motor neuron action potential → Ca²⁺ influx at nerve terminal
2. Vesicles fuse and release **acetylcholine (ACh)**
3. ACh diffuses across synapse → binds α-subunits of nicotinic receptors
4. Both α-subunits must bind ACh → channel opens → Na⁺/Ca²⁺ in, K⁺ out → end-plate depolarization → muscle contraction

NMBAs interrupt this at the receptor (depolarizing or competitive antagonist).`,
      },
      {
        heading: "Succinylcholine",
        body: `- **Structure:** two ACh molecules joined by a methyl group
- **Mechanism:** nAChR agonist → prolonged depolarization → flaccid paralysis
- **Intubating dose:** 1–1.5 mg/kg IV (1.5–2 mg/kg if defasciculating dose given); IM 3–4 mg/kg
- **Onset:** 30–60 s; **Duration:** ~10 min
- **Metabolism:** plasma pseudocholinesterase (butyrylcholinesterase)

**Pseudocholinesterase deficiency**
- Heterozygous (~1/480): block extended 50–100%
- Homozygous (~1/3200): block 4–8 h
- **Dibucaine number:** % of normal pseudocholinesterase inhibited by dibucaine. Normal 80, hetero 50, homo 20.`,
      },
      {
        heading: "Contraindications to Succinylcholine",
        body: `**Hyperkalemia risk (upregulated junctional/extrajunctional AChR):**
- Burn injury > 24–48 hours old
- Muscular dystrophy (Duchenne), myotonias
- Prolonged immobility (ICU, paraplegia)
- Upper motor neuron disease (stroke, MS, GBS, spinal cord injury, tumor)

**Other:**
- Personal or family history of **malignant hyperthermia**
- Open globe / anterior chamber injury (transient ↑ IOP)

Normal induction dose ↑ K⁺ by ~0.5 mEq/L in healthy patients. Up to 5–10 mEq/L spikes can occur in susceptible patients → cardiac arrest.

> Normokalemic ESRD is NOT a contraindication.`,
      },
      {
        heading: "Succinylcholine Side Effects",
        body: `- **Fasciculations** (mitigate with defasciculating dose of rocuronium 0.03 mg/kg, 3 min before sux)
- **Myalgia** (worse in young women, athletes, ambulatory patients)
- **Bradycardia** — especially in children and with repeat dosing. Pretreat peds with atropine 0.02 mg/kg.
- **Tachycardia** in adults
- **Anaphylaxis** (~1:5,000–10,000)
- **Trismus** (premonitory sign for MH)
- ↑ intragastric, ↑ IOP, ↑ ICP`,
      },
      {
        heading: "Non-Depolarizing NMBAs",
        body: `**Mechanism:** competitive inhibition of nAChR. Also blocks presynaptic nAChR → "fade" on TOF.

**Two structural classes:**
1. **Benzylisoquinolinium** ("-urium"): cisatracurium, atracurium, mivacurium, d-tubocurarine. More likely to release histamine.
2. **Aminosteroid** ("-onium"): rocuronium, vecuronium, pancuronium. Vagolytic (pancuronium > roc > vec).

**Intubating dose ≈ 2× ED95.** Larger dose speeds onset but lengthens duration.

| Drug | Intubating dose | RSI dose | Onset | Duration | Notes |
|---|---|---|---|---|---|
| Rocuronium | 0.6 mg/kg | 1.2 mg/kg | 60–90 s (RSI) | 30–60 min | Hepatic; mild tachycardia |
| Vecuronium | 0.08–0.1 mg/kg | — | 3–5 min | 25–40 min | Hepatic; prolonged in renal/hepatic failure |
| Cisatracurium | 0.15–0.2 mg/kg | — | 2–3 min | 30–60 min | Hofmann elimination (organ-independent) |
| Pancuronium | 0.08–0.1 mg/kg | — | 3–5 min | 60–90 min | Vagolytic → tachycardia |`,
      },
      {
        heading: "Neuromuscular Monitoring",
        body: `**Train-of-four (TOF):** four supramaximal stimuli q 0.5 s.
- TOF count 4 → ~75% receptors blocked
- TOF count 3 → ~80%
- TOF count 2 → ~85%
- TOF count 1 → ~90%
- TOF count 0 → ~100%
- **TOF ratio** (4th/1st twitch) ≥ 0.9 → adequate recovery

**Post-tetanic count (PTC):** for deep block (TOF 0). 50 Hz tetanus → 1-Hz twitches.
- PTC 1–2 → very deep; PTC > 8–10 → returning toward TOF 1

**Sites:** adductor pollicis (gold standard); facial nerve / orbicularis oculi resists block (overestimates recovery).

**Variability of muscle blockade** (most resistant → most sensitive):
vocal cords > diaphragm > corrugator supercilii > orbicularis oculi > geniohyoid > adductor pollicis > pharyngeal muscles`,
      },
      {
        heading: "Reversal Agents — Neostigmine",
        body: `- AChE inhibitor → ↑ ACh at NMJ → outcompetes non-depolarizers.
- **Dose:** 0.04–0.07 mg/kg IV (max ~5 mg).
- **Co-administer glycopyrrolate** 0.2 mg per 1 mg neostigmine (or atropine 0.4 mg per 1 mg) to prevent bradycardia.
- **Ceiling effect** — cannot reverse deep block (TOF count 0).
- Requires TOF ≥ 2 at minimum.
- Side effects: bradycardia, bronchospasm, ↑ secretions, PONV.`,
      },
      {
        heading: "Reversal Agents — Sugammadex",
        body: `- γ-cyclodextrin that encapsulates **rocuronium and vecuronium** 1:1.
- Does NOT reverse benzylisoquinolinium agents (cisatracurium, atracurium).
- **Dose by depth of block:**
  - Routine (TOF ≥ 2): **2 mg/kg**
  - Deep (PTC 1–2): **4 mg/kg**
  - Immediate after RSI dose of roc: **16 mg/kg**
- Onset 1–3 min.
- Pharmacologic activity ~24 h — wait 24 h before re-administering rocuronium after 16 mg/kg dose, 5 min after 2–4 mg/kg.
- **Side effects:** bradycardia/arrest (rare), anaphylaxis (~0.3%), ↓ efficacy of hormonal contraception (counsel × 7 days).
- Renal excretion — caution if CrCl < 30.`,
      },
      {
        heading: "Recommended Sugammadex Doses",
        body: `| Indication | Dose |
|---|---|
| Cannot intubate, cannot ventilate after RSI | 16 mg/kg |
| Deep reversal (PTC 1–2 OR if recovery has reached 1–2 PTC) | 4 mg/kg |
| Routine reversal (TOF count ≥ 2) | 2 mg/kg |
| Re-dose of roc after 2–4 mg/kg sugammadex | Wait 5 min |
| Re-dose of roc after 16 mg/kg sugammadex | Wait 24 h |`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "difficult-airway",
    number: 8,
    category: "Airway",
    title: "Difficult Airway Algorithm",
    tagline: "ASA algorithm: anticipate, prepare, ventilate. Patients die from hypoxemia, not failed intubation.",
    icon: "Wind",
    color: "from-orange-500 to-red-500",
    readMinutes: 10,
    keyPoints: [
      "Patients die from lack of OXYGENATION — not from failed intubation. Always default to whatever oxygenates.",
      "Difficult mask ventilation is more dangerous than difficult intubation.",
      "Predictors of difficult MV (MaMaBOATS): Mallampati III/IV, ↓ Mandibular protrusion, Beard, Obesity, Age > 57, Teeth (lack), Snoring.",
      "Proper sniffing position: align tragus to sternum, parallel to floor. Ramp obese patients.",
      "Call for help EARLY. Surgical airway last but don't postpone when needed.",
    ],
    sections: [
      {
        heading: "Definition",
        body: `Per ASA: *"A clinical situation in which a conventionally trained anesthesiologist experiences difficulty with facemask ventilation of the upper airway, difficulty with tracheal intubation, or both."*

> Patients do not die from failed intubation — they die from lack of oxygenation. If the pulse ox is dropping, fall back to whatever lets you oxygenate.`,
      },
      {
        heading: "ASA Algorithm — High-Level Steps",
        body: `1. **Assess** likelihood and impact of:
   - Difficulty with patient cooperation/consent
   - Difficult mask ventilation
   - Difficult supraglottic airway placement
   - Difficult laryngoscopy / intubation
   - Difficult surgical airway access
2. **Actively oxygenate** throughout the process.
3. **Consider** awake vs asleep, non-invasive vs invasive, video-laryngoscopy first, preserve vs ablate spontaneous ventilation.
4. **Develop primary and alternative strategies**.
5. **Call for help early.**
6. After failed intubation: SGA → fiberoptic through SGA → wake / surgical airway.`,
      },
      {
        heading: "Predictors of Difficult Mask Ventilation",
        body: `**MaMaBOATS** (any 3 = high risk):
- **Ma**llampati III or IV
- **Ma**ndibular protrusion decreased
- **B**eard
- **O**besity (BMI > 30)
- **A**ge > 57
- **T**eeth (lack of)
- **S**noring (OSA)

**Predictors of IMPOSSIBLE mask ventilation (MaMaBORa):**
Mallampati III–IV, Males, Beard, OSA / upper airway surgery, Radiation changes to neck.`,
      },
      {
        heading: "Predictors of Difficult Intubation",
        body: `Successful direct laryngoscopy requires aligning oral, pharyngeal, and laryngeal axes.

- Mallampati III or IV
- Short, thick neck
- Thyromental distance < 3 finger breadths
- Inter-incisor distance < 3 cm (small mouth opening)
- Prominent overbite
- Decreased TMJ mobility; inability to prognath
- Limited cervical range of motion
- High-arched / narrow palate
- Poor submandibular compliance (mass, infection, radiation)
- Underlying pathology (laryngeal stenosis, epiglottitis, tumor)

**History of prior airway difficulty** is the single most important predictor — always check old records.`,
      },
      {
        heading: "Sniffing Position",
        body: `Requires **flexion at C7** and **extension at C5-C6**.
- **Ramp obese patients** until the line between the tragus and sternal notch is **parallel to the floor**.
- For neonates and infants, place a roll under the shoulders (large occiput causes neck flexion).
- Poor positioning can turn a Cormack-Lehane grade 1 view into a grade 4 view.

> Proper positioning is worth your effort, even at the start of an emergent case.`,
      },
      {
        heading: "Oxygenation Options",
        body: `- **Mask ventilate** in sniffing position
- **Oral airway** (Guedel) or **nasal trumpet** (caution with skull-base fracture, coagulopathy)
- **Supraglottic airway (LMA)**
- **Nasal cannula** apneic oxygenation (high-flow nasal: Optiflow, THRIVE 30–70 L/min) — extends safe apnea time
- During fiberoptic: endoscopic mask (Patil-Syracuse) for PPV, or swivel adapter on ETT
- Rigid bronchoscope side port
- **Jet ventilation** (specialized airways, beware barotrauma)`,
      },
      {
        heading: "Awake Intubation",
        body: `**Indications:** known/predicted difficult airway, unstable c-spine, severe airway pathology (tumor, abscess, edema).

**Key is topicalization:**
- **Antisialagogue:** glycopyrrolate 0.2 mg IV/IM ~30 min ahead
- **Sedation:** dexmedetomidine, low-dose midazolam, ketamine — preserve spontaneous ventilation
- **Local anesthetic options:**
  - 4% lidocaine **nebulized** (5–10 min)
  - 4% lidocaine **atomized** or via mucosal atomizer
  - Cetacaine spray (benzocaine — methemoglobinemia risk)
  - **Transtracheal injection** (2% lido through cricothyroid membrane)
  - **Superior laryngeal nerve block** (above hyoid bone)
  - **Glossopharyngeal nerve block** (lateral oropharynx)

**Techniques:** flexible bronchoscopy (FOB), video laryngoscopy (awake AWS, GlideScope), retrograde wire, lighted stylet.`,
      },
      {
        heading: "Surgical Airway",
        body: `From an ENT chief resident: *"Even in an emergency, always invest 20 seconds to:"*
- Identify someone to assist
- Position the patient (extend the neck, palpate the cricothyroid membrane)
- Have a 6.0 ETT and scalpel ready

**Cricothyrotomy** (preferred over tracheostomy emergently):
1. Scalpel — vertical skin incision over cricothyroid membrane
2. Horizontal stab through the membrane
3. Bougie introduced caudally
4. Railroad 6.0 ETT over bougie

**Confirm:** EtCO₂, bilateral breath sounds, no subcutaneous emphysema with positive-pressure ventilation.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "fluid-management",
    number: 9,
    category: "Fluids & Blood",
    title: "Fluid Management",
    tagline: "Crystalloids vs colloids, volume assessment, intraoperative strategy.",
    icon: "Droplet",
    color: "from-cyan-500 to-blue-500",
    readMinutes: 8,
    keyPoints: [
      "Body water: 5-15-40 rule — 5% intravascular, 15% interstitial, 40% intracellular (total ~60% body weight, less in females).",
      "Maintenance: 4-2-1 rule (mL/kg/h).",
      "LR is more physiologic than NS (avoids hyperchloremic acidosis); watch K⁺ in renal patients.",
      "Pulse-pressure variation > 10% (in sinus rhythm, PPV with TV > 8 cc/kg, closed chest) = fluid responsive.",
      "Colloid only meaningfully better than crystalloid in select circumstances (large losses, capillary leak, etc).",
    ],
    sections: [
      {
        heading: "Evaluation of Intravascular Volume",
        body: `**History**
- Hypovolemia: vomiting, diarrhea, fever, sepsis, trauma, prolonged NPO
- Hypervolemia: weight gain, edema, AKI, ascites

**Physical exam**
- Hypovolemia: skin turgor, thready pulse, dry mucous membranes, tachycardia, orthostasis, ↓ UOP
- Hypervolemia: pitting edema, rales, wheezing, elevated JVP

**Labs / studies**
- Hypovolemia: rising Hct, contraction alkalosis then metabolic acidosis, urine SG > 1.010, urine Na < 10, urine osm > 450, hypernatremia, BUN:Cr > 10:1
- IVC ultrasound: < 1.7 cm OR > 50% collapse on inspiration → volume responsive
- Hypervolemia: ↑ pulmonary vascular markings on CXR`,
      },
      {
        heading: "Intraoperative Assessment",
        body: `Always **trend** and combine modalities.

- **Vitals:** HR, BP trends; account for PPV and anesthetic effects
- **Pulse oximetry waveform variability** — change with respiration suggests volume responsiveness
- **PVI (Pleth Variability Index):** > 12–16% → volume responsive
- **Urine output:** ADH elevated intraop → less reliable
- **Arterial line:**
  - Serial ABGs (pH, Hct, lytes)
  - **Pulse Pressure Variation (PPV):** = (PP_max − PP_min) / PP_mean
  - PPV > 10% → likely fluid responsive
  - **NOT reliable** if non-sinus rhythm, open chest, no PPV, or TV < 8 mL/kg
- **CVP:** absolute value unreliable; trend may be meaningful
- **PA catheter:** RV failure, pulm HTN, valvular disease, LV dysfunction
- **TEE:** transgastric view best for volume assessment; gold standard in cardiac/liver`,
      },
      {
        heading: "Body Fluid Compartments",
        body: `**Total body water:** 60% of body weight (♂), 50% (♀).

**5–15–40 rule (% body weight):**
- 5% intravascular (~3.5 L in 70 kg)
- 15% interstitial (~10 L)
- 40% intracellular (~28 L)
- 20% extracellular total

**Regulation:**
- **Aldosterone:** ↑ Na reabsorption → ↑ intravascular volume
- **ADH (vasopressin):** ↑ water reabsorption
- **ANP / BNP:** ↑ Na and water excretion`,
      },
      {
        heading: "Crystalloids",
        body: `| Solution | Osm | Na⁺ | Cl⁻ | K⁺ | Ca²⁺ | Buffer | Glucose |
|---|---|---|---|---|---|---|---|
| NS | 308 | 154 | 154 | 0 | 0 | 0 | 0 |
| LR | 273 | 130 | 109 | 4 | 3 | 28 lactate | 0 |
| Normosol/Plasma-Lyte | 294 | 140 | 98 | 5 | 0 | 27 acetate | 0 |
| D5W | 253 | 0 | 0 | 0 | 0 | 0 | 50 g/L |

**NS:** preferred in brain injury/swelling (hyperosmolar) and to dilute pRBCs. Large volumes → hyperchloremic metabolic acidosis → ↓ GFR / AKI risk.

**LR:** more physiologic balanced crystalloid. Lactate → HCO₃⁻ in liver. Caution with K in renal failure. Ca²⁺ theoretically interferes with citrate in pRBCs (debated).`,
      },
      {
        heading: "Colloids",
        body: `**Use cases:**
- Initial volume resuscitation when crystalloid is inadequate or when > 3–4 L would be needed
- ½-life ~3–6 h vs 20–30 min for crystalloid
- Large protein losses / ↓ oncotic pressure (cirrhosis, burns)
- Hemorrhagic shock when blood not available (1 mL colloid per mL blood lost)

**Albumin (5% and 25%)** — pooled donor, heat-treated. Minimal viral risk. Expensive. 5% for hypovolemia; 25% for hypovolemia with fluid/Na restriction.

**Hetastarch (HES)** — rarely used. ↑ PTT, anaphylactoid reactions, platelet dysfunction. Max 15–20 mL/kg/day. **Contraindicated** in coagulopathy, heart failure, renal failure.`,
      },
      {
        heading: "Liberal vs Restrictive Strategy",
        body: `**Volume overload causes:**
- ↑ mortality and length of stay
- Pulmonary and cerebral edema
- Bowel edema → ileus, anastomotic dehiscence
- Coagulopathy from dilution
- Cardiac dysfunction

**Liberal (older paradigm):** generous replacement of insensible losses + "third space" losses.

**Restrictive / goal-directed (modern):** replace ongoing losses; minimize maintenance; use dynamic indices to guide boluses. Particularly in colorectal, hepatobiliary, thoracic surgery.`,
      },
      {
        heading: "Maintenance & Replacement",
        body: `**4-2-1 rule** (Holliday-Segar):
- 4 mL/kg/h for first 10 kg
- 2 mL/kg/h for next 10 kg
- 1 mL/kg/h thereafter

**NPO deficit:** rate × hours NPO. Classical teaching: replace ½ in hour 1, ¼ in hour 2, ¼ in hour 3.

**Surgical losses:** match estimated blood loss 3:1 with crystalloid or 1:1 with colloid/blood (depending on hemoglobin target).`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "transfusion-therapy",
    number: 10,
    category: "Fluids & Blood",
    title: "Transfusion Therapy",
    tagline: "pRBCs, platelets, FFP, cryo, massive transfusion, complications.",
    icon: "Droplets",
    color: "from-red-500 to-rose-600",
    readMinutes: 10,
    keyPoints: [
      "1 unit pRBCs (250–300 mL, Hct ~70%) → ↑ Hgb ~1 g/dL or Hct ~3% in adult.",
      "Pediatric: 10 mL/kg pRBC → Hct +10%.",
      "Do NOT run pRBCs with LR (theoretical clot) or D5W/hypotonic (hemolysis). Use NS or Normosol.",
      "Platelets: usually transfuse if < 50K; < 20K spontaneous bleeding; rarely above 100K.",
      "Massive transfusion: 1:1:1 RBC:FFP:platelets; TXA within 3 hours of injury; calcium for citrate toxicity.",
    ],
    sections: [
      {
        heading: "Packed Red Blood Cells",
        body: `**Composition & storage:**
- Single donor; 250–300 mL; Hct ~70%
- 1 unit adult → ↑ Hgb ~1 g/dL or Hct ~3%
- 10 mL/kg pRBC → Hct +10% in peds
- Stored at 4 °C in CPDA (35 d) or AS-1/AS-3 (Adsol, 42 d)
- Always run with NS or Normosol on a blood-warming pump
- **DO NOT mix with LR** (theoretical citrate-Ca clot) or **D5W/hypotonic** (hemolysis)
- Run through a warmer (Ranger for slow, Belmont or Level 1 for rapid)

**ASA indications:**
1. Hgb < 6 in young healthy patients
2. Usually unnecessary if Hgb > 10
3. At Hgb 6–10, transfuse based on:
   - Ongoing organ ischemia
   - Potential for continued blood loss
   - Volume status
   - Risk factors for inadequate O₂ delivery (myocardial ischemia, advanced age, sepsis)`,
      },
      {
        heading: "Platelets",
        body: `- **Platelet Concentrate (PC):** from one whole-blood donation. 50–70 mL; ↑ plt ~5,000–10,000.
- **"6-pack":** 6 pooled PCs; rarely used now.
- **Apheresis unit:** from one donor; 200–400 mL; ↑ plt ~50,000.

**Storage:** room temperature, 5 days.
- Hang separately on blood pump with NS
- Do NOT run through warmer (heating may injure platelets)
- ABO-incompatible OK; Rh tested only (small RBC contamination — Rh sensitization possible)

**ASA indications:**
1. Rarely if plt > 100,000
2. Usually if plt < 50,000 (spontaneous bleed risk at < 20,000)
3. Between 50–100,000: based on bleeding risk
4. Platelet dysfunction (CPB, anti-platelets, uremia)`,
      },
      {
        heading: "Fresh Frozen Plasma (FFP)",
        body: `- Fluid fraction of whole blood; contains all coagulation factors except platelets
- 1 unit → ↑ clotting factors 2–3%
- ABO-compatible required; Rh-incompatible OK
- AB blood type is universal **donor** for plasma (universal recipient for RBCs)
- Frozen; ~30 min to thaw; use within 24 h of thawing

**ASA indications:**
1. Microvascular bleeding with INR > 2
2. Massive transfusion (before labs available)
3. Urgent reversal of warfarin (or PCC — prothrombin complex concentrate)
4. Known factor deficiency when concentrate unavailable
5. Heparin resistance (antithrombin III deficiency)`,
      },
      {
        heading: "Cryoprecipitate",
        body: `- Fraction that precipitates when FFP is thawed
- Contains **factors I (fibrinogen), VIII, XIII, and vWF**
- 1 unit contains ~5× more fibrinogen than 1 unit FFP
- 0.1 units/kg ≈ ↑ fibrinogen by 100 mg/dL
- Use within 4–6 h after thawing if you want Factor VIII

**ASA indications:**
1. Rarely if fibrinogen > 150 mg/dL
2. Fibrinogen < 100 mg/dL with microvascular bleeding
3. Massive transfusion when fibrinogen unknown
4. Bleeding patients with vWD
5. Congenital fibrinogen deficiency`,
      },
      {
        heading: "Massive Transfusion Protocol",
        body: `**Definition:** > 1 blood volume (~10 units pRBC) in 24 h, OR > 4 units in 1 h with ongoing need.

**Targets:**
- Hgb > 7 (8 if cardiac disease)
- Platelets > 50,000 (100,000 if intracranial/ocular)
- Fibrinogen > 150–200 mg/dL
- INR < 1.5
- Ionized calcium > 1.1 mmol/L
- Temperature > 36 °C
- pH > 7.2

**Strategy:**
- **1:1:1 RBC : FFP : platelets** (early balanced resuscitation)
- **Tranexamic acid:** 1 g over 10 min then 1 g over 8 h (within 3 h of injury)
- **Cryoprecipitate** to keep fibrinogen > 150 (10 units in adult)
- **Calcium chloride** 1 g per 4 units pRBC (citrate toxicity)
- Active warming (forced air, fluid warmer)
- Permissive hypotension (SBP 80–90) in non-TBI patients until source controlled`,
      },
      {
        heading: "Transfusion Equations",
        body: `**Arterial O₂ content:**
CaO₂ = (Hb × 1.36 × SaO₂) + (PaO₂ × 0.003) ≈ 20 mL O₂/dL (normal)

**Allowable blood loss:**
ABL = (Hct_start − Hct_allowed) × EBV / Hct_start

**Volume to transfuse:**
Volume = (Hct_desired − Hct_current) × EBV / Hct_transfused_blood

**Estimated Blood Volume (mL/kg):**
| Group | EBV |
|---|---|
| Premie | 100 |
| Term | 90 |
| < 1 yr | 80 |
| 1–6 yr | 75 |
| Adult male | 70 |
| Adult female | 65 |
| Obese | 60 |`,
      },
      {
        heading: "Transfusion Reactions",
        body: `**Acute hemolytic** — ABO mismatch. Fever, chills, flank pain, hemoglobinuria, hypotension, DIC. Stop transfusion, supportive care, send sample to blood bank.

**Febrile non-hemolytic** — cytokines or anti-leukocyte antibodies. Treat with antipyretics; usually self-limited.

**Allergic / urticarial** — mild itching to anaphylaxis. Diphenhydramine for mild; epinephrine for severe.

**TRALI (Transfusion-Related Acute Lung Injury)** — 4–6 h after transfusion. Donor antibodies vs recipient leukocytes → pulmonary edema. Most common cause of transfusion-related mortality. Supportive care (often need MV).

**TACO (Transfusion-Associated Circulatory Overload)** — volume overload. Diuresis, slow rate, sit patient up.

**Citrate toxicity** — large volume citrated blood. Calcium binding → ↓ ionized Ca → hypotension, prolonged QT. Treat with CaCl₂.

**Hyperkalemia** — old blood, irradiated units, rapid transfusion in neonates. Check K, treat hyperkalemia per protocol.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "hypoxemia",
    number: 11,
    category: "Critical Events",
    title: "Hypoxemia",
    tagline: "Causes, the alveolar gas equation, systematic workup, management.",
    icon: "Activity",
    color: "from-blue-500 to-cyan-500",
    readMinutes: 7,
    keyPoints: [
      "Five causes: low FiO₂, hypoventilation, diffusion impairment, shunt, V/Q mismatch.",
      "Shunt does NOT correct with supplemental O₂; the others do.",
      "PAO₂ = FiO₂ (Patm − PH₂O) − (PaCO₂ / 0.8)",
      "Normal A-a gradient: < 10 (room air), < 60 (100% FiO₂), or < age/4 + 4.",
      "Systematic OR workup: lungs → ETT → circuit → machine → monitors.",
    ],
    sections: [
      {
        heading: "Causes of Hypoxemia",
        body: `| Cause | PaCO₂ | A-a gradient | DLCO | Corrects with O₂? |
|---|---|---|---|---|
| Low inspired O₂ | Normal | Normal | Normal | Yes |
| Hypoventilation | ↑ | Normal | Normal | Yes |
| Diffusion impairment | Normal | ↑ | ↓ | Yes |
| Shunt | Normal | ↑ | Normal | No |
| V/Q mismatch | Normal/↑ | ↑ | Normal | Yes |

**Shunt:** perfusion without ventilation (V/Q = 0). No ↑ pCO₂ until shunt > 50% (chemoreceptor compensation).
**Dead space:** ventilation without perfusion (V/Q = ∞). ↑ pCO₂.`,
      },
      {
        heading: "Key Equations",
        body: `**Alveolar gas equation:**
PAO₂ = FiO₂ (Patm − PH₂O) − (PaCO₂ / 0.8)
= 0.21 × (760 − 47) − (40 / 0.8) ≈ 100 mmHg (room air)

**A-a gradient:**
P(A-a)O₂ = PAO₂ − PaO₂

Normal A-a:
- < 10 mmHg at FiO₂ 0.21
- < 60 mmHg at FiO₂ 1.0
- (age / 4) + 4
- a/A ratio > 0.75

**Normal PaO₂:** 103 − (age / 3)`,
      },
      {
        heading: "Differential — Detail",
        body: `**1. Low inspired O₂:**
- Altitude (normal FiO₂, ↓ barometric pressure)
- Hypoxic gas mixture (crossed gas lines, pipeline failure)

**2. Hypoventilation:**
- Drugs (opioids, benzos, barbiturates)
- Chest wall damage (rib fx splinting)
- Neuromuscular disease (residual NMB, GBS, ALS)
- Obstruction (OSA, mass)
- *Very responsive to supplemental O₂* — high FiO₂ swamps the PaCO₂/0.8 term

**3. Diffusion impairment:**
- ↑ pathway: pulmonary edema, fibrosis
- ↓ surface area: emphysema, pneumonectomy
- ↓ O₂-Hb association rate: high CO, anemia, PE

**4. R-to-L shunt** (does NOT correct with O₂):
- Congenital (TOF, TA, ASD/VSD with Eisenmenger)
- AVM
- Pulmonary fluid (pneumonia, CHF, ARDS, NPPE, TACO, TRALI)
- Atelectasis (mucus plug, GA)
- Endobronchial intubation (mainstem)

**5. V/Q mismatch:**
- COPD, ILD
- Dead space (PE, surgical clamping)
- ↓ CO (MI, CHF)

**Often mixed** — example: COPD + opioid + pneumothorax + anemia + LV dysfunction.`,
      },
      {
        heading: "Hypoxemia in the OR — Systematic Approach",
        body: `Trace a path **from the alveoli back to the machine**.

**1. Listen to the lungs:**
- Atelectasis (rales)
- Pulmonary edema (rales, ↓ BS)
- Bronchospasm (wheeze, shark-fin EtCO₂, ↑ PIP, ↓ TV)
- Mucus plug (↑ PAP, ↓ TV, mucus in ETT, rhonchi)
- Right mainstem (SpO₂ ~90%, ↑ PAP, ↓ TV, unilateral BS — common with insufflation, repositioning)
- Pneumothorax (unilateral BS, ↑ PAP, ↓ TV, HD instability, tracheal deviation)
- Esophageal intubation (no EtCO₂, gastric BS)

**2. Check ETT:** cuff deflation, kink, bite, dislodgement (head turned 180°).

**3. Check circuit:** disconnect at machine, at ETT, gas-sampling line.

**4. Check machine:** inspiratory/expiratory valves, bellows, minute ventilation, FiO₂, pipeline & cylinder pressures.

**5. Check monitors:** confirm with pulse-ox waveform, look at the patient (cyanosis, mottling), check gas analyzer.`,
      },
      {
        heading: "Management",
        body: `Assuming SpO₂ is accurate:

- **100% FiO₂, high flow**
- **Manual ventilation** — assess compliance, leaks, listen
- **Recruitment maneuver** if atelectasis suspected and hemodynamics tolerate (sustained 40 cmH₂O × 30 s, or step-wise PEEP)
- **Auscultate** — confirm bilateral BS, ETT position
- **Bronchodilators** if bronchospasm (albuterol, epi)
- **Fiberoptic bronchoscopy** to assess ETT position, suction
- **Suction** airway and ETT
- **Consider cardiovascular** causes (low CO → ↓ mixed venous O₂)
- Restore volume, RBCs, cardiac output
- Send **ABG/VBG**
- Consider **CXR**`,
      },
      {
        heading: "Differentiating by Ventilator Pressure",
        body: `| Picture | Likely cause |
|---|---|
| ↑ Peak, normal plateau | Resistance: bronchospasm, mucus plug, kinked ETT |
| ↑ Peak AND ↑ plateau | Compliance ↓: PTX, pulm edema, mainstem, pneumoperitoneum, chest wall, trendelenburg |
| Normal peak, ↓ TV/EtCO₂ | Circuit leak, cuff leak |
| ↓ EtCO₂ with HD instability | PE, severe ↓ CO, air embolism |`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "electrolytes",
    number: 12,
    category: "Critical Events",
    title: "Electrolyte Abnormalities",
    tagline: "Potassium, calcium, sodium — anesthetic implications and management.",
    icon: "FlaskConical",
    color: "from-yellow-500 to-amber-500",
    readMinutes: 8,
    keyPoints: [
      "Hyperkalemia EKG progression: peaked T → long PR/low P → wide QRS → sine wave → asystole.",
      "Hyperkalemia treatment: calcium (membrane), bicarb/insulin/albuterol (shift), kayexalate/diuretics/dialysis (remove).",
      "Avoid sux in hyperkalemia, denervation injury, burns > 24 h, prolonged immobility, muscular dystrophy.",
      "Hypocalcemia ECG: prolonged QT. Hypercalcemia: short QT.",
      "Hyponatremia correction: do not exceed 10–12 mEq/L per 24 h (central pontine myelinolysis).",
    ],
    sections: [
      {
        heading: "Hyperkalemia",
        body: `**Severity:**
- Mild: 5.5–6.5 mEq/L
- Moderate: 6.6–7.5
- Severe: > 7.5

**Causes:**
- Renal disease (esp. GFR < 15)
- Drugs: ACEi/ARBs, NSAIDs, K-sparing diuretics, digoxin, β-blockers
- Acidosis, hyponatremia, hypocalcemia
- Hemolysis, transfusion (esp. old pRBCs — K of 50+ in the bag!)
- **Succinylcholine** acute ↑ 0.5–1 mEq/L (greater in susceptible patients)
- Tourniquet, trauma, rhabdo, MH
- *Do not give verapamil with dantrolene*

**EKG progression:**
1. Tall peaked T waves (precordial leads)
2. Long PR, low P-wave amplitude
3. Wide QRS → sine wave → VF / asystole
- K > 7: ascending flaccid paralysis, inability to phonate, respiratory arrest`,
      },
      {
        heading: "Hyperkalemia Treatment",
        body: `**Stabilize membrane (acts fast, brief duration):**
- Calcium gluconate 10% 10 cc IV over 5 min (peripheral OK)
- Calcium chloride 10% 5 cc IV (central line preferred)
- *Avoid Ca in digitalis toxicity → "stone heart"*

**Shift K intracellular (temporary):**
- NaHCO₃ 50–100 mEq IV over 5–10 min
- Regular insulin 10 units IV + D50 25 g (50 mL)
- Albuterol nebulized

**Remove K from body (definitive):**
- Loop or thiazide diuretics
- Kayexalate (sodium polystyrene sulfonate): PO 30 g in sorbitol, PR 50 g in sorbitol
- Dialysis

**Anesthetic considerations:**
- Cancel elective cases if K > 5.5
- Avoid succinylcholine
- EKG monitoring
- Avoid hypoventilation (worsens acidosis → K shift)
- Treat acidosis
- Monitor for ↑ sensitivity to NMBA
- Choose **non-NS fluids** if hyperchloremic acidosis is worsening K`,
      },
      {
        heading: "Hypokalemia",
        body: `**Severity:**
- Mild: 3.1–3.5
- Moderate: < 3 with PACs
- Severe: < 3 with PVCs

**Causes:**
- GI losses (NGT, N/V, diarrhea)
- Lasix, renal tubular acidosis
- Mg deficiency
- Alkalosis (intracellular shift)
- Insulin
- Hypothermia

**Signs:**
- PACs, PVCs, SVT (afib/flutter)
- EKG: flattened/inverted T, U waves, ST depression
- Metabolic alkalosis
- Weakness, ↓ DTRs, ileus
- Digoxin toxicity
- ↑ sensitivity to NMBAs

**Treatment:**
- Acute = cellular shift → reverse cause (e.g., hyperventilation)
- Chronic = total body depletion (1 mEq/L deficit = 175–350 mEq total)
- Peripheral IV: 10 mEq/h
- Central: 10–20 mEq/h
- Life-threatening: 5–6 mEq bolus

Consider cancelling elective surgery if K < 3–3.5 (chronicity matters). Reduce NMBA by 25–50%. Avoid respiratory alkalosis.`,
      },
      {
        heading: "Hypercalcemia",
        body: `**Causes:** hyperparathyroidism, malignancy (lung, ENT, GU, GYN, multiple myeloma), immobilization, AKI, thiazides, lithium.

**Signs:** EKG short QT, HTN, polyuria, "stones, bones, abdominal groans, psychic moans."

**Treatment:** crystalloid bolus + loop diuretic; bisphosphonates; dialysis if severe.

**Anesthetic considerations:** maintain hydration; consider invasive monitoring if Ca > 14; expect resistance to NMBAs.`,
      },
      {
        heading: "Hypocalcemia",
        body: `**Causes:** hypoparathyroidism (post-thyroid/parathyroid surgery), vitamin D deficiency, CKD, pancreatitis, massive transfusion (citrate), sepsis, alkalosis (binds ionized Ca).

**Signs:** Chvostek (facial twitch with facial nerve tap), Trousseau (carpal spasm with BP cuff), perioral numbness, tetany, laryngospasm.
**EKG:** prolonged QT.

**Treatment:** CaCl₂ 1 g IV (central) or Ca gluconate 1–2 g IV (peripheral). Replace Mg.

**Anesthetic considerations:** monitor for QT prolongation, dysrhythmias; expect ↑ sensitivity to NMBAs.`,
      },
      {
        heading: "Hyponatremia",
        body: `**Categorize by volume status:**
- Hypovolemic: GI/renal losses, diuretics
- Euvolemic: SIADH, hypothyroid, glucocorticoid deficiency, TURP syndrome
- Hypervolemic: CHF, cirrhosis, nephrotic syndrome

**Acute (< 48 h)** correction can be faster (cerebral edema risk dominates).
**Chronic** must be corrected slowly to avoid **central pontine myelinolysis**:
- ≤ 10–12 mEq/L in 24 h
- ≤ 18 mEq/L in 48 h

**Severe symptomatic (seizure, coma):** 3% saline 100 mL bolus, may repeat × 2.

**Anesthetic considerations:** elective surgery generally deferred if Na < 130. ↓ MAC. Risk of cerebral edema with overcorrection.`,
      },
      {
        heading: "Summary of EKG Changes",
        body: `| | PR | QRS | QT | T wave |
|---|---|---|---|---|
| ↓ Ca | — | — | prolonged | inversion |
| ↑ Ca | prolonged | widened | shortened | — |
| ↓ K | prolonged | — | — | flat → U |
| ↑ K | prolonged | widened (sine) | — | peaked |
| ↓ Mg | prolonged | widened | prolonged | — |
| ↑ Mg | prolonged | widened | — | peaked |`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "hypothermia",
    number: 13,
    category: "Perioperative Care",
    title: "Hypothermia & Shivering",
    tagline: "Mechanisms, complications, prevention, treatment.",
    icon: "Snowflake",
    color: "from-cyan-500 to-blue-600",
    readMinutes: 6,
    keyPoints: [
      "Hypothermia = core temp < 36 °C.",
      "Phase 1 redistribution hypothermia accounts for most heat loss in the first hour — preoperative skin warming is the best prophylaxis.",
      "Heat loss order (decreasing): radiation > convection > evaporation > conduction.",
      "Hypothermia impairs platelet function and coagulation cascade — part of the 'lethal triad' in trauma.",
      "Shivering ↑ O₂ consumption up to 5×. Treat with active warming, meperidine 12.5–25 mg IV.",
    ],
    sections: [
      {
        heading: "Definition and Measurement",
        body: `**Hypothermia:** core body temperature < 36 °C.

**Core temperature sites:**
- **Nasopharynx** — accurate but epistaxis risk
- **Distal esophagus** — accurate; avoid in stricture / varices
- **Tympanic membrane** — accurate; perforation risk
- **PA catheter thermistor** — gold standard
- **Bladder** — lags during thermal swings, esp. low urine output
- **Rectum** — inaccurate with stool, avoid in neutropenia
- **Skin** — always cooler than core`,
      },
      {
        heading: "Thermoregulation",
        body: `**Afferent:** A-delta (cold) and C (warm) fibers via spinothalamic tract.

**Central control:** preoptic-anterior hypothalamus integrates skin and core inputs.

**Efferent:**
- Behavioral (triggered by skin) — seeking clothing, voluntary movement (suppressed under anesthesia)
- Autonomic (triggered by core) — only 3 mechanisms: shivering, sweating, vascular tone

**Interthreshold range:** narrow temp band between cold-induced and warm-induced responses.
- Normal: ~0.2 °C
- General anesthesia widens it to ~4 °C (20×)
- Regional anesthesia widens it to ~0.8 °C (4×)`,
      },
      {
        heading: "Heat Loss in the OR",
        body: `**In decreasing order of importance:**
1. **Radiation** (60%) — IR emission to cooler surroundings
2. **Convection** (15–30%) — air currents
3. **Evaporation** (~20%) — surgical prep, exposed viscera, ventilation
4. **Conduction** (< 5%) — contact with cold table

**Phases:**
1. **Redistribution hypothermia** — first hour. Vasodilation from anesthetic shifts heat from core to periphery. Drops core temp ~1 °C in 30 min.
2. Heat loss > heat production
3. Steady state (heat balance)`,
      },
      {
        heading: "Benefits of Hypothermia (selective)",
        body: `- Metabolic rate ↓ 8% per 1 °C
- Myocardial protection (↓ O₂ demand)
- CNS protection from ischemic/traumatic injury
- Targeted temperature management (32–36 °C × 24 h) improves outcome after cardiac arrest
- Enables deep hypothermic circulatory arrest for complex aortic surgery
- Possible MH protection`,
      },
      {
        heading: "Drawbacks of Hypothermia",
        body: `- ↑ Infection rates up to 3-fold (impaired neutrophil function, vasoconstriction → ↓ tissue O₂)
- Delayed wound healing
- Coagulopathy (platelet dysfunction, factor enzyme slowing) — part of trauma's **lethal triad**
- ↑ Surgical blood loss and transfusion
- Delayed emergence; prolonged drug action — rewarm before extubation
- Left-shifts O₂-Hb curve → impairs tissue O₂ delivery
- ↓ Inotropy & chronotropy, ↑ EKG intervals, arrhythmias, ↑ SVR
- ↑ Systemic stress response, postoperative shivering, PACU LOS`,
      },
      {
        heading: "Warming Strategies",
        body: `**Active warming:**
- **Forced-air** (Bair Hugger) — most effective
- Heated circulating water pad
- Breathing circuit heating / humidification
- IV fluid warmer (Ranger for slow, Belmont/Level 1 for fast)
- Bladder irrigation with warm fluid
- Heating lamp / ↑ ambient room temperature

**Passive insulation** (less effective):
- Cotton blankets, surgical drapes, "space" blanket

**Best prophylaxis:** **preoperative skin warming for 30–60 min** to ↑ peripheral compartment temperature before vasodilation occurs — minimizes redistribution.`,
      },
      {
        heading: "Shivering",
        body: `- Rhythmic muscular activity to generate heat
- ↑ O₂ consumption up to 5×; ↑ CO₂ production; ↑ catecholamines
- Risk for myocardial ischemia, hypoxemia
- **Treatment:**
  - Active warming
  - **Meperidine 12.5–25 mg IV** (κ-opioid effect on shivering)
  - Alternatives: dexmedetomidine, clonidine, tramadol, magnesium`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "ponv",
    number: 14,
    category: "Perioperative Care",
    title: "Postoperative Nausea & Vomiting",
    tagline: "Apfel risk score, prophylaxis ladder, treatment.",
    icon: "Sparkles",
    color: "from-lime-500 to-emerald-500",
    readMinutes: 6,
    keyPoints: [
      "Apfel score risk factors: female, non-smoker, history of PONV/motion sickness, postop opioids.",
      "0–1 factors: no/single prophylaxis. 2: dual. 3–4: multimodal + TIVA.",
      "Ondansetron is most effective at end of case (not at induction).",
      "Combine agents with DIFFERENT mechanisms (5-HT3 + steroid + NK1 + scopolamine).",
      "Re-dosing the prophylactic agent in PACU is much less effective than choosing a different class.",
    ],
    sections: [
      {
        heading: "Why It Matters",
        body: `- Up to **1/3 of all GA patients** experience PONV without prophylaxis (80% in high-risk).
- Patients rank avoiding PONV **higher than postop pain.**
- Leading cause of delayed PACU discharge and unanticipated hospital admission.
- Risk for aspiration, dehydration, ↑ ICP/CVP, wound dehiscence, suture/mesh disruption, venous bleeding.`,
      },
      {
        heading: "Major Risk Factors",
        body: `**Patient:**
- Female > male
- History of PONV or motion sickness
- Young > old
- Non-smoker > smoker

**Anesthetic:**
- Volatile anesthetics (including N₂O)
- Postoperative opioids
- Neostigmine
- Aggressive hydration (gut edema)

**Surgical:**
- Duration > 2 h
- Type of surgery has *less effect than once taught*; laparoscopic, ENT, neuro, breast, plastics, strabismus all generally high-risk in classic teaching`,
      },
      {
        heading: "Simplified Apfel Score",
        body: `**Count of: Female + Non-smoker + History of PONV/motion sickness + Postoperative opioids.**

| Risk factors | PONV risk |
|---|---|
| 0 | ~10% |
| 1 | ~20% |
| 2 | ~40% |
| 3 | ~60% |
| 4 | ~80% |

**Apfel meta-analysis ORs:**
- Female 2.57
- History of PONV/motion sickness 2.09
- Non-smoking 1.82
- Volatile anesthetics 1.82
- Postop opioids 1.39
- Younger age 0.88 per decade`,
      },
      {
        heading: "Prophylaxis Strategy",
        body: `- **0–1 risk factors:** no prophylaxis or single agent
- **2:** two-drug prophylaxis (5-HT3 + steroid)
- **3:** multimodal — 5-HT3 + steroid + TIVA, ± scopolamine patch
- **4:** aggressive multimodal — TIVA + ≥ 3 agents (5-HT3, steroid, NK1, scopolamine, droperidol)

**Pearls:**
- **Combinations must be different mechanisms** to be additive
- **Do not redose the prophylactic agent** for PACU rescue — choose a different class
- Use **regional anesthesia** over GA where possible
- Use **propofol** for induction; consider TIVA
- Avoid N₂O and high-dose neostigmine`,
      },
      {
        heading: "Antiemetic Classes",
        body: `**5-HT3 antagonists (Ondansetron, Granisetron):** Zofran 4–8 mg IV ~30 min before emergence. SE: headache, QT prolongation. More effective at preventing emesis than nausea.

**Steroids (Dexamethasone):** 4–10 mg IV at induction (NOT awake — causes severe perineal itch). Mechanism unclear. Cheap; for prolonged relief. Use cautiously in DM, sepsis.

**Anticholinergics (Scopolamine patch):** 1.5 mg TD q72h posterior to ear; place 2–4 h before case. SE: dry mouth, blurred vision, urinary retention, confusion in elderly. Warn patients not to touch patch then eye → pupil dilation.

**Dopamine antagonists:**
- **Metoclopramide (Reglan):** 10–20 mg IV; ↑ GI motility; CI in bowel obstruction, Parkinson's; extrapyramidal SE
- **Promethazine (Phenergan):** 12.5–25 mg IV; sedating; H1 antagonist also
- **Prochlorperazine:** 5–10 mg

**Butyrophenones (Droperidol, Haloperidol):** Droperidol 0.625–1.25 mg IV at end of case. Effective but FDA black-box for QT (based on doses 50–100× standard). CI in Parkinson's.

**NK1 antagonists (Aprepitant, Fosaprepitant):** Most effective for refractory PONV and posterior-fossa neuro cases. Expensive; pre-order from pharmacy. PO 3 h before induction.

**Propofol** sub-hypnotic doses (10–20 mg IV PACU rescue) or background TIVA.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "extubation",
    number: 15,
    category: "Airway",
    title: "Extubation Criteria & Delayed Emergence",
    tagline: "When and how to safely remove the tube.",
    icon: "ArrowUpFromLine",
    color: "from-teal-500 to-emerald-500",
    readMinutes: 7,
    keyPoints: [
      "Extubation accounts for 12% of difficult-airway closed-claim cases — plan it like induction.",
      "Routine criteria: stable vitals, ABG/EtCO₂ reasonable, NMB reversed (TOF ratio > 0.9), protective reflexes returned, awake & following commands.",
      "Deep extubation reduces coughing/bleeding/dehiscence but risks laryngospasm during emergence — choose carefully.",
      "Cuff leak < 10–15% with TV 6 mL/kg → significant airway edema, defer extubation.",
      "DDx of delayed emergence: residual drugs (opioid, NMBA, volatile), hypothermia, hypoglycemia/hyperglycemia, electrolytes, hypercarbia, stroke.",
    ],
    sections: [
      {
        heading: "Risk Stratification",
        body: `**Airway risk factors:**
- Known difficult airway
- Airway deterioration (bleeding, edema, trauma, prone/Trendelenburg, large-volume resuscitation)
- Restricted airway access
- Obesity, OSA
- Aspiration risk

**General risk factors:**
- Cardiovascular, respiratory, neuromuscular disease
- Metabolic derangements
- Special surgical requirements (e.g. neck immobility post-fusion)

**DAS Guidelines (2012):**
- **Low risk:** awake vs deep extubation
- **High risk:** awake + advanced strategies (airway exchange catheter, LMA exchange, remifentanil technique) vs postpone vs tracheostomy`,
      },
      {
        heading: "Routine Extubation Criteria",
        body: `1. **Vital signs stable**
   - BP/HR within acceptable range on minimal pressors
   - Temperature > 35.5 °C
   - Spontaneous RR 6–30, SpO₂ > 90%
2. **Reasonable ABG with FiO₂ ≤ 40%**
   - pH ≥ 7.30, PaO₂ ≥ 60 mmHg, PaCO₂ ≤ 50–60, normal lytes
   - EtCO₂ < 60 as surrogate
3. **Adequate NMB reversal**
   - TOF 4/4, ratio > 0.7–0.9, tetany > 5 s
   - *Direct palpation cannot determine ratio > 0.9*
   - Sustained head lift / hand grasp > 5 s (sensitive but not specific)
4. **Respiratory mechanics adequate**
   - Spontaneous TV > 5 mL/kg, VC > 15 mL/kg
5. **Protective reflexes** (gag, swallow, cough) returned*
6. **Awake, alert, follows commands***
7. **Optimize**: 100% O₂, slight reverse Trendelenberg, suction oropharynx, ± IV lidocaine to reduce coughing

*Not required for deep extubation.*`,
      },
      {
        heading: "Deep Extubation",
        body: `**Pros:** ↓ tachycardia, HTN, coughing → ↓ wound dehiscence, bleeding, bronchospasm.

**Cons:** Risk of **laryngospasm** during emergence in transport or PACU.

**Criteria:** adequate depth — no response to pharyngeal suction or jaw thrust, no breath-holding.

**Avoid in:** difficult airway, full stomach / aspiration risk, OSA.`,
      },
      {
        heading: "Causes of Failed Extubation",
        body: `| Cause | Pre-extubation checklist |
|---|---|
| Failure to oxygenate | TV > 5 mL/kg & VC > 15 mL/kg; SpO₂ > 90% on FiO₂ < 0.4 |
| Failure to ventilate | Same TV; reversed NMB; RR 6–30; EtCO₂ < 50–60 |
| Poor secretion clearance | Oropharynx suctioned; gag intact; cough; awake; lateral decubitus if aspiration risk |
| Loss of airway patency | Bite block; alert; cuff leak > 10–15% if edema concern; sniffing/head-up; reduced laryngospasm risk; AEC if high-risk |`,
      },
      {
        heading: "Cuff Leak Test",
        body: `- On volume-control mode, deflate ETT cuff
- In absence of significant edema, you should hear/see a leak
- Calculate **leak = programmed TV − observed expiratory TV**
- Leak < 10–15% of TV → significant airway edema → defer extubation or use AEC + steroid pretreatment`,
      },
      {
        heading: "Delayed Emergence — DDx",
        body: `**Residual drugs:** opioids, benzodiazepines, NMBA (always recheck TOF), volatile (especially if FiO₂ low / low FGF), reversal incomplete.

**Metabolic / electrolyte:**
- Hypoglycemia (esp. peds, diabetics, liver failure)
- Hyperglycemia (HHS, DKA)
- Hyponatremia (TURP syndrome)
- Hypothyroid / hypoadrenal
- Hypothermia
- Hypoxemia, hypercarbia

**Neurologic:**
- Stroke (esp. cardiac/carotid surgery)
- Intracranial hemorrhage
- Seizure with prolonged postictal state
- Central anticholinergic syndrome (atropine, scopolamine) — treat with physostigmine

**Workup:** check TOF, ABG, glucose, lytes, temperature; consider reversal trials (naloxone, flumazenil); if persistent → neuro exam, CT head.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "laryngospasm-aspiration",
    number: 16,
    category: "Critical Events",
    title: "Laryngospasm & Aspiration",
    tagline: "Recognition and rescue of two of the most feared airway events.",
    icon: "Siren",
    color: "from-red-500 to-rose-600",
    readMinutes: 7,
    keyPoints: [
      "Laryngospasm is closure of the vocal cords mediated by the SLN. Pediatrics ~3× more likely than adults.",
      "Larson's maneuver: jaw thrust with bilateral pressure on the mandible anterior to the mastoid + CPAP.",
      "Sux 10–20 mg IV (or IM if no IV) breaks refractory laryngospasm.",
      "Negative pressure pulmonary edema (NPPE) follows laryngospasm in ~0.1% of cases — young healthy males.",
      "Aspiration risk: NPO violations, full stomach, GERD, pregnancy, bowel obstruction, raised ICP, opioids, trauma.",
    ],
    sections: [
      {
        heading: "Laryngeal Anatomy & Innervation",
        body: `Larynx innervated by **CN X (vagus)** via two branches:

**Recurrent Laryngeal Nerve (RLN)**
- Sensory: glottis and below (subglottic mucosa)
- Motor: ALL intrinsic muscles of the larynx **except** the cricothyroid

**Superior Laryngeal Nerve (SLN)**
- **Internal branch**: sensory above the cords (epiglottis, supraglottic mucosa)
- **External branch**: motor to the cricothyroid muscle (adductor — tenses cords)

> Bilateral RLN injury → unopposed SLN activity → vocal cord adduction → airway obstruction (the "anatomic emergency" after thyroidectomy).`,
      },
      {
        heading: "Laryngospasm",
        body: `**Definition:** closure of the true vocal cords (± false cords) from sustained laryngeal muscle contraction. Mediated by the **SLN**.

**Predisposing factors:**
- Stage 2 of anesthesia (excitement / delirium)
- Light anesthesia relative to stimulation
- Mechanical irritants: blood, mucus, vomit, secretions
- Airway device irritation: ETT (RR 12) > LMA (RR 7) > facemask
- Suctioning
- Reactive airway: asthma, eczema, smoking exposure
- **Recent URI** (within 1 month) — RR 3.4
- **Pediatrics ~3× more likely** than adults

**Detection:**
- Inspiratory stridor or silent airway
- ↑ inspiratory effort, tracheal tug, paradoxical chest/abdominal movement
- Poor EtCO₂ tracing, desaturation, bradycardia, central cyanosis`,
      },
      {
        heading: "Laryngospasm Management — Call for Help Early",
        body: `1. **Jaw thrust + head tilt + oral/nasal airway**
   - **Larson's maneuver:** jaw thrust with bilateral pressure on the body of the mandible **anterior to the mastoid process** ("laryngospasm notch")
2. **Suction** oropharynx
3. **CPAP via bag-mask, 100% O₂** — may need pressure ~40 mmHg
4. **Deepen anesthesia:** propofol bolus; consider IV lidocaine 1–2 mg/kg
5. **Succinylcholine 10–20 mg IV** (or 4 mg/kg IM if no IV) — maintain airway with bag-mask or ETT until spontaneous breathing returns
6. **Reintubate** vs prepare for surgical airway
7. **Monitor for NPPE**`,
      },
      {
        heading: "Negative Pressure Pulmonary Edema (NPPE)",
        body: `**Incidence:** ~0.1% of anesthetics.

**Causes:**
- Laryngospasm
- Upper airway obstruction (ETT biting, neck flexion)

**Risk factors:** young (20–40), healthy (ASA I–II), **male** (80%).

**Presentation:**
- Frothy, serosanguinous airway secretions
- ↓ SpO₂, ↓ EtCO₂, hypotension, large A-a gradient
- CXR with pulmonary edema

**Pathogenesis:**
- Negative intrathoracic pressure (up to −100 cmH₂O)
- ↑ RV preload, ↑ pulmonary hydrostatic pressure
- Septum shift → LV diastolic dysfunction → ↑ PCWP
- Hypoxia/hypercarbia/acidosis → HPV and ↑ PVR
- Stress response → ↑ SVR / afterload
- Alveolar-capillary stress failure

**Treatment:** supportive — PEEP, diuresis if needed, often self-limited within 24 h.`,
      },
      {
        heading: "Pulmonary Aspiration",
        body: `**Risk factors:**
- NPO violations
- Full stomach (trauma, recent meal)
- GERD, gastroparesis (DM, autonomic neuropathy)
- Pregnancy (after ~20 weeks)
- Bowel obstruction, ileus
- ↑ ICP, neurologic disease
- Opioids
- Diabetes (gastroparesis)
- Difficult airway with prolonged mask ventilation

**ASA NPO guidelines:**
| Substance | Hours |
|---|---|
| Clear liquids | 2 |
| Breast milk | 4 |
| Infant formula | 6 |
| Light meal | 6 |
| Fatty meal | 8 |

**Prevention:**
- Follow NPO guidelines
- H2 blockers, metoclopramide, non-particulate antacid (Bicitra)
- RSI for full stomach
- Cricoid pressure (controversial)
- Awake intubation when high risk

**Management of suspected aspiration:**
1. Tilt head down/lateral; suction airway
2. Intubate to protect airway
3. Bronchoscopy if particulate matter
4. Lung-protective ventilation; PEEP
5. **Do NOT routinely give steroids or prophylactic antibiotics** — reserved for bacterial superinfection
6. Monitor for ARDS; CXR may lag 24 h`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "oxygen-failure",
    number: 17,
    category: "Monitoring & Equipment",
    title: "Oxygen Failure in the OR",
    tagline: "Pipeline & cylinder safety, what to do when the wall O₂ fails.",
    icon: "AlertTriangle",
    color: "from-orange-500 to-amber-500",
    readMinutes: 6,
    keyPoints: [
      "Daily machine check includes auxiliary O₂ cylinder, pipeline pressure ≥ 50 psi, FiO₂ analyzer calibration.",
      "E-cylinder O₂: 660 L at 1900 psi. Tank time (min) = PSI ÷ 3 ÷ flow (L/min).",
      "PISS (Pin Index Safety System) prevents attaching the wrong gas cylinder.",
      "If O₂ fails: notify team, disconnect from machine, ventilate with AMBU + room air or backup tank — NOT the machine auxiliary (same source).",
      "O₂ flush is inoperative without O₂ supply.",
    ],
    sections: [
      {
        heading: "Etiology of O₂ Failure",
        body: `**Loss of pipeline O₂:**
- Exhaustion of central O₂ supply
- Obstruction of central O₂ supply line
- OR O₂ shutoff valve closed
- Disconnection of hose
- Failure of O₂ regulator in machine

**Faulty O₂ supply:**
- Crossed pipelines during construction
- Incorrect gas hose connection
- Non-O₂ cylinder at the O₂ yoke
- Wrong gas in the O₂ cylinder
- Broken flowmeter`,
      },
      {
        heading: "Daily Pre-Anesthesia Machine Check",
        body: `- Auxiliary O₂ cylinder + AMBU available and functioning
- Pipeline gas pressure ≥ 50 psi
- Spare O₂ cylinder mounted on machine > 50%
- FiO₂ analyzer calibrated (should read 21% sampling room air); low-O₂ alarm audible
- Vaporizers filled, capped
- Circuit leak test, ventilator, scavenging system`,
      },
      {
        heading: "Cylinder Reference",
        body: `| Gas | E-Cylinder Capacity | Pressure (psi) | Color (USA) | Form |
|---|---|---|---|---|
| O₂ | 660 L | 1900 | Green | Gas |
| Air | 625 L | 1900 | Yellow | Gas |
| N₂O | 1590 L | **745** | Blue | Liquid + gas |
| N₂ | 650 L | 1900 | Black | Gas |

**N₂O is stored as a liquid** — pressure stays at 745 until ~1/4 full; weigh the tank to assess.

**Tank time:** Time (min) = PSI ÷ 3 ÷ flow (L/min). E.g., O₂ at 430 psi running 5 L/min → 430 ÷ 3 ÷ 5 = 29 min.`,
      },
      {
        heading: "Safety Systems",
        body: `**Supply side:**
- **Color-coded gas tanks** (green = O₂ in US)
- **DISS (Diameter Index Safety System):** non-interchangeable threaded connectors at the wall outlet
- **PISS (Pin Index Safety System):** unique pin pattern on cylinder yoke
- **Quick connects** for portable hoses

**Anesthesia machine:**
- **Flowmeter arrangement** with O₂ closest to FGF outlet (Datex-Ohmeda, Draeger) → leak in O₂ flowmeter is hypoxic risk; leak in air/N₂O flowmeter is NOT (the mixture won't be hypoxic)
- **O₂:N₂O proportioning** ("hypoxic guard") — prevents FiO₂ < 25% with N₂O via mechanical, pneumatic, or electronic linkage
- **Oxygen Supply Failure Protection Device** ("fail-safe valve"): if O₂ pressure falls < 30 psi, N₂O cannot flow AND alarm sounds

> Caveats: Proportioning can still deliver hypoxic mixtures with incorrect supply gas connections, defective components, downstream leaks, or addition of helium.`,
      },
      {
        heading: "Detection",
        body: `- Pressure gauges fall (pipeline, tank)
- Low O₂ alarms (supply failure, FiO₂ analyzer)
- Flowmeters fall (O₂ and other gases)
- O₂ flush inoperative
- Bellows fail
- Apnea alarms (spirometer, capnograph)
- Increasing O₂ flow makes the problem **worse** (drains the supply)
- Hypoxemia, hypercarbia, arrhythmias, bradycardia, arrest`,
      },
      {
        heading: "Management",
        body: `1. **Notify** the surgeon, **call for help**, use the emergency manual.
2. **Verify** the problem.
3. **Disconnect** from the machine and **ventilate with an AMBU bag and either room air or a backup tank**.
   - *Do NOT use the machine auxiliary O₂ — same source!*
4. **Switch to TIVA** if anesthesia must be maintained.
5. **Open the E-cylinder O₂** on the machine if pipeline is the problem (and pipeline is disconnected from supply).
6. Calculate remaining tank time to plan.
7. Get patient to an OR with working O₂ as soon as feasible.

**Commonly missed steps:**
- Identifying empty O₂ E-cylinder before case start
- Identifying easily accessible AMBU and backup cylinder`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "anaphylaxis",
    number: 18,
    category: "Critical Events",
    title: "Anaphylaxis",
    tagline: "Recognition, immediate management, secondary treatment.",
    icon: "AlertOctagon",
    color: "from-red-600 to-pink-600",
    readMinutes: 7,
    keyPoints: [
      "Anaphylaxis (IgE-mediated, prior exposure required) and anaphylactoid (direct mast-cell, can be first exposure) are clinically identical and treated identically.",
      "Most reactions occur within 3 minutes of trigger; faster = more severe.",
      "First-line: stop trigger, call for help, 100% O₂, fluid bolus, EPINEPHRINE (10–100 mcg IV titrated).",
      "NMBAs cause > 50% of intraoperative anaphylaxis. Latex risk in spina bifida, healthcare workers, tropical fruit allergy.",
      "Send tryptase 1–2 h and 24 h after event; refer to allergy.",
    ],
    sections: [
      {
        heading: "Overview",
        body: `- ~10% of all anesthetic complications; 3.4% mortality
- >90% of reactions within 3 min of trigger
- Faster onset = more severe course
- Multiple drugs given simultaneously → identifying the culprit is difficult
- Vasoactive mediator release → ↑ secretions, ↑ bronchial tone, ↑ capillary permeability, ↓ vascular tone`,
      },
      {
        heading: "Anaphylaxis vs Anaphylactoid",
        body: `**Anaphylaxis** (IgE-mediated, type I hypersensitivity)
- Prior sensitization required → antigen-specific IgE on mast cells / basophils
- Re-exposure → IgE cross-linking → degranulation
- **Independent of dose**

**Anaphylactoid**
- Direct mast cell/basophil activation OR complement activation — non-IgE
- Can occur on first exposure
- **Dose-dependent**

**Treatment is identical** for both.`,
      },
      {
        heading: "Signs & Symptoms by System",
        body: `| System | Symptoms (awake) | Signs (asleep) |
|---|---|---|
| Respiratory | Dyspnea, chest tightness | Hypoxia, pulmonary edema, wheezing, ↓ compliance, laryngeal edema, ↑ PIPs |
| Cardiovascular | Dizziness, ↓ LOC | Hypotension, tachycardia, dysrhythmia, arrest, pulmonary HTN |
| Cutaneous | Itching | Flushing, hives, periorbital / perioral edema |
| Renal | — | ↓ Urine output |
| GI | Nausea, vomiting, diarrhea | — |
| Hematologic | — | DIC |

Can have variable presentations with some or all of these.`,
      },
      {
        heading: "Common Triggers",
        body: `**Top intraoperative triggers:**
- **Neuromuscular blockers** — > 50% of intraop anaphylaxis. Rocuronium incidence quoted 1/3,500 to 1/445,000.
- **Antibiotics** — β-lactams (cephalosporins, penicillins)
- **Latex** — second most common
- **Chlorhexidine** (rising incidence)
- Colloids: HES 6% > albumin
- Sugammadex (~1/35,000)
- Contrast agents
- Blood products

**Latex allergy** — high risk:
- Healthcare workers (frequent exposure)
- Children with spina bifida (multiple urogenital procedures)
- Tropical fruit allergy (banana, kiwi, avocado, mango, passion fruit, chestnut)
- Multiple prior surgeries / catheterizations`,
      },
      {
        heading: "Management — Acute Phase",
        body: `1. **STOP the offending antigen** (NMBA, antibiotic, latex, colloid, blood, contrast)
2. **Notify surgeon AND call for help**
3. **100% FiO₂**
4. **Discontinue vasodilating agents** (volatile, narcotic infusion); give midazolam/ketamine for amnesia if hypotensive
5. **IV fluid bolus** — 2–4 L or more (vasodilation, capillary leak)
6. **EPINEPHRINE** (α1 supports BP, β2 bronchodilates)
   - **10–100 mcg IV bolus**, escalate as needed
   - **Infusion** 0.02–0.3 mcg/kg/min
   - **0.3–0.5 mg IM anterolateral thigh** if no IV, repeat q5–15 min
   - **ACLS doses** (0.1–1 mg) for cardiovascular collapse
7. **Vasopressin** bolus or **norepinephrine** infusion if escalating
8. Treat bronchospasm with **albuterol** and epinephrine`,
      },
      {
        heading: "Management — Secondary Phase",
        body: `- **Intubate** especially if angioedema
- **Invasive monitoring:** large-bore IVs, arterial line, CVC, foley
- After stable:
  - **H1 blocker:** diphenhydramine 0.5–1 mg/kg IV
  - **H2 blocker:** ranitidine (theoretical benefit; low harm)
  - **Steroid:** hydrocortisone 200 mg IV or methylprednisolone 1–2 mg/kg — to ↓ airway edema and prevent biphasic recurrence

**Diagnostics:**
- **Tryptase**: peaks at 30–60 min, draw at 1–2 h and 24 h
- Refer to **allergist** for skin testing 4–6 weeks later

**Document and notify** the patient; MedicAlert; communicate findings to PCP and pharmacy.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "local-anesthetics",
    number: 19,
    category: "Pharmacology",
    title: "Local Anesthetics",
    tagline: "Mechanism, classification, doses, LAST management.",
    icon: "Crosshair",
    color: "from-emerald-500 to-teal-600",
    readMinutes: 7,
    keyPoints: [
      "LA = weak bases; nonionized lipid-soluble form crosses membrane; ionized form binds intracellular α-subunit of Na channel.",
      "Speed of onset ~ pKa (closer to physiologic pH = faster). Potency ~ lipid solubility. Duration ~ protein binding.",
      "Maximum doses: lidocaine 4.5 (7 with epi), bupivacaine 2.5 (3 with epi), ropivacaine 3 mg/kg.",
      "Bupivacaine is more cardiotoxic than lidocaine (high binding to inactivated Na channels, slow dissociation).",
      "LAST: lipid emulsion 1.5 mL/kg bolus then 0.25 mL/kg/min; ↓ epi to ≤ 1 mcg/kg; AVOID vasopressin, CCB, β-blocker, LA antiarrhythmics.",
    ],
    sections: [
      {
        heading: "Mechanism of Action",
        body: `LAs disrupt nerve conduction by **blocking voltage-gated sodium channels**:
- Reversibly bind the **intracellular α-subunit**
- Inhibit Na⁺ influx → block action potential
- Resting and threshold potentials unchanged

**Steps:**
1. **Nonionized (base, lipid-soluble) form** crosses the axonal lipid bilayer
2. Re-equilibrates in axoplasm
3. **Ionized (cationic) form** binds the Na channel

| Characteristic | Determined by |
|---|---|
| Speed of onset | pKa (degree of ionization) and concentration |
| Potency | Lipid solubility |
| Duration of action | Protein binding (α1-AAG) |

> Procaine and chlorprocaine have HIGH pKa but fast onset due to high concentration use.
> In infected (acidic) tissue, pKa is further from environmental pH → slower onset.`,
      },
      {
        heading: "Categories",
        body: `**Esters** — metabolized by plasma pseudocholinesterase / RBC esterase
- Cocaine, **2-chloroprocaine**, procaine, tetracaine
- Methylparaben preservative → PABA → allergic reactions in small percentage

**Amides** ("i" before "-caine" — *AmIde has 2 I's*) — metabolized by **liver** (aromatic hydroxylation, N-dealkylation, amide hydrolysis)
- **Lidocaine, bupivacaine, ropivacaine, mepivacaine, etidocaine, levobupivacaine**

| Amide | pKa | | Ester | pKa |
|---|---|---|---|---|
| Lidocaine | 7.9 | | Procaine | 8.9 |
| Mepivacaine | 7.6 | | Chloroprocaine | 8.7 |
| Prilocaine | 7.9 | | Tetracaine | 8.5 |
| Bupivacaine | 8.1 | | | |
| Ropivacaine | 8.1 | | | |`,
      },
      {
        heading: "Maximum Doses",
        body: `| Drug | Onset | Max (mg/kg) | Max with Epi |
|---|---|---|---|
| Lidocaine | Rapid | 4.5 | 7 |
| Mepivacaine | Medium | 5 | 7 |
| Bupivacaine | Slow | 2.5 | 3 |
| Ropivacaine | Slow | 3 | — |
| Tetracaine | Slow | 1.5 | — |
| Chloroprocaine | Rapid | 10 | 15 |

> **Bupivacaine 0.25%** (2.5 mg/mL) at max 2.5 mg/kg → max **1 mL/kg** (70-kg patient ≈ 70 mL).`,
      },
      {
        heading: "Routes of Delivery",
        body: `- **Topical** (cocaine, EMLA, viscous lidocaine)
- **IV** (systemic lidocaine infusion 1 mg/kg/h):
  - Anti-inflammatory
  - Blunts response to laryngoscopy
  - ↓ Postop pain and opioid use
  - Reduces MAC up to 40%
- **Epidural / spinal** (neuraxial)
- **Perineural** (regional nerve blocks)
- Small diameter A-delta and myelinated nerves are most susceptible → sensory loss before motor`,
      },
      {
        heading: "LAST — Local Anesthetic Systemic Toxicity",
        body: `**Vascularity of injection site (ICEBALLS, decreasing absorption):**
**I**ntravenous > **I**ntercostal > **C**audal > **E**pidural > **B**rachial > **A**xillary > **L**ower-extremity > **L**eg subcutaneous > **S**ubcutaneous

**Risk depends on:**
1. Dose
2. Drug's intrinsic kinetics
3. Addition of vasoactive (epi)

**Bupivacaine** is more cardiotoxic than equipotent lidocaine — higher binding to resting/inactivated Na channels and slower dissociation during diastole.

**CNS toxicity (progression):**
Lightheadedness → tinnitus → tongue numbness → metallic taste → CNS excitation (block inhibitory pathways first) → CNS depression → seizure → coma

**CV toxicity:**
Bradycardia → ventricular dysrhythmias → ↓ contractility → CV collapse (refractory in bupivacaine).`,
      },
      {
        heading: "LAST Management",
        body: `**1. Get help; manage airway with 100% O₂ — hypoxemia and acidosis worsen toxicity.**

**2. Stop seizures** with benzodiazepine. Small doses of propofol if benzo unavailable, but avoid propofol if CV unstable.

**3. Lipid emulsion 20%:**
- **1.5 mL/kg bolus over 1 min** (~100 mL in adult)
- **Infusion 0.25 mL/kg/min** (up to 10 mL/kg over 30 min)
- Repeat bolus q3–5 min for persistent cardiovascular collapse

**4. Modified ACLS:**
- ↓ epinephrine doses to **≤ 1 mcg/kg**
- **AVOID** vasopressin, calcium channel blockers, β-blockers, local-anesthetic antiarrhythmics (lidocaine, procainamide)
- Amiodarone preferred for ventricular arrhythmia

**5. If refractory:** cardiopulmonary bypass / ECMO.

Continue monitoring at least 4–6 h after resolution.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "malignant-hyperthermia",
    number: 20,
    category: "Critical Events",
    title: "Malignant Hyperthermia",
    tagline: "Recognition, dantrolene dosing, supportive care.",
    icon: "Flame",
    color: "from-red-600 to-orange-600",
    readMinutes: 8,
    keyPoints: [
      "Triggers: all halogenated volatiles + succinylcholine. N₂O does NOT trigger.",
      "Most sensitive & specific early sign: rising EtCO₂ unexplained by other causes. Hyperthermia is LATE.",
      "Dantrolene 2.5 mg/kg IV every 5 min until reaction abates (often up to 10 mg/kg). Cumulative doses up to 30 mg/kg may be needed.",
      "MHAUS hotline: 1-800-MH-HYPER (1-800-644-9737).",
      "Past mortality 70% → now ~5% with dantrolene + early recognition.",
    ],
    sections: [
      {
        heading: "Basics",
        body: `**Definition:** hypermetabolic crisis in susceptible patients exposed to trigger agents (halogenated volatiles or succinylcholine).

**Mechanism:** abnormal Ca²⁺ release from sarcoplasmic reticulum via mutant **RYR1 receptor** → sustained skeletal muscle contraction → ↑ ATP usage → ↑ O₂ consumption, ↑ CO₂, severe lactic acidosis, hyperthermia, rhabdomyolysis, hyperkalemia, arrhythmia.

**Genetics:** autosomal dominant with variable penetrance. **80% of cases involve RYR1 mutations**; > 80 genetic defects identified.

**Incidence:** 1:15,000 pediatric, 1:40,000 adult. Highest in upper Midwest US (gene prevalence).

> Up to 50% of MH episodes occur in patients with prior uneventful anesthetic exposure.

**Risk factors:** personal/family hx, pediatric age, myopathies (Central Core, King-Denborough), unexplained fevers/cramps, exercise-induced rhabdo, trismus on induction (precedes 15–30% of MH).`,
      },
      {
        heading: "Triggers and Sequence",
        body: `**Triggers:**
- All halogenated volatiles (sevoflurane, isoflurane, desflurane, halothane, enflurane) — NOT N₂O
- **Succinylcholine**

**Sequence:**
1. ↑ Cytoplasmic free Ca²⁺
   - **Masseter rigidity (trismus)** — esp. after sux
   - Generalized rigidity (absolute MH association if present)
2. Hypermetabolism
   - **↑ EtCO₂** (most sensitive and specific early sign)
   - Sympathetic surge: ↑ HR, ↑ BP
   - ↑ O₂ consumption (↓ ScvO₂); compensatory tachypnea
   - ↑ heat production (LATE sign; temp can rise 1–2 °C every 5 min)
   - ↑ ATP utilization → metabolic acidosis
3. Cell damage & rhabdomyolysis
   - Leakage of K⁺, myoglobin, CK; dark urine
4. Systemic complications
   - Acute renal failure, hyperkalemia, arrhythmia, DIC, compartment syndrome, cerebral edema, death`,
      },
      {
        heading: "Differential Diagnosis",
        body: `| Diagnosis | Clue |
|---|---|
| Neuroleptic Malignant Syndrome | Anti-dopaminergic exposure or Parkinson's withdrawal; develops over days |
| Thyroid storm | Often hypokalemic, h/o thyroid disease |
| Sepsis | Fever, tachypnea, tachycardia, met acidosis — slower |
| Pheochromocytoma | ↑ HR, ↑ BP, normal EtCO₂ and temperature |
| Drug-induced | Ecstasy, cocaine, amphetamines, PCP, LSD |
| Serotonin syndrome | MAOI + meperidine, MAOI + SSRI |
| Iatrogenic hyperthermia | Excessive warming, sepsis blankets |
| Hypercarbia from CO₂ insufflation | Resolves with abdominal release |
| Inadequate ventilation | Look at minute ventilation |`,
      },
      {
        heading: "Management — Call MHAUS 1-800-MH-HYPER",
        body: `**1. STOP the trigger**
- Stop all volatile agents and succinylcholine
- Disconnect the vaporizer; switch to high-flow O₂ 10 L/min via clean circuit (or charcoal filter — change CO₂ absorbent)
- Switch to TIVA with propofol

**2. Hyperventilate** with 100% O₂; ↑ minute ventilation 2–3× to blow off CO₂

**3. Get help — call MHAUS (1-800-MH-HYPER / 1-800-644-9737)**

**4. Dantrolene**
- **2.5 mg/kg IV** bolus every 5 min until reaction abates (often up to 10 mg/kg)
- Cumulative doses up to 30 mg/kg may be required
- **Ryanodex** (new formulation): 250 mg vial reconstituted in 5 mL sterile water — fast prep, fewer vials
- Old dantrolene: 20 mg vial + mannitol in 60 mL sterile water — slow to prepare, need many staff
- Continue **1 mg/kg IV q6 h × 24–48 h** after acute event

**5. Cool the patient**
- Cold saline IV (avoid LR)
- Ice packs to axillae, groin
- Lavage open cavities, NG, bladder
- Stop cooling at 38 °C to avoid hypothermia

**6. Treat hyperkalemia**
- Calcium, insulin/glucose, bicarbonate
- **NOT calcium channel blockers** with dantrolene — risk of cardiovascular collapse

**7. Treat dysrhythmias** with standard antiarrhythmics (avoid CCBs)

**8. Acid-base** with bicarbonate

**9. Maintain urine output** > 1 mL/kg/h to prevent myoglobinuria-induced renal injury (consider mannitol, furosemide)

**10. ICU transfer** for 24–48 h monitoring (recrudescence can occur)`,
      },
      {
        heading: "Postoperative Care",
        body: `- 24–48 h ICU monitoring (recrudescence in 25%)
- Repeat lytes, CK, myoglobin, BUN/Cr, coags
- Refer for MH testing (caffeine-halothane contracture test or genetic testing)
- Issue **MedicAlert** bracelet
- Counsel family — first-degree relatives have 50% risk → genetic testing
- Add to MHAUS registry`,
      },
      {
        heading: "Anesthesia for Known MH-Susceptible Patient",
        body: `- **Trigger-free anesthetic:** TIVA (propofol, opioid, non-depolarizing NMBA, dexmedetomidine)
- Run anesthesia machine on high-flow O₂ × 10–90 min depending on machine (changes have made this faster); follow MHAUS recommendations for specific machine
- Remove vaporizers, change CO₂ absorbent and circuit, fresh tubing/bag
- Dantrolene available in OR
- No pretreatment with dantrolene needed (modern recommendation)
- Standard monitoring + EtCO₂, temperature
- Acceptable for outpatient surgery if uneventful 4–6 h observation post-op`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "preop-evaluation",
    number: 21,
    category: "Perioperative Care",
    title: "Pre-operative Evaluation",
    tagline: "Chart review, anesthetic planning, device management.",
    icon: "ClipboardCheck",
    color: "from-indigo-500 to-violet-500",
    readMinutes: 5,
    keyPoints: [
      "Review prior anesthesia records — single most useful predictor of difficult airway is prior difficulty.",
      "Build the anesthetic around the patient AND the surgery: position, monitoring, lines, blood products, induction, maintenance, emergence, disposition.",
      "Pacemaker/AICD: check site of surgery, dependence, last interrogation, magnet effect.",
      "Order equipment night before for first cases — anesthesia techs respond to requests placed by ~10 pm.",
      "ASA NPO guidelines: 2/4/6/6/8 (clear/breast milk/formula/light meal/fatty meal).",
    ],
    sections: [
      {
        heading: "Chart Review Checklist",
        body: `- History & physical, current problem list, medications (esp. anticoagulants, anti-hypertensives, diabetes meds)
- Relevant comorbidities and recent decompensations
- Imaging, labs, EKG, ECHO, stress test, PFTs, Holter/Zio
- **Anesthesia tab** in chart review — prior anesthetics, airway notes, intraop events
- Device interrogations (PPM/ICD)
- Allergies (drug, food, latex, environmental)
- Social: tobacco, alcohol, substances
- Functional capacity (METs — > 4 generally adequate)
- Anesthetic complications in family (MH, pseudocholinesterase deficiency)`,
      },
      {
        heading: "Anesthetic Plan — Framework",
        body: `**1. Procedure**
- Surgeon, expected duration, positioning (steep T-burg / reverse T-burg → hemodynamic impact)
- Surgical approach and expected blood loss

**2. Monitoring**
- Standard ASA monitors
- Arterial line / central line / PA catheter / TEE if indicated
- Neuromonitoring (SSEP/MEP) — affects choice of TIVA
- BIS/Sedline for processed EEG

**3. Blood products**
- T&S vs cross-match based on EBL
- Order set: "Intra-operative Blood Product and Lab Orders"
- Separate orders to prepare and to send to OR ("call slip")

**4. Induction**
- RSI vs standard
- Agent choice given comorbidities
- Airway: primary plan + backup plan(s)

**5. Maintenance**
- Inhalational vs TIVA
- Analgesia plan (opioid, regional, multimodal)
- Anticipated pressors / fluids / labs

**6. Emergence & disposition**
- Smooth vs controlled emergence (e.g., neurosurgery)
- Extubation criteria
- PACU vs ICU vs floor`,
      },
      {
        heading: "Ordering Extra Equipment",
        body: `- **Pre-op navigator → Pre-op eval → Equipment requests**
- Requests placed by **~10 pm** the night before for first cases will be set up by anesthesia techs for AM start
- Equipment commonly requested: video laryngoscope, fiberoptic, special-size LMA/ETT, ultrasound, BIS, A-line/CVC kits, rapid infuser, cell saver`,
      },
      {
        heading: "Pacemakers & ICDs",
        body: `**Key questions:**
- Site of surgery — above umbilicus → risk of EMI interference
- Is patient pacemaker dependent?
- Type of device, last interrogation
- What does placing a magnet do? (varies by manufacturer)
- Does device need reprogramming pre/post-op?

**General principles:**
- Bipolar electrocautery preferred over monopolar
- If monopolar required: short bursts, lowest energy, grounding pad away from device, return pathway not crossing device
- For ICDs: a magnet over the device **disables anti-tachy therapy** (does NOT change pacing)
- For pacemakers: a magnet usually places into **asynchronous mode** — useful if pacing-dependent and EMI is expected
- Have **external pacing pads** and **defibrillator** in room
- Contact device representative or pacemaker service when in doubt`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "or-setup",
    number: 22,
    category: "Monitoring & Equipment",
    title: "OR Setup",
    tagline: "Monitors, infusion pumps, drip concentrations, airway gear.",
    icon: "Settings2",
    color: "from-slate-500 to-zinc-500",
    readMinutes: 6,
    keyPoints: [
      "Set BP cuff to cycle q1 min for induction.",
      "Set patient age and weight on the anesthesia machine — MAC is calculated automatically.",
      "Use lean body weight for drips in obese patients (IBW = 22 × height²m, LBW = IBW × 1.2).",
      "Common drip concentrations: phenylephrine 100 mcg/mL; norepinephrine/epinephrine 16 mcg/mL; vasopressin bolus 1 U/mL.",
      "Have ETT + stylet + 10 mL syringe + laryngoscope + suction + AMBU ready before every case.",
    ],
    sections: [
      {
        heading: "Monitor Setup",
        body: `- BP cuff: **cycle q1 min** for induction (then q3–5 min once stable)
- Add waveforms for arterial line, CVP, PAP as needed
- Patient age and weight entered on monitor → machine auto-calculates MAC
- Perfusion index = ratio of pulsatile to non-pulsatile flow; low PI = poor perfusion
- **PVI** (or PPV if A-line) as surrogate for volume responsiveness
- 500P ORs can route C-MAC video to room monitors`,
      },
      {
        heading: "Alaris Infusion Pump Basics",
        body: `- Power on → Options → Anesthesia mode → Enable
- Channel select → **Guardrails drugs** (common meds) → enter patient weight → start rate
- If not in Guardrails, search "All drugs"
- Use **lean body weight** in obese patients (IBW = 22 × height²m; LBW = IBW × 1.2)
- Pause to leave drips on standby
- With ≥ 2 simultaneous drips, request **fluid carrier** from anesthesia tech`,
      },
      {
        heading: "Drip Concentrations — Opioids & Sedation",
        body: `| Medication | Dilution | Typical infusion |
|---|---|---|
| Remifentanil | 1 mg / 20 mL = **50 mcg/mL** | 0.05–0.2 mcg/kg/min |
| Sufentanil | 250 mcg / 50 mL = **5 mcg/mL** | 0.1–0.5 mcg/kg/HR (often 0.3 → 0.2 → 0.1) |
| Dexmedetomidine | 0.2 mg / 50 mL = **4 mcg/mL** | Load 1 mcg/kg over 10 min; 0.2–1 mcg/kg/h |
| Lidocaine | 500 mg (50 mL of 1%) into 50 mL syringe = **10 mg/mL** | 1 mg/kg/h; check plasma level q8h |`,
      },
      {
        heading: "Drip Concentrations — Pressors & Inotropes",
        body: `| Medication | Dilution | Typical infusion |
|---|---|---|
| Phenylephrine | 40 mg / 250 mL = **160 mcg/mL** (or 10 mg / 100 mL = 100 mcg/mL) | 0.2–1 mcg/kg/min |
| Norepinephrine | 4 mg / 250 mL = **16 mcg/mL** | 0.02–0.1 mcg/kg/min |
| Vasopressin | 60 U / 100 mL = **0.6 U/mL** (bolus syringe always **1 U/mL**) | 0.01–0.04 U/min |
| Epinephrine | 4 mg / 250 mL = **16 mcg/mL** | 0.02–0.1 mcg/kg/min |
| Dopamine | 400 mg / 250 mL = **1600 mcg/mL** | 1–10 mcg/kg/min |
| Milrinone | 20 mg / 100 mL = **200 mcg/mL** | Load 50 mcg/kg over 10 min; 0.125–0.5 mcg/kg/min |`,
      },
      {
        heading: "Drip Concentrations — Antihypertensives",
        body: `| Medication | Dilution | Typical infusion |
|---|---|---|
| Clevidipine | 25 mg / 50 mL = **0.5 mg/mL** | 1–20 mg/h (bolus 0.05 mg) |
| Esmolol | 2500 mg / 250 mL = **10 mg/mL** | 50–300 mcg/kg/min |
| Nicardipine | 25 mg / 250 mL = **0.1 mg/mL** | 1–15 mg/h (bolus 50–100 mcg) |
| Nitroglycerin | 50 mg / 250 mL = **200 mcg/mL** | 0.1–1 mcg/kg/min |
| Nitroprusside | 50 mg / 250 mL = **200 mcg/mL** | 0.1–1 mcg/kg/min |`,
      },
      {
        heading: "Minimum Airway Setup",
        body: `Before EVERY case have ready:
- **ETT with stylet** and 10 mL syringe for cuff
- **Video and/or standard laryngoscope** with appropriate blades
- **Suction** (Yankauer) with working canister
- **Bag-mask** with reservoir + O₂
- Backup ETT (smaller and bigger)
- **LMA** as backup
- **Oral and nasal airways**
- **Capnography** confirmed working
- Difficult airway cart known location`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "perioperative-abx",
    number: 23,
    category: "Perioperative Care",
    title: "Perioperative Antibiotics",
    tagline: "Right drug, right dose, right time, right re-dose interval.",
    icon: "Shield",
    color: "from-emerald-500 to-green-500",
    readMinutes: 7,
    keyPoints: [
      "Give within 60 minutes (ideally 15–45 min) before incision. Vanco and cipro need to start ~1 h earlier (slow infusion).",
      "Re-dose: cefazolin q4h, vanco q infusion, cefoxitin q2h, clinda q6h, metronidazole q6h.",
      "Cefazolin: < 120 kg → 2 g, > 120 kg → 3 g.",
      "Give entire dose BEFORE tourniquet inflation.",
      "Penicillin allergy: most can safely receive cefazolin (cross-reactivity ~1%); confirm severity of reaction.",
    ],
    sections: [
      {
        heading: "Why Antibiotic Prophylaxis Matters",
        body: `- Surgical site infection is the most common postoperative adverse event
- Medicare no longer reimburses for certain SSIs (mediastinitis post-cardiac, post-bariatric, some ortho)
- Best practice combines:
  - **Sterility** (surgeon, instruments, drapes)
  - **Skin prep** (clipping > shaving; let antiseptic dry)
  - **Timely antibiotic prophylaxis**`,
      },
      {
        heading: "Timing of Prophylaxis",
        body: `- **Within 60 minutes** before surgical incision (ideally **15–45 min**) for adequate serum and tissue levels
- **Exceptions:** IV vancomycin and ciprofloxacin — slower infusion → start ~1 h before incision
- If **tourniquet** is used → give **entire dose before inflation**
- Exceptions when pre-incision dosing is NOT done:
  - Active ongoing antibiotic therapy
  - Surgeon declined
  - Surgery may not require antibiotics
  - Delay until specimen sent for culture

**Time-to-incision relationship:** rates of SSI increase steeply when antibiotics are given > 60 min before, or after incision.`,
      },
      {
        heading: "Wound Classification (CDC/NHSN)",
        body: `| Class | SSI rate | Examples |
|---|---|---|
| **Clean** | 1.3–2.9% | Uninfected; respiratory/GI/GU not entered. Skin flora (CoNS, MSSA/MRSA, strep) |
| **Clean-contaminated** | 2.4–7.7% | Respiratory/GI/GU entered, controlled. Skin flora + gram-negatives, Enterococci |
| **Contaminated** | 6.4–15.2% | Fresh accidental wounds; major sterility breaks; gross GI spillage |
| **Dirty / infected** | 7.1–40% | Old traumatic wounds; existing clinical infection or perforated viscera |`,
      },
      {
        heading: "Selected Antibiotic Choices (Stanford 2017)",
        body: `| Surgery | Preferred | β-lactam allergy |
|---|---|---|
| Cardiac / vascular / thoracic / device implant / general / neuro / ortho / plastics | **Cefazolin** | Vancomycin (preferred) or clindamycin |
| Cardiac w/ prosthetic material | Cefazolin + Vancomycin | Vancomycin |
| Gastroduodenal | Cefazolin | Vancomycin + Gentamicin |
| Biliary | Cefazolin | Metronidazole + Levofloxacin |
| Colorectal / appendectomy | Cefazolin + Metronidazole | Metronidazole + Levofloxacin |
| OB-GYN / hysterectomy / C-section | Cefazolin | Clindamycin + Gentamicin |
| Urology (clean) | Cefazolin | Gentamicin + Clindamycin |
| Urology (clean-contam w/ ileal conduit) | Cefoxitin | Metronidazole + Levofloxacin |
| Head & neck clean | Cefazolin | Clindamycin |
| H&N w/ oral mucosa breach | Cefazolin + Metronidazole | Clindamycin |`,
      },
      {
        heading: "Dosing & Re-dosing",
        body: `| Antibiotic | Dose | Re-dose interval |
|---|---|---|
| **Cefazolin** | < 120 kg: 2 g; > 120 kg: 3 g | 4 h |
| **Cefoxitin** | 2 g | 2 h |
| **Cefuroxime** | 1.5 g | 4 h |
| **Ceftriaxone** | 2 g | No re-dose (long half-life) |
| **Vancomycin** | 15 mg/kg (max 2 g) | No re-dose if < 6 h |
| **Clindamycin** | 900 mg | 6 h |
| **Metronidazole** | 500 mg | 6 h (long half-life) |
| **Gentamicin** | 5 mg/kg | No re-dose typically |
| **Ciprofloxacin** | 400 mg | No re-dose |
| **Ampicillin-sulbactam** | 3 g | 2 h |
| **Piperacillin-tazobactam** | 3.375 g | 2 h |

**Re-dose triggers:** elapsed time exceeded; blood loss > 1500 mL; massive fluid resuscitation.`,
      },
      {
        heading: "Antibiotics That Augment Neuromuscular Blockade",
        body: `- **Aminoglycosides** (gentamicin, neomycin, streptomycin) — most significant
- Polymyxins
- Tetracyclines (mild)
- Clindamycin (mild)
- Lincomycin

**Clindamycin** is sometimes tested as NOT augmenting NMB significantly (compared to aminoglycosides) — ITE trap.`,
      },
      {
        heading: "β-Lactam (Penicillin) Allergy",
        body: `- True IgE-mediated penicillin allergy is rare (< 10% of self-reported).
- **Cross-reactivity** of penicillin to cephalosporins ~1% (much lower than the historical 10% number).
- Cefazolin and other cephalosporins are generally safe in patients with non-severe penicillin reactions (rash, GI).
- **Avoid cephalosporins only with documented severe reactions:** anaphylaxis, Stevens-Johnson, TEN, DRESS, interstitial nephritis, hemolytic anemia.
- When unclear → vancomycin or clindamycin per institutional protocol.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "topics-for-discussion",
    number: 24,
    category: "Perioperative Care",
    title: "Topics for Discussion",
    tagline: "Scenarios and decision-points from the Stanford CA-1 mentorship curriculum.",
    icon: "MessageCircleQuestion",
    color: "from-purple-500 to-violet-500",
    readMinutes: 5,
    keyPoints: [
      "These prompts mirror real-world judgment calls — answer them with your mentor or use the AI assistant.",
      "When in doubt, prioritize the patient's airway, oxygenation, and circulation — communication and documentation come after.",
      "If a colleague behaves unprofessionally, address it directly or escalate via the chief, attending, or ombudsperson.",
      "Disclose medication errors immediately — to the patient, the attending, the QI team. The patient comes first.",
    ],
    sections: [
      {
        heading: "Scenarios to Work Through",
        body: `1. Your IV infiltrates during induction. What are your options?
2. You get stuck with a needle. How do you protect yourself and the patient?
3. You can't deliver positive pressure. What are your next steps?
4. You witness an unprofessional exchange between a surgeon and a nurse / med student / resident. Who should you talk to?
5. You encounter an unanticipated difficult airway. You know to CALL FOR HELP. Who do you call and what do you ask for?
6. You inadvertently administer the wrong medication. What should you do and who should you tell?
7. Your patient tells you that they want only the attending to perform invasive procedures. How do you respond?
8. The surgeon insists the patient is not relaxed enough — but you re-dosed a NDMB 5 minutes ago. What are your options?
9. You administer antibiotics after induction. An hour later, incision still hasn't happened. What should you do?
10. The surgeon appears to be struggling and the patient is rapidly losing blood. The surgeon insists they don't need help. What should you do?`,
      },
      {
        heading: "How to Approach Them",
        body: `- **Slow down, identify the problem clearly.** Pause and articulate what's happening before acting.
- **Use a structured framework:** ABC (airway, breathing, circulation) → call for help → buy time → diagnose → treat.
- **Communicate clearly** — close-loop with surgeons and nurses. "I need a 7.0 ETT" not "can you grab a tube?"
- **Document** events truthfully and in real time after the crisis is over.
- **Debrief** with the team and your mentor; learning from a near-miss is as valuable as from a complication.
- For interpersonal and ethical situations, follow your institution's escalation pathway (chief resident → program director → ombudsperson → professionalism committee).`,
      },
      {
        heading: "Use the AI Assistant",
        body: `Try pasting any of the scenarios above into the **AI Assistant** to get a structured discussion you can review with your mentor. Sample prompts:

- "Walk me through how to handle an unanticipated difficult airway during routine GA induction. Who do I call and what equipment do I get?"
- "I gave the wrong medication. The patient is stable. What should I do, in what order, and who should I notify?"
- "Surgeon is struggling, blood loss is escalating. Surgeon insists they don't need help. How do I navigate this?"

Always remember: AI is a brainstorming partner, not a substitute for clinical judgment or your attending.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "exam-prep",
    number: 25,
    category: "Perioperative Care",
    title: "ABA Exams & Study Resources",
    tagline: "ITE, BASIC, ADVANCED, Applied — and what to study.",
    icon: "GraduationCap",
    color: "from-amber-500 to-yellow-500",
    readMinutes: 4,
    keyPoints: [
      "ITE: February each year. Percentile scoring; matters for fellowships.",
      "BASIC exam: June of CA-1 year. Pass/fail.",
      "ADVANCED Written: post-training. Pass required before taking Applied.",
      "Applied exams (Oral Boards + OSCE): 9 sessions per year post-training.",
    ],
    sections: [
      {
        heading: "ABA Exam Pathway",
        body: `| Exam | When | Format / Notes |
|---|---|---|
| **In-Training Exam (ITE)** | February each year | Percentile scoring; important for fellowships. Stanford department awards half the cost of the next exam attempt if you score > 70th percentile. |
| **BASIC** | June of CA-1 year | Pass/fail. No percentile reported. |
| **ADVANCED Written** | Post-training (July & January) | Must pass to be eligible to take Applied. |
| **Applied** (Oral Boards + OSCE) | Post-training, 9 sessions/year | Mock orals November & May; Mock OSCEs in April of CA-3 year. |`,
      },
      {
        heading: "First 1–2 Months of CA-1 Year — Start Light",
        body: `- **CA-1 Tutorial Textbook** (you're using a version of it now!)
- **Stanford Anesthesia EMERGENCY MANUAL** — emergencymanual.stanford.edu — also a pocket version
- **Jaffe's Anesthesiologist's Manual of Surgical Procedures** — read the section relevant to tomorrow's case
- **Stanford Anesthesiology iGuide**`,
      },
      {
        heading: "Once You're Settled — Build Knowledge",
        body: `**Question banks:**
- **TrueLearn** — department subscription
- **Hall's Anesthesia: A Comprehensive Review**

**Online:**
- **OpenAnesthesia** — openanesthesia.org
- **Learnly** — learnly.org

**Podcasts:**
- **ACCRAC** (Anesthesia and Critical Care Reviews and Commentary) — accrac.com

**Library:**
- **Lane Library** for UpToDate, PubMed, journals
- **Stanford Anesthesia Inkling**

**Textbooks:**
- **Faust's Anesthesia Review** — concise short chapters
- **Miller's Basics of Anesthesia**
- **Morgan & Mikhail's Clinical Anesthesiology**
- **Barash's Clinical Anesthesia**
- **Yao & Artusio's Anesthesiology**`,
      },
      {
        heading: "A Realistic Study Cadence",
        body: `- **Months 1–3:** stay alive, learn how to work; read the chapter for tomorrow's case
- **Months 4–9:** add 30–60 min of question bank or chapter reading most days
- **Last 2–3 months before ITE:** ramp question-bank volume; review weakest topics; teach the topic to a co-resident
- **Mock orals / OSCE:** start during CA-2; lean on senior residents

Most important: **build the habit early**. Daily 30 min beats one Saturday cram.`,
      },
    ],
  },

  // ---------------------------------------------------------------
  {
    slug: "subspecialty-appendix",
    number: 26,
    category: "Subspecialty",
    title: "Subspecialty Basic Sciences Appendix",
    tagline: "Regional, OB, pediatric, cardiac essentials in one reference.",
    icon: "Layers",
    color: "from-purple-500 to-fuchsia-500",
    readMinutes: 10,
    keyPoints: [
      "Brachial plexus blocks: interscalene (shoulder/upper arm, 100% phrenic palsy), supraclavicular ('spinal of the arm'), infraclavicular (elbow/hand), axillary (hand).",
      "Pregnancy: MAC ↓ 40%, FRC ↓, MV ↑ 50%, CO ↑ 40%; LUD after 20 weeks.",
      "Pediatric ETT: cuffed = age/4 + 3.5; uncuffed = age/4 + 4; depth = age/2 + 12.",
      "Three fetal shunts: ductus venosus, foramen ovale, ductus arteriosus.",
      "Cardiac: CO = HR × SV; SV = EDV − ESV; EF = SV/EDV; CPP = DBP − LVEDP.",
    ],
    sections: [
      {
        heading: "Regional — Block Techniques",
        body: `**Ultrasound-guided** (primary modality):
- High-frequency (10–15 MHz) for superficial structures (better resolution, less penetration)
- Low-frequency (2–5 MHz) for deep structures (more penetration, less resolution)
- **Hypoechoic** = appears dark (fluid, nerves often)
- **Hyperechoic** = appears white (fascia, bone, needle, pleura)

**Nerve stimulation:**
- < 0.2 mA + muscle contraction → intraneural (DO NOT INJECT)
- < 0.5 mA + muscle contraction → proximity to motor nerve (acceptable)

**Field block:** terminal cutaneous nerves (intercostobrachial, superficial cervical plexus, ankle).`,
      },
      {
        heading: "Brachial Plexus",
        body: `Roots **C5–T1** form the plexus. *Intercostobrachial nerve (T2)* is spared by all brachial blocks — supplement with subcutaneous infiltration along axillary crease for upper-arm procedures.

| Block | Coverage | Common complications | Notes |
|---|---|---|---|
| **Interscalene** | Roots C5–C7, shoulder, upper arm | **100% phrenic palsy**, Horner's syndrome, RLN palsy (hoarseness), pneumothorax | Spares ulnar; catheter common |
| **Supraclavicular** | Trunks/divisions, forearm | Pneumothorax, ~50% phrenic, Horner's, RLN | "Spinal of the arm" — single shot |
| **Infraclavicular** | Cords, forearm, hand | Pneumothorax (less than supraclav), vascular puncture | Catheter common |
| **Axillary** | Terminal branches | Vascular uptake (LAST) | Spares musculocutaneous |
| **Intercostobrachial** | T2 | — | Field block |`,
      },
      {
        heading: "Anatomy Pearls — Brachial",
        body: `**Interscalene:**
- Phrenic nerve (C3–5) is **anterior** to anterior scalene
- Dorsal scapular and long thoracic nerves traverse middle scalene
- Vertebral artery medial and deep to anterior scalene
- Nerve roots appear hypoechoic — "traffic light sign"

**Supraclavicular:**
- Subclavian artery sits on first rib
- Watch for pleura deep to ribs

**Infraclavicular:**
- Axillary artery cephalad to axillary vein
- Cords hyperechoic on US
- Pec major and pec minor superficial to vessels

**Axillary:**
- Musculocutaneous (most lateral) often missed — between biceps and coracobrachialis
- Median (~10 o'clock) lateral and superficial
- Ulnar (~2 o'clock) superficial and medial
- Radial (~6 o'clock) posterior to artery
- Axillary artery lateral to axillary vein`,
      },
      {
        heading: "Lower Extremity Blocks",
        body: `**Lumbar plexus (L1–L4 ± T12):**
- Lateral femoral cutaneous (L1–L3) — sensory only
- Femoral (L2–L4) — sensory + motor; branches into saphenous (sensory)
- Obturator (L2–L4) — sensory + motor of medial thigh; adductors

**Sacral plexus (L5–S4):**
- Sciatic (L5–S4) — branches into tibial and peroneal nerves proximal to popliteal crease
- Posterior femoral cutaneous (S1–S3) — sensory only

| Block | Coverage | Pearl |
|---|---|---|
| Femoral | Hip flexion, knee extension; sensation anterior thigh, medial leg/ankle | Better for postop than surgical analgesia |
| Fascia iliaca | Femoral + LFC distributions | Two "pops" through fascia |
| Adductor canal | Anterior thigh, medial leg, medial ankle | **Less motor block than femoral** — better ambulation |
| Sciatic | Posterior hip/thigh, knee, lower leg, foot | Avoids sympathectomy of lumbar plexus |
| Popliteal | Foot and ankle | Less hamstring motor block |
| Ankle | Foot | Avoid epi in local |`,
      },
      {
        heading: "Truncal & Other Blocks",
        body: `- **Paravertebral** — borders: costotransverse ligament posterior, parietal pleura anterolateral, vertebrae medial, ribs sup/inf. Pneumothorax, hypotension, bradycardia from sympathectomy. Anticoag per epidural guidelines.
- **Intercostal** — dorsal/ventral rami; high vascular uptake → LAST risk; pneumothorax risk
- **TAP** — subcostal n (T12), ilioinguinal (L1), iliohypogastric (L1); fascial plane between internal oblique and transversus abdominis
- **Erector Spinae** — paraspinal fascial plane; safer than paravertebral (distance from pleura/cord); great for rib fractures, catheter-friendly
- **PECS I/II, serratus plane** — breast and chest wall surgery`,
      },
      {
        heading: "Acute & Chronic Pain",
        body: `**Definitions (IASP):**
- **Pain:** unpleasant sensory and emotional experience associated with actual or potential tissue damage
- **Allodynia:** pain from a non-painful stimulus
- **Hyperalgesia:** ↑ pain from a normally painful stimulus
- **Dysesthesia:** unpleasant abnormal sensation
- **Paresthesia:** abnormal sensation (not necessarily unpleasant)

**Pain types:**
- **Nociceptive:** from tissue damage (somatic — sharp, localizable via A-δ/C fibers; visceral — dull, diffuse via sympathetic afferents)
- **Neuropathic:** PNS or CNS damage; burning, shooting; less responsive to opioids

**Pain pathway:**
- 1st-order neuron (dorsal root ganglion) → 2nd-order (crosses midline, ascends in contralateral spinothalamic tract) → 3rd-order (thalamus to postcentral gyrus)
- A-δ: thin myelinated, fast = sharp localized
- C fibers: thin unmyelinated, slow = dull diffuse
- Dorsal horn — Rexed laminae I, II, III, V; excitatory (glutamate, substance P); inhibitory (glycine, GABA)
- Descending modulation: PAG and ventromedial medulla via NE, serotonin, endogenous opioids

**Tolerance vs dependence:**
- **Tolerance** — need ↑ dose for same effect; constipation does NOT develop tolerance
- **Dependence** — withdrawal on cessation; precipitated by antagonists`,
      },
      {
        heading: "Maternal Physiology of Pregnancy",
        body: `**CNS:**
- MAC ↓ 40% (returns to normal by day 3 postpartum)
- ↑ sensitivity to local anesthetics (MLAC decreased)
- ↑ epidural blood volume (IVC obstruction by gravid uterus)
- ↓ CSF volume
- ↑ epidural space pressure

**Respiratory:**
- ↓ FRC (sharp ↓ ERV); rapid desaturation
- ↑ minute ventilation 50% (↑ TV and ↑ RR)
- ↓ PaCO₂ → compensatory ↓ HCO₃⁻
- Elevated diaphragm but larger AP chest diameter
- VC and closing capacity unchanged
- Upper airway edema → smaller ETT (6.0–6.5)

**Cardiovascular:**
- ↑ CO 40%, ↑ SV 30%, ↑ HR 20%
- ↓ SVR
- Peak CO during active labor and immediately after delivery; CO returns to baseline at ~2 weeks
- **Aortocaval compression** > 20 weeks → maintain **left uterine displacement ≥ 15°**

**Hematologic:**
- ↑ plasma volume > ↑ RBC volume → dilutional anemia
- Hypercoagulable (↑ factors VII, VIII, X, XII, fibrinogen)
- Mild thrombocytopenia

**GI:** ↓ LES tone, ↑ intragastric pressure → aspiration risk after 16–20 weeks.`,
      },
      {
        heading: "Pediatric Essentials",
        body: `**Airway anatomy:**
- Large occiput → roll under shoulders
- Anterior, more cephalad larynx (C3–C4 vs C5–C6 in adult)
- Funnel-shaped subglottic region — **narrowest at the cricoid** in < 8 yo (clinically)
- Large tongue, floppy epiglottis
- Brisk vagal response → pre-treat with atropine 0.02 mg/kg in infants for sux

**ETT sizing:**
- Cuffed: **age/4 + 3.5**
- Uncuffed: **age/4 + 4**
- Depth (cm at lip): **age/2 + 12** or 3× ETT size

**Pediatric breathing circuits (Mapleson):**
- Lack unidirectional valves, no CO₂ absorber
- Lower airway resistance, increased venting
- Spontaneous: **Mapleson A** most efficient (1× MV)
- Controlled: **Mapleson D** most efficient (2× MV)

**Fetal circulation — 3 shunts:**
1. **Ductus venosus** (umbilical vein → IVC)
2. **Foramen ovale** (RA → LA)
3. **Ductus arteriosus** (pulmonary artery → aorta)`,
      },
      {
        heading: "Cardiac Equations",
        body: `- **CO = HR × SV**
- **SV = EDV − ESV**
- **EF = SV / EDV** (normal LV ~60%)
- **CI = CO / BSA** (normal 2.6–4.2 L/min/m²)
- **MAP ≈ DBP + 1/3 (SBP − DBP)** (also ≈ DBP + PP/3)
- **CPP = DBP − LVEDP** (or DBP − PCWP)
- **SVR = (MAP − CVP) × 80 / CO** (normal 800–1200 dyn·s/cm⁵)
- **PVR = (MPAP − PCWP) × 80 / CO** (normal < 250)
- **PP = SBP − DBP**
- **DO₂ = CO × CaO₂ × 10** (normal ~1000 mL/min)
- **VO₂ = CO × (CaO₂ − CvO₂) × 10** (normal ~250 mL/min)
- **O₂ ER = VO₂ / DO₂** (normal ~25%)`,
      },
    ],
  },
];

export const tutorialCategories = [
  "All",
  "Monitoring & Equipment",
  "Pharmacology",
  "Airway",
  "Hemodynamics",
  "Fluids & Blood",
  "Critical Events",
  "Perioperative Care",
  "Subspecialty",
] as const;

export function getTutorial(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}
