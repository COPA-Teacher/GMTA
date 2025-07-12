// src/errors/notFoundValidation.error.ts
import { ZodError } from 'zod';
import { AppError } from './app.error.js';

export class NotFoundValidationError extends AppError {
    constructor(zodError: ZodError) {
        super(
            'Resource not found based on input',
            404,
            NotFoundValidationError.formatZodIssues(zodError)
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
