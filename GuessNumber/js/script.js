// Generating a random number between (0, 100]
// Using parseInt to convert the floating-point number to an integer
let randomNumber = parseInt(Math.random() * 100 + 1);

// Get references to DOM elements
let submit = document.getElementById("submit");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guessSlot");
let remaining = document.querySelector(".remaining");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

// Create a new button element for starting a new game
let startButton = document.createElement("button");

// Initialize game variables
let prevGuess = []; // Array to store previous guesses
let numGuess = 1; // Counter for the number of guesses
let guessLimit = 10; // Maximum number of guesses allowed

let playGame = true; // Boolean to track if the game is currently active

if (playGame) {
    // Add event listener for the submit button click
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        // Get the user input and convert it to an integer
        let guess = parseInt(userInput.value);
        // Validate the user's guess
        validateGuess(guess);
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number."); // Alert if the input is not a number
    }
    else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 to 100"); // Alert if the number is out of range
    }
    else {
        // Push the valid guess to the array of previous guesses
        prevGuess.push(guess);
        // Check if the guess is correct or needs further validation
        checkGuess(guess);
    }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayGuess(guess); // Display the guess if it is correct
        displayMessage(`You guessed it Right! The number was ${randomNumber}`); // Display success message
        endGame(); // End the game
    }
    else {
        displayGuess(guess); // Display the guess
        // Check if the number of guesses has exceeded the limit
        if (numGuess > guessLimit) {
            displayMessage(`Game Over! The Number was ${randomNumber}`); // Display game over message
            endGame(); // End the game
        } else if (guess < randomNumber) {
            displayMessage(`Number is too Low`); // Indicate the guess is too low
        } else if (guess > randomNumber) {
            displayMessage(`Number is too High`); // Indicate the guess is too high
        }
    }
}

// Function to display the user's guess and update remaining guesses
function displayGuess(guess) {
    userInput.value = ``; // Clear the input field
    guessSlot.innerHTML += `${guess}\t`; // Append the guess to the display
    remaining.innerHTML = `${guessLimit - numGuess}`; // Update remaining guesses
    numGuess++; // Increment the number of guesses
}

// Function to display messages to the user
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Display the message
}

// Function to handle the end of the game
function endGame() {
    userInput.setAttribute('disabled', ''); // Disable the input field
    submit.setAttribute('disabled', ''); // Disable the submit button
    startButton.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // Set up the new game button
    startOver.appendChild(startButton); // Add the new game button to the DOM
    playGame = false; // Set playGame to false to stop the game
    newGame(); // Set up the new game functionality
}

// Since clicking the new game button typically refreshes the page,
// the newGame function may be unnecessary as the page reload handles resetting the game state.
function newGame() {
    startButton.addEventListener('click', function (e) {
        e.preventDefault; // Prevent default behavior
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
        prevGuess = []; // Clear previous guesses
        numGuess = 1; // Reset the number of guesses
        guessSlot.innerHTML = ''; // Clear the display of guesses
        remaining.innerHTML = `${guessLimit - numGuess} `; // Reset remaining guesses
        lowOrHi.innerHTML = ``; // clear the display message
        userInput.removeAttribute('disabled'); // Re-enable the input field
        submit.removeAttribute('disabled'); // Re-enable the submit button
        startOver.removeChild(startButton); // Remove the old button from the DOM
        playGame = true; // Set playGame to true to start the new game
    });
}