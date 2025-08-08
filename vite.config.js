import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/React-O-Timer/",
  plugins: [react()],
  test: {
    environment: "jsdom", // ✅ Simulates browser
    globals: true, // ✅ (optional) lets you use `describe`, `it` without importing
    setupFiles: "./test/setup.js",
  },
});
