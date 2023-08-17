import cron from 'node-cron';

// ...

// Schedule tasks to be run on the server.
export default () =>
  cron.schedule('* * * * *', function () {
    console.log('---------------------');

    console.log('running a task every minute');
  });
