import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Brain,
  Calculator,
  Pill,
  BookOpen,
  GraduationCap,
  Sparkles,
  HeartPulse,
  Stethoscope,
  Syringe,
  Baby,
  Heart,
  Zap,
  Siren,
  Crosshair,
  BookMarked,
  Search,
  CheckCircle2,
  Star,
  ShieldCheck,
  Clock,
  FlaskConical,
  Wind,
  Droplets,
} from "lucide-react";
import { subspecialties } from "@/lib/subspecialties";
import { questions } from "@/lib/questions";

const subspecialtyIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Brain,
  Baby,
  Crosshair,
  HeartPulse,
  Zap,
  Activity,
  Siren,
};

const marqueeItems = [
  "Propofol", "Etomidate", "Ketamine", "Succinylcholine", "Rocuronium",
  "Cisatracurium", "Fentanyl", "Remifentanil", "Sufentanil", "Hydromorphone",
  "Phenylephrine", "Norepinephrine", "Epinephrine", "Vasopressin",
  "Lidocaine", "Bupivacaine", "Ropivacaine", "Sugammadex", "Neostigmine",
  "Dexmedetomidine", "Ondansetron", "Dexamethasone",
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary pulse-dot" />
              Built for interns · residents · attendings
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              The clinical companion for{" "}
              <span className="text-gradient">modern anesthesiology</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Drug dosing, weight-based calculators, subspecialty primers, a
              question bank, and an AI assistant that helps you brainstorm
              anesthetic plans — all in one fast, beautiful workspace.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/ai-assistant"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4" />
                Build an anesthetic plan
              </Link>
              <Link
                href="/emergency"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive hover:bg-destructive/15 transition-colors font-medium"
              >
                <Siren className="h-4 w-4" />
                Emergency manual
              </Link>
              <Link
                href="/calculators"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-border bg-card hover:bg-muted transition-colors font-medium"
              >
                <Calculator className="h-4 w-4" />
                Open calculators
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              <Stat label="Chapters" value="26" />
              <Stat label="Drugs" value="27" />
              <Stat label="Calculators" value="14" />
              <Stat label="MCQs" value={`${questions.length}`} />
            </div>
          </div>

          {/* Floating card preview */}
          <div className="hidden lg:block absolute right-8 top-32 w-[380px] pointer-events-none">
            <div className="glass rounded-2xl border border-border p-5 shadow-2xl shadow-primary/10 animate-drift pointer-events-auto">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Syringe className="h-3.5 w-3.5 text-primary" />
                Quick reference · Propofol
              </div>
              <div className="mt-3 font-semibold text-lg">Induction</div>
              <div className="text-3xl font-bold text-gradient tracking-tight">
                1.5–2.5 mg/kg
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                IV bolus · reduce 25–50% in elderly/hypovolemic
              </div>
              <div className="mt-4 h-px bg-border" />
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-muted-foreground">Onset</div>
                  <div className="font-semibold">~30 sec</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Duration</div>
                  <div className="font-semibold">5–10 min</div>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl border border-border p-5 shadow-2xl mt-5 animate-drift-rev w-72 ml-12 pointer-events-auto">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calculator className="h-3.5 w-3.5 text-accent" />
                ETT (4 yo, uncuffed)
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight">5.0 mm</div>
              <div className="text-xs text-muted-foreground">Depth: 14 cm</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE strip — agents */}
      <section className="relative overflow-hidden border-y border-border bg-muted/30">
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="flex animate-marquee-slow whitespace-nowrap py-4 will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((d, i) => (
            <span
              key={`${d}-${i}`}
              className="inline-flex items-center gap-2 px-6 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 relative z-10">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
            What's inside
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
            Everything you need at the head of the bed
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Seven coordinated tools that work the way clinicians actually think
            — fast lookup, structured learning, and decision support.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            href="/tutorials"
            icon={BookMarked}
            title="CA-1 Tutorial Library"
            description="26 structured chapters covering everything from standard monitors to malignant hyperthermia — adapted from the Stanford CA-1 textbook."
            accent="from-primary to-accent"
            badge="26 chapters"
          />
          <FeatureCard
            href="/drugs"
            icon={Pill}
            title="Drug Database"
            description="Doses, onset, duration, metabolism, and pearls for the agents you actually use."
            accent="from-violet-500 to-purple-500"
            badge="27 drugs"
          />
          <FeatureCard
            href="/calculators"
            icon={Calculator}
            title="Bedside Calculators"
            description="BMI, IBW, MAC, pediatric ETT/LMA, fluids, allowable blood loss, RCRI, Apfel."
            accent="from-violet-500 to-pink-500"
            badge="9 calcs"
          />
          <FeatureCard
            href="/ai-assistant"
            icon={Brain}
            title="AI Plan Assistant"
            description="Brainstorm anesthetic plans, work through differentials, and ask clinical questions."
            accent="from-orange-500 to-rose-500"
            badge="Powered by Claude"
          />
          <FeatureCard
            href="/subspecialties"
            icon={BookOpen}
            title="Subspecialty Primers"
            description="Cardiac, neuro, OB, peds, regional, ICU, pain, trauma, transplant — core concepts and pearls."
            accent="from-emerald-500 to-cyan-500"
            badge="10 subs"
          />
          <FeatureCard
            href="/emergency"
            icon={Siren}
            title="Emergency Manual"
            description="Crisis cards for MH, LAST, anaphylaxis, CICV, massive transfusion, laryngospasm, and code blue — built for the head of the bed."
            accent="from-red-500 to-orange-500"
            badge="7 cards"
          />
          <FeatureCard
            href="/question-bank"
            icon={GraduationCap}
            title="Question Bank"
            description={`${questions.length} board-style MCQs across 12 categories with detailed explanations. Quiz mode, Review mode, status filters, bookmarks.`}
            accent="from-amber-500 to-orange-500"
            badge={`${questions.length} MCQs`}
          />
        </div>
      </section>

      {/* HOW IT FLOWS — 3 STEPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
              How clinicians use it
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              From pre-op to post-op
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <StepCard
            n={1}
            icon={Search}
            title="Look it up — instantly"
            description="Press ⌘K from anywhere. Search across drugs, calculators, tutorials, and emergencies."
            highlight={[
              { label: "Search", value: "⌘K" },
              { label: "Routes", value: "92+" },
            ]}
            accent="from-primary to-accent"
          />
          <StepCard
            n={2}
            icon={Brain}
            title="Build the plan — with AI"
            description="Describe your patient. Get a structured plan covering induction, airway, hemodynamics, and emergence."
            highlight={[
              { label: "Streaming", value: "Realtime" },
              { label: "Model", value: "Claude" },
            ]}
            accent="from-violet-500 to-pink-500"
          />
          <StepCard
            n={3}
            icon={Siren}
            title="If things go wrong — act"
            description="One tap to the crisis card you need. Doses, sequenced steps, and pitfalls in a single scrollable page."
            highlight={[
              { label: "MH dose", value: "2.5 mg/kg" },
              { label: "LAST", value: "1.5 mL/kg" },
            ]}
            accent="from-red-500 to-orange-500"
          />
        </div>
      </section>

      {/* FEATURED EMERGENCY STRIP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-28">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.18em] text-destructive font-medium">
            Built for crises
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Crisis cards that read like a checklist
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Each card opens to one scrollable page with the recognition signs,
            the dose grid, the sequenced steps, and the pitfalls clinicians
            most often forget under stress.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <EmergencyPreview
            href="/emergency/malignant-hyperthermia"
            icon={FlaskConical}
            color="from-red-600 to-orange-600"
            name="Malignant Hyperthermia"
            dose="Dantrolene 2.5 mg/kg"
          />
          <EmergencyPreview
            href="/emergency/last"
            icon={Crosshair}
            color="from-emerald-600 to-teal-600"
            name="LAST"
            dose="Lipid 1.5 mL/kg bolus"
          />
          <EmergencyPreview
            href="/emergency/anaphylaxis"
            icon={Activity}
            color="from-red-600 to-pink-600"
            name="Anaphylaxis"
            dose="Epi 10–100 mcg IV"
          />
          <EmergencyPreview
            href="/emergency/cicv"
            icon={Wind}
            color="from-orange-600 to-red-600"
            name="Cannot Intubate / Ventilate"
            dose="Sugammadex 16 mg/kg"
          />
        </div>
        <div className="mt-5 flex justify-center">
          <Link
            href="/emergency"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            See all 7 emergency cards <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SUBSPECIALTIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
              Explore
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Subspecialty primers
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Quick, structured overviews of the core anesthesia subspecialties
              with key concepts, monitoring, and clinical pearls.
            </p>
          </div>
          <Link
            href="/subspecialties"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            All subspecialties <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {subspecialties.map((s) => {
            const Icon = subspecialtyIcons[s.icon] ?? Stethoscope;
            return (
              <Link
                key={s.slug}
                href={`/subspecialties/${s.slug}`}
                className="card-lift group rounded-2xl border border-border bg-card p-5 relative overflow-hidden"
              >
                <div
                  className={`absolute -top-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}
                />
                <Icon className="h-6 w-6 text-primary" />
                <div className="mt-4 font-semibold text-sm sm:text-base">{s.name}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {s.tagline}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* AI CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <div className="absolute inset-0 bg-aurora opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-10 lg:p-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3 w-3" />
                AI Assistant
              </div>
              <h3 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight">
                Workshop an anesthetic plan in seconds.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
                Describe the patient and case. The assistant proposes a
                structured plan covering preop optimization, monitors,
                induction, maintenance, post-op analgesia, and disposition —
                with the trade-offs called out so you can teach (and learn)
                from it.
              </p>
              <Link
                href="/ai-assistant"
                className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                <Brain className="h-4 w-4" />
                Open assistant
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5 text-sm">
              <div className="text-muted-foreground text-xs mb-2">
                Example prompt
              </div>
              <div className="rounded-lg bg-muted/60 px-3 py-2 mb-3">
                &quot;72 yo M, 95 kg, severe AS (mean gradient 55 mmHg), CAD on
                aspirin, for ORIF hip. Build me a plan.&quot;
              </div>
              <div className="text-muted-foreground text-xs mb-1">
                Response outline
              </div>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>• Pre-op: optimize, hold ASA per surgeon, consult cards</li>
                <li>• Monitors: A-line pre-induction, consider TEE</li>
                <li>
                  • Technique: GETA with high-narcotic etomidate induction vs
                  CSE with low-dose spinal
                </li>
                <li>• Avoid tachycardia, maintain SVR & preload</li>
                <li>• Post-op: PACU stepdown / monitored unit, regional analgesia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / WHY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-28">
        <div className="grid md:grid-cols-3 gap-5">
          <TrustCard
            icon={ShieldCheck}
            title="Cited sources"
            description="Every chapter, drug, and calculator carries references — Barash, Miller, Stoelting, ASA / ASRA / MHAUS / SOAP guidelines, foundational papers."
          />
          <TrustCard
            icon={Clock}
            title="Built for speed"
            description="Static prerendering, no login, and a global ⌘K palette mean answers in under a second."
          />
          <TrustCard
            icon={Star}
            title="Personalized"
            description="Bookmark drugs, calculators, tutorials, and emergencies. Saved locally on your device — no account needed."
          />
        </div>
      </section>

      {/* BOTTOM BAND */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-28 mb-8">
        <div className="relative overflow-hidden rounded-3xl border border-border p-8 sm:p-12 text-center bg-muted/30">
          <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
          <div className="relative">
            <Stethoscope className="h-10 w-10 mx-auto text-primary" />
            <h4 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
              Built to support — not replace — clinical judgment.
            </h4>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              Every dose, calculator, and AI response should be verified against
              primary sources and institutional protocols before being applied to
              a patient.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/tutorials"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
              >
                <BookMarked className="h-4 w-4" />
                Start with chapter 1
              </Link>
              <Link
                href="/ai-assistant"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-border bg-card text-sm font-medium hover:bg-muted"
              >
                <Brain className="h-4 w-4" />
                Ask the AI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold tracking-tight text-gradient">
        {value}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({
  href,
  icon: Icon,
  title,
  description,
  accent,
  badge,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  accent: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
    >
      <div
        className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-15 blur-3xl group-hover:opacity-25 transition-opacity`}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md`}
        >
          <Icon className="h-5 w-5" />
        </div>
        {badge && (
          <span className="text-[10px] uppercase tracking-wider rounded-full border border-border bg-muted/50 px-2 py-0.5 text-muted-foreground">
            {badge}
          </span>
        )}
      </div>
      <h3 className="relative mt-4 font-semibold text-lg tracking-tight">
        {title}
      </h3>
      <p className="relative mt-1.5 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="relative mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Open <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}

function StepCard({
  n,
  icon: Icon,
  title,
  description,
  highlight,
  accent,
}: {
  n: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: { label: string; value: string }[];
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden">
      <div
        className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-15 blur-2xl`}
      />
      <div className="flex items-center gap-3">
        <span
          className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-muted-foreground">
          Step {n}
        </span>
      </div>
      <h3 className="relative mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="relative mt-1.5 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="relative mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-border">
        {highlight.map((h) => (
          <div key={h.label}>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
              {h.label}
            </div>
            <div className="mt-0.5 font-semibold text-sm">{h.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmergencyPreview({
  href,
  icon: Icon,
  color,
  name,
  dose,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  name: string;
  dose: string;
}) {
  return (
    <Link
      href={href}
      className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-5"
    >
      <div
        className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}
      />
      <div
        className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="relative mt-4 text-sm font-semibold tracking-tight">
        {name}
      </div>
      <div className="relative mt-1 text-xs text-muted-foreground">
        First action
      </div>
      <div className="relative mt-1 text-sm font-bold text-gradient tracking-tight">
        {dose}
      </div>
    </Link>
  );
}

function TrustCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-10 blur-2xl" />
      <Icon className="h-6 w-6 text-primary" />
      <h3 className="relative mt-3 text-base font-semibold tracking-tight">
        {title}
      </h3>
      <p className="relative mt-1.5 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
