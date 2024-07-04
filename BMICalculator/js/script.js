let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector("#result");
    let marker = document.querySelector("#marker");

    // check if height input is valid
    if (height === '' || height < 0 || isNaN(height)) {
        // result.appendChild(document.createTextNode(`Please enter a valid height ${height}`));
        result.innerHTML = `Please enter a valid height ${height}`;
    }

    // check if weight input is valid
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        // result.appendChild(document.createTextNode(`Please enter a valid weight ${weight}`));
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }

    // if height and weight is valid proceed with bmi calculation
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        result.innerHTML = `Your BMI is <span>${bmi}</span> kg/m<sup>2</sup>`;

        // show the level
        if (bmi < 18.5) {
            marker.style.backgroundColor = "red";
            marker.innerHTML = "Underweight";
        }
        else if (bmi < 25) {
            marker.style.backgroundColor = "green";
            marker.innerHTML = "Normal";
        }
        else if (bmi < 30) {
            marker.style.backgroundColor = "#ffe400";
            marker.innerHTML = "Overweight";
        }
        else if (bmi > 30) {
            marker.style.backgroundColor = "red";
            marker.innerHTML = "Obesity";
        }
    }
});