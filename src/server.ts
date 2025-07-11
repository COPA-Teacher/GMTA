import express from 'express';

const APP = express();

APP.listen(3737, () => {
    console.log('runnign on port 3737');
});
