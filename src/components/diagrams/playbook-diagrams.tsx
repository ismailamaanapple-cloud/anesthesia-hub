// Theme-aware SVG diagrams for the OR Playbook.
// Pure presentational server components — colors are driven by Tailwind
// fill-*/stroke-* utilities that map to the CSS color tokens in globals.css,
// so every diagram adapts automatically to light/dark mode.
//
// Each diagram is registered in `playbookDiagrams` and referenced by key from
// src/lib/playbook.ts via a section's `diagram` field.

import type { FC } from "react";

type DiagramProps = { className?: string };

// On phones the SVG keeps a minimum width so its labels stay legible; the
// wrapper (see <Diagram>) lets it scroll horizontally. On sm+ it fits the
// container normally.
const svgBase =
  "h-auto w-full min-w-[640px] sm:min-w-0 rounded-2xl border border-border bg-gradient-to-br from-muted/30 to-background";

/* ------------------------------------------------------------------ */
/* 1. OR / Anesthesia workstation layout (top-down)                    */
/* ------------------------------------------------------------------ */
const RoomSetup: FC<DiagramProps> = () => (
  <svg viewBox="0 0 760 470" className={svgBase} role="img" aria-label="Top-down layout of the anesthesia workstation at the head of the OR table">
    {/* OR table */}
    <rect x="250" y="150" width="280" height="150" rx="14" className="fill-card stroke-border" strokeWidth="2" />
    <rect x="250" y="150" width="70" height="150" rx="14" className="fill-primary/10" />
    <text x="390" y="232" textAnchor="middle" className="fill-muted-foreground" fontSize="15" fontWeight="600">OR TABLE</text>
    <text x="285" y="120" textAnchor="middle" className="fill-primary" fontSize="12" fontWeight="700">HEAD</text>
    <path d="M285 128 L285 146" className="stroke-primary" strokeWidth="2" markerEnd="url(#pbArrow)" />

    {/* Anesthesia machine — at the head, your home base */}
    <rect x="40" y="150" width="150" height="150" rx="14" className="fill-card stroke-primary" strokeWidth="2.5" />
    <text x="115" y="178" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="700">ANESTHESIA</text>
    <text x="115" y="195" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="700">MACHINE</text>
    <rect x="60" y="210" width="50" height="34" rx="4" className="fill-accent/20 stroke-border" />
    <text x="85" y="231" textAnchor="middle" className="fill-muted-foreground" fontSize="9">vaporizer</text>
    <rect x="120" y="210" width="50" height="34" rx="4" className="fill-accent/20 stroke-border" />
    <text x="145" y="231" textAnchor="middle" className="fill-muted-foreground" fontSize="9">vent</text>
    <rect x="60" y="252" width="110" height="34" rx="4" className="fill-muted stroke-border" />
    <text x="115" y="273" textAnchor="middle" className="fill-muted-foreground" fontSize="9">circle circuit / bag</text>

    {/* Monitor — above eye line */}
    <rect x="60" y="40" width="130" height="80" rx="10" className="fill-card stroke-border" strokeWidth="2" />
    <polyline points="72,95 88,95 96,70 108,110 120,82 132,95 178,95" className="fill-none stroke-success" strokeWidth="2.5" />
    <text x="125" y="58" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontWeight="600">MONITOR</text>

    {/* Airway cart */}
    <rect x="40" y="330" width="150" height="100" rx="12" className="fill-card stroke-border" strokeWidth="2" />
    <text x="115" y="356" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="700">AIRWAY CART</text>
    <text x="115" y="376" textAnchor="middle" className="fill-muted-foreground" fontSize="9.5">laryngoscope · ETT · LMA</text>
    <text x="115" y="392" textAnchor="middle" className="fill-muted-foreground" fontSize="9.5">stylet · bougie · oral airway</text>
    <text x="115" y="408" textAnchor="middle" className="fill-muted-foreground" fontSize="9.5">tape · syringe for cuff</text>

    {/* Suction */}
    <rect x="210" y="330" width="110" height="100" rx="12" className="fill-card stroke-border" strokeWidth="2" />
    <circle cx="265" cy="372" r="20" className="fill-destructive/15 stroke-destructive" strokeWidth="2" />
    <path d="M265 360 Q278 372 265 384 Q252 372 265 360 Z" className="fill-destructive" />
    <text x="265" y="412" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">SUCTION</text>

    {/* Drug table / your draw-up surface */}
    <rect x="560" y="60" width="160" height="120" rx="12" className="fill-card stroke-border" strokeWidth="2" />
    <text x="640" y="86" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="700">DRUG TRAY</text>
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={578 + i * 32} y={100} width="22" height="60" rx="4" className="fill-primary/15 stroke-border" />
    ))}
    <text x="640" y="174" textAnchor="middle" className="fill-muted-foreground" fontSize="9">labeled syringes</text>

    {/* IV pole + fluids */}
    <rect x="560" y="210" width="160" height="100" rx="12" className="fill-card stroke-border" strokeWidth="2" />
    <line x1="600" y1="225" x2="600" y2="300" className="stroke-border" strokeWidth="3" />
    <path d="M588 232 h24 l-4 26 h-16 z" className="fill-accent/30 stroke-accent" />
    <text x="660" y="250" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">IV POLE</text>
    <text x="660" y="268" textAnchor="middle" className="fill-muted-foreground" fontSize="9.5">primed fluids</text>
    <text x="660" y="283" textAnchor="middle" className="fill-muted-foreground" fontSize="9.5">pumps · pressors</text>

    {/* You — provider position */}
    <circle cx="115" cy="232" r="0" />
    <circle cx="20" cy="225" r="14" className="fill-primary" />
    <text x="20" y="255" textAnchor="middle" className="fill-primary" fontSize="9" fontWeight="700">YOU</text>

    <text x="380" y="455" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontStyle="italic">
      Everything you need on induction sits within arm&apos;s reach of the head of the bed.
    </text>

    <defs>
      <marker id="pbArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" className="fill-primary" />
      </marker>
    </defs>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 2. Syringe sizes + ISO 26825 drug-class color codes                 */
