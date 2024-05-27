FROM node:lts-alpine

WORKDIR /optimalbackend
COPY package.json . 
RUN npm install
COPY . .
ENTRYPOINT [ "node", "server.js"]