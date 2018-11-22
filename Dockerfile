FROM node:8

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY ./src ./

EXPOSE 3001
CMD [ "npm", "start" ]
