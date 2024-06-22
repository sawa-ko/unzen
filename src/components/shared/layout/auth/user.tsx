import { SessionDocument } from "@/app/api/auth/callback/route";
import UserMenuOptions from "@/components/shared/layout/auth/user-menu-options";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import type { SessionQuery } from "@/lib/graphql/apollo";
import Login from "../../feedback/login";

export default function AuthUser() {
	const auth = apolloClient.readQuery<SessionQuery>({
		query: SessionDocument,
	});

	if (!auth) {
		return <Login size="sm">Login</Login>;
	}

	return <UserMenuOptions auth={auth} />;
}
