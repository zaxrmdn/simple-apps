FROM node:18.20.8-slim
WORKDIR /app
ADD . .
RUN npm install
CMD npm start