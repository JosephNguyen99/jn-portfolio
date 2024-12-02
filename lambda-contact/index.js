import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

dotenv.config(); // Load environment variables

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // SendGrid API Key
const dynamoDBClient = new DynamoDBClient(); // DynamoDB Client

export const handler = async (event) => {
  try {
    // const { firstName, lastName, email, subject, message } = JSON.parse(event.body);
    const data = JSON.parse(event.body);

    // Save data to DynamoDB
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: {
        submissionId: { S: Date.now().toString() },
        firstName: { S: data.firstName },
        lastName: { S: data.lastName },
        email: { S: data.email },
        phone: { S: data.phone },
        subject: { S: data.subject },
        message: { S: data.message },
        createdAt: { S: new Date().toISOString() },
      },
    };

    const dynamoCommand = new PutItemCommand(params);
    await dynamoDBClient.send(dynamoCommand);

    // Send email via SendGrid
    const msg = {
      to: 'qt.joseph.nguyen@gmail.com',
      from: 'qt.joseph.nguyen@gmail.com', // Verified sender email in SendGrid
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `
        You have a new contact form submission:

        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Phone: ${data.phone}
        Subject: ${data.subject}
        Message:
        ${data.message}
      `,
      replyTo: data.email, // Set user's email as reply-to
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submission saved and email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process submission.' }),
    };
  }
};
