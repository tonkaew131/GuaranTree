FROM node:18-alpine

WORKDIR /usr/src/app

RUN yarn global add pnpm

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY . .
RUN pnpm build

CMD [ "pnpm", "start" ]
