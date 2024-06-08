"use client";

import HomeBots from "@/components/modules/home/bots";
import HomeSearch from "@/components/modules/home/search";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Flex } from "@/styled-system/jsx";
import { setCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
	const query = useSearchParams();
	const cookie = query.get("cookie");
	const expires = Number(query.get("expires"));

	useEffect(() => {
		if (cookie && expires) {
			setCookie("session", cookie, {
				path: "/",
				secure: false,
				httpOnly: false,
				expires: new Date(Date.now() + expires),
			});
		}
	}, [cookie, expires]);

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
