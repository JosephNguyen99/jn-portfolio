import sgMail from '@sendgrid/mail';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'qt.joseph.nguyen@gmail.com', // Replace with your email
  from: 'qt.joseph.nguyen@gmail.com', // Replace with verified sender email
  subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
  text: `
    You have a new contact form submission:

    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Subject: ${data.subject}
    Message: ${data.message}
  `,
  replyTo: data.email, // User's email from the form submission
};

sgMail
  .send(msg)
  .then(() => console.log('Email sent successfully!'))
  .catch((error) => console.error('Error sending email:', error));
