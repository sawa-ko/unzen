"use client";

import CertifiedBotBadge from "@/components/modules/bot/badges/certified-badge";
import type { BotObject } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	ScrollShadow,
} from "@nextui-org/react";
import { IconArrowUp, IconChartBar } from "@tabler/icons-react";
import Link from "next/link";
import TagButton from "../buttons/tag-button";
import FallbackAvatar from "../fallback-avatar";

interface BotCardProps extends Partial<BotObject> {}

export default function BotCard({
	id,
	avatar,
	name,
	shortDescription,
	certified,
}: BotCardProps) {
	return (
		<Card
			as={Link}
			href={`/bot/${id}`}
			isPressable
			key={id}
			shadow="none"
			radius="lg"
			className="max-h-64 max-w-sm h-full p-3"
		>
			<CardHeader>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-row gap-3 items-center">
						<Avatar
							showFallback
							fallback={<FallbackAvatar />}
							key={id}
							src={parseAvatar(avatar, id as string)}
							radius="md"
							className="w-16 h-16"
						/>
						<div className="flex flex-col">
							<div className="flex items-center gap-1">
								<h3 className="text-lg font-bold">{name ?? "Unknown"}</h3>
								{certified && <CertifiedBotBadge />}
							</div>
							<ScrollShadow
								hideScrollBar
								orientation="horizontal"
								className="max-w-44"
							>
								<div className="flex">
									<TagButton>XD</TagButton>
									<TagButton>XD</TagButton>
									<TagButton>XD</TagButton>
									<TagButton>XD</TagButton>
									<TagButton>XD</TagButton>
									<TagButton>XD</TagButton>
								</div>
							</ScrollShadow>
						</div>
					</div>
				</div>
			</CardHeader>
			<ScrollShadow hideScrollBar className="h-64">
				<CardBody className="overflow-clip">{shortDescription}</CardBody>
			</ScrollShadow>
			<CardFooter className="flex justify-between w-full text-default-600 text-lg">
				<div className="flex items-center gap-1">
					<IconArrowUp className="w-5 h-5" /> 1
				</div>
				<div className="flex items-center gap-1">
					<IconChartBar className="w-5 h-5" /> 1
				</div>
			</CardFooter>
		</Card>
	);
}
