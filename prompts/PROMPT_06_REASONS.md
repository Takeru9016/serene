# Phase 6 — Reasons (`/reasons`)

Paste into Claude Code once Phase 5 is checked and committed, **and once the
reasons list is written and added to `content.ts`.**

---

Build `src/app/reasons/page.tsx` per `docs/PAGES.md` — "Reasons I'm Not
Letting You Go".

1. Numbered grid, 2-column desktop / 1-column mobile
2. Each card blooms in (fade + slight scale from a bud shape), staggered on
   scroll into view — no load-time animation
3. Copy from `content.ts` `reasons.items` array — map over it, this is the
   user's own writing, do not draft or add to the list
4. Title is already locked ("Reasons I'm Not Letting You Go") — don't change
   it
5. Progress dots: 4 of 5

State your plan before writing code. Run `/check` once built.
