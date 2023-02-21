#!/usr/bin/env node
import nameQuestion from '../src/cli.js';
import logicOfGames from '../src/index.js';

function brainGCD() {
  const name = nameQuestion();
  console.log('Find the greatest common divisor of given numbers.');
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getGCD(a, b) {
    while (a !== b) {
      if (a < b) {
        const c = a;
        a = b;
        b = c;
      }
      a -= b;
    }
    return a;
  }
  for (let i = 0; i < 3; i += 1) {
    let number = getRandomIntInclusive(1, 3);
    let correctAnswer = 0;
    const firstNumber = getRandomIntInclusive(1, 100);
    const secondNumber = getRandomIntInclusive(1, 100);

    number = `${firstNumber} ${secondNumber}`;

    correctAnswer = getGCD(firstNumber, secondNumber);
    const correctChecker = logicOfGames(i, number, correctAnswer, name);
    console.log(correctChecker);
    if (correctChecker !== 'Correct!') {
      break;
    }
  }
}
brainGCD();
