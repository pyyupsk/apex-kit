import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import turbo from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlywarn from "eslint-plugin-only-warn";

export default tseslint.config(
  eslint.configs.recommended,
  perfectionist.configs["recommended-natural"],
  tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        parser: tseslint.parser,
      },
      sourceType: "module",
    },
  },
  {
    plugins: {
      turbo,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlywarn,
    },
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    ignores: ["dist/**"],
  },
);
