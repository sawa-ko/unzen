import type { Maybe } from "../graphql/apollo";

export function getAvatar(id: string, avatar?: Maybe<string>, size?: number) {
	return avatar
		? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=${size ?? 4096}`
		: "https://cdn.discordapp.com/embed/avatars/0.png";
}
