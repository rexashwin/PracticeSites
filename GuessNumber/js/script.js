// generating random number between (0,100]
// let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);


let submit = document.getElementById("submit");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guessSlot");
let remaining = document.querySelector(".remaining");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let startButton = document.createElement("button");

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
        // check the guess before counting attempts
        checkGuess(guess);
    }
}

// check the user value with random num and end the game
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayGuess(guess);
        displayMessage(`You guessed it Right! The number was ${randomNumber}`);
        endGame();
    }
    else {
        displayGuess(guess);
        if (numGuess > guessLimit) {
            displayMessage(`Game Over! The Number was ${randomNumber}`);
            endGame();
        } else if (guess < randomNumber) {
            displayMessage(`Number is too Low`);
        } else if (guess > randomNumber) {
            displayMessage(`Number is too High`);
        }
    }
}

function displayGuess(guess) {
    // clear the user value
    userInput.value = ``;
    // display the last guesses to user
    guessSlot.innerHTML += `${guess}\t`;
    // remaining times to play
    remaining.innerHTML = `${guessLimit - numGuess}`;
    // num of times guessed
    numGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    startButton.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(startButton);
    playGame = false;
    newGame();
}

// if using button element to start new game. page will itself get refreshed so no need of newGame function 😂

function newGame() {
    startButton.addEventListener('click', function (e) {
        e.preventDefault;
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${guessLimit - numGuess} `;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(button);

        playGame = true;
    });
}