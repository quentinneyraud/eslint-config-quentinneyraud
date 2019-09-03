# Eslint config

Personal eslint config for dev, prod, vue dev and vue prod projects

> View doc [here](https://quentinneyraud.github.io/eslint-config)

## Install

```bash
yarn add @qneyraud/eslint-config
```

## Usage

First, install missing peer dependencies.

```bash
# List peer dependencies
yarn info @qneyraud/eslint-config peerDependencies

# Install them
```

In development

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/dev"
}
```

In production

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/prod"
}
```

In Vue/nuxt project development

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/vue-dev"
}
```

In Vue/nuxt project production

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/vue-prod"
}
```

## Development

```
# clone repo
git clone git@github.com:quentinneyraud/eslint-config.git
cd eslint-config

# install dependencies
yarn
```
