FROM node:18.20.8-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD npm start
