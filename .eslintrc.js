export default {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'default', format: ['camelCase'] },
            {
                selector: 'variable',
                modifiers: ['const'],
                format: ['UPPER_CASE'],
            },
            { selector: 'typeLike', format: ['PascalCase'] },
            { selector: 'enumMember', format: ['UPPER_CASE'] },
        ],
    },
};
