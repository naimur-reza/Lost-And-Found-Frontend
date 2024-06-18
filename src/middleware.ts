import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getFromLocalStorage } from "./utils/local-storage";
import { authKey } from "./constants/authKey";
import { getUserInfo } from "./services/auth.services";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const { role } = getUserInfo() || {};

  const token = getFromLocalStorage(authKey);

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (role === "ADMIN" && pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:page*",
};
