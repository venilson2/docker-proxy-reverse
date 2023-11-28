FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN apk add --no-cache bash \
    && npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
