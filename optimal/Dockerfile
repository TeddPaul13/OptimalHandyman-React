
FROM node:lts-alpine AS build

WORKDIR /optimal/


COPY package*.json ./

RUN npm install

COPY src/ /optimal/src 

COPY public/ /optimal/public

RUN chmod -R 755 /optimal/src /optimal/public

RUN npm run build

CMD [ "npm", "start" ]

FROM nginx:stable-perl

WORKDIR /usr/share/nginx/html

COPY --from=build /optimal/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]