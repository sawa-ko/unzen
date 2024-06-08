import HomeSearch from "@/components/modules/home/search";
import Image from "@/components/ui/image";
import { css } from "@/styled-system/css";
import { Container, Flex } from "@/styled-system/jsx";
import Link from "next/link";
import AuthUser from "./auth/user";

import Logo from "@public/logos/dbots.png";

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
							<Image src={Logo} alt={"dbots.fun logo"} width={35} height={35} />
						</Flex>
					</Link>
					<Flex alignItems={"center"} gap={3}>
						<HomeSearch bottomText={false} />
						<AuthUser />
					</Flex>
				</Flex>
			</Container>
		</header>
	);
}
