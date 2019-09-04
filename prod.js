module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard'
  ].map(require.resolve),
  rules: {
    "no-unused-vars": ["error"],
    "no-undef": ["error"],
    "no-return-assign": 0,
    "no-console": ["error"]
  }
}
