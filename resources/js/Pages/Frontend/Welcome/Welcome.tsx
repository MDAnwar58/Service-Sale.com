import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Header from "./Components/Header";
import Documents from "./Components/Documents";
import Tutorials from "./Components/Tutorials";
import News from "./Components/News";
import Course from "./Components/Course";
import Image from "./Components/Image";
import viteLogo from "@/Assets/images/vite.svg";
import larvelLogo from "@/Assets/images/laravel.png";
import reactLogo from "@/Assets/images/react.png";
import inertiaJSLogo from "@/Assets/images/inertiajs.png";
import reduxLogo from "@/Assets/images/redux.png";
import Footer from "@/Components/Frontend/Footer";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <Header auth={auth} />
                        <main className="mt-24">
                            <h1 className=" uppercase text-5xl text-gray-900 dark:text-white font-mono text-center pt-10">
                                learn and get paid software buy With Low Cost
                            </h1>
                            <p className=" text-xl font-semibold text-center pt-5">
                                learn on backend web development and frontend
                                web development.
                            </p>
                            <div className="text-center pt-10">
                                <Link href={route("dashboard")}>
                                    <span className=" text-gray-500 hover:bg-gray-500/5 hover:drop-shadow-sm transition-all border border-gray-700 hover:border-gray-50 rounded-xl px-10 p-3">
                                        Get Start
                                    </span>
                                </Link>
                            </div>
                            <div className="lg:flex justify-center gap-20 py-52">
                                <div className="flex lg:gap-20 gap-0">
                                    <Image
                                        src={larvelLogo}
                                        alt="Laravel Image"
                                        className="mx-auto h-20 w-20"
                                    />
                                    <Image
                                        src={viteLogo}
                                        alt="Vite Image"
                                        className="mx-auto h-20 w-20"
                                    />
                                    <Image
                                        src={reactLogo}
                                        alt="Vite Image"
                                        className="mx-auto h-20 w-20"
                                    />
                                </div>
                                <div className="flex lg:gap-20 gap-0 lg:pt-0 pt-20">
                                    <Image
                                        src={inertiaJSLogo}
                                        alt="Vite Image"
                                        className="mx-auto h-20 w-20"
                                    />
                                    <Image
                                        src={reduxLogo}
                                        alt="Vite Image"
                                        className="mx-auto h-20 w-20"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <Documents
                                    handleImageError={handleImageError}
                                />

                                <Tutorials />

                                <News />

                                <Course />
                            </div>
                        </main>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
