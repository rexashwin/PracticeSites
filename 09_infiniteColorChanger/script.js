// Function to generate a random color in hex format
const randomColor = function () {
    let hex = "0123456789ABCDEF";  // A string containing all possible hexadecimal digits
    let color = "#";  // Initialize the color string with '#', as all hex color codes start with this
    for (let i = 0; i < 6; i++) {  // Loop 6 times to create a 6-digit hexadecimal color code
        color += hex[Math.floor(Math.random() * 16)];  // Randomly select one hex digit and append it to the color string
    }
    return color;  // Return the complete hex color code
}

let intervalId;  // A variable to store the interval ID so we can stop the color change later

// Function to start changing the background color every second
function startChangingColor() {
    if (!intervalId){  // Only start if the interval isn't already running
        intervalId = setInterval(changeBgColor, 1000);  // Call changeBgColor every 1000 milliseconds (1 second)
    }

    // Function to change the background color of the webpage
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();  // Set the background color to a randomly generated hex color
    }
}

// Function to stop changing the background color
function stopChangingColor() {
    clearInterval(intervalId);  // Stop the interval using its ID
    intervalId = null;  // Reset the interval ID to null so we can start again later if needed
}

// Event listener for the "Start" button, triggering the color change
document.querySelector("#start").addEventListener('click', startChangingColor);

// Event listener for the "Stop" button, stopping the color change
document.querySelector("#stop").addEventListener('click', stopChangingColor);