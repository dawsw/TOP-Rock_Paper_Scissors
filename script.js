let humanScore = 0;
let computerScore = 0;


function getComputerChoice(number) {
    let result = Math.floor(Math.random() * number);

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
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorButton = document.getElementById("scissors");
    let humanChoice;

    rockButton.addEventListener("click", () => {
        humanChoice = "rock";
        playRound(humanChoice, getComputerChoice(3));
    
    });

    paperButton.addEventListener("click", () => {
        humanChoice = "paper";
        playRound(humanChoice, getComputerChoice(3));
    });

    scissorButton.addEventListener("click", () => {
        humanChoice = "scissors";
        playRound(humanChoice, getComputerChoice(3));
    });

}


function playRound(humanChoice, computerChoice) {
    let humanScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let humanTotal = Number(humanScore.textContent);
    let computerTotal = Number(computerScore.textContent);

    switch(humanChoice + computerChoice) {
        case 'rockpaper':
            computerTotal += 1;
            computerScore.textContent = computerTotal;
            console.log("You lose! Paper beats Rock.");
            break;
        case 'paperscissors':
            computerTotal += 1;
            computerScore.textContent = computerTotal;
            console.log("You lose! Scissors beats Paper.");
            break;
        case 'scissorsrock':
            computerTotal += 1;
            computerScore.textContent = computerTotal;
            console.log("You lose! Rock beats Scissors.");
            break;
        case 'rockscissors':
            humanTotal += 1;
            humanScore.textContent = humanTotal;
            console.log("You Win! Rock beats Scissors.");
            break;
        case 'paperrock':
            humanTotal += 1;
            humanScore.textContent = humanTotal;
            console.log("You Win! Paper beats Rock.");
            break;
        case 'scissorspaper':
            humanTotal += 1;
            humanScore.textContent = humanTotal;
            console.log("You Win! Scissors beats Paper.");
            break;
        default:
            console.log("It's a Tie!");
    }
}

function playGame() {
    let humanPick;
    let computerPick;

    for (let i = 0; i < 5; i++) {
        humanPick = getHumanChoice();
        computerPick = getComputerChoice(3);
        playRound(humanPick, computerPick);
    }

    if (computerScore > humanScore) return console.log("Computer Wins!");
    else if (humanScore > computerScore) return console.log("Human Wins!");
    else return console.log("It's a Draw!");
}

getHumanChoice()
