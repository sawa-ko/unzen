import { Button } from "@nextui-org/react";
import Link from "next/link";
import DiscordIcon from "../icons/discord";

export default function LoginButton() {
    return <Button startContent={<DiscordIcon className="w-5 h-5" />} as={Link} href="/api/auth/login" color="default">Login</Button>
}