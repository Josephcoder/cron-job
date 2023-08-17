import express from 'express';
import pingTask from './controllers/cron-ping';
import deleteLog from './controllers/cron-delete';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
(async () => {
  pingTask();
  deleteLog();
})();

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
