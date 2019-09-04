# Eslint config

Personal eslint config for dev, prod, vue dev and vue prod projects

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

This package exports four ESLint configurations

### Vanilla JS development

For development, warnings on strict rules

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/dev"
}
```

### Vanilla JS production

For production, errors on strict rules

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/prod"
}
```

### Nuxt development

For Nuxt projects in development, warnings on strict rules

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/nuxt-dev"
}
```

### Nuxt production

For Nuxt projects in production, warnings on strict rules

```js
// .eslintrc.js
module.exports = {
  "extends": "@qneyraud/eslint-config/nuxt-prod"
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

[Creating a Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs)
