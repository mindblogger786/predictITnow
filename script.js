let timer;
let timerSeconds = 90; // 1 minute 30 seconds

window.onload = startPage();

function startPage(){
    
    updatePeriodID();
    startTimer();
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

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const timerElement = document.getElementById('timer-countdown');
    timerSeconds--;

    if(timerSeconds < 0) {
        startPage();
    } else {
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        timerElement.textContent = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

function selectOption(option) {
    const item = document.getElementById('item');
    if (option == 'green') {
        item.textContent = option.toUpperCase();
        item.style.background = 'green';
        item.style.color = 'white';
    } else if (option == 'red') {
        item.textContent = option.toUpperCase();
        item.style.background = 'red';
        item.style.color = 'white';
    } else if (option == 'blue') {
        item.textContent = option.toUpperCase();
        item.style.background = 'blue';
        item.style.color = 'white';
    } else if (option == 'small') {
        item.textContent = option.toUpperCase();
        item.style.background = 'grey';
        item.style.color = 'white';
    } else {
        item.textContent = option.toUpperCase();
        item.style.background = 'grey';
        item.style.color = 'white';
    } 
}

function selectAmount(amount) {
    const amt = document.getElementById('amount');
    if (amount == '1') {
        amt.textContent = amount;
        amt.style.background = 'grey';
        amt.style.color = 'white';
    } else if (amount == '10') {
        amt.textContent = amount;
        amt.style.background = 'grey';
        amt.style.color = 'white';
    } else if (amount == '50') {
        amt.textContent = amount;
        amt.style.background = 'grey';
        amt.style.color = 'white';
    } else {
        amt.textContent = amount;
        amt.style.background = 'grey';
        amt.style.color = 'white';
    } 
}

function selectMultiples(multiples) {
    const mul = document.getElementById('multiples');
    if (multiples == '1') {
        mul.textContent = multiples;
        mul.style.background = 'grey';
        mul.style.color = 'white';
    } else if (multiples == '2') {
        mul.textContent = multiples;
        mul.style.background = 'grey';
        mul.style.color = 'white';
    } else if (multiples == '5') {
        mul.textContent = multiples;
        mul.style.background = 'grey';
        mul.style.color = 'white';
    } else {
        mul.textContent = multiples;
        mul.style.background = 'grey';
        mul.style.color = 'white';
    }
    totalBet();
}

function totalBet() {
    const amount = document.getElementById('amount');
    const amt = amount.value;
    const multiples = document.getElementById('multiples');
    const mul = multiples.value;
    
    document.getElementById('total').textContent = amt * mul;
}












