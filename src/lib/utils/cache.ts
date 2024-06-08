import type { ApolloCache } from "@apollo/client";

export function removeFromCache(
	// biome-ignore lint/suspicious/noExplicitAny: idk man
	cache: ApolloCache<any>,
	options: Record<string, string>,
) {
	const normalizedId = cache.identify(options);
	cache.evict({ id: normalizedId });
	cache.gc();
}
