import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Flex } from "@/styled-system/jsx";

export default function HomeSearch({
	bottomText = true,
}: { bottomText?: boolean }) {
	return (
		<Flex flexDir={"column"} gap={2}>
			<Input placeholder={"Search bots..."} />
			{bottomText && (
				<Text color="background.300" size="xs">
					This input doesn't works at the moment, but it will soon!
				</Text>
			)}
		</Flex>
	);
}
