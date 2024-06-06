"use client";

import { makeClient } from "@/lib/constants/apollo-client";
import type { CommonProps } from "@/lib/types/common";
import { HttpLink } from "@apollo/client";
import {
	ApolloNextAppProvider,
	ApolloClient,
	InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: CommonProps) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
