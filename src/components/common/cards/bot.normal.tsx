"use client";

import { ArrowUpIcon, ChartBarIcon } from "@heroicons/react/16/solid";
import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@nextui-org/react";
import Link from "next/link";

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
			className="max-h-72 h-full p-2"
		>
			<CardHeader>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-row gap-2 items-center">
						<Avatar
							key={id}
							src="https://cdn.discordapp.com/embed/avatars/0.png"
							radius="lg"
							className="w-16 h-16"
						/>
						<div className="flex flex-col">
							<h3 className="text-xl font-bold">Probot</h3>
							<p className="text-xs text-default-500">Tag, Tag, Tag</p>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardBody className="overflow-clip">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta
				cupiditate esse ab animi beatae obcaecati corporis, assumenda, magni at
				atque nam dolorem.
			</CardBody>
			<CardFooter className="flex justify-between w-full text-default-600">
				<div className="flex items-center gap-1">
					<ArrowUpIcon className="w-4 h-4" /> 1
				</div>
				<div className="flex items-center gap-1">
					<ChartBarIcon className="w-4 h-4" /> 1
				</div>
			</CardFooter>
		</Card>
	);
}
