import base from "@packages/eslint-config/base";
import prettier from "@packages/eslint-config/prettier";
import vue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import globals from "globals";

const eslintConfig = defineConfig(
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
