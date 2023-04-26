const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email-address@gmail.com',
    pass: 'your-email-password'
  }
});

const mailOptions = {
  from: 'your-email-address@gmail.com',
  to: 'recipient-email-address@example.com',
  subject: 'Test Email',
  text: 'This is a test email.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
