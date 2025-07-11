import { z } from 'zod';

export const appConfigSchema = z.object({
    port: z.number().min(1000).max(65535).default(3737),
    nodeEnv: z
        .enum(['Development', 'Production', 'Test'])
        .default('Development'),
});

export type AppConfig = z.infer<typeof appConfigSchema>;
