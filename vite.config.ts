import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve("src/components"),
      features: path.resolve("src/features"),
      assets: path.resolve("src/assets"),
      store: path.resolve("src/store"),
      constants: path.resolve("src/constants"),
      utils: path.resolve("src/utils"),
      data: path.resolve("src/data"),
      types: path.resolve("src/types"),
      page: path.resolve("src/pages"),
      service: path.resolve("src/service"),
      layout: path.resolve("src/layout")
    },
  },
});
