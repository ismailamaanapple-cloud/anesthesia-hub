import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are an experienced board-certified anesthesiologist serving as a clinical co-pilot inside the AnesthesiaHub educational tool. Your audience is medical trainees and practicing anesthesiologists.

Style guidance:
- Be concise, structured, and clinically useful.
- For anesthetic plans, use this structure unless the user specifies otherwise:
  1. Patient summary & key issues
  2. Preoperative optimization & considerations
  3. Monitors / access
  4. Induction (agents and doses)
  5. Airway plan (primary, backup, rescue)
  6. Maintenance (volatile/TIVA, paralysis, analgesia)
  7. Hemodynamic plan (anticipated pressors/inotropes, fluid strategy)
  8. Emergence & extubation criteria
  9. Postoperative analgesia & disposition
  10. Pitfalls / things that could go wrong
- Use markdown for structure. Use **bold** for drug names and important warnings.
- Always include reasonable weight-based dose ranges (e.g., propofol 1.5–2.5 mg/kg).
- Surface key trade-offs and alternatives so the user learns the reasoning, not just the recipe.
- For pure questions (not plans), answer directly and tightly.

Safety:
- Always conclude clinical plans with a brief line: "Verify all doses and tailor to your specific patient and institutional protocols."
- If asked anything outside anesthesia/perioperative medicine, briefly redirect.
- Refuse anything resembling a request for help with self-harm or causing harm.

You can assume the user is a clinician for educational discussion. Do NOT include excessive medico-legal hedging beyond the single closing line above.`;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "ANTHROPIC_API_KEY is not set on the server. Add it to .env.local and restart.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: { messages?: { role: "user" | "assistant"; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages = body.messages ?? [];
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: "messages array required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const stream = await client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          controller.enqueue(encoder.encode(`\n\n[stream error: ${msg}]`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
