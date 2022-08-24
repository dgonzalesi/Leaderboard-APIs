export default class Leaderboard {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }
}