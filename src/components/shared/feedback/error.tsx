import { ErrorText } from "@/components/ui/error-text";
import { Center } from "@/styled-system/jsx";
import type React from "react";

export default function ErrorMessage({ children }: React.PropsWithChildren) {
	return (
		<Center my={22}>
			<ErrorText>{children}</ErrorText>
		</Center>
	);
}
