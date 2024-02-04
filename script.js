function playGame(e) {

    function getUserChoice() {

        let buttonChoice = e.target.id;

        switch (buttonChoice) {
            case "rock":
                buttonChoice = 1;
                break;
            case "paper":
                buttonChoice = 2;
                break;
            case "scissors":
                buttonChoice = 3;
                break;
        }

        console.log('User Choice ' + buttonChoice);
        console.log('Button Choice ' + e.target.id);
        return buttonChoice;

    }

    function getComputerChoice(min, max) {

        min = Math.ceil(min); // include min in the range
        max = Math.floor(max); // include max in the range
        let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

        console.log('Computer Choice ' + randomInt);
        return randomInt;

    }

    function makeRockBeatScissors() {

        let sum = userChoice + computerChoice;
        console.log('Sum ' + sum);

        if (sum === 4) {
            if (userChoice === 1) {
                userChoice += computerChoice;
                console.log('Updated User Choice ' + userChoice);
                return userChoice;
                // return (userChoice += computerChoice);
            } else if (computerChoice === 1) {
                computerChoice += userChoice;
                console.log('Updated Computer Choice ' + computerChoice);
                return computerChoice;
                // return (computerChoice += userChoice);
            }
        }

    }

    function getRoundWinner() {

        function convertUserChoiceToStrings() {

            if ((userChoice === 1) || (userChoice === 4)) {
                return "Rock";
            } else if (userChoice === 2) {
                return "Paper";
            } else if (userChoice === 3) {
                return "Scissors";
            }

        }

        function convertComputerChoiceToStrings() {

            if ((computerChoice === 1) || (computerChoice === 4)) {
                return "Rock";
            } else if (computerChoice === 2) {
                return "Paper";
            } else {
                return "Scissors";
            }

        }

        let userChoiceAsStrings = convertUserChoiceToStrings();
        let computerChoiceAsStrings = convertComputerChoiceToStrings();

        if (userChoice === computerChoice) {
            alert("Try Again!");
        } else if (userChoice < computerChoice) {
            currentRound += 1;
            computerScore += 1;

            alert(
                `You Lose! ${userChoiceAsStrings} loses to ${computerChoiceAsStrings}!`
            );

            let divScores = document.querySelector('#divScores');
            divScores.textContent = `Round ${currentRound} | User Score ${userScore} | Computer Score ${computerScore}`;

        } else {
            currentRound += 1;
            userScore += 1;

            alert(
                `You Win! ${userChoiceAsStrings} beats ${computerChoiceAsStrings}!`
            );

            let divScores = document.querySelector('#divScores');
            divScores.textContent = `Round ${currentRound} | User Score ${userScore} | Computer Score ${computerScore}`;
        }

    }

    function getGameWinner() {

        if (currentRound === 5) {
            if (userScore < computerScore) {
                alert("Sorry, You've Lost the Game!");
            } else { "Congratulations, You've Won the Game!" };
            userScore = 0;
            computerScore = 0;
            currentRound = 0;
        }

    }

    let userChoice = getUserChoice(e);
    let computerChoice = getComputerChoice(1, 3);
    makeRockBeatScissors(userChoice, computerChoice);
    getRoundWinner(userChoice, computerChoice);
    getGameWinner(userScore, computerScore);

}

let userScore = 0;
let computerScore = 0;
let currentRound = 0;

const divButtons = document.querySelector('#divButtons');
divButtons.addEventListener('click', playGame);

