
import { Race } from '../types';

// Current time for setting race times
const now = new Date();

// Helper to get a time in the future
const getFutureTime = (minutesFromNow: number): string => {
  const futureTime = new Date(now.getTime() + minutesFromNow * 60000);
  return futureTime.toISOString();
};

export const races: Race[] = [
  {
    id: 1,
    name: "Royal Stakes",
    venue: "Churchill Downs",
    distance: "1200m",
    startTime: getFutureTime(10),
    status: "upcoming",
    horses: [
      {
        id: 101,
        name: "Thunder Bolt",
        jockey: "Michael Johnson",
        trainer: "Robert Williams",
        age: 4,
        weight: 57.5,
        winOdds: 3.5,
        placeOdds: 1.8,
        silkColor: "#FF5733"
      },
      {
        id: 102,
        name: "Swift Sierra",
        jockey: "James Wilson",
        trainer: "Thomas Brown",
        age: 5,
        weight: 58.0,
        winOdds: 5.0,
        placeOdds: 2.2,
        silkColor: "#33A1FF"
      },
      {
        id: 103,
        name: "Midnight Star",
        jockey: "David Thompson",
        trainer: "Richard Davis",
        age: 3,
        weight: 55.5,
        winOdds: 7.5,
        placeOdds: 2.8,
        silkColor: "#333BFF"
      },
      {
        id: 104,
        name: "Golden Arrow",
        jockey: "Christopher Lee",
        trainer: "Daniel White",
        age: 6,
        weight: 59.0,
        winOdds: 4.0,
        placeOdds: 2.0,
        silkColor: "#FFD700"
      },
      {
        id: 105,
        name: "Silver Streak",
        jockey: "Joseph Martin",
        trainer: "William Taylor",
        age: 4,
        weight: 57.0,
        winOdds: 6.0,
        placeOdds: 2.5,
        silkColor: "#C0C0C0"
      }
    ]
  },
  {
    id: 2,
    name: "Emerald Cup",
    venue: "Belmont Park",
    distance: "1600m",
    startTime: getFutureTime(25),
    status: "upcoming",
    horses: [
      {
        id: 201,
        name: "Mountain Ridge",
        jockey: "Steven Anderson",
        trainer: "Edward Clark",
        age: 5,
        weight: 58.5,
        winOdds: 2.8,
        placeOdds: 1.5,
        silkColor: "#4CAF50"
      },
      {
        id: 202,
        name: "Desert Storm",
        jockey: "Brian Miller",
        trainer: "George Lewis",
        age: 4,
        weight: 57.0,
        winOdds: 4.5,
        placeOdds: 2.1,
        silkColor: "#FF9800"
      },
      {
        id: 203,
        name: "Ocean Wave",
        jockey: "Kevin Wilson",
        trainer: "Paul Harris",
        age: 3,
        weight: 56.0,
        winOdds: 6.0,
        placeOdds: 2.5,
        silkColor: "#00BCD4"
      },
      {
        id: 204,
        name: "Forest Fire",
        jockey: "Mark Jackson",
        trainer: "Kenneth Allen",
        age: 5,
        weight: 58.0,
        winOdds: 3.8,
        placeOdds: 1.9,
        silkColor: "#FF5722"
      },
      {
        id: 205,
        name: "Winter Frost",
        jockey: "Daniel Thompson",
        trainer: "Charles Young",
        age: 4,
        weight: 57.5,
        winOdds: 5.5,
        placeOdds: 2.3,
        silkColor: "#B3E5FC"
      }
    ]
  },
  {
    id: 3,
    name: "Diamond Dash",
    venue: "Santa Anita",
    distance: "1000m",
    startTime: getFutureTime(45),
    status: "upcoming",
    horses: [
      {
        id: 301,
        name: "Speedy Comet",
        jockey: "Matthew Adams",
        trainer: "Donald King",
        age: 3,
        weight: 56.5,
        winOdds: 3.2,
        placeOdds: 1.7,
        silkColor: "#E91E63"
      },
      {
        id: 302,
        name: "Lucky Charm",
        jockey: "Andrew Scott",
        trainer: "Jason Baker",
        age: 4,
        weight: 57.0,
        winOdds: 4.2,
        placeOdds: 2.0,
        silkColor: "#9C27B0"
      },
      {
        id: 303,
        name: "Blazing Sun",
        jockey: "Ryan Nelson",
        trainer: "Ronald Carter",
        age: 5,
        weight: 58.5,
        winOdds: 2.9,
        placeOdds: 1.6,
        silkColor: "#FFC107"
      },
      {
        id: 304,
        name: "Shadow Runner",
        jockey: "Justin Hill",
        trainer: "Gerald Lewis",
        age: 4,
        weight: 57.5,
        winOdds: 3.8,
        placeOdds: 1.9,
        silkColor: "#607D8B"
      },
      {
        id: 305,
        name: "Mystic Wind",
        jockey: "Brandon Roberts",
        trainer: "Douglas Green",
        age: 3,
        weight: 56.0,
        winOdds: 5.0,
        placeOdds: 2.2,
        silkColor: "#673AB7"
      }
    ]
  },
  {
    id: 4,
    name: "Golden Trophy",
    venue: "Ascot",
    distance: "2000m",
    startTime: getFutureTime(60),
    status: "upcoming",
    horses: [
      {
        id: 401,
        name: "Royal Prince",
        jockey: "Anthony Parker",
        trainer: "Harold Turner",
        age: 6,
        weight: 59.0,
        winOdds: 3.0,
        placeOdds: 1.6,
        silkColor: "#9C27B0"
      },
      {
        id: 402,
        name: "Highland Glory",
        jockey: "Kevin Clark",
        trainer: "Timothy Cook",
        age: 5,
        weight: 58.5,
        winOdds: 3.5,
        placeOdds: 1.8,
        silkColor: "#8BC34A"
      },
      {
        id: 403,
        name: "Valley Spirit",
        jockey: "Eric Mitchell",
        trainer: "Bruce Evans",
        age: 4,
        weight: 57.5,
        winOdds: 4.0,
        placeOdds: 2.0,
        silkColor: "#3F51B5"
      },
      {
        id: 404,
        name: "Iron Heart",
        jockey: "Joshua Cooper",
        trainer: "Walter Foster",
        age: 5,
        weight: 58.0,
        winOdds: 4.5,
        placeOdds: 2.1,
        silkColor: "#795548"
      },
      {
        id: 405,
        name: "Thunder Storm",
        jockey: "Kyle Reed",
        trainer: "Roger Perry",
        age: 4,
        weight: 57.0,
        winOdds: 5.0,
        placeOdds: 2.2,
        silkColor: "#9E9E9E"
      },
      {
        id: 406,
        name: "Diamond King",
        jockey: "Jerry Morgan",
        trainer: "Carl Ross",
        age: 6,
        weight: 59.5,
        winOdds: 3.8,
        placeOdds: 1.9,
        silkColor: "#2196F3"
      }
    ]
  },
  {
    id: 5,
    name: "Pearl Cup",
    venue: "Newmarket",
    distance: "1800m",
    startTime: getFutureTime(90),
    status: "upcoming",
    horses: [
      {
        id: 501,
        name: "Silver Lining",
        jockey: "Craig Peterson",
        trainer: "Howard Bennett",
        age: 5,
        weight: 58.0,
        winOdds: 3.3,
        placeOdds: 1.7,
        silkColor: "#90A4AE"
      },
      {
        id: 502,
        name: "Ruby Flash",
        jockey: "Raymond Wood",
        trainer: "Keith Collins",
        age: 4,
        weight: 57.0,
        winOdds: 4.2,
        placeOdds: 2.0,
        silkColor: "#F44336"
      },
      {
        id: 503,
        name: "Emerald Dream",
        jockey: "Gregory James",
        trainer: "Samuel Rogers",
        age: 3,
        weight: 56.0,
        winOdds: 5.5,
        placeOdds: 2.3,
        silkColor: "#4CAF50"
      },
      {
        id: 504,
        name: "Sapphire Sea",
        jockey: "Frank Watson",
        trainer: "Terry Brooks",
        age: 5,
        weight: 58.5,
        winOdds: 3.7,
        placeOdds: 1.9,
        silkColor: "#2196F3"
      },
      {
        id: 505,
        name: "Diamond Dust",
        jockey: "Alan Price",
        trainer: "Jerry Butler",
        age: 4,
        weight: 57.5,
        winOdds: 4.0,
        placeOdds: 2.0,
        silkColor: "#E0E0E0"
      }
    ]
  }
];

export const getRaceById = (id: number): Race | undefined => {
  return races.find(race => race.id === id);
};

export const getUpcomingRaces = (): Race[] => {
  return races.filter(race => race.status === 'upcoming');
};
