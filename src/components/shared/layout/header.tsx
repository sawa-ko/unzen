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
				position: "fixed",
				bg: "background.950/0",
				w: "full",
				py: 3,
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
								placeholder={"empty"}
								src={Logo}
								alt={"dbots.fun logo"}
								width={100}
								height={100}
								className={css({
									w: "35px",
									h: "35px",
									scale: {
										_hover: "1.1",
										_active: "0.9",
									},
									transitionDuration: "normal",
								})}
							/>
						</Flex>
					</Link>
					<Flex alignItems={"center"} gap={3}>
						<HomeSearch isNav={true} />
						<AuthUser />
					</Flex>
				</Flex>
			</Container>
		</header>
	);
}
