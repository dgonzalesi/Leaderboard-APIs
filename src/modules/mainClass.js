export default class Leaderboard {
  constructor() {
    this.gameName = 'My New Game';
    this.currentGame = 'iqwJZVwWQ0yUJPTVp5Tk';
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  // GET A NEW GAME KEY
  newGame = () => {
    const option = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name: this.gameName }),
    };
    fetch(this.url, option)
      .then((response) => response.json())
      .then((data) => {
        this.currentGame = data.result.substring(13, 34);
      })
      .catch(() => new Error('Error in newPost'));
  }

  //  POST THE DATA TO THE API
  newPost = (name, getscore) => {
    const option = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ user: name, score: getscore }),
    };
    fetch(`${this.url + this.currentGame}/scores/`, option)
      .catch(() => new Error('Error in newPost'));
  }

  // GET THE DATA FROM THE API
  getScores = () => {
    this.scores = [];
    fetch(`${this.url + this.currentGame}/scores/`)
      .then((response) => response.json())
      .then((data) => {
        (data.result.forEach((element) => {
          this.scores.push(element);
        }));
      })
      .catch(() => new Error('Error in getScores'));
    return this.scores;
  }
}
