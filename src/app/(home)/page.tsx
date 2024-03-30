"use client";

import TagButton from "@/components/common/buttons/tag-button";
import BotCard from "@/components/common/cards/bot.normal";
import BotRow from "@/components/modules/bot/row";
import { ClockIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Avatar, Input } from "@nextui-org/react";

export default function Page() {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex justify-between w-full max-h-72 ">
				<div className="max-w-3xl w-full">
					<div className="flex flex-col gap-3">
						<h1 className="text-5xl font-black">discord<span className="text-secondary">bots</span></h1>
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
							<TagButton>Gaming</TagButton>
							<TagButton>Music</TagButton>
							<TagButton>Social</TagButton>
						</div>
					</div>
				</div>
				<div className="z-[2] gradient-mask-b-0 xl:flex hidden">
					<div className="grid grid-cols-5 gap-3 opacity-60">
						{[...Array(15)].map(() => (
							<Avatar draggable={false} radius="lg" src="https://cdn.discordapp.com/embed/avatars/0.png" className="w-20 h-20" />
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
			</BotRow>
		</div>
	);
}
