import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import airbnbBase from 'eslint-config-airbnb-base';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['src/**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
            },
            globals: globals.browser,
        },
        plugins: {
            '@typescript-eslint': tseslint,
            prettier: prettierPlugin,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...airbnbBase.rules,
            'prettier/prettier': 'error',
        },
    },
    prettierConfig,
];
