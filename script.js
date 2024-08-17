let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else if (computerChoice === "scissors") {
            humanScore++;
            console.log("You won! Rock beats Scissors");
        } else {
            console.log("It's a tie!");
            return "tie";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        } else if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else {
            console.log("It's a tie!");
            return "tie";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        } else if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");
        } else {
            console.log("It's a tie!");
            return "tie";
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
