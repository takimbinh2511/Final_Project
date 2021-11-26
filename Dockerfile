FROM node:14.17.0
WORKDIR /app
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install 
COPY --chown=node:node . .
EXPOSE 7000
USER node
CMD ["node", "server.js" ]
