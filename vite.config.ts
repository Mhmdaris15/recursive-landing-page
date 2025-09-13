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
    host: "0.0.0.0",  // Bind to all interfaces
    port: 3007,
    strictPort: true,
  },
});
