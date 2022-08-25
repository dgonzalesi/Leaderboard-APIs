import { refresh, list } from './elementsDOM.js';
import leaderboard from './classCall.js';

export default () => {
  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    const myScores = leaderboard.getScores();
    // myScores.forEach((element) => {
    // //   const li = document.createElement('li');
    // //   li.innerHTML = `${element.user} - ${element.score}`;
    // //   list.appendChild(li);
    // console.log(element.user, element.score);
    // });
    console.log(myScores.split(' '));
  });
};