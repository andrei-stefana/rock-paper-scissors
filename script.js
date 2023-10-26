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
    return "It is a tie.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose. Paper beats Rock.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win. Paper beats Rock.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose. Rock beats Scissors.";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win. Rock beats Scissors.";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose. Scissors beats Paper.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win. Scissors beats Paper.";
  } else return "undefined";
}

function resultMessage() {
  if (playerScore === 5 && playerScore > computerScore) {
    return "You Won. Try again.";
  } else if (computerScore === 5 && computerScore > playerScore) {
    return "You Lost. Try again.";
  } else {
    return "";
  }
}

const btns = document.querySelectorAll(".play-btn");
btns.forEach((btn) => {
  console.dir(btn);
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    const result = playRound(choice, getComputerChoice());
    console.log(choice, { playerScore, computerScore });

    const resultDiv = document.createElement("div");
    resultDiv.style.color = "#B15EFF";
    resultDiv.classList.add("color-result");
    resultDiv.style.fontFamily = '"Arcade_In", Helvetica, sans-serif';
    resultDiv.style.fontSize = "60px";

    const scoreMsg = `Choice <span class="color-result">${choice}</span> 
                      Player Score <span class="color-result">${playerScore}</span> 
                      Computer Score <span class="color-result">${computerScore}</span> <br><br> 
                      Result <span class="color-result">${result}</span>`;
    const winnerMsg = resultMessage();
    resultDiv.innerHTML = `${scoreMsg} <br> ${winnerMsg}`;

    if (winnerMsg !== "") {
      playerScore = 0;
      computerScore = 0;
    }

    const parentElement = document.querySelector(".results");
    parentElement.innerHTML = "";
    parentElement.appendChild(resultDiv);
  });
});
