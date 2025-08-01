// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:unused-imports/recommended',
    'plugin:simple-import-sort/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    // 👇 key rules to auto-fix the stuff you're facing
    'prefer-const': 'error',
    'no-var': 'error',
    'unused-imports/no-unused-imports': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@next/next/no-img-element': 'error', // force <Image />
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
