import { icon } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { css, cx } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

export default function Step({
	step,
	currentStep,
	title,
}: { step: number; title: string; currentStep: number }) {
	const status =
		currentStep === step
			? "active"
			: currentStep < step
				? "inactive"
				: "complete";

	return (
		<Flex gap={2} alignItems={"center"}>
			<motion.div animate={status} className={css({ position: "relative" })}>
				<motion.div
					variants={{
						active: {
							scale: 1,
							transition: {
								delay: 0,
								duration: 0.2,
							},
						},
						complete: {
							scale: 1.25,
						},
					}}
					transition={{
						duration: 0.6,
						delay: 0.2,
						type: "tween",
						ease: "circOut",
					}}
					className={css({
						position: "absolute",
						inset: 0,
						borderRadius: "full",
					})}
				/>

				<motion.div
					initial={false}
					variants={{
						inactive: {
							backgroundColor: "var(--colors-background-700)",
							color: "var(--colors-background-200)",
						},
						active: {
							backgroundColor: "var(--colors-brand-500)",
							color: "var(--colors-brand-100)",
						},
						complete: {
							backgroundColor: "var(--colors-brand-950)",
							color: "var(--colors-brand-500)",
						},
					}}
					transition={{ duration: 0.2 }}
					className={css({
						position: "relative",
						display: "flex",
						w: 10,
						h: 10,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "full",
					})}
				>
					<Flex alignItems={"center"} justifyContent={"center"}>
						{status === "complete" ? (
							<CheckIcon
								className={cx(
									icon(),
									css({ color: "var(--colors-brand-500)" }),
								)}
							/>
						) : (
							<Text>{step}</Text>
						)}
					</Flex>
				</motion.div>
			</motion.div>
			<Text>{title}</Text>
		</Flex>
	);
}

function CheckIcon(props: ComponentProps<"svg">) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: ???
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
		>
			<motion.path
				initial={{ pathLength: 0 }}
				animate={{ pathLength: 1 }}
				transition={{
					delay: 0.2,
					type: "tween",
					ease: "easeOut",
					duration: 0.3,
				}}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 12.75 6 6 9-13.5"
			/>
		</svg>
	);
}
