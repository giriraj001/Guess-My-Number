'use strict';
console.log(document.querySelector('.left').textContent);

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let score = 20;
let highscore = 0;
const guess = document.querySelector('.guess').value;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess != number) {
    if (score > 1) {
      console.log(guess < number ? '📉 Too low!' : '📈 Too high!');
      document.querySelector('.message').textContent =
        guess < number ? '📉 Too low!' : '📈 Too high!';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.score').textContent = score;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
