import DataNotFound from "@/Components/Backend/DataNotFound";
import Pagination from "@/Components/Backend/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function SubCategory() {
    const { items, success } = usePage().props;
    const { get } = useForm();

    const onChangeStatus = (e, itemId) => {
        e.preventDefault();
        get(route("admin.item.status", itemId));
    };

    return (
        <AdminLayout>
            <Head title="Admin Item" />
            <div className="p-4 border-2 border-green-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="mb-3 bg-green-300 drop-shadow-sm rounded-lg flex justify-between items-center py-1 px-5">
                    <span className=" text-xl text-white font-semibold">
                        Items
                    </span>
                    <Link
                        href={route("admin.item.create")}
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
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Name
                                </th>
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Slug
                                </th>
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Category
                                </th>
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Sub Category
                                </th>
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Title
                                </th>
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Status
                                </th>
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Image
                                </th>
                                <th className="py-2 px-3 hover:bg-gray-100">
                                    Image Icon
                                </th>
                                <th className="py-2 px-5 hover:bg-gray-100">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                            {items.data.length > 0 ? (
                                items.data.map((item, index) => (
                                    <tr key={index + 1}>
                                        <td className="text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-center">
                                            {item.name}
                                        </td>
                                        <td className="text-center">
                                            {item.slug}
                                        </td>
                                        <td className="text-center">
                                            {item.title}
                                        </td>
                                        <td className="text-center">
                                            {item.category.name}
                                        </td>
                                        <td className="text-center">
                                            {item.sub_category.name}
                                        </td>
                                        <td className="text-center">
                                            <form
                                                onSubmit={(e) =>
                                                    onChangeStatus(e, item.id)
                                                }
                                                method="GET"
                                            >
                                                {item.status === "active" ? (
                                                    <button
                                                        type="submit"
                                                        className=" bg-green-400 text-white px-3 rounded-full pb-[.15rem] border border-white"
                                                    >
                                                        Active
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        className=" bg-yellow-300 text-white px-3 rounded-full pb-[.15rem] border border-white"
                                                    >
                                                        Unactive
                                                    </button>
                                                )}
                                            </form>
                                        </td>
                                        <td>
                                            <img
                                                src={item.image}
                                                className="w-20 h-[5.5rem] py-2 mx-auto"
                                                alt="..."
                                            />
                                        </td>
                                        <td>
                                            <img
                                                src={item.icon_image}
                                                className="w-20 h-20 py-2 mx-auto rounded-full"
                                                alt="..."
                                            />
                                        </td>
                                        <td className="text-center">
                                            <Link
                                                href={route(
                                                    "admin.item.edit",
                                                    item.id
                                                )}
                                                className=" text-blue-500 me-1"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                href={route(
                                                    "admin.item.destroy",
                                                    item.id
                                                )}
                                                className=" text-red-500"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <DataNotFound colSpan={10} />
                            )}
                        </tbody>
                    </table>
                    <Pagination items={items} />
                </div>
            </div>
        </AdminLayout>
    );
}
