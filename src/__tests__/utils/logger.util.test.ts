// tests/utils/logger.util.test.ts
import { describe, it, expect, vi } from 'vitest';
import logger from '../../utils/logger.util.js';
import * as winston from 'winston';

describe('Logger Utility', () => {
    it('logs info level', () => {
        const spy = vi.spyOn(winston.Logger.prototype, 'info');
        logger.info('info test');
        expect(spy).toHaveBeenCalledWith('info test');
    });

    it('logs error level with error object', () => {
        const spy = vi.spyOn(winston.Logger.prototype, 'error');
        const error = new Error('error test');
        logger.error(error);
        expect(spy).toHaveBeenCalled();
    });

    it('respects environment: dev vs prod', () => {
        process.env.NODE_ENV = 'dev';
        expect(() => logger.debug('debug log')).not.toThrow();
    });
});
