# Page-by-Page Spec

Route chain: `/` → `/wishes` → `/gift` → `/poetry` → `/reasons` → `/letter`
Every interior page ends in a `Continue →` link to the next route in the chain,
label varies per page (not a generic repeated string).

---

## `/` — Home

**Status:** copy locked (hero title/subtitle use her name + one line, see
`content.ts`)
**Layout:** full viewport, centered, nothing else — restraint on purpose
**Interaction:** seal/gem click-through or straight "Begin →" — no separate
envelope-lock screen needed now that it's multi-page (that was the SPA-draft
version)
**Motif on this page:** night motif allowed here (faint star-speck corners,
static or 60s+ drift)

## `/wishes` — Wishes

**Status:** copy done — 5 wish cards, see `content.ts`
**Layout:** eyebrow + H2, then stacked wish cards
**Interaction:** GSAP stagger reveal on scroll into view
**Motif:** none beyond base grain — this page is content-led, not effect-led

## `/gift` — Your Gift

**Status:** template only, blocked on real gift decision — see CLAUDE.md
blockers
**Layout:** two-column desktop (photo left, title+text right), stacked mobile
**Interaction:** ribbon-unwrap reveal — photo/description hidden behind a
ribbon graphic until clicked
**Motif:** none — keep this page plain until real content lands

## `/poetry` — Poetry

**Status:** mine to write, one long poem (not multiple short ones — layout
reflects this)
**Layout:** single continuous typographic block, generous stanza spacing —
not stacked cards
**Interaction:** none needed
**Motif:** slow-pulsing glow behind the full text block (the one effect this
page gets)

## `/reasons` — "Reasons I'm Not Letting You Go"

**Status:** title locked, content mine to write
**Layout:** numbered grid, 2-col desktop / 1-col mobile
**Interaction:** each card blooms in (fade + slight scale from a bud shape),
staggered on scroll
**Motif:** none beyond the bloom-in itself

## `/letter` — Letter

**Status:** copy done, see `content.ts` — pending my own edits before final
**Layout:** plain, generous whitespace, closing paragraph + signature
**Interaction:** after content, "You've seen it all — look around ↓" line
triggers the nav fade-in
**Motif:** deliberately untouched — no glow, no texture beyond base grain, no
music emphasis. The stillness here is the point.

---

## Progress Indicator

Bloom-shaped dots (not plain dots), bottom of every interior page. Current
page filled, rest outlined. 5 dots total (Home doesn't count toward the
chain — dots start on `/wishes`, i.e. "1 of 5" through "5 of 5" on `/letter`).
