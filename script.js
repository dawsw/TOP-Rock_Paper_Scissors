function getComputerChoice(number) {
    let choice;
    let result = Math.random(number)

    if (result == 0) {
         return choice = "Rock";
    }
    else if (result == 1) {
        return choice = "Paper";
    }
    else {
        return choice = "Scissors";
    }
}