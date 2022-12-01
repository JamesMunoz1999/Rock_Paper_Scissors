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

let playerScore = 0
let computerScore = 0

document.querySelector('#rock').addEventListener('click', playRoundRock)

document.querySelector('#paper').addEventListener('click', playRoundPaper)

document.querySelector('#scissors').addEventListener('click', playRoundScissors)

function playRoundRock () {
    let play = "ROCK"
    let computerSelection = getComputerChoice()
    if (play === "ROCK" && computerSelection === "SCISSORS") {
        document.querySelector('#winOrLose').textContent = "Player wins! Rock beats scissors!"
        playerScore += 1
        document.querySelector('#playerScore').textContent = `Player Score: ${playerScore}`
    } 

    if (play === "ROCK" && computerSelection === "PAPER") {
        document.querySelector('#winOrLose').textContent = "Computer wins! Paper beats Rock!"
        computerScore += 1
        document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore}`
    } else if (play === "ROCK" && computerSelection === "ROCK") {
        document.querySelector('#winOrLose').textContent = "TIE! Rock ties Rock!"
    }
    if (playerScore >= 5 && computerScore < 5) {
        document.querySelector('#winner').textContent = "Winner! Player wins!"
    } else if (computerScore >= 5 && playerScore < 5) {
        document.querySelector('#winner').textContent = "Loser! Computer wins!"
    }
}

function playRoundPaper () {
    let play = "PAPER"
    let computerSelection = getComputerChoice()
    if (play === "PAPER" && computerSelection === "ROCK") {
        document.querySelector('#winOrLose').textContent = "Player wins! Paper beats Rock!"
        playerScore += 1
        document.querySelector('#playerScore').textContent = `Player Score: ${playerScore}`
    }

    if (play === "PAPER" && computerSelection === "SCISSORS") {
        document.querySelector('#winOrLose').textContent = "Computer wins! Scissors beats Paper!"
        computerScore += 1
        document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore}`
    } else if (play === "PAPER" && computerSelection === "PAPER") {
        document.querySelector('#winOrLose').textContent = "TIE! Paper ties Paper!"
    }
    if (playerScore >= 5 && computerScore < 5) {
        document.querySelector('#winner').textContent = "Winner! Player wins!"
    } else if (computerScore >= 5 && playerScore < 5) {
        document.querySelector('#winner').textContent = "Loser! Computer wins!"
    }
}

function playRoundScissors () {
    let play = "SCISSORS"
    let computerSelection = getComputerChoice()
    if (play === "SCISSORS" && computerSelection === "PAPER") {
        document.querySelector('#winOrLose').textContent = "Player wins! Scissors beats Paper"
        playerScore += 1
        document.querySelector('#playerScore').textContent = `Player Score: ${playerScore}`
    }

    if (play === "SCISSORS" && computerSelection === "ROCK") {
        document.querySelector('#winOrLose').textContent = "Computer wins! Rock beats Scissors!"
        computerScore += 1
        document.querySelector('#computerScore').textContent = `Computer Score: ${computerScore}`
    } else if (play === "SCISSORS" && computerSelection === "SCISSORS") {
        document.querySelector('#winOrLose').textContent = "TIE! Scissors ties Scissors!"
    }
    if (playerScore >= 5 && computerScore < 5) {
        document.querySelector('#winner').textContent = "Winner! Player wins!"
    } else if (computerScore >= 5 && playerScore < 5) {
        document.querySelector('#winner').textContent = "Loser! Computer wins!"
    }
}



// playRound("ROCK")

// function bestOf5Game() {

//     let playerWins = 0
//     let computerWins = 0
//     for (let i = 0; i < 5; i++) {
//         let result = playRound("ROCK")
//         if (result === "Player wins"){
//             // console.log("Player wins")
//             playerWins += 1
//         } else if (result === "Computer wins"){
//             // console.log("Computer wins")
//             computerWins += 1
//         } 
//         //     else if (result === "Tie"){
//         //     // console.log("Tie")
//         // }
// }
//         if (playerWins > computerWins) {
//             console.log(`Player has ${playerWins} Wins, and Computer has ${computerWins} Wins, Player wins!`)
//         } else if (playerWins < computerWins) {
//             console.log(`Computer has ${computerWins} Wins, and Player has ${playerWins} Wins, Computer wins!`)
//         } else {
//             console.log(`TIE! Player won ${playerWins} times and Computer won ${computerWins} times!`)
//         }

// }

// bestOf5Game()