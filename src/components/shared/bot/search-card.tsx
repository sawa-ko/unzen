import { Box, Flex } from "@/styled-system/jsx";
import type { BotCardProps } from "./card";
import { box } from "@/components/ui/styles/box";
import Image from "@/components/ui/image";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Text } from "@/components/ui/text";

type BotSearchCardProps = Pick<
	BotCardProps,
	"id" | "avatar" | "name" | "shortDescription"
>;

export default function BotSearchCard({
	id,
	name,
	shortDescription,
	avatar,
}: BotSearchCardProps) {
	return (
		<Link href={`/bot/${id}`}>
			<Box
				className={css({
					p: 3,
					rounded: "xl",
					_hover: { bg: "background.700" },
					transitionDuration: "fast",
				})}
			>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Flex alignItems={"center"} gap={3}>
						<Image
							alt="bot avatar"
							src={getAvatar(id, avatar)}
							width={100}
							height={100}
							className={css({ rounded: "lg", w: "3.5em", h: "3.5em" })}
						/>
						<Flex flexDir={"column"}>
							<Heading size="lg">{name}</Heading>
							<Text size="sm" color="background.200">
								{shortDescription}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</Link>
	);
}
