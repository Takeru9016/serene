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

- [x] **Phase 8 — Polish** *(only after all pages above are checked)*
  - [x] Ambient grain + heading glow
  - [x] Night motif on Home + Letter
  - [x] Music toggle *(layout.tsx placement confirmed correct; `public/audio/ambient.mp3` now present, build confirmed clean)*
  - [x] Responsive pass, all pages
  - [x] Restraint audit *(Home + Poetry now run 2 concurrent ambient elements — NightMotif/poem-glow plus the new heading glow — by explicit decision to apply heading glow site-wide; see session note)*
  - [x] Page-turn transition upgrade (optional)

- [ ] **Phase 9 — Domain & Access** *(last, right before sending the link)*
  - [x] Gate code built: `src/proxy.ts` (Next.js 16 renamed
        `middleware.ts`/`middleware()` to `proxy.ts`/`proxy()` — same
        cookie check + redirect to
        `/gate?from=<path>`), `src/app/gate/page.tsx` (passcode form),
        `src/app/api/gate/route.ts` (verifies passcode, sets `site-access`
        cookie), `src/app/robots.ts` (disallow all), `.env.example`
        (documents shape, no real values). `tsc --noEmit` and
        `ultracite check` both pass clean on these files.
  - [ ] `GATE_PASSCODE` and `GATE_TOKEN` generated and set in Vercel
  - [ ] Password gate tested end-to-end locally (`pnpm build` +
        `pnpm start` with real env vars — not yet run this session) and
        again after deploy (wrong code fails, right code persists across a
        refresh and across routes)
  - [ ] `serene.serostudio.co` added in Vercel, CNAME added at the DNS
        provider, cert issued and verified
  - [x] `robots.ts` confirmed present and blocking crawling

---

**Active Task:** Phase 9 — Domain & Access. Gate code is built and `/check`
passed (tsc clean, copy sourced from `content.ts`, no improvised colors, no
"I love you" string, no restraint-rule violations). Not yet verified: `/gate`
end-to-end in an actual browser (wrong-code/right-code/refresh/cross-route) —
`.env.local` now has test values, so restart `pnpm dev` and click through it.
`docs/PAGES.md` has no mobile-layout spec for `/gate` since it's outside the
story route chain — worth a manual mobile-width check but nothing to compare
against. Next after that: generate real `GATE_PASSCODE`/`GATE_TOKEN` and set
them in Vercel, then the `serene.serostudio.co` DNS/CNAME/cert steps — both
require the Vercel dashboard and DNS provider, not something to do from here.
**Last Completed:** Phase 9 gate code — `src/proxy.ts`, `/gate` page,
`/api/gate` route, `robots.ts`, `.env.example`, plus the `.gitignore` fix
(`.env*` was silently excluding `.env.example` from being committed at all).
