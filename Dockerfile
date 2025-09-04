FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.14.4

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY vite.sdk-components.config.ts ./
COPY patches patches
COPY packages packages
COPY apps apps

# Install dependencies
RUN pnpm install

# Set environment variables
ENV DATABASE_URL="postgresql://user:pass@localhost:5433/webstudio"
ENV DIRECT_URL="postgresql://user:pass@localhost:5433/webstudio"
ENV AUTH_SECRET="your-super-secret-32-char-auth-key-12345"
ENV DEV_LOGIN="admin@webstudio.local"
ENV DEPLOYMENT_ENVIRONMENT="development"
ENV PORT="3000"
ENV PRISMA_BINARY_TARGET='["native"]'

# Generate Prisma client
RUN cd packages/prisma-client && pnpm exec prisma generate

# Build the application
RUN pnpm build

EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
