// Key-phrase matching engine for the Oral Boards trainer.
//
// The candidate answers a case out loud (or by typing); we transcribe the
// answer and check whether they hit each expected key phrase. Matching is
// deliberately forgiving: every phrase carries a canonical display string plus
// a list of accepted alternates/keywords, and a phrase counts as "said" if any
// variant appears anywhere in the normalized transcript.

import type { OralCase, OralKeyPhrase } from "@/lib/oral-boards";

/** Lowercase, expand %, strip punctuation, collapse whitespace. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/%/g, " percent ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function variants(p: OralKeyPhrase): string[] {
  return [p.text, ...(p.alts ?? [])];
}

// Filler words ignored when matching keyword sets, so word order and
// connective words don't break a correct answer.
const STOP = new Set(
  ("a an the of to for and or with within in on at as is are am be been being i id im " +
    "we you your my our his her their them they it its this that these those would will " +
    "can could should do does did give gives given get got go then also if into from by " +
    "about over under more less very patient pt how what when where there here so but " +
    "have has had not no yes ok please consider want need start started starting")
    .split(" ")
);

// Map common synonyms / number-words to a canonical token so an answer using
// different-but-correct wording still matches the key phrase.
const SYN: Record<string, string> = {
  // verbs
  quit: "stop", halt: "stop", discontinue: "stop", cease: "stop", abort: "stop",
  protect: "secure", establish: "secure", definitive: "secure",
  administer: "give", deliver: "give", push: "give",
  // drug / term aliases
  o2: "oxygen", epi: "epinephrine", adrenaline: "epinephrine", neo: "phenylephrine",
  fluids: "fluid", crystalloid: "fluid", crystalloids: "fluid",
  defibrillate: "defibrillation", shock: "defibrillation",
  // number words
  hundred: "100", one: "1", two: "2", three: "3", four: "4", five: "5",
};
function canon(t: string): string {
  return SYN[t] ?? t;
}

/** Reduce a token to a crude base form (drop simple plural) for matching. */
function base(t: string): string {
  if (t.length > 3 && t.endsWith("es")) return t.slice(0, -2);
  if (t.length > 3 && t.endsWith("s")) return t.slice(0, -1);
  return t;
}

/** Forgiving single-token equality: exact, plural, or shared 6-char stem. */
function tokenEq(a: string, b: string): boolean {
  if (a === b) return true;
  if (base(a) === base(b)) return true;
  if (a.length >= 6 && b.length >= 6 && a.slice(0, 6) === b.slice(0, 6)) return true;
  return false;
}

type MatchCtx = { norm: string; toks: string[] };
function makeCtx(s: string): MatchCtx {
  const norm = normalize(s);
  return { norm, toks: norm.split(" ").filter(Boolean).map(canon) };
}

/**
 * A variant matches if it appears verbatim (fast path) OR if every meaningful
 * keyword in it appears somewhere in the answer — order-independent, with
 * filler words ignored and light stemming. This gives natural answers room to
 * breathe while still requiring the substantive content.
 */
function variantMatches(ctx: MatchCtx, variant: string): boolean {
  const vn = normalize(variant);
  if (!vn) return false;
  if (ctx.norm.includes(vn)) return true;
  const vt = vn.split(" ").filter((t) => t && !STOP.has(t)).map(canon);
  if (!vt.length) return false;
  return vt.every((v) => ctx.toks.some((t) => tokenEq(t, v)));
}

export function phraseSaid(ctx: MatchCtx, p: OralKeyPhrase): boolean {
  return variants(p).some((v) => variantMatches(ctx, v));
}

export type PhraseResult = { phrase: OralKeyPhrase; hit: boolean };
export type SectionResult = { title: string; prompt?: string; results: PhraseResult[] };

export type ScoreResult = {
  sections: SectionResult[];
  total: number;
  hit: number;
  pct: number;
  criticalTotal: number;
  criticalHit: number;
  criticalMisses: OralKeyPhrase[];
};

function aggregate(sections: SectionResult[]): ScoreResult {
  const all = sections.flatMap((s) => s.results);
  const total = all.length;
  const hit = all.filter((r) => r.hit).length;
  const crit = all.filter((r) => r.phrase.critical);
  const criticalTotal = crit.length;
  const criticalHit = crit.filter((r) => r.hit).length;
  const criticalMisses = crit.filter((r) => !r.hit).map((r) => r.phrase);
  return {
    sections,
    total,
    hit,
    pct: total ? Math.round((hit / total) * 100) : 0,
    criticalTotal,
    criticalHit,
    criticalMisses,
  };
}

/** Score a single transcript against every key phrase in a case. */
export function scoreCase(c: OralCase, transcript: string): ScoreResult {
  const ctx = makeCtx(transcript);
  return aggregate(
    c.sections.map((s) => ({
      title: s.title,
      prompt: s.prompt,
      results: s.phrases.map((phrase) => ({ phrase, hit: phraseSaid(ctx, phrase) })),
    }))
  );
}

/**
 * Score phase-by-phase: each section's phrases are matched only against the
 * answer the candidate gave for that phase (answers[i]).
 */
export function scoreByPhase(c: OralCase, answers: string[]): ScoreResult {
  return aggregate(
    c.sections.map((s, i) => {
      const ctx = makeCtx(answers[i] ?? "");
      return {
        title: s.title,
        prompt: s.prompt,
        results: s.phrases.map((phrase) => ({ phrase, hit: phraseSaid(ctx, phrase) })),
      };
    })
  );
}

/** Count of all key phrases in a case (for list-page summaries). */
export function countPhrases(c: OralCase): number {
  return c.sections.reduce((n, s) => n + s.phrases.length, 0);
}
