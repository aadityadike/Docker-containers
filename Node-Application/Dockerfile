FROM node:18.17.1-alpine3.18

WORKDIR /usr/src/app

ENV NODE_ENV production

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,target=/usr/src/app/.pnpm \
    pnpm set cache /usr/src/app/.pnpm \
    pnpm ci --only=production

USER node

COPY --chown=node:node. ./src .

EXPOSE 3000

CMD [ "node", "index.js" ]