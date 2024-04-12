import { modalMotionProps } from "@/lib/motion-styles";
import type {
	DeleteBotInput,
	DeleteBotMutation,
	Exact,
} from "@/lib/types/apollo";
import type { CommonModalProps } from "@/lib/types/modals";
import type { FetchResult, MutationFunctionOptions } from "@apollo/client";
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";

interface BotDeleteModalProps extends CommonModalProps {
	id: string;
	name: string;
	deleteFn: (
		options?: MutationFunctionOptions<
			DeleteBotMutation,
			Exact<{
				input: DeleteBotInput;
			}>
		>,
	) => Promise<FetchResult<DeleteBotMutation>>;
}

export default function BotDeleteModal({
	id,
	name,
	deleteFn,
	...props
}: BotDeleteModalProps) {
	return (
		<Modal size="lg" motionProps={modalMotionProps} backdrop="blur" {...props}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Delete confirmation
						</ModalHeader>
						<ModalBody>
							<p>
								Are you sure you want to delete <strong>{name}</strong>? This
								action <strong>cannot</strong> be undone, all votes and other
								stats will be permanently removed from database.
							</p>
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose}>Cancel</Button>
							<Button
								onClick={() => deleteFn({ variables: { input: { id: id } } })}
								color="secondary"
							>
								Yes, delete {name}
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
