let playerOutputScore = 0;
let computerOutputScore = 0;

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

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            displayScore("Computer Selected Rock: It's a tie!");
        } else if (computerSelection === "scissors") {
            displayScore("Computer Selected Scissors: You win!");
        } else {
            displayScore("Computer Selected Paper: You Lose!");        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "rock") {
            displayScore("Computer Selected Rock: You win!");
        } else if (computerSelection === "scissors") {
            displayScore("Computer Selected Scissors: You lose!");
        } else {
            displayScore("Computer Selected Paper: It's a tie!");        }
    } else {
        if (computerSelection === "rock") {
            displayScore("Computer Selected Rock: You lose!");
        } else if (computerSelection === "scissors") {
            displayScore("Computer Selected Scissors: It's a tie!");
        } else {
            displayScore("Computer Selected Paper: You win!");        }
    } 
}

function displayScore(result) {
    switch(result) {
        case "Computer Selected Rock: It's a tie!":
            displayMessage.textContent = "Computer Selected Rock: It's a tie!";
            break;
        case "Computer Selected Scissors: You win!":
            displayMessage.textContent = "Computer Selected Scissors: You win!";
            playerOutputScore += 1;
            playerScore.textContent = `Player Score: ${playerOutputScore}`;
            break;
        case "Computer Selected Paper: You Lose!":
            displayMessage.textContent = "Computer Selected Paper: You Lose!";
            computerOutputScore += 1;
            computerScore.textContent = `Computer Score: ${computerOutputScore}`;
            break;
        case "Computer Selected Rock: You win!":
            displayMessage.textContent = "Computer Selected Rock: You win!";
            playerOutputScore += 1;
            playerScore.textContent = `Player Score: ${playerOutputScore}`;
            break;
        case "Computer Selected Scissors: You lose!":
            displayMessage.textContent = "Computer Selected Scissors: You lose!";
            computerOutputScore += 1;
            computerScore.textContent = `Computer Score: ${computerOutputScore}`;
            break;
        case "Computer Selected Paper: It's a tie!":
            displayMessage.textContent = "Computer Selected Paper: It's a tie!";
            break;
        case "Computer Selected Rock: You lose!":
            displayMessage.textContent = "Computer Selected Rock: You lose!";
            computerOutputScore += 1;
            computerScore.textContent = `Computer Score: ${computerOutputScore}`;
            break;
        case "Computer Selected Scissors: It's a tie!":
            displayMessage.textContent = "Computer Selected Scissors: It's a tie!";
            break;
        case "Computer Selected Paper: You win!":
            displayMessage.textContent = "Computer Selected Paper: You win!";
            playerOutputScore += 1;
            playerScore.textContent = `Player Score: ${playerOutputScore}`;
            break;
    }

    if (playerOutputScore === 5) {
        displayMessage.textContent = "You win! Congratulations you are the Rock, Paper, Scissor's champion!";
        playerOutputScore = 0;
        computerOutputScore = 0;
        playerScore.textContent = `Player Score: ${playerOutputScore}`;
        computerScore.textContent = `Computer Score: ${computerOutputScore}`;
    } else if(computerOutputScore === 5) {
        displayMessage.textContent = "You lose! Congratulations you suck!";
        playerOutputScore = 0;
        computerOutputScore = 0;
        playerScore.textContent = `Player Score: ${playerOutputScore}`;
        computerScore.textContent = `Computer Score: ${computerOutputScore}`;
    }
}
const rock = document.querySelector(".rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector(".paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", playRound);

const displayMessage = document.getElementById("displayMessage");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

/*function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors, Shoot! - Which do you pick?", "I'm lame!");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection) ? alert(playRound(playerSelection, computerSelection)): alert("No selection was made...lame.");
    }
}*/