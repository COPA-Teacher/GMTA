import App from './app.js';
import AppConfig from './configs/app.config.js';
import logger from './utils/logger.util.js';

App.listen(AppConfig.PORT || 3737, () => {
    logger.info(`GMTA : Server is running on port ${AppConfig.PORT || 3737}`);
    logger.debug(`GMTA : Server is running on port ${AppConfig.PORT || 3737}`);
});
