import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    react(),
    {
      name: "spa-github-pages-fallback",
      closeBundle() {
        const index = resolve(__dirname, "dist/index.html");
        const fallback = resolve(__dirname, "dist/404.html");
        if (existsSync(index)) {
          copyFileSync(index, fallback);
        }
      },
    },
  ],
  server: {
    watch: {
      ignored: ["**/.verify-shots/**", "**/dist/**"],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
