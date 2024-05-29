import { apolloClient } from "@/lib/constants/apollo-client";
import {
	SingleBotDocument,
	type SingleBotQuery,
	type SingleBotQueryVariables,
} from "@/lib/types/apollo";
import type { DefaultProps } from "@/lib/types/common";
import { parseAvatar } from "@/lib/utils/common";
import type { Metadata } from "next";

interface Props {
	params: {
		id: string;
	};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = params;

	const {
		data: { getBot },
		error,
	} = await apolloClient.query<SingleBotQuery, SingleBotQueryVariables>({
		query: SingleBotDocument,
		variables: {
			input: {
				id: id,
			},
		},
	});

	if (error) return {};

	return {
		title: `${getBot.name} on dbots.fun | dbots.fun`,
		description: `Check ${getBot.name} on dbots.fun!`,
		openGraph: {
			images: [
				`/api/widgets/${getBot.id}?name=${getBot.name}&avatar=${parseAvatar(
					getBot.avatar,
					getBot.id,
				)}`,
			],
		},
	};
}

export default function BotLayout({ children }: DefaultProps) {
	return children;
}
