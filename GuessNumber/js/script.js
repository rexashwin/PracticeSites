let submit = document.getElementById("subt");


submit.addEventListener('click', function () {
    let input = document.getElementById("guessField");
    let number = Math.floor(Math.random() * 10 + 1)
    if (input.innerText == number) {
        document.getElementsByClassName("lowOrHi").innerText = "You WIN!";
    }
    else {
        document.getElementsByClassName("lowOrHi").innerText = "You LOSE!";
    }
});
