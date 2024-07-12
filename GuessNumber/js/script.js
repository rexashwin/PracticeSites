// generating random number between (0,100]
// let randomNumber = Math.floor(Math.random() * 100) + 1;
let randomNumber = parseInt(Math.random() * 100 + 1);


let submit = document.getElementById("submit");
let guessField = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guessSlot");
let remaining = document.querySelector(".remaining");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

