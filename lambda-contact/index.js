import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

dotenv.config(); // Load environment variables

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // SendGrid API Key
const dynamoDBClient = new DynamoDBClient(); // DynamoDB Client

// Function to save data to DynamoDB
const saveToDynamoDB = async (data) => {
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

  const command = new PutItemCommand(params);
  return dynamoDBClient.send(command);
};

// Function to send email using SendGrid
const sendEmail = async (data) => {
  const msg = {
    to: process.env.TO_EMAIL, //  verified SendGrid email
    from: process.env.FROM_EMAIL, //  verified SendGrid email
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
    replyTo: data.email,
  };

  return sgMail.send(msg);
};

// Lambda handler
export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  try {
    const data = JSON.parse(event.body);
    console.log("Parsed data:", data);
    
    // Validate the data
    if (!data.firstName || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Save data to DynamoDB
    await saveToDynamoDB(data);
    console.log("Data saved to DynamoDB");

    // Send email notification
    await sendEmail(data);
    console.log("Email sent successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Submission saved and email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error processing request:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process submission." }),
    };
  }
};
