FROM node:18-alpine3.20

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --silent --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
