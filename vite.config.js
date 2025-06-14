import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true, // Mengizinkan akses dari jaringan lain
    strictPort: true,
    watch: {
      usePolling: true, // Menghindari masalah HMR di beberapa OS
    },
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5173,
      overlay: false,
    },
  },
});
