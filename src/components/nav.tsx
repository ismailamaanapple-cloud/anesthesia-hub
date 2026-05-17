"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Activity,
  Calculator,
  Pill,
  BookOpen,
  Brain,
  GraduationCap,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

const links = [
  { href: "/drugs", label: "Drugs", icon: Pill },
  { href: "/calculators", label: "Calculators", icon: Calculator },
  { href: "/subspecialties", label: "Subspecialties", icon: BookOpen },
  { href: "/question-bank", label: "Question Bank", icon: GraduationCap },
  { href: "/ai-assistant", label: "AI Assistant", icon: Brain },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 glass border-b border-border/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
              <Activity className="h-5 w-5" strokeWidth={2.5} />
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </span>
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-tight">
                Anesthesia<span className="text-gradient">Hub</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Clinical companion
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = path === l.href || path.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  )}
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <Link
              href="/ai-assistant"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 h-9 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Brain className="h-4 w-4" />
              Ask AI
            </Link>
            <button
              className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted"
              >
                <l.icon className="h-4 w-4 text-primary" />
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
