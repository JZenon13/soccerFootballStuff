const seedTeams = [
  {
    name: "Capital City FC",
    code: "CCFC",
    country: "England",
    founded: 1902,
    national: false,
    logo: "https://example.com/logos/capital_city_fc.jpg",
    venue: {
      name: "Capital Arena",
      address: "123 Stadium Way, Capital City",
      city: "Capital City",
      capacity: 50000,
      surface: "Grass",
      image: "https://example.com/venues/capital_arena.jpg",
    },
  },
  {
    name: "Coastal United",
    code: "CUNTD",
    country: "Spain",
    founded: "1923",
    national: false,
    logo: "https://example.com/logos/coastal_united.jpg",
    venue: {
      name: "Seaside Stadium",
      address: "456 Beach Blvd, Coastal Town",
      city: "Coastal Town",
      capacity: 35000,
      surface: "Grass",
      image: "https://example.com/venues/seaside_stadium.jpg",
    },
  },
  {
    name: "Metroville SC",
    code: "MSC",
    country: "Italy",
    founded: 1950,
    national: false,
    logo: "https://example.com/logos/metroville_sc.jpg",
    venue: {
      name: "Metro Park",
      address: "789 City Center Ave, Metroville",
      city: "Metroville",
      capacity: 40000,
      surface: "Synthetic",
      image: "https://example.com/venues/metro_park.jpg",
    },
  },
];

module.exports = { seedTeams };
