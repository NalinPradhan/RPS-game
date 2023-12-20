function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats Scissors";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats Paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats Paper";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors";
    }
    else{
        return "It's a tie!";
    }
  }

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
   


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.includes("win")){
            playerScore++;
        }
        else if(result.includes("lose")){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log("You win!");
    }
    else if(playerScore < computerScore){
        console.log("You lose!");
    }
    else{
        console.log("It's a tie!");
    }
}

game();