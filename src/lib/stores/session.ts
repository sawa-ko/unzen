import { create } from "zustand";
import type { SessionQuery } from "../types/apollo";

interface SessionStore {
	data?: SessionQuery;
	loading?: boolean;
}
const useSessionStore = create<SessionStore>(() => ({
	data: undefined,
	loading: true,
}));

export default useSessionStore;
