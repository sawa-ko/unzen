"use client";

import BotCard from "@/components/shared/bot/card";
import ErrorMessage from "@/components/shared/feedback/error";
import { useFrontBotsSuspenseQuery } from "@/lib/graphql/apollo";
import { Grid, GridItem } from "@/styled-system/jsx";

export default function HomeBots() {
	const { data: frontBots, error: frontBotsError } =
		useFrontBotsSuspenseQuery();

	if (frontBotsError)
		return (
			<ErrorMessage>
				HomeBots: An error occurred while trying to get frontBots
			</ErrorMessage>
		);

	return (
		<Grid my={5} gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
			{frontBots.bots.nodes?.map((bot) => (
				<GridItem key={bot.id}>
					<BotCard {...bot} />
				</GridItem>
			))}
		</Grid>
	);
}
