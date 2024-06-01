
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

function playRound(humanChoice, computerChoice) {
    let humanScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let humanTotal = Number(humanScore.textContent);
    let computerTotal = Number(computerScore.textContent);

    let winner = document.getElementById("winner-announcement");
    let playagainButton = document.querySelector("#playagain-button");

    switch(humanChoice + computerChoice) {
        case 'rockpaper':
            computerTotal += 1;
            computerScore.textContent = computerTotal;
            if (computerScore.textContent == 5) {
                winner.textContent = "You lose. Better luck next time!";
                playagainButton.removeAttribute("hidden");
                playagainButton.style.display = "block";
            }
            break;
        case 'paperscissors':
            computerTotal += 1;
            computerScore.textContent = computerTotal;
            if (computerScore.textContent == 5) {
                winner.textContent = "You lose. Better luck next time!";
                playagainButton.removeAttribute("hidden");
                playagainButton.style.display = "block";
            }
            break;
        case 'scissorsrock':
            computerTotal += 1;
            computerScore.textContent = computerTotal;
            if (computerScore.textContent == 5) {
                winner.textContent = "You lose. Better luck next time!";
                playagainButton.removeAttribute("hidden");
                playagainButton.style.display = "block";
            }
            break;
        case 'rockscissors':
            humanTotal += 1;
            humanScore.textContent = humanTotal;
            if (humanScore.textContent == 5) {
                winner.textContent = "You Win!";
                playagainButton.removeAttribute("hidden");
                playagainButton.style.display = "block";
            }
            break;
        case 'paperrock':
            humanTotal += 1;
            humanScore.textContent = humanTotal;
            if (humanScore.textContent == 5) {
                winner.textContent = "You Win!";
                playagainButton.removeAttribute("hidden");
                playagainButton.style.display = "block";
            }
            break;
        case 'scissorspaper':
            humanTotal += 1;
            humanScore.textContent = humanTotal;
            if (humanScore.textContent == 5) {
                winner.textContent = "You Win!";
                playagainButton.removeAttribute("hidden");
                playagainButton.style.display = "block";
            }
            break;
    }
}

function playGame() {
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorButton = document.getElementById("scissors");

    let humanImage = document.querySelector("#player-choice");
    let clickImageText = document.querySelector("#click-image-text");

    let humanChoice;

    rockButton.addEventListener("click", () => {
        humanChoice = "rock";
        humanImage.src = "images/rock.png";
        clickImageText.style.display = "none";
        playRound(humanChoice, getComputerChoice(3));
    
    });

    paperButton.addEventListener("click", () => {
        humanChoice = "paper";
        humanImage.src = "images/paper.png";
        clickImageText.style.display = "none";
        playRound(humanChoice, getComputerChoice(3));
    });

    scissorButton.addEventListener("click", () => {
        humanChoice = "scissors";
        humanImage.src = "images/scissors.png";
        clickImageText.style.display = "none";
        playRound(humanChoice, getComputerChoice(3));
    });

}

function restartGame() {
    document.querySelector("#player-score").textContent = "0";
    document.querySelector("#computer-score").textContent = "0";
    document.getElementById("playagain-button").style.display = "none";
    document.querySelector("#winner-announcement").textContent = "";
    document.querySelector("#click-image-text").style.display = "block";
}

document.getElementById("playagain-button").addEventListener("click", restartGame);

playGame();
