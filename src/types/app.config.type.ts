import { z } from 'zod';

export const AppConfigSchema = z.object({
    PORT: z.number().min(1000).max(65535).default(3737),
    NODE_ENV: z
        .enum(['Development', 'Production', 'Test'])
        .default('Development'),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;
