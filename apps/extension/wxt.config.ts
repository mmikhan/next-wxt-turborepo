import { resolve } from "node:path";
import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: false,
  srcDir: "src",
  entrypointsDir: "app",
  modules: ["@wxt-dev/module-react"],
  alias: {
    // Only needed for shadcn/ui CLI to add components to the internal package
    "@workspace/ui": resolve(__dirname, "../packages/ui/src"),
  },
});
