import base from "@packages/eslint-config/base";
import prettier from "@packages/eslint-config/prettier";
import tseslint from "typescript-eslint";

const eslintConfig = tseslint.config(base, prettier);

export default eslintConfig;
