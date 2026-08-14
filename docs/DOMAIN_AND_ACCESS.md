# Domain & Access

## Domain

`serene.serostudio.co` — subdomain of the existing `serostudio.co` domain.

### DNS setup

1. In Vercel: Project → Settings → Domains → add `serene.serostudio.co`
2. Vercel will give you a CNAME target (typically `cname.vercel-dns.com`,
   confirm the exact value it shows you — this can change)
3. In your DNS provider for `serostudio.co`, add:
   - Type: `CNAME`
   - Name/Host: `serene`
   - Value: whatever Vercel gave you in step 2
4. Wait for propagation (usually minutes, can take longer), Vercel will
   confirm once it's verified and auto-issues the SSL cert

## Why there's a password gate

Issuing an SSL cert for `serene.serostudio.co` makes the subdomain name
**publicly discoverable via Certificate Transparency logs** (searchable at
crt.sh), regardless of how obscure the name is. This is true for every
HTTPS site on the internet now, not a Vercel-specific issue. Since this
site's content is genuinely private, the subdomain being findable isn't
itself a big deal — but the content behind it shouldn't be readable by
whoever finds it. Hence the gate.

## How the gate works

- `src/middleware.ts` checks every request for a `site-access` cookie
  matching `GATE_TOKEN`. No match → redirect to `/gate`.
- `/gate` (`src/app/gate/page.tsx`) is a simple passcode form. On submit, it
  POSTs to `/api/gate`.
- `/api/gate` (`src/app/api/gate/route.ts`) checks the submitted passcode
  against `GATE_PASSCODE`. If it matches, it sets the `site-access` cookie
  to `GATE_TOKEN` (a separate, random secret — not the passcode itself) and
  the middleware lets subsequent requests through.
- `src/app/robots.ts` disallows all crawling as a second layer, independent
  of the gate.

**Two env vars required, both set in Vercel's dashboard, never committed:**
- `GATE_PASSCODE` — what she actually types (pick something she'll
  remember, e.g. a date or nickname — doesn't need to be complex, the gate
  isn't protecting against a targeted attacker)
- `GATE_TOKEN` — a long random string, generate with `openssl rand -hex 32`

This is intentionally lightweight — the threat model is "stop a stranger who
finds the subdomain from reading a private letter," not "protect financial
records." Don't over-engineer this past that.
