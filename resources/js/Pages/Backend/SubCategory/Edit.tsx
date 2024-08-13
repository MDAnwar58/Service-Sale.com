import FileInput from "@/Components/Frontend/FileInput";
import PrimaryButton from "@/Components/Frontend/PrimaryButton";
import SelectField from "@/Components/Frontend/SelectField";
import TextInput from "@/Components/Frontend/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Create() {
    const { sub_category, categories } = usePage().props;
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
        name: sub_category.name,
        category_id: sub_category.category.id,
        image: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("admin.sub_category.update", sub_category.id));
    };
    // const onChangeFormValueHandle = (e) => {
    //     setData(e.target.value);
    // };

    return (
        <AdminLayout>
            <Head title="Admin Sub Category Create" />
            <div className="p-4 dark:border-gray-700 mt-14">
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className=" mb-3">
                        <label
                            htmlFor="category name"
                            className=" text-xl text-gray-700"
                        >
                            Sub Category Name
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
                            htmlFor="category name"
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
                    <div className="text-end">
                        <PrimaryButton
                            disabled={processing}
                            className="px-10 py-3 text-md"
                        >
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
