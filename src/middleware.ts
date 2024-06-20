import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { authKey } from "./constants/authKey";
import { getToken, getUserInfo } from "./services/auth.services";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Retrieve the token from cookies
  const token = cookies().get(authKey)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile",
    "/report-lost-item",
    "/report-found-item",
    "/lost-items/:path*",
    "/found-items/:path*",
    "/lost-item/:path*",
  ],
};
