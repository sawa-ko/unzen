import { defaultImage } from "../constants/website";
import type { AvatarSizes } from "../types/discord";

export function parseAvatar(
	avatar: string | null | undefined,
	id: string,
	size?: AvatarSizes,
) {
	return avatar
		? `https://cdn.discordapp.com/avatars/${id}/${avatar}?size=${size ?? 1024}`
		: defaultImage.src;
}
