import { PrimeReactProvider } from "primereact/api";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { useState } from "react";
import { Link } from "@inertiajs/react";

const Homepage = () => {
    const [text, setText] = useState<string>("");

    return (
        <PrimeReactProvider>
            <Link href="/about" className="text-blue-500 hover:underline">
                Go to About
            </Link>
            <h1 className="text-3xl font-bold text-red-500 underline">
                homepage
            </h1>
            <Editor
                value={text}
                onTextChange={(e: EditorTextChangeEvent) =>
                    setText(e.htmlValue ?? "")
                }
                style={{ height: "320px" }}
            />
        </PrimeReactProvider>
    );
};

export default Homepage;
