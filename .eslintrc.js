module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "@nuxtjs/eslint-config-typescript"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/singleline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    "space-before-function-paren": "off",
    "no-unused-vars": "warn",
    "eol-last": "warn",
    "vue/valid-v-slot": ["warn", { allowModifiers: true }],
    "vue/no-unused-components": "warn",
    "vue/no-multiple-template-root": "off",
    "parsing error: '>'": "off"
  }
};
