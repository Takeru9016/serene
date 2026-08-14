Argument: $ARGUMENTS (a page or component name)

Before writing any code, state a build plan:
- File path
- What it renders (reference the relevant section of `docs/PAGES.md`)
- What copy it pulls from `src/lib/content.ts` (never hardcode copy inline)
- Any interaction/animation from `docs/DESIGN_RULES.md` this component needs
- Whether it's a client or server component, and why

Wait for confirmation before writing the file. If the target page is marked
blocked in `CLAUDE.md` (gift, poetry, reasons), stop and say so instead of
inventing placeholder content beyond what's already in `content.ts`.
