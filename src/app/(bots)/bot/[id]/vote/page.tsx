"use client";

import CertifiedBadge from "@/components/shared/bot/certified-badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { useSingleBotVoteSuspenseQuery } from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Box, Center, Flex } from "@/styled-system/jsx";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: { id: string } }) {
	const {
		data: { getBot, canVote },
		error,
	} = useSingleBotVoteSuspenseQuery({
		variables: {
			input: {
				id: params.id,
			},
			canVoteInput: {
				id: params.id,
			},
		},
		errorPolicy: "ignore",
	});

	// const [vote] = useVoteMutation();

	if (error) return notFound();

	return (
		<Center>
			<Box
				p={5}
				maxW={"md"}
				w={"full"}
				bg={"background.900"}
				borderRadius={"xl"}
			>
				<Flex alignItems={"center"} justifyContent={"space-between"}>
					<Flex alignItems={"center"} gap={3}>
						<Image
							alt="bot avatar"
							width={50}
							height={50}
							src={getAvatar(getBot.id, getBot.avatar)}
							className={css({ borderRadius: "full" })}
						/>
						<Flex alignItems={"center"} gap={1}>
							<Heading size="2xl">{getBot.name}</Heading>
							{getBot.certified && <CertifiedBadge />}
						</Flex>
					</Flex>
					{!canVote && <Button>Login to vote</Button>}
					{canVote && <Button>Vote</Button>}
					{canVote.expires && <Text>Wait to vote again</Text>}
				</Flex>
			</Box>
		</Center>
	);
}
