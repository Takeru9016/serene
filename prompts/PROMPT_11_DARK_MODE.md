# Phase 11 — Dark Mode Retrofit

Paste into Claude Code once Phases 0–10 are already complete and working —
this runs against a finished site, not mid-build. The whole point of doing
it last is that every page and every 3D scene already exists and can be
checked against the new palette directly, rather than guessing at contrast
before content exists.

---

## 1. Tokens

Update the `@theme` block in `globals.css` to the dark values in
`docs/DESIGN_RULES.md`. Same token names, new hex values — nothing that
already references `var(--color-*)` should need renaming. Two tokens flip
semantic role (`--color-violet-deep` and `--color-ink` go from dark text to
light text) — read the "Use" column in the doc, don't assume the old
meaning still applies.

## 2. Manual page-by-page review

Go through Home, Wishes, Gift, Poetry, Reasons, Letter individually. A
token swap can silently break something a hardcoded color would have
caught — check every page renders with legible contrast, not just that it
"looks dark."

## 3. Gate page — hardcoded fallbacks

`src/app/gate/page.tsx` has inline style fallback hex values (e.g.
`var(--color-bg, #FAF4F8)`) that were already updated in this setup package
to the new dark hex values — confirm they match `docs/DESIGN_RULES.md`,
don't leave the old light-mode fallbacks in place if this file was touched
since.

## 4. Ambient grain

Re-check the site-wide grain overlay opacity by eye against the dark
background — a value tuned for a light background often needs adjusting,
in either direction, once the background flips.

## 5. Night motif — extend site-wide

Originally locked to Home + Letter only. Extend the same faint star-speck
treatment (same density, same drift speed — don't make it more prominent
just because it's now everywhere) to Wishes, Gift, Poetry, and Reasons.

## 6. 3D scenes — the part a CSS token change won't fix

For each of the five scenes (`src/components/three/`):
- Check `scene.background` — either update it to match the new `--color-bg`
  value, or confirm the canvas is transparent so the page background shows
  through
- Apply the per-page lighting treatment from the table in
  `docs/DESIGN_RULES.md` under "Dark Mode Retrofit — 3D Scenes" — each
  page has a specific glow direction (Home's gold rim light, Gift's violet
  ribbon glow, Poetry's lower intensity, Reasons matching the 2D cards,
  Letter's deliberately quiet treatment). Don't reuse one generic lighting
  setup across all five — the table exists so they're coherent, not
  identical.

State a plan before touching each scene. Run `/check` after tokens+pages
(steps 1-5) as one pass, then again after the 3D pass (step 6) — don't
combine them into a single check, the failure modes are different.

## 7. Device check

Test on an actual phone, not just a desktop browser. Contrast issues in
dark UIs show up differently on mobile screens.
