// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
  },
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'react-hooks', 'jest'],
  ignorePatterns: [
    // 'webpack.config.js',
    'jest_config/*.js',
    'webpack/*.*',
    'server/*.*',
    'src/serverRenderer.js'
  ],
  rules: {
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'max-len': ['warn', { code: 80, ignoreComments: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    camelcase: ['warn', { ignoreDestructuring: true, properties: 'never' }],
    eqeqeq: ['error', 'smart'],
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'no-eval': 'error',
    'no-redeclare': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unsafe-finally': 'error',
    'no-var': 'error',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
      },
    },
  ],
};
