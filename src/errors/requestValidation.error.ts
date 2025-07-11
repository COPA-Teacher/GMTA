// src/errors/requestValidation.error.ts

import { ZodError } from 'zod';
import { AppError } from './app.error.js';

export class RequestValidationError extends AppError {
    constructor(zodError: ZodError) {
        super('Request validation failed', 400, zodError.format());
    }
}
