import BotTabsMain from "@/components/modules/bots/tabs/main";
import CertifiedBadge from "@/components/shared/bot/certified-badge";
import LineTitle from "@/components/shared/feedback/line-title";
import ImageBackground from "@/components/shared/layout/image-background";
import {
	Alert,
	AlertIcon,
	AlertContent,
	AlertTitle,
	AlertDescription,
} from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { buttonIcon } from "@/components/ui/button-icon";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { SessionClientDocument } from "@/lib/constants/apollo/cache-queries";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import {
	BotStatus,
	type SessionQuery,
	SingleBotDocument,
	type SingleBotQuery,
} from "@/lib/graphql/apollo";
import { getAvatar, getDefaultInvite } from "@/lib/utils/discord";
import { formatDateSince } from "@/lib/utils/format";
import { css } from "@/styled-system/css";
import { Box, Divider, Flex } from "@/styled-system/jsx";
import { CalendarIcon } from "@heroicons/react/16/solid";
import {
	ChartBarIcon,
	ChevronUpIcon,
	ExclamationTriangleIcon,
	PlusIcon,
} from "@heroicons/react/24/solid";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: string } }) {
	const auth = apolloClient.readQuery<SessionQuery>({
		query: SessionClientDocument,
		id: cookies().get("session")?.value,
	});

	const {
		data: { getBot },
		error,
	} = await apolloClient.query<SingleBotQuery>({
		query: SingleBotDocument,
		variables: {
			input: {
				id: params.id,
			},
		},
	});

	if (error) return notFound();

	const userIsOwner = !!getBot.owners.find((o) => o.id === auth?.me.id);
	const hasAnyLink =
		!!getBot.website ?? !!getBot.github ?? !!getBot.supportServer;
	const avatar = getAvatar(getBot.id, getBot.avatar);
	const banner = getBot.banner ?? avatar;

	return (
		<React.Fragment>
			<ImageBackground image={banner} />
			{getBot.status !== BotStatus.Approved && (
				<Alert mb={4}>
					<AlertIcon>
						<ExclamationTriangleIcon />
					</AlertIcon>
					<AlertContent>
						<AlertTitle>Note</AlertTitle>
						<AlertDescription>
							This bot is {getBot.status} and only you and the reviewers are
							able to see this page
						</AlertDescription>
					</AlertContent>
				</Alert>
			)}
			<Flex flexDir={"column"}>
				<Flex
					flexDir={{ lg: "row", base: "column" }}
					justifyContent={"space-between"}
					alignItems={"center"}
					gap={2}
				>
					<Flex
						flexDir={{ lg: "row", base: "column" }}
						alignItems={"center"}
						gap={3}
					>
						<Image
							alt="bot avatar"
							width={100}
							height={100}
							src={avatar}
							className={css({ rounded: "2xl" })}
						/>
						<Flex alignItems={"center"} gap={1}>
							<Heading size="4xl">{getBot.name}</Heading>
							{getBot.certified && <CertifiedBadge />}
						</Flex>
					</Flex>
					<Flex
						w={{ lg: "fit", base: "full" }}
						gap={2}
						flexDir={{ lg: "row", base: "column" }}
					>
						<LinkButton
							w={"full"}
							referrerPolicy="no-referrer"
							target="_blank"
							href={getBot.inviteLink ?? getDefaultInvite(getBot.id)}
							size="lg"
							color={"gray"}
						>
							Invite
							<PlusIcon className={buttonIcon("right")} />
						</LinkButton>
						<LinkButton w={"full"} href={`/bot/${getBot.id}/vote`} size="lg">
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
				<Flex w={"full"} flexDir={{ lg: "row", base: "column" }} gap={5} mt={5}>
					<BotTabsMain userCanManage={userIsOwner} {...getBot} />
					<Box
						w={{ lg: "2/6", base: "full" }}
						bg={"background.900"}
						p={5}
						rounded={"xl"}
					>
						<Flex flexDir={"column"} gap={5}>
							<Flex flexDir={"column"} gap={2}>
								<LineTitle>About</LineTitle>
								<Flex justifyContent={"space-between"} alignItems={"center"}>
									<Text size={"sm"}>Prefix</Text>
									<Badge size="md">{getBot.prefix ?? "Slash commands"}</Badge>
								</Flex>
								<Flex justifyContent={"space-between"} alignItems={"center"}>
									<Text size={"sm"}>Guilds</Text>
									<Badge size="md">{getBot.guildCount ?? 0}</Badge>
								</Flex>
								<Flex justifyContent={"space-between"} alignItems={"center"}>
									<Text size={"sm"}>Votes</Text>
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
												<Text size={"sm"}>{owner.username}</Text>
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
								<LineTitle>Links</LineTitle>
								<Flex flexDir="column" gap={1}>
									{getBot.website && (
										<Link href={getBot.website}>
											<Text size={"sm"}>Website</Text>
										</Link>
									)}
									{getBot.github && (
										<Link href={getBot.github}>
											<Text size={"sm"}>Github</Text>
										</Link>
									)}
									{getBot.supportServer && (
										<Link href={getBot.supportServer}>
											<Text size={"sm"}>Support Server</Text>
										</Link>
									)}
									{!hasAnyLink && <Text>{getBot.name} has no links</Text>}
								</Flex>
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		</React.Fragment>
	);
}
