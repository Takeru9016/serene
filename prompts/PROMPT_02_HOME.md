# Phase 2 — Home (`/`)

Paste into Claude Code once Phase 1 is checked and committed.

---

Build `src/app/page.tsx` per the spec in `docs/PAGES.md` under `/` — Home.

1. Full viewport, centered, minimal — eyebrow, title, subtitle, one
   "Begin →" link into `/wishes`. Copy comes from `content.ts` `home` export,
   don't hardcode it inline.
2. Night motif allowed on this page per `docs/DESIGN_RULES.md` — faint
   star-speck corners, static or a 60s+ drift, low density. This is one of
   only two pages that gets this effect (the other is `/letter`).
3. No progress dots on Home — the chain starts visually at `/wishes`.

State your plan before writing code. Run `/check` on this page once built.
