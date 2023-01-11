FROM node:alpine AS build

RUN apk add g++ make py3-pip

WORKDIR /sup

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM nginx
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log
COPY --from=build /sup/build /usr/share/nginx/html