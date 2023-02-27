FROM node:18.14.2-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install glob rimraf

COPY . .

RUN npm run build

CMD ["node", "dist/main"]
