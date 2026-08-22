# Phase 8 — 3D Elements

Paste into Claude Code once Phases 2–7 are each individually checked and
committed as working 2D pages. This phase layers 3D on top of a site that
already fully works — it does not replace the base build. If time runs
short mid-phase, stop and move to Phase 9 (Polish); every page still works
without its 3D moment.

This is a real scope increase, accepted knowingly — see
`docs/DESIGN_RULES.md` under "3D Elements" for the full reasoning,
including the Letter-page override. Don't re-litigate that decision here,
just build it well.

---

## Setup

1. Install `three`, `@react-three/fiber`, `@react-three/drei`
2. Confirm you understand the reduced-motion requirement before building
   any scene: every component below needs a `prefers-reduced-motion` check
   that renders the original 2D/CSS fallback instead of mounting the
   Canvas — build the fallback branch at the same time as the 3D version,
   not as an afterthought
3. Every 3D component goes in `src/components/three/`, one file per scene,
   and gets loaded into its page via `next/dynamic` with `ssr: false` and a
   loading state — never imported directly into a page's main bundle

## Build order — one scene at a time, checked before moving to the next

1. **Home** — 3D envelope/seal, replaces the flat CSS version currently on
   `/`. Click/tap opens it, same "Begin →" flow into `/wishes` after.
2. **Gift** — 3D ribbon-unwrap box, replaces the CSS ribbon interaction.
   Photo/description reveal on unwrap, same content source
   (`content.ts` `gift` export).
3. **Poetry** — 3D unfurling scroll. Poem text reveals as the scroll opens
   rather than being visible on load. This replaces the candlelight-glow
   plan — don't build both.
4. **Reasons** — one 3D card element, not the whole grid. Pick whichever
   reason (by position or content) reads best as a 3D moment once you see
   it in context — the rest of the grid keeps its existing 2D bloom-in.
5. **Letter** — 3D letter-opening moment. Placement is your call during
   this build (before the closing text reveals, or as the nav-fade-in
   trigger) — pick whichever actually reads well once built. This is the
   one page where the override matters most: keep everything *besides* the
   3D moment plain, don't let this become an excuse to add glow/grain/music
   emphasis back into this page too.

State a plan (component name, geometry approach, interaction, fallback
behavior) before writing each scene. Run `/check` after each one — don't
batch all five and check at the end.

## Before closing out this phase

- Test on an actual mobile device, not just desktop devtools throttling
- Confirm none of the five components appear in the initial page-load
  bundle for routes that don't use them (check the build output)
- Confirm `prefers-reduced-motion` genuinely swaps to the fallback on all
  five, not just renders a static frame of the 3D scene
