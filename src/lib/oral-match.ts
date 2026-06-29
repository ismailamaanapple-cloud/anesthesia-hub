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

/** True if any variant of the phrase appears in the already-normalized text. */
export function phraseSaid(transcriptNorm: string, p: OralKeyPhrase): boolean {
  if (!transcriptNorm) return false;
  return variants(p).some((v) => {
    const n = normalize(v);
    return n.length > 0 && transcriptNorm.includes(n);
  });
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

/** Score a transcript against every key phrase in a case. */
export function scoreCase(c: OralCase, transcript: string): ScoreResult {
  const t = normalize(transcript);
  const sections: SectionResult[] = c.sections.map((s) => ({
    title: s.title,
    prompt: s.prompt,
    results: s.phrases.map((phrase) => ({ phrase, hit: phraseSaid(t, phrase) })),
  }));

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

/** Count of all key phrases in a case (for list-page summaries). */
export function countPhrases(c: OralCase): number {
  return c.sections.reduce((n, s) => n + s.phrases.length, 0);
}
