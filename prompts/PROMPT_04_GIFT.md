# Phase 4 — Gift (`/gift`)

Paste into Claude Code once Phase 3 is checked and committed.

**Before running this: confirm with me whether the real gift has been
decided yet.** `content.ts` currently has placeholder copy in brackets. If
it's still placeholder, tell Claude Code explicitly to build the page
structure with the placeholder content as-is — do not let it invent gift
details to fill the brackets.

---

Build `src/app/gift/page.tsx` per `docs/PAGES.md` — Your Gift.

1. Two-column layout desktop (photo left, title + body right), stacked on
   mobile
2. Ribbon-unwrap interaction: photo/description hidden behind a ribbon
   graphic until clicked/tapped — build this as a real interaction, not a
   simple hide/show toggle with no visual ribbon
3. Copy from `content.ts` `gift` export — if it's still the bracketed
   placeholder, build the page against it as-is, don't rewrite or "improve"
   the placeholder text
4. Plain otherwise — no glow, no extra motif, per `docs/PAGES.md`
5. Progress dots: 2 of 5

State your plan before writing code. Run `/check` once built.
