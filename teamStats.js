const team = {
  _players: [
    { firstName: "Mario", lastName: "Goetze", age: 34 },
    { firstName: "Daichi", lastName: "Kamada", age: 32 },
    { firstName: "Kevin", lastName: "Trapp", age: 27 },
  ],
  _games: [
    { opponent: "Schalke", teamPoints: 3, opponentPoints: 0 },
    { opponent: "Freiburg", teamPoints: 1, opponentPoints: 1 },
    { opponent: "Munchen", teamPoints: "3", opponentPoints: 2 },
  ],

  // retrieves _players properties
  get players() {
    return this._players;
  },
  // retrieves _games properties
  get games() {
    return this._games;
  },

  // adds new players
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  // adds new game
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Napoli", 2, 1);
console.log(team.games);
