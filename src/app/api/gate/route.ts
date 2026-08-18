import { type NextRequest, NextResponse } from "next/server";

const GATE_COOKIE = "site-access";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export async function POST(request: NextRequest) {
  const gatePasscode = process.env.GATE_PASSCODE;
  const gateToken = process.env.GATE_TOKEN;

  if (!(gatePasscode && gateToken)) {
    throw new Error("GATE_PASSCODE and GATE_TOKEN must be set");
  }

  const { passcode } = (await request.json()) as { passcode?: string };

  if (passcode !== gatePasscode) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(GATE_COOKIE, gateToken, {
    httpOnly: true,
    maxAge: COOKIE_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
