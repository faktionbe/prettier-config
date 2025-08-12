import base from "./base.mjs";

export default {
  ...base,
  jsxSingleQuote: true,
  tailwindPreserveWhitespace: false,
  tailwindFunctions: [
    "tw",
    "cn",
    "clsx",
    "twMerge"
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
