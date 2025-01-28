import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { InertiaProgress } from "@inertiajs/progress";

type PageModule = () => Promise<any>;

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<PageModule>("./Pages/**/*.tsx", {
            eager: true,
        });
        return pages[`./Pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

// Initialize the progress bar
InertiaProgress.init({
    // Optional configuration
    delay: 250,
    color: "#4B5563", // Default color
    showSpinner: true, // Show spinner during loading
    includeCSS: true, // Include default styles
});
