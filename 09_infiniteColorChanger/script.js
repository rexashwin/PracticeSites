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

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);