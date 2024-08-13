import React, { Fragment } from "react";
import SideBar from "./Partials/Backend/SideBar";
import NavBar from "./Partials/Backend/NavBar";
import { Notify } from "@/Notify";

interface Props {
    children: any;
}

export default function AdminLayout({ children }: Props) {
    return (
        <Fragment>
            <div>
                <NavBar />
                <SideBar />
                <div className="p-4 sm:ml-64">{children}</div>
            </div>

            <Notify />
        </Fragment>
    );
}
