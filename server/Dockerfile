FROM node:alpine AS build

WORKDIR /usr/src/api

RUN apk add --no-cache python make g++

COPY package*.json ./
RUN npm ci --production && npm cache clean --force

COPY . ./

FROM node:alpine

USER node
EXPOSE 8080

COPY --from=build /usr/src/api/ ./
RUN npm install

ENV NODE_ENV=production

CMD ["node", "index.js", "--max-old-space-size=450"]
