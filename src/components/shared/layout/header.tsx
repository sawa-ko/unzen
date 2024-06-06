import { css } from "@/styled-system/css";
import { Container, Flex } from "@/styled-system/jsx";
import { Heading } from "@/components/ui/heading";
import AuthUser from "./auth/user";
import Link from "next/link";

export default function Header() {
	return (
		<header
			className={css({
				top: 0,
				position: "sticky",
				bg: "gray.900",
				w: "full",
				py: 3,
				borderBottomWidth: 1,
				borderColor: "gray.800",
			})}
		>
			<Container w={"full"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Link href="/">
						<Heading>dbots.fun</Heading>
					</Link>
					<AuthUser />
				</Flex>
			</Container>
		</header>
	);
}
