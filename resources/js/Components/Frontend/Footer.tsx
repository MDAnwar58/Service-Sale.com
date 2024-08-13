import React from "react";
import logo from "@/Assets/images/coding-logo.png";
import { Link } from "@inertiajs/react";
import Image from "@/Pages/Frontend/Welcome/Components/Image";

export default function Footer() {
    return (
        <footer className="bg-white/50 rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="lg:flex sm:items-center sm:justify-between">
                    <Link
                        href={route("dashboard")}
                        className="flex items-center lg:justify-start justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <Image src={logo} className="h-32 w-32" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Learn Coding
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center lg:justify-start justify-center lg:py-0 py-10 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="flex lg:justify-start justify-center">
                        <button
                            type="button"
                            className=" capitalize bg-gray-700 text-white px-5 rounded-s-xl"
                        >
                            subscribe
                        </button>
                        <input
                            type="text"
                            className="lg:w-full sm:w-96 w-full rounded-e-xl py-3 border-2"
                        />
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Flowbite™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
