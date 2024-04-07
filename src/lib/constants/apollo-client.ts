import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { parseCookies } from "nookies";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_API_URL,
	credentials: "include",
});

const authLink = setContext((_, { headers }) => {
	const { session } = parseCookies();

	return {
		headers: {
			...headers,
			Authorization: `Bearer ${session}`,
		},
	};
});

export const apolloClient = new ApolloClient({
	link: authLink.concat(errorLink.concat(httpLink)),
	cache: new InMemoryCache(),
});
