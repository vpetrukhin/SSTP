import { defineConfig } from "vite";
import TemplateLoader from "./plugins/vite-template-plugin";

export default defineConfig({
  build: {
    target: "es2017",
    outDir: "build",
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
  plugins: [TemplateLoader()],
});
