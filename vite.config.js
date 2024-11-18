import { defineConfig } from "vite";
import TemplateLoader from "./plugins/vite-template-plugin";
import vercel from "vite-plugin-vercel";
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
      },
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
  plugins: [TemplateLoader(), vercel()],
  vercel: {
    rewrites: [{ source: "/about", destination: "/about.html" }],
  },
});
