import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import AppConfig from '../configs/app.config.js';
import path from 'path';

const env = AppConfig.NODE_ENV || 'Development';
const logDir = path.join('logs', env);

const createTransport = (filename: string, level: string) =>
    new DailyRotateFile({
        filename: path.join(logDir, `${filename}-%DATE%.log`),
        datePattern: 'DD-MM-YYYY',
        zippedArchive: false,
        maxFiles: '30d',
        level,
        handleExceptions: true,
    });

const logger = winston.createLogger({
    level: env === 'Development' ? 'debug' : 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        createTransport('error', 'error'),
        createTransport('http', 'http'),
        createTransport('combined', 'info'),
        createTransport('vuln', 'warn'),
        createTransport('audit', 'info'),
    ],
    exitOnError: false,
});

if (env === 'Development') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
        })
    );
}

export default logger;
