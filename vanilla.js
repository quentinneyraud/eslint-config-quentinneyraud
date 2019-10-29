const isProd = process.env.NODE_ENV === 'production'

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
    'eslint-config-standard'
  ],
  rules: {
    "no-unused-vars": (isProd) ? ["error"] : ["warn"],
    "no-undef": ["error"],
    "no-return-assign": 0,
    "no-console": (isProd) ? ["error"] : ["warn"],
    "no-var": ["error"],
    "prefer-const": ["error"]
  }
}
