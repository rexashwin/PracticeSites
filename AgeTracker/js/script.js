document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const ageExpected = parseInt(document.getElementById('ageExpected').value);

    if (isNaN(dob.getTime()) || isNaN(ageExpected)) {
        alert("Please enter valid date of birth and age.");
        return;
    }

    const now = new Date();
    const daysLived = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
    const targetDate = new Date(dob);
    targetDate.setFullYear(targetDate.getFullYear() + ageExpected);

    if (targetDate <= now) {
        alert(`You already achieved this age on ${targetDate.toDateString()}`);
        return;
    }

    const daysRemaining = Math.floor((targetDate - now) / (1000 * 60 * 60 * 24));

    const submissionDate = now;
    const storedData = {
        dob: dob.toISOString(),
        submissionDate: submissionDate.toISOString(),
        daysLived: daysLived,
        daysRemaining: daysRemaining
    };

    localStorage.setItem('ageTracker', JSON.stringify(storedData));

    displayResult(storedData);
    createGrid(storedData, submissionDate);
});

window.onload = function () {
    const storedData = localStorage.getItem('ageTracker');

    if (storedData) {
        const data = JSON.parse(storedData);
        const submissionDate = new Date(data.submissionDate);
        displayResult(data);
        createGrid(data, submissionDate);
    }
};

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Days lived since birth: ${data.daysLived}</p>
        <p>Days remaining to the given age: ${data.daysRemaining}</p>
    `;
    const guide = document.getElementById('guide');
    guide.innerHTML = `
        <p>Red is No. of days spent<p>
        <p>White is todays day<p>
        <p>Green is No. of days remaining<p>
    `
}

function createGrid(data, submissionDate) {
    const gridDiv = document.getElementById('grid');
    const daysFromSubmission = Math.floor((new Date() - new Date(submissionDate)) / (1000 * 60 * 60 * 24));
    const totalDays = data.daysRemaining;

    const gridWidth = gridDiv.clientWidth;
    const cellSize = 42; // Including gap and border
    const columns = Math.floor(gridWidth / cellSize);

    gridDiv.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridDiv.innerHTML = '';

    for (let i = 0; i < totalDays; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = i + 1;
        cell.setAttribute('data-day', i + 1); // Set tooltip text

        if (i < daysFromSubmission) {
            cell.classList.add('filled');
        } else if (i === daysFromSubmission) {
            cell.classList.add('current');
        } else {
            cell.classList.add('remaining');
        }

        gridDiv.appendChild(cell);
    }
}
