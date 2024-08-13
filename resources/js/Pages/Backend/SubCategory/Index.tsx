import DataNotFound from "@/Components/Backend/DataNotFound";
import Pagination from "@/Components/Backend/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function SubCategory() {
    const { sub_categories, success } = usePage().props;
    console.log(success);
    return (
        <AdminLayout>
            <Head title="Admin Sub Category" />
            <div className="p-4 border-2 border-green-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="mb-3 bg-green-300 drop-shadow-sm rounded-lg flex justify-between items-center py-1 px-5">
                    <span className=" text-xl text-white font-semibold">
                        Sub Categories - {success}
                    </span>
                    <Link
                        href={route("admin.sub_category.create")}
                        className=" border-2 border-dashed border-white transition-all hover:border-solid hover:border-green-400 hover:bg-green-500 text-white text-lg font-semibold px-5 py-1 rounded-md"
                    >
                        Create
                    </Link>
                </div>
                <div className=" relative overflow-x-auto overflow-y-hidden">
                    <table className="w-full">
                        <thead className=" bg-gray-50 drop-shadow-sm text-lg rounded-md">
                            <tr>
                                <th className="py-2 px-5 hover:bg-gray-100">
                                    #
                                </th>
                                <th className="py-2 hover:bg-gray-100">Name</th>
                                <th className="py-2 hover:bg-gray-100">Slug</th>
                                <th className="py-2 hover:bg-gray-100">
                                    Category
                                </th>
                                <th className="py-2 hover:bg-gray-100">
                                    Image
                                </th>
                                <th className="py-2 hover:bg-gray-100">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                            {sub_categories.data.length > 0 ? (
                                sub_categories.data.map(
                                    (sub_category, index) => (
                                        <tr key={index + 1}>
                                            <td className="text-center">
                                                {index + 1}
                                            </td>
                                            <td className="text-center">
                                                {sub_category.name}
                                            </td>
                                            <td className="text-center">
                                                {sub_category.slug}
                                            </td>
                                            <td className="text-center">
                                                {sub_category.category.name}
                                            </td>
                                            <td>
                                                <img
                                                    src={sub_category.image}
                                                    className="w-20 h-[5.5rem] py-2 mx-auto"
                                                    alt="..."
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Link
                                                    href={route(
                                                        "admin.sub_category.edit",
                                                        sub_category.id
                                                    )}
                                                    className=" text-blue-500 me-1"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.sub_category.destroy",
                                                        sub_category.id
                                                    )}
                                                    className=" text-red-500"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                )
                            ) : (
                                <DataNotFound colSpan={7} />
                            )}
                        </tbody>
                    </table>
                    <Pagination items={sub_categories} />
                </div>
            </div>
        </AdminLayout>
    );
}
