FROM node:16.4.2-alpine3.14

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --silent --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
