import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/crud");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Create Post</h1>

            <form onSubmit={submit}>
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                    />
                    {errors.title && (
                        <div className="text-red-500">{errors.title}</div>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Content</label>
                    <textarea
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        className="border rounded px-2 py-1 w-full"
                    />
                    {errors.content && (
                        <div className="text-red-500">{errors.content}</div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default Create;
