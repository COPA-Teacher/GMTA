import winston, { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { v4 as uuidv4 } from 'uuid';
import AppConfig from '../configs/app.config.js';
import fs from 'fs';
import path from 'path';

// Ensure log directory exists
const env = AppConfig.NODE_ENV || 'development';
const logDir = path.join(process.cwd(), 'logs', env);
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

// Log levels and colors
const levels = {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: 7,
    silly: 8,
    http: 9,
};
const colors = {
    emerg: 'red',
    alert: 'red',
    crit: 'red',
    error: 'red',
    warning: 'yellow',
    notice: 'blue',
    info: 'green',
    debug: 'cyan',
    silly: 'magenta',
    http: 'gray',
};
winston.addColors(colors);

// Correlation ID injection
const correlationIdFormat = format((info) => {
    info.correlationId = info.correlationId || uuidv4();
    return info;
});

// Base log format
const baseFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.errors({ stack: true })
);

// Dev & Prod formats
const devFormat = format.combine(
    baseFormat,
    correlationIdFormat(),
    format.colorize(),
    format.printf(({ timestamp, level, message, stack, correlationId }) => {
        const logMessage = `${timestamp} [${level}] [correlationId: ${correlationId}]: ${message}`;
        return stack ? `${logMessage}\n${stack}` : logMessage;
    })
);

const prodFormat = format.combine(
    baseFormat,
    correlationIdFormat(),
    format.json()
);

// Helper: create a daily rotating file transport
const createRotatingFile = (filename: string, level: string) =>
    new DailyRotateFile({
        filename: path.join(logDir, `${filename}-%DATE%.log`),
        datePattern: 'DD-MM-YYYY',
        zippedArchive: false,
        maxFiles: '30d',
        level,
        handleExceptions: true,
    });

// Create the logger
const logger = createLogger({
    level: AppConfig.IS_DEV ? 'debug' : 'info',
    levels,
    format: AppConfig.IS_DEV ? devFormat : prodFormat,
    transports: [
        createRotatingFile('error', 'error'),
        createRotatingFile('http', 'http'),
        createRotatingFile('vuln', 'warn'),
        createRotatingFile('audit', 'info'),
        createRotatingFile('combined', 'info'),
    ],
    exitOnError: false,
});

// Add console logging in development
if (AppConfig.IS_DEV) {
    logger.add(
        new transports.Console({
            handleExceptions: true,
        })
    );
}

// Morgan integration
export const morganStream = {
    write: (message: string) => logger.http(message.trim()),
};

// Compatibility: map warn to warning
logger.warn = logger.warning;

export default logger;
