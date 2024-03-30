"use client";

import { Avatar, Button } from "@nextui-org/react";
import { IconArrowLeft, IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-[70vh]">
			<div className="max-w-xl w-full flex justify-between items-center">
				<div className="flex items-center gap-3">
					<Avatar
						src="https://cdn.discordapp.com/embed/avatars/0.png"
						radius="full"
						isBordered
						className="w-20 h-20"
					/>
					<h1 className="text-3xl font-bold">Probot</h1>
				</div>
				<Button
					startContent={<IconArrowUp className="w-5 h-5" />}
					color="secondary"
				>
					Vote Probot
				</Button>
			</div>
			<Button
				as={Link}
				href={`/bot/${params.id}`}
				size="sm"
				startContent={<IconArrowLeft className="w-5 h-5" />}
			>
				Return to Probot
			</Button>
		</div>
	);
}
