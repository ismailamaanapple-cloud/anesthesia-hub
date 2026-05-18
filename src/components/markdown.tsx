import { Fragment } from "react";

/**
 * Minimal markdown renderer for tutorial bodies:
 * - Paragraphs split by blank lines
 * - Headings (#, ##, ###)
 * - Unordered (- or *) and ordered (1.) lists
 * - Tables (GFM: | col | col |)
 * - Block quotes (>)
 * - Inline: **bold**, *italic*, `code`
 */
export function Markdown({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => (
        <Fragment key={i}>{renderBlock(b)}</Fragment>
      ))}
    </div>
  );
}

function renderBlock(block: string) {
  const trimmed = block.trim();

  // Table detection: contains lines with leading and trailing pipes
  const lines = trimmed.split("\n");
  if (lines.length >= 2 && lines[0].trim().startsWith("|") && lines[1].includes("---")) {
    return renderTable(lines);
  }

  // Headings
  const heading = trimmed.match(/^(#{1,3})\s+(.*)$/);
  if (heading) {
    const level = heading[1].length;
    const text = heading[2];
    if (level === 1) return <h2 className="text-xl font-semibold mt-4">{inline(text)}</h2>;
    if (level === 2) return <h3 className="text-lg font-semibold mt-3 text-primary">{inline(text)}</h3>;
    return <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-2">{inline(text)}</h4>;
  }

  // Block quote
  if (trimmed.startsWith(">")) {
    const body = trimmed.replace(/^>\s?/gm, "").trim();
    return (
      <blockquote className="border-l-4 border-primary/50 bg-primary/5 pl-4 pr-3 py-2 rounded-r-lg text-sm italic">
        {inline(body)}
      </blockquote>
    );
  }

  // Lists (mixed paragraph + list separation: detect leading list marker on first non-empty)
  const isListBlock = lines.every((l) => /^\s*([-*]|\d+\.)\s/.test(l.trim()) || l.trim() === "");
  if (isListBlock) {
    const cleaned = lines.filter((l) => l.trim().length > 0);
    const ordered = /^\s*\d+\.\s/.test(cleaned[0]);
    return ordered ? (
      <ol className="list-decimal pl-5 space-y-1.5 marker:text-primary">
        {cleaned.map((l, i) => (
          <li key={i} className="leading-relaxed text-[15px]">
            {renderListItem(l.replace(/^\s*\d+\.\s+/, ""))}
          </li>
        ))}
      </ol>
    ) : (
      <ul className="list-disc pl-5 space-y-1.5 marker:text-primary">
        {cleaned.map((l, i) => (
          <li key={i} className="leading-relaxed text-[15px]">
            {renderListItem(l.replace(/^\s*[-*]\s+/, ""))}
          </li>
        ))}
      </ul>
    );
  }

  // Paragraph (preserve single newlines as line breaks)
  return (
    <p className="leading-relaxed text-[15px] whitespace-pre-wrap text-foreground/85">
      {inline(trimmed)}
    </p>
  );
}

function renderListItem(text: string) {
  // Support nested-ish content: lines starting with "  -" inside list item come as
  // multi-line strings. For simplicity, treat newlines inside item as <br/>
  const parts = text.split(/\n/);
  return parts.map((p, i) => (
    <Fragment key={i}>
      {inline(p.trim())}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}

function renderTable(lines: string[]) {
  const cells = (line: string) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());

  const header = cells(lines[0]);
  const body = lines.slice(2).map(cells);

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/60">
          <tr>
            {header.map((h, i) => (
              <th
                key={i}
                className="text-left font-semibold px-3 py-2 border-b border-border whitespace-nowrap"
              >
                {inline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="odd:bg-background even:bg-muted/20">
              {row.map((c, ci) => (
                <td
                  key={ci}
                  className="px-3 py-2 align-top border-b border-border/60 text-foreground/85"
                >
                  {inline(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function inline(text: string): React.ReactNode {
  // Process **bold**, *italic*, `code` left-to-right
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < text.length) {
    // bold
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        out.push(
          <strong key={key++} className="font-semibold text-foreground">
            {text.slice(i + 2, end)}
          </strong>
        );
        i = end + 2;
        continue;
      }
    }
    // italic (avoid matching ** which we already handled)
    if (text[i] === "*" && text[i + 1] !== "*") {
      const end = text.indexOf("*", i + 1);
      if (end !== -1) {
        out.push(
          <em key={key++} className="italic">
            {text.slice(i + 1, end)}
          </em>
        );
        i = end + 1;
        continue;
      }
    }
    // code
    if (text[i] === "`") {
      const end = text.indexOf("`", i + 1);
      if (end !== -1) {
        out.push(
          <code
            key={key++}
            className="rounded border border-border bg-muted/60 px-1.5 py-0.5 text-xs font-mono"
          >
            {text.slice(i + 1, end)}
          </code>
        );
        i = end + 1;
        continue;
      }
    }
    // plain char — accumulate run
    const next = findNextMarker(text, i);
    out.push(text.slice(i, next));
    i = next;
  }
  return out;
}

function findNextMarker(text: string, from: number) {
  let n = text.length;
  for (let j = from + 1; j < text.length; j++) {
    if (text[j] === "*" || text[j] === "`") {
      n = j;
      break;
    }
  }
  return n;
}
