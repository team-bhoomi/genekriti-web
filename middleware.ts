import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request: NextRequest) {
  const pathname = request.url.split(":3000")[1];
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuthed = await isAuthenticated();
  if (!isAuthed) {
    return NextResponse.redirect("http://localhost:3000");
  }
}
export const config = {
  matcher: [
    "/attendees",
    "/dashboard",
    "/events",
    "/events/:path*",
    "/events/create",
    "/events/edit",
    "/market-place",
    "/market-place/:path*",
    "/market-place/sell",
    "/profile",
    "/quiz",
    "/quiz/:path*",
    "/rekriti",
    "/rekriti/ask",
    "/rekriti/video",
    "/onboard",
    "/onboard/org",
  ],
};
