# [Her Name]'s Birthday Website — Claude Context

Personal gift project. One person building it (me), real deadline (her birthday), no
CMS, no backend, no team. This file is intentionally short — scale the workflow to
the project, don't import Sero Studio's full setup wholesale.

## Current Phase

See `docs/PHASES.md` for the live tracker. Update **Active Task** and **Last
Completed** there after every session — don't let this file and the tracker drift
out of sync.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- GSAP — scroll reveals only (wishes cards, reasons bloom-in, timeline-style motion)
- No CMS, no database, no auth, no analytics — static content, all copy lives in
  `src/lib/content.ts`
- Deploy target: Vercel (static)

## Route Chain — locked, guided, linear

```
/ → /wishes → /gift → /poetry → /reasons → /letter
```

No nav bar renders until `/letter`. No skip links. No "back to home" on interior
pages. See `docs/PAGES.md` for the full per-page spec.

## Domain & Access

Live at `serene.serostudio.co`. Password-gated — see
`docs/DOMAIN_AND_ACCESS.md` for how the gate works and why it exists. Two
env vars (`GATE_PASSCODE`, `GATE_TOKEN`) are required in Vercel and must
never be committed — `.env.example` documents the shape, not the values.

## Non-Negotiable Rules

1. **"I love you" does not appear anywhere on this site.** Not in copy, not in
   alt text, not in a code comment as a placeholder. This was an explicit,
   deliberate call — do not "helpfully" add it.
2. All copy lives in `src/lib/content.ts`, never hardcoded inline in a page
   component. Pages import from it.
3. Restraint rule: **no more than one moving or glowing element visible on
   screen at a time.** If a page feels busy, turn an effect's opacity down, not
   up. See `docs/DESIGN_RULES.md`.
4. Nav is conditionally rendered in `layout.tsx` based on route — hidden until
   `/letter`. Don't build a separate nav toggle/state system for this.
5. Background audio element lives in `layout.tsx` (persists across route
   changes via App Router), never inside an individual `page.tsx`.
6. Don't add analytics, tracking, or third-party scripts unless explicitly
   asked — this is a private gift, not a product.
7. Never hardcode `GATE_PASSCODE` or `GATE_TOKEN` values anywhere in code,
   comments, or commit messages — env vars only, set directly in Vercel.
8. State a build plan (file path, what it renders, what data it pulls from
   `content.ts`) before writing a new page or component. Don't skip straight
   to code.

## Open Blockers

- **`/gift` page content is a placeholder.** Real gift, photo, and reasoning
  are not decided yet. Don't treat the placeholder copy in `content.ts` as
  final — flag it back to me rather than shipping it as-is.
- **Poetry and Reasons page copy are mine to write**, not Claude's to draft.
  If asked to "fill in" either page, don't invent the content — leave the
  placeholder and prompt me instead.

## Key Files

- `docs/PAGES.md` — page-by-page spec: layout, copy status, interactions
- `docs/DESIGN_RULES.md` — color tokens, type pairing, motif, animation rules
- `docs/PHASES.md` — task tracker
- `prompts/PROMPT_00_SETUP.md` through `PROMPT_10_DOMAIN_GATE.md` — one
  prompt per phase, pasted into Claude Code in order as each prior phase is
  checked and committed. Don't skip ahead to a later prompt if an earlier
  phase isn't done — several later prompts assume content or infrastructure
  that only exists once an earlier phase (or a copy blocker) is resolved.
  Phase 8 (3D Elements) is a real scope increase added mid-project — see
  `docs/DESIGN_RULES.md` for the reasoning, including the Letter-page
  override of an earlier "stay plain" lock. That override was deliberate,
  flagged, and confirmed — don't second-guess it, just don't let it creep
  into re-adding effects elsewhere on that page.
- `prompts/PROMPT_11_DARK_MODE.md` — a retrofit pass, run only after
  Phases 0–10 are already complete. **Dark mode has no toggle — it fully
  replaces the original light theme.** Color tokens in
  `docs/DESIGN_RULES.md` are already updated to dark values; this prompt
  covers what a token swap alone won't fix (3D scene lighting, the gate
  page's hardcoded fallback hex, grain visibility, extending the night
  motif site-wide).
- `src/lib/content.ts` — single source of truth for all copy
- `src/app/layout.tsx` — nav logic, audio element, font loading
- `src/app/template.tsx` — page transition (fade, upgrade to page-turn slide
  later if time allows — not before)

## Git

Commit after each page is built and checked, not in one giant commit at the
end. Message format: `page: short description` (e.g. `wishes: build page + GSAP reveal`).
