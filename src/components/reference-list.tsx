import { BookOpen, ExternalLink } from "lucide-react";
import { refs as resolveRefs, type Reference } from "@/lib/references";

const typeLabel: Record<Reference["type"], string> = {
  textbook: "Textbook",
  guideline: "Guideline",
  journal: "Journal",
  society: "Society",
  "package-insert": "Package insert",
  web: "Web",
};

const typeColor: Record<Reference["type"], string> = {
  textbook: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
  guideline: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  journal: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  society: "bg-amber-500/10 text-amber-500 border-amber-500/30",
  "package-insert": "bg-rose-500/10 text-rose-500 border-rose-500/30",
  web: "bg-slate-500/10 text-slate-500 border-slate-500/30",
};

export function ReferenceList({ ids }: { ids: string[] }) {
  const items = resolveRefs(ids);
  if (items.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-4 w-4 text-primary" />
        <h2 className="text-base font-semibold tracking-tight">
          References & Further Reading
        </h2>
      </div>
      <ol className="space-y-3">
        {items.map((r, i) => (
          <li
            key={r.id}
            className="rounded-xl border border-border bg-card p-4 flex items-start gap-3 text-sm leading-relaxed"
          >
            <span className="h-6 w-6 grid place-items-center rounded-full bg-muted text-xs font-semibold text-muted-foreground shrink-0">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span
                  className={`text-[10px] uppercase tracking-wider font-medium border rounded-full px-2 py-0.5 ${
                    typeColor[r.type]
                  }`}
                >
                  {typeLabel[r.type]}
                </span>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[11px] text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Open source
                  </a>
                )}
              </div>
              <p className="text-foreground/85">{r.citation}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-muted-foreground">
        Citations are provided to direct further study. Always check the most
        current edition of guidelines and society recommendations — the
        information in this chapter is a teaching summary, not primary source
        material.
      </p>
    </section>
  );
}
