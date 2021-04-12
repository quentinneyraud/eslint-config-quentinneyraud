const isProd = process.env.NODE_ENV === 'production'

const config = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    curly: ['error', 'multi-line'],
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    'vue/no-v-html': 0,
    'arrow-parens': ['error', 'as-needed'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false
    }],
    'template-curly-spacing': 0,
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral']
    }],
    'vue/custom-event-name-casing': 0,
    'vue/no-lone-template': 0,
    'no-console': ['warn'],
    'no-undef': ['error'],
    'no-var': ['error'],
    'prefer-const': ['error', {
      destructuring: 'all'
     }],
    'vue/multiline-html-element-content-newline': ['error', {
      allowEmptyLines: true
    }]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.rules['no-unused-vars'] = ['error', {
    argsIgnorePattern: '^_',
    varsIgnorePattern: '^_'
  }]

  config.rules['no-console'] = ['error']
}


module.exports = config
