
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const winTable = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

const promptComputer = () => { //return "rock, paper, or scissors"
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    return computerChoice;
};


const handleButtonGroup = (event) => {
    const pressed = event.target.id;
    
}

const buttonGroup = document.querySelector('.buttonContainer');
buttonGroup.addEventListener("click", handleButtonGroup);



const consoleDisplay = document.querySelector('.consoleDisplay');
const printConsole = (msg) => {
    consoleDisplay.textContent = msg;
}


