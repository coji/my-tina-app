import { defineConfig } from "vite";
import { vitePlugin } from "@remix-run/dev";
import tsConfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite";

export default defineConfig({
  plugins: [vitePlugin({ presets: [vercelPreset()] }), tsConfigPaths()],
});
