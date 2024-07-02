import UserMenuOptions from "@/components/shared/layout/auth/user-menu-options";
import { SessionClientDocument } from "@/lib/constants/apollo/cache-queries";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import type { SessionQuery } from "@/lib/graphql/apollo";
import { cookies } from "next/headers";
import Login from "../../feedback/login";

export default function AuthUser() {
	const auth = apolloClient.readQuery<SessionQuery>({
		query: SessionClientDocument,
		id: cookies().get("session")?.value,
	});

	if (!auth) {
		return <Login size="sm">Login</Login>;
	}

	return <UserMenuOptions auth={auth} />;
}
