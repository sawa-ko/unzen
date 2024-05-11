import type { QueryHookOptions } from "@apollo/client";
import useSessionStore from "../stores/session";
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
		onCompleted: (data) =>
			useSessionStore.setState({
				data,
				loading: false,
			}),
		onError: () =>
			useSessionStore.setState({
				data: undefined,
				loading: false,
			}),
	});
}
