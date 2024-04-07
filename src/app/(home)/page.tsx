"use client";

import TagButton from "@/components/common/buttons/tag-button";
import BotCard from "@/components/common/cards/bot.normal";
import Loader from "@/components/common/loader";
import BotRow from "@/components/modules/bot/row";
import { useBotsQuery } from "@/lib/types/apollo";
import { Avatar, Input } from "@nextui-org/react";
import { IconSearch, IconTrendingUp } from "@tabler/icons-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Page() {
	const { data: bots, loading: gettingBots } = useBotsQuery();
	const { scrollY: progress } = useScroll();
	const springProgress = useSpring(progress, {
		stiffness: 150,
		damping: 30,
		restDelta: 0.001,
	});

	const botRow = gettingBots ? (
		<Loader />
	) : bots?.bots.nodes?.length ? (
		bots.bots.nodes.map((bot, key) => <BotCard key={key} {...bot} />)
	) : undefined;

	return (
		<div className="flex flex-col gap-10">
			<div className="flex justify-between w-full max-h-72 ">
				<div className="max-w-3xl w-full">
					<div className="flex flex-col gap-3">
						<h1 className="text-5xl font-black">
							discord<span className="text-secondary">bots</span>
						</h1>
						<p className="text-sm text-default-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
							magni nam omnis! Voluptas cumque neque sunt? Itaque tempore cum
							incidunt alias, ipsa unde autem qui magni et hic cumque quae.
						</p>
						<Input
							isClearable
							startContent={<IconSearch className="w-5 h-5" />}
							variant="bordered"
							color="secondary"
							className="w-full"
							placeholder={"Search through 100 bots"}
						/>
						<div className="flex flex-wrap gap-1">
							<TagButton>Gaming</TagButton>
							<TagButton>Music</TagButton>
							<TagButton>Social</TagButton>
						</div>
					</div>
				</div>
				<div className="z-[2] gradient-mask-b-0 xl:flex hidden">
					<motion.div
						style={{ translateY: springProgress }}
						className="grid grid-cols-5 gap-3 opacity-60"
					>
						{[...Array(15)].map((_, index) => (
							<Avatar
								key={index}
								draggable={false}
								radius="lg"
								src="/default-avatar.png"
								className="w-20 h-20"
							/>
						))}
					</motion.div>
				</div>
			</div>
			<BotRow
				title="Most popular bots"
				icon={<IconTrendingUp className="w-6 h-6" />}
			>
				{botRow}
			</BotRow>
		</div>
	);
}
