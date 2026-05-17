"use client";

import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Sparkles,
  Send,
  User,
  Bot,
  Trash2,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  {
    title: "Severe AS for ORIF",
    prompt:
      "Build an anesthetic plan: 78F, 60 kg, severe AS (mean gradient 50 mmHg, valve area 0.7 cm²), CAD on clopidogrel (held 7d), CKD III, for left hip ORIF after fall.",
  },
  {
    title: "OB anesthesia",
    prompt:
      "G2P1 at 39 weeks, BMI 42, preeclampsia with severe features on Mg. Failed labor epidural. Now scheduled for urgent C-section. Walk me through anesthetic options and risks.",
  },
  {
    title: "Pediatric T&A",
    prompt:
      "Plan anesthesia for a 4-year-old, 16 kg, with severe OSA (AHI 22) for T&A. Highlight peri-extubation considerations.",
  },
  {
    title: "Trauma RSI",
    prompt:
      "MVA polytrauma, hypotensive (BP 84/50), GCS 9, suspected pneumothorax. Walk me through induction agent choice, RSI dose, post-intubation sedation, and ventilator initial settings.",
  },
  {
    title: "Quick teaching",
    prompt:
      "Explain why phenylephrine is preferred over ephedrine for spinal-induced hypotension at C-section.",
  },
  {
    title: "Reversal decision",
    prompt:
      "When should I choose sugammadex over neostigmine for NMB reversal? Walk me through cost, contraindications, and special situations.",
  },
];

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setError(null);
    setInput("");

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setLoading(true);
    // Append placeholder assistant message we will stream into
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || `Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = m.slice();
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(msg);
      setMessages((m) => m.slice(0, -1));
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-start gap-4">
        <span className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
          <Brain className="h-6 w-6" />
        </span>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            AI Plan Assistant
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Brainstorm anesthetic plans, work through differentials, and learn
            the reasoning behind clinical decisions. Powered by Claude.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-border bg-card overflow-hidden flex flex-col h-[68vh]">
        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5"
        >
          {messages.length === 0 && (
            <EmptyState onPick={(p) => send(p)} />
          )}
          {messages.map((m, i) => (
            <MessageBubble key={i} msg={m} streaming={loading && i === messages.length - 1 && m.role === "assistant"} />
          ))}
        </div>

        {error && (
          <div className="px-5 py-3 text-sm text-destructive bg-destructive/10 border-t border-destructive/30">
            {error}
          </div>
        )}

        {/* Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="border-t border-border p-3 sm:p-4 flex gap-2 items-end bg-background/50"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                send();
              }
            }}
            rows={2}
            placeholder="Describe the patient and case, or ask a clinical question…  (⌘/Ctrl + Enter to send)"
            className="flex-1 resize-none rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              Send
            </button>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl border border-border bg-card text-muted-foreground font-medium text-sm hover:bg-muted"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>
        </form>
      </div>

      <p className="mt-3 text-[11px] text-muted-foreground">
        AI suggestions are for brainstorming only — always cross-check dosing,
        contraindications, and plans before applying to a patient.
      </p>
    </div>
  );
}

function EmptyState({ onPick }: { onPick: (p: string) => void }) {
  return (
    <div className="h-full grid place-items-center">
      <div className="w-full max-w-2xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            Start with an example — or describe your patient
          </div>
          <h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight">
            What case can I help you plan?
          </h3>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.title}
              onClick={() => onPick(s.prompt)}
              className="text-left card-lift rounded-2xl border border-border bg-background p-4 hover:border-primary/40"
            >
              <div className="text-sm font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {s.prompt}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ msg, streaming }: { msg: Msg; streaming: boolean }) {
  const isUser = msg.role === "user";
  return (
    <div
      className={cn(
        "flex gap-3",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <span
        className={cn(
          "h-8 w-8 shrink-0 grid place-items-center rounded-xl text-xs font-semibold",
          isUser
            ? "bg-muted text-foreground"
            : "bg-gradient-to-br from-primary to-accent text-primary-foreground"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </span>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-primary/10 text-foreground border border-primary/20"
            : "bg-muted/50 border border-border"
        )}
      >
        {msg.content ? (
          <FormattedText text={msg.content} />
        ) : (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        )}
        {streaming && msg.content && (
          <span className="inline-block w-1.5 h-4 ml-1 bg-primary animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}

// Minimal markdown-ish renderer: bold, headings, lists, paragraphs, code
function FormattedText({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className="space-y-2">
      {blocks.map((b, i) => renderBlock(b, i))}
    </div>
  );
}

function renderBlock(block: string, key: number) {
  const trimmed = block.trim();
  // Heading
  const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const text = headingMatch[2];
    const cls = level === 1
      ? "text-base font-semibold"
      : level === 2
      ? "text-sm font-semibold text-primary"
      : "text-xs font-semibold uppercase tracking-wider text-muted-foreground";
    return (
      <div key={key} className={cls}>
        {inline(text)}
      </div>
    );
  }
  // List
  if (/^(\s*[-*]|\s*\d+\.)\s/.test(trimmed)) {
    const items = trimmed.split(/\n/).map((l) => l.replace(/^\s*[-*]\s+|^\s*\d+\.\s+/, ""));
    const ordered = /^\s*\d+\.\s/.test(trimmed);
    return ordered ? (
      <ol key={key} className="list-decimal pl-5 space-y-1">
        {items.map((it, j) => (
          <li key={j}>{inline(it)}</li>
        ))}
      </ol>
    ) : (
      <ul key={key} className="list-disc pl-5 space-y-1">
        {items.map((it, j) => (
          <li key={j}>{inline(it)}</li>
        ))}
      </ul>
    );
  }
  return (
    <p key={key} className="whitespace-pre-wrap">
      {inline(trimmed)}
    </p>
  );
}

function inline(text: string) {
  // bold then code
  const parts: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|`([^`]+)`/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let idx = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={idx++} className="font-semibold">{m[1]}</strong>);
    else if (m[2])
      parts.push(
        <code key={idx++} className="rounded bg-background/60 border border-border px-1.5 py-0.5 text-xs">
          {m[2]}
        </code>
      );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
