/* eslint-disable semi */
import './style.css';
import { createNewGame, getGames, submitScore } from './newGame';

const output = (scores) => {
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.classList.add('score');
    li.innerHTML = `<span>${user}:</span> <span>${score}</span>`;
    scoresList.appendChild(li);
  });
};

const myForm = document.getElementById('form');
const inputForm = myForm.querySelectorAll('input');
const refreshBtn = document.querySelector('.refresh');
const gameName = 'paka';
window.addEventListener('load', async () => {
  const result = await createNewGame(gameName);
  const id = result.split(' ')[3];
  myForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = inputForm[0].value;
    const score = inputForm[1].value;
    const data = {
      user,
      score,
    };
    await submitScore(data, id);
    myForm.reset();
  });
  refreshBtn.addEventListener('click', async () => {
    const res = await getGames(id);
    output(res);
  });
});
