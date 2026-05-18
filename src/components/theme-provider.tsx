"use client";

import { useEffect } from "react";

// Theme is locked to dark mode for v1. The component just ensures the
// .dark class is applied on the html element and persists across navigations.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    try {
      localStorage.setItem("ah-theme", "dark");
    } catch {}
  }, []);

  return <>{children}</>;
}
