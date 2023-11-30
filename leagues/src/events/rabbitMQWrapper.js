const amqp = require("amqplib");

class RabbitMQWrapper {
  static getInstance() {
    if (!this.instance) {
      this.instance = new RabbitMQWrapper();
    }
    return this.instance;
  }

  async createConnection(rabbitURI, queues) {
    try {
      this.connection = await amqp.connect(rabbitURI);
      this.channel = await this.connection.createChannel();
      queues.forEach(async (queue) => {
        await this.channel.assertQueue(queue);
        console.log(`Queue: ${queue} created or exists`);
      });
      console.log("Connected to RabbitMQ");
    } catch (error) {
      console.log("error connecting to RabbitMQ");
      throw new Error(error);
    }
  }
}

const rabbitMQWrapper = new RabbitMQWrapper();

module.exports = rabbitMQWrapper;
