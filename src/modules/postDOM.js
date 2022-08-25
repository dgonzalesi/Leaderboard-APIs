import { name, score, submit2 } from './elementsDOM.js';
import leaderboard from './classCall.js';

const postData = () => {
  submit2.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = name.value;
    const playerScore = score.value;
    leaderboard.newPost(playerName, playerScore);
    console.log(playerName, playerScore);
    console.log(leaderboard.getScores());
  });
};

export default postData;