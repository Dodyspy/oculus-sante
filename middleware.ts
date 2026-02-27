import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS;

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Client Preview"',
    },
  });
}

export function middleware(req: NextRequest) {
  // If no auth credentials configured, skip auth
  if (!BASIC_AUTH_USER || !BASIC_AUTH_PASS) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get("authorization");
  if (!authHeader) return unauthorized();

  const [scheme, encoded] = authHeader.split(" ");
  if (scheme !== "Basic" || !encoded) return unauthorized();

  const decoded = Buffer.from(encoded, "base64").toString("utf-8");
  const [username, password] = decoded.split(":");

  if (username === BASIC_AUTH_USER && password === BASIC_AUTH_PASS) {
    return NextResponse.next();
  }

  return unauthorized();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
