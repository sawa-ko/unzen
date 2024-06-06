"use client";

import BotCard from "@/components/shared/bot/card";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useFrontBotsSuspenseQuery } from "@/lib/graphql/apollo";
import { Flex, Grid, GridItem } from "@/styled-system/jsx";
import React from "react";

export const dynamic = "force-dynamic";

export default function Page() {
	const { data: frontBots, error: frontBotsError } =
		useFrontBotsSuspenseQuery();

	return (
		<React.Fragment>
			<Flex flexDir={"column"} gap={3}>
				<Heading size="4xl">Search for bots</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
					minima? Asperiores nostrum ratione atque saepe repellendus. Dicta,
					nostrum fugit culpa quo sint ducimus autem ab fuga, dolorem
					necessitatibus molestiae suscipit.
				</Text>
				<Input placeholder={"Search bots..."} />
			</Flex>
			<Grid my={5} gridTemplateColumns={"4"}>
				{frontBots.bots.nodes?.map((bot) => (
					<GridItem key={bot.id}>
						<BotCard {...bot} />
					</GridItem>
				))}
			</Grid>
		</React.Fragment>
	);
}
