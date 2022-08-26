import { list } from './elementsDOM.js';

const builder = (array) => {
  list.innerHTML = '';
  array.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.user} - ${score.score}`;
    li.classList.add('player-score');
    list.appendChild(li);
  });
};
export default builder;