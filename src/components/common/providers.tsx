"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	const apolloClient = new ApolloClient({
		uri: process.env.NEXT_PUBLIC_API_URL,
		cache: new InMemoryCache(),
	});
	return (
		<NextUIProvider navigate={router.push}>
			<ApolloProvider client={apolloClient}>{children}</ApolloProvider>
			<Toaster theme="dark" richColors closeButton />
		</NextUIProvider>
	);
}
