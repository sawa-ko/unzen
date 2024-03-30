"use client";

import {
	ArrowLeftStartOnRectangleIcon,
	Cog6ToothIcon,
	PlusIcon,
	UserIcon,
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
			<Dropdown placement="bottom-end" showArrow radius="sm" offset={15}>
				<DropdownTrigger>
					<Avatar
						isBordered
						as="button"
						className="transition-transform"
						color="default"
						size="sm"
						src="https://cdn.discordapp.com/avatars/1076700780175831100/a_6fbf039c0576b0b98e586b3ad26b34c7.png"
					/>
				</DropdownTrigger>
				<DropdownMenu variant="faded" aria-label="Static Actions">
					<DropdownItem startContent={<UserIcon className="w-5 h-5" />}>
						Profile
					</DropdownItem>
					<DropdownItem
						href="/settings"
						startContent={<Cog6ToothIcon className="w-5 h-5" />}
					>
						Settings
					</DropdownItem>
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
