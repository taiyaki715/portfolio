FROM node:22-slim
WORKDIR /web
COPY . .
EXPOSE 3000

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
