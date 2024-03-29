"use client";

import OverviewBotTab from "@/components/modules/bot/tabs/overview";
import {
	ArrowUpIcon,
	ChatBubbleBottomCenterIcon,
	Cog6ToothIcon,
	InformationCircleIcon,
	PlusCircleIcon,
} from "@heroicons/react/20/solid";
import { Avatar, Button, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div>
			<div className="w-full h-screen z-[0] absolute pointer-events-none inset-0">
				<Image
					src="https://cdn.discordapp.com/embed/avatars/0.png"
					width={1000}
					height={1000}
					alt="bot banner background"
					className="object-cover object-[center_top] top-0 right-0 bottom-0 left-0 w-screen h-[90vh] max-h-[90vh] opacity-10 gradient-mask-b-0"
					draggable={false}
				/>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex lg:flex-row gap-3 flex-col justify-between w-full items-center">
					<div className="flex lg:flex-row flex-col gap-4 items-center">
						<Avatar
							src="https://cdn.discordapp.com/embed/avatars/0.png"
							radius="full"
							isBordered
							className="w-24 h-24"
						/>
						<div className="flex flex-col items-center lg:items-start">
							<h1 className="text-3xl font-bold">Probot</h1>
							<p className="text-sm lg:text-left text-center text-default-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col gap-2 w-full lg:w-fit">
						<Button
							fullWidth
							startContent={<PlusCircleIcon className="w-5 h-5" />}
							size="lg"
							color="secondary"
						>
							Invite
						</Button>
						<Button
							as={Link}
							href={`/bot/${params.id}/vote`}
							fullWidth
							startContent={<ArrowUpIcon className="w-5 h-5" />}
							size="lg"
						>
							Vote
						</Button>
					</div>
				</div>
				<div className="w-full">
					<Tabs
						className="w-full"
						variant="underlined"
						aria-label="Bot tabs"
						classNames={{
							tabList:
								"gap-6 w-full relative rounded-none p-0 border-b border-divider",
							cursor: "w-full bg-secondary",
							tab: "max-w-fit px-0 h-12",
							tabContent: "group-data-[selected=true]:text-secondary",
							panel: "h-screen",
						}}
					>
						<Tab
							key="overview"
							title={
								<div className="flex items-center gap-2">
									<InformationCircleIcon className="w-4 h-4" /> Overview
								</div>
							}
						>
							<OverviewBotTab />
						</Tab>
						<Tab
							isDisabled
							disabled
							aria-disabled
							key="reviews"
							title={
								<div className="flex items-center gap-2">
									<ChatBubbleBottomCenterIcon className="w-4 h-4" /> Reviews
								</div>
							}
						/>
						<Tab
							key="settings"
							title={
								<div className="flex items-center gap-2">
									<Cog6ToothIcon className="w-4 h-4" /> Settings
								</div>
							}
						/>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
