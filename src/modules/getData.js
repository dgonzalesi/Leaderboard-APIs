import { refresh } from './elementsDOM.js';
import leaderboard from './classCall.js';
import builder from './newItemTemplate.js';

export default () => {
  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    const myScores = leaderboard.getScores();
    myScores.then((data) => { builder(data.result); });
  });
};