//Score
let playerOneScore = 0;
let playerTwoScore = 0;

//Player One Outcomes
const playerOneDiceOutcomeOneArray = [1, 2, 3, 4, 5, 6];
const playerOneDiceOutcomeTwoArray = [1, 2, 3, 4, 5, 6];
const playerOneDiceOutcomeThreeArray = [1, 2, 3, 4, 5, 6];

//Player Two Outcomes
const playerTwoDiceOutcomeOneArray = [1, 2, 3, 4, 5, 6];
const playerTwoDiceOutcomeTwoArray = [1, 2, 3, 4, 5, 6];
const playerTwoDiceOutcomeThreeArray = [1, 2, 3, 4, 5, 6];

//Player One DOM Elements
const playerOneDiceOutcomeOne = document.querySelector('.player-one-outcome-one');
const playerOneDiceOutcomeTwo = document.querySelector('.player-one-outcome-two');
const playerOneDiceOutcomeThree = document.querySelector('.player-one-outcome-three');
const playerOneScoreDiv = document.getElementById('player-one-score');

//Player Two DOM Elements
const playerTwoDiceOutcomeOne = document.querySelector('.player-two-outcome-one');
const playerTwoDiceOutcomeTwo = document.querySelector('.player-two-outcome-two');
const playerTwoDiceOutcomeThree = document.querySelector('.player-two-outcome-three');
const playerTwoScoreDiv = document.getElementById('player-two-score');

//Result Dom Element
const resultDiv = document.getElementById('result');
const finalDiv = document.getElementById('final');

//Roll Button Element
const rollButton = document.querySelector('.roll-button');

//Reset Button Element
const resetButton = document.querySelector('.reset-game');

let resetGame = () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreDiv.textContent = '0';
    playerTwoScoreDiv.textContent = '0';
    resultDiv.textContent = '';
    finalDiv.textContent = '';
    rollButton.style.pointerEvents = "auto";
}


let playerOneWin = (playerOne) => {
    playerOneScore++;
    playerOneScoreDiv.textContent = playerOneScore;
    resultDiv.textContent = playerOne + ' ' + 'Player One WINS!'
    winCondition();
}

let playerTwoWin = (playerTwo) => {
    playerTwoScore++;
    playerTwoScoreDiv.textContent = playerTwoScore;
    resultDiv.textContent = playerTwo + ' ' + 'Player Two WINS!'
    winCondition();
}

let draw = (playerOne, playerTwo) => {
    resultDiv.textContent = playerOne + ' and ' + playerTwo + ' DRAW!  ROLL AGAIN!'
}

let winCondition = () => {
    if (playerOneScore == 5) {
        finalDiv.textContent = 'PLAYER ONE WINS GAME';
        rollButton.style.pointerEvents = "none";
    } else if (playerTwoScore == 5) {
        finalDiv.textContent = 'PLAYER TWO WINS GAME';
        rollButton.style.pointerEvents = "none";
    }

}


let playerTwoRoll = () => {
    const playerTworandomElementOne = playerTwoDiceOutcomeOneArray[Math.floor(Math.random() * playerTwoDiceOutcomeOneArray.length)];
    const playerTworandomElementTwo = playerTwoDiceOutcomeTwoArray[Math.floor(Math.random() * playerTwoDiceOutcomeTwoArray.length)];
    const playerTworandomElementThree = playerTwoDiceOutcomeThreeArray[Math.floor(Math.random() * playerTwoDiceOutcomeThreeArray.length)];
    playerTwoDiceOutcomeOne.textContent = playerTworandomElementOne;
    playerTwoDiceOutcomeTwo.textContent = playerTworandomElementTwo;
    playerTwoDiceOutcomeThree.textContent = playerTworandomElementThree;
    return [playerTworandomElementOne, playerTworandomElementTwo, playerTworandomElementThree];
}


let playerOneRoll = () => {
    const randomElementOne = playerOneDiceOutcomeOneArray[Math.floor(Math.random() * playerOneDiceOutcomeOneArray.length)];
    const randomElementTwo = playerOneDiceOutcomeTwoArray[Math.floor(Math.random() * playerOneDiceOutcomeTwoArray.length)];
    const randomElementThree = playerOneDiceOutcomeThreeArray[Math.floor(Math.random() * playerOneDiceOutcomeThreeArray.length)];
    playerOneDiceOutcomeOne.textContent = randomElementOne;
    playerOneDiceOutcomeTwo.textContent = randomElementTwo;
    playerOneDiceOutcomeThree.textContent = randomElementThree;
    return [randomElementOne, randomElementTwo, randomElementThree];
}

let rank = (playerOneOutcome, playerTwoOutcome) => {
    playerOneOutcome = playerOneRoll();
    playerTwoOutcome = playerTwoRoll();
    let sumPlayerOne = playerOneOutcome.reduce(add, 0);
    let sumPlayerTwo = playerTwoOutcome.reduce(add, 0);
    if (sumPlayerOne > sumPlayerTwo) {
        playerOneWin(playerOneOutcome);
    } else if (sumPlayerTwo > sumPlayerOne) {
        playerTwoWin(playerTwoOutcome);
    } else {
        draw(playerOneOutcome, playerTwoOutcome);
    }
}

let add = (accumulator, a) => {
    return accumulator + a;
}

let main = () => {
    rollButton.addEventListener('click', () => {
        rank();
    })
    resetButton.addEventListener('click', () => {
        resetGame();
    })
}



main();