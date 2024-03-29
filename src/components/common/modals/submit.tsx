import { modalMotionProps } from "@/lib/motion-styles";
import type { CommonModalProps } from "@/lib/types/modals";
import { ArchiveBoxIcon, CubeIcon } from "@heroicons/react/20/solid";
import {
	Card,
	CardBody,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	Tooltip,
} from "@nextui-org/react";
import Link from "next/link";

export default function SubmitModal({ ...props }: CommonModalProps) {
	return (
		<Modal motionProps={modalMotionProps} backdrop="blur" {...props}>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1">Submit</ModalHeader>
				<ModalBody>
					<p className="text-default-600">What do you want to submit?</p>
					<div className="py-2 flex flex-col gap-2">
						<Tooltip showArrow content="Coming soon">
							<Card
								shadow="none"
								className="bg-default-50 opacity-50 cursor-not-allowed"
							>
								<CardBody>
									<div className="flex gap-3 items-center">
										<div className="p-3 rounded-medium bg-purple-900">
											<ArchiveBoxIcon className="w-6 h-6 text-purple-500" />
										</div>
										<h1>Bot pack</h1>
									</div>
								</CardBody>
							</Card>
						</Tooltip>
						<Card
							as={Link}
							href="/bot/add"
							shadow="none"
							className="bg-default-50"
							isPressable
						>
							<CardBody>
								<div className="flex gap-3 items-center">
									<div className="p-3 rounded-medium bg-green-900">
										<CubeIcon className="w-6 h-6 text-green-500" />
									</div>
									<h1>Discord bot</h1>
								</div>
							</CardBody>
						</Card>
					</div>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
