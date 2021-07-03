
# Stage 1

FROM node:14-alpine as build-step

RUN npm install -D typescript@4.0.2

RUN npm install -g @angular/cli@10

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install -D typescript@4.0.2

COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/pds2 /usr/share/nginx/html