import { icon } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import type { FrontBotsQuery } from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { ChartBarIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type BotCardProps = NonNullable<FrontBotsQuery["bots"]["nodes"]>[number];

export default function BotCard({
	id,
	name,
	avatar,
	votes,
	shortDescription,
	tags,
	guildCount,
}: BotCardProps) {
	return (
		<Link href={`/bot/${id}`}>
			<Box
				p={4}
				maxH={"4xl"}
				maxW={"lg"}
				bg={{
					base: "background.900",
				}}
				_active={{
					scale: 0.98,
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
						<Flex alignItems={"center"} display={"inline-flex"} gap={1}>
							<Text>{guildCount}</Text>
							<ChartBarIcon className={icon(4)} />
						</Flex>
						<Flex alignItems={"center"} gap={1}>
							<Text>{votes.totalCount}</Text>
							<ChevronUpIcon className={icon(4)} />
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</Link>
	);
}
