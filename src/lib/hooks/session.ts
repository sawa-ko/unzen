import type { QueryHookOptions } from "@apollo/client";
import {
	type SessionQuery,
	type SessionQueryVariables,
	useSessionQuery,
} from "../types/apollo";

export function useSession(
	baseOptions?: QueryHookOptions<SessionQuery, SessionQueryVariables>,
) {
	return useSessionQuery({
		fetchPolicy: "network-only",
		pollInterval: 15_000,
		initialFetchPolicy: "no-cache",
		...baseOptions,
	});
}
