#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameQuestion from '../src/cli.js';

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
    const answer = readlineSync.question(`Question: ${number} \n Your answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
      break;
    }
  }
}
evenGame();
