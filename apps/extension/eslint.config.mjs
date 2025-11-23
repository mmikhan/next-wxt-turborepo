import autoImports from './.wxt/eslint-auto-imports.mjs';
import { config as reactConfig } from "@workspace/eslint-config/react-internal";

export default [
  autoImports,
  ...reactConfig,
  {
    ignores: [".wxt/**", ".output/**"]
  },
];
