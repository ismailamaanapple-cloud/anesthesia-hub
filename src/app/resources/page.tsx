import {
  Library,
  BookOpen,
  BookMarked,
  GraduationCap,
  Stethoscope,
  Globe,
  Podcast,
  ShieldCheck,
  Star,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { resourceGroups, startHere } from "@/lib/resources";

export const metadata = {
  title: "Resources — AnesthesiaHub",
  description:
    "Curated anesthesiology learning resources for medical students and residents: core textbooks (Morgan & Mikhail, Miller, Baby Miller), board prep, free online tools, and podcasts.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  BookMarked,
  GraduationCap,
  Stethoscope,
  Globe,
  Podcast,
  ShieldCheck,
};

function isExternal(url?: string) {
  return !!url && /^https?:\/\//.test(url);
}

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <Library className="h-6 w-6" />
        </span>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            A curated reading and listening list for anesthesiology — built for
            medical students on rotation, residents working through the
            curriculum, and anyone prepping for the boards. The classics
            (Morgan &amp; Mikhail, Miller, &quot;Baby Miller&quot;) plus the
            question banks, free sites, and podcasts worth your time.
          </p>
        </div>
      </div>

      {/* START HERE */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <StartCard
          label="Medical students"
          accent="from-sky-500 to-blue-500"
          items={startHere.student}
        />
        <StartCard
          label="Residents (CA-1 → CA-3)"
          accent="from-emerald-500 to-cyan-500"
          items={startHere.resident}
        />
        <StartCard
          label="Board prep"
          accent="from-amber-500 to-orange-500"
          items={startHere.boards}
        />
      </div>

      {/* GROUPS */}
      <div className="mt-12 space-y-12">
        {resourceGroups.map((group) => {
          const Icon = iconMap[group.icon] ?? BookOpen;
          return (
            <section key={group.slug} id={group.slug} className="scroll-mt-24">
              <div className="flex items-start gap-3">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${group.color} text-white shadow-md shrink-0`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground max-w-3xl">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => {
                  const external = isExternal(item.url);
                  const Wrapper = (item.url ? "a" : "div") as React.ElementType;
                  const linkProps = item.url
                    ? external
                      ? {
                          href: item.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { href: item.url }
                    : {};
                  return (
                    <Wrapper
                      key={item.title}
                      {...linkProps}
                      className={`group relative flex flex-col rounded-2xl border border-border bg-card p-5 ${
                        item.url ? "card-lift" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        {item.popular && (
                          <span className="shrink-0 inline-flex items-center gap-1 text-[10px] uppercase tracking-wider rounded-full bg-primary/10 text-primary px-2 py-0.5 font-medium">
                            <Star className="h-3 w-3 fill-current" />
                            Start here
                          </span>
                        )}
                      </div>

                      {item.nickname && (
                        <div className="mt-1 text-xs text-primary font-medium">
                          &quot;{item.nickname}&quot;
                        </div>
                      )}
                      {item.by && (
                        <div className="mt-0.5 text-xs text-muted-foreground">
                          {item.by}
                        </div>
                      )}

                      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.blurb}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        {item.levels.map((lvl) => (
                          <span
                            key={lvl}
                            className="text-[10px] uppercase tracking-wider rounded-full border border-border bg-muted/50 px-2 py-0.5 text-muted-foreground"
                          >
                            {lvl}
                          </span>
                        ))}
                      </div>

                      {item.url && (
                        <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          {external ? (
                            <>
                              Visit site <ExternalLink className="h-3 w-3" />
                            </>
                          ) : (
                            <>
                              Open <ExternalLink className="h-3 w-3" />
                            </>
                          )}
                        </div>
                      )}
                    </Wrapper>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12 flex items-start gap-3 rounded-2xl border border-border bg-muted/30 p-5 text-sm text-muted-foreground">
        <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <p>
          This list is curated for education and is not an endorsement of any
          publisher or vendor. Editions and availability change — always confirm
          you have the latest edition, and check what your own program
          recommends and provides access to.
        </p>
      </div>
    </div>
  );
}

function StartCard({
  label,
  accent,
  items,
}: {
  label: string;
  accent: string;
  items: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5">
      <div
        className={`absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-15 blur-3xl`}
      />
      <div className="relative text-xs uppercase tracking-[0.16em] text-muted-foreground font-medium">
        {label}
      </div>
      <ul className="relative mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br ${accent} text-[10px] font-semibold text-white`}
            >
              {i + 1}
            </span>
            <span className="leading-snug">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
