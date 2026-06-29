"use client";

import { useCallback, useEffect, useState } from "react";

// Local, device-only tracking of oral-board practice attempts.
// Mirrors the bookmarks store: no account, just localStorage.

export type OralAttempt = {
  slug: string;
  pct: number;
  hit: number;
  total: number;
  criticalHit: number;
  criticalTotal: number;
  at: string; // ISO
};

export type OralRecord = {
  bestPct: number;
  lastPct: number;
  attempts: number;
  lastAt: string;
};

type Store = Record<string, OralRecord>;

const KEY = "ah-oral-progress-v1";

function readAll(): Store {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Store) : {};
  } catch {
    return {};
  }
}

function writeAll(s: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
    window.dispatchEvent(new CustomEvent("ah-oral-progress-changed"));
  } catch {}
}

export function useOralProgress() {
  const [store, setStore] = useState<Store>({});

  useEffect(() => {
    setStore(readAll());
    const handler = () => setStore(readAll());
    window.addEventListener("ah-oral-progress-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("ah-oral-progress-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const record = useCallback((a: OralAttempt) => {
    const all = readAll();
    const prev = all[a.slug];
    all[a.slug] = {
      bestPct: Math.max(prev?.bestPct ?? 0, a.pct),
      lastPct: a.pct,
      attempts: (prev?.attempts ?? 0) + 1,
      lastAt: a.at,
    };
    writeAll(all);
    setStore(all);
  }, []);

  const get = useCallback(
    (slug: string): OralRecord | undefined => store[slug],
    [store]
  );

  const clearAll = useCallback(() => {
    writeAll({});
    setStore({});
  }, []);

  return { store, get, record, clearAll };
}
