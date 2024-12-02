import { handler } from './index.js';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Read the test event from the JSON file
const event = JSON.parse(fs.readFileSync('./testEvent.json', 'utf8'));

// Invoke the Lambda handler
(async () => {
  try {
    const response = await handler(event);
    console.log('Lambda Response:', response);
  } catch (error) {
    console.error('Error during Lambda Execution:', error);
  }
})();



// const testEvent = {
//   body: JSON.stringify({
//       firstName: "John",
//       lastName: "Doe",
//       email: "johndoe@example.com",
//       phone: "1-800-test-this",
//       subject: "Website Inquiry",
//       description: "I am interested in learning more about your services.",
//   }),
// };

// handler(testEvent).then((response) => {
//   console.log("Lambda Response:", response);
// }).catch((error) => {
//   console.error("Error:", error);
// });
