import express from 'express';
import MorganMiddleware from './middlewares/morganLogger.middleware.js';

const App = express();

/// ------ ------- ------- Middleware  ------ ------- ------- ///
App.use(MorganMiddleware); // Middleware for logging HTTP requests

export default App;
