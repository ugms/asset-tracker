module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-console": "off",
    "import/extensions": "off",
    "import/order": "warn",
    "react/prop-types": "off",
    "react/destructuring-assignment": "warn",
    "react/no-unescaped-entities": "warn"
  }
};
