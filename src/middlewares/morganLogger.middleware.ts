import morgan, { StreamOptions } from 'morgan';
import logger from '../utils/logger.util.js';
import AppConfig from '../configs/app.config.js';

// Custom stream to use winston for HTTP logs
const stream: StreamOptions = {
    write: (message) => logger.http(message.trim()),
};

// Only log HTTP in production or dev, not test
const skip = () => AppConfig.NODE_ENV === 'Test';

const MorganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { stream, skip }
);

export default MorganMiddleware;
