"use client";

import { useEffect, useState, useCallback } from "react";

export type BookmarkKind = "drug" | "tutorial" | "calculator" | "subspecialty" | "emergency";

export type Bookmark = {
  kind: BookmarkKind;
  slug: string;
  title: string;
  subtitle?: string;
  href: string;
  addedAt: string; // ISO
};

const KEY = "ah-bookmarks-v1";

function readAll(): Bookmark[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Bookmark[];
  } catch {
    return [];
  }
}

function writeAll(list: Bookmark[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent("ah-bookmarks-changed"));
  } catch {}
}

export function useBookmarks() {
  const [list, setList] = useState<Bookmark[]>([]);

  useEffect(() => {
    setList(readAll());
    const handler = () => setList(readAll());
    window.addEventListener("ah-bookmarks-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("ah-bookmarks-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const isBookmarked = useCallback(
    (kind: BookmarkKind, slug: string) =>
      list.some((b) => b.kind === kind && b.slug === slug),
    [list]
  );

  const toggle = useCallback(
    (b: Omit<Bookmark, "addedAt">) => {
      const all = readAll();
      const existing = all.findIndex(
        (x) => x.kind === b.kind && x.slug === b.slug
      );
      let next: Bookmark[];
      if (existing >= 0) {
        next = all.filter((_, i) => i !== existing);
      } else {
        next = [{ ...b, addedAt: new Date().toISOString() }, ...all];
      }
      writeAll(next);
      setList(next);
    },
    []
  );

  const remove = useCallback((kind: BookmarkKind, slug: string) => {
    const all = readAll().filter(
      (b) => !(b.kind === kind && b.slug === slug)
    );
    writeAll(all);
    setList(all);
  }, []);

  const clear = useCallback(() => {
    writeAll([]);
    setList([]);
  }, []);

  return { list, isBookmarked, toggle, remove, clear };
}
