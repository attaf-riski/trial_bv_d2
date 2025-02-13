FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

# Start with migration first, then run the app
CMD ["sh", "-c", "npx sequelize-cli db:migrate && node dist/server.js"]