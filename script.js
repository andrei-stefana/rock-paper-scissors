const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It is a tie";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else return "undefined";
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result, {playerScore, computerScore});
  }
}

function resultMessage() {
  if (playerScore > computerScore) {
    return "You Won! Congrats! Reload to try again.";
  } else {
    return "You Lost! Reload and try again.";
  }
}

prompt(game())
console.log(resultMessage())
