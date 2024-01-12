// function getComputerChoice(min, max) {

//     min = Math.ceil(min); // makes min inclusive
//     max = Math.floor(max); // makes max inclusive
//     let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

//     let a = "rock";
//     let b = "paper";
//     let c = "scissors";

//     if (randomInt === 1) {
//         return a;
//     } else if (randomInt === 2) {
//         return b;
//     } else {
//         return c;
//     };

// }

// let computerSelection = (getComputerChoice(1,3));
// console.log(computerSelection);

function getComputerChoice(min, max) {
    min = Math.ceil(min); // makes min inclusive
    max = Math.floor(max); // makes max inclusive
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
}

function getUserChoice() {
    let userInput = prompt(
        "Choose one of the following: rock paper scissors",
        ""
    );
    // console.log(userInput);

    userInput = userInput.toLowerCase();
    // console.log(userInput);

    if (userInput === "rock") {
        return (userInput = 1);
    } else if (userInput === "paper") {
        return (userInput = 2);
    } else if (userInput === "scissors") {
        return (userInput = 3);
    } else {
        return (userInput = null);
    }
}

function game() {
    // compare the selections
    function playRound(playerSelection, computerSelection) {
        // convert to strings
        if (computerSelection === 1) {
            computerSelectionAsString = "Rock";
        } else if (computerSelection === 2) {
            computerSelectionAsString = "Paper";
        } else {
            computerSelectionAsString = "Scissors";
        }

        // convert to strings
        if (playerSelection === 1) {
            playerSelectionAsString = "Rock";
        } else if (playerSelection === 2) {
            playerSelectionAsString = "Paper";
        } else if (playerSelection === 3) {
            playerSelectionAsString = "Scissors";
        }

        // compare the selections, alert the results, return the winner of the round
        if (playerSelection === computerSelection || playerSelection === null) {
            alert("Try Again!");
            computerSelection = getComputerChoice(1, 3);
            playerSelection = getUserChoice();
            console.log(playRound(playerSelection, computerSelection));
        } else if (playerSelection < computerSelection) {
            currentRound = currentRound + 1;
            computerScore = computerScore + 1;
            alert(
                `You Lose! ${playerSelectionAsString} loses to ${computerSelectionAsString}!`
            );
            return `Round ${currentRound} | Player Score ${playerScore} | Computer Score ${computerScore}`;
        } else {
            currentRound = currentRound + 1;
            playerScore = playerScore + 1;
            alert(
                `You Win! ${playerSelectionAsString} beats ${computerSelectionAsString}!`
            );
            return `Round ${currentRound} | Player Score ${playerScore} | Computer Score ${computerScore}`;
        }
    }

    // calculate the winner
    function calculateWinner() {
        if (playerScore < computerScore) {
            alert("You're the Loser. Game Over!");
            return "Computer";
        } else {
            alert("You're the Winner. Game Over!");
            return "Player";
        }
    }

    // declare variables
    let currentRound = 0;
    let playerScore = 0;
    let computerScore = 0;

    // round 1
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice(1, 3);
    console.log(playRound(playerSelection, computerSelection));

    // round 2
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice(1, 3);
    console.log(playRound(playerSelection, computerSelection));

    // round 3
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice(1, 3);
    console.log(playRound(playerSelection, computerSelection));

    // round 4
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice(1, 3);
    console.log(playRound(playerSelection, computerSelection));

    // round 5
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice(1, 3);
    console.log(playRound(playerSelection, computerSelection));

    let gameWinner = calculateWinner();
    return `Winner is ${gameWinner}`;
}

console.log(game());
