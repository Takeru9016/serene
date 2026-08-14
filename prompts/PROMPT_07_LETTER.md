# Phase 7 — Letter (`/letter`)

Paste into Claude Code once Phase 6 is checked and committed.

---

Build `src/app/letter/page.tsx` per `docs/PAGES.md` — Letter.

1. Plain layout, generous whitespace — this is deliberately the least
   "designed" page on the site, per `docs/DESIGN_RULES.md`. Resist adding
   any decoration here beyond what's specified.
2. Copy from `content.ts` `letter.body` array + `letter.signature` — already
   written and locked, don't rewrite it
3. Night motif allowed here (same as Home) — faint, static or slow-drift
   star field, low density
4. No other glow, no texture beyond the site-wide base grain, no music
   emphasis
5. After the closing content: a line reading roughly "You've seen it all —
   look around ↓" that triggers the nav in `layout.tsx` to fade in — this is
   the only page where the nav becomes visible
6. No `Continue →` link — this is the end of the chain
7. Progress dots: 5 of 5

State your plan before writing code. Run `/check` once built. This is the
last content page — after this, `/done` should move Phase 8 (Polish) to
Active.
