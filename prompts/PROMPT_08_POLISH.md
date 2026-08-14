# Phase 8 — Polish

Paste into Claude Code only after all 6 content pages (Home through Letter)
are built and individually checked. Don't start this phase early — polish
work on an unfinished page gets redone.

---

Work through these in order, checking each before moving to the next:

1. **Ambient grain + heading glow** — site-wide SVG grain overlay (4-6%
   opacity, static) and a soft static radial glow behind H1/H2 elements only.
   Both static, no animation, per `docs/DESIGN_RULES.md`.
2. **Responsive pass** — every page, confirm the two-column layouts (Gift)
   and grids (Reasons) collapse correctly below ~640px per `docs/PAGES.md`
3. **Music toggle** — confirm the `layout.tsx` audio element and toggle
   button work correctly across route changes, not just on the page it was
   first clicked on
4. **Restraint audit** — go page by page, confirm no page has more than one
   moving/glowing element visible at once. This is worth a manual pass, not
   just trusting each phase's individual `/check`.
5. **Page-turn transition** *(optional — only if time allows)* — upgrade
   `template.tsx` from fade to a page-turn-style slide. If this starts eating
   time better spent elsewhere, skip it. Fade is a fully acceptable final
   state.

Run `/check` after each numbered item, not just once at the end.
