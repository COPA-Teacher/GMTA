/// src/configs/app.config.ts

import dotenv from 'dotenv';
import { appConfigSchema } from '../types/app.config.type.js';
dotenv.config();

const appConfig = appConfigSchema.safeParse({
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3737,
    nodeEnv: process.env.NODE_ENV || 'Development',
});

export default appConfig;
