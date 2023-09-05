import dotenv from 'dotenv';
import express from 'express';
import pingTask from './controllers/cron-ping';
dotenv.config();

const app = express();
(async () => {
  pingTask();
  // deleteLog();
})();

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
