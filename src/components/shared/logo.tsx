import { css } from "@/styled-system/css";
import Image from "../ui/image";
import LogoImg from "@public/logos/dbots.png";

export default function Logo() {
	return (
		<Image
			placeholder={"empty"}
			src={LogoImg}
			alt={"dbots.fun logo"}
			width={100}
			height={100}
			className={css({
				w: "35px",
				h: "35px",
				scale: {
					_hover: "1.1",
					_active: "0.9",
				},
				transitionDuration: "normal",
			})}
		/>
	);
}
