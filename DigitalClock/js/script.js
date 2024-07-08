let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
    }

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = is24HourFormat 
        ? `${hours}:${minutes}:${seconds}`
        : `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById('clock').innerText = timeString;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    const button = document.getElementById('toggleFormat');
    button.innerText = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
}

document.getElementById('toggleFormat').addEventListener('click', toggleFormat);

// Initial call to display the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
