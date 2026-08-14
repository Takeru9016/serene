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

- [ ] **Phase 2 — `/`**
- [ ] **Phase 3 — `/wishes`**
- [ ] **Phase 4 — `/gift`** *(blocked — see CLAUDE.md open blockers)*
- [ ] **Phase 5 — `/poetry`** *(blocked — copy pending)*
- [ ] **Phase 6 — `/reasons`** *(blocked — copy pending)*
- [ ] **Phase 7 — `/letter`**

- [ ] **Phase 8 — Polish** *(only after all pages above are checked)*
  - [ ] Ambient grain + heading glow
  - [ ] Night motif on Home + Letter
  - [ ] Music toggle
  - [ ] Responsive pass, all pages
  - [ ] Page-turn transition upgrade (optional)

- [ ] **Phase 9 — Domain & Access** *(last, right before sending the link)*
  - [ ] `GATE_PASSCODE` and `GATE_TOKEN` generated and set in Vercel
  - [ ] Password gate tested end-to-end (wrong code fails, right code
        persists across a refresh and across routes)
  - [ ] `serene.serostudio.co` added in Vercel, CNAME added at the DNS
        provider, cert issued and verified
  - [ ] `robots.ts` confirmed present and blocking crawling

---

**Active Task:** Phase 2 — `/`
**Last Completed:** Phase 1 — Shell
