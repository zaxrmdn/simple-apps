FROM node:18.20.8-slim
WORKDIR /apps
COPY ./apps /
RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot
USER nonroot
RUN npm install
CMD npm start