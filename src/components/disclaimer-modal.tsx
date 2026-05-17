"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, X } from "lucide-react";

const KEY = "ah-disclaimer-ack-v1";

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const ack = localStorage.getItem(KEY);
      if (!ack) setOpen(true);
    } catch {}
  }, []);

  if (!open) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, new Date().toISOString());
    } catch {}
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-background/70 backdrop-blur-sm p-4"
    >
      <div className="relative max-w-lg w-full rounded-2xl border border-border bg-card shadow-2xl shadow-black/30">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 h-8 w-8 grid place-items-center rounded-lg text-muted-foreground hover:bg-muted"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="p-7">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 grid place-items-center rounded-xl bg-warning/15 text-warning">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">
              Educational use disclaimer
            </h2>
          </div>
          <div className="mt-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">AnesthesiaHub</strong> is a
              learning and quick-reference resource for medical trainees and
              clinicians. It is <strong>not</strong> a substitute for
              professional clinical judgment, institutional protocols, or
              primary literature.
            </p>
            <p>
              Doses, formulas, and AI-generated suggestions may contain errors.
              Always cross-check critical information with authoritative
              sources (package inserts, ASA / SOAP / SPA guidelines, your
              institution&apos;s pharmacy) before applying to a real patient.
            </p>
            <p>
              By continuing you acknowledge this tool will not be used as the
              sole basis for patient care decisions.
            </p>
          </div>
          <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
            <a
              href="https://www.asahq.org/standards-and-practice-parameters"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground self-center sm:self-auto px-4 py-2"
            >
              ASA guidelines →
            </a>
            <button
              onClick={accept}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90"
            >
              I understand — continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
