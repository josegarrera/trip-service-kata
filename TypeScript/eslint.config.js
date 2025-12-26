import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": "warn"
    }
  },
  {
    ignores: ["dist/**", "node_modules/**"]
  }
);