/* ------------------------------------------------------------------ */
const syringeRows: {
  drug: string;
  size: string;
  conc: string;
  band: string; // tailwind fill class
  label: string;
  textOnBand?: string;
  striped?: boolean; // ISO: relaxant antagonists are red w/ diagonal stripes
}[] = [
  { drug: "Propofol", size: "20 mL", conc: "10 mg/mL", band: "fill-yellow-400", label: "Induction agent", textOnBand: "fill-black" },
  { drug: "Fentanyl", size: "3–5 mL", conc: "50 mcg/mL", band: "fill-sky-500", label: "Opioid", textOnBand: "fill-white" },
  { drug: "Midazolam", size: "3 mL", conc: "1 mg/mL", band: "fill-orange-400", label: "Benzodiazepine", textOnBand: "fill-black" },
  { drug: "Lidocaine", size: "5 mL", conc: "10 mg/mL (1%)", band: "fill-gray-400", label: "Local anesthetic", textOnBand: "fill-black" },
  { drug: "Succinylcholine", size: "10 mL", conc: "20 mg/mL", band: "fill-red-500", label: "Depolarizing relaxant", textOnBand: "fill-white" },
  { drug: "Rocuronium", size: "5 mL", conc: "10 mg/mL", band: "fill-red-500", label: "Non-depol. relaxant", textOnBand: "fill-white" },
  { drug: "Neostigmine", size: "5 mL", conc: "1 mg/mL", band: "fill-red-500", label: "Reversal (+ glyco)", textOnBand: "fill-white", striped: true },
  { drug: "Sugammadex", size: "2–5 mL", conc: "100 mg/mL", band: "fill-red-500", label: "Reversal (roc/vec)", textOnBand: "fill-white", striped: true },
  { drug: "Phenylephrine", size: "10 mL", conc: "100 mcg/mL", band: "fill-violet-500", label: "Vasopressor", textOnBand: "fill-white" },
  { drug: "Ephedrine", size: "10 mL", conc: "5 mg/mL", band: "fill-violet-500", label: "Vasopressor", textOnBand: "fill-white" },
  { drug: "Glycopyrrolate", size: "3 mL", conc: "0.2 mg/mL", band: "fill-green-500", label: "Anticholinergic", textOnBand: "fill-white" },
];

