import { defineConfig } from "vite";
import TemplateLoader from "./plugins/vite-template-plugin";
import { resolve } from "path";

export default defineConfig({
  root: "./",
  build: {
    target: "es2017",
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        //contact: resolve(__dirname, "contact.html"),
      },
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
  plugins: [TemplateLoader()],
});
