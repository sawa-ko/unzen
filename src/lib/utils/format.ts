import type { ApolloError } from "@apollo/client";
import type { GraphQLError } from "graphql";
import { toast } from "sonner";

export function formatDateSince(dateStr: string): string {
	const now = new Date();
	const date = new Date(dateStr);
	const diffMs = now.getTime() - date.getTime();
	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

	if (diffDays === 0) return "Today";
	if (diffDays === 1) return "Yesterday";
	return `${diffDays} days ago`;
}

export function handleError(error: ApolloError) {
	const errorMessage = (e: GraphQLError) => e.message;

	return error.graphQLErrors
		? error.graphQLErrors.map((e) => toast.error(errorMessage(e)))
		: toast.error("Unknown error");
}
