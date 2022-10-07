function getComputerChoice() {
    let choice = Math.floor((Math.random() * 100) + 1);
    
    if (choice < 33) {
        return "Rock"
    } else if (choice < 66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}



