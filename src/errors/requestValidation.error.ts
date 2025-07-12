// src/errors/requestValidation.error.ts
import { ZodError } from 'zod';
import { AppError } from './app.error.js'; // Adjust based on your file structure

export class RequestValidationError extends AppError {
    constructor(zodError: ZodError) {
        super(
            'Request validation failed',
            400,
            RequestValidationError.formatZodIssues(zodError)
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
