### ベースイメージ ###
FROM node:20-slim AS base

WORKDIR /app
COPY . .

EXPOSE 1337

### 開発環境 ###
FROM base AS dev

### 本番環境 ###
FROM base AS prod

RUN npm install
CMD ["npm", "run", "start"]
