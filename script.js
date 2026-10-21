const ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rng = Math.random();

    if (rng <= 0.33)
        return "Rock";

    if (rng > 0.33 && rng <= 0.66)
        return "Paper";

    if (rng > 0.66)
        return "Scissors";
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors?");

    // sanitize human input
    choice.toLowerCase();
    choice.at(0).toUpperCase();

    return choice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore++;
            alert("Rock vs Paper! Computer wins!");
        } else if (computerChoice === "Scissors") {
            humanScore++;
            alert("Rock vs Scissors, Player wins!");
        } else {
            alert("Rock vs Rock, It's a draw!");
        }
    }

    if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore++;
            alert("Paper vs Scissors! Computer wins!");
        } else if (computerChoice === "Rock") {
            humanScore++;
            alert("Paper vs Rock, Player wins!");
        } else {
            alert("Paper vs Paper, It's a draw!");
        }
    }

    if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore++;
            alert("Scissors vs Rock! Computer wins!");
        } else if (computerChoice === "Paper") {
            humanScore++;
            alert("Scissors vs Paper, Player wins!");
        } else {
            alert("Scissors vs Scissors, It's a draw!");
        }
    }

    alert(`Computer: ${computerScore} ::: Player: ${humanScore}`);

}

function playGame() {
    let endMessage = "";

    for (let i = 0; i < ROUNDS; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        endMessage += "You win: ";
    } else if (humanScore < computerScore) {
        endMessage += "You lose: ";
    } else {
        endMessage += "It's a draw: ";
    }

    endMessage += `${humanScore} vs ${computerScore}`;
    alert(endMessage);
}

playGame();