const Syringes: FC<DiagramProps> = () => {
  const rowH = 46;
  const top = 54;
  return (
    <svg viewBox={`0 0 760 ${top + syringeRows.length * rowH + 30}`} className={svgBase} role="img" aria-label="Common induction and reversal syringes with their typical sizes, concentrations and ISO color-coded labels">
      <defs>
        <pattern id="revStripe" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="9" className="stroke-white" strokeWidth="3.5" strokeOpacity="0.45" />
        </pattern>
      </defs>
      <text x="24" y="32" className="fill-foreground" fontSize="15" fontWeight="700">Standard draw-up — size · concentration · color class</text>
      {syringeRows.map((r, i) => {
        const y = top + i * rowH;
        const cy = y + 18;
        const vol = parseFloat(r.size); // first number in the size string
        return (
          <g key={i}>
            {/* color label band (the sticker on the syringe) */}
            <rect x="24" y={y} width="150" height="34" rx="6" className={`${r.band} stroke-border`} />
            {r.striped && <rect x="24" y={y} width="150" height="34" rx="6" fill="url(#revStripe)" className="stroke-border" />}
            <text x="99" y={cy - 1} textAnchor="middle" className={r.textOnBand ?? "fill-black"} fontSize="10.5" fontWeight="700">{r.drug}</text>
            <text x="99" y={cy + 12} textAnchor="middle" className={r.textOnBand ?? "fill-black"} fontSize="8.5">{r.label}</text>

            {/* syringe barrel */}
            <rect x="186" y={y + 4} width="220" height="26" rx="4" className="fill-card stroke-border" strokeWidth="1.5" />
            {/* graduation ticks */}
            {[0, 1, 2, 3, 4, 5, 6].map((t) => (
              <line key={t} x1={196 + t * 30} y1={y + 4} x2={196 + t * 30} y2={y + 12} className="stroke-border" strokeWidth="1" />
            ))}
            {/* fill volume proportional-ish */}
            <rect x="186" y={y + 4} width={Math.min(210, Math.max(18, vol * 9))} height="26" rx="4" className={`${r.band} opacity-30`} />
            {/* plunger */}
            <rect x="406" y={y + 8} width="34" height="18" rx="2" className="fill-muted stroke-border" />
            <rect x="440" y={y + 12} width="22" height="10" rx="2" className="fill-muted-foreground/40" />
            {/* needle/tip */}
            <line x1="186" y1={y + 17} x2="172" y2={y + 17} className="stroke-border" strokeWidth="2" />

            {/* size + conc */}
            <text x="486" y={cy - 2} className="fill-foreground" fontSize="13" fontWeight="700">{r.size}</text>
            <text x="486" y={cy + 12} className="fill-muted-foreground" fontSize="10.5">{r.conc}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* 3. Monitor placement + order                                        */
/* ------------------------------------------------------------------ */
const Monitors: FC<DiagramProps> = () => (
  <svg viewBox="0 0 760 430" className={svgBase} role="img" aria-label="Supine patient showing the order monitors are attached before induction">
    {/* bed */}
    <rect x="60" y="180" width="640" height="90" rx="14" className="fill-muted/40 stroke-border" />
    {/* body silhouette */}
    <ellipse cx="150" cy="225" rx="42" ry="40" className="fill-card stroke-border" strokeWidth="2" />
    <rect x="185" y="190" width="380" height="70" rx="30" className="fill-card stroke-border" strokeWidth="2" />
    {/* arm out on board */}
    <rect x="240" y="258" width="150" height="26" rx="12" className="fill-card stroke-border" strokeWidth="2" />
    <text x="315" y="300" textAnchor="middle" className="fill-muted-foreground" fontSize="9">arm board</text>
    {/* legs */}
    <rect x="560" y="200" width="120" height="24" rx="12" className="fill-card stroke-border" strokeWidth="2" />
    <rect x="560" y="232" width="120" height="24" rx="12" className="fill-card stroke-border" strokeWidth="2" />

    {/* Step badges */}
    {/* 1 Pulse ox - finger */}
    <g>
      <circle cx="395" cy="271" r="8" className="fill-success" />
      <line x1="395" y1="271" x2="430" y2="345" className="stroke-success" strokeWidth="2" strokeDasharray="4 3" />
      <rect x="395" y="346" width="190" height="44" rx="9" className="fill-success/10 stroke-success" />
      <circle cx="412" cy="368" r="11" className="fill-success" /><text x="412" y="372" textAnchor="middle" className="fill-white" fontSize="12" fontWeight="700">1</text>
      <text x="430" y="364" className="fill-foreground" fontSize="11" fontWeight="700">Pulse oximeter</text>
      <text x="430" y="380" className="fill-muted-foreground" fontSize="9.5">first — earliest warning, audible tone</text>
    </g>
    {/* 2 BP cuff - opposite arm */}
    <g>
      <rect x="120" y="206" width="60" height="16" rx="4" className="fill-accent/40 stroke-accent" />
      <line x1="150" y1="222" x2="150" y2="345" className="stroke-accent" strokeWidth="2" strokeDasharray="4 3" />
      <rect x="55" y="346" width="200" height="44" rx="9" className="fill-accent/10 stroke-accent" />
      <circle cx="72" cy="368" r="11" className="fill-accent" /><text x="72" y="372" textAnchor="middle" className="fill-accent-foreground" fontSize="12" fontWeight="700">2</text>
      <text x="90" y="364" className="fill-foreground" fontSize="11" fontWeight="700">NIBP cuff</text>
      <text x="90" y="380" className="fill-muted-foreground" fontSize="9.5">other arm · cycle a baseline</text>
    </g>
    {/* 3 ECG - chest */}
    <g>
      <circle cx="300" cy="205" r="6" className="fill-destructive" />
      <circle cx="340" cy="205" r="6" className="fill-foreground" />
      <circle cx="320" cy="248" r="6" className="fill-success" />
      <rect x="430" y="40" width="150" height="44" rx="9" className="fill-warning/10 stroke-warning" />
      <circle cx="447" cy="62" r="11" className="fill-warning" /><text x="447" y="66" textAnchor="middle" className="fill-white" fontSize="12" fontWeight="700">3</text>
      <text x="465" y="58" className="fill-foreground" fontSize="11" fontWeight="700">ECG leads</text>
      <text x="465" y="74" className="fill-muted-foreground" fontSize="9.5">5-lead · RA/LA/RL/LL/V</text>
      <line x1="465" y1="84" x2="330" y2="200" className="stroke-warning" strokeWidth="1.5" strokeDasharray="4 3" />
    </g>
    {/* 4 Capnography - after airway */}
    <g>
      <rect x="582" y="40" width="168" height="60" rx="9" className="fill-primary/10 stroke-primary" />
      <circle cx="599" cy="62" r="11" className="fill-primary" /><text x="599" y="66" textAnchor="middle" className="fill-primary-foreground" fontSize="12" fontWeight="700">4</text>
      <text x="617" y="58" className="fill-foreground" fontSize="11" fontWeight="700">Capnography</text>
      <text x="617" y="74" className="fill-muted-foreground" fontSize="9.5">+ temp, BIS, TOF</text>
      <text x="617" y="90" className="fill-muted-foreground" fontSize="9.5">added once airway is in</text>
    </g>

    <text x="150" y="160" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontWeight="600">Pre-induction monitors, in order →</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 4. Bed → OR table transfer                                          */
/* ------------------------------------------------------------------ */
const Transfer: FC<DiagramProps> = () => {
  const panels = [
    { n: "1", title: "Align & LOCK", body: "Bed flush against OR table, both brake-locked. Drop the side rails. Never transfer onto a rolling surface." },
    { n: "2", title: "Account for everything", body: "Eyes on lines, drains, Foley, ETT/monitors. One person at the head owns the airway and calls the move." },
    { n: "3", title: "Count & slide", body: "Use the draw-sheet / slide board. “On three” — one smooth controlled slide, head and feet together." },
  ];
  return (
    <svg viewBox="0 0 760 300" className={svgBase} role="img" aria-label="Three-step safe transfer from the patient bed to the OR table">
      {panels.map((p, i) => {
        const x = 24 + i * 245;
        return (
          <g key={i}>
            <rect x={x} y="40" width="225" height="220" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
            <circle cx={x + 30} cy="70" r="15" className="fill-primary" />
            <text x={x + 30} y="75" textAnchor="middle" className="fill-primary-foreground" fontSize="14" fontWeight="700">{p.n}</text>
            <text x={x + 55} y="75" className="fill-foreground" fontSize="13" fontWeight="700">{p.title}</text>
            {/* mini illustration */}
            <rect x={x + 25} y="100" width="80" height="30" rx="8" className="fill-muted stroke-border" />
            <text x={x + 65} y="120" textAnchor="middle" className="fill-muted-foreground" fontSize="8">bed</text>
            <rect x={x + 120} y="100" width="80" height="30" rx="8" className="fill-primary/15 stroke-primary" />
            <text x={x + 160} y="120" textAnchor="middle" className="fill-primary" fontSize="8">OR table</text>
            {i === 0 && <text x={x + 112} y="148" textAnchor="middle" className="fill-destructive" fontSize="16" fontWeight="700">🔒</text>}
            {i === 2 && <path d={`M${x + 105} 115 h12`} className="stroke-primary" strokeWidth="2.5" markerEnd="url(#pbArrow2)" />}
            {/* body text */}
            <foreignObject x={x + 16} y="158" width="193" height="92">
              <div style={{ fontSize: "11px", lineHeight: 1.4, color: "rgb(var(--muted-foreground))" }}>
                {p.body}
              </div>
            </foreignObject>
          </g>
        );
      })}
      <defs>
        <marker id="pbArrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" className="fill-primary" />
        </marker>
      </defs>
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* 5. IV line: de-airing, fluid warmer, pressure bag                   */
/* ------------------------------------------------------------------ */
const IvLines: FC<DiagramProps> = () => (
  <svg viewBox="0 0 760 470" className={svgBase} role="img" aria-label="IV setup showing the fluid bag in a pressure bag, drip chamber, de-airing the line, fluid warmer and connection to the patient">
    {/* Pressure bag around fluid bag */}
    <rect x="70" y="40" width="120" height="150" rx="14" className="fill-destructive/10 stroke-destructive" strokeWidth="2" strokeDasharray="6 4" />
    <text x="130" y="32" textAnchor="middle" className="fill-destructive" fontSize="11" fontWeight="700">PRESSURE BAG</text>
    <text x="130" y="208" textAnchor="middle" className="fill-muted-foreground" fontSize="9">inflate to ~300 mmHg for rapid flow / blood</text>
    {/* fluid bag */}
    <path d="M95 60 h70 v110 q0 14 -14 14 h-42 q-14 0 -14 -14 z" className="fill-accent/25 stroke-accent" strokeWidth="2" />
    <rect x="118" y="50" width="24" height="14" rx="3" className="fill-accent/40 stroke-accent" />
    <text x="130" y="120" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">LR /</text>
    <text x="130" y="136" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">Blood</text>

    {/* drip chamber */}
    <line x1="130" y1="184" x2="130" y2="210" className="stroke-border" strokeWidth="2" />
    <rect x="120" y="210" width="20" height="46" rx="8" className="fill-card stroke-border" strokeWidth="2" />
    <circle cx="130" cy="240" r="3" className="fill-accent" />
    <text x="152" y="236" className="fill-muted-foreground" fontSize="10" fontWeight="600">drip chamber</text>
    <text x="152" y="250" className="fill-muted-foreground" fontSize="9">fill to ½ — squeeze & release</text>

    {/* roller clamp */}
    <line x1="130" y1="256" x2="130" y2="290" className="stroke-border" strokeWidth="2" />
    <rect x="122" y="290" width="16" height="22" rx="3" className="fill-muted stroke-border" />
    <text x="150" y="305" className="fill-muted-foreground" fontSize="10" fontWeight="600">roller clamp</text>

    {/* tubing to de-airing zone */}
    <path d="M130 312 C 130 360 260 360 300 320" className="fill-none stroke-border" strokeWidth="3" />

    {/* De-airing callout */}
    <rect x="250" y="120" width="230" height="120" rx="12" className="fill-warning/10 stroke-warning" strokeWidth="1.5" />
    <text x="365" y="146" textAnchor="middle" className="fill-warning" fontSize="12" fontWeight="700">GET THE AIR OUT</text>
    <text x="266" y="170" className="fill-foreground" fontSize="10.5">• Prime slowly — fast flow makes bubbles</text>
    <text x="266" y="188" className="fill-foreground" fontSize="10.5">• Invert injection ports as fluid passes</text>
    <text x="266" y="206" className="fill-foreground" fontSize="10.5">• Flick/tap bubbles up toward the chamber</text>
    <text x="266" y="224" className="fill-foreground" fontSize="10.5">• Open stopcocks &amp; bleed each one</text>
    {/* bubble illustration */}
    <line x1="250" y1="300" x2="470" y2="300" className="stroke-border" strokeWidth="6" strokeLinecap="round" />
    <circle cx="330" cy="300" r="7" className="fill-background stroke-warning" strokeWidth="2" />
    <circle cx="360" cy="300" r="4" className="fill-background stroke-warning" strokeWidth="2" />
    <path d="M345 282 q5 -10 15 0" className="fill-none stroke-warning" strokeWidth="1.5" markerEnd="url(#pbUp)" />
    <text x="360" y="324" textAnchor="middle" className="fill-muted-foreground" fontSize="9">tap bubbles toward the bag</text>

    {/* Fluid warmer inline */}
    <rect x="500" y="150" width="160" height="90" rx="12" className="fill-card stroke-primary" strokeWidth="2" />
    <text x="580" y="178" textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="700">FLUID WARMER</text>
    <path d="M520 200 q15 -16 30 0 q15 16 30 0 q15 -16 30 0" className="fill-none stroke-destructive" strokeWidth="2.5" />
    <text x="580" y="226" textAnchor="middle" className="fill-muted-foreground" fontSize="9">warm all rapid / large-volume fluids &amp; blood</text>
    <path d="M470 300 C 560 300 560 250 560 242" className="fill-none stroke-border" strokeWidth="3" />

    {/* down to patient */}
    <path d="M580 240 L580 360 Q580 380 560 380 L470 380" className="fill-none stroke-border" strokeWidth="3" />
    <circle cx="455" cy="380" r="10" className="fill-primary/20 stroke-primary" strokeWidth="2" />
    <text x="455" y="406" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">IV in patient</text>
    <text x="455" y="422" textAnchor="middle" className="fill-muted-foreground" fontSize="9">confirm flush &amp; free flow before induction</text>

    <defs>
      <marker id="pbUp" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
        <path d="M0 7 L3.5 0 L7 7 z" className="fill-warning" />
      </marker>
    </defs>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 6. Sniffing position (ear-to-sternal-notch)                          */
/* ------------------------------------------------------------------ */
const Sniffing: FC<DiagramProps> = () => (
  <svg viewBox="0 0 760 360" className={svgBase} role="img" aria-label="Comparison of neutral head position versus the sniffing position aligning the ear to the sternal notch">
    {/* Neutral (poor) */}
    <text x="190" y="40" textAnchor="middle" className="fill-destructive" fontSize="13" fontWeight="700">✗ Neutral / flat</text>
    <line x1="40" y1="230" x2="340" y2="230" className="stroke-border" strokeWidth="3" />
    <circle cx="120" cy="200" r="30" className="fill-card stroke-border" strokeWidth="2" />
    <path d="M148 195 q22 5 40 18" className="fill-none stroke-border" strokeWidth="2" />
    <rect x="185" y="210" width="130" height="22" rx="8" className="fill-muted stroke-border" />
    {/* ear and notch markers */}
    <circle cx="112" cy="196" r="4" className="fill-destructive" />
    <circle cx="250" cy="221" r="4" className="fill-destructive" />
    <line x1="112" y1="196" x2="250" y2="221" className="stroke-destructive" strokeWidth="2" strokeDasharray="5 4" />
    <text x="190" y="270" textAnchor="middle" className="fill-muted-foreground" fontSize="10">ear sits well below the sternal notch — axes don&apos;t align</text>

    {/* Sniffing (good) */}
    <text x="570" y="40" textAnchor="middle" className="fill-success" fontSize="13" fontWeight="700">✓ Sniffing position</text>
    <line x1="420" y1="230" x2="720" y2="230" className="stroke-border" strokeWidth="3" />
    {/* ramp / pad under head */}
    <path d="M455 230 q35 -34 95 -30 l0 30 z" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
    <text x="500" y="252" textAnchor="middle" className="fill-primary" fontSize="9">pad / ramp</text>
    <circle cx="500" cy="172" r="30" className="fill-card stroke-border" strokeWidth="2" />
    <path d="M528 170 q22 3 40 14" className="fill-none stroke-border" strokeWidth="2" />
    <rect x="565" y="186" width="130" height="22" rx="8" className="fill-muted stroke-border" />
    <circle cx="492" cy="168" r="4" className="fill-success" />
    <circle cx="630" cy="197" r="4" className="fill-success" />
    <line x1="492" y1="168" x2="630" y2="197" className="stroke-success" strokeWidth="2.5" />
    <text x="575" y="300" textAnchor="middle" className="fill-muted-foreground" fontSize="10">tragus level with the sternal notch · line parallel to floor</text>
    <text x="380" y="338" textAnchor="middle" className="fill-muted-foreground" fontSize="10.5" fontStyle="italic">Flex the lower neck, extend at the atlanto-occipital joint. Ramp obese patients until ear ≈ sternum.</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 7. Laryngoscopy / Cormack-Lehane glottic view                       */
/* ------------------------------------------------------------------ */
const grades = [
  { g: "I", desc: "Full glottis", cords: true, epi: false },
  { g: "II", desc: "Posterior cords", cords: "partial", epi: false },
  { g: "III", desc: "Epiglottis only", cords: false, epi: true },
  { g: "IV", desc: "Soft palate only", cords: false, epi: false },
] as const;

const Laryngoscopy: FC<DiagramProps> = () => (
  <svg viewBox="0 0 760 320" className={svgBase} role="img" aria-label="Cormack-Lehane grades I to IV of the laryngeal view during laryngoscopy">
    <text x="24" y="34" className="fill-foreground" fontSize="14" fontWeight="700">Cormack–Lehane laryngeal view</text>
    {grades.map((gr, i) => {
      const cx = 110 + i * 185;
      const cy = 150;
      return (
        <g key={gr.g}>
          {/* mouth/pharynx oval */}
          <ellipse cx={cx} cy={cy} rx="70" ry="80" className="fill-rose-200/40 stroke-border" strokeWidth="2" />
          <ellipse cx={cx} cy={cy} rx="48" ry="60" className="fill-rose-300/30" />
          {/* glottis triangle (vocal cords) */}
          {gr.cords && (
            <>
              <path d={`M${cx} ${cy - 30} L${cx - 16} ${cy + (gr.cords === "partial" ? 5 : 35)} L${cx + 16} ${cy + (gr.cords === "partial" ? 5 : 35)} Z`} className="fill-background stroke-foreground" strokeWidth="1.5" />
              <line x1={cx - 14} y1={cy - 25} x2={cx - 6} y2={cy + 30} className="stroke-card" strokeWidth="4" />
              <line x1={cx + 14} y1={cy - 25} x2={cx + 6} y2={cy + 30} className="stroke-card" strokeWidth="4" />
            </>
          )}
          {/* epiglottis flap */}
          {gr.epi && <path d={`M${cx - 34} ${cy + 10} Q${cx} ${cy - 40} ${cx + 34} ${cy + 10} Q${cx} ${cy + 24} ${cx - 34} ${cy + 10} Z`} className="fill-rose-400/50 stroke-foreground" strokeWidth="1.5" />}
          {gr.g === "IV" && <path d={`M${cx - 40} ${cy + 35} Q${cx} ${cy + 10} ${cx + 40} ${cy + 35}`} className="fill-none stroke-foreground" strokeWidth="2" />}
          <circle cx={cx} cy={cy - 105} r="14" className="fill-primary" />
          <text x={cx} y={cy - 100} textAnchor="middle" className="fill-primary-foreground" fontSize="13" fontWeight="700">{gr.g}</text>
          <text x={cx} y={cy + 105} textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="600">{gr.desc}</text>
        </g>
      );
    })}
    <text x="380" y="304" textAnchor="middle" className="fill-muted-foreground" fontSize="10.5" fontStyle="italic">Grade I–II → intubate. Grade III–IV → bougie, optimize position/ELM, or video laryngoscopy.</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 8. ETT depth                                                         */
/* ------------------------------------------------------------------ */
const EttDepth: FC<DiagramProps> = () => (
  <svg viewBox="0 0 760 330" className={svgBase} role="img" aria-label="Endotracheal tube depth: cuff sits in the mid-trachea, taped around 21 cm at the lip in women and 23 cm in men">
    {/* trachea */}
    <rect x="330" y="60" width="70" height="160" rx="10" className="fill-muted/40 stroke-border" strokeWidth="2" />
    {/* carina split */}
    <path d="M330 220 L300 270 M400 220 L430 270" className="stroke-border" strokeWidth="10" strokeLinecap="round" />
    <text x="365" y="292" textAnchor="middle" className="fill-muted-foreground" fontSize="10">carina</text>

    {/* ETT */}
    <rect x="352" y="20" width="26" height="180" rx="6" className="fill-accent/25 stroke-accent" strokeWidth="2" />
    {/* cuff */}
    <ellipse cx="365" cy="180" rx="26" ry="16" className="fill-accent/50 stroke-accent" strokeWidth="2" />
    {/* cuff label sits left of the trachea so it never collides with the depth panel */}
    <line x1="312" y1="182" x2="340" y2="182" className="stroke-border" strokeWidth="1.5" />
    <text x="305" y="178" textAnchor="end" className="fill-foreground" fontSize="11" fontWeight="600">cuff — mid-trachea</text>
    <text x="305" y="194" textAnchor="end" className="fill-muted-foreground" fontSize="9.5">tip ~3–4 cm above carina</text>

    {/* lip line */}
    <line x1="300" y1="110" x2="440" y2="110" className="stroke-destructive" strokeWidth="2" strokeDasharray="6 4" />
    <text x="300" y="104" className="fill-destructive" fontSize="10" fontWeight="700">teeth / lip</text>

    {/* depth labels */}
    <rect x="500" y="70" width="230" height="160" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
    <text x="615" y="98" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="700">Depth at the lip</text>
    <text x="520" y="130" className="fill-foreground" fontSize="12">♀ Women — <tspan className="fill-primary" fontWeight="700">~21 cm</tspan></text>
    <text x="520" y="158" className="fill-foreground" fontSize="12">♂ Men — <tspan className="fill-primary" fontWeight="700">~23 cm</tspan></text>
    <text x="520" y="188" className="fill-muted-foreground" fontSize="10.5">Rule of thumb: 3 × ETT size</text>
    <text x="520" y="206" className="fill-muted-foreground" fontSize="10.5">Confirm: EtCO₂ + bilateral breath</text>
    <text x="520" y="222" className="fill-muted-foreground" fontSize="10.5">sounds + chest rise, then tape.</text>

    <text x="300" y="318" textAnchor="middle" className="fill-muted-foreground" fontSize="10.5" fontStyle="italic">Always reconfirm depth after repositioning the patient.</text>
  </svg>
);

/* ------------------------------------------------------------------ */
/* 9. Anesthesia machine gas-flow path                                 */
/* ------------------------------------------------------------------ */
const GasFlow: FC<DiagramProps> = () => {
  const box = (x: number, y: number, w: number, h: number, label: string, sub: string, cls = "fill-card stroke-border") => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" className={cls} strokeWidth="2" />
      <text x={x + w / 2} y={y + h / 2 - 3} textAnchor="middle" className="fill-foreground" fontSize="12" fontWeight="700">{label}</text>
      <text x={x + w / 2} y={y + h / 2 + 13} textAnchor="middle" className="fill-muted-foreground" fontSize="9">{sub}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 760 380" className={svgBase} role="img" aria-label="Gas flow through the anesthesia machine from supply to patient with the circle system and scavenging">
      {/* supply */}
      {box(24, 40, 130, 70, "GAS SUPPLY", "O₂ · air · N₂O", "fill-accent/15 stroke-accent")}
      <text x="89" y="128" textAnchor="middle" className="fill-muted-foreground" fontSize="8.5">pipeline ~50 psi + cylinders</text>
      {/* flow control */}
      {box(190, 40, 120, 70, "FLOW CONTROL", "FGF + FiO₂")}
      {/* vaporizer */}
      {box(346, 40, 120, 70, "VAPORIZER", "+ volatile agent", "fill-primary/15 stroke-primary")}
      {/* fresh gas outlet */}
      {box(502, 40, 120, 70, "FRESH GAS", "to circuit")}

      {/* arrows top row */}
      <path d="M154 75 H188" className="stroke-foreground/50" strokeWidth="2" markerEnd="url(#gfA)" />
      <path d="M310 75 H344" className="stroke-foreground/50" strokeWidth="2" markerEnd="url(#gfA)" />
      <path d="M466 75 H500" className="stroke-foreground/50" strokeWidth="2" markerEnd="url(#gfA)" />

      {/* down to circle system */}
      <path d="M562 110 V150" className="stroke-foreground/50" strokeWidth="2" markerEnd="url(#gfA)" />

      {/* circle system */}
      <rect x="120" y="160" width="540" height="170" rx="16" className="fill-muted/20 stroke-border" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="135" y="182" className="fill-muted-foreground" fontSize="10" fontWeight="700">CIRCLE BREATHING SYSTEM</text>

      {box(150, 200, 120, 60, "VENTILATOR", "bellows / piston", "fill-card stroke-primary")}
      {box(320, 200, 120, 60, "PATIENT", "inspire ⇄ expire", "fill-primary/15 stroke-primary")}
      {box(490, 200, 130, 60, "CO₂ ABSORBER", "soda lime")}

      {/* inspiratory limb */}
      <path d="M270 220 H318" className="stroke-success" strokeWidth="2.5" markerEnd="url(#gfA2)" />
      <text x="294" y="212" textAnchor="middle" className="fill-success" fontSize="8">inspire</text>
      {/* expiratory limb to absorber */}
      <path d="M440 240 H488" className="stroke-warning" strokeWidth="2.5" markerEnd="url(#gfA3)" />
      <text x="464" y="256" textAnchor="middle" className="fill-warning" fontSize="8">expire</text>
      {/* absorber back to ventilator (recirculation) */}
      <path d="M555 260 V300 H215 V262" className="fill-none stroke-foreground/40" strokeWidth="2" markerEnd="url(#gfA)" />
      <text x="385" y="315" textAnchor="middle" className="fill-muted-foreground" fontSize="8.5">recirculated (CO₂ scrubbed) — this is what low-flow saves</text>

      {/* scavenging */}
      {box(636, 200, 100, 60, "SCAVENGE", "waste gas")}
      <path d="M620 230 H634" className="stroke-foreground/40" strokeWidth="2" markerEnd="url(#gfA)" />

      <defs>
        <marker id="gfA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" className="fill-foreground/50" /></marker>
        <marker id="gfA2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" className="fill-success" /></marker>
        <marker id="gfA3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" className="fill-warning" /></marker>
      </defs>
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* 10. Ventilation-mode airway-pressure waveforms                      */
/* ------------------------------------------------------------------ */
const VentModes: FC<DiagramProps> = () => {
  const panels: { title: string; sub: string; path: string }[] = [
    // VCV: ramp up to peak with small plateau, drop — shark-fin
    { title: "VCV", sub: "set VOLUME · pressure varies", path: "M0 50 L26 18 L40 14 L40 50 L0 50 M40 50 L66 18 L80 14 L80 50 M80 50 L106 18 L120 14 L120 50" },
    // PCV: square pressure plateau
    { title: "PCV", sub: "set PRESSURE · volume varies", path: "M0 50 L4 12 L40 12 L44 50 L48 50 L52 12 L88 12 L92 50 L96 50 L100 12 L120 12" },
    // PCV-VG: square like PCV but stepping to a target
    { title: "PCV-VG", sub: "PRESSURE targeting a volume", path: "M0 50 L4 22 L40 22 L44 50 L48 50 L52 17 L88 17 L92 50 L96 50 L100 13 L120 13" },
    // PSV: irregular patient-triggered humps
    { title: "PSV / PSVPro", sub: "patient triggers each breath", path: "M0 50 L6 20 L26 20 L32 50 L60 50 L66 24 L80 24 L86 50 L104 50 L110 18 L120 18" },
  ];
  const W = 180;
  return (
    <svg viewBox="0 0 760 200" className={svgBase} role="img" aria-label="Airway pressure over time for VCV, PCV, PCV-VG and PSV ventilation modes">
      {panels.map((p, i) => {
        const x = 12 + i * W;
        return (
          <g key={i}>
            <text x={x + 30} y={28} className="fill-foreground" fontSize="13" fontWeight="700">{p.title}</text>
            <text x={x + 30} y={44} className="fill-muted-foreground" fontSize="8.5">{p.sub}</text>
            {/* axes */}
            <g transform={`translate(${x + 30}, 70)`}>
              <line x1="0" y1="0" x2="0" y2="62" className="stroke-border" strokeWidth="1.5" />
              <line x1="0" y1="62" x2="124" y2="62" className="stroke-border" strokeWidth="1.5" />
              <text x="-6" y="6" textAnchor="end" className="fill-muted-foreground" fontSize="7">P</text>
              <text x="124" y="76" textAnchor="end" className="fill-muted-foreground" fontSize="7">time</text>
              {/* PEEP baseline */}
              <line x1="0" y1="50" x2="124" y2="50" className="stroke-accent/40" strokeWidth="1" strokeDasharray="3 3" />
              <path d={p.path} className="fill-none stroke-primary" strokeWidth="2.5" transform="translate(0,0)" />
            </g>
          </g>
        );
      })}
      <text x="380" y="190" textAnchor="middle" className="fill-muted-foreground" fontSize="9.5" fontStyle="italic">Dashed line = PEEP. VCV ramps to peak; PCV/-VG hold a pressure plateau; PSV breaths are patient-paced and irregular.</text>
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* 11. PSVPro timeline — supported breaths → apnea → backup            */
/* ------------------------------------------------------------------ */
const PsvPro: FC<DiagramProps> = () => (
  <svg viewBox="0 0 760 260" className={svgBase} role="img" aria-label="PSVPro timeline: patient-triggered supported breaths, then an apnea gap, then automatic backup ventilation with an alarm">
    {/* baseline / PEEP */}
    <line x1="30" y1="170" x2="740" y2="170" className="stroke-accent/40" strokeWidth="1.5" strokeDasharray="4 4" />
    <text x="34" y="184" className="fill-accent" fontSize="9">PEEP</text>
    <line x1="30" y1="60" x2="30" y2="190" className="stroke-border" strokeWidth="1.5" />
    <text x="20" y="64" textAnchor="end" className="fill-muted-foreground" fontSize="9">P</text>

    {/* Zone 1: spontaneous supported breaths */}
    <rect x="30" y="40" width="270" height="160" className="fill-success/5" />
    <text x="165" y="58" textAnchor="middle" className="fill-success" fontSize="11" fontWeight="700">Patient triggering → supported</text>
    {[60, 140, 215].map((cx, i) => (
      <g key={i}>
        <path d={`M${cx} 170 L${cx + 6} 95 L${cx + 38} 95 L${cx + 46} 170`} className="fill-none stroke-success" strokeWidth="2.5" />
        <path d={`M${cx - 2} 182 l4 -8 l4 8`} className="fill-none stroke-success" strokeWidth="1.5" />
        <text x={cx + 2} y="198" className="fill-muted-foreground" fontSize="7.5">trig</text>
      </g>
    ))}

    {/* Zone 2: apnea gap */}
    <rect x="300" y="40" width="170" height="160" className="fill-warning/10" />
    <text x="385" y="58" textAnchor="middle" className="fill-warning" fontSize="11" fontWeight="700">Apnea</text>
    <text x="385" y="120" textAnchor="middle" className="fill-muted-foreground" fontSize="9">no trigger for</text>
    <text x="385" y="135" textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700">&gt; apnea time</text>
    <line x1="310" y1="170" x2="462" y2="170" className="stroke-warning" strokeWidth="2.5" />

    {/* Zone 3: backup ventilation */}
    <rect x="470" y="40" width="270" height="160" className="fill-destructive/5" />
    <text x="605" y="58" textAnchor="middle" className="fill-destructive" fontSize="11" fontWeight="700">Auto backup (PCV) + alarm</text>
    {[500, 580, 660].map((cx, i) => (
      <g key={i}>
        <path d={`M${cx} 170 L${cx + 4} 90 L${cx + 40} 90 L${cx + 44} 170`} className="fill-none stroke-destructive" strokeWidth="2.5" />
      </g>
    ))}
    {/* alarm bell */}
    <g transform="translate(700,78)">
      <path d="M0 8 a8 8 0 0 1 16 0 v6 l3 4 h-22 l3 -4 z" className="fill-destructive/20 stroke-destructive" strokeWidth="1.5" />
      <circle cx="8" cy="22" r="2.5" className="fill-destructive" />
    </g>

    {/* transition arrows */}
    <path d="M300 215 H470" className="stroke-muted-foreground" strokeWidth="1.5" markerEnd="url(#ppA)" />
    <text x="385" y="232" textAnchor="middle" className="fill-muted-foreground" fontSize="9">machine takes over automatically</text>
    <text x="385" y="248" textAnchor="middle" className="fill-muted-foreground" fontSize="8.5" fontStyle="italic">…and hands back to support when the patient resumes breathing</text>

    <defs>
      <marker id="ppA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" className="fill-muted-foreground" /></marker>
    </defs>
  </svg>
);

/* ------------------------------------------------------------------ */
/* Registry                                                            */
/* ------------------------------------------------------------------ */
export const playbookDiagrams: Record<string, FC<DiagramProps>> = {
  "room-setup": RoomSetup,
  syringes: Syringes,
  monitors: Monitors,
  transfer: Transfer,
  "iv-lines": IvLines,
  sniffing: Sniffing,
  laryngoscopy: Laryngoscopy,
  "ett-depth": EttDepth,
  "gas-flow": GasFlow,
  "vent-modes": VentModes,
  psvpro: PsvPro,
};

export function Diagram({ name }: { name: string }) {
  const Cmp = playbookDiagrams[name];
  if (!Cmp) return null;
  return (
    <div>
      <div className="overflow-x-auto sm:overflow-visible rounded-2xl [-webkit-overflow-scrolling:touch]">
        <Cmp />
      </div>
      <div className="mt-1.5 pr-1 text-right text-[10px] text-muted-foreground/70 sm:hidden">
        swipe diagram horizontally →
      </div>
    </div>
  );
}
