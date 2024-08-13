import DataNotFound from "@/Components/Backend/DataNotFound";
import Pagination from "@/Components/Backend/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Category() {
    const { categories } = usePage().props;

    return (
        <AdminLayout>
            <Head title="Admin Category" />
            <div className="p-4 border-2 border-green-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="mb-3 bg-green-300 drop-shadow-sm rounded-lg flex justify-between items-center py-1 px-5">
                    <span className=" text-xl text-white font-semibold">
                        Categories
                    </span>
                    <Link
                        href={route("admin.category.create")}
                        className=" border-2 border-dashed border-white transition-all hover:border-solid hover:border-green-400 hover:bg-green-500 text-white text-lg font-semibold px-5 py-1 rounded-md"
                    >
                        Create
                    </Link>
                </div>
                <div className=" relative overflow-x-auto overflow-y-hidden">
                    <table className="w-full">
                        <thead className=" bg-gray-50 drop-shadow-sm text-lg rounded-md">
                            <tr>
                                <th className="py-2 hover:bg-gray-100">#</th>
                                <th className="py-2 hover:bg-gray-100">Name</th>
                                <th className="py-2 hover:bg-gray-100">Slug</th>
                                <th className="py-2 hover:bg-gray-100">
                                    Image
                                </th>
                                <th className="py-2 hover:bg-gray-100">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                            {categories.data.length > 0 ? (
                                categories.data.map((category, index) => (
                                    <tr key={index + 1}>
                                        <td className="text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-center">
                                            {category.name}
                                        </td>
                                        <td className="text-center">
                                            {category.slug}
                                        </td>
                                        <td>
                                            <img
                                                src={category.image}
                                                className="w-20 py-2 mx-auto"
                                                alt="..."
                                            />
                                        </td>
                                        <td className="text-center">
                                            <Link
                                                href={route(
                                                    "admin.category.edit",
                                                    category.id
                                                )}
                                                className=" text-blue-500 me-1"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                href={route(
                                                    "admin.category.destroy",
                                                    category.id
                                                )}
                                                className=" text-red-500"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <DataNotFound colSpan={5} />
                            )}
                        </tbody>
                    </table>

                    <Pagination items={categories} />
                </div>
            </div>
        </AdminLayout>
    );
}
