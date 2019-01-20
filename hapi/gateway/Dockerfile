FROM node:10-alpine as builder
USER root

WORKDIR /usr/src/app

COPY  . .
RUN npm i --only=production

#######################################

FROM node:10-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 5000
CMD npm start