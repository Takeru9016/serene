# Phase 5 — Poetry (`/poetry`)

Paste into Claude Code once Phase 4 is checked and committed, **and once the
poem is actually written and added to `content.ts`.** Don't run this phase
against an empty `poetry.body` — the layout needs real text to space
correctly (stanza breaks, line length).

---

Build `src/app/poetry/page.tsx` per `docs/PAGES.md` — Poetry.

1. Single continuous typographic block — **not** stacked poem cards (that
   was the old multi-poem layout, this project locked one long poem instead)
2. Generous stanza spacing, respect line breaks from `content.ts`
   `poetry.body`
3. Slow-pulsing glow behind the full text block — this is the one and only
   effect this page gets, per the restraint rule
4. Copy from `content.ts` `poetry` export only — this is the user's own
   writing, do not draft, extend, or "polish" any line of it
5. Progress dots: 3 of 5

State your plan before writing code. Run `/check` once built.
