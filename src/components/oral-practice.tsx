"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Mic,
  Square,
  RotateCcw,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Keyboard,
  Sparkles,
} from "lucide-react";
import type { OralCase, OralCaseSection } from "@/lib/oral-boards";
import { scoreCase, type ScoreResult } from "@/lib/oral-match";
import { useOralProgress } from "@/lib/oral-progress";
import { Markdown } from "@/components/markdown";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

type Props = { c: OralCase & { sections: OralCaseSection[] } };

export function OralPractice({ c }: Props) {
  const { record, get } = useOralProgress();
  const [answer, setAnswer] = useState("");
  const [interim, setInterim] = useState("");
  const [listening, setListening] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [showPrompts, setShowPrompts] = useState(false);
  const recRef = useRef<any>(null);

  const supported = useMemo(
    () =>
      typeof window !== "undefined" &&
      !!(window.SpeechRecognition || window.webkitSpeechRecognition),
    []
  );

  const best = get(c.slug)?.bestPct;

  const stop = useCallback(() => {
    try {
      recRef.current?.stop();
    } catch {}
    setListening(false);
  }, []);

  const start = useCallback(() => {
    if (!supported) return;
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new Ctor();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    rec.onresult = (e: any) => {
      let finalChunk = "";
      let interimChunk = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finalChunk += r[0].transcript + " ";
        else interimChunk += r[0].transcript;
      }
      if (finalChunk) setAnswer((prev) => (prev + " " + finalChunk).trim() + " ");
      setInterim(interimChunk);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => {
      setInterim("");
      setListening(false);
    };
    recRef.current = rec;
    setResult(null);
    rec.start();
    setListening(true);
  }, [supported]);

  useEffect(() => {
    return () => {
      try {
        recRef.current?.stop();
      } catch {}
    };
  }, []);

  const grade = useCallback(() => {
    stop();
    const r = scoreCase(c, answer);
    setResult(r);
    record({
      slug: c.slug,
      pct: r.pct,
      hit: r.hit,
      total: r.total,
      criticalHit: r.criticalHit,
      criticalTotal: r.criticalTotal,
      at: new Date().toISOString(),
    });
    // smooth-scroll to results
    setTimeout(() => {
      document.getElementById("oral-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }, [answer, c, record, stop]);

  const reset = useCallback(() => {
    stop();
    setAnswer("");
    setInterim("");
    setResult(null);
  }, [stop]);

  return (
    <div>
      {/* Stem */}
      <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
            The case
          </span>
          {best != null && (
            <span className="ml-auto text-[11px] text-muted-foreground">
              Best: <span className="font-semibold text-foreground">{best}%</span>
            </span>
          )}
        </div>
        <Markdown text={c.stem} />
        <button
          onClick={() => setShowPrompts((s) => !s)}
          className="mt-4 text-xs text-primary font-medium hover:underline"
        >
          {showPrompts ? "Hide" : "Show"} examiner prompts ({c.sections.length} phases)
        </button>
        {showPrompts && (
          <ol className="mt-3 space-y-1.5 text-sm text-muted-foreground list-decimal pl-5">
            {c.sections.map((s, i) => (
              <li key={i}>
                <span className="font-medium text-foreground">{s.title}</span>
                {s.prompt ? <> — {s.prompt}</> : null}
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* Recorder */}
      <section className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-7">
        <div className="flex items-center gap-2 mb-4">
          <Mic className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Your answer
          </h2>
        </div>

        {supported ? (
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={listening ? stop : start}
              className={cn(
                "relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg transition-transform active:scale-95",
                listening
                  ? "bg-destructive pulse-dot"
                  : "bg-gradient-to-br from-primary to-accent"
              )}
              aria-label={listening ? "Stop recording" : "Start recording"}
            >
              {listening ? <Square className="h-7 w-7" /> : <Mic className="h-8 w-8" />}
            </button>
            <p className="text-xs text-muted-foreground">
              {listening ? "Listening… answer the case out loud, then stop." : "Tap to start speaking your answer."}
            </p>
          </div>
        ) : (
          <div className="text-xs text-warning bg-warning/10 border border-warning/30 rounded-lg px-3 py-2 mb-3 inline-flex items-center gap-2">
            <Keyboard className="h-3.5 w-3.5" />
            Voice capture needs Chrome, Edge, or Safari — type your answer below instead.
          </div>
        )}

        {interim && (
          <p className="mt-3 text-sm text-muted-foreground italic">{interim}…</p>
        )}

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your transcribed answer appears here — or type/edit it directly…"
          rows={5}
          className="mt-4 w-full rounded-xl border border-border bg-background p-3 text-sm leading-relaxed outline-none focus:border-primary transition-colors resize-y"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={grade}
            disabled={!answer.trim()}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 disabled:opacity-40 transition-opacity"
          >
            <Sparkles className="h-4 w-4" /> Score my answer
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>
      </section>

      {/* Results */}
      {result && (
        <section id="oral-results" className="mt-6 scroll-mt-24">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-7">
            <div className="flex items-center gap-4">
              <ScoreRing pct={result.pct} />
              <div>
                <div className="text-sm text-muted-foreground">
                  You said{" "}
                  <span className="font-semibold text-foreground">
                    {result.hit} of {result.total}
                  </span>{" "}
                  key phrases.
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  Critical safety steps:{" "}
                  <span
                    className={cn(
                      "font-semibold",
                      result.criticalHit === result.criticalTotal
                        ? "text-success"
                        : "text-destructive"
                    )}
                  >
                    {result.criticalHit}/{result.criticalTotal}
                  </span>
                </div>
              </div>
            </div>

            {result.criticalMisses.length > 0 && (
              <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive">
                    Critical misses
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {result.criticalMisses.map((p, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                      <span>{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Per-section checklist */}
          <div className="mt-4 space-y-4">
            {result.sections.map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold tracking-tight mb-1">{s.title}</h3>
                {s.prompt && (
                  <p className="text-xs text-muted-foreground mb-3 italic">{s.prompt}</p>
                )}
                <ul className="space-y-2">
                  {s.results.map((r, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      {r.hit ? (
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                      )}
                      <span
                        className={cn(
                          "leading-relaxed",
                          r.hit ? "text-foreground" : "text-muted-foreground",
                          r.phrase.critical && !r.hit && "text-destructive font-medium"
                        )}
                      >
                        {r.phrase.text}
                        {r.phrase.critical && (
                          <span className="ml-2 text-[10px] uppercase tracking-wider font-semibold text-destructive/80">
                            critical
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <RotateCcw className="h-4 w-4" /> Try again
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

function ScoreRing({ pct }: { pct: number }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const off = circ - (pct / 100) * circ;
  const color =
    pct >= 80 ? "text-success" : pct >= 50 ? "text-warning" : "text-destructive";
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 64 64" className="h-20 w-20 -rotate-90">
        <circle cx="32" cy="32" r={r} className="fill-none stroke-border" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={r}
          className={cn("fill-none", color)}
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={off}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className={cn("text-lg font-bold", color)}>{pct}%</span>
      </div>
    </div>
  );
}
