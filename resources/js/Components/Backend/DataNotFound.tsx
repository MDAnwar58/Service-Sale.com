import React from "react";

interface Props {
    colSpan?: number;
}

export default function DataNotFound({ colSpan }: Props) {
    return (
        <tr className="text-center text-xl font-medium">
            <td colSpan={colSpan} className=" py-2 text-gray-500">
                Data not found
            </td>
        </tr>
    );
}
