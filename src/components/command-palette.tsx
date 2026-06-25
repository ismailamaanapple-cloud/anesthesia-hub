"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Pill,
  Calculator,
  BookMarked,
  BookOpen,
  Siren,
  GraduationCap,
  Brain,
  CornerDownLeft,
  X,
  Star,
  Library,
  Stethoscope,
} from "lucide-react";
import { drugs } from "@/lib/drugs";
import { calculators } from "@/lib/calculators";
import { tutorials } from "@/lib/tutorials";
import { playbookGuides } from "@/lib/playbook";
import { subspecialties } from "@/lib/subspecialties";
import { emergencies } from "@/lib/emergencies";
import { resourceGroups } from "@/lib/resources";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  href: string;
  title: string;
  subtitle?: string;
  group: string;
  icon: React.ComponentType<{ className?: string }>;
  score?: number;
};

function buildIndex(): Item[] {
  const out: Item[] = [];
  for (const d of drugs) {
    out.push({
      id: `drug-${d.slug}`,
      href: `/drugs/${d.slug}`,
      title: d.name,
      subtitle: `${d.category}${d.brands ? " · " + d.brands.join(", ") : ""}`,
      group: "Drugs",
      icon: Pill,
    });
  }
  for (const c of calculators) {
    out.push({
      id: `calc-${c.slug}`,
      href: `/calculators/${c.slug}`,
      title: c.name,
      subtitle: c.description,
      group: "Calculators",
      icon: Calculator,
    });
  }
  for (const t of tutorials) {
    out.push({
      id: `tut-${t.slug}`,
      href: `/tutorials/${t.slug}`,
      title: t.title,
      subtitle: `Ch ${t.number} · ${t.category}`,
      group: "Tutorials",
      icon: BookMarked,
    });
  }
  for (const g of playbookGuides) {
    out.push({
      id: `pb-${g.slug}`,
      href: `/playbook/${g.slug}`,
      title: g.title,
      subtitle: `Playbook · Step ${g.number} · ${g.category}`,
      group: "OR Playbook",
      icon: Stethoscope,
    });
  }
  for (const s of subspecialties) {
    out.push({
      id: `sub-${s.slug}`,
      href: `/subspecialties/${s.slug}`,
      title: s.name,
      subtitle: s.tagline,
      group: "Subspecialties",
      icon: BookOpen,
    });
  }
  for (const g of resourceGroups) {
    out.push({
      id: `res-${g.slug}`,
      href: `/resources#${g.slug}`,
      title: g.title,
      subtitle: "Resources · " + g.description,
      group: "Resources",
      icon: Library,
    });
  }
  for (const e of emergencies) {
    out.push({
      id: `emg-${e.slug}`,
      href: `/emergency/${e.slug}`,
      title: e.name,
      subtitle: "Emergency · " + e.tagline,
      group: "Emergency",
      icon: Siren,
    });
  }
  // Static navigation entries
  out.push(
    {
      id: "nav-tutorials",
      href: "/tutorials",
      title: "All Tutorials",
      subtitle: "Browse 26 chapters",
      group: "Navigate",
      icon: BookMarked,
    },
    {
      id: "nav-playbook",
      href: "/playbook",
      title: "OR Playbook",
      subtitle: "Hands-on CA-1 rotation survival guide",
      group: "Navigate",
      icon: Stethoscope,
    },
    {
      id: "nav-drugs",
      href: "/drugs",
      title: "All Drugs",
      subtitle: "Browse drug database",
      group: "Navigate",
      icon: Pill,
    },
    {
      id: "nav-calculators",
      href: "/calculators",
      title: "All Calculators",
      subtitle: "Browse calculators",
      group: "Navigate",
      icon: Calculator,
    },
    {
      id: "nav-subs",
      href: "/subspecialties",
      title: "All Subspecialties",
      subtitle: "Browse subspecialty primers",
      group: "Navigate",
      icon: BookOpen,
    },
    {
      id: "nav-emergency",
      href: "/emergency",
      title: "Emergency Manual",
      subtitle: "Crisis cards",
      group: "Navigate",
      icon: Siren,
    },
    {
      id: "nav-qbank",
      href: "/question-bank",
      title: "Question Bank",
      subtitle: "MCQ practice",
      group: "Navigate",
      icon: GraduationCap,
    },
    {
      id: "nav-resources",
      href: "/resources",
      title: "Resources",
      subtitle: "Textbooks, board prep & podcasts",
      group: "Navigate",
      icon: Library,
    },
    {
      id: "nav-ai",
      href: "/ai-assistant",
      title: "AI Assistant",
      subtitle: "Brainstorm anesthetic plans",
      group: "Navigate",
      icon: Brain,
    },
    {
      id: "nav-bookmarks",
      href: "/bookmarks",
      title: "My Bookmarks",
      subtitle: "Pinned items on this device",
      group: "Navigate",
      icon: Star,
    }
  );
  return out;
}

