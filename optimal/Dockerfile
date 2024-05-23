
FROM node:22-alpine3

WORKDIR /optimal/

COPY src/ /optimal/src

COPY package*.json ./

COPY public/ /optimal/public

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]

FROM nginx:latest

COPY --from=build /optimal/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]