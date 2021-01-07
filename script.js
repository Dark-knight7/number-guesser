let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let targetNumber = Math.floor(Math.random(10));
};
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if ((Math.abs(humanGuess - targetNumber)) < (Math.abs(computerGuess - targetNumber))) {
    return true;
  } else if ((Math.abs(humanGuess - targetNumber)) > (Math.abs(computerGuess - targetNumber))) {
    return false;
  }
};
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};
const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
};
updateScore('human');
updateScore('computer');