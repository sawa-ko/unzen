"use client";

import Image from "@/components/ui/image";
import { fadeIn } from "@/lib/constants/animations";
import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { motion } from "framer-motion";

export default function ImageBackground({ image }: { image: string }) {
	return (
		<Box position={"absolute"} inset={0} zIndex={-1}>
			<motion.div variants={fadeIn} animate="enter" initial="initial">
				<Image
					alt="background"
					draggable={false}
					width={1000}
					height={1000}
					src={image}
					className={css({
						position: "absolute",
						w: "full",
						zIndex: -1,
						objectFit: "cover",
						objectPosition: "center top",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						opacity: 0.2,
						h: "100vh",
						maskImage:
							"radial-gradient(circle at top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
					})}
				/>
			</motion.div>
		</Box>
	);
}
