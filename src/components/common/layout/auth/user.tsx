"use client";

import {
	ArrowLeftStartOnRectangleIcon,
	PlusIcon,
} from "@heroicons/react/20/solid";
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	useDisclosure,
} from "@nextui-org/react";
import SubmitModal from "../../modals/submit";

export default function HeaderAuthUser() {
	const disclosureProps = useDisclosure();
	return (
		<>
			<SubmitModal {...disclosureProps} />
			<Dropdown backdrop="opaque">
				<DropdownTrigger>
					<Avatar
						isBordered
						as="button"
						className="transition-transform"
						color="secondary"
						name="Jason Hughes"
						size="sm"
						src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
					/>
				</DropdownTrigger>
				<DropdownMenu aria-label="Static Actions">
					<DropdownItem
						onClick={disclosureProps.onOpen}
						startContent={<PlusIcon className="w-5 h-5" />}
					>
						Submit
					</DropdownItem>
					<DropdownItem
						startContent={<ArrowLeftStartOnRectangleIcon className="w-5 h-5" />}
						className="text-danger"
						color="danger"
					>
						Logout
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	);
}
