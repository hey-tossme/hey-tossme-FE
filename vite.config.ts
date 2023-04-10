import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            react(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        mapClientId: env.VITE_KAKAO_MAP_API_KEY,
                    },
                },
            }),
        ],
        server: {
            proxy: {
                "/proxy": {
                    target: "http://20.214.139.103:8080",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                    secure: false,
                    ws: true,
                },
            },
        },
    };
};
