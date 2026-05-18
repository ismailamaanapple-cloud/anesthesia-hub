"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Calculator,
  Pill,
  BookOpen,
  Brain,
  GraduationCap,
  BookMarked,
  Siren,
  Menu,
  X,
  Search,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/tutorials", label: "Tutorials", icon: BookMarked },
  { href: "/drugs", label: "Drugs", icon: Pill },
  { href: "/calculators", label: "Calcs", icon: Calculator },
  { href: "/emergency", label: "Emergency", icon: Siren },
  { href: "/subspecialties", label: "Subs", icon: BookOpen },
  { href: "/question-bank", label: "Q-Bank", icon: GraduationCap },
  { href: "/ai-assistant", label: "AI", icon: Brain },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  // Auto-hide nav on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 8);
      // Only hide after a real scroll past the header height, and only when scrolling down
      if (y < 100) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
        // close mobile drawer if open
        setOpen(false);
      } else if (delta < -4) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [path]);

  const triggerSearch = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true,
        bubbles: true,
      })
    );
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 will-change-transform",
        scrolled ? "glass border-b border-border/70 shadow-lg shadow-black/10" : "border-b border-transparent",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14" : "h-16"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 group min-w-0">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
              <Activity className="h-5 w-5" strokeWidth={2.5} />
              <span className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </span>
            <div className="leading-tight min-w-0">
              <div className="text-base font-semibold tracking-tight truncate">
                Anesthesia<span className="text-gradient">Hub</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden sm:block">
                Clinical companion
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => {
              const active = path === l.href || path.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-2.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5",
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

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search trigger — desktop with kbd, mobile icon-only */}
            <button
              onClick={triggerSearch}
              aria-label="Search"
              title="Search (⌘K)"
              className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-lg border border-border bg-muted/40 hover:bg-muted text-xs text-muted-foreground transition-colors"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search</span>
              <kbd className="text-[10px] font-mono px-1 py-0.5 rounded border border-border bg-background">
                ⌘K
              </kbd>
            </button>
            <button
              onClick={triggerSearch}
              aria-label="Search"
              className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            <Link
              href="/bookmarks"
              aria-label="Bookmarks"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Star className="h-4 w-4" />
            </Link>

            <Link
              href="/ai-assistant"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 h-9 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Brain className="h-4 w-4" />
              Ask AI
            </Link>
            <button
              className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            open ? "max-h-[400px] pb-4" : "max-h-0"
          )}
        >
          <div className="grid gap-1">
            {links.map((l) => {
              const active = path === l.href || path.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <l.icon className={cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground")} />
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/bookmarks"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted"
            >
              <Star className="h-4 w-4 text-muted-foreground" />
              Bookmarks
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
