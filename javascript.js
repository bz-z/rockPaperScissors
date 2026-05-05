
let choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0
let winTable = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}


let promptUser = () => {
    let choice = prompt("Enter your choice for Rock-Paper-Scissors", "")
    if (choices.includes(choice)) {
        console.log("Player entered: " + choice.toLowerCase())
        return choice.toLowerCase()
    } else {
        let randomChoice = promptComputer()
        console.log("Player entered invalid option, Computer played for you: " + randomChoice)
        return randomChoice
    }
    
}

let promptComputer = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice
}


let getWinner = (playerChoice, computerChoice) => {
    if (winTable[playerChoice] == computerChoice) {
        return "Player"
    } else if (winTable[computerChoice] == playerChoice) {
        return "Computer"
    } else {
        return "Tie"
    }
}

let applyScore = (condition) => {
    switch (condition) {
        case "Player":
            humanScore += 1
            console.log("Player has earned a score.")
            break
        case "Computer":
            computerScore += 1
            console.log("Computer has earned a score.")
            break
        case "Tie":
            console.log("Tie, no one got a score")
            break
    }
    printScore()
}

let printScore = () => {
    console.log(humanScore + " - " + computerScore)
}



let game = () => {
    let playerChoice = promptUser()
    let computerChoice = promptComputer()
    console.log("Computer entered: " + computerChoice)
    applyScore(getWinner(playerChoice, computerChoice))
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function runGames() {
    while (true) {
        game()

        console.log("Beginning new game in 3 seconds")
        await sleep(20000)
    }
}

runGames()



