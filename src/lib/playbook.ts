// OR Playbook — the hands-on, "nobody-taught-me-this-in-med-school" survival
// guide for the anesthesia rotation and CA-1 year. Practical workflow: setting
// up the room, drawing up drugs, monitors, patient transfer, lines & fluids,
// induction, intubation, extubation.
//
// Educational content distilled for medical students and new residents.
// Always defer to your attending, your institution's protocols, and primary
// sources. Diagrams are referenced by key from
// src/components/diagrams/playbook-diagrams.tsx.

export type PlaybookSection = {
  heading: string;
  /** Markdown: **bold**, lists, | tables |, > quotes */
  body?: string;
  /** Key into playbookDiagrams registry */
  diagram?: string;
  diagramCaption?: string;
  /** Green "pro tip" callouts */
  pearls?: string[];
  /** Red "common mistake" callouts */
  pitfalls?: string[];
};

export type PlaybookGuide = {
  slug: string;
  number: number;
  category:
    | "Foundations"
    | "Room & Setup"
    | "Machine & Ventilation"
    | "Drugs"
    | "Pharmacology"
    | "Monitoring"
    | "Patient Handling"
    | "Lines & Fluids"
    | "Preop & Exam"
    | "Airway"
    | "Critical Events"
    | "Subspecialty";
  title: string;
  tagline: string;
  icon: string; // lucide icon name
  color: string; // tailwind gradient
  readMinutes: number;
  keyPoints: string[];
  sections: PlaybookSection[];
  /** Optional source-attribution line shown at the foot of the guide */
  credit?: string;
};

/**
 * Source credit shown on guides whose clinical substance was distilled from
 * the rotation survival guide "Anesthesia Made Easy" and re-expressed in
 * AnesthesiaHub's own words and format.
 */
const AME_CREDIT =
  "Concepts adapted for AnesthesiaHub from “Anesthesia Made Easy” (Jeff Steiner, DO, MBA) and standard anesthesia references, re-expressed in this site's own words. Educational use only — always verify doses against primary sources and your institution's protocols.";

export const playbookCategories = [
  "All",
  "Foundations",
  "Room & Setup",
  "Machine & Ventilation",
  "Drugs",
  "Pharmacology",
  "Monitoring",
  "Patient Handling",
  "Lines & Fluids",
  "Preop & Exam",
  "Airway",
  "Critical Events",
  "Subspecialty",
] as const;

