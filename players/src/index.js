const { connect, connection } = require("mongoose");
require("dotenv").config();
const app = require("./app.js");
const Player = require("../src/models/player");
const { seedPlayers } = require("../seed");

const start = async () => {
  try {
    process.on("SIGINT", async () => {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    });
    process.on("SIGTERM", async () => {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    });

    await connect(process.env.MONGO_URI, {});
    console.log("Connected to players database");

    const seedDB = async () => {
      await Player.collection.drop();
      await Player.insertMany(seedPlayers);
      console.log("Seeded players collection");
    };
    seedDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Players service listening on port 3000");
  });
};

start();
