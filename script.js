function getComputerChoice() {
    let choice = Math.floor((Math.random() * 100) + 1);
    
    if (choice < 33) {
        return "rock";
    } else if (choice < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return false;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Computer Selected Rock: It's a tie!";
        } else if (computerSelection === "scissors") {
            return "Computer Selected Scissors: You win!";
        } else {
            return "Computer Selected Paper: You Lose!";        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "rock") {
            return "Computer Selected Rock: You win!";
        } else if (computerSelection === "scissors") {
            return "Computer Selected Scissors: You lose!";
        } else {
            return "Computer Selected Paper: It's a tie!";        }
    } else {
        if (computerSelection === "rock") {
            return "Computer Selected Rock: You lose!";
        } else if (computerSelection === "scissors") {
            return "Computer Selected Scissors: It's a tie!";
        } else {
            return "Computer Selected Paper: You win!";        }
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors, Shoot! - Which do you pick?", "I'm lame!");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection) ? console.log(playRound(playerSelection, computerSelection)): console.log("No selection was made...lame.");
    }
}

game();