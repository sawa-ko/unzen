import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import type { FrontBotsQuery } from "@/lib/graphql/apollo";
import { getAvatar, getDefaultInvite } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { ChartBarIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

type BotCardProps = NonNullable<FrontBotsQuery["bots"]["nodes"]>[number];

export default function BotCard({
	id,
	name,
	avatar,
	votes,
	shortDescription,
	tags,
	guildCount,
	inviteLink,
}: BotCardProps) {
	return (
		<Box
			p={4}
			maxH={"4xl"}
			maxW={"lg"}
			bg={{
				// _hover: "background.800",
				base: "background.900",
			}}
			_hover={{
				scale: 1.03,
			}}
			transitionDuration={"fast"}
			borderRadius={"xl"}
			borderWidth={1}
			borderColor={"background.800"}
			h={"full"}
			cursor={"pointer"}
		>
			<Flex flexDir={"column"} gap={3}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Flex alignItems={"center"} gap={3}>
						<Image
							alt="bot avatar"
							src={getAvatar(id, avatar)}
							width={74}
							height={74}
							className={css({ borderRadius: "xl" })}
						/>
						<Flex flexDir={"column"}>
							<Heading size="lg">{name}</Heading>
							<Text lineClamp={1} fontSize={"small"} color={"background.300"}>
								{tags.map((tag) => tag.displayName).join(", ")}
							</Text>
						</Flex>
					</Flex>
					<Flex gap={1} flexDir="column">
						<Badge variant="subtle">
							{votes.totalCount} <ChevronUpIcon />
						</Badge>
						<Badge variant="subtle">
							{guildCount} <ChartBarIcon />
						</Badge>
					</Flex>
				</Flex>
				<Text
					maxH={16}
					h={16}
					lineClamp={4}
					fontSize={"small"}
					color={"background.300"}
				>
					{shortDescription}
				</Text>
				<Flex gap={2} justifyContent={"space-between"} alignItems={"center"}>
					<LinkButton
						referrerPolicy="no-referrer"
						target="_blank"
						href={inviteLink ?? getDefaultInvite(id)}
						w={"full"}
						color="gray"
					>
						Invite
					</LinkButton>
					<LinkButton href={`/bot/${id}`} w={"full"}>
						View
					</LinkButton>
				</Flex>
			</Flex>
		</Box>
	);
}
