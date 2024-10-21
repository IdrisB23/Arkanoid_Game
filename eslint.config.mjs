import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


// configs override each other by order, from top to the bottom of the array
// Configs (incl. extended from pluggings) may be extracted/displayed via:
// `./node_modules/.bin/eslint --print-config eslint.config.mjs > "./.eslintrc.js_fullsettings.js"`
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
  {ignores: ["node_modules/**/*.{js,mjs,cjs,ts,jsx,tsx}",
      "dist/**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
];