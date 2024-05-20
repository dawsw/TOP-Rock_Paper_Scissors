let humanScore = 0;
let computerScore = 0;


function getComputerChoice(number) {
    let result = Math.random(number)

    if (result == 0) {
         return "rock";
    }
    else if (result == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {

    while (true) {
        choice = prompt("Do you choose Rock, Paper, or Scissors?");

        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors")
            return choice;
}}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice, computerChoice) {
        case humanChoice == 'rock' && computerChoice == 'paper':
            computerScore += 1;
            return "You lose! Paper beats Rock.";
        case humanChoice == 'paper' && computerChoice == 'scissors':
            computerScore += 1;
            return "You lose! Scissors beats Paper.";
        case humanChoice == 'scissors' && computerChoice == 'rock':
            computerScore += 1;
            return "You lose! Rock beats Scissors.";
        case humanChoice == 'rock' && computerChoice == 'scissors':
            computerScore += 1;
            return "You Win! Rock beats Scissors.";
        case humanChoice == 'paper' && computerChoice == 'rock':
            computerScore += 1;
            return "You Win! Paper beats Rock.";
        case humanChoice == 'scissors' && computerChoice == 'paper':
            computerScore += 1;
            return "You Win! Scissors beats Paper.";
        case humanChoice == computerChoice:
            return "It's a Tie!";
            
            
    }
}

console.log(getHumanChoice())