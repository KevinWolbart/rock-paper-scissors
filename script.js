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

function playRound(e) {
    let playerSelection = e.target.className;
    let computerSelection = getComputerChoice();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return false;
    }

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Computer Selected Rock: It's a tie!");
        } else if (computerSelection === "scissors") {
            console.log("Computer Selected Scissors: You win!");
        } else {
            console.log("Computer Selected Paper: You Lose!");        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "rock") {
            console.log("Computer Selected Rock: You win!");
        } else if (computerSelection === "scissors") {
            console.log("Computer Selected Scissors: You lose!");
        } else {
            console.log("Computer Selected Paper: It's a tie!");        }
    } else {
        if (computerSelection === "rock") {
            console.log("Computer Selected Rock: You lose!");
        } else if (computerSelection === "scissors") {
            console.log("Computer Selected Scissors: It's a tie!");
        } else {
            console.log("Computer Selected Paper: You win!");        }
    } 
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector(".paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", playRound);

/*function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors, Shoot! - Which do you pick?", "I'm lame!");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection) ? alert(playRound(playerSelection, computerSelection)): alert("No selection was made...lame.");
    }
}*/