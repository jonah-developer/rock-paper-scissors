const gameDisplay = document.querySelector("#game-display");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    if (randomNumber === 2) return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        gameDisplay.textContent = "You win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        gameDisplay.textContent = "You win! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        gameDisplay.textContent = "You win! Scissors beats Paper";
    } else if (humanChoice === computerChoice) {
        gameDisplay.textContent = "It's a tie!";
    } else {
        gameDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

const gameButtons = document.querySelectorAll("button");
gameButtons.forEach(gameButton => {
    gameButton.addEventListener("click", () => {
        const humanChoice = gameButton.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
});