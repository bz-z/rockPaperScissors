//DOM variables
const playerChoosing = document.querySelector('.playerChoosing');
const computerChoosing = document.querySelector('.computerChoosing');
const computerScoreDOM = document.querySelector('#computerScore')
const playerScoreDOM = document.querySelector('#playerScore')

//Trackers
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const winTable = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

const addPlayerScore = () => {
    playerScore += 1;
    playerScoreDOM.textContent = `Player Score: ${playerScore}`;

}


const addComputerScore = () => {
    computerScore += 1;
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`;

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

const promptComputer = () => { //return "rock, paper, or scissors"
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
};


const handleButtonGroup = (event) => {
    const playerChoice = event.target.id;
    const computerChoice = promptComputer()

    //Changes the display to match choices
    changeDisplay(playerChoice, playerChoosing);
    changeDisplay(computerChoice, computerChoosing);

    // "Player", "Tie", or "Computer"
    const result = getWinner(playerChoice, computerChoice); 
    handleResult(result);
}

const handleResult = (result) => {
    switch (result) {
        case 'Player':
            addPlayerScore();
            printConsole("Player Won.");
            break;
        case 'Computer':
            addComputerScore();
            printConsole("Computer Won.");
            break;
        case 'Tie':
            printConsole("Tie.");
    }
}



const changeDisplay = (str, doc) => {
    doc.textContent = str;
}


const buttonGroup = document.querySelector('.buttonContainer');
buttonGroup.addEventListener("click", handleButtonGroup);

const consoleDisplay = document.querySelector('.consoleDisplay');
const printConsole = (msg) => {
    consoleDisplay.textContent = msg;
}


