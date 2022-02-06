const typescript = require('@linters/eslint-config-angular/typescript')
const components = require('@linters/eslint-config-angular/components')
const templates = require('@linters/eslint-config-angular/templates')

module.exports = {
  ignorePatterns: ['**/node_modules', 'index.html'],
  root: true,
  env: {
    es6: true,
  },
  overrides: [typescript, components, templates],
}
