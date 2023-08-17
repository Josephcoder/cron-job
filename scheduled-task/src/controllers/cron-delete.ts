import cron from 'node-cron';
import fs from 'fs';
// ...

// Remove the error.log file every twenty-first day of the month.
export default () =>
  cron.schedule('0 0 21 * *', function () {
    console.log('---------------------');
    console.log('Running Cron Job');
    fs.unlink('./error.log', (err) => {
      if (err) throw err;
      console.log('Error file successfully deleted');
    });
  });
