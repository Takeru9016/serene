# Phase 0 — Setup

Paste into Claude Code after `/start` confirms Phase 0 is active.

---

Scaffold a Next.js App Router project with TypeScript and Tailwind CSS v4.

1. Init the project (pnpm), App Router, TypeScript, Tailwind v4 — no `src/`
   nesting changes, keep the structure already present in this repo
   (`src/app`, `src/components`, `src/lib` already exist, don't recreate them)
2. Add the color tokens from `docs/DESIGN_RULES.md` to `globals.css` under an
   `@theme` block — use the exact hex values and token names given there,
   don't rename or adjust them
3. Load fonts: Playfair Display, Jost (weight 300), Dancing Script — via
   `next/font/google`, not a manual `<link>` tag
4. Confirm `src/lib/content.ts` is present and untouched (it already has
   Wishes and Letter copy locked, Gift/Poetry/Reasons as placeholders — don't
   modify it in this phase)

State your plan before running anything. Stop after setup — don't start
building `layout.tsx` yet, that's Phase 1.
