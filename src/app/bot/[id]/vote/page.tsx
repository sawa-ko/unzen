"use client";

import Loader from "@/components/common/loader";
import { useSingleBotQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar, Button } from "@nextui-org/react";
import { IconArrowLeft, IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
	const { data: bot, loading: gettingBot } = useSingleBotQuery({
		variables: {
			input: {
				id: params.id,
			},
		},
		onError: () => notFound(),
	});

	if (gettingBot || !bot) return <Loader />;
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-[70vh]">
			<div className="max-w-xl w-full flex justify-between items-center">
				<div className="flex items-center gap-3">
					<Avatar
						src={parseAvatar(bot.getBot.avatar, bot.getBot.id)}
						radius="full"
						className="w-20 h-20"
					/>
					<h1 className="text-3xl font-bold">{bot.getBot.name}</h1>
				</div>
				<Button
					startContent={<IconArrowUp className="w-5 h-5" />}
					color="secondary"
				>
					Vote {bot.getBot.name}
				</Button>
			</div>
			<Button
				as={Link}
				href={`/bot/${bot.getBot.id}`}
				size="sm"
				startContent={<IconArrowLeft className="w-5 h-5" />}
			>
				Return to {bot.getBot.name}
			</Button>
		</div>
	);
}
