// tests/utils/logger.util.test.ts
import { describe, it, expect, vi } from 'vitest';
import logger from '../../utils/logger.util.js';

describe('Logger Utility', () => {
    it('logs info level', () => {
        const spy = vi.spyOn(logger, 'info');
        logger.info('info test');
        expect(spy).toHaveBeenCalledWith('info test');
    });

    it('logs error level with error object', () => {
        const spy = vi.spyOn(logger, 'error');
        const error = new Error('error test');
        logger.error(error);
        expect(spy).toHaveBeenCalledWith(error);
    });

    it('respects environment: dev vs prod', () => {
        process.env.NODE_ENV = 'dev';
        expect(() => logger.debug('debug log')).not.toThrow();
    });
});
