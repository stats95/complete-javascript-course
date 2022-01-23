'use strict';

let playerOneScore = 0;
let playerTwoScore = 0;
let playerTwoHold = 0;
let playerOneHold = 0;
// If turn = true then it is player ones turn
let turn = true;

const rollButton = document.querySelector('.btn--roll');
const resetButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');

const p1Score = document.querySelector('#current--0');
const p2Score = document.querySelector('#current--1');

const roll = function () {
  // Need to display new dice face
  // calculate new score

  let rollAmount = Math.trunc(Math.random() * 6) + 1;
  console.log(rollAmount);
  if (rollAmount === 1) {
    turn = !turn;
    playerOneScore = 0;
    playerTwoScore = 0;
  } else if (turn) {
    playerOneScore = playerOneScore + rollAmount;
    p1Score.textContent = playerOneScore;
  } else {
    playerTwoScore = playerTwoScore + rollAmount;
    p2Score.textContent = playerTwoScore;
  }
};

const hold = function () {
  if (turn) {
    playerOneHold = playerOneScore;
  } else {
    playerTwoHold = playerTwoScore;
  }
  turn = !turn;
};

const reset = function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerTwoHold = 0;
  playerOneHold = 0;
  turn = true;
};

rollButton.addEventListener('click', roll);
resetButton.addEventListener('click', reset);
holdButton.addEventListener('click', hold);
