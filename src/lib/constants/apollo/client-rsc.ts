import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";
import { cookies } from "next/headers";

// @ts-ignore - this is a global variable
// biome-ignore lint/complexity/useLiteralKeys: <explanation>
if (!globalThis["cache"]) {
	// @ts-ignore - this is a global variable
	// biome-ignore lint/complexity/useLiteralKeys: <explanation>
	globalThis["cache"] = new InMemoryCache();
}

export const { getClient } = registerApolloClient(() => {
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_API_URL,
	});

	const authLink = setContext((_, { headers }) => {
		const session = cookies().get("session");

		return {
			headers: {
				...headers,
				...(headers?.authorization
					? { authorization: headers.authorization }
					: session
						? { authorization: `Bearer ${session.value.toString()}` }
						: {}),
			},
		};
	});

	return new ApolloClient({
		// @ts-ignore - this is a global variable
		// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		cache: globalThis["cache"] as InMemoryCache,
		link: authLink.concat(httpLink),
		name: "client-rsc",
	});
});

export const apolloClient = getClient();
