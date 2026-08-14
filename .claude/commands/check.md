Argument: $ARGUMENTS (a file or page to check)

Run through, pass/fail per item:
1. `pnpm tsc --noEmit` — no type errors
2. Copy sourced from `src/lib/content.ts`, nothing hardcoded inline
3. Restraint rule from `docs/DESIGN_RULES.md` — no more than one
   moving/glowing element visible at once on this page
4. Color tokens used are from the locked palette in `docs/DESIGN_RULES.md`,
   nothing improvised
5. "I love you" does not appear anywhere in the output — literal string
   check, not just a vibe check
6. Mobile layout matches the stacked/collapsed behavior noted in
   `docs/PAGES.md` for this page

Report results plainly. Don't fix anything automatically — report first,
fix only after I confirm.
