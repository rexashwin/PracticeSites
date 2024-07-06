const clock = document.querySelector('#clock');

setInterval(function (e) {
    const date = new Date();
    // clock.innerHTML = date.toTimeString();
    clock.innerHTML = date.toLocaleTimeString('en-US', { hour12: true });
}, 1000);