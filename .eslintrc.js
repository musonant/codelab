module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false }
    ],
    'import/prefer-default-export': false,
    'react/prefer-stateless-function': 0,
    'no-param-reassign': 0,
    'react/destructuring-assignment': false
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
