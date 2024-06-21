import HomeSearch from "@/components/modules/home/search";
import { css } from "@/styled-system/css";
import { Container, Flex } from "@/styled-system/jsx";
import Link from "next/link";
import AuthUser from "./auth/user";
import Logo from "../logo";

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
							<Logo />
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
