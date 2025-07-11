// src/errors/app.error.ts

export class AppError extends Error {
    public readonly statusCode: number;
    public readonly details?: unknown;

    constructor(message: string, statusCode = 500, details?: unknown) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}
