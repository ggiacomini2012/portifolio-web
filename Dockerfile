FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev"]
