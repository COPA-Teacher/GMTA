/// src/configs/app.config.ts

import dotenv from 'dotenv';
import { appConfigSchema } from '../types/app.config.type.js';
import { z } from 'zod';
import { ConfigValidationError } from '../errors/configValidation.error.js';

dotenv.config();

const AppConfigValidation = appConfigSchema.safeParse({
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3737,
    NODE_ENV: process.env.NODE_ENV || 'Development',
});

if (!AppConfigValidation.success) {
    throw new ConfigValidationError(AppConfigValidation.error);
}

type AppConfigType = z.infer<typeof appConfigSchema>;

const AppConfig: AppConfigType = AppConfigValidation.data;

export default AppConfig;
