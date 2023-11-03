module.exports = {
    extends: ['plugin:svelte/recommended'],
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        extraFileExtensions: ['.svelte'],
    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'svelte/rule-name': 'error'
        'svelte/no-target-blank': 'error',
        'svelte/no-unused-svelte-ignore': 'error',
        'svelte/require-each-key': 'error',
        'comma-style': ['error', 'last'],
        quotes: ['error', 'single', { 'avoidEscape': true }]
    },
    ignorePatterns: ['*.config.js'],
}
