function randomColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color);
}

function startChangingColor() {
    setInterval(changeBgColor(), 1000);

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

document.querySelector("#start").addEventListener('click', startChangingColor);