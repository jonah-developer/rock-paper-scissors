let round = 0;
let humanScore = 0;
let computerScore = 0;
const gameDisplayRound = document.querySelector("#game-display-round");
const gameDisplayScore = document.querySelector("#game-display-score");
const gameDisplayWinner = document.querySelector("#game-display-winner");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    if (randomNumber === 2) return "scissors";
}

function getWinner() {
    if (humanScore > computerScore) {
        return "human";
    }
    return "computer";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        gameDisplayRound.textContent = "You win! Rock beats Scissors";
        humanScore++;
        round++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        gameDisplayRound.textContent = "You win! Paper beats Rock";
        humanScore++;
        round++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        gameDisplayRound.textContent = "You win! Scissors beats Paper";
        humanScore++;
        round++;
    } else if (humanChoice === computerChoice) {
        gameDisplayRound.textContent = "It's a tie!";
    } else {
        gameDisplayRound.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        round++;
    }
    gameDisplayScore.textContent = `Computer: ${computerScore} | Human: ${humanScore}`;

    if (round === 5) {
        round = 0;
        humanScore = 0;
        computerScore = 0;
        gameDisplayWinner.textContent = `The ${getWinner()} is the winner!`;
    } else {
        gameDisplayWinner.textContent = "";
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

