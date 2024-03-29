import type { HTMLMotionProps } from "framer-motion";

export const modalMotionProps: HTMLMotionProps<"section"> = {
    variants: {
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
        exit: {
            y: 5,
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    }
}