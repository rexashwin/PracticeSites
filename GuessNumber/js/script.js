// generating random number between (0,100]
// let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber = parseInt(Math.random() * 100 + 1);


let submit = document.getElementById("submit");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guessSlot");
let remaining = document.querySelector(".remaining");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let guessLimit = 10;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        // get the user value in int
        let guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}

// validate the guess value 
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    }
    else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 to 100");
    }
    // if the guess value is okay
    else {
        // last guessed is pushes to array so can be displayed to user
        prevGuess.push(guess);
        // check the limit for game play
        if (numGuess > guessLimit) {
            displayGuess(guess);
            displayMessage(`Game over! Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// check the user value with random num and end the game
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it Right! \n Random number was ${randomNumber}`);
        endGame();
    }
}

function displayGuess(guess) {
    //
}

function displayMessage(message) {
    // clear the user value
    userInput.value = ``;
    // display the last guesses to user
    guessSlot.innerHTML += `${guess}`;
    // num of times guessed
    numGuess++;
    // remaining times to guess
    remaining.innerHTML = `${guessLimit - numGuess}`;
}

function endGame() {
    // 
}

function newGame() {
    // 
}