import base from "./base.mjs";

export default {
  ...base,
  jsxSingleQuote: true,
  tailwindPreserveWhitespace: true,
  tailwindFunctions: [
    "tw"
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
