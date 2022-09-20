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
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-end-tags': 'off',
    'vue/html-indent': 'off',
    'vue/html-quotes': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-multi-spaces': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': 'off'
  }
}
