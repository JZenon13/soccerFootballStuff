FROM node:alpine

WORKDIR /app
COPY . .
RUN npm install 

CMD ["sh", "-c", "node seed.js && npm start"]
