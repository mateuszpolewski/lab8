FROM node:10.19.0 as bd

WORKDIR /usr/src/app
RUN npm install react-scripts@4.0.3 -g --silent

COPY ./react-app/package.json ./react-app/yarn.lock ./

RUN yarn
COPY ./react-app/ ./
RUN CI=true npm test
RUN yarn build

FROM nginx:1.15.9-alpine
COPY --from=bd /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]