import { Text } from "@/components/ui/text";
import { Divider, Flex } from "@/styled-system/jsx";
import type React from "react";

export default function LineTitle({ children }: React.PropsWithChildren) {
	return (
		<Flex alignItems={"center"} gap={2} w="full">
			<Flex alignItems={"center"}>
				<Text
					w={"max"}
					textTransform={"uppercase"}
					fontWeight={800}
					color={"background.200"}
					display={"inline-flex"}
				>
					{children}
				</Text>
			</Flex>
			<Divider borderColor={"background.600"} />
		</Flex>
	);
}
