import { name, score, submit2 } from './elementsDOM.js';
import leaderboard from './classCall.js';

const postData = () => {
  submit2.addEventListener('click', (e) => {
    e.preventDefault();
    const playerName = name.value;
    const playerScore = score.value;
    leaderboard.newPost(playerName, playerScore);
  });
};

export default postData;