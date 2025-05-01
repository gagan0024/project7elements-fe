import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:2025/v1.0/", // your backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // removes /api from request path
      },
    },
  },
});
