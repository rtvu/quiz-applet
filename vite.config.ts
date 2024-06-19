import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  root: "src",
  build: {
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env["VITE_PORT"]),
    strictPort: true,
  },
  preview: {
    port: Number(process.env["VITE_PREVIEW_PORT"]),
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./js/__testing__/vitest-setup.ts"],
  },
});
