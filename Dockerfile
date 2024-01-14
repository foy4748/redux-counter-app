FROM node:20-alpine

WORKDIR /usr/share/app

COPY package.json ./
COPY pnpm-lock.yaml ./


RUN npm i -g pnpm

RUN pnpm install

COPY . .

EXPOSE 5173

CMD pnpm run dev
