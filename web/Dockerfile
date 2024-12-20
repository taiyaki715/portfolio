### ベースイメージ ###
FROM node:22-slim AS base

WORKDIR /app
COPY . .

EXPOSE 3000

### 開発環境 ###
FROM base AS dev

### 本番環境 ###
FROM base AS prod

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
