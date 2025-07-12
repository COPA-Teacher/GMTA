import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',

        // Include both `.spec.ts` and `.test.ts` files
        include: [
            'src/**/*.spec.ts',
            'src/**/*.test.ts',
            'src/__tests__/**/*.ts',
        ],

        // Exclude common build/temp/output directories
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.{idea,git,cache,output,temp}/**',
            '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
        ],

        coverage: {
            reporter: ['text', 'html'],
            reportsDirectory: './coverage',
            exclude: [
                'src/types/**',
                'src/configs/**',
                '**/*.d.ts',
                '**/__tests__/**/helpers/**',
            ],
        },

        watch: false,
        allowOnly: true, // warn if `.only` is committed
    },
});
