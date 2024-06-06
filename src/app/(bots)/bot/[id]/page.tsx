"use client";

import BotTabsMain from "@/components/modules/bots/tabs/main";
import CertifiedBadge from "@/components/shared/bot/certified-badge";
import { Button, buttonIcon, icon } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { useSingleBotSuspenseQuery } from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { formatDateSince } from "@/lib/utils/format";
import { css } from "@/styled-system/css";
import { Box, Divider, Flex } from "@/styled-system/jsx";
import { CalendarIcon } from "@heroicons/react/16/solid";
import { ArrowUpCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: { id: string } }) {
	const {
		data: { getBot },
		error,
	} = useSingleBotSuspenseQuery({
		variables: {
			input: {
				id: params.id,
			},
		},
	});

	if (error) return notFound();

	return (
		<Flex flexDir={"column"}>
			<Flex justifyContent={"space-between"} alignItems={"center"}>
				<Flex alignItems={"center"} gap={3}>
					<Image
						alt="bot avatar"
						width={100}
						height={100}
						src={getAvatar(getBot.id, getBot.avatar)}
						className={css({ borderRadius: "full" })}
					/>
					<Flex alignItems={"center"} gap={1}>
						<Heading size="4xl">{getBot.name}</Heading>
						{getBot.certified && <CertifiedBadge />}
					</Flex>
				</Flex>
				<Flex gap={2}>
					<Button size="lg" color={"gray"}>
						Invite
						<PlusCircleIcon className={buttonIcon("right")} />
					</Button>
					<Button size="lg">
						Vote
						<ArrowUpCircleIcon className={buttonIcon("right")} />
					</Button>
				</Flex>
			</Flex>
			<Flex mt={5} color={"background.400"}>
				<CalendarIcon className={buttonIcon("left", 5)} />
				<Text>Submitted {formatDateSince(getBot.createdAt)}</Text>
			</Flex>
			<Divider borderColor={"background.700"} my={5} />
			<Flex w={"full"} gap={5}>
				<BotTabsMain {...getBot} />
				<Box
					w={"2/6"}
					bg={"background.900"}
					h={"screen"}
					p={5}
					borderRadius={"xl"}
				>
					<Text
						textTransform={"uppercase"}
						fontWeight={800}
						color={"background.300"}
					>
						About
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
}
