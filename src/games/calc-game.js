import nameQuestion from '../cli.js';
import logicOfGames from '../index.js';

export default function brainCalc() {
  const name = nameQuestion();
  console.log('What is the result of the expression?');
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for (let i = 0; i < 3; i += 1) {
    let number = getRandomIntInclusive(1, 3);
    let correctAnswer = 0;
    let firstNumber;
    let secondNumber;
    switch (number) {
      case 1:
        firstNumber = getRandomIntInclusive(1, 10);
        secondNumber = getRandomIntInclusive(1, 10);
        number = `${firstNumber} * ${secondNumber}`;
        correctAnswer = `${firstNumber * secondNumber}`;
        break;
      case 2:
        firstNumber = getRandomIntInclusive(1, 100);
        secondNumber = getRandomIntInclusive(1, 100);
        number = `${firstNumber} + ${secondNumber}`;
        correctAnswer = `${firstNumber + secondNumber}`;
        break;
      case 3:
        firstNumber = getRandomIntInclusive(1, 100);
        secondNumber = getRandomIntInclusive(1, 100);
        number = `${firstNumber} - ${secondNumber}`;
        correctAnswer = `${firstNumber - secondNumber}`;
        break;
      default:
        break;
    }
    const correctChecker = logicOfGames(i, number, correctAnswer, name);
    console.log(correctChecker);
    if (correctChecker !== 'Correct!') {
      break;
    }
  }
}
