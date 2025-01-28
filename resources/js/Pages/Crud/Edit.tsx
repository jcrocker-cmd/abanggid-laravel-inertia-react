import { useForm } from "@inertiajs/react";

interface Props {
    post: {
        id: number;
        title: string;
        content: string;
    };
}

const Edit = ({ post }: Props) => {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        content: post.content,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/crud/${post.id}`);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Edit Post</h1>

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
                    Update
                </button>
            </form>
        </div>
    );
};

export default Edit;
