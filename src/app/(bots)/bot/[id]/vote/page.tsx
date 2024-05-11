"use client";

import BotVoteButton from "@/components/modules/bot/vote/button";
import BotVoteSuccess from "@/components/modules/bot/vote/success";
import useSessionStore from "@/lib/stores/session";
import { useSingleBotVoteQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { IconArrowLeft, IconArrowUp, IconServer } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
	const { data: auth, loading: loadingSession } = useSessionStore();
	const { data, loading } = useSingleBotVoteQuery({
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

	const canVote = (auth && data?.canVote?.canVote) ?? false;

	if (!data?.getBot && !loading) return notFound();
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-[70vh]">
			<BotVoteSuccess name={data?.getBot.name} canVote={canVote} />
			<div className="lg:max-w-2xl w-full bg-content1 p-4 rounded-large flex flex-col lg:flex-row justify-between gap-2 lg:items-center">
				<div className="flex items-center gap-4 lg:w-min w-full">
					<Avatar
						src={parseAvatar(data?.getBot.avatar, data?.getBot.id!)}
						radius="lg"
						className="w-20 h-20"
					/>
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">{data?.getBot.name}</h1>
						<div className="flex gap-3 items-center text-sm text-default-600">
							<div className="flex items-center gap-1">
								<IconArrowUp className="w-4 h-4" />
								{data?.getBot.votes.totalCount}
							</div>
							<div className="flex items-center gap-1">
								<IconServer className="w-4 h-4" />
								{data?.getBot.guildCount}
							</div>
						</div>
					</div>
				</div>
				<BotVoteButton
					data={auth}
					loading={loadingSession}
					id={data?.getBot.id!}
					canVote={canVote}
				/>
			</div>
			<Button
				as={Link}
				href={`/bot/${data?.getBot.id}`}
				size="sm"
				startContent={<IconArrowLeft className="w-5 h-5" />}
			>
				Return to {data?.getBot.name}
			</Button>
		</div>
	);
}
