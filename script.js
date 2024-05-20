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

console.log(getHumanChoice())