import { makeClient } from "@/lib/constants/apollo-client";
import { CreateSessionDocument, type Mutation } from "@/lib/graphql/apollo";
import { setCookie } from "cookies-next";
import { type NextRequest, NextResponse } from "next/server";

const apolloClient = makeClient();

const quickRedirect = (endpoint: string, url: string) =>
	NextResponse.redirect(new URL(endpoint, url));

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get("code");

	const res = new NextResponse();

	if (!code)
		return quickRedirect(
			`/?e=${encodeURIComponent("No code provided from Discord")}`,
			req.url,
		);

	const { data: auth } = await apolloClient.mutate<Mutation>({
		mutation: CreateSessionDocument,
		variables: {
			input: {
				code,
			},
		},
		errorPolicy: "ignore",
	});

	if (!auth || !auth.createSession.access_token)
		return quickRedirect(
			`/?e=${encodeURIComponent("No access_token provided from Discord")}`,
			req.url,
		);

	setCookie("session", auth.createSession.access_token, {
		req,
		res,
		path: "/",
		secure: false,
		httpOnly: false,
		expires: new Date(Date.now() + auth.createSession.expires_in),
	});

	const finalResponse = quickRedirect("/", req.url);

	return finalResponse;
}
