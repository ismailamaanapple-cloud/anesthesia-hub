import Link from "next/link";
import { ArrowLeft, ScrollText } from "lucide-react";
import { EFFECTIVE_DATE } from "@/lib/legal";

export function LegalShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mt-6 rounded-2xl border border-border bg-card p-7 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary to-accent opacity-15 blur-3xl" />
        <div className="relative flex items-start gap-4">
          <span className="h-11 w-11 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
            <ScrollText className="h-5 w-5" />
          </span>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-primary font-medium">
              Legal · Effective {EFFECTIVE_DATE}
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </div>

      <article className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8 prose-anesth">
        {children}
      </article>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          href="/terms"
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground"
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy"
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
