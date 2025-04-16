/* eslint-disable prettier/prettier */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'react', 'react-memo', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['public/', 'node_modules/', '.next/', 'dist/'],
  rules: {
    // your rules here
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  env: {
    node: true,  // Make sure Node.js environment is specified
    es2020: true, // Ensure that ES2020 features are recognized
  },
};
