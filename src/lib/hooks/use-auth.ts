import type { QueryHookOptions } from "@apollo/client";
import {
	type SessionQuery,
	type SessionQueryVariables,
	useSessionQuery,
} from "../graphql/apollo";
import useAuthStore from "../stores/auth";

export function useAuth(
	baseOptions?: QueryHookOptions<SessionQuery, SessionQueryVariables>,
) {
	return useSessionQuery({
		...baseOptions,
		onCompleted: (data) =>
			useAuthStore.setState({
				data,
				loading: false,
			}),
		onError: () =>
			useAuthStore.setState({
				data: undefined,
				loading: false,
			}),
	});
}
