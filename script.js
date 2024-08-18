let humanScore = 0;
let computerScore = 0;
const gameDisplayRound = document.querySelector("#game-display-round");
const gameDisplayScore = document.querySelector("#game-display-score");


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    if (randomNumber === 2) return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        gameDisplayRound.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        gameDisplayRound.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        gameDisplayRound.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (humanChoice === computerChoice) {
        gameDisplayRound.textContent = "It's a tie!";
    } else {
        gameDisplayRound.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    gameDisplayScore.textContent = `Computer: ${computerScore} | Human: ${humanScore}`;
}

const gameButtons = document.querySelectorAll("button");
gameButtons.forEach(gameButton => {
    gameButton.addEventListener("click", () => {
        const humanChoice = gameButton.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
});