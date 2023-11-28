const seedLeagues = [
  {
    name: "Premier League",
    type: "Professional",
    logo: "https://example.com/logos/premier-league.jpg",
    countries: {
      name: "England",
      code: "ENG",
      flag: "https://example.com/flags/england.jpg",
    },
    seasons: [
      {
        year: 2023,
        start: "2023-08-01",
        end: "2024-05-30",
        current: true,
        coverage: {
          events: true,
          lineups: true,
          statistics_fixtures: true,
          statistics_players: true,
          standings: true,
          players: true,
          top_scorers: true,
          top_assists: true,
          top_cards: true,
          injuries: true,
          predictions: true,
          odds: true,
        },
      },
    ],
  },
  {
    name: "La Liga",
    type: "Professional",
    logo: "https://example.com/logos/la-liga.jpg",
    countries: {
      name: "Spain",
      code: "ESP",
      flag: "https://example.com/flags/spain.jpg",
    },
    seasons: [
      {
        year: 2023,
        start: "2023-08-01",
        end: "2024-05-30",
        current: true,
        coverage: {
          events: true,
          lineups: true,
          statistics_fixtures: true,
          statistics_players: true,
          standings: true,
          players: true,
          top_scorers: true,
          top_assists: true,
          top_cards: true,
          injuries: true,
          predictions: true,
          odds: true,
        },
      },
    ],
  },
];

module.exports = { seedLeagues };
