# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json ./backend/
COPY package-lock.json ./backend/
COPY src/ ./backend/src/
COPY tsconfig.json ./backend/tsconfig.json
COPY webpack.config.js ./backend/webpack.config.js
COPY ../tsconfig.json ./
COPY ../shared/package.json ./shared/
COPY ../shared/src/ ./shared/src/
COPY ../package.json ./
COPY ../package-lock.json ./
RUN npm ci

# Build the app for production (Turbopack)
RUN cd backend && npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Install only production dependencies
COPY package.json ./

# Copy the build output from the builder
COPY --from=builder /app/backend/dist/ ./dist/

# Expose the port
EXPOSE 3001

# Start the Next.js server
CMD ["npm", "start"]
