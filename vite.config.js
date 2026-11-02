import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// github pages serves the site from /food-app-lab/ so the build needs that base
// locally (npm run dev) we keep "/" so nothing changes
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/food-app-lab/" : "/",
});
