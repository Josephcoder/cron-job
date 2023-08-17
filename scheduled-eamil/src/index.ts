import express from 'express';
import dumpDatabase from './controllers/cron-mail';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
(async () => {
  dumpDatabase();
})();

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
