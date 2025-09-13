# Multi-stage Dockerfile for React + Vite application

# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files for preview server
COPY package*.json ./

# Install only production dependencies and express for serving
RUN npm install --omit=dev && npm install express

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy server file
COPY server.js ./

# Expose port 3007
EXPOSE 3007

# Add curl for healthchecks
RUN apk add --no-cache curl

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3007/ || exit 1

# Start Express server
CMD ["node", "server.js"]