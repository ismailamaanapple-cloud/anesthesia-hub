# AnesthesiaHub

A modern, high-end clinical companion for anesthesiology trainees and attendings:

- **Drug database** — induction agents, paralytics, opioids, vasopressors, local anesthetics, reversal agents, antiemetics, benzodiazepines
- **Bedside calculators** — BMI/BSA, IBW/ABW, age-adjusted MAC, pediatric ETT & LMA sizing, 4-2-1 maintenance fluids, allowable blood loss, pediatric emergency doses, Apfel PONV, RCRI
- **Subspecialty primers** — cardiac, neuro, OB, pediatric, regional, critical care, pain, ambulatory, trauma, transplant
- **Question bank** — 30+ board-style MCQs with detailed explanations and per-device progress tracking
- **AI Assistant** — Claude-powered chat for brainstorming anesthetic plans

> ⚠️ Educational tool only. Verify every dose and recommendation against primary sources and institutional protocols before applying to a patient.

## Getting started

```bash
npm install
cp .env.local.example .env.local
# add your Anthropic API key
npm run dev
```

App will be available at `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- `@anthropic-ai/sdk` for AI streaming
- `lucide-react` icons

## Customizing content

- Drugs → `src/lib/drugs.ts`
- Calculators registry → `src/lib/calculators.ts` (components in `src/components/calculators/`)
- Subspecialties → `src/lib/subspecialties.ts`
- Questions → `src/lib/questions.ts`
- AI system prompt → `src/app/api/chat/route.ts`

## License

MIT — but the medical content is provided as-is and without warranty. See disclaimer in the app.