export const playbookGuides: PlaybookGuide[] = [
  /* =============================================================== */
  {
    slug: "setting-up-your-room",
    number: 1,
    category: "Room & Setup",
    title: "Setting Up Your OR",
    tagline:
      "The machine check, suction, monitors and airway cart — what to lay out before the patient rolls in.",
    icon: "Settings2",
    color: "from-primary to-accent",
    readMinutes: 9,
    keyPoints: [
      "Build a routine you do the SAME way every single case — that's how you stop forgetting things.",
      "Memory aid: MS-MAID — Machine, Suction, Monitors, Airway, IV, Drugs.",
      "Two working suctions and a self-inflating (Ambu) bag are non-negotiable before any induction.",
      "Do the anesthesia machine self-test at the start of every day; do an abbreviated check between cases.",
      "If you can't ventilate and the machine fails, you fall back to the Ambu bag + wall O₂ — make sure it's there and works.",
    ],
    sections: [
      {
        heading: "Walk in with a checklist in your head",
        body: `Nobody is born knowing how to set up an OR. The whole trick is doing it the **exact same way every time** so the routine — not your memory — catches the missing piece.

The classic mnemonic is **MS-MAID** (some say SOAP-ME). Run top to bottom before every case:

| Letter | Item | The "did I…" question |
|---|---|---|
| **M** | Machine | Passed self-test? Circuit connected, no leak? |
| **S** | Suction | Two working suctions, Yankauer on the one at the head? |
| **M** | Monitors | Pulse ox, NIBP cuff, ECG leads, capnography, temp ready? |
| **A** | Airway | Laryngoscope works, ETT cuff checked, backup sizes, LMA, bougie? |
| **I** | IV | Fluids spiked and primed, lines de-aired, pressure bag? |
| **D** | Drugs | Induction, paralytic, opioid, **emergency** pressors drawn & labeled? |

Set it up the same direction each time (e.g., left-to-right across your cart). Your hands will eventually do it on autopilot — which is exactly what you want at 6:45 AM.`,
        diagram: "room-setup",
        diagramCaption:
          "Everything you reach for during induction lives within arm's reach of the head of the bed.",
        pearls: [
          "Set the room up the same physical order every time so a gap is obvious at a glance.",
          "Draw your emergency drugs (phenylephrine, ephedrine) FIRST, not after the patient destabilizes.",
        ],
      },
      {
        heading: "The anesthesia machine check",
        body: `Most modern machines run an **automated self-test** — start it at the beginning of the day before you do anything else. But the automated check does **not** verify everything. You still manually confirm:

1. **Backup ventilation available** — a self-inflating bag (Ambu) and a way to give O₂ if the machine dies.
2. **O₂ cylinder** present and adequate (don't rely only on wall supply).
3. **Pipeline pressures** ~50 psi for O₂, air, N₂O.
4. **Vaporizers** filled, caps tight, no leaks.
5. **CO₂ absorbent** — not exhausted (watch for color change — purple/blue depending on brand).
6. **Circuit** connected, correct size; **breathing-system leak test** and **flow test** pass.
7. **APL valve** and ventilator both cycle.
8. **Scavenging** connected.

Between cases you do an **abbreviated check** — leak test, circuit, fresh absorbent, suction, drugs — not the whole machine self-test again.`,
        pitfalls: [
          "Skipping the leak test \"because the last case was fine\" — circuits get swapped and bumped between cases.",
          "Assuming the green wall O₂ is enough and not checking the backup cylinder.",
        ],
      },
      {
        heading: "Suction — you need it before you ever need it",
        body: `You set up suction for the moment a patient vomits or bleeds on induction — there's no time to assemble it then.

- **Two** suction setups when you can: one at the head for the airway, one for the surgeons / a second line.
- Use a rigid **Yankauer** tip at the head.
- Turn it on and **occlude the tip** to confirm it actually pulls.
- Tuck it under the pillow or mattress edge on the patient's right so it's findable without looking.`,
        pearls: [
          "Test suction by covering the tip and feeling it grab — a setup that's connected but not pulling is useless.",
        ],
      },
      {
        heading: "Airway cart — laid out, not buried",
        body: `Before induction, have within reach:

- **Laryngoscope** — blade clicked on, light bright and white (Mac 3/4, Miller 2; video laryngoscope if planned/anticipated difficult).
- **ETT** of your chosen size with the **cuff checked** (inflate, confirm it holds, fully deflate) and **stylet** in, plus a **size smaller** as backup.
- **LMA** (rescue and primary).
- **Oral/nasal airways**, **bougie**, **Magill forceps**.
- **Tape/tie**, **10 mL syringe** for the cuff, **lube**.
- **Working face mask** on the circuit.

Lay these out in the order you'll use them. A cart where you're digging for a bougie mid-desaturation is a cart that failed you.`,
        pitfalls: [
          "Not checking the ETT cuff before placing it — a leaking cuff means re-intubating.",
          "Only having one ETT size open.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "the-anesthesia-machine",
    number: 2,
    category: "Machine & Ventilation",
    title: "The Anesthesia Machine & Ventilation Modes",
    tagline:
      "Gas flow, every ventilation mode (VCV, PCV, VG, SIMV, PSVPro), PEEP, recruitment, end-tidal control — and when to use each.",
    icon: "Gauge",
    color: "from-indigo-500 to-violet-500",
    readMinutes: 14,
    keyPoints: [
      "The machine does three jobs: deliver a precise gas+vapor mixture, ventilate the patient, and scavenge waste gas.",
      "Volume modes (VCV) guarantee a tidal volume; pressure modes (PCV) guarantee a pressure. Volume-guaranteed hybrids (PCV-VG) give you both.",
      "Spontaneous/supported modes (PSV, PSVPro) let the patient trigger each breath — the machine just assists. PSVPro adds an automatic apnea backup.",
      "PSVPro is the workhorse for a spontaneously breathing patient on an LMA and for weaning at emergence — set the apnea backup before you rely on it.",
      "The 'little knobs' — PEEP, I:E, inspiratory pause, Pmax, trigger sensitivity, ETS — are how you fine-tune any mode to the patient.",
    ],
    sections: [
      {
        heading: "What the machine actually does",
        body: `Strip away the screens and the anesthesia machine is three systems bolted together:

1. **Gas delivery** — takes O₂, air, and N₂O (from pipeline ~50 psi or backup cylinders), lets you dial an exact **fresh gas flow** and **FiO₂**, then passes it through a **vaporizer** that adds a precise % of volatile agent.
2. **The breathing (circle) system** — a loop with one-way valves, a **CO₂ absorber**, and a **ventilator** (bellows or piston) that moves gas in and out of the patient and recirculates it to save agent.
3. **Scavenging** — captures exhaled waste anesthetic so it doesn't end up in the room.

Everything you touch on the machine is tuning one of those three jobs.`,
        diagram: "gas-flow",
        diagramCaption:
          "Gas path: supply → flow control → vaporizer → fresh gas → circle system + ventilator → patient, with the CO₂ absorber recirculating and scavenging venting waste.",
      },
      {
        heading: "Fresh gas flow, FiO₂ & low-flow anesthesia",
        body: `Two dials set the gas the patient breathes: **total fresh gas flow (FGF)** and the **O₂ mixture (FiO₂)**.

- **High flow (≥ 2 L/min or more):** changes reach the patient fast. Use it at **induction and emergence**, when you're rapidly changing agent concentration, or to **denitrogenate/preoxygenate**. Wasteful of agent and O₂.
- **Low flow (~0.5–1 L/min):** once you're at a steady state, turn the flows down. **Saves volatile agent and money, warms and humidifies** the circuit, less pollution. The trade-off: changes happen slowly, and you must watch that FiO₂ doesn't drift down (the circuit consumes O₂).
- **Minimum FiO₂:** modern machines won't let you deliver a hypoxic mixture — there's a hard O₂/N₂O proportioning limit (≥ 21–25% O₂).
- **O₂ flush** (35–75 L/min) bypasses the vaporizer — **pure O₂, no agent.** Great to refill a bag fast; dangerous if you lean on it (dilutes your anesthetic → **awareness**, and can cause **barotrauma** if pressed during inspiration).`,
        pearls: [
          "Turn flows up before any deliberate, fast change in anesthetic depth; turn them back down once you're stable to save agent.",
          "On low flow, keep an eye on inspired FiO₂ and end-tidal agent — both drift if you forget about them.",
        ],
        pitfalls: [
          "Running the O₂ flush to 'help' a spontaneously breathing patient — you're washing out the anesthetic and risking awareness.",
        ],
      },
      {
        heading: "Ventilation modes at a glance",
        body: `Every mode answers two questions: **who triggers the breath** (machine on a timer, or the patient), and **what the machine controls** (a set volume, or a set pressure).

| Mode | Who triggers | Machine controls | One-liner |
|---|---|---|---|
| **Manual / Spontaneous (Bag)** | Patient / you by hand | Nothing (you feel the bag) | Mask induction, hand-ventilation, feeling compliance |
| **VCV** (Volume Control) | Machine (timed) | **Tidal volume** | Guarantees TV; pressure rises to whatever it takes |
| **PCV** (Pressure Control) | Machine (timed) | **Inspiratory pressure** | Guarantees pressure; volume varies with compliance |
| **PCV-VG / VG** (Volume Guaranteed) | Machine (timed) | Pressure, **targeting a TV** | Lowest pressure that still delivers your set volume |
| **SIMV (+PS)** | Machine *and* patient | Set mandatory breaths + support for extra ones | Partial support / weaning |
| **PSV / PSVPro** | **Patient** (every breath) | Pressure **support** above PEEP | Spontaneous breathing with a boost (+ apnea backup) |`,
        diagram: "vent-modes",
        diagramCaption:
          "Airway-pressure waveforms: VCV ramps up to peak; PCV is a square pressure plateau; PCV-VG looks like PCV but auto-adjusts to hit a target volume; PSV breaths are patient-triggered and irregular.",
      },
      {
        heading: "Volume Control (VCV)",
        body: `The classic mode. You set a **tidal volume** and **rate**; the machine delivers exactly that volume each breath, and the **pressure rises to whatever it takes** to get there.

**You set:** tidal volume (~6–8 mL/kg ideal body weight), respiratory rate, I:E ratio, PEEP, and a **pressure limit (Pmax)** as a safety ceiling.

**When to use it:**
- The default for most routine paralyzed cases.
- When you want a **guaranteed minute ventilation** and stable CO₂.
- Best when lung compliance is normal and stable.

**Watch out:** because volume is fixed, a drop in compliance (Trendelenburg, pneumoperitoneum, bronchospasm, light anesthesia/coughing) makes **peak pressures climb** — the machine will push until it hits Pmax and then alarms/dumps volume.`,
        pitfalls: [
          "Leaving VCV unchanged after insufflation or steep positioning — peak pressures spike and you can barotraumatize stiff lungs.",
        ],
      },
      {
        heading: "Pressure Control (PCV)",
        body: `You set an **inspiratory pressure**; the machine holds that pressure for the inspiratory time, and the **delivered volume varies** with the patient's compliance and resistance. Flow is **decelerating**, which gives a lower peak pressure and often better gas distribution.

**You set:** inspiratory pressure (Pinsp, titrate to a target TV), rate, inspiratory time / I:E, PEEP.

**When to use it:**
- **Stiff lungs / high pressures** — ARDS, morbid obesity, laparoscopy, one-lung ventilation, peds — where you want to **cap pressure** and protect the lung.
- **Leaky systems** — uncuffed peds tubes or an LMA — where a pressure target tolerates the leak better than a volume target.

**Watch out:** the flip side of VCV — if **compliance worsens, your tidal volume falls** (and CO₂ rises) silently. You must watch the **exhaled TV**, not just the pressure.`,
        pearls: [
          "PCV's decelerating flow usually buys you a lower peak pressure than VCV for the same tidal volume.",
        ],
        pitfalls: [
          "Setting a pressure and walking away — if the belly is insufflated or the patient bucks, TV can drop off and hypoventilate them.",
        ],
      },
      {
        heading: "Volume Guaranteed (PCV-VG / VCV-VG / AutoFlow)",
        body: `The hybrid that's become many people's default. It **looks and breathes like PCV** (decelerating flow, a pressure plateau) but the machine **automatically adjusts the pressure breath-to-breath to hit a tidal volume you set** — using the *lowest pressure that achieves it.*

**You set:** target tidal volume, rate, I:E, PEEP, and a pressure ceiling.

**When to use it:**
- A great **all-rounder** — you get the **guaranteed volume** of VCV *and* the **lower, lung-protective pressures** of PCV.
- Cases where compliance **changes during the case** (laparoscopy up/down, positioning) — it tracks the changes for you.

**Watch out:** if there's a **big leak** the algorithm chases the volume by **raising pressure** (it can't tell leak from low compliance). And it needs a few breaths to settle after a sudden compliance change.`,
        pearls: [
          "Volume-guaranteed modes are ideal when you want 'set it and forget it' tidal volumes through a case where the belly gets inflated and the bed gets tilted.",
        ],
      },
      {
        heading: "SIMV (Synchronized Intermittent Mandatory Ventilation)",
        body: `A **mixed** mode: the machine guarantees a set number of **mandatory breaths** (volume- or pressure-controlled) but **synchronizes** them to the patient's own efforts, and any **extra** breaths the patient takes are **pressure-supported**.

**When to use it:**
- **Weaning** / transitioning a patient from full mechanical ventilation toward spontaneous breathing.
- A patient who is **starting to breathe over the ventilator** but isn't ready to do all the work.

In modern OR practice SIMV has largely been **superseded by PSV/PSVPro and volume-guaranteed modes**, but you'll still see it, especially carried over from the ICU.`,
      },
      {
        heading: "Pressure Support & PSVPro — the spontaneous workhorse",
        body: `**Pressure Support Ventilation (PSV)** is fully **patient-triggered**: every time the patient starts to inhale, the machine delivers a set **pressure boost above PEEP** to help overcome the resistance of the tube/LMA and circuit, then **cycles off to exhalation when inspiratory flow falls** to a set percentage. The patient sets their own rate and largely their own volume — the machine just **assists**.

**PSVPro** (GE's "Pressure Support Ventilation **Pro**") is PSV **plus an automatic apnea backup.** If the patient stops triggering for longer than a set **apnea time**, the machine **automatically switches to mandatory (pressure-control) backup ventilation and alarms** — then hands control back when the patient resumes breathing. That safety net is the whole point of the "Pro."

**What you set in PSVPro:**
- **Pressure support (above PEEP)** — typically **5–15 cmH₂O**; enough to give a comfortable tidal volume (start ~10 and titrate to TV/RR).
- **PEEP** — usually 5 cmH₂O.
- **Trigger sensitivity** — how hard the patient must "ask" for a breath (flow trigger, ~2 L/min). Too sensitive → **auto-triggering**; too dull → **missed efforts / work of breathing**.
- **ETS (Expiratory Trigger Sensitivity)** — the **% of peak inspiratory flow** at which the breath cycles to exhalation (default ~25%). Lower ETS = longer inspiration.
- **Apnea backup** — backup **rate, pressure/volume, and the apnea time** (e.g., ~20–30 s) before backup kicks in. **Set this deliberately — it's your safety net.**

**When to use PSVPro:**
- **Spontaneously breathing GA on an LMA** — supports each breath, overcomes LMA/circuit resistance, keeps tidal volumes up without paralyzing.
- **Emergence / weaning** — as the patient starts breathing at the end of the case, switch from a mandatory mode to PSVPro for a smooth, patient-paced wake-up with a backup if they're still apneic from opioids.
- Any time you **want the patient breathing spontaneously but with a guaranteed floor.**`,
        diagram: "psvpro",
        diagramCaption:
          "PSVPro: the patient triggers supported breaths (left). If they go apneic past the set apnea time, the machine auto-starts mandatory backup breaths and alarms (right), then returns to support when spontaneous breathing resumes.",
        pearls: [
          "PSVPro is the natural mode for an LMA case — the patient breathes for themselves while the machine quietly does the work of overcoming the airway and circuit resistance.",
          "At emergence, flipping to PSVPro lets the patient set their own rate while still protecting them if they're slow to breathe.",
        ],
        pitfalls: [
          "Relying on PSV without confirming the apnea backup is set and sane — a deeply anesthetized or opioid-heavy patient may simply not trigger.",
          "PSV needs respiratory drive; it does nothing for a fully paralyzed patient (no trigger = no breath until backup fires).",
          "Auto-triggering from cardiac oscillations, leaks, or condensation in the circuit — dial the trigger less sensitive if the machine is breathing for no reason.",
        ],
      },
      {
        heading: "The 'little knobs' — fine-tuning any mode",
        body: `These settings cut across every mode and are how you tailor ventilation to the patient:

- **PEEP** (positive end-expiratory pressure) — keeps alveoli open at end-expiration. Default ~5 cmH₂O; raise it for **obesity, laparoscopy, atelectasis, hypoxia**. Too much → ↓ venous return / ↓ BP and overdistension.
- **Recruitment maneuver** — a brief **sustained inflation** (e.g., 30 cmH₂O for ~30 s, or stepwise) to **re-open collapsed lung**, then set adequate PEEP to keep it open. Watch the blood pressure — it transiently drops.
- **I:E ratio** — default **1:2**. **Prolong expiration (1:3–1:4)** for obstructive/air-trapping patients (asthma, COPD) to avoid breath-stacking. Inverse ratio (>1:1) is a rare rescue.
- **Inspiratory pause / plateau** — holds the breath briefly; improves gas distribution and lets you read the **plateau pressure** (a truer measure of alveolar pressure than peak).
- **Pmax / pressure limit** — a **safety ceiling**; in VCV it caps how hard the machine pushes.
- **Trigger sensitivity** — how easily the patient initiates a breath in supported modes (see PSVPro above).
- **Spirometry loops** (pressure–volume, flow–volume) — watch them to spot **leaks, bronchospasm, and changing compliance** at a glance.`,
        pearls: [
          "A peak–plateau gap that suddenly widens means a resistance problem (kinked tube, bronchospasm, secretions); a rising plateau means a compliance problem (insufflation, pneumothorax, mainstem).",
        ],
      },
      {
        heading: "End-tidal (closed-loop) control & other smart features",
        body: `Newer machines (e.g., GE Aisys) add automation worth knowing:

- **End-tidal Control (Et Control)** — you set a **target end-tidal O₂ and a target end-tidal agent (≈ MAC)**, and the machine **automatically titrates fresh gas flow and the vaporizer** to hit and hold them. It naturally drives you to **efficient low-flow anesthesia** without babysitting the dials.
- **Electronic vaporizer** (Aladin cassette) — agent delivery is digital and very precise, including at low flows.
- **Fresh-gas decoupling / compensation** — the delivered tidal volume **stays accurate regardless of fresh gas flow** (older machines added FGF to the TV).
- **Auxiliary O₂ flowmeter / common gas outlet** — a separate O₂ source for nasal cannula or to drive a circuit off the machine.
- **Standby mode** — parks the machine between cases without a full power-down.`,
        pearls: [
          "End-tidal control is the easiest way to run low-flow safely — pick your target MAC and FiO₂ and let the machine find the flows.",
        ],
      },
      {
        heading: "Alarms & safety — what the machine is watching",
        body: `The ventilator is constantly guarding a few failure modes. Know what each alarm means so you react instead of silencing:

- **Apnea / disconnect** (low airway pressure or lost EtCO₂) — circuit disconnected, leak, or the patient stopped breathing in a spontaneous mode. **#1 thing to rule out fast.**
- **High airway pressure** — kink, bronchospasm, mainstem, coughing/light, mucus plug, insufflation.
- **Sustained / continuous high pressure** — a stuck valve or obstructed scavenging; risk of barotrauma — relieve it.
- **Low FiO₂** — hypoxic mixture or supply problem.
- **Low / high minute volume / tidal volume** — under- or over-ventilation; common first sign that compliance changed in a pressure mode.
- **Subatmospheric / negative pressure** — patient inspiring against an empty circuit or active scavenging.

> An alarm is information, not a nuisance. Find the cause before you reach for the silence button — and if you can't, **hand-ventilate** to reestablish a known, safe state.`,
        pitfalls: [
          "Silencing a recurring high-pressure or apnea alarm without diagnosing it — the machine is usually right.",
        ],
      },
      {
        heading: "Which mode do I pick? — quick reference",
        body: `| Situation | Reasonable starting mode |
|---|---|
| Routine paralyzed adult, normal lungs | **VCV** or **PCV-VG** |
| Stiff lungs / obese / laparoscopy / one-lung | **PCV** or **PCV-VG** (cap pressure) |
| Compliance changing through the case | **PCV-VG** (auto-tracks) |
| Leaky circuit / uncuffed peds tube / LMA, controlled | **PCV** |
| Spontaneously breathing on an LMA | **PSVPro** |
| Emergence / weaning to spontaneous | **PSVPro** (or SIMV+PS) |
| Mask induction, checking compliance, hand-bagging | **Manual / Spontaneous** |
| Obstructive (asthma/COPD), air-trapping | Any mode **+ prolonged expiration (I:E 1:3–1:4)** |

There's rarely one 'right' mode — pick the one whose **guaranteed variable** matches what you care about most (a volume, or a pressure ceiling), then fine-tune with the knobs.`,
        pearls: [
          "When in doubt on a routine case, PCV-VG gives you a guaranteed tidal volume at the lowest pressure — a safe default that tolerates changing conditions.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "drawing-up-drugs",
    number: 3,
    category: "Drugs",
    title: "Drawing Up & Labeling Drugs",
    tagline:
      "Which syringe size goes with which drug, the color-code system, and how to label so you never give the wrong thing.",
    icon: "Syringe",
    color: "from-emerald-500 to-teal-500",
    readMinutes: 8,
    keyPoints: [
      "Every syringe gets a label — drug, concentration, your initials, date/time. No exceptions, ever.",
      "Syringe size is matched to the volume you'll give: propofol → 20 mL, fentanyl → 3–5 mL (50 mcg/mL), succinylcholine → 10 mL, glyco → 3 mL.",
      "Labels follow the ISO 26825 color classes: yellow=induction, blue=opioid, red=relaxant, violet=pressor, orange=benzo, green=anticholinergic.",
      "Read the vial label THREE times: picking it up, drawing it up, throwing it away.",
      "An unlabeled syringe is a hazard — if you find one and don't know what's in it, discard it.",
    ],
    sections: [
      {
        heading: "Match the syringe to the dose",
        body: `Syringe size isn't arbitrary — you pick the size that fits the **volume and titration** of the drug. Too big and you can't dose precisely; too small and you're constantly refilling.

This is a typical adult set, induction through reversal. **Concentrations are standard stock — always confirm against your vial,** and exact syringe sizes vary by institution.

| Drug | Syringe | Concentration | Class |
|---|---|---|---|
| Propofol | 20 mL | 10 mg/mL | Induction |
| Fentanyl | 3–5 mL | 50 mcg/mL | Opioid |
| Midazolam | 3 mL | 1 mg/mL | Benzodiazepine |
| Lidocaine | 5 mL | 10 mg/mL (1%) | Local — blunts propofol burn |
| Succinylcholine | 10 mL | 20 mg/mL | Depolarizing relaxant |
| Rocuronium | 5 mL | 10 mg/mL | Non-depolarizing relaxant |
| Neostigmine (+ glyco) | 5 mL | 1 mg/mL | Reversal |
| Sugammadex | 2–5 mL | 100 mg/mL | Reversal (roc/vec) |
| Phenylephrine | 10 mL | 100 mcg/mL | Vasopressor |
| Ephedrine | 10 mL | 5 mg/mL | Vasopressor |
| Glycopyrrolate | 3 mL | 0.2 mg/mL | Anticholinergic |

> **Fentanyl** is drawn **undiluted at 50 mcg/mL** (from a 100 mcg/2 mL or 250 mcg/5 mL vial) into a small **3–5 mL** syringe — not a big, diluted one. **Reversal** (neostigmine + glycopyrrolate, or sugammadex) is usually drawn up toward the end of the case.`,
        diagram: "syringes",
        diagramCaption:
          "Typical adult setup, induction → reversal. The colored band is the drug class (reversal agents are red with stripes); the size matches how much you'll give.",
        pearls: [
          "Propofol comes in a 20 mL syringe because a 70 kg induction dose (~140 mg = 14 mL) plus titration fits perfectly.",
          "Succinylcholine is 20 mg/mL — double rocuronium's 10 mg/mL — so the same volume is a very different dose. Read the label, not the volume.",
          "Keep pressors in 10 mL syringes diluted to round numbers (phenylephrine 100 mcg/mL) so the math is instant in an emergency.",
        ],
      },
      {
        heading: "The color-code system (ISO 26825 / ASTM)",
        body: `Pre-printed anesthesia labels are **color-coded by drug class** so you can recognize a class at a glance — even upside down across the room. The color tells you the *class*, the text tells you the *drug*.

| Color | Drug class | Examples |
|---|---|---|
| **Yellow** | Induction agents | Propofol, etomidate, ketamine |
| **Orange** | Benzodiazepines | Midazolam |
| **Blue** | Opioids | Fentanyl, hydromorphone |
| **Fluorescent red** | Muscle relaxants | Rocuronium, succinylcholine, vecuronium |
| **Red w/ stripes** | Relaxant antagonists | Neostigmine, sugammadex |
| **Violet** | Vasopressors | Phenylephrine, ephedrine, epinephrine |
| **Green** | Anticholinergics | Glycopyrrolate, atropine |
| **Salmon/tan** | Hypotensives / others | (varies) |
| **Grey** | Local anesthetics | Lidocaine |

> The color is a *backup* recognition system. It does **not** replace reading the actual drug name. Two violet syringes (phenylephrine vs. epinephrine) are very different drugs.`,
        pitfalls: [
          "Trusting the color band alone — fluorescent red is both succinylcholine and rocuronium; you must read the text.",
          "Using a generic blank label and scribbling — use the pre-printed class label whenever available.",
        ],
      },
      {
        heading: "How to label — every time, no exceptions",
        body: `Every syringe must carry: **drug name, concentration, your initials, and date/time** (and expiration for infusions). Label **immediately** after drawing up — before you set it down.

The discipline that prevents wrong-drug errors:

1. **Read the vial label when you pick it up.**
2. **Read it again as you draw it up.**
3. **Read it a third time as you discard the vial.**
4. **Label before the syringe leaves your hand.**

An ampoule of a paralytic and an antiemetic can look identical. The label and the triple-check are what stand between you and a never-event.`,
        pearls: [
          "Draw drugs up in a consistent left-to-right order on your tray so position itself is a second cue.",
          "Propofol supports bacterial growth — strict asepsis and a 6–12 h expiration on the label.",
        ],
        pitfalls: [
          "Drawing up several drugs and labeling them all at the end — that's exactly when two get swapped.",
          "Borrowing a syringe a colleague drew up that isn't labeled. Discard it.",
        ],
      },
      {
        heading: "Have your rescue drugs ready before you need them",
        body: `Induction drops blood pressure. Don't wait for the hypotension to start drawing up a pressor.

Before induction, have **drawn and labeled**:
- **Phenylephrine** 100 mcg/mL (bolus 50–100 mcg)
- **Ephedrine** 5 mg/mL (bolus 5–10 mg)
- **Atropine/glycopyrrolate** for bradycardia
- Know where the **emergency epinephrine** and the code cart are.

For longer or sicker cases, also have your infusions spiked, primed, labeled with concentration, and loaded in the pump *before* the patient is asleep.`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "monitors-in-order",
    number: 4,
    category: "Monitoring",
    title: "Monitors — What to Attach & In What Order",
    tagline:
      "Pulse ox first. The sequence the ASA standard monitors go on before you induce.",
    icon: "Activity",
    color: "from-sky-500 to-indigo-500",
    readMinutes: 6,
    keyPoints: [
      "Standard ASA monitors before EVERY anesthetic: pulse ox, NIBP, ECG, capnography, temperature.",
      "Pulse oximeter goes on FIRST — it's your earliest, continuous warning and gives an audible tone.",
      "Cycle a baseline blood pressure before you give any drug.",
      "Capnography becomes meaningful once the airway is in — it's your #1 confirmation of tube placement.",
      "Don't induce until you have a pulse ox tracing, a baseline BP, and an ECG rhythm on the screen.",
    ],
    sections: [
      {
        heading: "Why order matters",
        body: `You attach monitors in an order that gets you a **safety signal as fast as possible**, with the least disruption to the patient. The pulse oximeter is first because it's continuous, audible, and the earliest warning of trouble. Everything else builds from there.

> Don't push induction drugs until you can see a **pulse-ox waveform**, a **baseline blood pressure**, and an **ECG rhythm**.`,
        diagram: "monitors",
        diagramCaption:
          "The pre-induction sequence: pulse ox → NIBP → ECG, with capnography added once the airway is placed.",
      },
      {
        heading: "The sequence",
        body: `1. **Pulse oximeter** (finger). First on. Gives you SpO₂ and a beat-to-beat tone — you'll *hear* a desaturation or loss of pulse before you look up.
2. **NIBP cuff** (the *other* arm from the pulse ox so the cuff cycling doesn't drop the SpO₂ signal). Cycle a **baseline** immediately.
3. **ECG** — 3 or 5 leads. White-on-right, smoke (black) over fire (red); 5-lead adds brown (V) on the chest. Confirm a rhythm.
4. **Capnography** — connected to the circuit; becomes your money signal the instant the airway goes in (sustained EtCO₂ = you're in the trachea).
5. **Temperature** — probe placed after induction (esophageal/nasal) for anything beyond a short case.
6. **Add-ons as indicated:** BIS/processed EEG (TIVA, high awareness risk), nerve stimulator (TOF) for paralytics, arterial line for beat-to-beat BP.`,
        pearls: [
          "Put the BP cuff and pulse ox on OPPOSITE arms — same-arm cuff cycling makes the SpO₂ drop out every few minutes.",
          "An audible pulse-ox tone is a hands-free monitor — keep the volume up; pitch falls as saturation falls.",
        ],
        pitfalls: [
          "Inducing before a baseline BP is on the screen — you've lost your reference for the rest of the case.",
          "Forgetting that capnography only confirms the tube AFTER intubation, not before.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "patient-transfer",
    number: 5,
    category: "Patient Handling",
    title: "Transferring the Patient (Bed → OR Table)",
    tagline:
      "Align, lock, account for every line, and slide on a count — how to move a patient safely.",
    icon: "ArrowUpFromLine",
    color: "from-amber-500 to-orange-500",
    readMinutes: 5,
    keyPoints: [
      "Both surfaces must be brake-LOCKED and flush before anyone moves the patient.",
      "One person at the head owns the airway and lines and calls the move.",
      "Account for every line, drain, Foley, and monitor cable BEFORE sliding — nothing should be under tension.",
      "Use a draw-sheet or slide board; move on a clear count (\"on three\").",
      "Awake patients move themselves (\"scoot over\"); anesthetized patients are slid as one unit.",
    ],
    sections: [
      {
        heading: "The three phases of a safe transfer",
        body: `Most transfer injuries — to the patient *and* to you — come from rushing or from a line catching. Slow is smooth, smooth is fast.`,
        diagram: "transfer",
        diagramCaption:
          "Align & lock → account for all lines → controlled slide on a count.",
      },
      {
        heading: "Step by step",
        body: `**Before:**
- Position the patient's bed **flush** against the OR table at the same height.
- **Lock the brakes** on *both* surfaces. Confirm out loud.
- Lower the side rails between the surfaces.

**Assign roles:**
- **Head/airway person** (often you) controls the head, ETT/airway, and IV lines, and **calls the count**.
- Others position at the torso and legs.

**The move:**
- Trace **every line, cable, drain, and the Foley** — give slack, lift bags onto the receiving side, disconnect monitors that can come off briefly.
- For an **awake** patient: have them **scoot over** themselves while you guard lines.
- For an **anesthetized** patient: use a **draw-sheet or slide board**, lift slightly, and **slide as one unit on \"one-two-three\"** — head and feet together.

**After:**
- Reconnect monitors, recheck the airway and tube depth, confirm lines flow, reposition arms on boards (< 90° abduction), pad pressure points.`,
        pearls: [
          "The person at the head calls the move — the airway is the thing you cannot afford to lose.",
          "Re-check ETT depth after every move; tubes migrate during transfers and positioning.",
        ],
        pitfalls: [
          "Sliding before the brakes are locked — beds roll apart and patients fall between them.",
          "An IV or arterial line under the patient or caught on the rail gets ripped out mid-slide.",
          "Hyperabducting the arm (> 90°) on the board → brachial plexus stretch injury.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "iv-lines-and-fluids",
    number: 6,
    category: "Lines & Fluids",
    title: "IV Lines, De-airing, Fluid Warmer & Pressure Bags",
    tagline:
      "Spiking and priming a bag, getting every bubble out, hanging blood, and running fluids under pressure.",
    icon: "Droplet",
    color: "from-cyan-500 to-blue-500",
    readMinutes: 8,
    keyPoints: [
      "Prime the line SLOWLY — fast flow whips air into bubbles that are hard to clear.",
      "De-air at the drip chamber (fill to ½), then chase remaining bubbles up toward the bag and bleed every stopcock/port.",
      "A pressure bag inflated to ~300 mmHg drives rapid fluid or blood; it is NOT for routine maintenance.",
      "Run all rapid, large-volume, or cold fluids — and ALL blood — through a fluid warmer.",
      "Blood gets its own filtered tubing and is given with normal saline (or a compatible isotonic), never LR through the same line per many protocols.",
    ],
    sections: [
      {
        heading: "Spike, prime, and de-air",
        body: `Air in a line is both an annoyance (alarms, sluggish flow) and, in volume, a real embolism risk. Get it right once at setup.`,
        diagram: "iv-lines",
        diagramCaption:
          "Bag in a pressure bag → drip chamber half-filled → de-air the tubing → through the warmer → to the patient.",
      },
      {
        heading: "Priming the line without bubbles",
        body: `1. **Close the roller clamp.** Spike the bag (twist firmly, don't contaminate the spike).
2. **Squeeze the drip chamber** until it's about **half full** — too full and you can't see drips; too empty and you draw air into the line.
3. **Open the roller clamp slowly** and let fluid walk down the tubing by gravity. **Slow is key** — a fast flush froths the fluid into a column of small bubbles.
4. Hold the line straight and let the fluid front push the air out the end into a trash/cup.
5. **Invert and tap any injection ports and the stopcocks** as the fluid passes so air doesn't hide in them.
6. Close the clamp when primed, cap the end sterilely.`,
        pearls: [
          "Tap and flick stubborn bubbles UP toward the drip chamber — they rise, so work with gravity.",
          "Invert needleless ports and Y-sites while priming; that's where air loves to hide.",
        ],
        pitfalls: [
          "Flushing fast to \"save time\" — you'll spend longer chasing the bubbles you just made.",
          "Forgetting to bleed the stopcocks — air trapped there enters when you give a drug.",
        ],
      },
      {
        heading: "Pressure bags — rapid flow & blood",
        body: `A **pressure bag** is a sleeve with a bladder and a hand pump that squeezes the fluid bag to drive flow faster than gravity.

- Slide the fluid bag in, hang from the same hook, **inflate to ~300 mmHg** (stay in the green zone on the gauge).
- Used for **rapid resuscitation, blood products, and arterial-line flush** systems (a-line flush bags run continuously at 300 mmHg, ~3 mL/h).
- **De-air the bag first.** Under pressure, any residual air is pushed into the patient — a real **air embolism** risk. Squeeze air out of the bag before pressurizing.
- It empties fast — watch it, and **de-pressurize before it runs dry** so you don't pump the residual air in.`,
        pitfalls: [
          "Pressurizing a bag that still has an air pocket — that air goes straight to the patient.",
          "Walking away from a pressure bag — it empties in minutes and then pushes air.",
        ],
      },
      {
        heading: "Fluid warmer",
        body: `Cold fluids cause **hypothermia**, which worsens coagulation, drug metabolism, and wound healing. A fluid warmer heats fluid inline on its way to the patient.

- Run **all blood products, all rapid/large-volume fluids, and cold fluids** through the warmer.
- Prime the warmer per its design (it has its own tubing/cassette) and **de-air it** like any other segment.
- Confirm it's actually powered on and at temperature — an unplugged warmer is just extra tubing.`,
        pearls: [
          "For long cases or big resuscitations, warm everything — the patient cools faster than you'd think under drapes.",
        ],
      },
      {
        heading: "Hanging blood",
        body: `Blood has extra rules:

1. **Two-person check** of the unit against the patient's ID and the blood bank tag — name, MRN, unit number, blood type, expiration. This is a hard stop.
2. Use **blood tubing with an inline filter** (170–260 micron).
3. Prime with / co-administer **normal saline** (or a compatible isotonic). Avoid LR in the same line in many protocols (calcium + citrate clotting concern).
4. Run it through the **fluid warmer**; pressure bag if rapid transfusion is needed.
5. **Watch for a reaction** — fever, hypotension, hemoglobinuria — especially in the first minutes.`,
        pitfalls: [
          "Skipping or shortcutting the two-person identity check — wrong-unit transfusion is catastrophic.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "induction",
    number: 7,
    category: "Airway",
    title: "Induction — Putting the Patient to Sleep",
    tagline:
      "Preoxygenate, push the drugs in order, confirm you can mask ventilate, then paralyze.",
    icon: "Brain",
    color: "from-violet-500 to-fuchsia-500",
    readMinutes: 9,
    keyPoints: [
      "Preoxygenate to an end-tidal O₂ ≥ 0.8 — this buys you safe apnea time.",
      "Classic sequence: opioid → induction agent → confirm mask ventilation → paralytic.",
      "In a STANDARD induction you confirm you can mask ventilate BEFORE giving the paralytic; in RSI you don't.",
      "Induction drops blood pressure — have a pressor drawn and ready.",
      "RSI (full stomach / aspiration risk): preoxygenate, push hypnotic + paralytic together, no mask ventilation, intubate.",
    ],
    sections: [
      {
        heading: "Preoxygenation — fill the tank",
        body: `Before any apnea, you replace the nitrogen in the lungs with oxygen so the patient can tolerate not breathing while you secure the airway.

- Tight-fitting mask, **100% O₂**, high flow.
- Goal: **end-tidal O₂ ≥ 0.8** (or 3 minutes of normal breathing, or 8 vital-capacity breaths).
- Healthy adult → ~5–8 minutes of safe apnea. Obese, pregnant, kids, sick lungs → far less.
- Consider **apneic oxygenation** (nasal cannula at high flow left on during laryngoscopy) and a **ramped/head-up** position to extend safe time.`,
        pearls: [
          "Watch the end-tidal O₂ number, not the clock — that's the real measure that you're preoxygenated.",
          "A ramp (ear to sternal notch) improves both preoxygenation and your laryngoscopy view.",
        ],
      },
      {
        heading: "The standard induction sequence",
        body: `A typical adult IV induction, in order:

1. **Pre-induction:** monitors on, baseline BP, preoxygenating, pressor ready.
2. **Opioid** (e.g., fentanyl 1–2 mcg/kg) — blunts the sympathetic response to laryngoscopy. Given a minute or two ahead.
3. **Lidocaine** 0.5–1 mg/kg (optional) — blunts propofol injection burn and airway reflexes.
4. **Induction agent** — propofol 1.5–2.5 mg/kg (etomidate or ketamine if unstable). Watch the patient go down: lose verbal response, lose lash reflex.
5. **Confirm you can mask ventilate** — good chest rise, EtCO₂ tracing, no obstruction. *This is the safety gate.*
6. **Paralytic** — rocuronium 0.6 mg/kg or succinylcholine 1–1.5 mg/kg once you know you can ventilate.
7. **Wait for the paralytic to work** (TOF / clinical), then intubate.

> Sequence the drugs but keep watching the **patient and monitors**, not just your syringes — blood pressure, saturation, and your ability to ventilate drive every next step.`,
        diagram: "sniffing",
        diagramCaption:
          "Optimize the position before you induce — the sniffing position sets up both mask ventilation and intubation.",
        pitfalls: [
          "Giving the paralytic before confirming you can mask ventilate (in a non-RSI case) — if you can't ventilate AND can't intubate, you've removed your fallback.",
          "Not anticipating the BP drop — propofol drops SVR and contractility; treat it, don't watch it.",
        ],
      },
      {
        heading: "Rapid sequence induction (RSI)",
        body: `When the patient is at risk of **aspiration** (full stomach, bowel obstruction, GERD, pregnancy, trauma, emergency), you do **not** mask ventilate between drugs — you minimize the time the airway is unprotected.

1. **Optimize preoxygenation** (end-tidal O₂ ≥ 0.8), head up.
2. Have suction **on and in hand.**
3. Push **induction agent + fast paralytic together** (propofol/etomidate + succinylcholine 1–1.5 mg/kg or rocuronium 1.2 mg/kg).
4. **No mask ventilation** (avoid insufflating the stomach). +/- cricoid pressure (institution-dependent; evidence is debated).
5. **Intubate** as soon as paralyzed, inflate the cuff, confirm.

Modified RSI (gentle mask ventilation with low pressures) is used when desaturation risk outweighs aspiration risk — e.g., kids, the morbidly obese.`,
        pearls: [
          "For RSI, draw the paralytic in a generous dose and push it right behind the hypnotic — speed of onset is the point.",
          "Rocuronium 1.2 mg/kg gives intubating conditions nearly as fast as sux, and sugammadex can reverse it.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "intubation",
    number: 8,
    category: "Airway",
    title: "Intubation",
    tagline:
      "Position, laryngoscopy, passing the tube, confirming placement and securing it.",
    icon: "Wind",
    color: "from-orange-500 to-red-500",
    readMinutes: 10,
    keyPoints: [
      "Position first: sniffing position, ear to sternal notch, ramp the obese. Position fixes most \"difficult\" views.",
      "Scissor the mouth open, blade in from the right sweeping the tongue left, lift along the handle axis — don't lever on the teeth.",
      "Mac blade sits in the vallecula (indirect epiglottis lift); Miller picks up the epiglottis directly.",
      "Confirm with sustained EtCO₂ + bilateral breath sounds + chest rise. EtCO₂ is the gold standard.",
      "Tube depth ~21 cm at the lip (women) / ~23 cm (men); reconfirm after any position change.",
    ],
    sections: [
      {
        heading: "Position is 90% of the battle",
        body: `Before you pick up the blade, fix the position. A good view is *made* at setup, not rescued during laryngoscopy.

- **Sniffing position:** flex the lower neck, extend at the atlanto-occipital joint — this aligns the oral, pharyngeal, and laryngeal axes.
- **Landmark:** the **external ear (tragus) should be level with the sternal notch**, with the face plane parallel to the ceiling.
- **Ramp obese patients** (blankets or a ramp under the shoulders/head) until that ear-to-sternum line is achieved.
- **Bed height:** patient's forehead at roughly your **xiphoid/umbilicus** — don't hunch.`,
        diagram: "sniffing",
        diagramCaption:
          "Neutral vs. sniffing: align the tragus with the sternal notch, line parallel to the floor.",
        pitfalls: [
          "Laryngoscoping a flat or under-ramped patient and blaming the anatomy — fix the position first.",
        ],
      },
      {
        heading: "Laryngoscopy technique",
        body: `**Hold the laryngoscope in your LEFT hand** (always, regardless of handedness).

1. **Open the mouth** with a right-hand **scissor** maneuver (thumb on lower molars, finger on upper).
2. Insert the blade at the **right corner**, advancing while **sweeping the tongue to the left** into the flange. Keep the tongue out of your view.
3. **Mac (curved):** tip into the **vallecula**, then lift to indirectly flip the epiglottis up. **Miller (straight):** pass under and **directly lift the epiglottis.**
4. **Lift along the axis of the handle** — up and away toward the far corner of the ceiling. **Do NOT lever back on the upper teeth.**
5. Identify the **glottis**: vocal cords, the triangular opening, arytenoids posteriorly.
6. Use **external laryngeal manipulation (ELM/BURP)** on the thyroid cartilage to bring the cords into view if needed.`,
        diagram: "laryngoscopy",
        diagramCaption:
          "Cormack–Lehane grades. I–II → intubate directly; III–IV → bougie, reposition, or video laryngoscopy.",
        pearls: [
          "If the view is poor, optimize before you abandon: reposition the head, ELM, suction, switch to a bougie or video laryngoscope.",
          "Watch the tube tip pass BETWEEN the cords with your own eyes — don't just shove and hope.",
        ],
        pitfalls: [
          "Levering the blade against the incisors — chipped teeth and still no view.",
          "Rocking back to lift instead of lifting along the handle direction.",
        ],
      },
      {
        heading: "Passing and confirming the tube",
        body: `1. With the cords in view, pass the **ETT from the right corner** of the mouth (keep it out of your line of sight to the glottis) and watch the **cuff disappear past the cords**.
2. **Remove the stylet**, advance to depth, **inflate the cuff** (just to seal — minimal occluding volume, ~5–7 mL; verify pressure if you have a manometer, < 30 cmH₂O).
3. **Confirm placement — in order of reliability:**
   - **Sustained EtCO₂** for several breaths (the gold standard — esophageal placement gives no sustained trace).
   - **Bilateral breath sounds**, absent over the epigastrium.
   - **Symmetric chest rise**, fogging in the tube, maintained SpO₂.
4. **Set depth:** ~**21 cm at the lip in women, ~23 cm in men** (rule of thumb ≈ 3 × tube size). Listen to rule out a right mainstem (absent left-sided breath sounds → pull back).
5. **Secure** with tape/tie and connect to the ventilator.`,
        diagram: "ett-depth",
        diagramCaption:
          "Cuff in mid-trachea, tip a few cm above the carina; tape at ~21 cm (women) / ~23 cm (men).",
        pitfalls: [
          "Calling placement on chest rise alone — confirm with sustained EtCO₂ every time.",
          "Advancing too deep → right mainstem intubation (left lung not ventilated, hypoxia). Pull back until bilateral.",
          "Forgetting to reconfirm depth after repositioning or moving the patient.",
        ],
      },
      {
        heading: "When it's difficult",
        body: `If you can't intubate, the priority is **oxygenation, not the tube** — patients die from hypoxia, not from a missed intubation.

- **Can't intubate but CAN ventilate:** mask-ventilate, re-optimize (position, ELM, bougie, video), get help, consider an LMA. You have time.
- **Can't intubate, can't ventilate (CICV):** call for help immediately → LMA → and proceed down the difficult-airway algorithm to a surgical airway if needed.
- **Limit attempts** — repeated tries cause edema and bleeding that make everything worse. Change *something* between attempts.`,
        pearls: [
          "Default to whatever oxygenates — a mask or LMA that ventilates beats a heroic third laryngoscopy attempt.",
          "Call for help early — it's a sign of good judgment, not weakness.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "extubation",
    number: 9,
    category: "Airway",
    title: "Extubation",
    tagline:
      "The criteria, the technique, and why coming out can be more dangerous than going in.",
    icon: "ArrowUpFromLine",
    color: "from-rose-500 to-pink-500",
    readMinutes: 7,
    keyPoints: [
      "Extubation is electively re-creating an unprotected airway — respect it as much as induction.",
      "Confirm reversal of paralysis (TOF ratio ≥ 0.9) BEFORE you extubate.",
      "Criteria: awake/following commands, adequate spontaneous ventilation, protective reflexes, hemodynamically stable, reversed.",
      "Suction the oropharynx, give 100% O₂, deflate the cuff, pull on a positive-pressure breath.",
      "Have your reintubation gear and drugs still in the room — laryngospasm and failed extubation happen here.",
    ],
    sections: [
      {
        heading: "Treat it like induction in reverse",
        body: `Coming out is deceptively the riskier end of the case. You are deliberately removing a secured airway and handing breathing back to a patient who may still be partly anesthetized or weak. Laryngospasm, obstruction, aspiration, and negative-pressure pulmonary edema all live here.

> Don't let your guard down at the end. Keep suction, an Ambu bag, reintubation equipment, and induction/paralytic drugs **in the room** until the patient is safely breathing on their own.`,
      },
      {
        heading: "Criteria — is it safe to extubate?",
        body: `Confirm **all** of these:

- **Neuromuscular blockade reversed** — TOF ratio **≥ 0.9** (sustained head lift ≥ 5 s, strong grip are crude surrogates). Reverse with neostigmine/glycopyrrolate or sugammadex as indicated.
- **Awake and responsive** — follows commands, eyes open (for an awake extubation).
- **Adequate spontaneous ventilation** — reasonable tidal volumes and rate, acceptable EtCO₂, **SpO₂ stable** on low FiO₂.
- **Protective airway reflexes** returning — swallow, gag, cough.
- **Hemodynamically stable, normothermic, not bleeding.**
- **Reversal agents and antiemetics** given as needed.

**Awake vs. deep:** *Awake* extubation (patient following commands) is the default and safest for aspiration risk and difficult airways. *Deep* extubation (still anesthetized, reflexes suppressed) reduces coughing/bucking — reserved for select patients with an easy airway and low aspiration risk.`,
        pitfalls: [
          "Extubating with residual paralysis (TOF < 0.9) → upper-airway obstruction and hypoxia in PACU.",
          "Extubating in the excitement/light plane (eyes closed, not yet following commands) → laryngospasm.",
        ],
      },
      {
        heading: "Technique",
        body: `1. **100% O₂** for a few minutes — preoxygenate for the apnea you might create.
2. **Suction** the oropharynx (and down the tube if needed) — clear blood and secretions.
3. Confirm the patient meets criteria; have them take a breath / follow commands.
4. **Deflate the cuff** fully.
5. **Remove the tube on a positive-pressure breath** (or peak inspiration) — this helps blow out secretions sitting above the cuff and discourages laryngospasm.
6. Immediately apply a **face mask with O₂**, confirm the patient is moving air, watch the EtCO₂/SpO₂.
7. Be ready to support: jaw thrust, oral/nasal airway, CPAP, or reintubate.`,
        pearls: [
          "Pulling the tube on a positive-pressure breath clears secretions over the cords and softens the cough.",
          "Keep the patient on the monitor and on O₂ during transport to PACU — the risk window doesn't close at extubation.",
        ],
      },
      {
        heading: "Laryngospasm — recognize and break it",
        body: `Laryngospasm is reflex closure of the cords, classically in the **light plane** as the tube comes out or with secretions/blood irritating the cords.

- **Signs:** stridor (partial) or **silent** total obstruction, paradoxical chest/abdominal movement, falling SpO₂.
- **Treatment ladder:**
  1. **Remove the stimulus**, 100% O₂, **jaw thrust + firm CPAP**.
  2. **Larson's maneuver** — firm pressure at the "laryngospasm notch" behind the earlobes.
  3. **Deepen** (small propofol bolus 0.25–0.5 mg/kg).
  4. If persistent/desaturating: **succinylcholine** (e.g., 0.1–1 mg/kg IV, or IM if no IV) and ventilate / reintubate.
- Watch afterward for **negative-pressure pulmonary edema** (pink frothy secretions, hypoxia) from forceful inspiration against a closed glottis.`,
        pitfalls: [
          "Waiting too long to treat — silent obstruction with a dropping sat needs immediate action, not observation.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "anesthesia-basic-concepts",
    number: 10,
    category: "Foundations",
    title: "Anesthesia Basic Concepts",
    tagline:
      "The types of anesthesia, the components of a general, the stages, MAC, and the 'flying a plane' mental model.",
    icon: "Layers",
    color: "from-violet-500 to-indigo-500",
    readMinutes: 9,
    credit: AME_CREDIT,
    keyPoints: [
      "Three broad techniques: sedation (a continuum of depth), general anesthesia (GA), and regional anesthesia (RA) — often combined.",
      "A general is built from components: amnesia, hypnosis (unconsciousness), analgesia, immobility/paralysis, and blunted autonomic response.",
      "Classic stages: 1 analgesia, 2 excitement (the dangerous plane — laryngospasm/aspiration), 3 surgical anesthesia, 4 overdose. IV induction skips stage 2; emergence passes back through it.",
      "MAC compares potency: 1 MAC = 50% don't move to incision, 1.3 MAC ≈ 95–99%. MAC is additive, MAC-awake ≈ 0.3 MAC.",
      "Think of a case like a flight: pre-op (boarding), induction (takeoff), maintenance (cruise), emergence (landing) — most danger is at takeoff and landing.",
    ],
    sections: [
      {
        heading: "The three techniques",
        body: `Anesthesia comes in three broad flavors, mixed and matched to the patient and surgery:

- **Sedation** — medication to reduce anxiety and awareness along a *continuum*. The ASA depth levels:
  - **Minimal (anxiolysis)** — normal response to voice.
  - **Moderate ("conscious")** — purposeful response to voice/touch.
  - **Deep** — purposeful response only to repeated or painful stimulus.
  - **General anesthesia** — unarousable even to pain.
- **General anesthesia (GA)** — render the patient insensible to surgical stimulus.
- **Regional anesthesia (RA)** — local anesthetic placed near nerves to numb a region:
  - **Neuraxial** (spinal, epidural) — a large region.
  - **Peripheral nerve block** — a single nerve / extremity.

Sedation is a continuum, not a fixed state — a "moderate" sedation can drift into a general, so you must be ready to rescue the airway at any depth.`,
        pearls: [
          "RA can be the sole anesthetic, or layered with sedation/GA for comfort and post-op pain control.",
        ],
      },
      {
        heading: "What makes up a 'general'",
        body: `A general anesthetic is assembled from several goals, each handled by different drugs:

1. **Anxiolysis** — often a pre-op benzodiazepine.
2. **Amnesia** — no recall of the event.
3. **Hypnosis / unconsciousness** — the sedation continuum, taken all the way down.
4. **Analgesia** — pain control (opioids, regional, multimodal).
5. **Immobility / muscle relaxation** — paralysis when the surgery or airway requires it; plus blunting of the autonomic (sympathetic) response to stimulation.

You rarely get all of these from one drug — a balanced anesthetic combines a hypnotic, an analgesic, and (often) a paralytic.`,
      },
      {
        heading: "The stages of anesthesia",
        body: `First described with ether, the classic **stages** still map onto what you see:

| Stage | Name | What you see |
|---|---|---|
| **1** | Analgesia | Sedated, still responsive |
| **2** | Excitement | ↑HR/BP, disconjugate gaze, may be combative; **vomiting & laryngospasm risk** |
| **3** | Surgical anesthesia | HR/BP settle; deep enough to operate |
| **4** | Overdose | Vital signs collapse |

- **Mask (inhalational) induction** walks the patient through stage 1 → 2 → 3 (you want stage 2 brief).
- **IV induction** is so fast you don't really see stage 2 — awake → stage 3.
- **Emergence** runs the stages in *reverse*. Stage 2 on the way out is dangerous: the patient may move and look awake but is still anesthetized — extubating or stimulating here risks **laryngospasm and aspiration.**`,
        pitfalls: [
          "Stimulating or extubating a patient in stage 2 (light, not yet following commands) — a classic trigger for laryngospasm.",
        ],
      },
      {
        heading: "MAC — comparing potency",
        body: `**Minimum Alveolar Concentration (MAC)** is the common yardstick for how much volatile a patient is getting. Four things to know:

1. **It's a continuum.** 1 MAC = the concentration at which **50%** of patients don't move to a skin incision; **1.3 MAC** covers ~95–99%. **MAC-awake ≈ 0.3 MAC**; amnesia is lost well below 1 MAC.
2. **It's additive.** 0.5 MAC of nitrous + 0.5 MAC of a volatile ≈ 1 MAC total.
3. **It shifts with the patient.** MAC values are for healthy 40-year-olds. **Lowered by** age, opioids, propofol, acute alcohol, hypothermia, pregnancy. **Raised by** chronic alcohol, stimulants (cocaine, amphetamines, ephedrine), and youth (peaks ~6 months old).
4. **The monitor shows it.** Modern machines display a calculated MAC from the gases in use — a helpful training guide for how much you're delivering.`,
        pearls: [
          "Reach for the displayed MAC as a sanity check, but treat the patient and the surgical stimulation, not just the number.",
        ],
      },
      {
        heading: "The flight: how a case flows",
        body: `Anesthesia is often compared to flying a plane — both are very safe, and both have their danger at **takeoff and landing.** The perioperative course:

- **Pre-op (boarding):** the H&P, optimizing the patient, IV/lines, anxiolysis, and building the plan (plus backup plans).
- **Induction (takeoff):** induce, secure the airway, position, add monitoring.
- **Maintenance (cruise):** keep them comfortable and still with vapor/analgesia/relaxation; stay vigilant.
- **Emergence (landing):** titrate off the anesthetic, reverse paralysis, remove the airway when safe, off to recovery.
- **Post-op (to the terminal):** PACU or ICU — vitals, pain, and PONV managed until recovered.

Most problems happen going to sleep and waking up — so that's where your attention and preparation concentrate.`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "getting-the-most",
    number: 11,
    category: "Foundations",
    title: "Getting the Most From Your Rotation",
    tagline:
      "How to observe, study, and behave so a new anesthesia rotation actually sticks.",
    icon: "GraduationCap",
    color: "from-primary to-emerald-500",
    readMinutes: 6,
    credit: AME_CREDIT,
    keyPoints: [
      "Learn by looping: read about a topic, see it in the OR, then read it again — it makes far more sense the second time.",
      "Pick one or two topics a day. The volume is overwhelming if you try to learn it all at once.",
      "'Slow is smooth, smooth is fast.' Learn the correct mechanics first; speed comes later.",
      "Develop situational awareness — read the room, and don't take it personally when the team is too busy to teach.",
      "Build a skills checklist: machine check, room setup, drawing up & diluting drugs, mask/LMA/intubate, set up an IV bag, start an IV.",
    ],
    sections: [
      {
        heading: "How to study anesthesia",
        body: `Anesthesia is equal parts **thinking** and **doing**, so reading alone won't get you there.

- **Loop your learning:** read about a subject → watch it in the OR → read it again. Concepts that made no sense on paper (the machine check is the classic example) click after you've seen them live.
- **Go in with a focus.** Each day, pick one or two topics, read them the night before, and watch for them in the OR.
- **Respect the procedure and the patient.** These are real, high-risk, invasive procedures on people who've trusted the team. Never think of it as "practicing on patients."
- **Slow is smooth, smooth is fast.** Get the mechanics right — where the blade tip goes, where the needle goes — before you try to be quick. Good technique is what eventually makes you fast.`,
        pearls: [
          "Keep a pocket reference (this Playbook works) for quick lookups and notes between cases.",
        ],
      },
      {
        heading: "What to learn — concepts & skills",
        body: `Aim to understand and be able to *explain*:

- The components of a general anesthetic and the **stages of anesthesia**.
- **MAC** and how vapors are selected.
- The common medications and when each is chosen.
- Which drugs must be **diluted** before use.

And aim to be able to *do* (have someone show you each):

- A basic **machine check** and the **room setup**.
- **Draw up and label** drugs, including dilutions.
- **Mask ventilate, place an LMA, and intubate** an adult.
- **Set up an IV bag** and **start an IV.**`,
      },
      {
        heading: "Your first minutes in any OR",
        body: `Walk into a room and orient yourself the same way every time:

1. **Introduce yourself** to the circulating nurse, then to the anesthesia team.
2. **Survey the anesthesia setup** — where's the drug cart, the machine, what's laid out? **Don't touch** the anesthesia cart, meds, or equipment.
3. **If a case is already running, read the room:** are gases flowing? Is a vaporizer on? Find the monitor and locate each vital — ECG (usually top), heart rate, SpO₂, blood pressure (and when it last cycled), EtCO₂, temperature. Is the vapor % / MAC displayed?

This 60-second routine tells you the state of the anesthetic before you've said a word.`,
        pitfalls: [
          "Touching anesthesia drugs or equipment without being asked — nothing makes a team edgier.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "or-culture",
    number: 12,
    category: "Foundations",
    title: "Getting Around the OR",
    tagline:
      "The team, the sterile field, and the unwritten etiquette that gets you invited back.",
    icon: "Users",
    color: "from-sky-500 to-cyan-500",
    readMinutes: 6,
    credit: AME_CREDIT,
    keyPoints: [
      "You're a guest in a culture built on trust. Listen twice as much as you talk and read the room.",
      "Know the players: the anesthesia team (attending, resident/fellow, AA/CRNA, tech) and the surgical team (surgeon, circulator, scrub).",
      "The anesthesiologist effectively has three 'patients': the patient on the table, the surgeon, and the OR team.",
      "Never contaminate the sterile field — it's the fastest way to get sent out. Keep your anesthesia area clean.",
      "Build a good relationship with surgeons; it's a symbiotic, career-long partnership.",
    ],
    sections: [
      {
        heading: "Who's who in the room",
        body: `**Anesthesia team:**
- **Anesthesiologist** — physician who completed anesthesiology training.
- **Resident / fellow** — physician in (or doing advanced) anesthesia training.
- **AA / CRNA** — anesthesiologist assistant or certified registered nurse anesthetist; specialized anesthesia providers.
- **Anesthesia technician** — turns rooms over, maintains equipment, an extra set of hands.
- **Students / observers** — you.

**Surgical team:**
- **Surgeon** — runs the operation.
- **Circulating nurse** — patient care, not scrubbed in.
- **Scrub nurse / scrub tech (first assist)** — scrubbed in, assists the surgeon.

> A useful framing: the anesthesia team has **three patients** — the patient on the table, the surgeon, and the OR team. Keeping all three happy and safe is the job.`,
      },
      {
        heading: "The sterile field — don't get tossed",
        body: `Sterile instruments are laid out on draped tables and stands. The quickest way to get sent out of a room is to contaminate them.

- **Steer clear** of instrument tables and the scrubbed team; don't brush the surgeon or scrub tech.
- When you open sterile supplies (ETT, LMA), **open the package but don't lay the contents on a non-sterile surface.**
- Keep your **own** anesthesia area clean — don't drop wrappers and trash on the floor.`,
        pitfalls: [
          "Walking too close to the back table or the scrubbed team — a contamination there can scrub the whole setup.",
        ],
      },
      {
        heading: "Professionalism & the surgeon relationship",
        body: `You're working to make a good impression — those who fit in get to do more.

- **Listen more than you talk;** develop situational awareness. Some rooms are chatty, some are silent — match the culture, and keep questions to a minimum when things are tense.
- **Be respectful to everyone** — it takes the whole team to run an OR.
- The anesthesia–surgeon relationship is **symbiotic**: they need you to operate, you need them for cases. Being rude, loud, glued to your phone, or complaining about case length earns you nothing. Build good relationships and they'll take care of you.`,
        pearls: [
          "Every room and team has its own dynamic — when in doubt, be quiet, observe, and learn the culture first.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "vapors-and-gases",
    number: 13,
    category: "Pharmacology",
    title: "Vapors & Gases",
    tagline:
      "How volatile anesthetics work, the medical gases, and choosing iso / sevo / des.",
    icon: "Wind",
    color: "from-sky-500 to-indigo-500",
    readMinutes: 7,
    credit: AME_CREDIT,
    keyPoints: [
      "Liquid agent → agent-specific vaporizer → carried by a gas (O₂/air/N₂O) → breathing circuit → patient; mostly exhaled unchanged.",
      "US hose colors: O₂ green, air yellow, N₂O blue, waste/scavenging white.",
      "Solubility sets speed: less soluble = faster on/off. Des < Sevo < Iso, so des wakes fastest, iso slowest.",
      "Sevoflurane is the least pungent → the agent for inhalational (mask) inductions, especially in kids.",
      "Change depth faster with higher fresh-gas flow, larger tidal volumes, or a higher vaporizer %.",
    ],
    sections: [
      {
        heading: "How a vapor reaches the patient",
        body: `Volatile anesthetics are one of the few drugs used only in anesthesia. They start as a **liquid** in an **agent-specific vaporizer**. A carrier gas (oxygen, air, or nitrous) flows from the pipeline/cylinder → flow meters → vaporizer, where it picks up a precise % of vapor → down the inspiratory limb → to the patient.

Once inhaled, the vapor moves lung → blood → brain to produce anesthesia, then leaves the same way. A little is metabolized, but most is simply **"blown off"** (exhaled unchanged) — which is what lets the patient wake up as the level falls.`,
        diagram: "gas-flow",
        diagramCaption:
          "The gas path from supply to patient and back through the circle system.",
      },
      {
        heading: "Medical gases & hose colors",
        body: `Know the gases and their US color codes at a glance:

| Gas | Color | Notes |
|---|---|---|
| Oxygen (O₂) | **Green** | Medical-grade pure O₂ |
| Air | **Yellow** | Medical-grade air |
| Nitrous oxide (N₂O) | **Blue** | "Laughing gas"; common for dental sedation |
| Waste / scavenging | **White** | Carries waste gas away |`,
      },
      {
        heading: "Choosing the volatile: solubility & pungency",
        body: `Two properties drive agent choice:

**Solubility** — the more soluble in blood, the *slower* the patient goes to sleep and wakes up. From most to least soluble: **Iso > Sevo > Des.** So **iso** is slowest to emerge (handy when you want the patient to stay deep/intubated; historically used in cardiac cases for stability), and **des** wakes fastest (good for the obese and long cases).

**Pungency** — **Sevo** is the least pungent, so it's the agent for **inhalational (mask) inductions** (the standard for kids). **Des** is the most pungent and an airway irritant — be cautious in smokers and asthmatics.

| Agent | ~1 MAC | Min. fresh-gas flow | Best for | Watch out |
|---|---|---|---|---|
| Isoflurane | ~1.2% | 1 L/min | Hemodynamic stability, staying intubated | Slow wake-up |
| Sevoflurane | ~1.8–2% | 2 L/min | Mask induction; least pungent | Compound A at very low flows |
| Desflurane | ~6.6% | 1 L/min | Obese / long cases; fastest emergence | Pungent — airway irritant |

**Changing depth faster:** turn up the **fresh-gas flow**, increase **tidal volume**, or dial up the **vaporizer %**. (The "second gas effect" of nitrous is textbook trivia and rarely clinically meaningful.)`,
        pearls: [
          "Nitrous can be added (e.g., 50%) to cut volatile requirement, but avoid it in closed air spaces and when PONV risk is high.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "iv-anesthetic-drugs",
    number: 14,
    category: "Pharmacology",
    title: "IV Drugs — A Field Guide",
    tagline:
      "Induction agents, benzodiazepines, opioids and the non-opioid analgesics, with doses and when to use each.",
    icon: "Pill",
    color: "from-emerald-500 to-teal-500",
    readMinutes: 11,
    credit: AME_CREDIT,
    keyPoints: [
      "Five checks before any drug: allergies, weight, name (not the vial's look), concentration, then calculate & draw up.",
      "Propofol (1.5–2.5 mg/kg) is the workhorse induction agent; etomidate for the unstable; ketamine for analgesia/bronchospasm or no IV.",
      "Midazolam 2 mg IV for anxiolysis/amnesia; flumazenil reverses benzos but can precipitate seizures.",
      "Titrate opioids to respiratory rate — a spontaneous RR of 8–10 usually means adequate analgesia.",
      "Multimodal: acetaminophen, NSAIDs (ibuprofen/ketorolac — don't combine them), ketamine and dexmedetomidine all spare opioids.",
    ],
    sections: [
      {
        heading: "Five checks before you give any drug",
        body: `Doses are weight-based and reported as ranges — start at the **low end** and escalate (you can always give more; you can't take it back). Before every drug:

1. **Allergies** — easy to skip when rushed, costly to get wrong.
2. **Weight** — especially in peds.
3. **Name** — read the label, *not* the look of the vial; similar-looking vials cause most errors.
4. **Concentration** — mg/mL vs mcg/mL; some drugs need dilution.
5. **Calculate the dose and draw up** the right volume in the right-size syringe; for emergency drugs draw a single bolus.`,
        pearls: [
          "See the [Drawing Up & Labeling Drugs](/playbook/drawing-up-drugs) guide for syringe sizes and the color-code system.",
        ],
      },
      {
        heading: "Induction agents",
        body: `| Agent | Class | Adult dose | Why / when | Watch out |
|---|---|---|---|---|
| **Propofol** | Hindered phenol | 1.5–2.5 mg/kg (≈150–200 mg) | Workhorse; smooth; antiemetic; infusion for TIVA (100–300 mcg/kg/min) | ↓BP (↓SVR + contractility), worse if hypovolemic; injection pain |
| **Etomidate** | Imidazole | 0.2–0.3 mg/kg (≈14–20 mg) | Hemodynamically **stable** induction for the sick patient | Adrenal suppression (even 1 dose), myoclonus, PONV; no infusion |
| **Ketamine** | NMDA antagonist | 1–2 mg/kg IV (4 mg/kg IM) | Dissociative; **analgesia**, bronchodilation, can use when unstable / no IV | Emergence hallucinations, ↑secretions, ↑HR/BP |

**Propofol injection pain:** pre-treat with **lidocaine** and push slowly. **Ketamine:** pair with a benzo (hallucinations) and glycopyrrolate (secretions).`,
        diagram: "syringes",
        diagramCaption:
          "Typical induction & reversal syringes — sizes and the ISO color codes.",
      },
      {
        heading: "Benzodiazepines & reversal",
        body: `**Midazolam (Versed)** — short-acting benzo for **anxiolysis** (pre-op) and **anterograde amnesia** (e.g., before a stressful transport).
- Adult **2 mg IV**; peds **0.5 mg/kg PO** or **0.1 mg/kg IV** (up to ~2 mg).

**Flumazenil** — reverses benzodiazepine sedation/respiratory depression.
- **0.2 mg over 15 s**, repeat **0.1 mg q1 min** to a max of ~1 mg.
- **Caution:** can precipitate **seizures** in chronic benzo users (acute withdrawal).`,
      },
      {
        heading: "Opioids",
        body: `Titrate to effect, and watch the **respiratory rate** as your gauge.

| Opioid | Rel. potency | Adult dose | Peak | Duration | Notes |
|---|---|---|---|---|---|
| **Fentanyl** | 100 | 0.5–1 mcg/kg (induction); 25–50 mcg boluses | ~5 min | ~45 min | Fast on/off; rigid chest with rapid bolus |
| **Hydromorphone** | 10 | ~0.2 mg, titrate | ~15–20 min | 4–5 h | Workhorse for post-op pain; no histamine |
| **Morphine** | 1 | ~2 mg, titrate | ~20 min | ~4 h | Histamine release → itch/↓BP |
| **Meperidine** | 0.1 | 12.5 mg (may repeat) | ~15 min | ~2 h | Mainly for **post-op shivering/rigors** |

> Rule of thumb: **"8 is great, 10 I'll take"** — a spontaneous respiratory rate of 8–10 usually signals adequate analgesia without overdosing.

**Naloxone** reverses opioid sedation/respiratory depression: **0.04 mg IV**, titrated. It can wear off before a long-acting opioid does (re-dose), and abrupt full reversal can cause flash pulmonary edema — go slow.`,
        pitfalls: [
          "Slamming a big fentanyl bolus → chest-wall rigidity that makes ventilation difficult.",
          "Fully reversing with a large naloxone dose — sudden pain, hypertension, and flash pulmonary edema.",
        ],
      },
      {
        heading: "Non-opioid analgesics (multimodal)",
        body: `Layering these reduces opioid need, PONV, and sedation:

- **Acetaminophen** — IV or PO; **15 mg/kg (max 1 g) IV q6h** or 650 mg PO q6h; **max 4 g/24 h**. Check for other acetaminophen-containing meds.
- **Ibuprofen** (NSAID) — 600 mg PO. **Don't combine with ketorolac.**
- **Ketorolac** (NSAID) — 30 mg then 15–30 mg q6h IV/IM; ensure the patient is **well hydrated** (renal blood flow). **Don't combine with ibuprofen.**
- **Ketamine** (low-dose) and **dexmedetomidine** also provide opioid-sparing analgesia.`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "paralytics-and-reversal",
    number: 15,
    category: "Pharmacology",
    title: "Paralytics & Reversal",
    tagline:
      "Depolarizing vs non-depolarizing blockers, the twitch monitor, and reversing safely.",
    icon: "Zap",
    color: "from-red-500 to-orange-500",
    readMinutes: 8,
    credit: AME_CREDIT,
    keyPoints: [
      "Succinylcholine: fastest on, shortest off (~1 min onset, 5–10 min) — the classic RSI relaxant; an MH trigger.",
      "Sux is contraindicated where it can cause lethal hyperkalemia: burns, denervation/stroke/paralysis, muscular dystrophy.",
      "Rocuronium 1.2 mg/kg is the non-depolarizing RSI alternative when sux is contraindicated.",
      "Cisatracurium is organ-independent (Hofmann elimination) — the choice in renal/hepatic failure.",
      "Reverse with neostigmine only after at least one twitch returns; give glycopyrrolate alongside it to block bradycardia/SLUDGE.",
    ],
    sections: [
      {
        heading: "How they work & how you monitor",
        body: `Neuromuscular blockers (NMBs, "paralytics") relax skeletal muscle at the neuromuscular junction — so the surgeon can operate and the patient doesn't fight the ventilator. Two types:

- **Depolarizing** (succinylcholine) — briefly *depolarizes* the muscle, so you see **fasciculations** when it's given.
- **Non-depolarizing** ("-onium" / "-urium" agents) — competitively block the receptor; **no movement** on administration.

**Monitoring:** a peripheral nerve stimulator delivers a **train-of-four (TOF)** — four twitches — and you watch how many return and whether tetany is sustained. Reversal is given only **after at least one twitch returns.**

> Muscle relaxants are the **most common cause of anaphylaxis** in the OR.`,
      },
      {
        heading: "Succinylcholine",
        body: `The fastest-on, shortest-acting paralytic — the classic RSI drug.
- **Dose 1–1.5 mg/kg** (≈180 mg); onset ~1 min, duration ~5–10 min.
- **An MH trigger.**
- **Contraindicated** where up-regulated/extrajunctional ACh receptors cause **lethal hyperkalemia:** burns (after ~24 h), denervation injury (stroke, spinal cord injury, prolonged paralysis), muscular dystrophy/myopathy.
- Other effects: myalgia (worse at higher doses), bradycardia (especially repeat doses and in children — pretreat peds with atropine), ↑intragastric/intraocular/intracranial pressure.`,
        pitfalls: [
          "Giving sux to a burn, denervation, or dystrophy patient — the potassium spike can cause cardiac arrest.",
        ],
      },
      {
        heading: "Non-depolarizing agents",
        body: `| Agent | Intubating dose | Onset | Duration | Notes |
|---|---|---|---|---|
| **Rocuronium** | 0.6 mg/kg (**1.2 for RSI**) | 1–2 min (RSI) | 30–60 min | Comes ready in solution; sux alternative; can be reversed by sugammadex |
| **Vecuronium** | 0.08–0.1 mg/kg | 3–5 min | 25–40 min | Cheap, reliable; comes as a powder to reconstitute |
| **Cisatracurium** | 0.15–0.2 mg/kg | 2–3 min | 30–60 min | **Hofmann elimination** — organ-independent; best in renal/hepatic failure |

When sux is contraindicated and you need fast intubating conditions, **rocuronium 1.2 mg/kg** is the go-to.`,
      },
      {
        heading: "Reversal",
        body: `**Neostigmine** — an anticholinesterase that raises acetylcholine to out-compete the non-depolarizer.
- **0.04–0.07 mg/kg, max ~5 mg**; requires at least one twitch back (it can't reverse a deep block).
- Side effects: **bradycardia and SLUDGE** (Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis).
- **Don't confuse "Neo" (neostigmine) with "Neo" (neosynephrine = phenylephrine).**

**Glycopyrrolate** — given *with* neostigmine to block the bradycardia/SLUDGE.
- **~0.2 mg per 1 mg of neostigmine** (max ~1 mg). Handy trick: draw the **same volume** of glycopyrrolate as neostigmine (both are common concentrations that work out close).

**Sugammadex** — a newer reversal that encapsulates **rocuronium/vecuronium** and can reverse even a deep block (it does *not* reverse cisatracurium). Many programs now use it preferentially.`,
        pearls: [
          "Giving too much reversal can itself cause weakness — discuss the dose with your attending based on the TOF.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "hemodynamic-drugs",
    number: 16,
    category: "Pharmacology",
    title: "Pressors, Antihypertensives & Dilutions",
    tagline:
      "BP = CO × SVR, the adrenoceptors, the common vasoactive drugs, and how to dilute them safely.",
    icon: "HeartPulse",
    color: "from-rose-500 to-pink-500",
    readMinutes: 9,
    credit: AME_CREDIT,
    keyPoints: [
      "BP = CO × SVR = (HR × SV) × SVR. Change one lever and the others respond — phenylephrine ↑SVR, which reflexively ↓HR.",
      "Goal of vasoactive drugs: keep HR and BP within ~20% of the patient's pre-op baseline.",
      "Phenylephrine (α1) for hypotension with adequate/high HR; ephedrine (mixed) when HR is also low; epinephrine for bigger problems.",
      "Antihypertensives: esmolol (fast/short β1), labetalol (α+β, longer), metoprolol (β1).",
      "These drugs are dangerously concentrated — dilute (single or double) and LABEL every syringe. One dilution at a time.",
    ],
    sections: [
      {
        heading: "The blood-pressure equation",
        body: `Everything you do to blood pressure runs through one relationship:

**BP = CO × SVR = (HR × SV) × SVR**, where stroke volume depends on **preload, contractility, afterload.**

So the four levers on BP are **heart rate, preload, contractility, afterload.** Change one and the others react — e.g., give **phenylephrine** (raises SVR) to a hypotensive, tachycardic patient and the BP rises, which **reflexively slows the heart**. Keeping this equation in your head turns confusing vital-sign changes into a working diagnosis.

The goal of vasoactive drugs is to keep **HR and BP within ~20%** of the pre-op baseline (tighter, ~10%, for critically ill patients).`,
      },
      {
        heading: "The adrenoceptors",
        body: `Knowing what each receptor does tells you what each drug will do:

| Receptor | Where | Agonist effect |
|---|---|---|
| **α1** | Peripheral vessels | ↑ SVR (vasoconstriction) |
| **α2** | Nerve terminals / CNS | Inhibits norepinephrine release (sedation, analgesia) |
| **β1** | Heart | ↑ HR and contractility |
| **β2** | Lungs / vascular smooth muscle | Bronchodilation; vasodilation |`,
      },
      {
        heading: "Pressors & antihypertensives",
        body: `**Pressors (raise BP):**

| Drug | Action | Typical bolus | Dilute to |
|---|---|---|---|
| **Phenylephrine ("Neo")** | α1 (direct) | 50–100 mcg | 100 mcg/mL (double dilution) |
| **Ephedrine** | Mixed α/β (indirect) | 5–10 mg | 5 mg/mL (single dilution) |
| **Epinephrine** | α + β (dose-dependent) | ~10 mcg (titration) | 10 mcg/mL |

Phenylephrine is great when HR is fine or high (it'll bring HR down); **ephedrine** when the HR is also low; epinephrine is the "big gun" — start low and titrate.

**Antihypertensives (lower HR/BP):**

| Drug | Action | Starting dose | Duration |
|---|---|---|---|
| **Esmolol** | β1 (pure) | 10 mg IV q3 min | ~10 min (very short) |
| **Labetalol** | α + β | 5–10 mg IV q5 min | hours |
| **Metoprolol** | β1 selective | 2.5 mg IV q2 min | hours |`,
      },
      {
        heading: "Diluting safely",
        body: `Vasoactive drugs come **very concentrated** — giving them undiluted can kill someone. **Do one dilution at a time, don't multitask, and LABEL the syringe with the final concentration.** If you lose track, throw it out and start over.

**The key rule:** for every **1 mL** of drug you put into **9 mL** of saline, you **move the decimal one place left** (a 1-in-10 dilution).

- **Single dilution** (e.g., ephedrine): 1 mL of 50 mg/mL + 9 mL NS → **5 mg/mL**.
- **Double dilution** (e.g., phenylephrine, epinephrine): repeat it. 10 mg/mL → 1 mg/mL → **0.1 mg/mL = 100 mcg/mL**.
- **100 mL-bag method** (fast, avoids syringe swaps): pull 1 mL of saline out of a 100 mL bag, inject 1 mL of 10 mg/mL phenylephrine → **100 mcg/mL** in the bag.`,
        diagram: "syringes",
        diagramCaption:
          "Pressors live in 10 mL syringes at round concentrations so the math is instant.",
        pitfalls: [
          "Giving a concentrated pressor without diluting — a tiny volume can be a massive, dangerous dose.",
          "Labeling several diluted syringes at the end instead of one at a time — the setup for a swap.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "antibiotics-and-locals",
    number: 17,
    category: "Pharmacology",
    title: "Antibiotics & Local Anesthetics",
    tagline:
      "Pre-op antibiotic timing and the local anesthetics — with their toxic doses.",
    icon: "FlaskConical",
    color: "from-amber-500 to-yellow-500",
    readMinutes: 6,
    credit: AME_CREDIT,
    keyPoints: [
      "Surgeons order pre-op antibiotics; the anesthesia team gives them — ideally in the patient within 30 min before incision.",
      "Give vancomycin and gentamicin slowly (red-man syndrome; ototoxicity).",
      "Local anesthetics block sodium channels; each has a maximum (toxic) dose — adding epinephrine raises the ceiling.",
      "Local anesthetic toxicity (LAST) shows up as CNS signs then cardiovascular collapse.",
      "Lidocaine max ~4.5 mg/kg plain (7 with epi); bupivacaine ~2.5 (3 with epi); ropivacaine ~2.5–3.",
    ],
    sections: [
      {
        heading: "Pre-op antibiotics",
        body: `The surgeon orders them; **the anesthesia team usually gives them.** For the best reduction in surgical-site infection, the antibiotic should be **in the patient ~30 minutes before incision** (in peds, where the IV often goes in after induction, give it as soon as the IV is in). Some give a small **test dose** first and watch the anterior chest for histamine release (redness/urticaria).

| Antibiotic | Adult dose | Peds | Note |
|---|---|---|---|
| Cefazolin (Ancef) | 1–2 g IV | 25 mg/kg | Most common surgical prophylaxis |
| Ampicillin | 1–2 g IV | 25 mg/kg | |
| Clindamycin | 600 mg | 10 mg/kg | |
| Gentamicin | 120 mg (÷ q6h) | 1.5 mg/kg | **Give slowly** — ototoxicity / tinnitus |
| Metronidazole (Flagyl) | 500 mg q8h | 30 mg/kg/day | |
| Vancomycin | 1 g IV | 10 mg/kg | **Give slowly** — "red-man" (histamine) |`,
        pitfalls: [
          "Pushing vancomycin fast → red-man syndrome (flushing, hypotension).",
        ],
      },
      {
        heading: "Local anesthetics",
        body: `Locals block **sodium channels** to stop nerve transmission. They're used constantly and safely, but **each has a toxic dose** — and **local anesthetic systemic toxicity (LAST)** presents first as **CNS** signs (perioral numbness, tinnitus, metallic taste, seizures) then **cardiovascular** collapse.

| Local | Max (plain) | Max (with epi) | Onset |
|---|---|---|---|
| **Lidocaine** | 4.5 mg/kg | 7 mg/kg | 5–15 min |
| **Bupivacaine** | 2.5 mg/kg | 3 mg/kg | 5–15 min |
| **Ropivacaine** | 2.5 mg/kg | 2.5–3 mg/kg | 10–20 min |

Adding **epinephrine** causes local vasoconstriction, which slows absorption — raising the safe maximum and prolonging the block. If you ever dilute locals (e.g., for a block), use **preservative-free** solutions near nerves.`,
        pearls: [
          "Always know the patient's weight and the max dose before locals are injected — toxicity is dose-dependent.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "ponv",
    number: 18,
    category: "Pharmacology",
    title: "PONV — Prevent & Treat",
    tagline:
      "Who's at risk for post-op nausea/vomiting and the layered plan to prevent it.",
    icon: "Droplets",
    color: "from-lime-500 to-emerald-500",
    readMinutes: 6,
    credit: AME_CREDIT,
    keyPoints: [
      "Patient risk factors (Apfel): female, non-smoker, history of PONV/motion sickness, and post-op opioids — risk climbs with each.",
      "Anesthetic risk factors: volatile agents, nitrous, long duration, and opioids.",
      "Biggest prevention lever: avoid the triggers — favor regional/TIVA (propofol), skip nitrous, minimize opioids, stay hydrated.",
      "Dexamethasone at induction (after the patient is asleep); ondansetron near the end of the case.",
      "Layer multiple agents/strategies in high-risk patients — each adds protection.",
    ],
    sections: [
      {
        heading: "Who is at risk",
        body: `PONV is one of the most common and miserable side effects of anesthesia, and risk is **additive** — the more factors, the higher the chance (up to ~80% with several).

**Patient factors (the Apfel score):**
- Female sex
- Non-smoker
- History of PONV or motion sickness
- (Younger age, and) anticipated **post-op opioids**

**Anesthetic / surgical factors:**
- Volatile anesthetics and **nitrous oxide**
- Long duration of anesthesia
- Type of surgery
- Intra-op and post-op **opioids**`,
        pearls: [
          "The app's [Apfel calculator](/calculators/apfel) turns these factors into a risk estimate.",
        ],
      },
      {
        heading: "Prevent it — strategy first, drugs second",
        body: `The most powerful moves **avoid the triggers**:

1. Favor **regional anesthesia** over general where appropriate.
2. Use **propofol** for induction and as a maintenance **infusion (TIVA)**; avoid volatile.
3. **Avoid nitrous oxide.**
4. **Minimize opioids** — lean on multimodal analgesia.
5. Keep the patient **adequately hydrated.**
6. Add **prophylactic antiemetics** (below), and have a **rescue** plan.

In a high-risk patient, you **layer** several of these — each independent measure adds protection.`,
      },
      {
        heading: "The antiemetic drugs",
        body: `| Drug | Class | Dose | When |
|---|---|---|---|
| **Dexamethasone** | Steroid | 4 mg IV | At **induction** (give after the patient is asleep — it can cause intense perineal/genital burning on push) |
| **Ondansetron** | 5-HT₃ antagonist | 4 mg IV (or 8 mg ODT) | End of case, or as **rescue** in PACU |

A typical high-risk recipe: pre-op midazolam; intra-op **no nitrous**, dexamethasone at induction, a **propofol infusion**, dexmedetomidine and IV acetaminophen to spare opioids, generous fluids, and ondansetron at the end — then sips of clear liquid (slowly) in PACU.`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "preop-assessment",
    number: 19,
    category: "Preop & Exam",
    title: "Preop Assessment — H&P, ASA & NPO",
    tagline:
      "The anesthesia history & physical, the ASA classification, and NPO rules.",
    icon: "ClipboardCheck",
    color: "from-blue-500 to-indigo-500",
    readMinutes: 9,
    credit: AME_CREDIT,
    keyPoints: [
      "The pre-op evaluation anticipates problems so you can avoid them — and produces an anesthetic plan (plus backups) before induction.",
      "Hit the airway, OSA (STOP-BANG), heart, lungs, liver/kidney, endocrine/diabetes, social, meds, allergies (egg/soy → propofol), and family MH.",
      "Most healthy patients for low-risk surgery need no labs — but every woman of childbearing age gets a pregnancy test.",
      "ASA physical status I–VI, with an 'E' modifier for emergencies.",
      "NPO: clear liquids 2 h, breast milk 4 h, light meal 6 h, heavy/fatty meal 8 h; trauma/pain = treat as full stomach.",
    ],
    sections: [
      {
        heading: "Why the pre-op matters",
        body: `The pre-op period is the most under-appreciated part of the job for students — but it's where the case is won. The anesthesia team's job is to **anticipate problems so you can avoid them** (going *around* the hole instead of climbing out of it). A good evaluation makes sure the patient is physically and emotionally ready, and yields an **anesthetic plan — plus backup plans — before induction.** It's also when you build rapport and earn the patient's trust.`,
      },
      {
        heading: "The anesthesia history",
        body: `Work through these, anesthesia-relevant by design:

- **Airway** — any prior difficulty (the single best predictor); see [The Airway Exam](/playbook/airway-exam).
- **OSA** — screen with **STOP-BANG** (additive): **S**noring, **T**ired/daytime sleepiness, **O**bserved apnea, **P**ressure (HTN), **B**MI > 35, **A**ge > 50, **N**eck > 40 cm, **G**ender male.
- **Heart** — CAD, prior CABG/stents, murmurs, HTN, **exercise tolerance**, aspirin/antiplatelets.
- **Lungs** — COPD, asthma.
- **Liver / Kidney** — including AKI, CKD, dialysis.
- **Endocrine / Diabetes** — insulin vs oral, insulin pump; chronic **steroid** use.
- **Social** — smoking, alcohol, recreational drugs.
- **Medications** — what they take at home and **why**.
- **Allergies** — drugs; **foods (egg/soy → many propofol preparations)**; latex.
- **Surgical/anesthesia history** — **family history of malignant hyperthermia**, personal PONV, prior problems.
- **NPO status** — last solid and last liquid (what and when).

A good closing habit: *"Any other health problems we haven't talked about?"* — it occasionally catches something important.`,
        pearls: [
          "Egg or soy allergy matters because propofol is formulated in an egg-lecithin / soybean-oil emulsion.",
        ],
      },
      {
        heading: "The physical exam & labs",
        body: `Beyond the **airway exam**, focus on what changes your plan:

- **Heart** — rate/rhythm, murmurs, do heart tones and pulse match?
- **Lungs** — air movement, wheezes/rales.
- **Peripheral pulses** — especially the **radial** arteries (for an A-line; place it in the **non-dominant** hand).
- **Veins** — easy peripheral targets (upper extremities) for the IV.

**Labs:** most **healthy patients for low-risk surgery need none** — order based on the patient's health and the surgery. The one near-universal exception is the **pregnancy test** (urine, or hCG) for every woman of childbearing age. If positive, weigh urgency vs. risk and avoid **midazolam/benzodiazepines** and **nitrous** where possible.`,
      },
      {
        heading: "ASA physical status",
        body: `Once the H&P is done, assign an **ASA Physical Status:**

| Class | Description |
|---|---|
| **ASA I** | Normal healthy patient |
| **ASA II** | Mild systemic disease |
| **ASA III** | Severe systemic disease |
| **ASA IV** | Severe systemic disease that is a constant threat to life |
| **ASA V** | Moribund; not expected to survive without the operation |
| **ASA VI** | Brain-dead; organs being removed for donation |
| **+ E** | Modifier for an **emergency** (non-elective) case |`,
      },
      {
        heading: "NPO guidelines",
        body: `**NPO** (*nil per os*) is the time from last intake to an expected empty stomach — because stomach contents can be **aspirated** into the lungs (pneumonia, or worse). Standard minimum fasting times:

| Intake | Fast |
|---|---|
| **Clear liquids** (incl. black coffee, pulp-free juice) | **2 h** |
| **Breast milk** | **4 h** |
| **Light meal** (toast, crackers, non-human milk) | **6 h** |
| **Heavy / fatty meal** | **8 h** |

- Patients with **delayed gastric emptying** need longer.
- **Trauma and pain** slow gastric motility — treat those patients as a **full stomach** regardless of timing.
- When there isn't time to wait, protect the airway with a **rapid sequence induction** ([RSI is covered in the Induction guide](/playbook/induction)).`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "airway-exam",
    number: 20,
    category: "Preop & Exam",
    title: "The Airway Exam",
    tagline:
      "Predicting the difficult airway before you ever pick up the blade.",
    icon: "ScanFace",
    color: "from-orange-500 to-amber-500",
    readMinutes: 5,
    credit: AME_CREDIT,
    keyPoints: [
      "Do an airway exam on every patient, ideally seated — it predicts difficult mask ventilation and intubation.",
      "Four parts: neck flexion/extension, thyromental distance, mouth opening, and Mallampati class.",
      "Mallampati I–IV: the less you see (down to hard palate only), the higher the chance of a difficult intubation.",
      "No single finding predicts a difficult airway — weigh them together, especially after head/neck surgery or radiation.",
      "The Mallampati isn't validated in small children; in peds you mostly get thyromental distance, maybe neck/mouth opening.",
    ],
    sections: [
      {
        heading: "The four parts",
        body: `The airway exam predicts when mask ventilation and/or intubation might be hard. Do it on **every** patient, **seated** when possible:

1. **Neck flexion & extension** — have the patient flex and extend; **limited movement** suggests a harder intubation.
2. **Thyromental distance** — finger-breadths from the thyroid notch to the chin; **shorter = harder.**
3. **Mouth opening** — any limitation?
4. **Mallampati class** — what you can see inside the open mouth.`,
        diagram: "laryngoscopy",
        diagramCaption:
          "A poor pre-op airway predicts a poor laryngoscopic view — plan accordingly.",
      },
      {
        heading: "The Mallampati classes",
        body: `With the patient seated and the mouth wide open:

| Class | You can see |
|---|---|
| **I** | Soft palate, fauces, uvula, **and tonsillar pillars** |
| **II** | Soft palate, fauces, uvula |
| **III** | Soft palate and **base** of uvula |
| **IV** | **Hard palate only** |

The higher the class, the higher the probability of a difficult intubation — but no single indicator stands alone. Take all four findings (plus body habitus, beard, prior difficulty) **together**, and be especially wary after **head/neck surgery or radiation.**`,
        pearls: [
          "The Mallampati and most of the exam aren't validated in infants/children — in peds rely on thyromental distance and general assessment.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "presenting-your-patient",
    number: 21,
    category: "Preop & Exam",
    title: "Presenting Your Patient",
    tagline:
      "How to hand off your H&P and plan to your attending — clearly and confidently.",
    icon: "MessagesSquare",
    color: "from-teal-500 to-cyan-500",
    readMinutes: 4,
    credit: AME_CREDIT,
    keyPoints: [
      "A clear presentation builds your attending's confidence — and earns you more hands-on cases.",
      "Open with a one-line summary sentence, then go SOAP or by organ system.",
      "Lead the objective/exam with the airway exam — it's what anesthesia cares about most.",
      "End with your anesthetic plan; early on, 'general vs regional, then I'll take your guidance' is a fine plan.",
    ],
    sections: [
      {
        heading: "The structure",
        body: `Communication is a core anesthesia skill, and it starts with how you present. Open with a **summary sentence**, then use one of two formats.

**Summary sentence:**
> "This is a ___-year-old [man/woman] with [no / a significant] past medical history of ___, here for ___ surgery."

**SOAP:**
- **S**ubjective — the history.
- **O**bjective — the exam; **start with the airway exam**, then the rest.
- **A**ssessment — pull the H&P into a picture of the patient.
- **P**lan — your anesthetic plan.

**Or by system:** summary sentence, then airway → cardiac → pulmonary → GI → endocrine → neuro → other, then the plan.`,
        pearls: [
          "Lead the objective with the airway — it's the first thing your attending wants to hear.",
        ],
      },
      {
        heading: "The plan (it's OK to be junior)",
        body: `End with your **anesthetic plan.** When you're new, you may not have a detailed one yet — that's fine. State the big choice ("I plan on a general," or "a regional") and ask your attending to guide the specifics. As you gain experience, the plan gets sharper and the presentation gets faster. A confident, organized hand-off is what earns you more procedures and patient care.`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "fluids-and-blood-replacement",
    number: 22,
    category: "Lines & Fluids",
    title: "Fluids & Blood Replacement",
    tagline:
      "Crystalloids, colloids, blood products, and the math for maintenance, deficit and losses.",
    icon: "Droplet",
    color: "from-cyan-500 to-blue-500",
    readMinutes: 7,
    credit: AME_CREDIT,
    keyPoints: [
      "Three fluid families: crystalloids (LR, NS, Plasma-Lyte), colloids (albumin, hetastarch), and blood products.",
      "Give blood through filtered tubing, warmed, primed with normal saline (not LR — its calcium can clot the line).",
      "Maintenance by the 4-2-1 rule; a 70 kg adult ≈ 110 mL/h.",
      "Deficit = maintenance × hours NPO, capped at ~8 hours; replace ½ in the first hour, then ¼ and ¼.",
      "Replace blood loss ~3:1 with crystalloid, 1:1 with colloid, or 1:1 with packed cells.",
    ],
    sections: [
      {
        heading: "The three fluid families",
        body: `- **Crystalloids** — routine OR fluids: **lactated Ringer's (LR), normal saline (NS), Plasma-Lyte.**
- **Colloids** — pull fluid into the intravascular space for volume: **albumin, hetastarch.**
- **Blood products** — replace lost blood and clotting components.

| Blood product | Holds | Notes |
|---|---|---|
| **Packed red cells (PRBC)** | Oxygen-carrying cells | Kept cold → **warm through a fluid warmer**; **filtered tubing**; pump OK |
| **Platelets** | Platelets | Room temp; **filtered, by gravity** (pumps destroy them) |
| **Fresh frozen plasma (FFP)** | Clotting factors | |
| **Cryoprecipitate** | Fibrinogen | |

Give blood through a line **primed with normal saline** (or another compatible isotonic) — **not LR**, whose calcium can promote clotting in the tubing.`,
        diagram: "iv-lines",
        diagramCaption:
          "Blood runs through filtered tubing and a warmer; pressurize for rapid transfusion.",
      },
      {
        heading: "Maintenance & deficit math",
        body: `**Maintenance — the 4-2-1 rule** (mL/kg/h): 4 for the first 10 kg, 2 for the next 10 kg, 1 for every kg after.
- A **70 kg** adult: (4×10) + (2×10) + (1×50) = **110 mL/h.**
- Shortcut for adults > 20 kg: **weight (kg) + 40.**

**Deficit** — what they're "behind" from being NPO = maintenance rate × hours without fluid, **capped at ~8 hours** (most people concentrate urine and don't accrue more than ~8 h of deficit).
- That 70 kg patient overnight ≈ 110 × 8 ≈ **880 mL.**

**Replace the deficit** during surgery: **½ in the first hour, ¼ in the second, ¼ in the third** — on top of ongoing maintenance.`,
      },
      {
        heading: "Surgical losses & blood replacement",
        body: `Add ongoing **third-space / evaporative losses** by case size:

| Surgery | Extra fluid |
|---|---|
| Superficial | ~2 mL/kg/h |
| More invasive | ~4 mL/kg/h |
| Open bowel | ~6 mL/kg/h |

**Replacing measured blood loss** (per mL lost):
- **~3 mL crystalloid** per 1 mL blood, **or**
- **~1 mL colloid** per 1 mL blood, **or**
- **~1 mL PRBC** per 1 mL blood.`,
        pearls: [
          "Warm large-volume and rapid fluids — and all blood — to avoid hypothermia and its coagulation/drug effects.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "mask-and-lma",
    number: 23,
    category: "Airway",
    title: "Mask Ventilation & the LMA",
    tagline:
      "The most important airway skill — plus oral/nasal airways and placing an LMA.",
    icon: "Wind",
    color: "from-orange-500 to-rose-500",
    readMinutes: 8,
    credit: AME_CREDIT,
    keyPoints: [
      "Mask ventilation is the #1 skill — if you can mask, you can buy time to think, get help, and set up.",
      "Bring the jaw up to the mask (chin lift / jaw thrust), don't push the mask down onto the face; keep pressure < 20 cmH₂O.",
      "OPA is measured corner-of-mouth to angle-of-jaw (avoid in light/stage-2 → laryngospasm); NPA naris to angle-of-jaw (pre-treat the nose).",
      "The LMA sits over the larynx, placed blind — a great rescue, but NOT a secured airway (no aspiration protection).",
      "Equipment mnemonic SALT: Suction, Airway (oral), Laryngoscope, Tube; confirm any airway with chest rise, breath sounds, and EtCO₂.",
    ],
    sections: [
      {
        heading: "The basics: SALT, the brief history, the 4 skills",
        body: `Before any airway, lay out **SALT**: **S**uction (the most-forgotten piece), **A**irway (oral airway), **L**aryngoscope, **T**ube (ETT). For an emergency airway, get a quick history — **W²A²S²**: **W**hy/what airway, **W**eight, **A**ge, **A**llergies, **S**ignificant history, **S**tomach (last meal).

The **four basic airway skills** to build on a rotation:
1. **Mask ventilation**
2. **LMA placement**
3. **Intubation**
4. **Confirming** the LMA/ETT is correctly placed and working.

Anatomy from the top down: nasopharynx → oropharynx → hypopharynx → larynx → trachea (to the carina).`,
      },
      {
        heading: "Mask ventilation",
        body: `This is the skill to obsess over — being able to mask buys you and the patient time.

- Pick the **right-size mask**; use a **chin lift / jaw thrust.**
- Think of **bringing the jaw up to the mask**, not pushing the mask down onto the face.
- Give just enough positive pressure for a **good chest rise** — and **keep airway pressure below ~20 cmH₂O.** Higher pressures open the esophageal sphincter and inflate the **stomach** → harder ventilation and regurgitation risk.
- **Confirm:** chest rise, breath sounds, **EtCO₂.**

**Adjuncts:**
- **Oral airway (OPA)** — sized **corner of mouth to angle of jaw**; will trigger gagging/vomiting if the gag reflex is intact, so **avoid placing in a light/stage-2 patient** (laryngospasm).
- **Nasal airway (NPA, "trumpet")** — sized **naris to angle of jaw**; doesn't trigger the gag reflex but can cause **epistaxis** — pre-treat the nose with a vasoconstrictor and lubricate.`,
        diagram: "sniffing",
        diagramCaption:
          "Good positioning (ear to sternal notch) makes mask ventilation and intubation easier.",
        pitfalls: [
          "Over-inflating the lungs (> 20 cmH₂O) → gastric distention → harder to ventilate and regurgitation.",
        ],
      },
      {
        heading: "The LMA",
        body: `A laryngeal mask is a "mask" that **sits in the hypopharynx over the larynx.** It's placed **blind** and is an excellent **rescue** device.

**Placement:** size by **weight** (printed on the package), lubricate, head neutral, advance against the **hard palate** until gentle resistance — it seats over the airway. Inflate (it often backs out slightly as it seats), connect the circuit, **confirm with one gentle breath** (chest rise, breath sounds, EtCO₂), and tape.

| LMA size | Weight |
|---|---|
| 1 | < 5 kg |
| 1.5 | 5–10 kg |
| 2 | 10–20 kg |
| 2.5 | 20–30 kg |
| 3 | 30–50 kg |
| 4 | 50–70 kg |
| 5 | 70–100 kg |

> The LMA is **not a secured airway** — if the patient regurgitates, contents can pool in the bowl and be directed toward the trachea. It doesn't protect against aspiration.`,
        pearls: [
          "Between two LMA sizes, let the size of the mouth decide.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "pediatric-airway",
    number: 24,
    category: "Airway",
    title: "Pediatric Airway",
    tagline:
      "Why kids are different, how to size the gear, and the pearls that keep them safe.",
    icon: "Baby",
    color: "from-pink-500 to-rose-500",
    readMinutes: 8,
    credit: AME_CREDIT,
    keyPoints: [
      "Kids desaturate fast (high O₂ consumption, low reserve) and turn bradycardic with hypoxia — move quickly.",
      "Anatomy: smaller airway (narrowest at the cricoid), bigger tongue, more cephalad larynx, shorter epiglottis — small edema is a big problem.",
      "Flow: premed for separation → mask induction → IV after asleep (must be past stage 2 before the IV — laryngospasm).",
      "Infants: PAT — Positioning (shoulder roll), Atropine (pretreat ~10 mcg/kg), Tube (have a half-size smaller).",
      "ETT by age (uncuffed) ≈ (age/4) + 4; confirm with a leak at 15–20 cmH₂O; have sux + atropine ready.",
    ],
    sections: [
      {
        heading: "Why kids are different",
        body: `**Anatomy:**
- Smaller airway overall (an infant's diameter ≈ their pinky); **narrowest at the cricoid ring** (so a tube through the cords may still not fit).
- **Larger tongue** relative to the mouth.
- Larynx is **more cephalad** (higher), and the **epiglottis is shorter/narrower.**
- Because the airway is small, **a little edema causes a big drop** in cross-section.

**Physiology:** kids have **high O₂ consumption** (infants ~2× adults) and low reserve, so they **desaturate fast**, and they become **bradycardic** (→ asystole) quickly with hypoxia. The takeaway: once trouble starts, you have very little time — secure ventilation/oxygenation **quickly**.`,
        pearls: [
          "Some peds providers keep sux + atropine drawn in small syringes with an IM needle ready for airway emergencies.",
        ],
      },
      {
        heading: "Flow & sizing",
        body: `**Patient flow:** NPO; premedication for **separation anxiety** (or a parent accompanies) — midazolam **0.5 mg/kg PO**; **mask induction** with sevoflurane; **IV after the patient is asleep** — and critically, **past stage 2** before attempting the IV (stage-2 stimulation → laryngospasm); then LMA or ETT.

**Infants — PAT:** **P**ositioning (a **shoulder roll**, not an adult-style head pillow, because of the large occiput); **A**tropine (pretreat **~10 mcg/kg** to protect the heart rate if intubation runs long); **T**ube (have an ETT **a half-size smaller** ready).

**ETT / blade by age (uncuffed):**

| Age | Blade | ETT |
|---|---|---|
| Term neonate | Miller 1 | 3.0–3.5 |
| 0–8 mo | Miller 1 | 3.5–4.0 |
| 8 mo–2 y | Miller 1 / Mac 2 | 4.0–4.5 |
| 2–12 y | Miller 2 / Mac 2–3 | **(age/4) + 4** |

For a **cuffed** tube, downsize by a half size. Confirm sizing with a **leak at 15–20 cmH₂O** — a leak < 10 (too small) or > 25 (too big, tracheal ischemia risk) means swap the tube.`,
      },
      {
        heading: "Pearls & laryngospasm",
        body: `**Mask/LMA/intubation pearls:** properly sized gear is everything; keep the mask **off the eyes**; keep the tongue off the roof of the mouth (open the mouth slightly); a shoulder roll aids alignment; ventilate gently (kids inflate the stomach easily — an OGT can decompress). **Always be ready to fall back on mask ventilation** — if the SpO₂ nears **92%**, stop and mask with 100% O₂. **When the attending says stop, stop.**

**Laryngospasm** (more common in kids from mask inductions and deep extubations):
1. **100% O₂, jaw thrust + firm CPAP.**
2. **Larson's maneuver** (pressure at the laryngospasm notch behind the earlobes).
3. **Propofol 0.5 mg/kg** if you have IV access.
4. **IM succinylcholine ~2 mg/kg** if no IV.`,
        pitfalls: [
          "Things go wrong fast in peds with little reserve — be gentle (small edema compromises the airway) and use minimal force.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "troubleshooting",
    number: 25,
    category: "Critical Events",
    title: "On Your Own — Troubleshooting",
    tagline:
      "Stay-calm checklists for the alarms you'll face alone: SpO₂, EtCO₂, PIP, and HR/BP.",
    icon: "TriangleAlert",
    color: "from-red-500 to-orange-500",
    readMinutes: 12,
    credit: AME_CREDIT,
    keyPoints: [
      "Stay calm, make every movement count, and call your attending early — there's no shame in getting help before it's bad.",
      "Treat the patient as a whole system: an isolated heart rate means little without the blood pressure (BP = CO × SVR).",
      "Falling SpO₂: rule out a circuit disconnect (often at the Y/ETT), go 100% O₂, hand-ventilate to feel compliance, check breath sounds.",
      "Rising EtCO₂ = under-ventilation most often, malignant hyperthermia at worst; falling/absent EtCO₂ = disconnect until proven otherwise.",
      "High peak pressure: is the patient light/needs relaxant, mainstem/pneumothorax, kinked tube, or bronchospasm?",
    ],
    sections: [
      {
        heading: "Mindset & the BP equation",
        body: `At some point you'll be alone in the room. When you have to *react*, **stay calm and make your movements count** — an organized mind and an organized cart are half the battle. **Call your attending early;** they expect the call and would rather fix something small than something big.

Have ready, every case: your attending's number, how to reach the anesthesia tech, and the circulator's name. The hemodynamic goal is **HR/BP within ~20%** of baseline (~10% for the critically ill).

> **Don't fixate on one number.** Treat the whole system. Remember **BP = CO × SVR = (HR × SV) × SVR** — ask "how are the HR and BP related?" before you treat.`,
      },
      {
        heading: "Falling SpO₂",
        body: `A downtrending SpO₂ is a problem — act as it nears **92%** (there's a ~20–30 s lag between the lungs and the finger probe). Work the checklist:

1. **Call your attending.**
2. **Check the EtCO₂** — waveform changed or gone? Did the patient stop breathing? **Is the circuit disconnected?** (Eyeball the whole circuit — the most common disconnect is at the **Y-adapter / ETT.**)
3. **Is the pulse-ox probe still on** the patient?
4. **100% O₂.**
5. **Switch to hand-ventilation** and feel the compliance — **bronchospasm?**
6. **Breath sounds** — equal? If one-sided: **right mainstem** (pull the ETT back until bilateral) or **pneumothorax** (needs a chest tube).
7. Consider **larger recruiting breaths**, and **suction the ETT** if peak pressure is high.
8. Still stuck? **Get your attending in the room.**`,
        pitfalls: [
          "Chasing the number without checking the circuit — a disconnect at the ETT is the classic cause.",
        ],
      },
      {
        heading: "EtCO₂ — falling or rising",
        body: `EtCO₂ is, with HR, your most responsive monitor.

**Falling / absent EtCO₂** — a **disconnect until proven otherwise**, but could be a big problem:
- Make sure the monitor isn't **auto-zeroing**; look for **bag/bellows movement**; confirm the patient is **connected**.
- CO₂ detector issues: **kinked/disconnected sample line**, full **water trap**.
- **Hand-ventilate**; check breath sounds (good tidal volume? equal? one-sided → mainstem/pneumothorax); compliance (bronchospasm?).
- **Leak?** — ruptured/under-inflated **ETT cuff**, or a machine leak (call the tech).
- **Over-ventilating?** Check TV/RR. And check vitals — a **low cardiac output or PE** drops EtCO₂.

**Rising EtCO₂** — most commonly **under-ventilation**; the most dangerous cause is **malignant hyperthermia.**
- Under-ventilated? Check **TV/RR and PIP**; if breathing spontaneously, assist.
- **MH?** Look for the company it keeps — **tachycardia, hypertension, masseter spasm, rising temperature** — and get an **ABG.** (See the [Emergency Manual](/emergency) for the full MH drill: stop triggers, dantrolene, cool, call MHAUS.)`,
      },
      {
        heading: "High peak inspiratory pressure (PIP)",
        body: `The "high PIP" alarm on the ventilator — work through it:

1. **Call your attending.**
2. **Is the patient light / "fighting" the vent?** Deepen — opioid or propofol bolus, dial up the gas. (Does it also need more **relaxant**? Deepen the anesthetic **first**, then check twitches and give relaxant.)
3. **Hand-ventilate** and check **breath sounds** — equal, or right-sided (**mainstem**)? More distant on one side (**pneumothorax**)? Stiff (**bronchospasm**)?
4. **Kinked or obstructed** ETT/circuit? **Suction** the ETT.
5. In **laparoscopic** cases — is the abdominal insufflation pressure too high?`,
        pitfalls: [
          "Giving more paralytic to a moving/bucking patient without deepening first — it masks awareness instead of treating it.",
        ],
      },
      {
        heading: "Heart rate & blood pressure",
        body: `First, sanity-check the measurement (cuff size; if using an A-line, re-cycle the NIBP and check the transducer is **leveled at the heart**). If the cuff won't read at all, **feel a pulse** — most often it's a very low BP, so treat it. Then use the grid:

| | **↓ BP** | **↑ BP** |
|---|---|---|
| **↑ HR** | Likely **hypovolemia/vasodilation** — fluids, **phenylephrine 50 mcg**; turn down volatile (mind recall) | **Light / pain** — deepen (opioid, propofol, gas); if unresponsive, β-blocker (esmolol). Rising EtCO₂ too? **Think MH** |
| **↓ HR** | **Treat both** — glycopyrrolate 0.2–0.4 mg, ephedrine 5–10 mg; toward asystole → **epinephrine** | Possible **↑ ICP** (a bad sign) — get help; if suspected: 100% O₂, hyperventilate, mannitol |

Causes of **↑HR/↑BP that don't respond to deepening:** ETT on the carina, **tourniquet pain**, and **MH.**`,
      },
      {
        heading: "When the patient moves",
        body: `Movement usually means **not enough anesthetic** (sometimes it's just the BP cuff cycling and the surgeon feeling it). You'll often see **HR/BP climb** before the patient moves. Movement under anesthesia doesn't necessarily mean recall — but act quickly:

1. **Check vitals** — stable?
2. Make sure the patient isn't **sliding off the table.**
3. **Deepen** — opioid bolus / dial up vapor; if hemodynamically stable, **propofol 0.5–1 mg/kg.**
4. Need more **relaxant**? **Deepen first, then** check twitches and paralyze — giving relaxant alone to stop movement risks **awareness.** If HR/BP won't tolerate more anesthetic, use **pressors** so you *can* deepen.`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "regional-anesthesia-basics",
    number: 26,
    category: "Subspecialty",
    title: "Regional Anesthesia — The Basics",
    tagline:
      "Nerve blocks, epidurals, spinals and caudals — what they are and what you'll see.",
    icon: "Crosshair",
    color: "from-emerald-500 to-green-500",
    readMinutes: 7,
    credit: AME_CREDIT,
    keyPoints: [
      "Regional places local anesthetic near nerves to numb a region — sole anesthetic or combined with GA, and great for post-op pain.",
      "Peripheral nerve blocks (landmarks/stimulator/ultrasound) numb a nerve or extremity.",
      "Epidural: a catheter in the epidural space via loss-of-resistance; level + volume set the analgesia level.",
      "Spinal: a thin needle into the CSF, confirmed by CSF return — faster and denser than an epidural.",
      "Always test an epidural for intrathecal/intravascular placement before dosing; dilute only with preservative-free solutions.",
    ],
    sections: [
      {
        heading: "The techniques",
        body: `Regional anesthesia bathes nerves in local anesthetic to numb a region — as the sole anesthetic, layered with sedation/GA, or for **post-op pain control.** Three you'll meet:

- **Peripheral nerve block** — find the nerve with landmarks, a nerve **stimulator**, or **ultrasound**, then deposit local nearby. Most common for **extremity** surgery.
- **Neuraxial — epidural and spinal** (below).
- **Caudal** — a pediatric favorite (epidural space via the **sacral hiatus**).

If you dilute regional medications, use **preservative-free** solutions — preservatives near nerves can cause damage.`,
        pearls: [
          "NYSORA (nysora.com) has excellent free anatomy and block videos — see the procedures before you assist.",
        ],
      },
      {
        heading: "Epidural — what you'll see",
        body: `A needle is advanced in the back to the **epidural space**, then a catheter is threaded in. The needle passes: **skin → subcutaneous tissue → supraspinous ligament → interspinous ligament → ligamentum flavum → epidural space** (go too far → dura → "wet tap," CSF). The level (lumbar→cervical) and the volume of local set the analgesia level.

Roughly what happens:
1. Sterile prep and drape; local at the entry point.
2. A **Tuohy needle** is advanced to the interspinous ligament; stylet out; a **loss-of-resistance** syringe (air/saline) is attached.
3. Advance with pressure on the plunger until **loss of resistance** = the epidural space.
4. Thread the catheter **through** the needle (**never pull it back through** — it can shear); remove the needle, leaving ~3–4 cm in the space.
5. **Test dose** (e.g., lidocaine with epinephrine) checks for **intrathecal** (would cause a profound block) and **intravascular** (tachycardia from the epi, or CNS symptoms) placement.
6. Dose, then secure with a clear dressing.`,
        pitfalls: [
          "Pulling the catheter back through the Tuohy needle — it can shear off in the patient.",
        ],
      },
      {
        heading: "Spinal & caudal",
        body: `**Spinal** — medication placed **into the CSF** (the dural sac). Similar setup to an epidural but with a **thin needle**; correct placement is confirmed by **CSF dripping** from the needle. Faster and denser than an epidural, but a single shot.

**Caudal** — used in **infants/children**, usually after they're under GA. The epidural space is reached through the **sacral hiatus** (the covering ligament calcifies after childhood, making caudals hard in adults). A needle/IV catheter is advanced at ~45° until resistance "gives," then flattened and advanced; aspirate (no CSF/blood) and inject.`,
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "obstetric-anesthesia-basics",
    number: 27,
    category: "Subspecialty",
    title: "Obstetric Anesthesia — The Basics",
    tagline:
      "Pregnancy physiology, labor epidurals, and anesthesia for C-section.",
    icon: "Baby",
    color: "from-fuchsia-500 to-pink-500",
    readMinutes: 8,
    credit: AME_CREDIT,
    keyPoints: [
      "Pregnancy lowers MAC, makes the airway friable/edematous, drops FRC (rapid desaturation), raises CO, and lowers SVR.",
      "Treat every pregnant patient as a full stomach, and always use left-uterine displacement (bump under the right hip) to avoid aortocaval compression.",
      "Labor analgesia is usually a dilute local ± opioid epidural infusion; watch for hypotension (nausea is often the first sign).",
      "A C-section is full abdominal surgery under regional — be ready to convert to GA, and run a full machine/room check.",
      "The OB airway is difficult until proven otherwise — thorough exam, smaller ETT, most experienced intubator.",
    ],
    sections: [
      {
        heading: "Physiology of pregnancy",
        body: `Pregnancy changes nearly every system relevant to anesthesia:

- **Neuro:** **MAC is decreased.** Engorged epidural veins shrink the epidural space and CSF volume → local anesthetic **spreads more** near term (use less).
- **Respiratory:** the airway is **friable and edematous** (often needs a **smaller cuffed ETT**); **FRC falls** while O₂ consumption rises → **rapid desaturation** on induction; tidal volume and minute ventilation rise.
- **Cardiovascular:** ↑ blood volume, **↑ cardiac output** (can jump ~80% right after delivery), **↓ SVR.**
- **Aortocaval compression:** supine, the gravid uterus compresses the **IVC and aorta** → put a **bump under the right hip (~15 cm)** for **left-uterine displacement.**
- **GI:** increased reflux and a **full stomach** (slow motility) → **aspiration risk.** Treat every pregnant patient as a full stomach.`,
        pearls: [
          "Left-uterine displacement is comfort + physiology — it improves venous return and BP, not just comfort.",
        ],
      },
      {
        heading: "Labor epidurals",
        body: `The anesthesia team places and manages the **labor epidural** — typically a **dilute local anesthetic ± opioid infusion**, seated or in the **left lateral** position. Check the level periodically (ice or a pin) for the dermatome of analgesia.

**Complications:**
- **Hypotension** (the most common) — sympathetic blockade → ↓SVR/BP. **Nausea is often the first sign.** Pre-treat with IV fluid; treat with left-uterine displacement, fluids, and a **vasopressor** (phenylephrine or ephedrine).
- **High spinal / high epidural** — block higher than intended → trouble breathing, unconsciousness, CV collapse. Turn the infusion down, communicate; a **total spinal** means **intubate and support** the patient while monitoring fetal tones.
- **Slowed labor** — you may be asked to turn the rate down for the second stage.`,
      },
      {
        heading: "Anesthesia for C-section",
        body: `Don't be fooled — a C-section is **full abdominal surgery**, usually under **regional** (dose up a working epidural, or place a spinal/combined spinal-epidural). **Be ready to convert to general** if the patient becomes unstable or the block fails — run a **full machine/room check** so the equipment is ready.

- **Aspiration prophylaxis:** metoclopramide (motility), an H₂ blocker like cimetidine (acid), sodium citrate PO (neutralize acid).
- After delivery: **oxytocin** (after the placenta); **methylergonovine** IM for uterine atony if asked; deepen volatile if the surgeon needs uterine relaxation.
- **If general is needed:** the OB airway is **difficult until proven otherwise** — thorough airway exam, **smaller ETT**, your **most experienced intubator**, RSI with cricoid, left-uterine displacement, pre-oxygenate well, surgeons scrubbed/draped before induction, and a **failed-airway backup plan.** Because she's a full stomach, **wake her up before extubating.**`,
        pitfalls: [
          "Treating a C-section as 'just a quick case' — have the GA conversion and failed-airway plan ready before you start.",
        ],
      },
    ],
  },

  /* =============================================================== */
  {
    slug: "case-walkthrough",
    number: 28,
    category: "Foundations",
    title: "A Case From Start to Finish",
    tagline:
      "One worked example that ties the whole Playbook together — a healthy adult for an urgent lap appendectomy.",
    icon: "Route",
    color: "from-primary to-violet-500",
    readMinutes: 8,
    credit: AME_CREDIT,
    keyPoints: [
      "Pre-op, build the picture: healthy 30-year-old, full stomach (ate an hour ago) → general with RSI; PONV risk (female, non-smoker, motion sickness).",
      "Set up with PMS-MAIDS; draw and label every syringe; have your rescue pressors ready.",
      "Induct with RSI, confirm the tube with sustained EtCO₂, then settle into maintenance.",
      "Treat hemodynamics with the BP equation — a phenylephrine 50 mcg dose for the high-HR/low-BP picture.",
      "Land the plane: reverse, antiemetics, titrate analgesia to a RR ~10, and extubate awake.",
    ],
    sections: [
      {
        heading: "Pre-op & plan",
        body: `*Putting it all together — an illustrative case.*

You're assigned a **30-year-old woman for an urgent laparoscopic appendectomy.** Your H&P: no past medical history, normal vitals, 70 kg, **ate one hour ago.** Exam: **Mallampati I**, good thyromental distance and neck extension, heart/lungs normal, **negative pregnancy test**, an 18-gauge IV already in.

**Plan:** ASA **1E**, general anesthesia with **rapid sequence induction** (full stomach). She's at higher **PONV** risk (female, non-smoker, motion sickness) — build prevention in. This single case touches nearly every other guide in the Playbook.`,
      },
      {
        heading: "Setup & induction",
        body: `**Set up the room with [PMS-MAIDS](/playbook/setting-up-your-room):** positioning fine, machine checked, suction on, monitors on, airway (Mac 3 + 7.0 cuffed ETT), IV ready, drugs drawn and labeled, no special needs. Draw your **rescue pressors** (phenylephrine, ephedrine) too.

**Induction (RSI):** midazolam pre-op → monitors + a fresh baseline BP → **pre-oxygenate** → wait for the attending. Then, in quick succession: **fentanyl, lidocaine** (blunt the propofol burn), **propofol**, and **succinylcholine.** Wait for the fasciculations to stop, **intubate**, and confirm with **fog in the tube, bilateral breath sounds, and sustained EtCO₂.** Secure the tube, start the ventilator, and place a bite block.`,
      },
      {
        heading: "Maintenance",
        body: `Dial in your volatile (e.g., desflurane, increased slowly to avoid tachycardia), turn the **fresh-gas flows down**, and once twitches return give a non-depolarizing relaxant. Give **dexamethasone** for PONV and place an **OGT** to empty the stomach.

As the patient is prepped — full anesthetic on board, no surgical stimulation yet — the **BP starts to drift down with a high HR.** Reach for the [BP equation](/playbook/troubleshooting): a small **phenylephrine 50 mcg** dose raises SVR, the BP comes up, and the reflex slows the heart. Through the case, treat rises in HR/BP (from stimulation) with small **fentanyl** boluses.`,
      },
      {
        heading: "Emergence — landing the plane",
        body: `As the surgeons close, plan your landing. Give **ondansetron** (PONV). Let the **EtCO₂ rise** (lower the rate/tidal volume) so she starts to breathe; suction and remove the OGT; **dial down the vapor.** With the fascia closed and **at least one twitch back**, give **full reversal** (neostigmine + glycopyrrolate). Titrate analgesia (e.g., morphine) to a respiratory rate around **10**, turn the vapor off, and let the rest blow off. When she's **awake, swallowing, and following commands**, deflate the cuff and **extubate** — then to PACU with a report.`,
        pearls: [
          "Because she was a full stomach, she's extubated fully awake — never in the light, stage-2 plane.",
        ],
      },
    ],
  },
];

export function getPlaybookGuide(slug: string) {
  return playbookGuides.find((g) => g.slug === slug);
}
