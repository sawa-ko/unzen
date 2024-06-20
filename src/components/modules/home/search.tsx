"use client";

import BotSearchCard from "@/components/shared/bot/search-card";
import ErrorMessage from "@/components/shared/feedback/error";
import LineTitle from "@/components/shared/feedback/line-title";
import { Input } from "@/components/ui/input";
import { box } from "@/components/ui/styles/box";
import { Text } from "@/components/ui/text";
import { fadeInFromTopExitBottom } from "@/lib/constants/animations";
import { useSearchBotsQuery } from "@/lib/graphql/apollo";
import { css, cx } from "@/styled-system/css";
import { Center, Flex, Grid, GridItem } from "@/styled-system/jsx";
import { useOutsideClick } from "@chakra-ui/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type ChangeEvent } from "react";

export default function HomeSearch({ isNav = false }: { isNav?: boolean }) {
	const searchRef = useRef<HTMLDivElement>(null);
	const [query, setQuery] = useState<string | null>(null);
	const [active, setActive] = useState<boolean>(false);

	const {
		data: results,
		loading,
		error,
		refetch,
	} = useSearchBotsQuery({
		variables: {
			pagination: {
				size: 4,
			},
		},
	});

	useOutsideClick({
		ref: searchRef,
		handler: () => setActive(false),
	});

	useEffect(() => {
		if (query?.length === 0) setQuery(null);
	}, [query]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: stfu
	useEffect(() => {
		refetch({
			input: {
				query: query ?? undefined,
			},
		});
	}, [query]);
	return (
		<Flex
			flexDir={"column"}
			alignItems={isNav ? "end" : "initial"}
			gap={2}
			pos={isNav ? "initial" : "relative"}
		>
			<Input
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setQuery(e.target.value)
				}
				onFocus={() => setActive(true)}
				onBlur={() => setActive(false)}
				ref={searchRef}
				placeholder={"Search bots..."}
			/>
			<AnimatePresence>
				{active && (
					<motion.div
						variants={fadeInFromTopExitBottom}
						initial="initial"
						animate="enter"
						exit="exit"
						className={cx(
							box,
							css({ pos: "absolute", mt: 12, w: isNav ? "1/3" : "full" }),
						)}
					>
						<LineTitle>Search bots</LineTitle>
						{error && (
							<ErrorMessage>
								An error occurred while searching bots...
							</ErrorMessage>
						)}
						{loading && (
							<Center>
								<Text>Loading...</Text>
							</Center>
						)}
						{results?.bots.nodes?.length ? (
							<Grid gridTemplateRows={1} gap={2} mt={3}>
								{results?.bots.nodes?.map((bot) => (
									<GridItem key={bot.id}>
										<BotSearchCard {...bot} />
									</GridItem>
								))}
							</Grid>
						) : (
							<ErrorMessage>No search results</ErrorMessage>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</Flex>
	);
}
