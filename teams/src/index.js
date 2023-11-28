const { connect, connection } = require("mongoose");
require("dotenv").config();
const app = require("./app.js");
const Team = require("../src/models/team");
const { seedTeams } = require("../seed");

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
    console.log("Connected to teams database");

    const seedDB = async () => {
      await Team.collection.drop();
      await Team.insertMany(seedTeams);
      console.log("Seeded teams collection");
    };
    seedDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Teams service listening on port 3000");
  });
};

start();
