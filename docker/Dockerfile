FROM oven/bun:latest AS base

WORKDIR /app

COPY ./prisma ./prisma/
COPY package*.json bun.lockb* ./
COPY . .

RUN bun install

RUN bun prisma generate

FROM base AS dev
CMD ["bun", "dev"]

FROM base AS prod
RUN bun build
CMD ["bun", "start"]

EXPOSE 3000
