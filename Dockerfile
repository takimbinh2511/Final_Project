FROM node:16-alpine
RUN apk add dumb-init
WORKDIR /app
COPY --chown=node:node package.json  ./
RUN yarn install --production=true --network-timeout 1000000
COPY --chown=node:node . .
EXPOSE 7000
USER node
CMD ["dumb-init", "node", "main.js" ]
