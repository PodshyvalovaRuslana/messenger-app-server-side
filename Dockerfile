FROM node:16-alpine3.12

WORKDIR /server

COPY . .

RUN npm install

CMD npm run dev