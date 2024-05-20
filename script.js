let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice(3);
const humanSelection = getHumanChoice();


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
        choice = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();

        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors")
            return choice;
}}

function playRound(humanChoice, computerChoice) {

    switch(humanChoice + computerChoice) {
        case 'rockpaper':
            computerScore += 1;
            return "You lose! Paper beats Rock.";
        case 'paperscissors':
            computerScore += 1;
            return "You lose! Scissors beats Paper.";
        case 'scissorsrock':
            computerScore += 1;
            return "You lose! Rock beats Scissors.";
        case 'rockscissors':
            computerScore += 1;
            return "You Win! Rock beats Scissors.";
        case 'paperrock':
            computerScore += 1;
            return "You Win! Paper beats Rock.";
        case 'scissorspaper':
            computerScore += 1;
            return "You Win! Scissors beats Paper.";
        case humanChoice == computerChoice:
            return "It's a Tie!";
    }
}

console.log(playRound(humanSelection, computerSelection))