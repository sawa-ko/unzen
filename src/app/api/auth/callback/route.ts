import { makeClient } from "@/lib/constants/apollo-client";
import { CreateSessionDocument, type Mutation } from "@/lib/graphql/apollo";
import { type NextRequest, NextResponse } from "next/server";

const apolloClient = makeClient();
const url = process.env.NEXT_PUBLIC_URL ?? "https://dbots.fun";

const quickRedirect = (endpoint: string) =>
	NextResponse.redirect(new URL(endpoint, url));

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get("code");

	if (!code)
		return quickRedirect(
			`/?e=${encodeURIComponent("No code provided from Discord")}`,
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
		);

	const finalResponse = quickRedirect(
		`/auth/cookie?c=${encodeURIComponent(auth.createSession.access_token)}&e=${encodeURIComponent(auth.createSession.expires_in)}`,
	);

	return finalResponse;
}
