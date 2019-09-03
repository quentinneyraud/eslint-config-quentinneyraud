# Eslint config

Personal eslint config for dev, prod, vue dev and vue prod projects

> View doc [here](https://quentinneyraud.github.io/eslint-config)

## Install

You need to install the package and all the peer dependencies  

#### Quick way:

Yarn

```bash
npx install-peerdeps @qneyraud/eslint-config --yarn --dev
```

Npm

```bash
npx install-peerdeps @qneyraud/eslint-config --dev
```

#### Long way:

Yarn  
```bash
# Yarn
yarn add @qneyraud/eslint-config --dev

# Install all packages listed by
yarn info "@qneyraud/eslint-config" peerDependencies
```

Npm  
```bash
npm install @qneyraud/eslint-config --dev

# Install all packages listed by
npm info "@qneyraud/eslint-config" peerDependencies
```

## Usage

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
