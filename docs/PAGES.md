# Page-by-Page Spec

Route chain: `/` → `/wishes` → `/gift` → `/poetry` → `/reasons` → `/letter`
Every interior page ends in a `Continue →` link to the next route in the chain,
label varies per page (not a generic repeated string).

**Dark mode, site-wide, no toggle.** See `docs/DESIGN_RULES.md` for the
updated color tokens. **Night motif (faint star-speck field) is also now
site-wide** — originally locked to Home + Letter only, extended once dark
mode became the only mode. Every "Motif" line below should be read with
that in mind even where it isn't restated per page.

---

## `/` — Home

**Status:** copy locked (hero title/subtitle use her name + one line, see
`content.ts`)
**Layout:** full viewport, centered, nothing else — restraint on purpose
**Interaction:** 3D envelope/seal (Phase 8, `src/components/three/`),
replaces the earlier flat CSS envelope — click/tap opens it, transitions to
"Begin →" into `/wishes`. Reduced-motion fallback: the original flat CSS
envelope.
**Motif on this page:** night motif allowed here (faint star-speck corners,
static or 60s+ drift) — this runs alongside the 3D piece since it's static,
not competing motion; see the 3D rules in `docs/DESIGN_RULES.md` for what
counts against the one-motion budget

## `/wishes` — Wishes

**Status:** copy done — 5 wish cards, see `content.ts`
**Layout:** eyebrow + H2, then stacked wish cards
**Interaction:** GSAP stagger reveal on scroll into view
**Motif:** none beyond base grain — this page is content-led, not effect-led

## `/gift` — Your Gift

**Status:** template only, blocked on real gift decision — see CLAUDE.md
blockers
**Layout:** two-column desktop (photo left, title+text right), stacked mobile
**Interaction:** 3D ribbon-unwrap box (Phase 8) — photo/description hidden
inside a 3D box until the ribbon is pulled/clicked. Reduced-motion fallback:
the original flat CSS ribbon-unwrap.
**Motif:** the 3D unwrap is the only effect on this page — no additional
glow/texture layered on top

## `/poetry` — Poetry

**Status:** mine to write, one long poem (not multiple short ones — layout
reflects this)
**Layout:** single continuous typographic block, generous stanza spacing —
not stacked cards
**Interaction:** 3D unfurling scroll (Phase 8) — the poem reveals as a
scroll unrolls, rather than being visible on load. Reduced-motion fallback:
static text block, no unfurl animation.
**Motif:** the 3D unfurl replaces the earlier candlelight-glow plan — don't
run both, per the one-motion-budget rule

## `/reasons` — "Reasons I'm Not Letting You Go"

**Status:** title locked, content mine to write
**Layout:** single-column list (not a 2-col grid) — each row is a rotating
flower-in-glass motif on one side, number + text on the other
**Interaction:** cards bloom in on scroll as before; **every** card also
gets the 3D flower-in-glass motif, spinning continuously. This was
originally planned as one card only, but was deliberately changed to every
card during Phase 8 — a flagged, confirmed override of the one-motion
restraint rule (see `docs/DESIGN_RULES.md`). Reduced-motion fallback: no
3D motif, cards keep the plain 2D bloom-in.
**Motif:** every card's flower-in-glass spin runs continuously and
simultaneously — the deliberate exception to the one-moving-element rule

## `/letter` — Letter

**Status:** copy done, see `content.ts` — pending my own edits before final
**Layout:** plain, generous whitespace, closing paragraph + signature
**Interaction:** after content, "You've seen it all — look around ↓" line
triggers the nav fade-in. **Phase 8 addition:** one 3D letter-opening
moment, placement TBD during that phase (candidates: before the closing
text is revealed, or as the trigger for the nav fade-in itself — decide
based on what actually reads well once built, don't force it into a slot
that doesn't fit). Reduced-motion fallback: no 3D, page reads exactly as
the plain version below.
**Motif:** ~~deliberately untouched~~ — **this was overridden.** Original
intent was zero glow/texture/motion here, "the stillness is the point."
That's no longer true once the 3D moment ships — recorded in
`docs/DESIGN_RULES.md` under "3D Elements" with the reasoning. Everything
*besides* the one 3D moment stays plain — don't let this turn into
permission to add glow/grain/music emphasis back in too.

---

## Progress Indicator

Bloom-shaped dots (not plain dots), bottom of every interior page. Current
page filled, rest outlined. 5 dots total (Home doesn't count toward the
chain — dots start on `/wishes`, i.e. "1 of 5" through "5 of 5" on `/letter`).
