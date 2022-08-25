import './style.css';
import Leaderboard from './modules/mainClass.js';
console.log('Hello World from Webpack');
// POST:

const leaderboard = new Leaderboard();

console.log(leaderboard.getScores());