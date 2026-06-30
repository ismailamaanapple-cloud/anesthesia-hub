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
  Volume2,
  Play,
  ArrowRight,
  Eraser,
} from "lucide-react";
import type { OralCase } from "@/lib/oral-boards";
import { scoreByPhase, type ScoreResult } from "@/lib/oral-match";
import { useOralProgress } from "@/lib/oral-progress";
import { Markdown } from "@/components/markdown";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }
}

type Props = { c: OralCase };

export function OralPractice({ c }: Props) {
  const { record, get } = useOralProgress();

  // phaseIdx: -1 = intro, 0..n-1 = phases, n = results
  const [phaseIdx, setPhaseIdx] = useState(-1);
  const [answers, setAnswers] = useState<string[]>(() => c.sections.map(() => ""));
  const [current, setCurrent] = useState("");
  const [interim, setInterim] = useState("");
  const [listening, setListening] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [readAloud, setReadAloud] = useState(true);

  const best = get(c.slug)?.bestPct;

  /* ---------------- speech recognition (iOS-safe) ---------------- */
  const recSupported = useMemo(
    () =>
      typeof window !== "undefined" &&
      !!(window.SpeechRecognition || window.webkitSpeechRecognition),
    []
  );
  const wantRef = useRef(false);
  const recRef = useRef<any>(null);

  // append finalized speech to the active phase's working answer
  const appendFinal = useCallback((chunk: string) => {
    setCurrent((prev) => (prev + " " + chunk).replace(/\s+/g, " ").replace(/^\s/, ""));
  }, []);

  const buildRec = useCallback((): any => {
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) return null;
    const rec = new Ctor();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    rec.onresult = (e: any) => {
      let f = "";
      let intr = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) f += r[0].transcript + " ";
        else intr += r[0].transcript;
      }
      if (f) appendFinal(f);
      setInterim(intr);
    };
    rec.onerror = (e: any) => {
      if (e?.error === "not-allowed" || e?.error === "service-not-allowed") {
        setMicError(
          "Microphone access was blocked. Allow the mic in your browser settings — on iPhone, use Safari."
        );
        wantRef.current = false;
        setListening(false);
      }
      // 'no-speech' / 'aborted' are transient — onend will restart.
    };
    rec.onend = () => {
      setInterim("");
      if (wantRef.current) {
        // iOS Safari stops after each utterance; restart to keep listening.
        try {
          rec.start();
        } catch {
          setTimeout(() => {
            if (!wantRef.current) return;
            const nr = buildRec();
            if (nr) {
              recRef.current = nr;
              try {
                nr.start();
              } catch {}
            }
          }, 300);
        }
      } else {
        setListening(false);
      }
    };
    return rec;
  }, [appendFinal]);

  const stopRec = useCallback(() => {
    wantRef.current = false;
    try {
      recRef.current?.stop();
    } catch {}
    setListening(false);
    setInterim("");
  }, []);

  const startRec = useCallback(() => {
    if (!recSupported) return;
    stopSpeak(); // don't capture the examiner voice
    setMicError(null);
    wantRef.current = true;
    const rec = buildRec();
    if (!rec) return;
    recRef.current = rec;
    try {
      rec.start();
      setListening(true);
    } catch {
      // already started — ignore
      setListening(true);
    }
  }, [recSupported, buildRec]);

  useEffect(() => {
    return () => {
      wantRef.current = false;
      try {
        recRef.current?.stop();
      } catch {}
      stopSpeak();
    };
  }, []);

  /* ---------------- text to speech (examiner voice) -------------- */
  const ttsSupported = useMemo(
    () => typeof window !== "undefined" && "speechSynthesis" in window,
    []
  );
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState("");
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (!ttsSupported) return;
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener?.("voiceschanged", load);
    return () => {
      try {
        window.speechSynthesis.removeEventListener?.("voiceschanged", load);
      } catch {}
    };
  }, [ttsSupported]);

  const enVoices = useMemo(() => voices.filter((v) => /^en[-_]?/i.test(v.lang)), [voices]);
  const bestVoice = useMemo(() => pickBestVoice(enVoices), [enVoices]);

  useEffect(() => {
    if (!enVoices.length) return;
    const saved = typeof window !== "undefined" ? localStorage.getItem("ah-oral-voice") : null;
    const chosen = (saved && enVoices.find((v) => v.voiceURI === saved)) || bestVoice;
    if (chosen) setVoiceURI(chosen.voiceURI);
  }, [enVoices, bestVoice]);

  useEffect(() => {
    voiceRef.current = enVoices.find((v) => v.voiceURI === voiceURI) || bestVoice || null;
  }, [voiceURI, enVoices, bestVoice]);

  const utter = useCallback((text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    if (voiceRef.current) {
      u.voice = voiceRef.current;
      u.lang = voiceRef.current.lang;
    }
    u.rate = 0.95;
    u.pitch = 1.02;
    return u;
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!ttsSupported || !text) return;
      try {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter(text));
      } catch {}
    },
    [ttsSupported, utter]
  );

  // read several segments back-to-back (e.g., the case stem, then the prompt)
  const speakMany = useCallback(
    (texts: string[]) => {
      if (!ttsSupported) return;
      try {
        window.speechSynthesis.cancel();
        texts.filter(Boolean).forEach((t) => window.speechSynthesis.speak(utter(t)));
      } catch {}
    },
    [ttsSupported, utter]
  );

  const chooseVoice = useCallback(
    (uri: string) => {
      setVoiceURI(uri);
      try {
        localStorage.setItem("ah-oral-voice", uri);
      } catch {}
      const v = enVoices.find((x) => x.voiceURI === uri) || null;
      voiceRef.current = v;
      speak("Hello, I'll be your examiner today.");
    },
    [enVoices, speak]
  );

  /* ---------------- flow ---------------- */
  const begin = useCallback(() => {
    setAnswers(c.sections.map(() => ""));
    setCurrent("");
    setResult(null);
    setPhaseIdx(0);
    // examiner reads the case, then the first prompt
    if (readAloud) speakMany([c.stem, c.sections[0]?.prompt ?? ""]);
  }, [c.sections, c.stem, readAloud, speakMany]);

  const advance = useCallback(() => {
    stopRec();
    stopSpeak();
    const next = [...answers];
    next[phaseIdx] = current;
    setAnswers(next);
    setCurrent("");
    setInterim("");

    if (phaseIdx + 1 >= c.sections.length) {
      const r = scoreByPhase(c, next);
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
      setPhaseIdx(c.sections.length);
      setTimeout(
        () => document.getElementById("oral-results")?.scrollIntoView({ behavior: "smooth", block: "start" }),
        60
      );
    } else {
      const ni = phaseIdx + 1;
      setPhaseIdx(ni);
      if (readAloud) speakMany([c.sections[ni]?.prompt ?? ""]);
    }
  }, [answers, c, current, phaseIdx, readAloud, record, speakMany, stopRec]);

  const reset = useCallback(() => {
    stopRec();
    stopSpeak();
    setAnswers(c.sections.map(() => ""));
    setCurrent("");
    setInterim("");
    setResult(null);
    setPhaseIdx(-1);
  }, [c.sections, stopRec]);

  const isIntro = phaseIdx === -1;
  const isResults = phaseIdx >= c.sections.length;
  const phase = !isIntro && !isResults ? c.sections[phaseIdx] : null;

  /* ---------------- render ---------------- */
  return (
    <div>
      {/* Stem */}
      <section className="rounded-2xl border border-border bg-card p-5 sm:p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
            The case
          </span>
          {ttsSupported && (
            <button
              onClick={() => speak(c.stem)}
              className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline"
            >
              <Volume2 className="h-3.5 w-3.5" /> Read aloud
            </button>
          )}
          {best != null && (
            <span className="ml-auto text-[11px] text-muted-foreground">
              Best: <span className="font-semibold text-foreground">{best}%</span>
            </span>
          )}
        </div>
        <Markdown text={c.stem} />
      </section>

      {/* Intro */}
      {isIntro && (
        <section className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-7">
          <h2 className="text-lg font-semibold tracking-tight">
            {c.sections.length}-phase oral exam
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The examiner will give you one prompt at a time. Answer each out loud,
            then continue. We&apos;ll score the key phrases you said at the end.
          </p>
          {ttsSupported && (
            <label className="mt-4 flex items-center gap-2 text-sm text-muted-foreground cursor-pointer select-none">
              <input
                type="checkbox"
                checked={readAloud}
                onChange={(e) => setReadAloud(e.target.checked)}
                className="h-4 w-4 accent-primary"
              />
              Examiner reads the case &amp; prompts aloud
            </label>
          )}
          {ttsSupported && enVoices.length > 1 && (
            <div className="mt-3">
              <label className="block text-xs text-muted-foreground mb-1">Examiner voice</label>
              <div className="flex items-center gap-2">
                <select
                  value={voiceURI}
                  onChange={(e) => chooseVoice(e.target.value)}
                  className="h-9 max-w-full rounded-lg border border-border bg-background px-2 text-sm outline-none focus:border-primary"
                >
                  {enVoices.map((v) => (
                    <option key={v.voiceURI} value={v.voiceURI}>
                      {v.name}
                      {/(enhanced|premium|natural|neural|siri)/i.test(v.name) ? " ✨" : ""}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => speak("Hello, I'll be your examiner today.")}
                  className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border text-xs font-medium hover:bg-muted transition-colors"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Preview
                </button>
              </div>
              <p className="mt-1.5 text-[11px] text-muted-foreground">
                Tip: for a more human voice on iPhone, install an{" "}
                <span className="font-medium">Enhanced</span> or{" "}
                <span className="font-medium">Premium</span> English voice in Settings →
                Accessibility → Spoken Content → Voices, then pick it here (✨).
              </p>
            </div>
          )}
          {!recSupported && (
            <div className="mt-4 text-xs text-warning bg-warning/10 border border-warning/30 rounded-lg px-3 py-2 inline-flex items-center gap-2">
              <Keyboard className="h-3.5 w-3.5" />
              Voice input needs Safari (iPhone) or Chrome/Edge — you can type your answers instead.
            </div>
          )}
          <button
            onClick={begin}
            className="mt-5 inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-br from-primary to-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Play className="h-4 w-4" /> Start oral exam
          </button>
        </section>
      )}

      {/* Active phase */}
      {phase && (
        <section className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-7">
          {/* progress */}
          <div className="flex items-center gap-1.5 mb-4">
            {c.sections.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i < phaseIdx ? "w-6 bg-primary" : i === phaseIdx ? "w-10 bg-primary" : "w-6 bg-border"
                )}
              />
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Phase {phaseIdx + 1} of {c.sections.length} · {phase.title}
          </div>

          <div className="mt-2 flex items-start gap-2">
            <p className="text-base sm:text-lg font-medium leading-snug flex-1">
              {phase.prompt ?? phase.title}
            </p>
            {ttsSupported && phase.prompt && (
              <button
                onClick={() => speak(phase.prompt!)}
                aria-label="Read prompt aloud"
                className="shrink-0 h-9 w-9 grid place-items-center rounded-lg border border-border text-primary hover:bg-muted transition-colors"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* recorder */}
          <div className="mt-5 flex flex-col items-center gap-3">
            {recSupported && (
              <button
                onClick={listening ? stopRec : startRec}
                className={cn(
                  "relative inline-flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-transform active:scale-95",
                  listening ? "bg-destructive pulse-dot" : "bg-gradient-to-br from-primary to-accent"
                )}
                aria-label={listening ? "Stop recording" : "Start recording"}
              >
                {listening ? <Square className="h-6 w-6" /> : <Mic className="h-7 w-7" />}
              </button>
            )}
            <p className="text-xs text-muted-foreground text-center">
              {listening
                ? "Listening… speak your answer, then tap to stop."
                : recSupported
                ? "Tap the mic and answer this phase out loud."
                : "Type your answer below."}
            </p>
          </div>

          {micError && (
            <div className="mt-3 text-xs text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-3 py-2">
              {micError}
            </div>
          )}
          {interim && <p className="mt-3 text-sm text-muted-foreground italic">{interim}…</p>}

          <textarea
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            placeholder="Your answer for this phase…"
            rows={4}
            className="mt-4 w-full rounded-xl border border-border bg-background p-3 text-sm leading-relaxed outline-none focus:border-primary transition-colors resize-y"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={advance}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {phaseIdx + 1 >= c.sections.length ? (
                <>
                  <Sparkles className="h-4 w-4" /> Finish & score
                </>
              ) : (
                <>
                  Next phase <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <button
              onClick={() => {
                setCurrent("");
                setInterim("");
              }}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-colors"
            >
              <Eraser className="h-4 w-4" /> Clear
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 h-10 px-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="h-4 w-4" /> Restart
            </button>
          </div>
        </section>
      )}

      {/* Results */}
      {isResults && result && (
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
                      result.criticalHit === result.criticalTotal ? "text-success" : "text-destructive"
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

          {/* Per-phase checklist + what you said */}
          <div className="mt-4 space-y-4">
            {result.sections.map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold tracking-tight mb-1">
                  Phase {i + 1} · {s.title}
                </h3>
                {s.prompt && <p className="text-xs text-muted-foreground mb-3 italic">{s.prompt}</p>}
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
                {answers[i]?.trim() && (
                  <p className="mt-3 text-xs text-muted-foreground border-l-2 border-border pl-3">
                    <span className="font-medium">You said:</span> {answers[i].trim()}
                  </p>
                )}
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

/* ---------------- helpers ---------------- */
const VOICE_PREF = [
  "samantha", "ava", "allison", "serena", "aria", "jenny", "emma", "michelle",
  "google us english", "google uk english female",
  "natural", "neural", "enhanced", "premium", "siri", "daniel", "tom", "alex",
];
function pickBestVoice(list: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!list.length) return null;
  for (const term of VOICE_PREF) {
    const v = list.find((x) => x.name.toLowerCase().includes(term));
    if (v) return v;
  }
  return list.find((x) => /en[-_]us/i.test(x.lang)) || list[0];
}
function stopSpeak() {
  try {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  } catch {}
}

function ScoreRing({ pct }: { pct: number }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const off = circ - (pct / 100) * circ;
  const color = pct >= 80 ? "text-success" : pct >= 50 ? "text-warning" : "text-destructive";
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
