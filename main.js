const team = {
  _players: [
    { firstName: "Pablo", lastName: "Sanchez", age: 11 },
    { firstName: "Mary", lastName: "Jones", age: 12 },
    { firstName: "Frank", lastName: "White", age: 14 },
  ],
  _games: [
    { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Eagles", teamPoints: 21, opponentPoints: 7 },
    { opponent: "Ravens", teamPoints: 14, opponentPoints: 12 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(name, teamPoints, oppPoints) {
    let game = {
      name: name,
      teamPoints: teamPoints,
      oppPoints: oppPoints
    }
    this.games.push(game);
  }
};


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Texans', 44, 56);
team.addGame('Bulls', 33, 77);
team.addGame('Colts', 55, 6);



console.log(team.players);
console.log(team.games);