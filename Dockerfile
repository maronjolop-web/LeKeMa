# Development-friendly Dockerfile for Next.js
FROM node:18-alpine

WORKDIR /workspace

# Copy package manifests first for faster rebuilds
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source
COPY . .

# Expose Next.js default port
EXPOSE 3000

# Start dev server and bind to all interfaces
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
