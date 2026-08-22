# Phase 10 — Domain & Access

Paste into Claude Code once Phase 9 (Polish) is checked and committed.
Infrastructure work, not page-building — happens last, right before you
send the link.

---

Wire up the password gate and confirm the domain is ready per
`docs/DOMAIN_AND_ACCESS.md`.

1. Confirm `src/middleware.ts`, `src/app/gate/page.tsx`,
   `src/app/api/gate/route.ts`, and `src/app/robots.ts` are all present and
   match `docs/DOMAIN_AND_ACCESS.md` — these were scaffolded already, this
   phase is about verifying and testing, not building from scratch
2. Confirm `.env.local` exists locally with real `GATE_PASSCODE` and
   `GATE_TOKEN` values (generate `GATE_TOKEN` with `openssl rand -hex 32`),
   and confirm `.env.local` is gitignored — never commit it
3. Test locally: wrong passcode fails and shows the error state, right
   passcode redirects to `/`, refreshing or navigating between pages doesn't
   re-trigger the gate
4. Remind me (don't do this yourself) to set `GATE_PASSCODE` and
   `GATE_TOKEN` in the Vercel dashboard's Environment Variables before the
   first production deploy — these can't be set from Claude Code
5. Remind me to add the `serene.serostudio.co` domain in Vercel and the
   CNAME record at the DNS provider — this is a manual dashboard step on my
   end, not something to script

State your plan, then run through the checklist. Report pass/fail per item,
same as `/check`.
