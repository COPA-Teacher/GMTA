// src/errors/configValidation.error.ts
import { ZodError } from 'zod';
import { AppError } from './app.error.js';

export class ConfigValidationError extends AppError {
    constructor(zodError: ZodError) {
        super(
            'Invalid configuration',
            500,
            ConfigValidationError.formatZodIssues(zodError)
        );
    }

    private static formatZodIssues(error: ZodError) {
        return error.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
            code: issue.code,
        }));
    }
}
