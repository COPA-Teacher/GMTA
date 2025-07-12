// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import path from 'path';

export default [
    {
        ignores: [
            '.eslintrc.js',
            'eslint.config.js',
            'vitest.config.ts',
            'vitest.config.js',
            'node_modules',
            'dist',
            'build',
            'extra/*.ts',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: path.resolve(),
            },
        },
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
                    format: ['PascalCase'],
                },
                { selector: 'typeLike', format: ['PascalCase'] },
                {
                    selector: 'enumMember',
                    format: ['UPPER_CASE', 'snake_case'],
                },
                {
                    selector: 'classProperty',
                    modifiers: ['private'],
                    format: ['camelCase'],
                    trailingUnderscore: 'require',
                },
                {
                    selector: 'parameterProperty',
                    modifiers: ['private'],
                    format: ['camelCase'],
                    trailingUnderscore: 'require',
                },
                {
                    selector: 'objectLiteralProperty',
                    format: ['camelCase', 'snake_case', 'UPPER_CASE'],
                },
            ],
        },
    },
];
