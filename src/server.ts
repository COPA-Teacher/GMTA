import App from './app.js';
import AppConfig from './configs/app.config.js';

App.listen(AppConfig.PORT || 3737, () => {
    console.log(`GMTA : Server is running on port ${AppConfig.PORT || 3737}`);
});
