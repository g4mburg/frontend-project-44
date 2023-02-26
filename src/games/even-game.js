import nameQuestion from '../cli.js';
import logicOfGames from '../index.js';

export default function evenGame() {
  const name = nameQuestion();
  console.log('Иди нахуй');
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
