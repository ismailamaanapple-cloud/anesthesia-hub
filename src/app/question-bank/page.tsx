"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import {
  GraduationCap,
  Check,
  X,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  Trophy,
  Sparkles,
  Filter,
  Star,
  Search,
  BookOpen,
  Brain,
  CircleHelp,
  CircleCheck,
  CircleX,
} from "lucide-react";
import { categories, questions, type Question } from "@/lib/questions";
import { cn } from "@/lib/utils";

type Progress = Record<string, { correct: boolean; pickedAt: string }>;
type Bookmarks = Record<string, true>;

const STORAGE = "ah-qbank-v1";
const BOOKMARKS_KEY = "ah-qbank-bookmarks-v1";

const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"] as const;
const STATUSES = ["All", "Unattempted", "Correct", "Incorrect", "Bookmarked"] as const;
const MODES = ["Quiz", "Review"] as const;

function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function QuestionBankPage() {
  // ---------- State ----------
  const [mode, setMode] = useState<(typeof MODES)[number]>("Quiz");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [difficulty, setDifficulty] =
    useState<(typeof DIFFICULTIES)[number]>("All");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState<Progress>({});
  const [bookmarks, setBookmarks] = useState<Bookmarks>({});

  // Quiz mode internal
  const [deck, setDeck] = useState<Question[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Review mode pagination
  const [reviewPage, setReviewPage] = useState(0);
  const PAGE_SIZE = 10;

  const scrollAnchor = useRef<HTMLDivElement | null>(null);

  // ---------- Effects ----------
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setProgress(JSON.parse(raw));
      const bm = localStorage.getItem(BOOKMARKS_KEY);
      if (bm) setBookmarks(JSON.parse(bm));
    } catch {}
  }, []);

  // ---------- Filter ----------
  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return questions.filter((q) => {
      if (cat !== "All" && q.category !== cat) return false;
      if (difficulty !== "All" && q.difficulty !== difficulty) return false;
      if (status !== "All") {
        const p = progress[q.id];
        if (status === "Unattempted" && p) return false;
        if (status === "Correct" && (!p || !p.correct)) return false;
        if (status === "Incorrect" && (!p || p.correct)) return false;
        if (status === "Bookmarked" && !bookmarks[q.id]) return false;
      }
      if (needle) {
        const blob =
          q.stem.toLowerCase() +
          " " +
          q.choices.join(" ").toLowerCase() +
          " " +
          q.explanation.toLowerCase();
        if (!blob.includes(needle)) return false;
      }
      return true;
    });
  }, [cat, difficulty, status, search, progress, bookmarks]);

  // Reset quiz deck whenever filters change
  useEffect(() => {
    setDeck(shuffle(filtered));
    setIdx(0);
    setPicked(null);
    setRevealed(false);
    setReviewPage(0);
  }, [cat, difficulty, status, search]); // eslint-disable-line react-hooks/exhaustive-deps

  // Stats
  const stats = useMemo(() => {
    const allAttempted = Object.keys(progress).length;
    const allCorrect = Object.values(progress).filter((p) => p.correct).length;
    const filteredAttempted = filtered.filter((q) => progress[q.id]).length;
    const filteredCorrect = filtered.filter(
      (q) => progress[q.id]?.correct
    ).length;
    return {
      allAttempted,
      allCorrect,
      allPct: allAttempted
        ? Math.round((allCorrect / allAttempted) * 100)
        : 0,
      filteredAttempted,
      filteredCorrect,
      filteredPct: filteredAttempted
        ? Math.round((filteredCorrect / filteredAttempted) * 100)
        : 0,
      totalQuestions: questions.length,
      filteredTotal: filtered.length,
      bookmarkCount: Object.keys(bookmarks).length,
    };
  }, [progress, bookmarks, filtered]);

  // Category breakdown
  const catBreakdown = useMemo(() => {
    const map: Record<string, { total: number; attempted: number; correct: number }> = {};
    for (const q of questions) {
      const k = q.category;
      if (!map[k]) map[k] = { total: 0, attempted: 0, correct: 0 };
      map[k].total++;
      const p = progress[q.id];
      if (p) {
        map[k].attempted++;
        if (p.correct) map[k].correct++;
      }
    }
    return map;
  }, [progress]);

  // ---------- Actions ----------
  const saveResult = (qid: string, correct: boolean) => {
    setProgress((p) => {
      const next = { ...p, [qid]: { correct, pickedAt: new Date().toISOString() } };
      try {
        localStorage.setItem(STORAGE, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const toggleBookmark = (qid: string) => {
    setBookmarks((b) => {
      const next = { ...b };
      if (next[qid]) delete next[qid];
      else next[qid] = true;
      try {
        localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const onPick = (i: number) => {
    const q = deck[idx];
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
      setDeck(shuffle(deck));
      setIdx(0);
      setPicked(null);
      setRevealed(false);
    }
    scrollAnchor.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const prev = () => {
    if (idx === 0) return;
    setIdx(idx - 1);
    const q = deck[idx - 1];
    const p = progress[q?.id];
    setRevealed(!!p);
    setPicked(null);
  };

  const reset = () => {
    if (!confirm("Reset ALL progress? This cannot be undone.")) return;
    setProgress({});
    try {
      localStorage.removeItem(STORAGE);
    } catch {}
  };

  const clearFilters = () => {
    setCat("All");
    setDifficulty("All");
    setStatus("All");
    setSearch("");
  };

  // ---------- Pagination for review ----------
  const reviewPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const reviewSlice = filtered.slice(
    reviewPage * PAGE_SIZE,
    reviewPage * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12" ref={scrollAnchor}>
      {/* HEADER */}
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <GraduationCap className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            Question Bank
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            {questions.length} board-style MCQs with detailed explanations.
            Quiz yourself, review missed questions, or browse the entire
            bank. All progress saved locally on this device.
          </p>
        </div>
      </div>

      {/* OVERALL STATS */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Total" value={stats.totalQuestions} accent="text-foreground" />
        <Stat label="Attempted" value={stats.allAttempted} />
        <Stat label="Correct" value={stats.allCorrect} accent="text-success" />
        <Stat
          label="Accuracy"
          value={`${stats.allPct}%`}
          accent="text-primary"
        />
      </div>

      {/* CATEGORY BREAKDOWN */}
      <details className="mt-4 rounded-xl border border-border bg-card">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium hover:bg-muted/50 rounded-xl flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          Progress by category ({Object.keys(catBreakdown).length} categories)
        </summary>
        <div className="px-4 pb-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {Object.entries(catBreakdown).map(([k, v]) => (
            <div
              key={k}
              className="rounded-lg border border-border bg-background p-3 text-xs"
            >
              <div className="font-medium">{k}</div>
              <div className="mt-1 text-muted-foreground">
                {v.attempted}/{v.total} attempted
                {v.attempted > 0 && (
                  <>
                    {" "}· {Math.round((v.correct / v.attempted) * 100)}% correct
                  </>
                )}
              </div>
              <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{
                    width: `${(v.attempted / v.total) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </details>

      {/* MODE TOGGLE */}
      <div className="mt-6 flex items-center gap-2">
        <div className="inline-flex rounded-xl border border-border bg-card p-1">
          {MODES.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "px-4 h-9 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5",
                mode === m
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {m === "Quiz" ? <Brain className="h-3.5 w-3.5" /> : <BookOpen className="h-3.5 w-3.5" />}
              {m} mode
            </button>
          ))}
        </div>
        <button
          onClick={reset}
          className="ml-auto px-3 h-9 rounded-lg text-xs font-medium border border-border bg-card hover:bg-muted text-muted-foreground inline-flex items-center gap-1.5"
        >
          <RefreshCw className="h-3 w-3" /> Reset progress
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="mt-4 rounded-2xl border border-border bg-card p-4 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword in question or explanation…"
              className="w-full h-10 pl-9 pr-3 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary"
            />
          </div>
          {(cat !== "All" || difficulty !== "All" || status !== "All" || search) && (
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              <X className="h-3 w-3" /> Clear filters
            </button>
          )}
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5 flex items-center gap-1">
            <Filter className="h-3 w-3" /> Category
          </div>
          <div className="flex gap-1.5 overflow-x-auto -mx-4 px-4 pb-1 sm:flex-wrap sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible">
            {categories.map((c) => (
              <Pill
                key={c}
                label={c}
                active={cat === c}
                onClick={() => setCat(c)}
              />
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">
              Difficulty
            </div>
            <div className="flex gap-1.5">
              {DIFFICULTIES.map((d) => (
                <Pill
                  key={d}
                  label={d}
                  active={difficulty === d}
                  onClick={() => setDifficulty(d)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">
              Status
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {STATUSES.map((s) => (
                <Pill
                  key={s}
                  label={s}
                  active={status === s}
                  onClick={() => setStatus(s)}
                  badge={
                    s === "Bookmarked" && stats.bookmarkCount > 0
                      ? stats.bookmarkCount
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-muted-foreground flex items-center justify-between">
        <span>
          {stats.filteredTotal} question{stats.filteredTotal === 1 ? "" : "s"} match
          {stats.filteredAttempted > 0 && (
            <>
              {" "}· {stats.filteredAttempted} attempted ·{" "}
              {stats.filteredPct}% correct in this set
            </>
          )}
        </span>
      </div>

      {/* RENDER MODE */}
      {mode === "Quiz" ? (
        <QuizMode
          deck={deck}
          idx={idx}
          picked={picked}
          revealed={revealed}
          onPick={onPick}
          onNext={next}
          onPrev={prev}
          progress={progress}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
        />
      ) : (
        <ReviewMode
          slice={reviewSlice}
          page={reviewPage}
          pages={reviewPages}
          setPage={setReviewPage}
          progress={progress}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          allCount={filtered.length}
        />
      )}
    </div>
  );
}

// ---------- Quiz Mode ----------
function QuizMode({
  deck,
  idx,
  picked,
  revealed,
  onPick,
  onNext,
  onPrev,
  progress,
  bookmarks,
  onToggleBookmark,
}: {
  deck: Question[];
  idx: number;
  picked: number | null;
  revealed: boolean;
  onPick: (i: number) => void;
  onNext: () => void;
  onPrev: () => void;
  progress: Progress;
  bookmarks: Bookmarks;
  onToggleBookmark: (qid: string) => void;
}) {
  const q = deck[idx];

  if (!q) {
    return (
      <div className="mt-8 rounded-2xl border border-border bg-card p-10 text-center">
        <Trophy className="h-8 w-8 text-primary mx-auto" />
        <div className="mt-3 font-semibold">No questions match your filters.</div>
        <p className="mt-1 text-sm text-muted-foreground">
          Try clearing some filters or switching to Review mode.
        </p>
      </div>
    );
  }

  const priorAttempt = progress[q.id];

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 text-xs flex-wrap">
        <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 font-medium">
          {q.category}
        </span>
        <span className="text-muted-foreground">{q.difficulty}</span>
        {priorAttempt && (
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-medium",
              priorAttempt.correct
                ? "bg-success/15 text-success"
                : "bg-destructive/15 text-destructive"
            )}
          >
            Previously {priorAttempt.correct ? "correct" : "incorrect"}
          </span>
        )}
        <button
          onClick={() => onToggleBookmark(q.id)}
          className={cn(
            "ml-auto h-7 w-7 grid place-items-center rounded-md border transition-colors",
            bookmarks[q.id]
              ? "border-amber-500/40 bg-amber-500/10 text-amber-500"
              : "border-border bg-card text-muted-foreground hover:bg-muted"
          )}
          aria-label="Bookmark question"
        >
          <Star
            className={cn("h-3.5 w-3.5", bookmarks[q.id] && "fill-amber-500")}
          />
        </button>
        <span className="text-muted-foreground">
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
                isCorrect && "border-success/50 bg-success/10 text-foreground",
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
                  isWrongPick && "bg-destructive text-white border-destructive",
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
        </div>
      )}

      <div className="mt-5 flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={idx === 0}
          className="inline-flex items-center gap-1 h-10 px-4 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <button
          onClick={onNext}
          disabled={!revealed}
          className="inline-flex items-center gap-1 h-10 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 ml-auto disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {idx + 1 === deck.length ? "Reshuffle & restart" : "Next"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ---------- Review Mode ----------
function ReviewMode({
  slice,
  page,
  pages,
  setPage,
  progress,
  bookmarks,
  onToggleBookmark,
  allCount,
}: {
  slice: Question[];
  page: number;
  pages: number;
  setPage: (n: number) => void;
  progress: Progress;
  bookmarks: Bookmarks;
  onToggleBookmark: (qid: string) => void;
  allCount: number;
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  if (slice.length === 0) {
    return (
      <div className="mt-6 rounded-2xl border border-border bg-card p-10 text-center">
        <Trophy className="h-8 w-8 text-primary mx-auto" />
        <div className="mt-3 font-semibold">No questions match your filters.</div>
        <p className="mt-1 text-sm text-muted-foreground">
          Try clearing some filters or selecting a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {slice.map((q, j) => {
        const p = progress[q.id];
        const isOpen = !!expanded[q.id];
        const number = page * 10 + j + 1;
        return (
          <article
            key={q.id}
            className="rounded-2xl border border-border bg-card"
          >
            <header
              className="p-5 cursor-pointer hover:bg-muted/30 transition-colors rounded-2xl"
              onClick={() =>
                setExpanded((e) => ({ ...e, [q.id]: !e[q.id] }))
              }
            >
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="text-muted-foreground font-medium">
                  #{number}
                </span>
                <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">
                  {q.category}
                </span>
                <span className="text-muted-foreground">{q.difficulty}</span>
                <StatusBadge p={p} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(q.id);
                  }}
                  className={cn(
                    "ml-auto h-7 w-7 grid place-items-center rounded-md border transition-colors",
                    bookmarks[q.id]
                      ? "border-amber-500/40 bg-amber-500/10 text-amber-500"
                      : "border-border bg-card text-muted-foreground hover:bg-muted"
                  )}
                  aria-label="Bookmark question"
                >
                  <Star
                    className={cn(
                      "h-3.5 w-3.5",
                      bookmarks[q.id] && "fill-amber-500"
                    )}
                  />
                </button>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    isOpen && "rotate-90"
                  )}
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed">{q.stem}</p>
            </header>

            {isOpen && (
              <div className="px-5 pb-5 -mt-2 space-y-2">
                {q.choices.map((c, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-start gap-3 rounded-xl border px-4 py-3 text-sm",
                      i === q.answer
                        ? "border-success/50 bg-success/10"
                        : "border-border bg-background opacity-90"
                    )}
                  >
                    <span
                      className={cn(
                        "shrink-0 h-6 w-6 grid place-items-center rounded-full text-xs font-semibold border",
                        i === q.answer
                          ? "bg-success text-white border-success"
                          : "border-border text-muted-foreground"
                      )}
                    >
                      {i === q.answer ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </span>
                    {c}
                  </div>
                ))}
                <div className="mt-3 rounded-xl border border-border bg-muted/40 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-primary">
                    <Sparkles className="h-3 w-3" /> Explanation
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            )}
          </article>
        );
      })}

      {/* Pagination */}
      {pages > 1 && (
        <div className="mt-6 flex items-center justify-between gap-2 flex-wrap">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="inline-flex items-center gap-1 h-9 px-3 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </button>
          <div className="text-xs text-muted-foreground">
            Page {page + 1} of {pages} · {allCount} total
          </div>
          <button
            onClick={() => setPage(Math.min(pages - 1, page + 1))}
            disabled={page === pages - 1}
            className="inline-flex items-center gap-1 h-9 px-3 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- Small components ----------
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

function Pill({
  label,
  active,
  onClick,
  badge,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 h-8 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap inline-flex items-center gap-1.5",
        active
          ? "bg-primary/10 border-primary/40 text-primary"
          : "border-border bg-background hover:bg-muted text-muted-foreground"
      )}
    >
      {label}
      {badge !== undefined && (
        <span className="text-[10px] rounded-full bg-primary/20 text-primary px-1.5 py-0.5">
          {badge}
        </span>
      )}
    </button>
  );
}

function StatusBadge({ p }: { p?: { correct: boolean } }) {
  if (!p) {
    return (
      <span className="inline-flex items-center gap-1 text-muted-foreground text-[10px]">
        <CircleHelp className="h-3 w-3" /> Unattempted
      </span>
    );
  }
  if (p.correct) {
    return (
      <span className="inline-flex items-center gap-1 text-success text-[10px]">
        <CircleCheck className="h-3 w-3" /> Correct
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-destructive text-[10px]">
      <CircleX className="h-3 w-3" /> Incorrect
    </span>
  );
}
