import { css } from "@/styled-system/css";
import { Container, Flex } from "@/styled-system/jsx";
import { Heading } from "@/components/ui/heading";
import { Button, buttonIcon } from "@/components/ui/button";
import { IconBrandDiscordFilled } from "@tabler/icons-react";

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
					<Heading>dbots.fun</Heading>
					<Button size="sm">
						<IconBrandDiscordFilled size={18} className={buttonIcon("left")} />
						Login
					</Button>
				</Flex>
			</Container>
		</header>
	);
}
