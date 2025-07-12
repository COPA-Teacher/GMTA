import express from 'express';

const App = express();

App.listen(3737, () => {
    console.log('runnign on port 3737');
});
