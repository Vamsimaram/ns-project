FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package files from the app folder
COPY app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the app source code
COPY app/. .

EXPOSE 3000

CMD ["node", "index.js"]
