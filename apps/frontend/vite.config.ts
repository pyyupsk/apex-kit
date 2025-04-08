import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import router from "unplugin-vue-router/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [router(), vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
