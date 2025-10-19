# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json ./frontend/
COPY package-lock.json ./frontend/

COPY src/ ./frontend/src/
COPY public/ ./frontend/public/

COPY components.json eslint.config.mjs next.config.ts next-env.d.ts postcss.config.mjs tailwind.config.js ./frontend/

# Shared resources
COPY ../tsconfig.json ./
COPY ../shared/package.json ./shared/
COPY ../shared/src/ ./shared/src/
COPY ../package.json ./
COPY ../package-lock.json ./

RUN npm ci


# Build the app for production (Turbopack)
RUN cd frontend && npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy the build output from the builder
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/package.json ./package.json

# Expose the port your Next.js app will run on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
