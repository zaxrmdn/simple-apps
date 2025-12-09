FROM node:18.20.8-slim
WORKDIR /app
COPY . .
ENV APP_PORT=3000
RUN npm install
CMD npm start