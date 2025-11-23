import { config as reactConfig } from "@workspace/eslint-config/react-internal";
import autoImports from "./.wxt/eslint-auto-imports.mjs";

export default [
  autoImports,
  ...reactConfig,
  {
    ignores: [".wxt/**", ".output/**"],
  },
];
