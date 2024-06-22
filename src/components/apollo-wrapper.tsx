"use client";

import { makeClientSide } from "@/lib/constants/apollo/client-side";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import type React from "react";

interface ApolloWrapperProps {
	children: React.ReactNode;
	token?: string;
}

export function ApolloWrapper({ children, token }: ApolloWrapperProps) {
	return (
		<ApolloNextAppProvider makeClient={() => makeClientSide(token)}>
			{children}
		</ApolloNextAppProvider>
	);
}
