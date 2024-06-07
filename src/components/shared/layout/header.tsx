import { css } from "@/styled-system/css";
import { Container, Flex } from "@/styled-system/jsx";
import { Heading } from "@/components/ui/heading";
import AuthUser from "./auth/user";
import Link from "next/link";
import HomeSearch from "@/components/modules/home/search";
import Image from "@/components/ui/image";

import CleanLogo from "@public/logos/clean.png";

export default function Header() {
	return (
		<header
			className={css({
				top: 0,
				position: "sticky",
				bg: "background.950/50",
				w: "full",
				py: 3,
				borderBottomWidth: 1,
				borderColor: "background.800",
				backdropBlur: "lg",
				backdropFilter: "auto",
				zIndex: 10,
			})}
		>
			<Container w={"full"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Link href="/">
						<Flex alignItems={"center"} gap={2}>
							<Image
								src={CleanLogo}
								alt={"dbots.fun logo"}
								width={53}
								height={53}
							/>
							<Heading>dbots.fun</Heading>
						</Flex>
					</Link>
					<Flex alignItems={"center"} gap={3}>
						<HomeSearch />
						<AuthUser />
					</Flex>
				</Flex>
			</Container>
		</header>
	);
}
