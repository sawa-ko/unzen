"use client";

import BotCard from "@/components/common/cards/bot.normal";
import BotRow from "@/components/modules/bot/row";
import { HashtagIcon } from "@heroicons/react/16/solid";
import { ClockIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button, Input } from "@nextui-org/react";

export default function Page() {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex justify-between w-full max-h-72 ">
				<div className="max-w-3xl w-full">
					<div className="flex flex-col gap-3">
						<h1 className="text-5xl font-black">dbots.fun</h1>
						<p className="text-sm text-default-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
							magni nam omnis! Voluptas cumque neque sunt? Itaque tempore cum
							incidunt alias, ipsa unde autem qui magni et hic cumque quae.
						</p>
						<Input
							endContent={<MagnifyingGlassIcon className="w-5 h-5" />}
							variant="bordered"
							color="secondary"
							className="w-full"
							placeholder="Search bots"
						/>
						<div className="flex flex-wrap gap-1">
							<Button
								startContent={
									<HashtagIcon className="w-4 h-4 text-secondary" />
								}
								size="sm"
							>
								Tag
							</Button>
							<Button
								startContent={
									<HashtagIcon className="w-4 h-4 text-secondary" />
								}
								size="sm"
							>
								Tag
							</Button>
							<Button
								startContent={
									<HashtagIcon className="w-4 h-4 text-secondary" />
								}
								size="sm"
							>
								Tag
							</Button>
							<Button
								startContent={
									<HashtagIcon className="w-4 h-4 text-secondary" />
								}
								size="sm"
							>
								Tag
							</Button>
						</div>
					</div>
				</div>
				<div className="z-[2] gradient-mask-b-0 xl:flex hidden">
					<div className="grid grid-cols-5 gap-3">
						{[...Array(15)].map(() => (
							<div className="w-20 h-20 rounded-xl bg-cover bg-center bg-content1" />
						))}
					</div>
				</div>
			</div>
			<BotRow title="Latest bots" icon={<ClockIcon className="w-6 h-6" />}>
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
				<BotCard id="xx" />
			</BotRow>
		</div>
	);
}
