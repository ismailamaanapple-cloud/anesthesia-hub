"use client";

import { useEffect, useMemo, useState } from "react";
import {
  GraduationCap,
  Check,
  X,
  RefreshCw,
  ChevronRight,
  Trophy,
  Sparkles,
} from "lucide-react";
import { categories, questions, type Question } from "@/lib/questions";
import { cn } from "@/lib/utils";

type Progress = Record<string, { correct: boolean; pickedAt: string }>;

const STORAGE = "ah-qbank-v1";

function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function QuestionBankPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [progress, setProgress] = useState<Progress>({});
  const [deck, setDeck] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setProgress(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    const pool = cat === "All" ? questions : questions.filter((q) => q.category === cat);
    setDeck(shuffle(pool));
    setIdx(0);
    setPicked(null);
    setRevealed(false);
  }, [cat]);

  const q = deck[idx];

  const saveResult = (qid: string, correct: boolean) => {
    setProgress((p) => {
      const next = { ...p, [qid]: { correct, pickedAt: new Date().toISOString() } };
      try {
        localStorage.setItem(STORAGE, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const onPick = (i: number) => {
    if (revealed || !q) return;
    setPicked(i);
    setRevealed(true);
    saveResult(q.id, i === q.answer);
  };

  const next = () => {
    if (idx + 1 < deck.length) {
      setIdx(idx + 1);
      setPicked(null);
      setRevealed(false);
    } else {
      // reshuffle
      setDeck(shuffle(deck));
      setIdx(0);
      setPicked(null);
      setRevealed(false);
    }
  };

  const stats = useMemo(() => {
    const attempted = Object.keys(progress).length;
    const correct = Object.values(progress).filter((p) => p.correct).length;
    return {
      attempted,
      correct,
      pct: attempted ? Math.round((correct / attempted) * 100) : 0,
    };
  }, [progress]);

  const reset = () => {
    if (!confirm("Reset all progress?")) return;
    setProgress({});
    try {
      localStorage.removeItem(STORAGE);
    } catch {}
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <GraduationCap className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            Question Bank
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Self-paced multiple-choice questions with detailed explanations.
            Progress saved locally on this device.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        <Stat label="Attempted" value={stats.attempted} />
        <Stat label="Correct" value={stats.correct} accent="text-success" />
        <Stat label="Accuracy" value={`${stats.pct}%`} accent="text-primary" />
      </div>

      {/* Category filter */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "px-3 h-9 rounded-lg text-xs font-medium border transition-colors",
              cat === c
                ? "bg-primary/10 border-primary/40 text-primary"
                : "border-border bg-card hover:bg-muted text-muted-foreground"
            )}
          >
            {c}
          </button>
        ))}
        <button
          onClick={reset}
          className="ml-auto px-3 h-9 rounded-lg text-xs font-medium border border-border bg-card hover:bg-muted text-muted-foreground inline-flex items-center gap-1.5"
        >
          <RefreshCw className="h-3 w-3" /> Reset progress
        </button>
      </div>

      {/* Question */}
      {q ? (
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 font-medium">
              {q.category}
            </span>
            <span className="text-muted-foreground">{q.difficulty}</span>
            <span className="ml-auto text-muted-foreground">
              {idx + 1} / {deck.length}
            </span>
          </div>
          <p className="mt-4 text-base leading-relaxed">{q.stem}</p>

          <div className="mt-5 space-y-2">
            {q.choices.map((c, i) => {
              const isCorrect = revealed && i === q.answer;
              const isWrongPick = revealed && i === picked && picked !== q.answer;
              return (
                <button
                  key={i}
                  onClick={() => onPick(i)}
                  disabled={revealed}
                  className={cn(
                    "w-full text-left flex items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors",
                    isCorrect &&
                      "border-success/50 bg-success/10 text-foreground",
                    isWrongPick &&
                      "border-destructive/50 bg-destructive/10 text-foreground",
                    !revealed &&
                      "border-border bg-background hover:border-primary/40",
                    revealed &&
                      !isCorrect &&
                      !isWrongPick &&
                      "border-border bg-background opacity-70"
                  )}
                >
                  <span
                    className={cn(
                      "shrink-0 h-6 w-6 grid place-items-center rounded-full text-xs font-semibold border",
                      isCorrect && "bg-success text-white border-success",
                      isWrongPick &&
                        "bg-destructive text-white border-destructive",
                      !revealed && "border-border text-muted-foreground"
                    )}
                  >
                    {isCorrect ? (
                      <Check className="h-3 w-3" />
                    ) : isWrongPick ? (
                      <X className="h-3 w-3" />
                    ) : (
                      String.fromCharCode(65 + i)
                    )}
                  </span>
                  {c}
                </button>
              );
            })}
          </div>

          {revealed && (
            <div className="mt-5 rounded-xl border border-border bg-muted/40 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-primary">
                <Sparkles className="h-3 w-3" /> Explanation
              </div>
              <p className="mt-2 text-sm leading-relaxed">{q.explanation}</p>
              <button
                onClick={next}
                className="mt-4 inline-flex items-center gap-1 h-10 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
              >
                Next question <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-border bg-card p-10 text-center">
          <Trophy className="h-8 w-8 text-primary mx-auto" />
          <div className="mt-3 font-semibold">No questions in this category yet.</div>
        </div>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
        {label}
      </div>
      <div className={cn("mt-1 text-2xl font-semibold tracking-tight", accent)}>
        {value}
      </div>
    </div>
  );
}
