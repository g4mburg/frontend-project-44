#!/usr/bin/env node
import nameQuestion from '../src/cli.js';
import logicOfGames from '../src/index.js';

function primeGame() {
  const name = nameQuestion();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.ceil(Math.random() * 100);
    let correctAnswer = '';
    const limit = Math.sqrt(number);
    let j = 1;
    while (j <= limit) {
      j += 1;
      if (number % j === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
    const correctChecker = logicOfGames(i, number, correctAnswer, name);
    console.log(correctChecker);
    if (correctChecker !== 'Correct!') {
      break;
    }
  }
}
primeGame();
