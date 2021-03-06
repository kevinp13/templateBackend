module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'google',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', 'tsconfig.dev.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    ignorePatterns: [
        '/lib/**/*', // Ignore built files.
        'jest.config.js',
    ],
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    rules: {
        'quotes': ['error', 'single'],
        'require-jsdoc': 'off',
        'import/no-unresolved': 0,
        'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false }],
        'max-len': ['error', { 'code': 120 }],
        'linebreak-style': 'off',
        'indent': ['error', 4],
    },
};
