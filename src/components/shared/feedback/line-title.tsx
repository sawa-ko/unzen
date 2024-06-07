import { Text } from "@/components/ui/text";
import { Flex, Divider } from "@/styled-system/jsx";
import type React from "react";

export default function LineTitle({ children }: React.PropsWithChildren) {
	return (
		<Flex alignItems={"center"} gap={2}>
			<Text
				textTransform={"uppercase"}
				fontWeight={800}
				color={"background.300"}
			>
				{children}
			</Text>
			<Divider borderColor={"background.600"} />
		</Flex>
	);
}
