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

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number.");
    }
    else if(guess < 1 || guess > 100){
        alert("Please enter a number between 1 to 100");
    }
}

function checkGuess(guess) {
    //
}

function displayGuess(guess) {
    //
}

function displayMessage(message) {
    //
}