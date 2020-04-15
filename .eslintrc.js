module.exports = {
  extends: [
    '@jeansarlon/eslint-config-base',
    '@jeansarlon/eslint-config-react',
    '@jeansarlon/eslint-config-typescript',
    'eslint-plugin-import/errors',
    'eslint-plugin-import/warnings',
    'eslint-plugin-import/typescript'
  ],
  env: {
    browser: true
  },
  globals: {
    browser: true,
    cy: true,
    Cypress: true
  },
  overrides: [{
    files: ["*.ts", "*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-member-accessibility": "warn",
      "@typescript-eslint/array-type": "warn",
      "@typescript-eslint/consistent-type-definitions": "warn",
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/no-var-requires": "warn"
    }
  }],
  rules: {
    'class-methods-use-this': 'warn',
    'complexity': 'warn',
    'global-require': 'warn',
    'import/first': 'warn',
    'import/order': 'warn',
    'import/no-unresolved': 'warn',
    'no-negated-condition': 'warn',
    'no-param-reassign': 'warn',
    'no-script-url': 'warn',
    'no-shadow': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-bind': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/sort-comp': 'warn',
    'quotes': 'warn',
    'no-var': 'warn',
    'one-var': 'warn',
    'camelcase': 'warn',
    'react/no-danger': 'warn',
    'vars-on-top': 'warn',
    'generator-star-spacing': 'warn',
    'comma-dangle': 'warn',
    'no-var': 'warn',
    'max-len': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }]
  },
  settings: {
    'import/core-modules': [
    ]
  }
}
