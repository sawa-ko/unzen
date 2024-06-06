import { create } from "zustand";
import type { SessionQuery } from "../graphql/apollo";

export interface AuthStore {
	data?: SessionQuery;
	loading?: boolean;
}

const useAuthStore = create<AuthStore>(() => ({
	data: undefined,
	loading: true,
}));

export default useAuthStore;
