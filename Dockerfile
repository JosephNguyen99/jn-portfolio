# Use an official Node.js runtime as a parent image
FROM node:20.18.0

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]
