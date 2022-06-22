FROM node:lts-alpine3.14

RUN apk update && \
    apk add --no-cache libc6-compat autoconf automake libtool make tiff jpeg zlib zlib-dev pkgconf nasm file gcc musl-dev

# COPY package.json .

RUN npm install -g npm

ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

COPY . /app

WORKDIR /app

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser


RUN yarn install
RUN yarn build
ENTRYPOINT [ "sh", "entrypoint.sh" ]