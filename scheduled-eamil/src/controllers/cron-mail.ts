import cron from 'node-cron';
import nodemailer from 'nodemailer';

// ...

// Create mail transporter.
let transporter = nodemailer.createTransport({
  host: 'your_demo_email_smtp_host.example.com',
  port: 'your_demo_email_port',
  auth: {
    user: 'your_demo_email_address@example.com',
    pass: 'your_demo_email_password',
  },
});

// Backup a database at 11:59 PM every day.
export default () =>
  // ...

  // Sending emails every Wednesday.
  cron.schedule('0 0 * * 3', function () {
    console.log('---------------------');
    console.log('Running Cron Job');

    let messageOptions = {
      from: 'your_demo_email_address@example.com',
      to: 'your_demo_email_address@example.com',
      subject: 'Scheduled Email',
      text: 'Hi there. This email was automatically sent by us.',
    };

    transporter.sendMail(messageOptions, function (error, info) {
      if (error) {
        throw error;
      } else {
        console.log('Email successfully sent!');
      }
    });
  });
