"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Mic,
  Search,
  ArrowRight,
  Wind,
  Flame,
  Zap,
  Siren,
  Droplet,
  Droplets,
  HeartPulse,
  Activity,
  GraduationCap,
} from "lucide-react";
import { oralBoardCategories } from "@/lib/oral-boards";
import { oralCases } from "@/lib/oral-boards-data";
import { countPhrases } from "@/lib/oral-match";
import { useOralProgress } from "@/lib/oral-progress";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Flame,
  Zap,
  Siren,
  Droplet,
  Droplets,
  HeartPulse,
  Activity,
};

export default function OralBoardsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof oralBoardCategories)[number]>("All");
  const { store } = useOralProgress();

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return oralCases.filter((c) => {
      if (cat !== "All" && c.category !== cat) return false;
      if (!needle) return true;
      return (
        c.title.toLowerCase().includes(needle) ||
        c.tagline.toLowerCase().includes(needle) ||
        c.stem.toLowerCase().includes(needle)
      );
    });
  }, [q, cat]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-500/20">
          <Mic className="h-6 w-6" />
        </span>
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-primary font-semibold mb-1">
            <GraduationCap className="h-3.5 w-3.5" /> Applied Exam / SOE
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Oral Boards <span className="text-gradient">Trainer</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            Practice the highest-yield oral exam cases out loud. Answer each case
            by voice; we transcribe it and check whether you hit the key phrases
            and safety steps a strong candidate is expected to say — then track
            your best score.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-warning bg-warning/10 border border-warning/30 rounded-lg px-3 py-1.5 inline-flex">
            <span>
              Study aid only — not affiliated with the ABA. Always verify
              management against current guidelines and your attendings.
            </span>
          </div>
        </div>
      </div>

      {/* Search + filters */}
      <div className="mt-8 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search cases — e.g. MH, LAST, anaphylaxis, aortic stenosis…"
            className="w-full h-11 pl-10 pr-3 rounded-xl border border-border bg-card text-sm focus:border-primary outline-none transition-colors"
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto -mx-4 px-4 pb-1 lg:flex-wrap lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible">
          {oralBoardCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "px-3 h-9 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0",
                cat === c
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "border-border bg-card hover:bg-muted text-muted-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-xs text-muted-foreground">
        {filtered.length} of {oralCases.length} cases
      </div>

      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((c) => {
          const Icon = iconMap[c.icon] ?? Mic;
          const best = store[c.slug]?.bestPct;
          return (
            <Link
              key={c.slug}
              href={`/oral-boards/${c.slug}`}
              className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-5"
            >
              <div
                className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-15 blur-2xl group-hover:opacity-25 transition-opacity`}
              />
              <div className="flex items-start gap-3">
                <span
                  className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-md shrink-0`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-2">
                    <span>Case {c.number}</span>
                    <span className="opacity-40">·</span>
                    <span className="truncate">{c.category}</span>
                  </div>
                  <h3 className="mt-1 font-semibold tracking-tight leading-tight">
                    {c.title}
                  </h3>
                </div>
                {best != null && (
                  <span
                    className={cn(
                      "shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full border",
                      best >= 80
                        ? "text-success border-success/40 bg-success/10"
                        : best >= 50
                        ? "text-warning border-warning/40 bg-warning/10"
                        : "text-destructive border-destructive/40 bg-destructive/10"
                    )}
                  >
                    {best}%
                  </span>
                )}
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {c.tagline}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Mic className="h-3 w-3" /> {countPhrases(c)} key phrases
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Practice <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 text-muted-foreground text-sm">
            No cases match your search.
          </div>
        )}
      </div>
    </div>
  );
}
