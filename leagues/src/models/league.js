const { Schema, model } = require("mongoose");

const leagueSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  countries: {
    _id: false,
    type: {
      name: String,
      code: String,
      flag: String,
    },
  },
  seasons: {
    type: [
      {
        _id: false,
        year: Number,
        start: String,
        end: String,
        current: Boolean,
        coverage: {
          _id: false,
          type: {
            events: Boolean,
            lineups: Boolean,
            statistics_fixtures: Boolean,
            statistics_players: Boolean,
          },
          standings: Boolean,
          players: Boolean,
          top_scorers: Boolean,
          top_assists: Boolean,
          top_cards: Boolean,
          injuries: Boolean,
          predictions: Boolean,
          odds: Boolean,
        },
      },
    ],
  },
});

const League = model("leagues", leagueSchema);
module.exports = League;
