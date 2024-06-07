import { Text } from "@/components/ui/text";
import { Center } from "@/styled-system/jsx";
import type React from "react";

export default function ErrorMessage({ children }: React.PropsWithChildren) {
	return (
		<Center my={22}>
			<Text color={"red.500"}>{children}</Text>
		</Center>
	);
}
