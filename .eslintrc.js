module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@ui', './src/components/ui'],
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js 등에서 필요할 수 있음
    'react/prefer-stateless-function': 'off', // 필요에 따라 설정
    'react/jsx-filename-extension': 'off', // 필요에 따라 설정
    'react/jsx-one-expression-per-line': 'off', // 필요에 따라 설정
    'no-nested-ternary': 'off', // 필요에 따라 설정
    'prettier/prettier': 'error',
    'import/no-unresolved': ['error', { caseSensitive: false }], // 필요에 따라 설정
    'react/prop-types': 'off', // TypeScript 등을 사용할 경우 설정
    'import/no-extraneous-dependencies': 'off', // 필요에 따라 설정
    'react/jsx-props-no-spreading': 'off', // 필요에 따라 설정
    'jsx-a11y/heading-has-content': 'off', // 제목 요소에 내용이 필요하지 않을 경우 비활성화
    'import/prefer-default-export': 'off', // 단일 export를 사용할 때 default export 선호 설정
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelAttributes: ['htmlFor'],
      },
    ], // 필요에 따라 설정
  },
};
