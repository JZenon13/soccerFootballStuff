const { connect, connection } = require("mongoose");
require("dotenv").config();
const app = require("./app.js");
const League = require("../src/models/league");
const { seedLeagues } = require("../seed");
const rabbitMQWrapper = require("./events/rabbitMQWrapper");

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  if (!process.env.RABBITMQ_URI) {
    throw new Error("RABBITMQ_URI must be defined");
  }
  try {
    await rabbitMQWrapper.createConnection(process.env.RABBITMQ_URI, []);
    rabbitMQWrapper.channel.on("close", () => {
      console.log("RabbitMQ connection closed");
      process.exit();
    });
    process.on("SIGINT", async () => {
      try {
        await rabbitMQWrapper.connection.close();
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    });
    process.on("SIGTERM", async () => {
      try {
        await rabbitMQWrapper.connection.close();
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    });

    await connect(process.env.MONGO_URI, {});
    console.log("Connected to Leagues database");

    const seedDB = async () => {
      await League.collection.drop();
      await League.insertMany(seedLeagues);
      console.log("Seeded Leagues collection");
    };
    seedDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Leagues service listening on port 3000");
  });
};

start();
