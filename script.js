function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats Scissors";
  } else {
    return "It's a tie!";
  }
}
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

let playerScore = 0;
let computerScore = 0;
let result = "";

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playerScoreDisplay = document.getElementById("scorep");
let computerScoreDisplay = document.getElementById("scorec");
let winner = document.getElementById("winner");

let playerSelection = "";
rockButton.onclick = () => {
  playerSelection = "rock";
  let computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  checkResult(result);
};

paperButton.onclick = () => {
  playerSelection = "paper";
  let computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  checkResult(result);
};
scissorsButton.onclick = () => {
  playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  checkResult(result);
};

function checkResult(result) {
  winner.textContent="";

  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }
  if (playerScore > 5) {
    winner.textContent="You win!";
    playerScore = 0;
    computerScore = 0;
  } 
  if (computerScore>5) {
    winner.textContent="You lose!";
    playerScore = 0;
    computerScore = 0;
  }
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore; 
}


  
  