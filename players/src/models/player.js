const { Schema, model } = require("mongoose");

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: Number,
  nationality: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Player = model("players", playerSchema);
module.exports = Player;
