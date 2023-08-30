FROM node:18.17.1-bullseye-slim As build

WORKDIR /usr/src/app

# Copy only files required to install
# dependencies (better layer caching)
COPY  package*.json ./

RUN npm install -g pnpm

# Use cache mount to speed up install of existing dependencies
RUN --mount=type=cache,target=/usr/src/app/.pnpm \
    npm set cache /usr/src/app/.pnpm &&  \
    pnpm install

COPY . .

RUN npm run build

# Use separate stage for deployable image
FROM nginxinc/nginx-unprivileged:alpine3.18-perl

# Use COPY --link to avoid breaking cache if we change the second stage base image
COPY --link nginx.conf /etc/nginx/conf.d/default.conf

COPY --link --from=build usr/src/app/dist/ /usr/share/nginx/html

EXPOSE 8080