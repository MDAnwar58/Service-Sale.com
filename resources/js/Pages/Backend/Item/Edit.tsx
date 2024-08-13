import FileInput from "@/Components/Frontend/FileInput";
import PrimaryButton from "@/Components/Frontend/PrimaryButton";
import SelectField from "@/Components/Frontend/SelectField";
import TextInput from "@/Components/Frontend/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Create() {
    const { item, categories, sub_categories } = usePage().props;
    const {
        data,
        setData,
        processing,
        errors,
        hasErrors,
        clearErrors,
        post,
        reset,
    } = useForm({
        name: item.name,
        title: item.title,
        category_id: item.category_id,
        sub_category_id: item.sub_category_id,
        des: item.des,
        image: "",
        icon_image: "",
        meta_title: item.meta_title,
        meta_des: item.meta_des,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("admin.item.store"));
    };

    return (
        <AdminLayout>
            <Head title="Admin Item Create" />
            <div className="p-4 dark:border-gray-700 mt-14">
                <form
                    onSubmit={submit}
                    method="POST"
                    encType="multipart/form-data"
                >
                    <div className=" mb-3">
                        <label
                            htmlFor="item name"
                            className=" text-xl text-gray-700"
                        >
                            Item Name
                        </label>
                        <TextInput
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full px-7 py-2 mt-1 rounded-lg border border-gray-300"
                            isFocused
                            autoComplete="name"
                        />
                    </div>
                    <div className=" mb-3">
                        <label
                            htmlFor="category name"
                            className=" text-xl text-gray-700"
                        >
                            Title
                        </label>
                        <TextInput
                            id="title"
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full px-7 py-2 mt-1 rounded-lg border border-gray-300"
                            isFocused
                            autoComplete="title"
                        />
                    </div>
                    <div className=" mb-3">
                        <label
                            htmlFor="item category"
                            className=" text-xl text-gray-700"
                        >
                            Category
                        </label>
                        <SelectField
                            id="category_id"
                            value={data.category_id}
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                            className="w-full px-7 py-2 mt-1 rounded-lg border border-gray-300"
                            isFocused
                            autoComplete="category_id"
                        >
                            {categories.length > 0 &&
                                categories.map((category, index) => (
                                    <option key={index + 1} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                        </SelectField>
                    </div>
                    <div className=" mb-3">
                        <label
                            htmlFor="item sub category"
                            className=" text-xl text-gray-700"
                        >
                            Sub Category
                        </label>
                        <SelectField
                            id="sub_category_id"
                            value={data.sub_category_id}
                            onChange={(e) =>
                                setData("sub_category_id", e.target.value)
                            }
                            className="w-full px-7 py-2 mt-1 rounded-lg border border-gray-300"
                            isFocused
                            autoComplete="sub_category_id"
                        >
                            {sub_categories.length > 0 &&
                                sub_categories.map((sub_category, index) => (
                                    <option
                                        key={index + 1}
                                        value={sub_category.id}
                                    >
                                        {sub_category.name}
                                    </option>
                                ))}
                        </SelectField>
                    </div>
                    <div className=" mb-3">
                        <label
                            htmlFor="item description"
                            className=" text-xl text-gray-700"
                        >
                            Discription
                        </label>
                        <textarea
                            id="des"
                            value={data.des}
                            rows={5}
                            onChange={(e) => setData("des", e.target.value)}
                            className="w-full px-7 py-5 mt-1 rounded-lg border border-gray-300"
                            autoComplete="des"
                        ></textarea>
                    </div>
                    <div className="mb-3 flex gap-3">
                        <div className="w-6/12">
                            <div className=" mb-3">
                                <label
                                    htmlFor="image"
                                    className=" text-xl text-gray-700"
                                >
                                    Image
                                </label>
                                <FileInput
                                    id="image"
                                    type="file"
                                    onChange={(e) => {
                                        setData("image", e.target.files[0]);
                                    }}
                                    isFocused
                                    autoComplete="image"
                                    className="w-full px-10 mt-1 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div className=" mb-3">
                                <label
                                    htmlFor="icon image"
                                    className=" text-xl text-gray-700"
                                >
                                    Image Icon
                                </label>
                                <FileInput
                                    id="icon_image"
                                    type="file"
                                    onChange={(e) => {
                                        setData(
                                            "icon_image",
                                            e.target.files[0]
                                        );
                                    }}
                                    isFocused
                                    autoComplete="icon_image"
                                    className="w-full px-10 mt-1 rounded-lg border border-gray-300"
                                />
                            </div>
                            <div className=" mb-3">
                                <label
                                    htmlFor="item meta title"
                                    className=" text-xl text-gray-700"
                                >
                                    Meta Tilte
                                </label>
                                <TextInput
                                    id="meta_title"
                                    type="text"
                                    value={data.meta_title}
                                    onChange={(e) =>
                                        setData("meta_title", e.target.value)
                                    }
                                    className="w-full px-7 py-2 mt-1 rounded-lg border border-gray-300"
                                    isFocused
                                    autoComplete="meta_title"
                                />
                            </div>
                        </div>
                        <div className="w-6/12">
                            <div className=" mb-3">
                                <label
                                    htmlFor="item meta description"
                                    className=" text-xl text-gray-700"
                                >
                                    Meta Description
                                </label>
                                <textarea
                                    id="des"
                                    value={data.meta_des}
                                    rows={7}
                                    onChange={(e) =>
                                        setData("meta_des", e.target.value)
                                    }
                                    className="w-full px-7 py-5 mt-1 rounded-lg border border-gray-300"
                                    autoComplete="meta_des"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="text-end">
                        <PrimaryButton
                            disabled={processing}
                            className=" uppercase px-10 py-3 text-md"
                        >
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
