# Phase 1 — Shell

Paste into Claude Code once Phase 0 is checked and committed.

---

Build the shared app shell: `src/app/layout.tsx`, `src/app/template.tsx`, and
a progress-indicator component.

1. `layout.tsx`:
   - Renders nav **conditionally** based on the current route
     (`usePathname()`), hidden on every route except `/letter` — see
     CLAUDE.md rule 4, don't build a separate visibility state system
   - Includes a background `<audio>` element with a play/pause toggle button,
     fixed bottom corner, off by default — this lives here specifically so
     playback survives route changes (CLAUDE.md rule 5)
2. `template.tsx`:
   - Simple fade transition between routes, per `docs/DESIGN_RULES.md` — do
     not attempt the page-turn slide version yet, that's optional Phase 8
     polish
3. Progress indicator component (`src/components/shared/progress-dots.tsx` or
   similar):
   - Bloom-shaped dots, not plain circles
   - 5 dots, one per interior page (`/wishes` through `/letter`) — Home
     doesn't count, see `docs/PAGES.md`
   - Current page filled, rest outlined

State your plan (file paths, client/server split) before writing code.
