import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// github pages needs the /food-app-lab/ base, everywhere else stays "/"
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_ACTIONS ? "/food-app-lab/" : "/",
});