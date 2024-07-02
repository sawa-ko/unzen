import { type NextRequest, NextResponse } from "next/server";

export default function middleware(_: NextRequest) {
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
