import LineTitle from "@/components/shared/feedback/line-title";
import { Button, buttonIcon } from "@/components/ui/button";
import { box } from "@/components/ui/styles/box";
import {
	useDeleteBotMutation,
	type SingleBotQuery,
} from "@/lib/graphql/apollo";
import { Box, Flex } from "@/styled-system/jsx";
import { Dialog, DialogPanel, TabPanel } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useDisclosure } from "@chakra-ui/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { css } from "@/styled-system/css";
import { popUpAnimation } from "@/lib/constants/animations";
import { handleError } from "@/lib/utils/format";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { removeFromCache } from "@/lib/utils/cache";

export default function BotTabManageDanger({
	id,
}: Pick<SingleBotQuery["getBot"], "id">) {
	const { open, onClose, onOpen } = useDisclosure({ defaultOpen: false });
	const router = useRouter();

	const [deleteBot, { loading: deletingBot }] = useDeleteBotMutation({
		onError: handleError,
		onCompleted: () => {
			toast.success("Successfully deleted your bot!");
			router.replace("/");
		},
		update: (cache) => removeFromCache(cache, { id, __typename: "BotObject" }),
	});
	return (
		<TabPanel>
			<Box className={box}>
				<LineTitle>Danger</LineTitle>
				<Button onClick={onOpen} mt={3} color={"bad"}>
					<TrashIcon className={buttonIcon("left")} />
					Delete bot
				</Button>
			</Box>
			<AnimatePresence>
				{open && (
					<Dialog
						className={css({ position: "relative" })}
						static
						open={open}
						onClose={onClose}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={css({
								inset: 0,
								position: "fixed",
								bg: "background.950/50",
								backdropBlur: "md",
								backdropFilter: "auto",
							})}
						/>
						<Flex
							pos={"fixed"}
							inset={0}
							w="screen"
							alignItems={"center"}
							justifyContent={"center"}
							maxW="lg"
							mx="auto"
						>
							<DialogPanel
								as={motion.div}
								initial={"initial"}
								animate={"enter"}
								exit={"exit"}
								variants={popUpAnimation}
								className={box}
							>
								<Heading size="xl">Delete bot</Heading>
								<Text size="sm" my={3}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
									distinctio est delectus, deserunt repellendus unde illum
									consectetur voluptates fugiat incidunt debitis ratione nam
									exercitationem dicta laudantium perspiciatis? At, odit
									quibusdam!
								</Text>
								<Flex justifyContent={"end"}>
									<Button
										disabled={deletingBot}
										onClick={() => deleteBot({ variables: { input: { id } } })}
										size="sm"
									>
										I understand, delete it
									</Button>
								</Flex>
							</DialogPanel>
						</Flex>
					</Dialog>
				)}
			</AnimatePresence>
		</TabPanel>
	);
}
