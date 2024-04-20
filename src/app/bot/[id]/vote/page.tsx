"use client";

import ErrorMessage from "@/components/common/error-message";
import LoadingScreen from "@/components/common/layout/loading-screen";
import Loader from "@/components/common/loader";
import { useSession } from "@/lib/hooks/session";
import {
	useCanVoteQuery,
	useCreateVoteMutation,
	useSingleBotVoteSuspenseQuery,
} from "@/lib/types/apollo";
import { formatDate, handleError, parseAvatar } from "@/lib/utils/common";
import { fromTopToBottomSmooth } from "@/lib/utils/motion-styles";
import { Avatar, Button } from "@nextui-org/react";
import { IconArrowLeft, IconArrowUp, IconServer } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toast } from "sonner";

export default function Page({ params }: { params: { id: string } }) {
	const { data: auth, loading: gettingAuth } = useSession();
	const {
		data: { getBot: bot },
		error,
	} = useSingleBotVoteSuspenseQuery({
		variables: {
			input: {
				id: params.id,
			},
		},
	});

	const {
		data: voteData,
		loading: checking,
		refetch: refetchVoteCheck,
	} = useCanVoteQuery({
		variables: {
			input: {
				botId: bot.id,
			},
		},
	});

	const [createVote, { loading: voting }] = useCreateVoteMutation({
		onCompleted: () => {
			refetchVoteCheck();
			toast.success("Voted successfully ✨");
		},
		onError: handleError,
	});

	const canVote = voteData?.canVote.canVote ?? false;
	const expiry = voteData?.canVote.expires ?? Date.now();

	if (!bot) return <LoadingScreen />;
	if (error || !bot) return notFound();
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-[70vh]">
			{!checking && !canVote && (
				<motion.div
					initial="initial"
					animate="enter"
					variants={fromTopToBottomSmooth.variants}
					className="max-w-2xl w-full bg-content1 p-4 rounded-large flex flex-col"
				>
					<h1 className="text-xl font-bold">You did it! 🚀</h1>
					<p>Thanks for voting {bot.name}</p>
					<p className="text-xs mt-2 italic text-default-600">
						* Note: If {bot.name}'s owner has webhooks configured you{" "}
						<strong>may</strong> get vote rewards.
					</p>
				</motion.div>
			)}
			<div className="max-w-2xl w-full bg-content1 p-4 rounded-large flex justify-between items-center">
				<div className="flex items-center gap-4">
					<Avatar
						src={parseAvatar(bot.avatar, bot.id)}
						radius="lg"
						className="w-20 h-20"
					/>
					<div className="flex flex-col">
						<h1 className="text-3xl font-bold">{bot.name}</h1>
						<div className="flex gap-3 items-center text-sm text-default-600">
							<div className="flex items-center gap-1">
								<IconArrowUp className="w-4 h-4" />
								{bot.votes.totalCount}
							</div>
							<div className="flex items-center gap-1">
								<IconServer className="w-4 h-4" />
								{bot.guildCount}
							</div>
						</div>
					</div>
				</div>
				{checking ?? gettingAuth ? (
					<Loader />
				) : !auth ? (
					<ErrorMessage icon={null} message="You must login to vote" />
				) : !canVote ? (
					<ErrorMessage
						icon={null}
						message={`${formatDate(expiry - Date.now())} to vote again`}
					/>
				) : (
					<Button
						onClick={() =>
							createVote({ variables: { input: { botId: bot.id } } })
						}
						isLoading={voting}
						spinner={<Loader />}
						color="secondary"
					>
						Vote {bot.name}
					</Button>
				)}
			</div>
			<Button
				as={Link}
				href={`/bot/${bot.id}`}
				size="sm"
				startContent={<IconArrowLeft className="w-5 h-5" />}
			>
				Return to {bot.name}
			</Button>
		</div>
	);
}
