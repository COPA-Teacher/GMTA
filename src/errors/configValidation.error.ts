// src/errors/configValidation.error.ts

import { ZodError } from 'zod';
import { AppError } from './app.error.js';

export class ConfigValidationError extends AppError {
    constructor(zodError: ZodError) {
        super('Invalid configuration', 500, zodError.format());
    }
}
