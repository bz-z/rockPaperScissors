
let choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0
let winTable = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

let promptComputer = () => {
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice
}


let game = () => { //called when player chooses a choice
    
}

let buttonGroup = document.querySelector('.buttonContainer')

buttonGroup.addEventListener()




