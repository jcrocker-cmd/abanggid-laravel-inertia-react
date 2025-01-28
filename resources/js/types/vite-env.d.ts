/// <reference types="vite/client" />

declare module "*.tsx" {
    const component: any;
    export default component;
}

declare global {
    interface ImportMeta {
        glob(path: string, options?: { eager: boolean }): Record<string, any>;
    }
}
