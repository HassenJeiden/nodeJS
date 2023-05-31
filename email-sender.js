const nodemailer = require('nodemailer');

// Create a transporter using the Gmail SMTP service
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'hassenjeiden@gmail.com', // Replace with your Gmail address
    pass: '.....@...' // Replace with your Gmail password
  }
});

// Define the email options
const mailOptions = {
  from: '.....@gmail.com', // Sender address
  to: '.....@hotmail.com', // Recipient address
  subject: 'Test Email', // Subject line
  text: 'This is a test email.' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
