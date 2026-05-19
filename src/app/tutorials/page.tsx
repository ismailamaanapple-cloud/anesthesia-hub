"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BookMarked,
  Search,
  Clock,
  ArrowRight,
  Activity,
  Wind,
  Brain,
  Syringe,
  Pill,
  HeartPulse,
  Zap,
  Droplet,
  Droplets,
  AlertTriangle,
  AlertOctagon,
  Crosshair,
  Flame,
  ClipboardCheck,
  Settings2,
  Shield,
  MessageCircleQuestion,
  GraduationCap,
  Layers,
  Snowflake,
  ArrowUpFromLine,
  Sparkles,
  Siren,
  FlaskConical,
} from "lucide-react";
import { tutorials, tutorialCategories } from "@/lib/tutorials";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Wind,
  Brain,
  Syringe,
  Pill,
  HeartPulse,
  Zap,
  Droplet,
  Droplets,
  AlertTriangle,
  AlertOctagon,
  Crosshair,
  Flame,
  ClipboardCheck,
  Settings2,
  Shield,
  MessageCircleQuestion,
  GraduationCap,
  Layers,
  Snowflake,
  ArrowUpFromLine,
  Sparkles,
  Siren,
  FlaskConical,
};

export default function TutorialsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof tutorialCategories)[number]>("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return tutorials.filter((t) => {
      if (cat !== "All" && t.category !== cat) return false;
      if (!needle) return true;
      return (
        t.title.toLowerCase().includes(needle) ||
        t.tagline.toLowerCase().includes(needle) ||
        t.keyPoints.some((k) => k.toLowerCase().includes(needle))
      );
    });
  }, [q, cat]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <BookMarked className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            CA-1 Tutorial Library
          </h1>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            A structured 26-chapter curriculum adapted from the Stanford
            CA-1 Tutorial Textbook (15th ed., 2021) — the essentials every
            new anesthesia resident needs in their first months.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-warning bg-warning/10 border border-warning/30 rounded-lg px-3 py-1.5 inline-flex">
            <span>
              Educational adaptation. Always verify with primary sources and
              institutional protocols.
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
            placeholder="Search chapters by title, tagline, or key point…"
            className="w-full h-11 pl-10 pr-3 rounded-xl border border-border bg-card text-sm focus:border-primary outline-none transition-colors"
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto -mx-4 px-4 pb-1 lg:flex-wrap lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible">
          {tutorialCategories.map((c) => (
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
        {filtered.length} of {tutorials.length} chapters
      </div>

      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t) => {
          const Icon = iconMap[t.icon] ?? BookMarked;
          return (
            <Link
              key={t.slug}
              href={`/tutorials/${t.slug}`}
              className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-5"
            >
              <div
                className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${t.color} opacity-15 blur-2xl group-hover:opacity-25 transition-opacity`}
              />
              <div className="flex items-start gap-3">
                <span
                  className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-white shadow-md shrink-0`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-2">
                    <span>Ch. {t.number}</span>
                    <span className="opacity-40">·</span>
                    <span className="truncate">{t.category}</span>
                  </div>
                  <h3 className="mt-1 font-semibold tracking-tight leading-tight">
                    {t.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {t.tagline}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock className="h-3 w-3" /> {t.readMinutes} min read
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Open <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 text-muted-foreground text-sm">
            No chapters match your search.
          </div>
        )}
      </div>
    </div>
  );
}
