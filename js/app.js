function getComputerChoice () {
    let computerChoice = Math.random()
    if (computerChoice >= 0 && computerChoice < 0.33) {
        return "ROCK"
} else if (computerChoice >= 0.33 && computerChoice < 0.66) {
        return "PAPER"
} else {
        return "SCISSORS"
}
}

function playRound (playerSelection) {
    let play = playerSelection.toUpperCase()
    let computerSelection = getComputerChoice()
    if (play === "ROCK" && computerSelection === "SCISSORS") {
        console.log("Player wins! Rock beats Scissors!")
        return "Player wins"
    } else if (play === "PAPER" && computerSelection === "ROCK") {
        console.log("Player wins! Paper beats Rock!")
        return "Player wins"
    } else if (play === "SCISSORS" && computerSelection === "PAPER") {
        console.log("Player wins! Scissors beats Paper!")
        return "Player wins"
    }

    if (play === "ROCK" && computerSelection === "PAPER") {
        console.log("Computer wins! Paper beats Rock!")
        return "Computer wins"
    } else if (play === "ROCK" && computerSelection === "ROCK") {
        console.log("TIE! Rock ties Rock!")
        return "Tie"
    }

    if (play === "PAPER" && computerSelection === "SCISSORS") {
        console.log("Computer wins! Scissors beats Paper!")
        return "Computer wins"
    } else if (play === "PAPER" && computerSelection === "PAPER") {
        console.log("TIE! Paper ties Paper!")
        return "Tie"
    }

    if (play === "SCISSORS" && computerSelection === "ROCK") {
        console.log("Computer wins! Rock beats Scissors!")
        return "Computer wins"
    } else if (play === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log("TIE! Scissors ties Scissors!")
        return "Tie"
    }
}

// playRound("ROCK")

function bestOf5Game() {

    let playerWins = 0
    let computerWins = 0
    for (let i = 0; i < 5; i++) {
        let result = playRound("ROCK")
        if (result === "Player wins"){
            // console.log("Player wins")
            playerWins += 1
        } else if (result === "Computer wins"){
            // console.log("Computer wins")
            computerWins += 1
        } 
        //     else if (result === "Tie"){
        //     // console.log("Tie")
        // }
}
        if (playerWins > computerWins) {
            console.log(`Player has ${playerWins} Wins, and Computer has ${computerWins} Wins, Player wins!`)
        } else if (playerWins < computerWins) {
            console.log(`Computer has ${computerWins} Wins, and Player has ${playerWins} Wins, Computer wins!`)
        } else {
            console.log(`TIE! Player won ${playerWins} times and Computer won ${computerWins} times!`)
        }

}

bestOf5Game()