FROM node:lts-alpine3.16 as builder

RUN mkdir -p /app/server
RUN mkdir -p /app/common
RUN mkdir -p /app/definitions
ADD common /app/common
ADD server /app/server
ADD definitions /app/definitions
COPY package.json /app
COPY entrypoint.sh /app
WORKDIR /app

RUN apk add --no-cache --update git python3 make g++
RUN npm install --omit=dev

FROM node:lts-alpine3.16

COPY --from=builder /app /app
WORKDIR /app

CMD ["./entrypoint.sh"]