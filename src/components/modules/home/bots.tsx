"use client";

import BotCard from "@/components/shared/bot/card";
import ErrorMessage from "@/components/shared/feedback/error";
import LineTitle from "@/components/shared/feedback/line-title";
import { useHomeBotsSuspenseQuery } from "@/lib/graphql/apollo";
import { Flex, Grid, GridItem } from "@/styled-system/jsx";

export default function HomeBots() {
	const {
		data: { mostBig, mostReviewed, mostVoted },
		error: frontBotsError,
	} = useHomeBotsSuspenseQuery();

	if (frontBotsError)
		return (
			<ErrorMessage>An error occurred while trying to get bots</ErrorMessage>
		);

	const nodesLength = [mostBig, mostReviewed, mostVoted].filter(
		(bot) => bot?.nodes?.length,
	).length;

	if (nodesLength === 0) return <ErrorMessage>No bots found</ErrorMessage>;

	return (
		<Flex my={5} gap={5} flexDir="column">
			<LineTitle>Most voted</LineTitle>
			<Grid gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
				{mostVoted.nodes?.map((bot) => (
					<GridItem key={bot.id}>
						<BotCard {...bot} />
					</GridItem>
				))}
			</Grid>
			<LineTitle>Most big</LineTitle>
			<Grid gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
				{mostBig.nodes?.map((bot) => (
					<GridItem key={bot.id}>
						<BotCard {...bot} />
					</GridItem>
				))}
			</Grid>
			<LineTitle>Most reviewed</LineTitle>
			<Grid gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
				{mostReviewed.nodes?.map((bot) => (
					<GridItem key={bot.id}>
						<BotCard {...bot} />
					</GridItem>
				))}
			</Grid>
		</Flex>
	);
}
