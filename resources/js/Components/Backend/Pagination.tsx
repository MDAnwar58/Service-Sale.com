import { Link } from "@inertiajs/react";
import React from "react";

interface Props {
    items?: any;
}

export default function Pagination({ items }: Props) {
    console.log();
    return (
        <nav className="pt-3">
            {items.length > 0 && (
                <ul className="flex justify-center gap-1 text-gray-700 text-lg font-semibold">
                    {items.links.map((link, index) =>
                        link.label === "&laquo; Previous" ? (
                            <li>
                                <Link href={link.url}>
                                    <div
                                        className={`px-2 ${
                                            link.url === null
                                                ? "border-2 border-gray-300 text-gray-300"
                                                : "border-2 border-gray-500 hover:bg-gray-900 hover:text-white"
                                        } rounded-full`}
                                    >
                                        Prev
                                    </div>
                                </Link>
                            </li>
                        ) : link.label !== "Next &raquo;" ? (
                            <li key={index + 1}>
                                <Link href={link.url}>
                                    <div
                                        className={`px-2 ${
                                            link.active === true &&
                                            "bg-gray-900 text-white"
                                        }  transition-all ${
                                            link.label !== "..." &&
                                            "border-2 border-gray-500 hover:bg-gray-900 hover:text-white"
                                        } rounded-full`}
                                    >
                                        {link.label}
                                    </div>
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link href={link.url}>
                                    <div
                                        className={`px-2 ${
                                            link.url === null
                                                ? "border-gray-300 text-gray-300"
                                                : "hover:bg-gray-900 hover:text-white border-gray-500"
                                        } border-2  transition-all rounded-full`}
                                    >
                                        Next
                                    </div>
                                </Link>
                            </li>
                        )
                    )}
                    <li className="ms-3">
                        <Link href={items.path}>
                            <div className=" uppercase px-2 bg-gray-50 text-gray-500 border border-gray-300 shadow-sm rounded-full">
                                reset
                            </div>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
