'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 123;

// document.querySelector('.guess').value = 2;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  if (score > 0) {
    score--;
    const guess = Number(document.querySelector('.guess').value);
    switch (guess) {
      case 0:
        console.log('test');
        document.querySelector('.message').textContent = 'No Number!';
        break;
      case number:
        score++;
        highscore = highscore < score ? score : highscore;
        document.querySelector('.message').textContent = `Correct Number!`;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        document.querySelector('.highscore').textContent = highscore;
        break;
      default:
        if (guess > number) {
          document.querySelector(
            '.message'
          ).textContent = `Higher than Number!`;
        } else {
          document.querySelector('.message').textContent = `Lower than number!`;
          break;
        }
    }
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = `You Lose!`;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').textContent = '';
});
