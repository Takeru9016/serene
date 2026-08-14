# Design Rules

## Color Tokens (put these in `globals.css` under `@theme`)

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#FAF4F8` | page background |
| `--color-surface` | `#F1E4EE` | card/section backgrounds |
| `--color-violet-deep` | `#4B2E5A` | headings |
| `--color-violet` | `#6F4577` | primary accent, links, buttons |
| `--color-orchid` | `#9C6BA0` | secondary accent, hover states |
| `--color-gold` | `#C9A464` | fine detail, dividers, seal/gem accents — keep restrained, this is not the primary accent |
| `--color-ink` | `#2E1F35` | body text |

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

- SVG grain overlay, 4-6% opacity, **static, not animated**
- Soft radial glow behind H1/H2 only, low opacity, **static, no animation**

## Night Motif (Home + Letter only — not every page)

Faint star-speck field, background corners, very low density. Static or an
extremely slow drift (60s+ per cycle). Do not add this to Wishes, Gift,
Poetry, or Reasons.

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