function scoreItem(item: Item, q: string): number {
  if (!q) return 1;
  const needle = q.toLowerCase();
  const title = item.title.toLowerCase();
  const sub = (item.subtitle || "").toLowerCase();
  if (title === needle) return 1000;
  if (title.startsWith(needle)) return 800;
  if (title.includes(needle)) return 600;
  // word boundary in subtitle
  if (new RegExp(`\\b${needle.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}`).test(sub))
    return 400;
  if (sub.includes(needle)) return 200;
  return 0;
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const index = useMemo(buildIndex, []);
  const results = useMemo(() => {
    if (!q.trim()) {
      // Show a curated default: navigation + emergencies + top tutorials
      return index
        .filter((i) =>
          ["Navigate", "Emergency"].includes(i.group)
        )
        .slice(0, 12);
    }
    return index
      .map((i) => ({ ...i, score: scoreItem(i, q) }))
      .filter((i) => (i.score ?? 0) > 0)
      .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
      .slice(0, 30);
  }, [q, index]);

  // Group results
  const grouped = useMemo(() => {
    const m: Record<string, Item[]> = {};
    for (const it of results) {
      (m[it.group] ||= []).push(it);
    }
    return m;
  }, [results]);

  const flat = useMemo(() => results, [results]);

  // Keyboard shortcuts
  useEffect(() => {
    function onKey(ev: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modKey = isMac ? ev.metaKey : ev.ctrlKey;
      if (modKey && ev.key.toLowerCase() === "k") {
        ev.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (ev.key === "Escape") {
        ev.preventDefault();
        setOpen(false);
      } else if (ev.key === "ArrowDown") {
        ev.preventDefault();
        setActive((a) => Math.min(flat.length - 1, a + 1));
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        setActive((a) => Math.max(0, a - 1));
      } else if (ev.key === "Enter") {
        ev.preventDefault();
        const it = flat[active];
        if (it) {
          setOpen(false);
          router.push(it.href);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, flat, active, router]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      // focus input on next tick
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  // Scroll active into view
  useEffect(() => {
    const node = listRef.current?.querySelector<HTMLElement>(
      `[data-idx="${active}"]`
    );
    node?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-start pt-[10vh] bg-background/70 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="w-full max-w-xl rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-2 px-4 border-b border-border">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search drugs, calculators, tutorials, emergencies…"
            className="flex-1 bg-transparent h-12 outline-none text-sm"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto py-2"
        >
          {Object.entries(grouped).length === 0 && (
            <div className="px-4 py-10 text-center text-sm text-muted-foreground">
              No matches.
            </div>
          )}
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group} className="mb-2">
              <div className="px-4 py-1.5 text-[10px] uppercase tracking-wider font-medium text-muted-foreground">
                {group}
              </div>
              <ul>
                {items.map((it) => {
                  const idx = flat.indexOf(it);
                  const Icon = it.icon;
                  return (
                    <li key={it.id}>
                      <button
                        data-idx={idx}
                        onMouseEnter={() => setActive(idx)}
                        onClick={() => {
                          setOpen(false);
                          router.push(it.href);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-2.5 flex items-start gap-3 transition-colors",
                          active === idx
                            ? "bg-primary/10"
                            : "hover:bg-muted/60"
                        )}
                      >
                        <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">
                            {it.title}
                          </div>
                          {it.subtitle && (
                            <div className="text-[11px] text-muted-foreground truncate">
                              {it.subtitle}
                            </div>
                          )}
                        </div>
                        {active === idx && (
                          <CornerDownLeft className="h-3.5 w-3.5 text-primary mt-1 shrink-0" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-2 border-t border-border text-[11px] text-muted-foreground bg-muted/30">
          <div className="flex items-center gap-3">
            <span><kbd className="kbd">↑</kbd> <kbd className="kbd">↓</kbd> navigate</span>
            <span><kbd className="kbd">↵</kbd> select</span>
            <span><kbd className="kbd">esc</kbd> close</span>
          </div>
          <span>{flat.length} result{flat.length === 1 ? "" : "s"}</span>
        </div>
      </div>
      <style jsx>{`
        :global(.kbd) {
          display: inline-block;
          padding: 1px 5px;
          border-radius: 4px;
          border: 1px solid rgb(var(--border));
          background: rgb(var(--background));
          font-size: 10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          margin: 0 1px;
        }
      `}</style>
    </div>
  );
}
