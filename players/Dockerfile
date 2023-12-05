FROM node:lts-alpine

WORKDIR /app
COPY . .
RUN npm install 
EXPOSE 3000 

CMD ["sh", "-c", "node seed.js && npm start"]


# docker build -t jzenon13/soccerfootballstuff-players .
# minikube service soccerfootballstuff-rabbitmq-svc