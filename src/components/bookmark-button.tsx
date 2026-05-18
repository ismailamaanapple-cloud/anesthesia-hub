"use client";

import { Star } from "lucide-react";
import { useBookmarks, type BookmarkKind } from "@/lib/bookmarks";
import { cn } from "@/lib/utils";

export function BookmarkButton({
  kind,
  slug,
  title,
  subtitle,
  href,
  size = "md",
}: {
  kind: BookmarkKind;
  slug: string;
  title: string;
  subtitle?: string;
  href: string;
  size?: "sm" | "md";
}) {
  const { isBookmarked, toggle } = useBookmarks();
  const on = isBookmarked(kind, slug);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle({ kind, slug, title, subtitle, href });
      }}
      aria-pressed={on}
      aria-label={on ? "Remove bookmark" : "Bookmark this"}
      title={on ? "Remove bookmark" : "Bookmark this"}
      className={cn(
        "inline-flex items-center justify-center rounded-lg border transition-colors",
        size === "sm" ? "h-8 w-8" : "h-9 px-3 gap-1.5 text-xs font-medium",
        on
          ? "border-amber-500/40 bg-amber-500/10 text-amber-500"
          : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Star className={cn(size === "sm" ? "h-4 w-4" : "h-4 w-4", on && "fill-amber-500")} />
      {size === "md" && <span>{on ? "Bookmarked" : "Bookmark"}</span>}
    </button>
  );
}
