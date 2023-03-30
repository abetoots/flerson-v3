import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    //no need to import global variables like “describe”, “expect”
    globals: true,
    environment: "jsdom",
    setupFiles: "./test-setup.ts",
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
