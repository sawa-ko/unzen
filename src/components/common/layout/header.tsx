import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import HeaderAuthUser from "./auth/user";

export default function Header() {
    return (
        <Navbar shouldHideOnScroll className="mb-10 items-center" maxWidth="full">
            <NavbarBrand as={Link} href={"/"} className="font-semibold hover:opacity-70 duration-150 text-xl w-min">
                discord<span className="text-secondary font-extrabold">bots</span>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <Link color="foreground" href="/add">
                        Explore
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <HeaderAuthUser />
                    {/* <Button as={Link} color="secondary" href="#" variant="solid">
                        Login
                    </Button> */}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}