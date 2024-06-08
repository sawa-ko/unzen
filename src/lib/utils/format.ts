import type { ApolloError } from "@apollo/client";
import type { GraphQLError } from "graphql";
import { toast } from "sonner";

export function formatDateSince(stringDate: string) {
	const diff = Date.now() - new Date(stringDate).getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	return days === 0 ? "today" : `${days} days ago`;
}

export function handleError(error: ApolloError) {
	const errorMessage = (error: GraphQLError) =>
		(error.extensions.originalError as { message?: string }).message ??
		error.message;

	return error.graphQLErrors.map((e) => toast.error(errorMessage(e)));
}
