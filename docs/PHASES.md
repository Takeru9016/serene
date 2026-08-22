# Build Phases

Update this after every session (`/done` handles it automatically). Keep
CLAUDE.md's "Current Phase" pointer in sync with whatever is marked Active
here.

- [x] **Phase 0 — Setup**
  - [x] Next.js + Tailwind v4 scaffold
  - [x] `globals.css` design tokens from `DESIGN_RULES.md`
  - [x] Fonts loaded (Playfair Display, Jost, Dancing Script)
  - [x] `src/lib/content.ts` scaffolded with all locked copy

- [x] **Phase 1 — Shell**
  - [x] `layout.tsx` — conditional nav, audio element
  - [x] `template.tsx` — fade transition
  - [x] Progress indicator component (bloom dots)

- [x] **Phase 2 — `/`**
- [x] **Phase 3 — `/wishes`**
- [x] **Phase 4 — `/gift`** *(built with placeholder content + polaroid frame — real gift/photo still pending, see CLAUDE.md open blockers)*
- [x] **Phase 5 — `/poetry`** *(built with placeholder poem + slow-pulsing glow — real poem still pending, see CLAUDE.md open blockers)*
- [x] **Phase 6 — `/reasons`** *(built with placeholder numbered grid + bloom-in reveal — real reasons still pending, see CLAUDE.md open blockers)*
- [x] **Phase 7 — `/letter`**

- [x] **Phase 8 — 3D Elements** *(replanned mid-project to use
      `@json-render/core` + `@json-render/react-three-fiber` (JSON-spec-driven
      declarative rendering) instead of hand-coded react-three-fiber — see
      session notes. One 3D scene per page, each with its own custom catalog
      component owning a GSAP timeline for the one-shot choreographed moment.)*
  - [x] `@json-render/core`, `@json-render/react`,
        `@json-render/react-three-fiber`, `three`, `@react-three/fiber`,
        `@react-three/drei`, `gsap` installed
  - [x] Home — 3D envelope/seal, click to open + reduced-motion fallback
  - [x] Wishes — per-wish-card 3D motif (sprout/moon/hearts/spark/bloom),
        activates as each card scrolls into view + reduced-motion fallback
        *(added mid-session, beyond the original 5-scene scope)*
  - [x] Gift — 3D ribbon-unwrap box + reduced-motion fallback
  - [x] Poetry — 3D vertical unfurling scroll with the poem written on the
        parchment + reduced-motion fallback
  - [x] Reasons — rotating flower-in-glass motif on every card, motif on one
        side/text on the other + reduced-motion fallback *(continuous spin on
        all cards — a deliberate, flagged override of the one-moving-element
        restraint rule, confirmed by request)*
  - [x] Letter — 3D folded-letter unfold (new motif, distinct from the
        Envelope/RibbonBox hinge mechanics) + reduced-motion fallback
        *(overrides the original "stay plain" lock — see docs/DESIGN_RULES.md)*
  - [x] Every 3D component confirmed dynamically imported (`ssr: false`),
        not in the main bundle *(verified via `pnpm build` route/chunk output
        after every scene)*
  - [ ] Real mobile device test, not just desktop devtools throttling

- [ ] **Phase 9 — Polish** *(only after Phase 8 or a deliberate decision to
      stop adding 3D moments)*
  - [ ] Ambient grain + heading glow
  - [ ] Night motif on Home + Letter
  - [ ] Music toggle
  - [ ] Responsive pass, all pages
  - [ ] Page-turn transition upgrade (optional, 2D pages only)

- [ ] **Phase 10 — Domain & Access** *(last, right before sending the link)*
  - [ ] `GATE_PASSCODE` and `GATE_TOKEN` generated and set in Vercel
  - [ ] Password gate tested end-to-end (wrong code fails, right code
        persists across a refresh and across routes)
  - [ ] `serene.serostudio.co` added in Vercel, CNAME added at the DNS
        provider, cert issued and verified
  - [ ] `robots.ts` confirmed present and blocking crawling

- [ ] **Phase 11 — Dark Mode Retrofit** *(applied after Phases 0–10 were
      already complete — this is a retrofit pass on a finished site, not
      part of the original build order)*
  - [x] `globals.css` `@theme` tokens updated to the dark values in
        `docs/DESIGN_RULES.md`
  - [x] Every page manually reviewed for contrast/legibility — a token
        swap doesn't guarantee every component still reads correctly
        *(checked all 6 routes live in-browser via Playwright: Home,
        Wishes, Gift incl. unwrap, Poetry, Reasons, Letter incl. nav
        scroll-reveal — no contrast issues, no console errors)*
  - [x] `src/app/gate/page.tsx` inline style fallback hex values updated
        (these don't come from the CSS tokens, they're hardcoded fallbacks)
        *(checked — page has no hardcoded hex/inline style, uses token
        classes only, nothing to change)*
  - [x] Ambient grain overlay opacity re-checked by eye against the new
        dark background *(5% confirmed fine against #150C1C across all
        6 pages' screenshots, no change needed)*
  - [x] Night motif (stars) extended to Wishes, Gift, Poetry, Reasons — not
        just Home + Letter anymore
  - [x] All six 3D scenes reviewed individually: background/transparency,
        lighting intensity, and material visibility against the dark
        background *(built against the dark palette from the start —
        gold/violet accents, `lighten()` helper for surfaces that would
        otherwise vanish into `--color-bg`, verified live via Playwright
        screenshots for every scene)*
  - [ ] Real device check, not just desktop — dark UIs can reveal contrast
        issues on mobile screens that don't show up on a desktop monitor

---

**Active Task:** Phase 9 — Polish
**Last Completed:** Phase 8 — 3D Elements (all 6 scenes)
