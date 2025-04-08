import base from "@packages/eslint-config/base";
import prettier from "@packages/eslint-config/prettier";
import vue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintConfig = tseslint.config(
  base,
  {
    extends: [...vue.configs["flat/recommended"]],
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        definePage: "readonly",
      },
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "vue/multi-word-component-names": "off",
    },
  },
  prettier,
);

export default eslintConfig;
