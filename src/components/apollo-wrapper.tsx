"use client";

import { makeClient } from "@/lib/constants/apollo-client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import type React from "react";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
