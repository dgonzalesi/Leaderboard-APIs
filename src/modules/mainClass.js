export default class Leaderboard {
  constructor() {
    this.gameName = 'My New Game';
    this.currentGame = 'ebEAYUS8ZWyvbqSWwRJJ';
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
        console.log(this.currentGame);
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
  async getScores() {
    const getAPI = await fetch(`${this.url + this.currentGame}/scores/`);
    const data = await getAPI.json();
    return data;
  }
}
