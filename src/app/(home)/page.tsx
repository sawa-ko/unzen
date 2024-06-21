import HomeBots from "@/components/modules/home/bots";
import HomeSearch from "@/components/modules/home/search";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Flex } from "@/styled-system/jsx";
import React from "react";

export default function Page() {
	return (
		<React.Fragment>
			<Flex flexDir={"column"} gap={3}>
				<Heading size="4xl">Search for bots</Heading>
				<Text>
					A new way to discover new Discord bots, dbots.fun is the brand-new
					Discord botlist!
				</Text>
				<HomeSearch />
			</Flex>
			<HomeBots />
		</React.Fragment>
	);
}
