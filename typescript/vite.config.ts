import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// https://vite.dev/config/
export default defineConfig({
  base: isGitHubActions ? "/home/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
