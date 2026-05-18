import Link from "next/link";
import { Activity, ShieldAlert, Scale, FileText, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/legal";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Activity className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-semibold tracking-tight">
                Anesthesia<span className="text-gradient">Hub</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              A modern clinical companion: drug database, dose calculators,
              subspecialty primers, a question bank, and an AI assistant for
              anesthetic plan brainstorming.
            </p>
            <div className="mt-5 flex items-start gap-2 text-xs text-warning bg-warning/10 border border-warning/30 rounded-lg p-3">
              <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                <strong>For educational use only.</strong> Verify every dose
                and recommendation against primary sources and institutional
                protocols. Never substitute for clinical judgment.
              </span>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold mb-3">Tools</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tutorials" className="hover:text-foreground">Tutorial library</Link></li>
              <li><Link href="/drugs" className="hover:text-foreground">Drug database</Link></li>
              <li><Link href="/calculators" className="hover:text-foreground">Calculators</Link></li>
              <li><Link href="/emergency" className="hover:text-foreground">Emergency manual</Link></li>
              <li><Link href="/question-bank" className="hover:text-foreground">Question bank</Link></li>
              <li><Link href="/ai-assistant" className="hover:text-foreground">AI assistant</Link></li>
              <li><Link href="/bookmarks" className="hover:text-foreground">My bookmarks</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold mb-3">Learn</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/subspecialties" className="hover:text-foreground">Subspecialties</Link></li>
              <li><Link href="/subspecialties/regional" className="hover:text-foreground">Regional</Link></li>
              <li><Link href="/subspecialties/cardiac" className="hover:text-foreground">Cardiac</Link></li>
              <li><Link href="/subspecialties/pediatric" className="hover:text-foreground">Pediatric</Link></li>
              <li><Link href="/subspecialties/obstetric" className="hover:text-foreground">Obstetric</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-foreground inline-flex items-center gap-1.5">
                  <Scale className="h-3.5 w-3.5" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground inline-flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-foreground inline-flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} AnesthesiaHub. Educational resource — not medical advice.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <span className="opacity-30">·</span>
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <span className="opacity-30">·</span>
            <span>v1.1</span>
            <span className="opacity-30">·</span>
            <Link href="/" className="hover:text-foreground">Home</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
