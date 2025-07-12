import { z } from 'zod';

export const AppConfigSchema = z.object({
    PORT: z.number().min(1000).max(65535).default(3737),
    NODE_ENV: z
        .enum(['Development', 'Production', 'Test'])
        .default('Development'),
    IS_DEV: z.boolean().default(true),
    IS_PROD: z.boolean().default(false),
    IS_TEST: z.boolean().default(false),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;
