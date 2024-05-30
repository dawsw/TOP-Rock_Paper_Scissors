let humanScore = 0;
let computerScore = 0;


function getComputerChoice(number) {
    let result = Math.floor(Math.random() * number);
    let image = document.querySelector("#computer-choice");

    if (result == 0) {
        image.src = "images/rock.png"
         return "rock";
    }
    else if (result == 1) {
        image.src = "images/paper.png"
        return "paper";
    }
    else {
        image.src = "images/scissors.png"
        return "scissors";
    }
}


function getHumanChoice() {
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorButton = document.getElementById("scissors");
    let humanImage = document.querySelector("#player-choice");
    let humanChoice;

    rockButton.addEventListener("click", () => {
        humanChoice = "rock";
        humanImage.src = "images/rock.png";
        playRound(humanChoice, getComputerChoice(3));
    
    });

    paperButton.addEventListener("click", () => {
        humanChoice = "paper";
        humanImage.src = "images/rock.png";
        playRound(humanChoice, getComputerChoice(3));
    });

    scissorButton.addEventListener("click", () => {
        humanChoice = "scissors";
        humanImage.src = "images/scissors.png";
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
    let humanScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let humanTotal = Number(humanScore.textContent);
    let computerTotal = Number(computerScore.textContent);
    let winner = document.getElementById("winner-announcement");
    let humanImage = document.querySelector("#player-choice");
    let computerImage = document.querySelector("#computer-choice");

    if (humanTotal == 5 || computerTotal == 5) {
        if (computerTotal === 5) {
            winner.textContent = "You Lose. Better luck next time!";
        }     
        else { 
            winner.textContent = "You Win!";
        }
        
        return;
    }

    getHumanChoice();
}


function restartGame() {
    document.querySelector("#player-score").textContent = "0";
    document.querySelector("#computer-score").textContent = "0";
    document.getElementById("playagain-button").style.display = "none";
    document.querySelector("#winner-announcement").textContent = "";
}

document.getElementById("playagain-button").addEventListener("click", restartGame);

playGame();
