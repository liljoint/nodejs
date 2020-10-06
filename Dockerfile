FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3001
EXPOSE 27017

CMD [ "npm", "start" ]
