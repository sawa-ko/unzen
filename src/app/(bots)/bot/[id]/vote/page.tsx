"use client";

import CertifiedBadge from "@/components/shared/bot/certified-badge";
import Login from "@/components/shared/feedback/login";
import Spinner from "@/components/shared/feedback/spinner";
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert";
import { Button, LinkButton, buttonIcon } from "@/components/ui/button";
import { ErrorText } from "@/components/ui/error-text";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { box } from "@/components/ui/styles/box";
import { popUpAnimation } from "@/lib/constants/animations";
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
import {
	ArrowLeftIcon,
	ClockIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
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
		fetchPolicy: "network-only",
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

	const hasVoted = canVote?.canVote.expires;
	const loading = canVoteLoading ?? gettingAuth;

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
				<AnimatePresence>
					{hasVoted && (
						<motion.div
							variants={popUpAnimation}
							animate="enter"
							initial="initial"
							exit="exit"
						>
							<Alert>
								<AlertIcon>
									<ClockIcon />
								</AlertIcon>
								<AlertContent>
									<AlertTitle>
										Your vote on {getBot.name} is registered!
									</AlertTitle>
									<AlertDescription>
										You will be able to vote again tomorrow!
									</AlertDescription>
								</AlertContent>
							</Alert>
						</motion.div>
					)}
				</AnimatePresence>
				<Box className={box}>
					<Flex alignItems={"center"} justifyContent={"space-between"}>
						<Flex alignItems={"center"} gap={3}>
							<Image
								alt="bot avatar"
								width={200}
								height={200}
								src={getAvatar(getBot.id, getBot.avatar)}
								className={css({ rounded: "xl", w: 14, h: 14 })}
							/>
							<Flex alignItems={"center"} gap={1}>
								<Heading size="2xl">{getBot.name}</Heading>
								{getBot.certified && <CertifiedBadge />}
							</Flex>
						</Flex>
						{loading ? (
							<Spinner />
						) : hasVoted ? (
							<ErrorText>Come back tomorrow</ErrorText>
						) : auth ? (
							<Button
								disabled={votingBot}
								onClick={() =>
									voteBot({ variables: { input: { id: params.id } } })
								}
							>
								Vote
							</Button>
						) : (
							<Login>Login to vote</Login>
						)}
					</Flex>
				</Box>
				<LinkButton href={`/bot/${getBot.id}`} mx="auto" size="sm" color="gray">
					<ArrowLeftIcon className={buttonIcon("left", 5)} />
					Return to {getBot.name}
				</LinkButton>
			</Flex>
		</Center>
	);
}
