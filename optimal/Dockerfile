
FROM node:22-alpine3

WORKDIR /OPTIMAL/

COPY src/ /OPTIMAL/src

COPY package*.json /OPTIMAL/

COPY public/ /OPTIMAL/public

RUN npm install

COPY . .

CMD [ "npm", "start" ]

FROM nginx:latest

COPY --from=0 /OPTIMAL/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]