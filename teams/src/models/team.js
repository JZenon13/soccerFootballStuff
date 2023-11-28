const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
  founded: {
    type: Number,
    required: true,
  },
  national: Boolean,
  logo: {
    type: String,
    required: true,
  },
  venue: {
    name: String,
    address: String,
    city: String,
    capacity: Number,
    surface: String,
    image: String,
  },
});

const Team = model("teams", teamSchema);
module.exports = Team;
