import cron from 'node-cron';
import shell from 'shelljs';
// ...

// Backup a database at 11:59 PM every day.
export default () =>
  cron.schedule('59 23 * * *', function () {
    console.log('---------------------');
    console.log('Running Cron Job');
    if (
      shell.exec(
        'mysqldump -uroot -ppassword camis_prod_v2 period > /Users/jozeph/dump/period_dump.sql'
      ).code !== 0
    ) {
      shell.exit(1);
    } else {
      shell.echo('Database backup complete');
    }
  });
