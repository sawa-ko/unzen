import { create } from "zustand";
import type { SessionQuery } from "../types/apollo";

interface SessionStore {
	data?: SessionQuery;
}
const useSessionStore = create<SessionStore>(() => ({
	data: undefined,
}));

export default useSessionStore;
