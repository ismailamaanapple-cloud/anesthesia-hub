"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReferenceList } from "@/components/reference-list";
import { BookmarkButton } from "@/components/bookmark-button";

export function CalculatorShell({
  title,
  description,
  formula,
  references,
  children,
}: {
  title: string;
  description: string;
  formula?: string;
  references?: string[];
  children: React.ReactNode;
}) {
  const path = usePathname();
  const slug = path.split("/").pop() || "";
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/calculators"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Calculators
      </Link>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          {formula && (
            <div className="mt-3 inline-block rounded-lg border border-border bg-muted/40 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              {formula}
            </div>
          )}
        </div>
        {slug && (
          <BookmarkButton
            kind="calculator"
            slug={slug}
            title={title}
            subtitle={description}
            href={`/calculators/${slug}`}
          />
        )}
      </div>
      <div className="mt-6">{children}</div>
      {references && references.length > 0 && (
        <ReferenceList ids={references} />
      )}
    </div>
  );
}

export function Field({
  label,
  unit,
  value,
  onChange,
  type = "number",
  step,
  placeholder,
}: {
  label: string;
  unit?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  step?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <div className="mt-1.5 flex items-center rounded-xl border border-border bg-card focus-within:border-primary transition-colors">
        <input
          type={type}
          step={step}
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent h-11 px-3 outline-none text-sm"
        />
        {unit && (
          <span className="px-3 text-xs text-muted-foreground border-l border-border h-11 grid place-items-center">
            {unit}
          </span>
        )}
      </div>
    </label>
  );
}

export function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full h-11 px-3 rounded-xl border border-border bg-card text-sm outline-none focus:border-primary"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function Result({
  label,
  value,
  unit,
  note,
}: {
  label: string;
  value: string;
  unit?: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
      <div className="text-xs uppercase tracking-wider text-primary font-medium">
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight">{value}</span>
        {unit && (
          <span className="text-sm text-muted-foreground">{unit}</span>
        )}
      </div>
      {note && (
        <div className="mt-2 text-xs text-muted-foreground">{note}</div>
      )}
    </div>
  );
}
