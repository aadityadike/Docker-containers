# Pin specific version for stability
# Use slim for reduced image size
FROM node:18.17.1-bullseye-slim As base

# Specify working directory other than
WORKDIR /usr/src/app

# Copy only files required to install
# dependencies (better layer caching)
RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./


FROM base AS dev

RUN --mount=type=cache,target=/usr/src/app/.pnpm \
    pnpm set store /usr/src/app/.pnpm-store && \
    pnpm i

COPY . .

CMD ["pnpm", "run", "dev"]

FROM base AS production

# Set NODE_ENV
ENV NODE_ENV production

# Install only production dependencies
# Use cache mount to speed up install of existing dependencies
RUN --mount=type=cache,target=/usr/src/app/.pnpm \
    pnpm set store /usr/src/app/.pnpm-store && \
    pnpm i -P

# Use non-root user
# Use --chown on COPY commands to set file permissions
USER node

# Copy the healthcheck script
COPY --chown=node:node ./healthCheck/ .

# Copy remaining source code AFTER installing dependencies. 
# Again, copy only the necessary files
COPY --chown=node:node ./src/ .

# Indicate expected port
EXPOSE 3000

CMD [ "node", "index.js" ]