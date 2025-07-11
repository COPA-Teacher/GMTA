/// src/configs/app.config.ts

import dotenv from 'dotenv';
import { appConfigSchema } from '../types/app.config.type.js';
import { z } from 'zod';
import { ConfigValidationError } from '../errors/configValidation.error.js';

dotenv.config();

const appConfigValidation = appConfigSchema.safeParse({
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3737,
    nodeEnv: process.env.NODE_ENV || 'Development',
});

if (!appConfigValidation.success) {
    throw new ConfigValidationError(appConfigValidation.error);
}

type AppConfig = z.infer<typeof appConfigSchema>;

const appConfig: AppConfig = appConfigValidation.data;

export default appConfig;
