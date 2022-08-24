import './style.css';

console.log('Hello World from Webpack');
// POST:
// const myfunctionPOST = (url = '', data = {}) => {
//   const option = {
//     method: 'POST',
//     mode: 'cors',
//     headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     body: JSON.stringify(data),
//   };

//   fetch(url, option)
//     .then((response) => response.json()).then((data) => console.log(data.result));
// };
// const dataPOST = {
//   name: 'My cool new game Test',
// };
// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

// myfunctionPOST(url, dataPOST);

const game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0j4WGZsTGaiHYHiDDMYw/scores/';
const myfunctionSCORE = (url = '', data = {}) => {
  const option = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  };

  fetch(url, option)
    .then((response) => response.json()).then((data) => console.log(data.result));
};

const dataSCORE = {
  user: 'Juan Perez',
  score: '99',
};

// myfunctionSCORE(game, dataSCORE);
// myfunctionSCORE(game, dataSCORE);
// myfunctionSCORE(game, dataSCORE);
// myfunctionSCORE(game, dataSCORE);
// myfunctionSCORE(game, dataSCORE);
// myfunctionSCORE(game, dataSCORE);

const myfunctionGET = (url = '') => {
  // const option = {
  //   method: 'POST',
  //   mode: 'cors',
  //   headers: { 'Content-type': 'application/json; charset=UTF-8' },
  //   // body: '',
  // };

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.result))
    .catch(() => console.log('fatality error'));
};

myfunctionGET(game);

// const mytest = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/').then((res) => { console.log(res.json()); }).catch((err) => { console.log(err.ok); });

// POST: https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/
// GET: https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0j4WGZsTGaiHYHiDDMYw/scores/
// TEMPOGAME: 0j4WGZsTGaiHYHiDDMYw