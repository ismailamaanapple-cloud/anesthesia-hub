"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldAlert, X, ExternalLink, CheckCircle2 } from "lucide-react";
import { LEGAL_VERSION } from "@/lib/legal";

const KEY = "ah-disclaimer-ack-v2";

type Acknowledgement = {
  acceptedAt: string;
  version: string;
  documents: ("disclaimer" | "terms" | "privacy")[];
};

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) {
        setOpen(true);
        return;
      }
      const parsed = JSON.parse(raw) as Partial<Acknowledgement>;
      // Re-show if version bumped
      if (parsed.version !== LEGAL_VERSION) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  const accept = () => {
    const ack: Acknowledgement = {
      acceptedAt: new Date().toISOString(),
      version: LEGAL_VERSION,
      documents: ["disclaimer", "terms", "privacy"],
    };
    try {
      localStorage.setItem(KEY, JSON.stringify(ack));
    } catch {}
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm p-4"
    >
      <div className="relative max-w-xl w-full rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 h-8 w-8 grid place-items-center rounded-lg text-muted-foreground hover:bg-muted z-10"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 grid place-items-center rounded-xl bg-warning/15 text-warning">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <h2
              id="disclaimer-title"
              className="text-lg sm:text-xl font-semibold tracking-tight"
            >
              Welcome — please read before continuing
            </h2>
          </div>

          <div className="mt-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">AnesthesiaHub</strong> is
              an educational reference for medical trainees and clinicians.
              It is <strong>not</strong> medical advice and is{" "}
              <strong>not</strong> a substitute for clinical judgment,
              institutional protocols, or primary literature.
            </p>
            <p>
              Doses, formulas, and AI-generated suggestions can be incorrect
              or outdated. <strong className="text-foreground">
                Always cross-check critical information
              </strong>{" "}
              with package inserts, ASA / SOAP / SPA / ASRA / MHAUS
              guidelines, and your institution&apos;s pharmacy before applying
              to a real patient.
            </p>
            <p>
              <strong className="text-foreground">AI Assistant:</strong>{" "}
              messages you type are sent to Anthropic&apos;s Claude API to
              generate responses. <strong>Do not enter PHI</strong> or any
              identifying patient information.
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-medium text-foreground mb-1">
                  By continuing, you acknowledge and accept:
                </div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• This educational-use disclaimer</li>
                  <li>
                    • Our{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      className="text-primary hover:underline inline-flex items-center gap-0.5"
                    >
                      Terms of Service
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    • Our{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-primary hover:underline inline-flex items-center gap-0.5"
                    >
                      Privacy Policy
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-muted-foreground">
            You can review these documents at any time from the footer of
            every page. Acknowledgement is stored locally on this device.
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
              I understand — accept and continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
