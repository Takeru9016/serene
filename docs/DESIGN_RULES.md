# Design Rules

## Color Tokens (put these in `globals.css` under `@theme`)

**Dark mode is the only mode now — the light values that were here before
are retired, not toggled.** Same token *names* kept so nothing that
already references `var(--color-*)` needs renaming, but note two tokens
flip their semantic role: `--color-violet-deep` and `--color-ink` were dark
text on a light background before; they're now light text on a dark
background. Read the "Use" column, don't assume the old meaning carries
over just because the name did.

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#150C1C` | page background — near-black deep violet |
| `--color-surface` | `#241531` | card/section backgrounds |
| `--color-violet-deep` | `#F0DFF7` | headings — **now light**, near-white lilac for contrast on dark bg |
| `--color-violet` | `#B98FD1` | primary accent, links, buttons — brightened from the old light-mode value, the original mid-tone purple reads muddy against near-black |
| `--color-orchid` | `#D9A9E0` | secondary accent, hover states — brightened |
| `--color-gold` | `#E0C285` | fine detail, dividers, seal/gem accents — brightened slightly, still keep restrained, still not the primary accent |
| `--color-ink` | `#D6C2E3` | body text — **now light**, dimmer than the heading color for hierarchy |

## Typography

- Display: `Playfair Display` (italic) — headings, section titles
- Body: `Jost` (weight 300) — everything readable
- Accent: `Dancing Script` — used sparingly only: her name on hero, closing
  signature. Never for body text, never for more than one line per page.

## Signature Motif

Wisteria vine, thin line-art SVG, appears in page headers. Progress
indicator reuses bloom shapes instead of plain dots. This is the one motif
allowed to be noticeable — everything else below stays in the background.

## The Restraint Rule

**No more than one moving or glowing element visible on screen at a time.**
This is the single most important rule in this doc. When building a page,
if something feels like too much, the fix is always "reduce," never "add
something to balance it."

## Ambient Texture (site-wide, applies to every page)

- SVG grain overlay, 4-6% opacity, **static, not animated**. On the dark
  background, verify this visually once switched — a grain texture tuned
  for a light background can read very differently (either invisible or
  too harsh) against near-black. Adjust opacity by eye, don't assume the
  same 4-6% value still looks right.
- Soft radial glow behind H1/H2 only, low opacity, **static, no animation**

## Night Motif (now site-wide — extended from the original Home + Letter-only lock)

Faint star-speck field, background corners, very low density. Static or an
extremely slow drift (60s+ per cycle). This was originally restricted to
Home and Letter to make dark-sky imagery feel special; now that the entire
site is dark by default, restricting it no longer makes sense, so it's
extended to every page. Keep the density and drift speed exactly as
before — "site-wide" doesn't mean "more prominent," it means "consistent."
Still counts as static/ambient, not against the one-motion-per-screen
budget, same reasoning as before.

## Micro-interactions

- Buttons/links: soft amethyst glow on hover — no scale, no shadow-lift
- `Continue →`: page-turn-flavored transition on click
- Timeline/card elements: bloom animation on **hover**, never on load, except
  where a page spec explicitly calls for a scroll-triggered reveal

## Page Transitions

Build with a simple fade in `template.tsx` first. A page-turn slide is
optional upgrade work, only after all content pages are built and checked —
do not let transition polish block a page from shipping.

## Ambient Music

Single toggle, off by default, fixed bottom corner. State and `<audio>`
element live in `layout.tsx` so playback persists across route changes —
see CLAUDE.md rule 5.

## 3D Elements (Phase 8 — real three.js/react-three-fiber, not CSS 3D)

**Scope, locked:** Home, Gift, Poetry, Reasons, and Letter each get one 3D
moment. This was a deliberate scope increase accepted with two known costs:
build/testing risk given the deadline, and — specifically for Letter — the
loss of the "one page that stays completely still" contrast the rest of
this doc was built around. Both were flagged explicitly and the decision
was to proceed anyway. Not re-litigating this per page — if it comes up
again, point back to this note rather than re-opening the discussion.

**Rules for every 3D moment:**
- On a page with a 3D element, **that element is the one motion/glow budget
  for the page** — per the restraint rule, don't also run the page's
  original 2D effect (poetry's candlelight pulse, reasons' bloom-in, etc.)
  at the same time as its 3D replacement. Pick one, not both.
- Every 3D component must be loaded via `next/dynamic` with `ssr: false`
  and a loading fallback — never bundled into the main page chunk
- Every 3D component must have a `prefers-reduced-motion` fallback (a
  static image or the page's original 2D/CSS version) — check
  `window.matchMedia('(prefers-reduced-motion: reduce)')` and render the
  fallback instead of mounting the Canvas
- Keep geometry simple — this is five separate scenes to build and test on
  actual mobile hardware, not one showcase piece. Low-poly/stylized over
  detailed, every time.
- Components live in `src/components/three/`, one file per scene

**Per-page 3D moment (see `docs/PAGES.md` for full spec):**
- Home — 3D envelope/seal, replaces the flat CSS version
- Gift — 3D ribbon-unwrap box, replaces the CSS ribbon interaction
- Poetry — 3D unfurling scroll
- Reasons — one 3D card element (not all cards — pick the interaction
  moment, not a full 3D grid)
- Letter — 3D letter-opening moment (see the note above — this replaces the
  "stay plain" lock, decision recorded, not accidental)

## Dark Mode Retrofit — 3D Scenes

Token changes in `globals.css` don't touch anything inside a three.js
`<Canvas>` — scene background, lighting, and materials are set separately
in each component and need their own pass:

- If any scene sets an explicit `scene.background`, it needs to change to
  match `--color-bg` (`#150C1C`) or be removed so the page background
  shows through a transparent canvas — check each of the five scenes
  individually, don't assume they're already transparent
- Ambient/directional light intensity was likely tuned assuming a light
  page behind the canvas — objects that read fine against a pale
  background can go nearly invisible against near-black. Each scene needs
  its lighting re-tuned by eye against the new dark background, not just
  carried over unchanged
- This is a real opportunity, not just a fix: a soft violet or gold rim
  light / emissive glow on each 3D object fits the jewel-tone dark-mode
  direction well and solves the visibility problem at the same time — worth
  doing deliberately rather than just cranking up flat ambient light
  intensity as a patch

**Per-scene lighting direction** — so each of the five gets a coherent
treatment instead of five undirected decisions:

| Page | Scene | Lighting treatment |
|---|---|---|
| Home | 3D envelope/seal | Soft gold rim light on the seal — it's the first thing she sees, worth making it glow rather than just sit against the dark |
| Gift | 3D ribbon-unwrap box | Violet emissive glow along the ribbon edges — helps the box read as an object in the dark rather than a silhouette |
| Poetry | 3D unfurling scroll | Lower intensity than the others — this page is still meant to be quiet/typography-led even with the 3D swap, the glow shouldn't compete with the text once the scroll opens |
| Reasons | one 3D card | Match whatever glow treatment the 2D bloom-in cards already get, so the one 3D card doesn't look like a different design system dropped into the grid |
| Letter | 3D letter-opening | Quietest lighting of all five — "everything besides the 3D moment stays plain" still applies post-override, so this shouldn't be the most dramatic glow on the site, it should be the most restrained |
