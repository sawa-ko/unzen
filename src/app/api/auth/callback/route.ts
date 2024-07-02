import { SessionClientDocument } from "@/lib/constants/apollo/cache-queries";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import {
	CreateSessionDocument,
	type Mutation,
	SessionDocument,
	type SessionQuery,
} from "@/lib/graphql/apollo";
import { type NextRequest, NextResponse } from "next/server";

const url = process.env.NEXT_PUBLIC_URL ?? "https://dbots.fun";

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get("code");

	if (!code) {
		return NextResponse.redirect(
			`${url}/?e=${encodeURIComponent("No code provided from Discord")}`,
		);
	}

	const { data: auth } = await apolloClient.mutate<Mutation>({
		mutation: CreateSessionDocument,
		variables: {
			input: {
				code,
			},
		},
		errorPolicy: "ignore",
	});

	if (!auth || !auth.createSession.access_token) {
		return NextResponse.redirect(
			`${url}/?e=${encodeURIComponent("No access_token provided from Discord")}`,
		);
	}

	const expiresSession = new Date();
	expiresSession.setSeconds(
		expiresSession.getSeconds() + auth.createSession.expires_in,
	);

	const userInfo = await apolloClient.query<SessionQuery>({
		query: SessionDocument,
		fetchPolicy: "no-cache",
		context: {
			headers: {
				authorization: `Bearer ${auth.createSession.access_token}`,
			},
		},
	});

	apolloClient.writeQuery({
		query: SessionClientDocument,
		data: {
			me: {
				token: auth.createSession.access_token,
				token_expires: expiresSession.getTime(),
				id: userInfo.data.me.id,
				username: userInfo.data.me.username,
				avatar: userInfo.data.me.avatar,
				permissions: userInfo.data.me.permissions,
			},
		},
		variables: {
			token: auth.createSession.access_token,
		},
	});

	const response = NextResponse.redirect(url);

	response.cookies.set("session", auth.createSession.access_token, {
		path: "/",
		secure: false,
		httpOnly: false,
		expires: expiresSession,
	});

	return response;
}
