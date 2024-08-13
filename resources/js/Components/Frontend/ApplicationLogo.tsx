import { SVGAttributes } from "react";
import logo from "@/Assets/images/coding-logo.png";
import { usePage } from "@inertiajs/react";

export default function ApplicationLogo() {
    const { url } = usePage();
    return (
        <img
            src={logo}
            className={`${
                url !== "/" &&
                url !== "/login" &&
                url !== "/forgot-password" &&
                url !== "/register"
                    ? "w-[2.7rem] h-[2.7rem]"
                    : "w-[4rem] h-[4rem]"
            } ms-3`}
            alt="vite logo"
        />
    );
}
