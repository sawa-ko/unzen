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
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
					minima? Asperiores nostrum ratione atque saepe repellendus. Dicta,
					nostrum fugit culpa quo sint ducimus autem ab fuga, dolorem
					necessitatibus molestiae suscipit.
				</Text>
				<HomeSearch />
			</Flex>
			<HomeBots />
		</React.Fragment>
	);
}
