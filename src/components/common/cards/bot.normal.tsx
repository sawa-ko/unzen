"use client";

import { ArrowUpIcon, ChartBarIcon } from "@heroicons/react/16/solid";
import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	ScrollShadow,
} from "@nextui-org/react";
import Link from "next/link";
import FallbackAvatar from "../fallback-avatar";

interface BotCardProps {
	id: string;
}

export default function BotCard({ id }: BotCardProps) {
	return (
		<Card
			as={Link}
			href={`/bot/${id}`}
			isPressable
			key={id}
			shadow="none"
			className="max-h-64 h-full p-2"
		>
			<CardHeader>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-row gap-4 items-center">
						<Avatar
							showFallback
							fallback={<FallbackAvatar />}
							key={id}
							src="https://cdn.discordapp.com/embed/avatars/0.png"
							radius="lg"
							isBordered
							className="w-20 h-20"
						/>
						<div className="flex flex-col">
							<h3 className="text-2xl font-bold">Probot</h3>
							<p className="text-sm text-default-500">Tag, Tag, Tag</p>
						</div>
					</div>
				</div>
			</CardHeader>
			<ScrollShadow hideScrollBar className="h-64">
				<CardBody className="overflow-clip">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta
					cupiditate esse ab animi beatae obcaecati corporis, assumenda, magni at
					atque nam dolorem.
				</CardBody>
			</ScrollShadow>
			<CardFooter className="flex justify-between w-full text-default-600 text-lg">
				<div className="flex items-center gap-1">
					<ArrowUpIcon className="w-5 h-5" /> 1
				</div>
				<div className="flex items-center gap-1">
					<ChartBarIcon className="w-5 h-5" /> 1
				</div>
			</CardFooter>
		</Card>
	);
}
