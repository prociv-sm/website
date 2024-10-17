# Stage 1: Build
FROM node:18-alpine3.20 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --silent --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Production
FROM node:18-alpine3.20

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["yarn", "start"]
