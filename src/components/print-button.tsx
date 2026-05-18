"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label = "Print card" }: { label?: string }) {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      className="hidden sm:inline-flex items-center gap-1.5 text-sm px-3 h-9 rounded-lg border border-border bg-card hover:bg-muted"
    >
      <Printer className="h-4 w-4" /> {label}
    </button>
  );
}
