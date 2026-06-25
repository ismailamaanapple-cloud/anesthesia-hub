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
    | "Room & Setup"
    | "Machine & Ventilation"
    | "Drugs"
    | "Monitoring"
    | "Patient Handling"
    | "Lines & Fluids"
    | "Airway";
  title: string;
  tagline: string;
  icon: string; // lucide icon name
  color: string; // tailwind gradient
  readMinutes: number;
  keyPoints: string[];
  sections: PlaybookSection[];
};

export const playbookCategories = [
  "All",
  "Room & Setup",
  "Machine & Ventilation",
  "Drugs",
  "Monitoring",
  "Patient Handling",
  "Lines & Fluids",
  "Airway",
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
];

export function getPlaybookGuide(slug: string) {
  return playbookGuides.find((g) => g.slug === slug);
}
