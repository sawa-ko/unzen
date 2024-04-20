import Loader from "@/components/common/loader";
import BotDeleteModal from "@/components/common/modals/delete";
import { type BotObject, useDeleteBotMutation } from "@/lib/types/apollo";
import { removeFromCache } from "@/lib/utils/cache";
import { handleError } from "@/lib/utils/common";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	useDisclosure,
} from "@nextui-org/react";
import { IconTrashFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function ManageDangerBotTab({
	id,
	name,
}: Pick<BotObject, "id" | "name">) {
	const router = useRouter();
	const deleteModal = useDisclosure();
	const [deleteBot, { loading: deletingBot }] = useDeleteBotMutation({
		onCompleted: (data) => {
			toast.success(`Deleted ${data.deleteBot.name}, so sad 😢`);
			deleteModal.onClose();
			router.replace("/");
		},
		onError: handleError,
		update: (cache) => removeFromCache(cache, { id, __typename: "BotObject" }),
	});
	return (
		<React.Fragment>
			<BotDeleteModal
				id={id}
				name={name}
				deleteFn={deleteBot}
				{...deleteModal}
			/>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Delete {name}</CardHeader>
				<CardBody>
					<p>
						Deleting {name} will <strong>permanently</strong> delete all
						information about it (votes, guildCount, etc.)
					</p>
				</CardBody>
				<CardFooter>
					<Button
						spinner={<Loader />}
						isLoading={deletingBot}
						color="danger"
						className="w-fit"
						startContent={<IconTrashFilled className="w-5 h-5" />}
						onClick={deleteModal.onOpen}
					>
						Delete {name}
					</Button>
				</CardFooter>
			</Card>
		</React.Fragment>
	);
}
