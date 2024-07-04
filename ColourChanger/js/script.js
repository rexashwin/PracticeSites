// ## hardcoded onClick functions for every button
// function redFunc() {
//     document.body.style.backgroundColor = "red";
//     document.body.style.color = "white";
// }

// function whiteFunc() {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
// }

// function blueFunc() {
//     document.body.style.backgroundColor = "blue";
//     document.body.style.color = "white";
// }


// ## using event listener and loop
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
            body.style.color = "#fff";
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            body.style.color = "#111";
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
            body.style.color = "#fff";
        }
    });
});