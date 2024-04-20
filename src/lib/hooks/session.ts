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
		...baseOptions,
	});
}
