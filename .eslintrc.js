module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      requireConfigFile: false,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
      // Add custom ESLint rules here
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    globals: {
        console: true,
    },
  };