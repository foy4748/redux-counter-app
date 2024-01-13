FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /usr/share/app

COPY package.json ./
COPY pnpm-lock.yaml ./

COPY vite.config.ts ./

COPY tsconfig.json ./
COPY tsconfig.node.json ./

COPY postcss.config.js ./
COPY tailwind.config.js ./

USER root

RUN chown -R app:app .

RUN npm i -g pnpm

USER app

RUN pnpm install

COPY . .

EXPOSE 5173

CMD pnpm run dev
