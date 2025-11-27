FROM node:20-alpine

WORKDIR /usr/src/app

# Copy only package files first
COPY app/package*.json ./
RUN npm install --only=production

# Copy the rest of the app
COPY app/. .

EXPOSE 3000
CMD ["node", "index.js"]
