# Use an official Node.js runtime as a parent image
FROM node:16-alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the Plan My Hikes UI."

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the production-ready React app
RUN npm run build

# Expose port 3000 for the server to serve the client on
EXPOSE 3000

# Start the server
CMD [ "npm", "start" ]
