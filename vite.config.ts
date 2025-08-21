import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@/components": "/src/components",
      "@/pages": "/src/pages",
      "@/utils": "/src/utils",
      "@/hooks": "/src/hooks",
      "@/types": "/src/types",
      "@/assets": "/src/assets",
      "@/styles": "/src/styles",
    },
  },
  server: {
    port: 3000, // 프론트엔드 포트
    host: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 백엔드 서버 URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
