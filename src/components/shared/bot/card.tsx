import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import type { FrontBotsQuery } from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { IconCaretUpFilled } from "@tabler/icons-react";

type BotCardProps = NonNullable<FrontBotsQuery["bots"]["nodes"]>[number];

export default function BotCard({ id, name, avatar }: BotCardProps) {
	return (
		<Box
			p={4}
			maxH={64}
			maxW={"lg"}
			bg={{
				_hover: "gray.800",
				base: "gray.900",
			}}
			transitionDuration={"fast"}
			borderRadius={"xl"}
			borderWidth={1}
			borderColor={"gray.800"}
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
						<Heading>{name}</Heading>
					</Flex>
					<Badge variant="solid">
						1k <IconCaretUpFilled />
					</Badge>
				</Flex>
				<Text maxH={20} lineClamp={4} fontSize={"small"} color={"gray.300"}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quas
					ullam voluptate dolorum. Ad quisquam expedita saepe velit! Nam ut ex
					laboriosam harum omnis accusantium eos dolor repellendus mollitia
					iusto.
				</Text>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Text>1</Text>
					<Text>2</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
