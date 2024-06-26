FROM node:18.20.3-slim
WORKDIR /app
ADD . .
RUN npm install
CMD npm start