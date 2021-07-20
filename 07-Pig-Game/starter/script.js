'use strict';
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerOneScore = document.getElementById('score--0');
const playerTwoScore = document.getElementById('score--1');
const playerOneCurrent = document.getElementById('current--0');
const playerTwoCurrent = document.getElementById('current--1');

const setScore = function (score) {
  activePLayerScore.textContent = score;
};
const setCurrent = function (current) {
  activePlayerCurrent.textContent = current;
};

const generateRandomNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
};
// could do this in a init like final script
let activePlayer = playerOne;
let activePLayerScore = playerOneScore;
let activePlayerCurrent = playerOneCurrent;
let score = 0;
let current = 0;

// switches active player and set current to 0
const switchCurrentPlayer = function () {
  current = 0;
  setCurrent(current);
  activePlayer.classList.remove('player--active');
  activePlayer = activePlayer === playerOne ? playerTwo : playerOne;

  activePLayerScore =
    activePLayerScore === playerOneScore ? playerTwoScore : playerOneScore;

  activePlayerCurrent =
    activePlayerCurrent === playerOneCurrent
      ? playerTwoCurrent
      : playerOneCurrent;

  activePlayer.classList.add('player--active');
  score = Number(activePLayerScore.textContent);
};

//click listener for dice roll
rollDice.addEventListener('click', function () {
  if (score < 100) {
    const rand = generateRandomNumber();
    diceImage.src = `dice-${rand}.png`;
    if (rand != 1) {
      current = current + rand;
      setCurrent(current);
    } else {
      switchCurrentPlayer();
    }
  }
});

// holds current and adds to score
hold.addEventListener('click', function () {
  score = score + current;
  setScore(score);
  current = 0;
  setCurrent(current);
  if (score >= 100) {
    activePlayer.classList.add('player--winner');
  } else {
    switchCurrentPlayer();
  }
});

// resets
newGame.addEventListener('click', function () {
  activePlayer = playerOne;
  activePLayerScore = playerOneScore;
  activePlayerCurrent = playerOneCurrent;
  score = 0;
  current = 0;
  playerOne.classList.remove('player--active', 'player--winner');
  playerTwo.classList.remove('player--active', 'player--winner');

  playerOne.classList.add('player--active');
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
});
