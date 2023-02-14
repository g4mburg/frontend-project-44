#!/usr/bin/env node
import nameQuestion from '../src/cli.js';
import logicOfGames from '../src/index.js';

function evenGame() {
  const name = nameQuestion();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.ceil(Math.random() * 100);
    let correctAnswer = '';
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const correctChecker = logicOfGames(i, number, correctAnswer, name);
    console.log(correctChecker);
    if (correctChecker !== 'Correct!') {
      break;
    }
  }
}
evenGame();
