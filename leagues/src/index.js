const { connect, connection } = require("mongoose");
require("dotenv").config();
const app = require("./app.js");
const Player = require("../src/models/player");
const { seedLeagues } = require("../seed");

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
    console.log("Connected to Leagues database");

    const seedDB = async () => {
      await Player.collection.drop();
      await Player.insertMany(seedLeagues);
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
