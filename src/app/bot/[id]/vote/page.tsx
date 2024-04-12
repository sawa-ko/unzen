"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import { useSingleBotVoteSuspenseQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar, Button } from "@nextui-org/react";
import { IconArrowLeft, IconArrowUp, IconChevronUp } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
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

	if (!bot) return <LoadingScreen />;
	if (error || !bot) return notFound();
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-[70vh]">
			<div className="max-w-2xl w-full bg-content1 p-5 rounded-large flex justify-between items-center">
				<div className="flex items-center gap-3">
					<Avatar
						src={parseAvatar(bot.avatar, bot.id)}
						radius="full"
						className="w-20 h-20"
					/>
					<h1 className="text-2xl font-bold">{bot.name}</h1>
				</div>
				<Button
					className="group"
					startContent={
						<div className="relative">
							<IconArrowUp className="w-5 h-5 group-hover:-translate-y-10 duration-150" />
							<IconChevronUp className="w-5 h-5 group-hover:-translate-y-5 group-hover:mt-0 mt-4 absolute duration-150" />
						</div>
					}
					color="secondary"
				>
					Vote {bot.name}
				</Button>
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
