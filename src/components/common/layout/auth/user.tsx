"use client";

import useSessionStore from "@/lib/stores/session";
import { type AuthUserObject, useLogoutMutation } from "@/lib/types/apollo";
import { handleError, parseAvatar } from "@/lib/utils/common";
import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	useDisclosure,
} from "@nextui-org/react";
import {
	IconLogout2,
	IconPlus,
	IconSettingsFilled,
	IconUserFilled,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Loader from "../../loader";
import SubmitModal from "../../modals/submit";

export default function HeaderAuthUser({
	avatar,
	id,
}: Partial<AuthUserObject>) {
	const disclosureProps = useDisclosure();
	const router = useRouter();
	const [logout, { loading }] = useLogoutMutation({
		onCompleted: () => {
			useSessionStore.setState({ data: undefined, loading: false });
			router.replace("/");
		},
		onError: handleError,
	});

	return (
		<>
			<SubmitModal {...disclosureProps} />
			<Dropdown placement="bottom-end" showArrow radius="sm" offset={15}>
				<DropdownTrigger>
					<Avatar
						isBordered
						as="button"
						className="transition-transform w-9 h-9"
						color="default"
						src={parseAvatar(avatar, id as string)}
					/>
				</DropdownTrigger>
				<DropdownMenu variant="faded" aria-label="User dropdown">
					<DropdownItem startContent={<IconUserFilled className="w-5 h-5" />}>
						Profile
					</DropdownItem>
					<DropdownItem
						href="/settings"
						startContent={<IconSettingsFilled className="w-5 h-5" />}
					>
						Settings
					</DropdownItem>
					<DropdownItem
						onClick={disclosureProps.onOpen}
						startContent={<IconPlus className="w-5 h-5" />}
					>
						Submit
					</DropdownItem>
					<DropdownItem
						onClick={() => logout()}
						startContent={
							loading ? <Loader /> : <IconLogout2 className="w-5 h-5" />
						}
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
