module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'next.config.mjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'react-compiler/react-compiler': 'error',
  },
  overrides: [
    {
      files: ['src/*.tsx'],
      rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
      },
      noInlineConfig: true,
    },
  ],
};
