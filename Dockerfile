### Docker build
FROM node:16.14.2-alpine3.15 as builder

WORKDIR /ng-app

# RUN npm install

COPY . .
RUN npm run build:prod

FROM nginx:1.19.10

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder ./ng-app/dist/itcommunity-new /usr/share/nginx/html

COPY --from=builder ./ng-app/cert.pem /etc/ssl/certs/cert.pem
COPY --from=builder ./ng-app/key.pem /etc/ssl/private/key.pem

COPY --from=builder ./ng-app/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]