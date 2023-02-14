import readlineSync from 'readline-sync';

export default function logicOfGames(i, number, correctAnswer, name) {
  const answer = readlineSync.question(`Question: ${number} \n Your answer: `);
  let result = '';
  switch (answer) {
    case correctAnswer:
      result = 'Correct!';
      if (i === 2) {
        result = `Congratulations, ${name}!`;
      }
      break;
    default:
      result = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`;
      break;
  }
  return result;
}
