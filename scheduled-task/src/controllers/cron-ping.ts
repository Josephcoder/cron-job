import chalk from 'chalk';
import cron from 'node-cron';
import APIClient from '../services/apiClient';

const apiClient = new APIClient('/academic');

// ...

// Schedule tasks to be run on the server.
export default () =>
  cron.schedule('* * * * *', async function () {
    try {
      const data = await apiClient.getAll();

      console.log(chalk.cyanBright('---------------------'));

      console.log(chalk.green('running a task every minute'));

      console.table(data);
    } catch (error: any) {
      console.log({ ...error });
    }
  });
