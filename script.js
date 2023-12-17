let timer;
let timerSeconds = 90; // 1 minute 30 seconds
let predictionActive = false;

function startPrediction() {
    if (!predictionActive) {
        predictionActive = true;
        startTimer();
        // Add logic to send the prediction data to the server
    }
}

// Function to generate 8-digit ID starting with '23'
function generateID() {
    const prefix = '23';
    const randomDigits = Math.floor(Math.random() * 100000000); // Random 8-digit number
    return prefix + String(randomDigits).padStart(6, '0');
}

// Function to update the span with the generated ID
function updatePeriodID() {
    const periodSpan = document.getElementById('period');
    const generatedID = generateID();
    periodSpan.textContent = `${generatedID}`;
}

// Call the update function when the page loads
window.onload = updatePeriodID;



function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById('timer-countdown');
    timerSeconds--;

    if (timerSeconds < 0) {
        clearInterval(timer);
        predictionActive = false;
        timerElement.textContent = 'Time Expired!';
    } else {
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        timerElement.textContent = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

function selectOption(option) {
    if (predictionActive) {
        // Add logic to handle the selected option
        console.log(`Selected Option: ${option}`);
    } else {
        console.log('Prediction period has not started yet.');
    }
}

function selectAmount(amount) {
    if (predictionActive) {
        // Add logic to handle the selected amount
        console.log(`Selected Amount: ${amount}`);
    } else {
        console.log('Prediction period has not started yet.');
    }
}
