"use client";

import BotTabsMain from "@/components/modules/bots/tabs/main";
import CertifiedBadge from "@/components/shared/bot/certified-badge";
import LineTitle from "@/components/shared/feedback/line-title";
import { Badge } from "@/components/ui/badge";
import { Button, LinkButton, buttonIcon } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { useSingleBotSuspenseQuery } from "@/lib/graphql/apollo";
import useAuthStore from "@/lib/stores/auth";
import { getAvatar } from "@/lib/utils/discord";
import { formatDateSince } from "@/lib/utils/format";
import { css } from "@/styled-system/css";
import { Box, Divider, Flex } from "@/styled-system/jsx";
import { CalendarIcon } from "@heroicons/react/16/solid";
import {
	ChartBarIcon,
	ChevronUpIcon,
	PlusIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: { id: string } }) {
	const { data: auth } = useAuthStore();
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

	const userIsOwner = !!getBot.owners.find((o) => o.id === auth?.me.id);

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
						<PlusIcon className={buttonIcon("right")} />
					</Button>
					<LinkButton href={`/bot/${getBot.id}/vote`} size="lg">
						Vote
						<ChevronUpIcon className={buttonIcon("right")} />
					</LinkButton>
				</Flex>
			</Flex>
			<Flex mt={5} h="full" gap={3} color={"background.400"}>
				<Flex alignItems={"center"}>
					<CalendarIcon className={buttonIcon("left", 5)} />
					<Text>Submitted {formatDateSince(getBot.createdAt)}</Text>
				</Flex>
				<Divider
					h="auto"
					borderColor={"background.500"}
					orientation={"vertical"}
				/>
				<Flex alignItems={"center"}>
					<ChartBarIcon className={buttonIcon("left", 5)} />
					<Text>{getBot.guildCount} guilds</Text>
				</Flex>
				<Divider
					h="auto"
					borderColor={"background.500"}
					orientation={"vertical"}
				/>
				<Flex alignItems={"center"}>
					<ChevronUpIcon className={buttonIcon("left", 5)} />
					<Text>{getBot.votes.totalCount} votes</Text>
				</Flex>
			</Flex>
			<Divider borderColor={"background.700"} my={5} />
			<Text>{getBot.shortDescription}</Text>
			<Flex w={"full"} gap={5} mt={5}>
				<BotTabsMain userCanManage={userIsOwner} {...getBot} />
				<Box w={"2/6"} bg={"background.900"} p={5} borderRadius={"xl"}>
					<Flex flexDir={"column"} gap={5}>
						<Flex flexDir={"column"} gap={2}>
							<LineTitle>About</LineTitle>
							<Flex justifyContent={"space-between"} alignItems={"center"}>
								<Text fontWeight={500}>Prefix</Text>
								<Badge size="md">{getBot.prefix ?? "Slash commands"}</Badge>
							</Flex>
							<Flex justifyContent={"space-between"} alignItems={"center"}>
								<Text fontWeight={500}>Guilds</Text>
								<Badge size="md">{getBot.guildCount ?? 0}</Badge>
							</Flex>
							<Flex justifyContent={"space-between"} alignItems={"center"}>
								<Text fontWeight={500}>Votes</Text>
								<Badge size="md">{getBot.votes.totalCount ?? 0}</Badge>
							</Flex>
							<LineTitle>Owners</LineTitle>
							<Flex flexDir={"column"} gap={2}>
								{getBot.owners.map((owner) => (
									<Flex
										key={owner.id}
										justifyContent={"space-between"}
										alignItems={"center"}
									>
										<Link href={`/user/${owner.id}`}>
											<Text fontWeight={500}>{owner.username}</Text>
										</Link>
										<Badge size="md">
											<pre>{owner.id}</pre>
										</Badge>
									</Flex>
								))}
							</Flex>
							<LineTitle>Tags</LineTitle>
							<Flex flexWrap={"wrap"} gap={1}>
								{getBot.tags.map((tag) => (
									<Badge key={tag.id}>{tag.displayName}</Badge>
								))}
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
}
