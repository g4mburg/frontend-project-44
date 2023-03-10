import nameQuestion from '../cli.js';
import logicOfGames from '../index.js';

export default function brainProgression() {
  const name = nameQuestion();
  console.log('What number is missing in the progression?');
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for (let i = 0; i < 3; i += 1) {
    let number;
    let correctAnswer = 0;
    const step = getRandomIntInclusive(2, 7);
    const numberOfHiddenNumber = getRandomIntInclusive(0, 9);
    let currentNumber = getRandomIntInclusive(1, 50);
    for (let j = 0; j < 10; j += 1) {
      if (j === 0) {
        number = currentNumber;
      } else if (j !== numberOfHiddenNumber) {
        number = (`${number} ${currentNumber}`);
      } else {
        correctAnswer = currentNumber;
        number = (`${number} ..`);
      }
      currentNumber += step;
    }
    const correctChecker = logicOfGames(i, number, correctAnswer, name);
    console.log(correctChecker);
    if (correctChecker !== 'Correct!') {
      break;
    }
  }
}
