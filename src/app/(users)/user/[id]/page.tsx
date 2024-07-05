import BotCard from "@/components/shared/bot/card";
import ErrorMessage from "@/components/shared/feedback/error";
import LineTitle from "@/components/shared/feedback/line-title";
import ImageBackground from "@/components/shared/layout/image-background";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import {
	GetUserDocument,
	type GetUserQuery,
	type GetUserQueryVariables,
} from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Box, Grid, GridItem, HStack, VStack } from "@/styled-system/jsx";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
	const {
		error,
		data: { getUser },
	} = await apolloClient.query<GetUserQuery, GetUserQueryVariables>({
		query: GetUserDocument,
		variables: {
			input: {
				id: params.id,
			},
		},
	});

	if (error) return notFound();

	const avatar = getAvatar(getUser.id, getUser.avatar);
	const banner = getUser?.banner ?? avatar;

	return (
		<React.Fragment>
			<ImageBackground image={banner} />
			<VStack w="full" alignItems={"start"}>
				<HStack>
					<Image
						alt="bot avatar"
						width={100}
						height={100}
						src={avatar}
						className={css({ rounded: "2xl" })}
					/>
					<VStack alignItems={"start"} gap={0}>
						<Heading size="4xl">{getUser.username}</Heading>
						<Box>badges</Box>
					</VStack>
				</HStack>
				<Text>{getUser.bio ?? "User has no bio"}</Text>
				<LineTitle>Bots</LineTitle>
				{getUser.bots.length > 0 ? (
					<Grid gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
						{getUser.bots.map((bot) => (
							<GridItem key={bot.id}>
								<BotCard {...bot} />
							</GridItem>
						))}
					</Grid>
				) : (
					<ErrorMessage>{getUser.username} has no visible bots</ErrorMessage>
				)}
			</VStack>
		</React.Fragment>
	);
}
