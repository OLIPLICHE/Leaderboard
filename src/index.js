/* eslint-disable import/extensions */
import './style.css';
import postScores from './api.js';
import getScores from './getScores.js';
import showScores from './newGame.js';
import showError from './localserver.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');
const gameApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GDUN7EKtNyCRpmru02cT/scores';

refresh.addEventListener('click', () => {
  getScores(gameApi).then((data) => showScores(data.result));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showError();
  postScores(gameApi);
});

window.onload = getScores(gameApi).then((data) => showScores(data.result));
