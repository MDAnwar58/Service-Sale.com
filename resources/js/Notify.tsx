import React, { useEffect, useState } from "react";

interface Props {
    status?: string;
    msg?: string;
    notify?: boolean;
}

export function Notify({ status, msg, notify = false }: Props) {
    const [notification, setNotification] = useState(notify);
    useEffect(() => {
        if (notification === true) {
            setTimeout(() => {
                setNotification(false);
            }, 3000);
        }
    }, [notification]);
    return (
        <div
            className={`${
                notification === false && "hidden"
            } flex items-center fixed top-5 right-10 z-50 bg-gray-100 px-3 py-1 rounded-lg border-b-4 border-green-500`}
        >
            <div>
                <span className=" bg-green-400 text-white font-bold py-1 px-3 rounded-full">
                    i
                </span>
            </div>
            <div className="ps-3 pe-5">
                <div className="flex justify-between">
                    <div>
                        <span className="font-semibold text-xl text-green-400">
                            success
                        </span>
                    </div>
                    <div>
                        <button
                            type="button"
                            className=""
                            onClick={() => setNotification(false)}
                        >
                            close
                        </button>
                    </div>
                </div>
                <div className=" text-gray-700 text-lg font-medium">
                    Item Created!
                </div>
            </div>
        </div>
    );
}
