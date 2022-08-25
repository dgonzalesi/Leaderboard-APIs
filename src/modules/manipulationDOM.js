/* eslint-disable no-unused-vars */
import { name, score } from './elementsDOM.js';
import leaderboard from './classCall.js';

const postData = () => {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = name.value;
    const playerScore = score.value;
    leaderboard.newPost(playerName, playerScore);
    console.log(playerName, playerScore);
    console.log(leaderboard.getScores());
  });
};


export default postData;