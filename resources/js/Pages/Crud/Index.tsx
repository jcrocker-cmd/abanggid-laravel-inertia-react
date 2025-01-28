import { Link, router } from "@inertiajs/react";

interface Post {
    // This 'post' matches the 'post' key from backend
    id: number;
    title: string;
    content: string;
}

interface Props {
    posts: Post[];
}

const Index = ({ posts }: Props) => {
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this post?")) {
            router.delete(`/crud/${id}/delete`);
        }
    };

    // We receive the data using this same name (post)
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Posts</h1>
                <Link
                    href="/crud/create"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create Post
                </Link>
            </div>

            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-left font-bold">
                            <th className="px-6 pt-5 pb-4">Title</th>
                            <th className="px-6 pt-5 pb-4">Content</th>
                            <th className="px-6 pt-5 pb-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-100">
                                <td className="border-t px-6 py-4">
                                    {post.title}
                                </td>
                                <td className="border-t px-6 py-4">
                                    {post.content}
                                </td>
                                <td className="border-t px-6 py-4">
                                    <Link
                                        href={`/crud/${post.id}/edit`}
                                        className="text-blue-600 hover:underline mr-3"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
