"use client";

import CertifiedBadge from "@/components/shared/bot/certified-badge";
import Spinner from "@/components/shared/feedback/spinner";
import { Alert, AlertIcon, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ErrorText } from "@/components/ui/error-text";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { box } from "@/components/ui/styles/box";
import {
	useCanVoteLazyQuery,
	useCreateVoteMutation,
	useSingleBotVoteSuspenseQuery,
} from "@/lib/graphql/apollo";
import useAuthStore from "@/lib/stores/auth";
import { getAvatar } from "@/lib/utils/discord";
import { handleError } from "@/lib/utils/format";
import { css } from "@/styled-system/css";
import { Box, Center, Flex } from "@/styled-system/jsx";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: { id: string } }) {
	const { data: auth, loading: gettingAuth } = useAuthStore();
	const {
		data: { getBot },
		error,
		refetch: refetchBot,
	} = useSingleBotVoteSuspenseQuery({
		variables: {
			input: {
				id: params.id,
			},
		},
		errorPolicy: "ignore",
	});
	const [
		executeCanVoteQuery,
		{ data: canVote, loading: canVoteLoading, refetch: refetchCanVote },
	] = useCanVoteLazyQuery({
		errorPolicy: "ignore",
	});

	const [voteBot, { loading: votingBot }] = useCreateVoteMutation({
		onError: handleError,
		onCompleted: () => {
			refetchBot();
			if (auth) refetchCanVote({ input: { id: params.id } });
			toast.success("Successfully voted!");
		},
	});

	if (error) return notFound();

	// biome-ignore lint/correctness/useExhaustiveDependencies: no
	useEffect(() => {
		if (auth) executeCanVoteQuery({ variables: { input: { id: params.id } } });
	}, [auth]);

	return (
		<Center>
			<Flex w="full" maxW={"md"} flexDir={"column"} gap={3}>
				<Alert>
					<AlertIcon>
						<InformationCircleIcon />
					</AlertIcon>
					<AlertTitle>This page is work-in-progress</AlertTitle>
				</Alert>
				<Box className={box}>
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
						{canVoteLoading || gettingAuth ? (
							<Spinner />
						) : canVote?.canVote.canVote ? (
							<Button
								disabled={votingBot}
								onClick={() =>
									voteBot({ variables: { input: { id: params.id } } })
								}
							>
								Vote
							</Button>
						) : canVote?.canVote.expires ? (
							<ErrorText>Hold up buddy</ErrorText>
						) : (
							<Button>Login</Button>
						)}
					</Flex>
				</Box>
			</Flex>
		</Center>
	);
}
