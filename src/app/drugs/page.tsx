"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Pill, Search, ArrowRight } from "lucide-react";
import { drugs, drugCategories, type DrugCategory } from "@/lib/drugs";

const categoryColors: Record<DrugCategory, string> = {
  Induction: "from-violet-500 to-fuchsia-500",
  "Neuromuscular Blocker": "from-rose-500 to-orange-500",
  Opioid: "from-amber-500 to-yellow-500",
  "Vasopressor / Inotrope": "from-red-500 to-pink-500",
  "Local Anesthetic": "from-emerald-500 to-teal-500",
  "Reversal Agent": "from-blue-500 to-cyan-500",
  Antiemetic: "from-lime-500 to-green-500",
  "Volatile Anesthetic": "from-sky-500 to-indigo-500",
  Benzodiazepine: "from-indigo-500 to-purple-500",
};

export default function DrugsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<DrugCategory | "All">("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return drugs.filter((d) => {
      if (cat !== "All" && d.category !== cat) return false;
      if (!needle) return true;
      return (
        d.name.toLowerCase().includes(needle) ||
        (d.brands ?? []).some((b) => b.toLowerCase().includes(needle)) ||
        d.class.toLowerCase().includes(needle)
      );
    });
  }, [q, cat]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        icon={<Pill className="h-6 w-6" />}
        title="Drug Database"
        subtitle="Anesthetic agents, paralytics, opioids, pressors, locals, reversals, and antiemetics — with doses, kinetics, contraindications, and pearls."
      />

      <div className="mt-8 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, brand, or class…"
            className="w-full h-11 pl-10 pr-3 rounded-xl border border-border bg-card text-sm focus:border-primary outline-none transition-colors"
          />
        </div>
        {/* Horizontally-scrollable filter pills on mobile, wrap on desktop */}
        <div className="flex gap-1.5 overflow-x-auto -mx-4 px-4 pb-1 lg:flex-wrap lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible">
          {(["All", ...drugCategories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 h-9 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                cat === c
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "border-border bg-card hover:bg-muted text-muted-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 text-xs text-muted-foreground">
        {filtered.length} of {drugs.length} drugs
      </div>

      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((d) => (
          <Link
            href={`/drugs/${d.slug}`}
            key={d.slug}
            className="card-lift rounded-2xl border border-border bg-card p-5 relative overflow-hidden group"
          >
            <div
              className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${
                categoryColors[d.category]
              } opacity-15 blur-2xl group-hover:opacity-25 transition-opacity pointer-events-none`}
            />
            <div className="relative flex items-center justify-between gap-2">
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-white px-2 py-0.5 rounded-full bg-gradient-to-r ${categoryColors[d.category]} shadow-sm max-w-[80%] truncate`}
              >
                {d.category}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {d.name}
            </h3>
            {d.brands && (
              <div className="text-xs text-muted-foreground">
                {d.brands.join(", ")}
              </div>
            )}
            <div className="mt-3 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {d.mechanism}
            </div>
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
              <div>
                <div className="text-foreground/60">Onset</div>
                <div className="font-medium text-foreground/85">{d.onset}</div>
              </div>
              <div className="text-right">
                <div className="text-foreground/60">Duration</div>
                <div className="font-medium text-foreground/85">{d.duration}</div>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-16 text-muted-foreground text-sm">
            No drugs match your search.
          </div>
        )}
      </div>
    </div>
  );
}

function PageHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
        {icon}
      </span>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
}
