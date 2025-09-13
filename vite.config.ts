import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    cors: true,  // Allow cross-origin requests in development
  },
  preview: {
    allowedHosts: ["*"],  // Allow all hosts in production preview
  },
});
