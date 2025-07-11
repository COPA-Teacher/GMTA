// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default [
    {
        ignores: [
            '.eslintrc.js',
            'eslint.config.js',
            'node_modules',
            'dist',
            'build',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': 'error',
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
    },
];
