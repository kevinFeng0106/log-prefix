// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  stylistic.configs.customize({
    semi: true,
    quotes: "double",
  }),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
