'use strict';
// Elements & Variables
const active0 = document.querySelector('.player--0');
const active1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  active0.classList.toggle('player--active');
  active1.classList.toggle('player--active');
};
// Starting Point
dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
// New Game Button
newGame.addEventListener('click', function () {
  playing = true;
  dice.classList.add('hidden');
  active0.classList.remove('player--winner');
  active1.classList.remove('player--winner');
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
});
// Roll Dice Button
rollDice.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    const rDice = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${rDice}.png`;
    if (rDice !== 1) {
      currentScore += rDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
// Hold Button
hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if player score is 77
    if (scores[activePlayer] >= 77) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
    }
    switchPlayer();
  }
});
