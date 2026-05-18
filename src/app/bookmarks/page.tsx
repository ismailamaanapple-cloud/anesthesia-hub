"use client";

import Link from "next/link";
import {
  Star,
  Pill,
  Calculator,
  BookMarked,
  BookOpen,
  Siren,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { useBookmarks, type BookmarkKind } from "@/lib/bookmarks";
import { cn } from "@/lib/utils";

const iconForKind: Record<BookmarkKind, React.ComponentType<{ className?: string }>> = {
  drug: Pill,
  calculator: Calculator,
  tutorial: BookMarked,
  subspecialty: BookOpen,
  emergency: Siren,
};

const labelForKind: Record<BookmarkKind, string> = {
  drug: "Drug",
  calculator: "Calculator",
  tutorial: "Tutorial",
  subspecialty: "Subspecialty",
  emergency: "Emergency",
};

export default function BookmarksPage() {
  const { list, remove, clear } = useBookmarks();

  const grouped = list.reduce<Record<string, typeof list>>((acc, b) => {
    (acc[b.kind] ||= []).push(b);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30">
          <Star className="h-6 w-6 fill-white" />
        </span>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight">My Bookmarks</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Things you&apos;ve starred. Stored locally on this device — no
            account needed.
          </p>
        </div>
        {list.length > 0 && (
          <button
            onClick={() => {
              if (confirm("Clear all bookmarks?")) clear();
            }}
            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border bg-card text-xs text-muted-foreground hover:bg-muted"
          >
            <Trash2 className="h-3.5 w-3.5" /> Clear all
          </button>
        )}
      </div>

      {list.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <Star className="h-8 w-8 text-muted-foreground mx-auto" />
          <h3 className="mt-3 font-semibold">No bookmarks yet</h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-md mx-auto">
            Look for the star icon on any drug, calculator, tutorial,
            subspecialty, or emergency card to pin it here for quick access.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          {Object.entries(grouped).map(([kind, items]) => {
            const Icon = iconForKind[kind as BookmarkKind];
            return (
              <div key={kind}>
                <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.18em] font-medium text-muted-foreground">
                  <Icon className="h-3.5 w-3.5" />
                  {labelForKind[kind as BookmarkKind]} · {items.length}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {items.map((b) => (
                    <div
                      key={`${b.kind}-${b.slug}`}
                      className={cn(
                        "card-lift rounded-2xl border border-border bg-card p-4 flex items-start gap-3 group"
                      )}
                    >
                      <Link
                        href={b.href}
                        className="flex-1 min-w-0 flex items-start gap-3"
                      >
                        <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold truncate">
                            {b.title}
                          </div>
                          {b.subtitle && (
                            <div className="text-[11px] text-muted-foreground truncate">
                              {b.subtitle}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                      </Link>
                      <button
                        onClick={() => remove(b.kind, b.slug)}
                        aria-label="Remove bookmark"
                        className="h-7 w-7 grid place-items-center rounded-md text-muted-foreground hover:bg-muted shrink-0"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
