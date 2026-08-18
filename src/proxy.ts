import { type NextRequest, NextResponse } from "next/server";

const GATE_COOKIE = "site-access";

export function proxy(request: NextRequest) {
  const token = request.cookies.get(GATE_COOKIE)?.value;

  if (token && token === process.env.GATE_TOKEN) {
    return NextResponse.next();
  }

  const gateUrl = new URL("/gate", request.url);
  gateUrl.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(gateUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|gate|api/gate).*)",
  ],
};
