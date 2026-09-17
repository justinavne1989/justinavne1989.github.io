import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const UNLISTED_PATH = "technology-operations-plan-7x4m9";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    react(),
    {
      name: "spa-github-pages-fallback",
      closeBundle() {
        const index = resolve(__dirname, "dist/index.html");
        const fallback = resolve(__dirname, "dist/404.html");
        if (!existsSync(index)) return;
        copyFileSync(index, fallback);

        const html = readFileSync(index, "utf8");
        const unlistedHtml = html.replace(
          "<head>",
          `<head>\n    <meta name="robots" content="noindex, nofollow, noarchive" />`,
        );
        const unlistedDir = resolve(__dirname, "dist", UNLISTED_PATH);
        mkdirSync(unlistedDir, { recursive: true });
        writeFileSync(resolve(unlistedDir, "index.html"), unlistedHtml);
        writeFileSync(resolve(__dirname, "dist", `${UNLISTED_PATH}.html`), unlistedHtml);
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
